(function() {
  c3dl.addMainCallBack(canvasMain, "SceneCaster3d");
  //Paths
  const WALL_PATH = ("./models/wall/cube.dae");
  const CHAIR_PATH = ("./models/chair.dae");
  const TABLE_PATH = ("./models/table.dae");

  //Adding Models
  c3dl.addModel(WALL_PATH);
  c3dl.addModel(CHAIR_PATH);
  c3dl.addModel(TABLE_PATH);
  c3dl.addModel("./models/sky/skysphere.dae");
  //Command pattern
  var commands = [];
  var curcmd = -1;
  
  //Base Class
  var Command = function() {
    this.execute = function() {};
    this.unexecute = function() {}; 
  };
  
  //delete Command
  var deleteSelectedCommand = function deleteSelectedCommand() {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.execute = function() {
      var delNum;
      for (i = 0; i < numObjects; i++)
      {
      if (objects[i] === objectSelected)
        {
          delNum = i;
        }
      }
      for (i = delNum; i < numObjects - 1; i++)
      {
        objects[i] = objects[i + 1];
      }
      scn.removeObjectFromScene(objectSelected);
      objectSelected = null;
      numObjects--;
    };
    this.unexecute = function() {
      scn.addObjectToScene(this.objectSelected);
      objectSelected=this.objectSelected;
      objects = this.objects;
      numObjects++;
    };
  };
  
  //create Command
  var createObjectCommand = function createObjectCommand(objID) {
    Command.call();
    this.objects = objects;
    this.objectSelected =objectSelected;
    this.objID = objID;
    this.newobject;
    this.execute = function() {
      if (! this.newobject) {
        objects[numObjects] = new c3dl.Collada();
        var isValid = true;

        switch (this.objID)
        {
        case 0:
          objects[numObjects].init(CHAIR_PATH);
          break;
        case 1:
          objects[numObjects].init(TABLE_PATH);
          break;
        default:
          isValid = false;
          break;
        }

        if (isValid)
        {
          objects[numObjects].scale([0.2, 0.2, 0.2]);
          scn.addObjectToScene(objects[numObjects]);
          if (objectSelected) objectSelected.setEffect(c3dl.effects.STANDARD);
          this.newobject = objectSelected = objects[numObjects];
          objectSelected.setEffect(selectedEffect);
        }
      }
      else {
        scn.addObjectToScene(this.newobject);
        if (objectSelected) objectSelected.setEffect(c3dl.effects.STANDARD);
        objectSelected = objects[numObjects] =  this.newobject;
        objectSelected.setEffect(selectedEffect);
      }
      numObjects++;
      };
    this.unexecute = function() {
      numObjects--;
      scn.removeObjectFromScene(this.newobject);
      objectSelected=this.objectSelected;
      objects = this.objects;
    };
  };
  
  //copy command
  var copySelectedCommand = function copySelectedCommand() {
    Command.call();
    this.objects = objects;
    this.objectSelected =objectSelected;
    this.newobject;
    this.execute = function() {
      var temp = [];
      objects[numObjects] = new c3dl.Collada();
      objects[numObjects].init(objectSelected.getPath());
      objects[numObjects].setPosition([objectSelected.getPosition()[0], objectSelected.getPosition()[1], objectSelected.getPosition()[2] - objectSelected.getWidth()-1]);
      scn.addObjectToScene(objects[numObjects]);
      objectSelected.setEffect(c3dl.effects.STANDARD);
      temp[0] = objectSelected.getLength();
      temp[1] = objectSelected.getHeight();
      temp[2] = objectSelected.getWidth();
      this.newobject = objectSelected = objects[numObjects];
      objectSelected.setEffect(selectedEffect);
      objectSelected.setSize(temp[0], temp[2], temp[1]);
      numObjects++;
    };
    this.unexecute = function() {
      numObjects--;
      scn.removeObjectFromScene(this.newobject);
      objectSelected=this.objectSelected;
      objects = this.objects;
    };
  };

  //move command
  var moveObjectCommand = function moveObjectCommand(sPos) {
    Command.call();
    this.objectSelected = objectSelected;
    this.sPos = sPos;
    this.ePos;
    this.execute = function() {
    if (!this.ePos)
      this.ePos = this.objectSelected.getPosition();
    this.objectSelected.setPosition(this.ePos);
    };
    this.unexecute = function() {
      this.ePos= this.objectSelected.getPosition();
      this.objectSelected.setPosition(this.sPos); 
    };
  };
  //edit light command
  var lightCommand = function lightCommand() {
    Command.call();
    this.sLight = lights[0].getDiffuse();
    this.eLight = 0;
    this.execute = function() {
    if (!this.eLight)
      this.eLight = lights[0].getDiffuse();
    for (i = 0; i < numLights; i++)
      lights[i].setDiffuse(this.eLight);
    };
    this.unexecute = function() {
      this.eLight= lights[0].getDiffuse();
      for (i = 0; i < numLights; i++)
        lights[i].setDiffuse(this.sLight);
    };
  };
  
  //scale Command
  var scaleCommand = function scaleCommand(length, width, height) {
    Command.call();
    this.objectSelected = objectSelected;
    this.oldHheight = objectSelected.getHeight();
    this.oldWidth = objectSelected.getWidth();
    this.oldLength = objectSelected.getLength();
    this.length= length; 
    this.width=width; 
    this.height=height;
    this.execute = function() {
      this.objectSelected.setSize(this.length, this.width, this.height);
    };
    this.unexecute = function() {
      this.objectSelected.setSize(this.oldLength,this.oldWidth,this.oldHheight);
    };
  };
  //rotate command
  var rotateObjectCommand = function rotateObjectCommand() {
    Command.call();
    this.rot;
    this.objectSelected = objectSelected;
    this.execute = function(rot) {
      if (this.rot)
        this.objectSelected.yaw(this.rot);
      else 
        this.rot =rot;
    };
    this.unexecute = function() {
      this.objectSelected.yaw(-this.rot);
    };
  };
  //new page command
  var deleteSceneCommand = this.deleteSceneCommand = function deleteSceneCommand() {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.numLights = numLights;
    this.numWalls = numWalls;
    this.numObjects = numObjects;
    this.lights = lights;
    this.walls = walls;
    this.execute = function(rot) {
      for (i = 0; i < numObjects; i++)
        scn.removeObjectFromScene(objects[i]);
      for (i = 0; i < numWalls; i++)
        scn.removeObjectFromScene(walls[i]);
      for (i = 0; i < numLights; i++)
        scn.removeLight(lights[i]);
      numLights = 0;
      numWalls = 0;
      numObjects = 0;
      //empty hidden feild of objects
      document.getElementById('objects').value = "";
    };
    this.unexecute = function() {
      objects=this.objects;
      objectSelected=this.objectSelected;
      numLights=this.numLights;
      numWalls=this.numWalls;
      numObjects=this.numObjects;
      lights=this.lights; 
      walls= this.walls;
      for (i = 0; i < numObjects; i++)
        scn.addObjectToScene(objects[i]);
      for (i = 0; i < numWalls; i++)
        scn.addObjectToScene(walls[i]);
      for (i = 0; i < numLights; i++)
        scn.addLight(lights[i]);
    };
  };
  
  var objectSelected = null;
  var widget = [];
  var selectedEffect = null;
  var buttons = [];
  var moveObject;
  var worldCoords
  var zoom = 0;
  var camHeight = 50;
  var newCamHeight;
  var numLights = 0;
  var lights = [];
  var numWalls = 0;
  var walls = [];
  var objects = [];
  var numObjects = 0;
  var rot = 0;
  camLeftRight = null;
  camUpDown = null;

  // Create a cameras
  var cam = [];
  cam[0] = new c3dl.FreeCamera();
  cam[1] = new c3dl.FreeCamera();
  cam[2] = new c3dl.FreeCamera();
  cam[3] = new c3dl.FreeCamera();
  cam[4] = new c3dl.FreeCamera();
  cam[5] = new c3dl.FreeCamera();
  var zcam = [];
  zcam[0] = new c3dl.FreeCamera();
  zcam[1] = new c3dl.FreeCamera();
  zcam[2] = new c3dl.FreeCamera();
  zcam[3] = new c3dl.FreeCamera();
  zcam[4] = new c3dl.FreeCamera();
  zcam[5] = new c3dl.FreeCamera();
  var currentCam = 1;
  const CAM_MOVE_SPEED = 5;
  const SIDEWAYS = 0;
  const FORWARD = 1;

  // Canvas
  const CANVAS_WIDTH = 500;
  const CANVAS_HEIGHT = 500;

  //Floor
  const FLOOR_PATH = "./models/plane/plane.dae";
  c3dl.addModel(FLOOR_PATH);

  //Keys
  const KEY_LEFT = 37;
  const KEY_UP = 38;
  const KEY_RIGHT = 39;
  const KEY_DOWN = 40;
  const KEY_CTRL = 17;
  const KEY_A = 65;
  const KEY_W = 87;
  const KEY_S = 83;
  const KEY_D = 68;
  const KEY_SHIFT = 16;
  // mouse screen coords and button states
  var mouseX = 0;
  var mouseY = 0;
  var selEndWorldCoords = [0, 0];
  var mouseButtonsDown = (
    function mouseButtonsDown()
    {
      var BTN1 = false,
        BTN2 = false,
        BTN3 = false;
      return {
        "BTN1": BTN1,
        "BTN2": BTN2,
        "BTN3": BTN3
      };
    }
  )();
  // keyboard button states
  var keysDown = (
  function keysDown()
    {
      var key_up = false,
        key_down = false,
        key_left = false,
        key_right = false,
        key_ctrl = false,
        key_w = false,
        key_a = false,
        key_s = false,
        key_d = false,
        key_shift = false;
      return {
        "KEY_UP": key_up,
        "KEY_DOWN": key_down,
        "KEY_LEFT": key_left,
        "KEY_RIGHT": key_right,
        "KEY_CTRL": key_ctrl,
        "KEY_W": key_w,
        "KEY_A": key_a,
        "KEY_S": key_s,
        "KEY_D": key_d,
        "KEY_SHIFT": key_shift
      };
    }
  )();


  //When a key is pressed down
  function onKeyDown(event)
  {
    switch (event.keyCode)
    {
    case KEY_UP:
      keysDown.KEY_UP = true;
      break;
    case KEY_DOWN:
      keysDown.KEY_DOWN = true;
      break;
    case KEY_RIGHT:
      keysDown.KEY_RIGHT = true;
      break;
    case KEY_LEFT:
      keysDown.KEY_LEFT = true;
      break;
    case KEY_CTRL:
      keysDown.KEY_CTRL = true;
      break;
    case KEY_W:
      keysDown.KEY_W = true;
      break;
    case KEY_A:
      keysDown.KEY_A = true;
      break;
    case KEY_S:
      keysDown.KEY_S = true;
      break;
    case KEY_D:
      keysDown.KEY_D = true;
      break;
    case KEY_SHIFT:
      keysDown.KEY_SHIFT = true;
      break;
    default:
      break;
    }
  }
  //When a key is released down
  function onKeyUp(event)
  {
    switch (event.keyCode)
    {
    case KEY_UP:
      keysDown.KEY_UP = false;
      break;
    case KEY_DOWN:
      keysDown.KEY_DOWN = false;
      break;
    case KEY_RIGHT:
      keysDown.KEY_RIGHT = false;
      break;
    case KEY_LEFT:
      keysDown.KEY_LEFT = false;
      break;
    case KEY_CTRL:
      keysDown.KEY_CTRL = false;
      break;
    case KEY_W:
      keysDown.KEY_W = false;
      break;
    case KEY_A:
      keysDown.KEY_A = false;
      break;
    case KEY_S:
      keysDown.KEY_S = false;
      break;
    case KEY_D:
      keysDown.KEY_D = false;
      break;
    case KEY_SHIFT:
      keysDown.KEY_SHIFT = false;
      break;
    default:
      break;
    }
  }
  //When a button is pressed from html
  var buttonOn = this.buttonOn = function buttonOn(buttonID)
  {
    switch (buttonID)
    {
    case 0:
      buttons[0] = true;
      if (objectSelected) {
         curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd;i < commands.length;i++)
            commands[i] = null;
          
        }
        commands[curcmd] =new moveObjectCommand(objectSelected.getPosition());
      }
      break;
    case 1:
      buttons[1] = true;
       if (objectSelected) {
         curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd;i < commands.length;i++)
            commands[i] = null;
          
        }
        commands[curcmd] =new moveObjectCommand(objectSelected.getPosition());
      }
      break;
    case 2:
      buttons[2] = true;
      if (objectSelected) {
         curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd;i < commands.length;i++)
            commands[i] = null;
          
        }
        commands[curcmd] =new rotateObjectCommand();
        rot = 0;
      }
      break;
    case 3:
      buttons[3] = true;
      if (objectSelected) {
        curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd;i < commands.length;i++)
            commands[i] = null;
          
      }
      commands[curcmd] =new rotateObjectCommand();
      rot = 0;
      }
      break;
    case 4:
      buttons[4] = true;
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd;i < commands.length;i++)
          commands[i] = null;
        
      }
      commands[curcmd] =new lightCommand();
      break;
    case 5:
      buttons[5] = true;
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd;i < commands.length;i++)
          commands[i] = null;
        
      }
      commands[curcmd] =new lightCommand();
      break;
    case 6:
      buttons[6] = true;
      break;
    case 7:
      buttons[7] = true;
      break;
    case 8:
      buttons[8] = true;
      break;
    case 9:
      buttons[9] = true;
      break;
    case 10:
      buttons[10] = true;
      break;
    case 11:
      buttons[11] = true;
      break;
    case 12:
      buttons[12] = true;
      break;
    case 13:
      buttons[13] = true;
      break;
    default:
      break;
    }
  }
  //When a button is released from html
  var buttonOff = this.buttonOff = function buttonOff(buttonID)
  {
    switch (buttonID)
    {
    case 0:
      buttons[0] = false;
      if (objectSelected)
        commands[curcmd].execute();
      break;
    case 1:
      buttons[1] = false;
      if (objectSelected)
        commands[curcmd].execute();
      break;
    case 2:
      buttons[2] = false;
      commands[curcmd].execute(rot);
      break;
    case 3:
      buttons[3] = false;
      commands[curcmd].execute(rot);
      break;
    case 4:
      buttons[4] = false;
      commands[curcmd].execute();
      break;
    case 5:
      buttons[5] = false;
      commands[curcmd].execute();
      break;
    case 6:
      buttons[6] = false;
      break;
    case 7:
      buttons[7] = false;
      break;
    case 8:
      buttons[8] = false;
      break;
    case 9:
      buttons[9] = false;
      break;
    case 10:
      buttons[10] = false;
      break;
    case 11:
      buttons[11] = false;
      break;
    case 12:
      buttons[12] = false;
      break;
    case 13:
      buttons[13] = false;
      break;
    default:
      break;
    }
  }

  // The program main
  function canvasMain(canvasName)
  {
    // Create new c3dl.Scene object
    scn = new c3dl.Scene();
    scn.setCanvasTag(canvasName);
    show2d();
    // Create GL context
    renderer = new c3dl.WebGL();
    renderer.createRenderer(this);

    // Attach renderer to the scene
    scn.setRenderer(renderer);

    if (scn.init(canvasName))
    {
      //skybox
      sm = new c3dl.Collada();
      sm.init("./models/sky/skysphere.dae");
      sm.setTexture("./models/sky/sky.jpg");
      // Effect used when game objects are selected
      selectedEffect = new c3dl.Effect();
      selectedEffect.init(c3dl.effects.SEPIA);
      selectedEffect.setParameter("color", [0.3, 0.6, 0.9]);

      scn.setAmbientLight([0, 0, 0, 0]);
      createLight(0, 0);
      var floor = [];
      for (var i = 0; i < 4; i++)
      {
        floor[i] = new c3dl.Collada();
        floor[i].init(FLOOR_PATH);
        floor[i].scale([10, 1, 10]);
        floor[i].setPickable(false);
        scn.addObjectToScene(floor[i]);
      }
      floor[0].setPosition([-50, 0, -50]);
      floor[1].setPosition([-50, 0, 50]);
      floor[2].setPosition([50, 0, -50]);
      floor[3].setPosition([50, 0, 50]);

      //create an object
      createWall([-25, 0, -25], [25, 0, -25]);
      createWall([25, 0, -25], [25, 0, 25]);
      createWall([25, 0, 25], [-25, 0, 25]);
      createWall([-25, 0, 25], [-25, 0, -25]);


      cam[0].setPosition([0, camHeight, 1]);
      zcam[0].setPosition(cam[0].getPosition());
      zcam[0].setLookAtPoint([0.0, 0.0, 0.0]);

      // Place the camera at the origin.
      // Canvas3d uses a right handed co-ordinate system.
      cam[1].setPosition(new Array(0, camHeight, 15));
      newCamHeight = camHeight;
      // Point the camera.
      // Here it is pointed directly along the z-axis
      zcam[1].setPosition(cam[1].getPosition());
      zcam[1].setLookAtPoint([0.0, 0.0, 0.0]);
      
      cam[2].setPosition(new Array(15, camHeight, 0));
      zcam[2].setPosition(cam[2].getPosition());
      zcam[2].setLookAtPoint([0.0, 0.0, 0.0]);

      cam[3].setPosition(new Array(0, camHeight, -15));
      zcam[3].setPosition(cam[3].getPosition());
      zcam[3].setLookAtPoint([0.0, 0.0, 0.0]);

      cam[4].setPosition(new Array(-15, camHeight, 0));
      zcam[4].setPosition(cam[4].getPosition());
      zcam[4].setLookAtPoint([0.0, 0.0, 0.0]);
      
      // Add the camera to the scene
      scn.setCamera(zcam[currentCam]);
      scn.setSkyModel(sm);
      // Start the scene
      scn.startScene();

      // tell the scene what function to use when
      // a mouse event is detected
      scn.setUpdateCallback(update);
      scn.setKeyboardCallback(onKeyUp, onKeyDown);
      scn.setMouseCallback(mouseUp, mouseDown, mouseMove, mouseWheel);
      scn.setPickingCallback(pickingHandler);
    }
  }

  // This function is the callback that is passed to the scene.
  // When a mouse down event is detected this function is called.
  // The handler is given an object that knows what button was
  // pressed and has a list of objects picked.
  function pickingHandler(result)
  {
   var objectsPicked = result.getObjects();
    if (objectSelected)
    {
      objectSelected.setEffect(c3dl.effects.STANDARD);
      //objectSelected.setDrawBoundingBox(false);
      objectSelected = null;
    }
    if (objectsPicked.length > 0)
    {
      // get the object that was picked
      objectSelected = objectsPicked[0];
      objectSelected.setEffect(selectedEffect);
      //objectSelected.setDrawBoundingBox(true);
    }
  }      

  function update(deltaTime)
  {

    if (keysDown.KEY_CTRL) {      
        camLeftRight = (mouseX -250) /500;
        camUpDown = (250- mouseY) /500;
    }
    //update slider position
    $("#updownslider").slider("value", camHeight);
    $("#zoomslider").slider("value", zoom);

    //empty hidden feild of objects
    document.getElementById('objects').value = "";

    //check topview to disable rotation 
    if (currentCam == 0) document.getElementById('topview').value = "true";
    else document.getElementById('topview').value = "false";

    //set scene to current camera
    scn.setCamera(zcam[currentCam]);

    var moveAmount = CAM_MOVE_SPEED * deltaTime / 100;

    //move selected object up 
    if (buttons[0] && objectSelected)
    {
      var curpos = objectSelected.getPosition();
      objectSelected.setPosition([curpos[0], curpos[1] + 1, curpos[2]]);  
    }
    //move selected object down 
    else if (buttons[1] && objectSelected)
    {
      var curpos = objectSelected.getPosition();
      objectSelected.setPosition([curpos[0], curpos[1] - 1, curpos[2]]);
    }
    //rotate selected object left
    else if (buttons[2] && objectSelected)
    {
      rot += -0.1;
      objectSelected.yaw(-0.1)
    }
    //rotate selected object right
    else if (buttons[3] && objectSelected)
    {
      rot += 0.1;
      objectSelected.yaw(0.1)
    }
    //light up
    else if (buttons[4])
    {
      var aLight = lights[0].getDiffuse();
      for (i = 0; i < numLights; i++)
      if (aLight[1] < 2) lights[i].setDiffuse([aLight[0] + 0.1, aLight[1] + 0.1, aLight[2] + 0.1, aLight[3] + 0.1]);
    }
    //light down
    else if (buttons[5])
    {
      var aLight = lights[0].getDiffuse();
      for (i = 0; i < numLights; i++)
      if (aLight[1] > 0) lights[i].setDiffuse([aLight[0] - 0.1, aLight[1] - 0.1, aLight[2] - 0.1, aLight[3] - 0.1]);
    }
    //ud Up 
    else if (buttons[6])
    {
      if (camHeight < 100) camHeight += 5;
    }
    //ud Down 
    else if (buttons[7])
    {
      if (camHeight > 5) camHeight -= 5;
    }
    //zoom in 
    else if (buttons[8])
    {
      if (zoom < 100) zoom += 5;
    }
    //zoom out 
    else if (buttons[9])
    {
      if (zoom > 5) zoom -= 5;
    }
    //move forward
    else if (buttons[10])
    {
      moveCamera(FORWARD, moveAmount);
    }
    //move backward
    else if (buttons[11])
    {
      moveCamera(FORWARD, -moveAmount);
    }
    //move left
    else if (buttons[12])
    {
      moveCamera(SIDEWAYS, moveAmount);
    }
    //move right
    else if (buttons[13])
    {
      moveCamera(SIDEWAYS, -moveAmount);
    }

    //use arrow key to move camera
    if (keysDown.KEY_LEFT || keysDown.KEY_A)
    {
      moveCamera(SIDEWAYS, moveAmount);
    }
    else if (keysDown.KEY_RIGHT || keysDown.KEY_D)
    {
      moveCamera(SIDEWAYS, -moveAmount);
    }
    if (keysDown.KEY_UP || keysDown.KEY_W)
    {
      moveCamera(FORWARD, moveAmount);
    }
    else if (keysDown.KEY_DOWN || keysDown.KEY_S)
    {
      moveCamera(FORWARD, -moveAmount);
    }

    //move selected object to mouse postion
    if (moveObject && objectSelected)
    {
      var curpos = objectSelected.getPosition();
      worldCoords = getworldCoords(mouseX, mouseY);
      objectSelected.setPosition([worldCoords[0], curpos[1], worldCoords[2]]);
    }

    //Camera stuff
    //setting height
    if (newCamHeight - camHeight)
    {
      var chdif = (newCamHeight - camHeight);
      newCamHeight = camHeight;
      cam[currentCam].setPosition([cam[currentCam].getPosition()[0], cam[currentCam].getPosition()[1] - chdif, cam[currentCam].getPosition()[2]]);
    }
    //zooming
    var zoomInDir = c3dl.multiplyVector(zcam[currentCam].getDir(), zoom);
    zcam[currentCam].setPosition(c3dl.addVectors(cam[currentCam].getPosition(), zoomInDir));

    //rotating at the point of zoom
    if (currentCam)
    {
      zcam[currentCam].rotateOnAxis([0, 1, 0], -camLeftRight / 10);
      zcam[currentCam].pitch(-camUpDown / 10);
    }
    //repositioning the camera after rotating it
    zoomInDir = c3dl.multiplyVector(zcam[currentCam].getDir(), zoom);
    cam[currentCam].setPosition(c3dl.subtractVectors(zcam[currentCam].getPosition(), zoomInDir))

    for (i = 0; i < numObjects; i++)
    {
      var objPos = [];
      objPos[0] = (objects[i].getPosition()[0] - objects[i].getLength() / 2).toFixed(2);
      objPos[1] = (objects[i].getPosition()[2] + objects[i].getWidth() / 2).toFixed(2);
      objPos[2] = (objects[i].getLength()).toFixed(2);
      objPos[3] = (objects[i].getWidth()).toFixed(2);
      document.getElementById('objects').value = document.getElementById('objects').value + objPos + ",";
    }
  }

  //fuction to move the camera
  function moveCamera(direction, amount)
  {
    if (direction === SIDEWAYS)
    {
      var temp = zcam[currentCam].getLeft();
      var dir = c3dl.multiplyVector([temp[0], 0, temp[2]], amount);
      cam[currentCam].setPosition(c3dl.addVectors(cam[currentCam].getPosition(), dir));
    }
    else if (direction === FORWARD)
    {
      var temp = zcam[currentCam].getLeft();
      var dir = c3dl.multiplyVector([temp[0], 0, temp[2]], amount);
      var rotmat = c3dl.makeMatrix(Math.cos(90*Math.PI/180), 0, Math.sin(90*Math.PI/180), 0, 
						         0, 1, 0, 0, 
						         -Math.sin(90*Math.PI/180), 0, Math.cos(90*Math.PI/180), 0, 
						         0, 0, 0, 1);
    c3dl.transposeMatrix(rotmat);					      
    dir = c3dl.multiplyMatrixByVector(rotmat, dir) ;
      cam[currentCam].setPosition(c3dl.addVectors(cam[currentCam].getPosition(), dir));
    }
  }

  function mouseUp(event)
  {
    if (moveObject)
      commands[curcmd].execute();
    moveObject = false;
    tiltHoyKey = false;
  }

  function mouseDown(event)
  {
    if (objectSelected)
    {
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd;i < commands.length;i++)
          commands[i] = null;
        
      }
      commands[curcmd] =new moveObjectCommand(objectSelected.getPosition());
      moveObject = true;
    }
    else 
      tiltHoyKey = true;
  }

  function mouseMove(event)
  {
    // get mouse coords relative to window
    var viewportCoords = getClickedCoords(event);
    mouseX = viewportCoords[0];
    mouseY = viewportCoords[1];
  }

  function mouseWheel(event)
  {
   var delta = 0;

    // Chromium
    if (event.wheelDelta) {
      delta = -event.wheelDelta / 20;
    }
    // Minefield
    else if (event.detail) {
      delta = event.detail * 4;
    }
    if (keysDown.KEY_SHIFT) {
      if (-delta < 0) {
        if (camHeight > 5) camHeight -= 5;
      }
      // towards screen
      else {
        if (camHeight < 100) camHeight += 5;
      }
    }
    else {
      // towards user
      if (-delta < 0) {
        if (zoom > 5) zoom -= 5;
      }
      // towards screen
      else {
        if (zoom < 100) zoom += 5;
      }
    }
  }

  function getClickedCoords(event)
  {
    var canvas = scn.getCanvas();
    var canvasPosition = c3dl.getObjectPosition(scn.getCanvas());
    // event.clientX and event.clientY contain where the user clicked 
    // on the client area of the browser
    // canvasPosition holds the coordinate of the top left corner where the canvas resides
    // on the client area.
    // window.pageXOffset, window.pageYOffset hold how much the user has scrolled.
    var X = event.clientX - canvasPosition[0] + window.pageXOffset - 1;
    var Y = event.clientY - canvasPosition[1] + window.pageYOffset - 1;
    return [X, Y];
  }

  function getworldCoords(mmx, mmy)
  {
    if (mmx != null && mmy != null)
    {
      // NDC
      var normalizedDeviceCoords = [(2 * mmx / CANVAS_WIDTH) - 1, -((2 * mmy / CANVAS_HEIGHT) - 1), 1, 1];

      // Sometimes this is called before the perspective transform
      // is setup which causes warnings. This check prevents that.
      if (c3dl.isValidMatrix(scn.getProjectionMatrix()))
      {
        var iproj = c3dl.inverseMatrix(scn.getProjectionMatrix());

        // To get the clip coords, we multiply the viewspace coordinates by
        // the projection matrix.
        // Working backwards across the pipeline, we have to take the normalized
        // device coordinates and multiply by the inverse projection matrix to get
        // the clip coordinates.
        var clipCoords = c3dl.multiplyMatrixByVector(iproj, normalizedDeviceCoords);

        // perspective divide
        clipCoords[0] /= clipCoords[3];
        clipCoords[1] /= clipCoords[3];
        clipCoords[2] /= clipCoords[3];
        clipCoords[2] = -clipCoords[2];

        var rayInitialPoint = zcam[currentCam].getPosition();

        var x = clipCoords[0];
        var y = clipCoords[1];
        var z = clipCoords[2];

        var kludge = c3dl.multiplyVector(zcam[currentCam].getLeft(), -1);
        var viewMatrix = c3dl.makePoseMatrix(kludge, zcam[currentCam].getUp(), zcam[currentCam].getDir(), zcam[currentCam].getPosition());

        var rayTerminalPoint = c3dl.multiplyMatrixByVector(viewMatrix, [x, y, z, 0]);
        var rayDir = c3dl.normalizeVector(rayTerminalPoint);

        // get angle
        var angle = Math.acos(-1 * rayDir[1]);
        var camHeight = rayInitialPoint[1];

        var hyp = camHeight / Math.cos(angle);

        selEndWorldCoords[0] = hyp * rayDir[0] + rayInitialPoint[0];
        selEndWorldCoords[1] = hyp * rayDir[2] + rayInitialPoint[2];
        return [selEndWorldCoords[0], hyp * rayDir[1], selEndWorldCoords[1]];
      }
    }
  }

  //create objects using a factory pattern
  var createObject = this.createObject = function createObject(objID)
  {
    curcmd++;
    if (curcmd <= commands.length - 1) {
      for (var i = curcmd;i < commands.length;i++)
        commands[i] = null;
      
    }
    commands[curcmd] =new createObjectCommand(objID);
    commands[curcmd].execute();
  }
  
  var deleteSelected = this.deleteSelected = function deleteSelected()
  {
    if (objectSelected)
    {
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd;i < commands.length;i++)
          commands[i] = null;
        
      }
      commands[curcmd] =new deleteSelectedCommand();
      commands[curcmd].execute();
    }
  }
  
  var undo = this.undo = function undo()
  {
    if (curcmd >= 0) {
      commands[curcmd--].unexecute();
    }
  }
    var redo = this.redo = function redo()
  {
    if (commands[curcmd+1]) {
      commands[++curcmd].execute();
    }
  }
  //copys selected object stats and creates a new one
  var copySelected = this.copySelected = function copySelected()
  { 
    if (objectSelected)
    {
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd;i < commands.length;i++)
          commands[i] = null;
        
      }
      commands[curcmd] =new copySelectedCommand();
      commands[curcmd].execute();
    }
  }

  //creates a positional light at specified position 
  var createLight = this.createLight = function createLight(posX, posZ)
  {
    lights[numLights] = new c3dl.PositionalLight();
    lights[numLights].setPosition([posX, 10, posZ]);
    lights[numLights].setDiffuse([2, 2, 2, 2]);
    lights[numLights].setOn(true);
    scn.addLight(lights[numLights]);
    numLights++;
  }

  //deletes seleted positional light
  var deleteLight = this.deleteLight = function deleteLight(lightnum)
  {
    scn.removeLight(lights[lightnum]);
    for (var k = lightnum; k < numLights - 1; k++)
    {
      lights[k] = lights[k + 1];
    }
    numLights--;
  }

  //moves seleted positional light
  var moveLight = this.moveLight = function moveLight(lightnum, posX, posZ)
  {
    lights[lightnum].setPosition([posX, 10, posZ])
  }
  //creates a wall from one specified position to another 
  var createWall = this.createWall = function createWall(posStart, posEnd)
  {
    walls[numWalls] = new c3dl.Collada();
    walls[numWalls].init(WALL_PATH);
    walls[numWalls].setTexture("./models/wall/wall-texture.jpg");
    //calc length
    var triA = (posStart[0] + 100) - (posEnd[0] + 100);
    var triB = (posStart[2] + 100) - (posEnd[2] + 100);

    //set position
    var wallpos = [];
    var averageX = (Math.abs(posStart[0]) + Math.abs(posEnd[0])) / 2
    if (posEnd[0] < 0 && posStart[0] < 0) wallpos[0] = -averageX;
    else if (posStart[0] < 0 && posStart[0] < posEnd[0]) wallpos[0] = posStart[0] + averageX;
    else if (posEnd[0] < 0 && posStart[0] > posEnd[0]) wallpos[0] = posEnd[0] + averageX;
    else wallpos[0] = averageX;

    wallpos[1] = 5;

    var averageZ = (Math.abs(posStart[2]) + Math.abs(posEnd[2])) / 2
    if (posEnd[2] < 0 && posStart[2] < 0) wallpos[2] = -averageZ;
    else if (posStart[2] < 0 && posStart[2] < posEnd[2]) wallpos[2] = posStart[2] + averageZ;
    else if (posEnd[2] < 0 && posStart[2] > posEnd[2]) wallpos[2] = posEnd[2] + averageZ;
    else wallpos[2] = averageZ;
    walls[numWalls].setPosition(wallpos);

    //calc walllength pythagorean theorem
    var walllength = Math.sqrt(sq(triA) + sq(triB));

    //no rotation
    if (posStart[0] === posEnd[0] || posStart[2] === posEnd[2])
    {
      walls[numWalls].scale([(posStart[0] === posEnd[0]) ? 1 : walllength / 2 + 1, 5, (posStart[2] === posEnd[2]) ? 1 : walllength / 2 + 1]);
    }

    //calc angle to rotate cos law
    else
    {
      walls[numWalls].scale([walllength / 2 + 1, 5, 1]);
      theta = 180 * Math.acos((sq(walllength) + sq(triA) - sq(triB)) / (2 * walllength * triA)) / Math.PI;
      if (posEnd[2] < posStart[2]) theta = 360 - theta;
      walls[numWalls].yaw((theta * Math.PI) / 180);
    }
    //add object to scene
    walls[numWalls].setPickable(false);
    scn.addObjectToScene(walls[numWalls]);
    numWalls++;
  }

  //deletes seleted wall
  var deleteWall = this.deleteWall = function deleteWall(wallnum)
  {
    scn.removeObjectFromScene(walls[wallnum]);
    for (var k = wallnum; k < numWalls - 1; k++)
    {
      walls[k] = walls[k + 1];
    }
    numWalls--;
  }

  //moves seleted wall
  var moveWall = this.moveWall = function moveWall(wallnum, posStart, posEnd)
  {
    scn.removeObjectFromScene(walls[wallnum]);
    walls[wallnum] = new c3dl.Collada();
    walls[wallnum].init(WALL_PATH);
    walls[wallnum].setTexture("./models/wall/wall-texture.jpg");
    var triA = (posStart[0] + 100) - (posEnd[0] + 100);
    var triB = (posStart[2] + 100) - (posEnd[2] + 100);

    //set position
    var wallpos = [];
    var averageX = (Math.abs(posStart[0]) + Math.abs(posEnd[0])) / 2
    if (posEnd[0] < 0 && posStart[0] < 0) wallpos[0] = -averageX;
    else if (posStart[0] < 0 && posStart[0] < posEnd[0]) wallpos[0] = posStart[0] + averageX;
    else if (posEnd[0] < 0 && posStart[0] > posEnd[0]) wallpos[0] = posEnd[0] + averageX;
    else wallpos[0] = averageX;

    wallpos[1] = 5;

    var averageZ = (Math.abs(posStart[2]) + Math.abs(posEnd[2])) / 2
    if (posEnd[2] < 0 && posStart[2] < 0) wallpos[2] = -averageZ;
    else if (posStart[2] < 0 && posStart[2] < posEnd[2]) wallpos[2] = posStart[2] + averageZ;
    else if (posEnd[2] < 0 && posStart[2] > posEnd[2]) wallpos[2] = posEnd[2] + averageZ;
    else wallpos[2] = averageZ;
    walls[wallnum].setPosition(wallpos);

    //calc walllength pythagorean theorem
    var walllength = Math.sqrt(sq(triA) + sq(triB));

    //no rotation
    if (posStart[0] === posEnd[0] || posStart[2] === posEnd[2])
    {
      walls[wallnum].scale([(posStart[0] === posEnd[0]) ? 1 : walllength / 2 + 1, 5, (posStart[2] === posEnd[2]) ? 1 : walllength / 2 + 1]);
    }

    //calc angle to rotate cos law
    else
    {
      walls[wallnum].scale([walllength / 2 + 1, 5, 1]);
      theta = 180 * Math.acos((sq(walllength) + sq(triA) - sq(triB)) / (2 * walllength * triA)) / Math.PI;
      if (posEnd[2] < posStart[2]) theta = 360 - theta;
      walls[wallnum].yaw((theta * Math.PI) / 180);
    }
    //add object to scene
    walls[wallnum].setPickable(false);
    scn.addObjectToScene(walls[wallnum]);
  }

  var forwardCam = this.forwardCam = function forwardCam()
  {
    if (currentCam == 4) currentCam = 0;
    else currentCam++;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }

  var backCam = this.backCam = function backCam()
  {
    if (currentCam == 0) currentCam = 4;
    else currentCam--;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }

  var topView = this.topView = function topView()
  {
    currentCam = 0;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }

  //square function
  function sq(x)
  {
    return x * x
  }

  var show2d = this.show2d = function show2d()
  {
    document.getElementById("main2d").setAttribute("style", "display:inline;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    pause3d();
    unpause2d();
  }

  var show3d = this.show3d =function show3d()
  {
    document.getElementById("main3d").setAttribute("style", "display:inline;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    unpause3d();
    pause2d();
  }

  var showgoogle = this.showgoogle = function showgoogle()
  {
    document.getElementById("maingoogle").setAttribute("style", "display:inline;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
  }

  var Pressed = this.Pressed = function Pressed(bvalue)
  {
    var bpressed = document.getElementById('pressed');
    bpressed.value = bvalue;
  }

  var scale = this.scale = function scale()
  {
    if (objectSelected)
    {
      pause3d();
      var tester = window.open("scale.html", "Window2", "width=300,height=250");
    }
  }

  var getSize = this.getSize = function getSize()
  {
    var size = [];
    size[0] = objectSelected.getLength();
    size[1] = objectSelected.getHeight();
    size[2] = objectSelected.getWidth();
    return size;
  }

  var setSize = this.setSize = function setSize(length, width, height)
  {
    curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd;i < commands.length;i++)
          commands[i] = null;
        
      }
      commands[curcmd] =new scaleCommand(length, width, height);
      commands[curcmd].execute();
  }

  var getPic = this.getPic = function getPic(length, width, height)
  {
    var path = "images/sidebar/";
    if (objectSelected.getPath() === CHAIR_PATH) path = path + "chair.jpg";
    else if (objectSelected.getPath() === TABLE_PATH) path = path + "table.jpg";
    return path;
  }

  //pausing and unpausing the 2d and 3d to increase speed
  function pause3d()
  {
    scn.pauseScene();
    Processing.getInstanceById("CameraWidget").loop();  
  }

  var unpause3d = this.unpause3d = function unpause3d()
  {
    scn.unpauseScene();
    Processing.getInstanceById("CameraWidget").loop();  
  }

  function pause2d()
  {
    Processing.getInstanceById("SceneCaster2d").noLoop();
  }

  function unpause2d()
  {
    Processing.getInstanceById("SceneCaster2d").loop();
  }

  //Camera widget sliders
  $(function ()
  {
    // zoom slider
    $('#zoomslider').slider(
    {
      min: 0,
      max: 100,
      values: zoom,
      orientation: 'vertical',
      slide: function (event, ui)
      {
        zoom = ui.value - 1;
      }
    });

    // up and down slider
    $('#updownslider').slider(
    {
      min: 5,
      max: 100,
      values: camHeight,
      orientation: 'vertical',
      slide: function (event, ui)
      {
        camHeight = ui.value - 1;
      }
    });
  });
})();