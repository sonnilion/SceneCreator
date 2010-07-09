(function () {
  c3dl.addMainCallBack(canvasMain, "SceneCaster3d");
 
  ////////////////////////////////////////////////////////////////////////////
  // Model Used
  ////////////////////////////////////////////////////////////////////////////  
  //Paths
  const WALL_PATH  = ("./models/wall/cube.dae");
  const CHAIR_PATH = ("./models/chair.dae");
  const TABLE_PATH = ("./models/table.dae");
  const FLOOR_PATH = ("./models/plane/plane.dae");
  const DUCK_PATH = ("./models/duck.dae");
  const PACMAN_PATH = ("./models/pacman.dae");
  const REDGHOST_PATH = ("./models/redghost.dae");
  const BLUEGHOST_PATH = ("./models/blueghost.dae");
  const ORANGEGHOST_PATH = ("./models/orangeghost.dae");
  const PINKGHOST_PATH = ("./models/pinkghost.dae");
  const PACMANBALL_PATH = ("./models/ball.dae");
  //Adding Models
  c3dl.addModel(WALL_PATH);
  c3dl.addModel(CHAIR_PATH);
  c3dl.addModel(TABLE_PATH);
  c3dl.addModel(FLOOR_PATH);
  c3dl.addModel(PACMAN_PATH);
  c3dl.addModel(REDGHOST_PATH);
  c3dl.addModel(BLUEGHOST_PATH);
  c3dl.addModel(ORANGEGHOST_PATH);
  c3dl.addModel(PINKGHOST_PATH);
  c3dl.addModel(PACMANBALL_PATH);
  c3dl.addModel("./models/sky/skysphere.dae");
  
  ////////////////////////////////////////////////////////////////////////////
  // Variables
  ////////////////////////////////////////////////////////////////////////////
  var objectSelected   = null,
      selectedEffect   = null,
      buttons          = [],
      moveObject       = null,
      worldCoords      = null,
      zoom             = 0,
      camHeight        = 10,
      newCamHeight     = null,
      lights           = [],
      numLights        = 0,
      walls            = [],
      numWalls         = 0,
      objects          = [],
      numObjects       = 0,
      rot              = 0,
      camLeftRight     = null,
      camUpDown        = null,
      scaling          = false,
      sceneName        = null,
      scalingObject    = null,
      models           = [],
      wallPos2d        = [],
      enclosures       = [],
      usedWalls        = [],
      objLocalTree     = null,
      eTree            = new ETree,
      pointsUsed       = [],
      closedNodes      = [],
      tiltHotKey       = false,
      heightZoomHotKey = false;
  //Command
  var commands = [],
      curcmd = -1;
  
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
  
  // mouse screen coords and button states
  var mouseX            = 0,
      mouseY            = 0,
      selEndWorldCoords = [0, 0];
      
  var mouseButtonsDown = (
    function mouseButtonsDown() {
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
  function keysDown() {
      var key_up = false,
        key_down = false,
        key_left = false,
        key_right = false,
        key_e = false,
        key_w = false,
        key_a = false,
        key_s = false,
        key_d = false,
        key_q = false;
      return {
        "KEY_UP": key_up,
        "KEY_DOWN": key_down,
        "KEY_LEFT": key_left,
        "KEY_RIGHT": key_right,
        "KEY_E": key_e,
        "KEY_W": key_w,
        "KEY_A": key_a,
        "KEY_S": key_s,
        "KEY_D": key_d,
        "KEY_Q": key_q
      };
    }
  )();
  
  ////////////////////////////////////////////////////////////////////////////
  // Constants 
  ////////////////////////////////////////////////////////////////////////////
  const CAM_MOVE_SPEED = 2;
  const SIDEWAYS = 0;
  const FORWARD = 1;
  // Canvas
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 600;
  //Keys
  const KEY_LEFT = 37;
  const KEY_UP = 38;
  const KEY_RIGHT = 39;
  const KEY_DOWN = 40;
  const KEY_E = 69;
  const KEY_A = 65;
  const KEY_W = 87;
  const KEY_S = 83;
  const KEY_D = 68;
  const KEY_Q = 81;

  ////////////////////////////////////////////////////////////////////////////
  // Functions 
  ////////////////////////////////////////////////////////////////////////////
  //When a key is pressed down
  function onKeyDown(event) {
    switch (event.keyCode) {
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
    case KEY_E:
      keysDown.KEY_E = true;
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
    case KEY_Q:
      keysDown.KEY_Q = true;
      break;
    default:
      break;
    }
  }
  
  //When a key is released down
  function onKeyUp(event) {
    switch (event.keyCode) {
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
    case KEY_E:
        heightZoomHotKey =  (heightZoomHotKey)? false : true;
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
    case KEY_Q:
      tiltHotKey =  (tiltHotKey)? false : true;
      break;
    default:
      break;
    }
  }
  
  //When a button is pressed from html
  var buttonOn = this.buttonOn = function buttonOn(buttonID) {
    switch (buttonID) {
    case 0:
      buttons[0] = true;
      if (objectSelected) {
        curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd, l = commands.length; i < l; i++) {
            commands[i] = null;
          }
        }
        commands[curcmd] = new moveObjectCommand(objectSelected.getPosition());
      }
      break;
    case 1:
      buttons[1] = true;
      if (objectSelected) {
        curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd, l = commands.length; i < l; i++) {
            commands[i] = null;
          }
        }
        commands[curcmd] = new moveObjectCommand(objectSelected.getPosition());
      }
      break;
    case 2:
      buttons[2] = true;
      if (objectSelected) {
        curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd, l = commands.length; i < l; i++) {
            commands[i] = null;
          }
        }
        commands[curcmd] = new rotateObjectCommand();
        rot = 0;
      }
      break;
    case 3:
      buttons[3] = true;
      if (objectSelected) {
        curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd, l = commands.length; i < l; i++) {
            commands[i] = null;
          }
        }
        commands[curcmd] = new rotateObjectCommand();
        rot = 0;
      }
      break;
    case 4:
      buttons[4] = true;
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd, l = commands.length; i < l; i++) {
          commands[i] = null;
        }
      }
      commands[curcmd] = new lightCommand();
      break;
    case 5:
      buttons[5] = true;
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd, l = commands.length; i < l; i++) {
          commands[i] = null;
        }
      }
      commands[curcmd] = new lightCommand();
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
  var buttonOff = this.buttonOff = function buttonOff(buttonID) {
    switch (buttonID) {
    case 0:
      buttons[0] = false;
      if (objectSelected) commands[curcmd].execute();
      break;
    case 1:
      buttons[1] = false;
      if (objectSelected) commands[curcmd].execute();
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
  
    //mouse events
  function mouseUp(event) {
    if (moveObject && commands[curcmd]===moveObjectCommand) {
      commands[curcmd].execute();
    }
    moveObject = false;
  }
  
  function mouseDown(event) {

  }

  //when the mouse is moved it returns mouse coords relative to window
  function mouseMove(event) {
    var viewportCoords = getClickedCoords(event);
    mouseX = viewportCoords[0];
    mouseY = viewportCoords[1];
  }
  
  //when the mouse wheel is use this is called
  function mouseWheel(event) {
    var delta = 0;
    // Chromium
    if (event.wheelDelta) {
      delta = -event.wheelDelta / 20;
    }
    // Minefield
    else if (event.detail) {
      delta = event.detail * 4;
    }
    if (heightZoomHotKey) {
      if (-delta < 0) {
        if (camHeight > 5) {
          camHeight -= 5;
        }
      }
      // towards screen
      else {
        if (camHeight < 100) {
          camHeight += 5;
        }
      }
    }
    else {
      // towards user
      if (-delta < 0) {
        if (zoom > 5) {
          zoom -= 5;
        }
      }
      // towards screen
      else {
        if (zoom < 100) { 
          zoom += 5;
        }
      }
    }
  }
  
  //Shows the desired feild and pauses hidden
  var show2d = this.show2d = function show2d() {
    document.getElementById("main2d").setAttribute("style", "display:inline;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    pause3d();
    unpause2d();
  }
  var show3d = this.show3d = function show3d() {
    document.getElementById("main3d").setAttribute("style", "display:inline;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    unpause3d();
    pause2d();
  }
  var showgoogle = this.showgoogle = function showgoogle() {
    document.getElementById("maingoogle").setAttribute("style", "display:inline;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
  }
  
  //pausing and unpausing the 2d and 3d to increase speed
  function pause3d() {
    scn.pauseScene();
    Processing.getInstanceById("CameraWidget").loop();
  }
  var unpause3d = this.unpause3d = function unpause3d() {
    scn.unpauseScene();
    Processing.getInstanceById("CameraWidget").loop();
  }

  function pause2d() {
    Processing.getInstanceById("SceneCaster2d").noLoop();
  }

  function unpause2d() {
    Processing.getInstanceById("SceneCaster2d").loop();
  }
  
  //square function
  function sq(x) {
    return x * x;
  }
  
  //
  var setUpDown = this.setUpDown = function setUpDown(upDown) {
    camUpDown = upDown;
  }
  var setLeftRight = this.setLeftRight = function setLeftRight(leftRight) {
    camLeftRight = leftRight;
  }
  
  var save = this.save = function save() {
    if (sceneName === null) {
      $("#dialog-saveAs").dialog("open");
    }
    else {
      saveFile();
    }
  }
  var saveAs = this.saveAs = function saveAs() {
    $("#dialog-saveAs").dialog("open");
  }
  var saveFile = function saveFile() {
    var allVars = Processing.getInstanceById("SceneCaster2d").getVars();
  	serial = {      lights:         lights,
                    numLights:      numLights,
                    walls:          walls,
                    numWalls:       numWalls,
                    objects:        objects,
                    numObjects:     numObjects,
                    cam:            cam,
                    zcam:           zcam,
                    currentCam:     currentCam,
                    allVars:         allVars
  	};
	var serial = JSON.stringify(serial);
	this.localStorage.setItem( sceneName, serial );  
  }
  var load = this.load = function load() {
    
    for(i=0; i<localStorage.length; i++) {
      theSel = document.getElementById('selectedname');
      var key = localStorage.key(i);
      var newOpt = new Option(key, key);
      theSel.options[i] = newOpt;
    }
    $("#dialog-load").dialog("open");
  }
  function loadScene (name) {
    for (i = 0; i < numObjects; i++) {
      scn.removeObjectFromScene(objects[i]);
    }
    for (i = 0; i < numWalls; i++){
      scn.removeObjectFromScene(walls[i]);
    }
    for (i = 0; i < numLights; i++){
      scn.removeLight(lights[i]);
    }
    numLights = 0;
    numWalls = 0;
    numObjects = 0;
   var serial = JSON.parse(localStorage.getItem(name));
   numObjects =     serial.numObjects;
   currentCam =     serial.currentCam;
   numWalls =       serial.numWalls;
   numLights =      serial.numLights;
   Processing.getInstanceById("SceneCaster2d").setVars(serial.allVars);
   for (var i = 0; i < numObjects; i++) {
     objects[i] = new c3dl.Collada();
     objects[i].init(serial.objects[i].path);
     objects[i].scale(serial.objects[i].sceneGraph.scaleVec);
     objects[i].setPosition(serial.objects[i].sceneGraph.pos);
     var theta = Math.acos(c3dl.vectorDotProduct([0,0,1], serial.objects[i].sceneGraph.dir));
     if (serial.objects[i].sceneGraph.dir[0] <0) {
      theta = 2*Math.PI- theta;
      }
     objects[i].yaw(theta);
     if (serial.objects[i].drawBoundingBox){
      objects[i].setEffect(selectedEffect);
     }
     else {
      objects[i].setEffect(c3dl.effects.STANDARD);
     }
     scn.addObjectToScene(objects[i]);
   }
    for (var i = 0; i < numWalls; i++) {
     walls[i] = new c3dl.Collada();
     walls[i].init(serial.walls[i].path);
     walls[i].scale(serial.walls[i].sceneGraph.scaleVec);
     walls[i].setPickable(false);
     walls[i].setPosition(serial.walls[i].sceneGraph.pos);
     var theta = Math.acos(c3dl.vectorDotProduct([0,0,1], serial.walls[i].sceneGraph.dir));
     if (serial.walls[i].sceneGraph.dir[0] <0) {
      theta = 2*Math.PI- theta;
      }
     walls[i].yaw(theta);
     walls[i].setTexture("./models/wall/wall-texture.jpg");
     scn.addObjectToScene(walls[i]);
   }
   for (var i = 0; i < numLights; i++) {
    lights[i] = new c3dl.PositionalLight();
    lights[i].setPosition(serial.lights[i].position);
    lights[i].setDiffuse(serial.lights[i].diffuse);
    lights[i].setOn(true);
    scn.addLight(lights[i]);
   }
   for (var i = 0; i < 5; i++) {
    cam[i].setPosition(serial.cam[i].pos);
    zcam[i].setPosition(serial.zcam[i].pos);
    cam[i].dir=serial.cam[i].dir;
    zcam[i].dir=serial.zcam[i].dir;
    cam[i].left=serial.cam[i].left;
    zcam[i].left=serial.zcam[i].left;
    cam[i].up=serial.cam[i].up;
    zcam[i].up=serial.zcam[i].up;
   }
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
    document.getElementById('objects').value = "";
    for (i = 0; i < numObjects; i++) {
      var objPos = [];
      objPos[0] = (objects[i].getPosition()[0] - objects[i].getLength() / 2).toFixed(2);
      objPos[1] = (objects[i].getPosition()[2] + objects[i].getWidth() / 2).toFixed(2);
      objPos[2] = (objects[i].getLength()).toFixed(2);
      objPos[3] = (objects[i].getWidth()).toFixed(2);
      document.getElementById('objects').value = document.getElementById('objects').value + objPos + ",";
    }
  }
  //checks a regular expression
  function checkRegexp(o,regexp,n) {
    if ( !( regexp.test( o.val() ) ) ) {
	  return false;
	} 
	else {
	  return true;
	}
  }
  //checks the length
  function checkLength(o,n,min,max) {
    if ( o.val().length > max || o.val().length < min ) {
	  return false;
	} 
	else {
	  return true;
	}
  }

  ////////////////////////////////////////////////////////////////////////////
  // Command Pattern
  ////////////////////////////////////////////////////////////////////////////  
  //Base Class
  var Command = function () {
    this.execute = function () {};
    this.unexecute = function () {};
  };
  
  //Delete Command
  var deleteSelectedCommand = function deleteSelectedCommand() {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.execute = function () {
      var delNum;
      for (i = 0; i < numObjects; i++) {
        if (objects[i] === objectSelected) {
          delNum = i;
        }
      }
      for (i = delNum; i < numObjects - 1; i++) {
        objects[i] = objects[i + 1];
      }
      scn.removeObjectFromScene(objectSelected);
      objectSelected = null;
      numObjects--;
    };
    this.unexecute = function () {
      scn.addObjectToScene(this.objectSelected);
      objectSelected = this.objectSelected;
      objects = this.objects;
      numObjects++;
    };
  };
  
  //Create Command
  var createObjectCommand = function createObjectCommand(objID) {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.objID = objID;
    this.newobject;
    this.execute = function () {
      if (!this.newobject) {
        objects[numObjects] = new c3dl.Collada();
        objects[numObjects].clone(models[objID]);
        scn.addObjectToScene(objects[numObjects]);
        if (objectSelected) {
          objectSelected.setEffect(c3dl.effects.STANDARD);
          objectSelected.setDrawBoundingBox(false);
        }
        this.newobject = objectSelected = objects[numObjects];
        objectSelected.setEffect(selectedEffect);
        objectSelected.setDrawBoundingBox(true);
        moveObject = true;
        objectSelected.setPosition([0, objectSelected.getHeight() / 2, 0]);
      }
      else {
        scn.addObjectToScene(this.newobject);
        if (objectSelected) {
          objectSelected.setEffect(c3dl.effects.STANDARD);
          objectSelected.setDrawBoundingBox(false);
        }
        objectSelected = objects[numObjects] = this.newobject;
        objectSelected.setEffect(selectedEffect);
        objectSelected.setDrawBoundingBox(true);
      }
      numObjects++;
    };
    this.unexecute = function () {
      numObjects--;
      scn.removeObjectFromScene(this.newobject);
      objectSelected = this.objectSelected;
      objects = this.objects;
    };
  };
  
  //Copy Command
  var copySelectedCommand = function copySelectedCommand() {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.newobject; 
    this.execute = function () {
      if (!this.newobject) {
        var temp = [];
        objects[numObjects] = new c3dl.Collada();
        objects[numObjects].clone(objectSelected);
        scn.addObjectToScene(objects[numObjects]);
        objectSelected.setEffect(c3dl.effects.STANDARD);
        objectSelected.setDrawBoundingBox(false);
        this.newobject = objectSelected = objects[numObjects];
        objectSelected.setEffect(selectedEffect);
        objectSelected.setDrawBoundingBox(true);
        numObjects++;
        moveObject = true;
        objectSelected.setPosition([0, objectSelected.getHeight() / 2, 0]);
       }
       else {
         scn.addObjectToScene(this.newobject);
         if (objectSelected) {
            objectSelected.setEffect(c3dl.effects.STANDARD);
            objectSelected.setDrawBoundingBox(false);
          }
          objectSelected = objects[numObjects] = this.newobject;
          objectSelected.setEffect(selectedEffect);
          objectSelected.setDrawBoundingBox(true);
       }
    };
    this.unexecute = function () {
      numObjects--;
      scn.removeObjectFromScene(this.newobject);
      objectSelected = this.objectSelected;
      objects = this.objects;
    };
  };
  
  //Move Command
  var moveObjectCommand = function moveObjectCommand(sPos) {
    Command.call();
    this.objectSelected = objectSelected;
    this.sPos = sPos;
    this.ePos;
    this.execute = function () {
      if (!this.ePos) this.ePos = this.objectSelected.getPosition();
      this.objectSelected.setPosition(this.ePos);
    };
    this.unexecute = function () {
      this.ePos = this.objectSelected.getPosition();
      this.objectSelected.setPosition(this.sPos);
    };
  };
  
  //Edit Light Command
  var lightCommand = function lightCommand() {
    Command.call();
    this.sLight = lights[0].getDiffuse();
    this.eLight = 0;
    this.execute = function () {
      if (!this.eLight) this.eLight = lights[0].getDiffuse();
      for (i = 0; i < numLights; i++)
      lights[i].setDiffuse(this.eLight);
    };
    this.unexecute = function () {
      this.eLight = lights[0].getDiffuse();
      for (i = 0; i < numLights; i++)
      lights[i].setDiffuse(this.sLight);
    };
  };
  
  //Scale Command
  var scaleCommand = function scaleCommand(length, width, height) {
    Command.call();
    this.objectSelected = objectSelected;
    this.oldHheight = objectSelected.getHeight();
    this.oldWidth = objectSelected.getWidth();
    this.oldLength = objectSelected.getLength();
    this.length = length;
    this.width = width;
    this.height = height;
    this.execute = function () {
      this.objectSelected.setSize(this.length, this.width, this.height);
      this.objectSelected.setPosition([objectSelected.getPosition()[0], this.height / 2, objectSelected.getPosition()[2]]);
    };
    this.unexecute = function () {
      this.objectSelected.setSize(this.oldLength, this.oldWidth, this.oldHeight);
      this.objectSelected.setPosition([objectSelected.getPosition()[0], this.oldHeight / 2, objectSelected.getPosition()[2]]);
    };
  };
  
  //Rotate Command
  var rotateObjectCommand = function rotateObjectCommand() {
    Command.call();
    this.rot;
    this.objectSelected = objectSelected;
    this.execute = function (rot) {
      if (this.rot) this.objectSelected.yaw(this.rot);
      else this.rot = rot;
    };
    this.unexecute = function () {
      this.objectSelected.yaw(-this.rot);
    };
  };
  
  //New Page Command
  var deleteSceneCommand = this.deleteSceneCommand = function deleteSceneCommand() {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.numLights = numLights;
    this.numWalls = numWalls;
    this.numObjects = numObjects;
    this.lights = lights;
    this.walls = walls;
    this.execute = function (rot) {
      for (i = 0; i < numObjects; i++) {
        scn.removeObjectFromScene(objects[i]);
      }
      for (i = 0; i < numWalls; i++){
        scn.removeObjectFromScene(walls[i]);
      }
      for (i = 0; i < numLights; i++){
        scn.removeLight(lights[i]);
      }
      numLights = 0;
      numWalls = 0;
      numObjects = 0;
      //empty hidden feild of objects
      document.getElementById('objects').value = "";
    };
    this.unexecute = function () {
      objects = this.objects;
      objectSelected = this.objectSelected;
      numLights = this.numLights;
      numWalls = this.numWalls;
      numObjects = this.numObjects;
      lights = this.lights;
      walls = this.walls;
      for (i = 0; i < numObjects; i++)
      scn.addObjectToScene(objects[i]);
      for (i = 0; i < numWalls; i++)
      scn.addObjectToScene(walls[i]);
      for (i = 0; i < numLights; i++)
      scn.addLight(lights[i]);
    };
  };
  
  ////////////////////////////////////////////////////////////////////////////
  //3d Setup 
  ////////////////////////////////////////////////////////////////////////////
  
  // The program main
  function canvasMain(canvasName) {
    // Create new c3dl.Scene object
    scn = new c3dl.Scene();
    scn.setCanvasTag(canvasName);
    //empty hidden feild of objects
    document.getElementById('objects').value = "";
    show2d();
    // Create GL context
    renderer = new c3dl.WebGL();
    renderer.createRenderer(this);
    // Attach renderer to the scene
    scn.setRenderer(renderer);
    if (scn.init(canvasName)) {
      //skybox
      sm = new c3dl.Collada();
      sm.init("./models/sky/skysphere.dae");
      sm.setTexture("./models/sky/sky.jpg");

      //models created so clone can be used
      models[0] = new c3dl.Collada();
      models[0].init(CHAIR_PATH);
      models[0].scale([0.08, 0.08, 0.08]);
      models[1] = new c3dl.Collada();
      models[1].init(TABLE_PATH);
      models[1].scale([0.25, 0.25, 0.25]); 
      models[2] = new c3dl.Collada();
      models[2].init(PACMAN_PATH);
      models[2].scale([0.01, 0.01, 0.01]);
      models[3] = new c3dl.Collada();
      models[3].init(REDGHOST_PATH);
      models[3].scale([10, 10, 10]);
      models[4] = new c3dl.Collada();
      models[4].init(BLUEGHOST_PATH);
      models[4].scale([10, 10, 10]);
      models[5] = new c3dl.Collada();
      models[5].init(ORANGEGHOST_PATH);
      models[5].scale([10, 10, 10]);
      models[6] = new c3dl.Collada();
      models[6].init(PINKGHOST_PATH);
      models[6].scale([10, 10, 10]);
      models[7] = new c3dl.Collada();
      models[7].init(PACMANBALL_PATH);
      models[7].scale([0.08, 0.08, 0.08]); 
      models[8] = new c3dl.Collada();
      models[8].init(PACMANBALL_PATH);
      models[8].scale([0.04, 0.04, 0.04]); 
      // Effect used when game objects are selected
      selectedEffect = new c3dl.Effect();
      selectedEffect.init(c3dl.effects.SEPIA);
      selectedEffect.setParameter("color", [0.3, 0.6, 0.9]);
      scn.setAmbientLight([0, 0, 0, 0]);
      createLight(0, 0);
      var floor = [];
      var xOffset= -150, 
	      zOffset= -150;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          floor[i] = new c3dl.Collada();
          floor[i].init(FLOOR_PATH);
          floor[i].scale([10, 1, 10]);
          floor[i].setPickable(false);
          scn.addObjectToScene(floor[i]);
          floor[i].setPosition([xOffset, 0, zOffset]);
          xOffset+= 100;
        }
        xOffset= -150;
        zOffset+= 100;
      }
      floor[16] = new c3dl.Collada();
          floor[16].init(FLOOR_PATH);
          floor[16].scale([100, 1, 100]);
          floor[16].setPickable(false);
          scn.addObjectToScene(floor[16]);
          floor[16].setPosition([0, -0.99, 0]);
      //create an object
      createWall([-25, 0, -25], [25, 0, -25]);
      createWall([25, 0, -25], [25, 0, 25]);
      createWall([25, 0, 25], [-25, 0, 25]);
      createWall([-25, 0, 25], [-25, 0, -25]);
      cam[0].setPosition([0, 100, 1]);
      zcam[0].setPosition(cam[0].getPosition());
      zcam[0].setLookAtPoint([0.0, 0.0, 0.0]);
      // Place the camera at the origin.
      // Canvas3d uses a right handed co-ordinate system.
      cam[1].setPosition(new Array(0, camHeight, 24));
      newCamHeight = camHeight;
      // Point the camera.
      // Here it is pointed directly along the z-axis
      zcam[1].setPosition(cam[1].getPosition());
      zcam[1].setLookAtPoint([0.0, 5.0, 0.0]);
      cam[2].setPosition(new Array(24, camHeight, 0));
      zcam[2].setPosition(cam[2].getPosition());
      zcam[2].setLookAtPoint([0.0, 5.0, 0.0]);
      cam[3].setPosition(new Array(0, camHeight, -24));
      zcam[3].setPosition(cam[3].getPosition());
      zcam[3].setLookAtPoint([0.0, 5.0, 0.0]);
      cam[4].setPosition(new Array(-24, camHeight, 0));
      zcam[4].setPosition(cam[4].getPosition());
      zcam[4].setLookAtPoint([0.0, 5.0, 0.0]);
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
  
  ////////////////////////////////////////////////////////////////////////////
  // Canvas Update 
  ////////////////////////////////////////////////////////////////////////////
  function update(deltaTime) {
    if (tiltHotKey) {
      camLeftRight = (mouseX - CANVAS_WIDTH/2) / CANVAS_WIDTH;
      camUpDown = (CANVAS_HEIGHT/2 - mouseY) / CANVAS_HEIGHT;
    }
    if (scaling && scalingObject !== objectSelected) {
      if (objectSelected) {
        document.getElementById("length").value=getSize()[0].toFixed(2);
        document.getElementById("width").value=getSize()[2].toFixed(2);
        document.getElementById("height").value=getSize()[1].toFixed(2);
        scalingObject = objectSelected;
      }
      else {
        scaleEffect();
        scaling =false;
      }
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
    if (buttons[0] && objectSelected) {
      var curpos = objectSelected.getPosition();
      objectSelected.setPosition([curpos[0], curpos[1] + 1, curpos[2]]);
    }
    //move selected object down 
    else if (buttons[1] && objectSelected) {
      var curpos = objectSelected.getPosition();
      objectSelected.setPosition([curpos[0], curpos[1] - 1, curpos[2]]);
    }
    //rotate selected object left
    else if (buttons[2] && objectSelected) {
      rot += -0.1;
      objectSelected.yaw(-0.1)
    }
    //rotate selected object right
    else if (buttons[3] && objectSelected) {
      rot += 0.1;
      objectSelected.yaw(0.1)
    }
    //light up
    else if (buttons[4]) {
      var aLight = lights[0].getDiffuse();
      for (i = 0; i < numLights; i++) {
        if (aLight[1] < 1) {
          lights[i].setDiffuse([aLight[0] + 0.1, aLight[1] + 0.1, aLight[2] + 0.1, aLight[3] + 0.1]);
        }
      }
    }
    //light down
    else if (buttons[5]) {
      var aLight = lights[0].getDiffuse();
      for (i = 0; i < numLights; i++) {
        if (aLight[1] > 0) {
          lights[i].setDiffuse([aLight[0] - 0.1, aLight[1] - 0.1, aLight[2] - 0.1, aLight[3] - 0.1]);
        }
      }
    }
    //ud Up 
    else if (buttons[6]) {
      if (camHeight < 100) {
        camHeight += 5;
      }
    }
    //ud Down 
    else if (buttons[7]) {
      if (camHeight > 5) {
        camHeight -= 5;
      }
    }
    //zoom in 
    else if (buttons[8]) {
      if (zoom < 100) {
        zoom += 5;
      }
    }
    //zoom out 
    else if (buttons[9]) {
      if (zoom > 5) {
        zoom -= 5;
      }
    }
    //move forward
    else if (buttons[10]) {
      moveCamera(FORWARD, moveAmount);
    }
    //move backward
    else if (buttons[11]) {
      moveCamera(FORWARD, -moveAmount);
    }
    //move left
    else if (buttons[12]) {
      moveCamera(SIDEWAYS, moveAmount);
    }
    //move right
    else if (buttons[13]) {
      moveCamera(SIDEWAYS, -moveAmount);
    }
    //use arrow key to move camera
    if (keysDown.KEY_LEFT || keysDown.KEY_A) {
      moveCamera(SIDEWAYS, moveAmount);
    }
    else if (keysDown.KEY_RIGHT || keysDown.KEY_D) {
      moveCamera(SIDEWAYS, -moveAmount);
    }
    if (keysDown.KEY_UP || keysDown.KEY_W) {
      moveCamera(FORWARD, moveAmount);
    }
    else if (keysDown.KEY_DOWN || keysDown.KEY_S) {
      moveCamera(FORWARD, -moveAmount);
    }
    //move selected object to mouse postion
    if (moveObject && objectSelected) {
      var curpos = objectSelected.getPosition();
      worldCoords = getworldCoords(mouseX, mouseY);
      objectSelected.setPosition([worldCoords[0], curpos[1], worldCoords[2]]);
    }
    //Camera stuff
    //setting height
    if (newCamHeight - camHeight) {
      var chdif = (newCamHeight - camHeight);
      newCamHeight = camHeight;
      var curPos = cam[currentCam].getPosition();
      cam[currentCam].setPosition([curPos[0], curPos[1] - chdif, curPos[2]]);
    }
    //zooming
    var zoomInDir = c3dl.multiplyVector(zcam[currentCam].getDir(), zoom);
    zcam[currentCam].setPosition(c3dl.addVectors(cam[currentCam].getPosition(), zoomInDir));
    //rotating at the point of zoom
    if (currentCam) {
      zcam[currentCam].rotateOnAxis([0, 1, 0], -camLeftRight / 10);
      zcam[currentCam].pitch(-camUpDown / 10);
    }
    //repositioning the camera after rotating it
    zoomInDir = c3dl.multiplyVector(zcam[currentCam].getDir(), zoom);
    cam[currentCam].setPosition(c3dl.subtractVectors(zcam[currentCam].getPosition(), zoomInDir))
    for (i = 0; i < numObjects; i++) {
      
     
      document.getElementById('objects').value = document.getElementById('objects').value +  objects[i].getBoundingBoxCorners() + ",";
    }
  }
  
  ////////////////////////////////////////////////////////////////////////////
  // 3d Functions 
  ////////////////////////////////////////////////////////////////////////////
  // This function is the callback that is passed to the scene.
  // When a mouse down event is detected this function is called.
  // The handler is given an object that knows what button was
  // pressed and has a list of objects picked.
  function pickingHandler(result) {
    var objectsPicked = result.getObjects(); 
    if (objectSelected) {
      var oldSelected = objectSelected;
      objectSelected.setEffect(c3dl.effects.STANDARD);
      objectSelected.setDrawBoundingBox(false);
      objectSelected = null;
    }
    if (objectsPicked.length > 0) {
      // get the object that was picked
      objectSelected = objectsPicked[0];
      objectSelected.setEffect(selectedEffect);
      objectSelected.setDrawBoundingBox(true);
    }
    if (objectSelected === oldSelected && !moveObject) {
        curcmd++;
        if (curcmd <= commands.length - 1) {
          for (var i = curcmd, l = commands.length; i < l; i++) {
            commands[i] = null;
          }
        }
        commands[curcmd] = new moveObjectCommand(objectSelected.getPosition());
        moveObject = true;
    }
  }
  
  //returns clicked coordinates X and Y
  function getClickedCoords(event) {
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

  //calculates world coordinates 
  function getworldCoords(mmx, mmy) {
    if (mmx != null && mmy != null) {
      // NDC
      var normalizedDeviceCoords = [(2 * mmx / CANVAS_WIDTH) - 1, -((2 * mmy / CANVAS_HEIGHT) - 1), 1, 1];
      // Sometimes this is called before the perspective transform
      // is setup which causes warnings. This check prevents that.
      if (c3dl.isValidMatrix(scn.getProjectionMatrix())) {
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
  
  //fuction to move the camera
  function moveCamera(direction, amount) {
    if (direction === SIDEWAYS) {
      var temp = zcam[currentCam].getLeft();
      var dir = c3dl.multiplyVector([temp[0], 0, temp[2]], amount);
      cam[currentCam].setPosition(c3dl.addVectors(cam[currentCam].getPosition(), dir));
    }
    else if (direction === FORWARD) {
      var temp = zcam[currentCam].getLeft();
      var dir = c3dl.multiplyVector([temp[0], 0, temp[2]], amount);
      var rotmat = c3dl.makeMatrix(Math.cos(90 * Math.PI / 180), 0, Math.sin(90 * Math.PI / 180), 0,
                                   0, 1, 0, 0, 
                                   -Math.sin(90 * Math.PI / 180), 0, Math.cos(90 * Math.PI / 180), 0, 
                                   0, 0, 0, 1);
      c3dl.transposeMatrix(rotmat);
      dir = c3dl.multiplyMatrixByVector(rotmat, dir);
      cam[currentCam].setPosition(c3dl.addVectors(cam[currentCam].getPosition(), dir));
    }
  }
 
  //create objects using a factory pattern
  var createObject = this.createObject = function createObject(objID) {
    curcmd++;
    if (curcmd <= commands.length - 1) {
      for (var i = curcmd, l = commands.length; i < l; i++) {
        commands[i] = null;
      }
    }
    commands[curcmd] = new createObjectCommand(objID);
    commands[curcmd].execute();
  }
  
  //removes seleted object from scene
  var deleteSelected = this.deleteSelected = function deleteSelected() {
    if (objectSelected) {
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd, l = commands.length; i < l; i++) {
          commands[i] = null;
        }
      }
      commands[curcmd] = new deleteSelectedCommand();
      commands[curcmd].execute();
    }
  }
  
  //undo function
  var undo = this.undo = function undo() {
    if (curcmd >= 0) {
      commands[curcmd--].unexecute();
    }
  }
  
  //redo function
  var redo = this.redo = function redo() {
    if (commands[curcmd + 1]) {
      commands[++curcmd].execute();
    }
  }
  
  //copys selected object stats and creates a new one
  var copySelected = this.copySelected = function copySelected() {
    if (objectSelected) {
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd, l = commands.length; i < l; i++) {
          commands[i] = null;
        }
      }
      commands[curcmd] = new copySelectedCommand();
      commands[curcmd].execute();
    }
  }
  
  //scale pop-up
  var scale = this.scale = function scale() {
    if (objectSelected) {
      scaling=true;
      scalingObject = objectSelected;
      scaleEffect();
      document.getElementById("length").value=getSize()[0].toFixed(2);
      document.getElementById("width").value=getSize()[2].toFixed(2);
      document.getElementById("height").value=getSize()[1].toFixed(2);
    }
  }
  var getSize = this.getSize = function getSize() {
    var size = [];
    size[0] = objectSelected.getLength();
    size[1] = objectSelected.getHeight();
    size[2] = objectSelected.getWidth();
    return size;
  }
  var setSize = this.setSize = function setSize(length, width, height) {
    curcmd++;
    if (curcmd <= commands.length - 1) {
      for (var i = curcmd, l = commands.length; i < l; i++) {
        commands[i] = null;
      }
    }
    commands[curcmd] = new scaleCommand(length, width, height);
    commands[curcmd].execute();
  }
  var getPic = this.getPic = function getPic(length, width, height) {
    var path = "images/sidebar/";
    if (objectSelected.getPath() === CHAIR_PATH) {
      path = path + "chair.jpg";
    }
    else if (objectSelected.getPath() === TABLE_PATH) {
      path = path + "table.jpg";
    }
    return path;
  }
  
  ////////////////////////////////////////////////////////////////////////////
  // 2d Functions 
  ////////////////////////////////////////////////////////////////////////////
  //creates a positional light at specified position 
  var createLight = this.createLight = function createLight(posX, posZ) {
    lights[numLights] = new c3dl.PositionalLight();
    lights[numLights].setPosition([posX, 20, posZ]);
    lights[numLights].setDiffuse([1, 1, 1, 1]);
    lights[numLights].setOn(true);
    scn.addLight(lights[numLights]);
    numLights++;
  }
  
  //deletes seleted positional light
  var deleteLight = this.deleteLight = function deleteLight(lightnum) {
    scn.removeLight(lights[lightnum]);
    for (var k = lightnum; k < numLights - 1; k++) {
      lights[k] = lights[k + 1];
    }
    numLights--;
  }
  
  //moves seleted positional light
  var moveLight = this.moveLight = function moveLight(lightnum, posX, posZ) {
    lights[lightnum].setPosition([posX, 10, posZ])
  }
  
  //creates a wall from one specified position to another 
  var createWall = this.createWall = function createWall(posStart, posEnd) {
    walls[numWalls] = new c3dl.Collada();
    walls[numWalls].init(WALL_PATH);
    walls[numWalls].setTexture("./models/wall/wall-texture.jpg");
    //calc length
    var triA = (posStart[0] + 100) - (posEnd[0] + 100);
    var triB = (posStart[2] + 100) - (posEnd[2] + 100);
    //set position
    var wallpos = [];
    var averageX = (Math.abs(posStart[0]) + Math.abs(posEnd[0])) / 2
    if (posEnd[0] < 0 && posStart[0] < 0) {
      wallpos[0] = -averageX;
    }
    else if (posStart[0] < 0 && posStart[0] < posEnd[0]) {
      wallpos[0] = posStart[0] + averageX;
    }
    else if (posEnd[0] < 0 && posStart[0] > posEnd[0]) {
      wallpos[0] = posEnd[0] + averageX;
    }
    else {
      wallpos[0] = averageX;
    }
    wallpos[1] = 7.5;
    var averageZ = (Math.abs(posStart[2]) + Math.abs(posEnd[2])) / 2
    if (posEnd[2] < 0 && posStart[2] < 0) {
      wallpos[2] = -averageZ;
    }
    else if (posStart[2] < 0 && posStart[2] < posEnd[2]) {
      wallpos[2] = posStart[2] + averageZ;
    }
    else if (posEnd[2] < 0 && posStart[2] > posEnd[2]) {
      wallpos[2] = posEnd[2] + averageZ;
    }
    else {
      wallpos[2] = averageZ;
    }
    walls[numWalls].setPosition(wallpos);
    //calc walllength pythagorean theorem
    var walllength = Math.sqrt(sq(triA) + sq(triB));
    //no rotation
    if (posStart[0] === posEnd[0] || posStart[2] === posEnd[2]) {
      walls[numWalls].scale([(posStart[0] === posEnd[0]) ? 1 : walllength / 2 + 1, 7.5, (posStart[2] === posEnd[2]) ? 1 : walllength / 2 + 1]);
    }
    //calc angle to rotate cos law
    else {
      walls[numWalls].scale([walllength / 2 + 1, 7.5, 1]);
      theta = 180 * Math.acos((sq(walllength) + sq(triA) - sq(triB)) / (2 * walllength * triA)) / Math.PI;
      if (posEnd[2] < posStart[2]) {
        theta = 360 - theta;
      }
      walls[numWalls].yaw((theta * Math.PI) / 180);
    }
    //add object to scene
    walls[numWalls].setPickable(false);
    scn.addObjectToScene(walls[numWalls]);
    numWalls++;
  }
  
  //deletes seleted wall
  var deleteWall = this.deleteWall = function deleteWall(wallnum) {
    scn.removeObjectFromScene(walls[wallnum]);
    for (var k = wallnum; k < numWalls - 1; k++) {
      walls[k] = walls[k + 1];
    }
    numWalls--;
  }
  
  //moves seleted wall
  var moveWall = this.moveWall = function moveWall(wallnum, posStart, posEnd) {
    scn.removeObjectFromScene(walls[wallnum]);
    walls[wallnum] = new c3dl.Collada();
    walls[wallnum].init(WALL_PATH);
    walls[wallnum].setTexture("./models/wall/wall-texture.jpg");
    var triA = (posStart[0] + 100) - (posEnd[0] + 100);
    var triB = (posStart[2] + 100) - (posEnd[2] + 100);
    //set position
    var wallpos = [];
    var averageX = (Math.abs(posStart[0]) + Math.abs(posEnd[0])) / 2
    if (posEnd[0] < 0 && posStart[0] < 0) {
      wallpos[0] = -averageX;
    }
    else if (posStart[0] < 0 && posStart[0] < posEnd[0]) {
      wallpos[0] = posStart[0] + averageX;
    }
    else if (posEnd[0] < 0 && posStart[0] > posEnd[0]) {
      wallpos[0] = posEnd[0] + averageX;
    }
    else {
      wallpos[0] = averageX;
    }
    wallpos[1] = 7.5;
    var averageZ = (Math.abs(posStart[2]) + Math.abs(posEnd[2])) / 2
    if (posEnd[2] < 0 && posStart[2] < 0) {
      wallpos[2] = -averageZ;
    }
    else if (posStart[2] < 0 && posStart[2] < posEnd[2]) {
      wallpos[2] = posStart[2] + averageZ;
    }
    else if (posEnd[2] < 0 && posStart[2] > posEnd[2]) {
      wallpos[2] = posEnd[2] + averageZ;
    }
    else {
      wallpos[2] = averageZ;
    }
    walls[wallnum].setPosition(wallpos);
    //calc walllength pythagorean theorem
    var walllength = Math.sqrt(sq(triA) + sq(triB));
    //no rotation
    if (posStart[0] === posEnd[0] || posStart[2] === posEnd[2]) {
      walls[wallnum].scale([(posStart[0] === posEnd[0]) ? 1 : walllength / 2 + 1, 5, (posStart[2] === posEnd[2]) ? 1 : walllength / 2 + 1]);
    }
    //calc angle to rotate cos law
    else {
      walls[wallnum].scale([walllength / 2 + 1, 5, 1]);
      theta = 180 * Math.acos((sq(walllength) + sq(triA) - sq(triB)) / (2 * walllength * triA)) / Math.PI;
      if (posEnd[2] < posStart[2]) {
        theta = 360 - theta;
      }
      walls[wallnum].yaw((theta * Math.PI) / 180);
    }
    //add object to scene
    walls[wallnum].setPickable(false);
    scn.addObjectToScene(walls[wallnum]);
  }
  var checkEnclosures = this.checkEnclosures = function checkEnclosures() {
    enclosures = null;
    enclosures = [];
    closedNodes= []
    wallPos2d = Processing.getInstanceById("SceneCaster2d").get2dWalls();
    for (var j = 0; j<wallPos2d.length;j+=4){
      eTree = new ETree;
      checking (wallPos2d[j], wallPos2d[j+1], null, j);
      getClosedNodes(eTree);
      
    }
    getEnclosures();
    if (enclosures[0]) {
      Processing.getInstanceById("SceneCaster2d").setEnclosures(enclosures);
    }
    else {
      Processing.getInstanceById("SceneCaster2d").setEnclosures(0);
    }
}

function checking (checkerx,checkery, curnode, curwall) {
  //create the root of the tree if there is none
  if (!curnode) {
    curnode=eTree.createRoot(checkerx,checkery,parseInt(curwall/4));
  }
  //add child to current node, then set current node to the child
  else {
    curnode = curnode.addChild(checkerx,checkery, parseInt(curwall/4));
  }
  //check all walls to see if they are touching
  for (var j = 0; j<wallPos2d.length;j+=2){
    //check: touching, if the wall was used already, if it is closed
    if (checkerx === wallPos2d[j] && checkery === wallPos2d[j+1] && !checkUsed(curnode,parseInt(j/4)) && !curnode.closed  ) { 
      //if it is the start position check the end of root node or recurse using start of current wall
      if ((j / 2) % 2 || j === 0) {
        if (eTree.checkRoot(wallPos2d[j - 2],wallPos2d[j-1])) {
          curnode.closed = true;
        }
        else {
          checking(wallPos2d[j-2], wallPos2d[j-1],curnode , j-2);
        }
      }
      //if it is the end position check the start of root node or recurse using end of current wall
      else {
        if (eTree.checkRoot(wallPos2d[j + 2], wallPos2d[j + 3])) {
          curnode.closed = true;
        }
        else {     
          checking(wallPos2d[j + 2], wallPos2d[j + 3],curnode, j + 2);
        }
      }
    }
  }
}

function ETree() {
  this.root = null;          
  this.nodes = new Array;  
  objLocalTree = this;  
  
  this.createRoot = function(x,y, wallnum) {
    this.root = new ENode(x,y,null, wallnum);
    this.root.id = "root";
    this.nodes["root"] = this.root;
    return this.root;
    return objNode;
  }
  this.checkRoot = function(x,y) {
    if (this.root.x === x && this.root.y === y)
      return true;
    else
      return false;
  }
}

function ENode(x,y,parent, wallnum) {
  this.x = x;
  this.y = y;
  this.closed = false;
  this.wallnum = wallnum;
  this.level = 0;               
  this.childNodes = new Array;  
  this.parent = parent;
  this.eLength = null;
  this.addChild = function(x,y, wallnum) {
    var objNode = new ENode(x,y,this, wallnum);
    objNode.level = this.level + 1;
    this.childNodes[this.childNodes.length] = objNode;
    objLocalTree.nodes[objLocalTree.nodes.length] = objNode;
    return objNode;
  }  
}
function checkUsed (testing, wallnum) {
  var used = false;
  if (testing.parent && testing.parent.id !== "root")
    used = checkUsed (testing.parent,wallnum)
  if (testing.wallnum === wallnum)
    return true;
  return used;
}

function getClosedNodes (eTree) {
  //get all the enclousers created in the tree
   for (var i= 0; i < objLocalTree.nodes.length; i++) {
    if (objLocalTree.nodes[i].closed === true) {
      objLocalTree.nodes[i].eLength = getEnclosureLength(objLocalTree.nodes[i]);
      closedNodes.push(objLocalTree.nodes[i]);
    }
  } 
}

function getEnclosures () {
  var enclosure= [];
  pointsUsed = [];
  var checker = false;
  var current = 0;
  var temp = closedNodes[0]; 
  for (var k= 0; k < closedNodes.length; k++) {    
    for (var i= 0; i < closedNodes.length; i++) {
      if (closedNodes[i].eLength < temp.eLength) {
        temp = closedNodes[i];
        current = i;
      }
    }
    enclosure= [];
    for (var i= 0, lvl = temp.level; i <= lvl; i++) {
          enclosure.push(temp.x);
          enclosure.push(temp.y);
          temp=temp.parent;
    }
    closedNodes[current].eLength = 9999999;
    temp=closedNodes[current];
    checker = checkCreated(enclosure);
    if (checker) {
      for (var j = 0, len = enclosure.length;j<len;j+=2) {
        pointsUsed.push(enclosure[j]);
        pointsUsed.push(enclosure[j+1]);
      }
      if  (enclosure[0]) {
        enclosures.push(enclosure);
      }  
    }
  }

}

function checkCreated(enclosure) { 
  var check = false;
  var checkArray = [];
  for (var j = 0, len = enclosure.length;j<len;j+=2) {
    checkArray[j]=true;
    for (var i = 0, len2 = pointsUsed.length;i<len2;i+=2) {
      if (enclosure[j] === pointsUsed[i] && enclosure[j+1] === pointsUsed[i+1]) {
        checkArray[j]=false;
      }
    }
  } 
  for (var j = 0, len = enclosure.length;j<len;j+=2) {
   if (checkArray[j]) {
    check = true;
   }
  }
  return check;
}

function getEnclosureLength(test) { 
  var eLength=0;
  for (var i= 0, lvl = test.level; i <= lvl; i++) {
        eLength+=c3dl.vectorLength([test.x,test.y,0]);
        test=test.parent;
  }
  
  return eLength;
  
}
  
  ////////////////////////////////////////////////////////////////////////////
  // Camera Widget Functions 
  ////////////////////////////////////////////////////////////////////////////
  //changing cameras
  var forwardCam = this.forwardCam = function forwardCam() {
    (currentCam === 4) ? currentCam = 0 : currentCam++;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }
  var backCam = this.backCam = function backCam() {
    (currentCam == 0) ? currentCam = 4 : currentCam--;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }
  var topView = this.topView = function topView() {
    currentCam = 0;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }  
  var popLoad = this.popLoad = function popLoad() {
    var addOption = function addOption(selectbox,text,value ) {
      var optn = document.createElement("OPTION");
      optn.text = text;
      optn.value = value;
      selectbox.options.add(optn);
    }
    for (var i=0; i < localStorage.length;++i){
      addOption(document.drop_list.files,localStorage.key(i),localStorage.key(i) );
    }
  }
  //sliders
  $(function () {
    // zoom slider
    $('#zoomslider').slider({
      min: 0,
      max: 100,
      values: zoom,
      orientation: 'vertical',
      slide: function (event, ui) {
        zoom = ui.value - 1;
      }
    });
    // up and down slider
    $('#updownslider').slider({
      min: 5,
      max: 100,
      values: camHeight,
      orientation: 'vertical',
      slide: function (event, ui) {
        camHeight = ui.value - 1;
      }
    });
    //Save Window
   $("#dialog-saveAs").dialog({
     autoOpen: false,
	 modal: true,
	 buttons: {
	  'Save': function() {
	    var bValid = true;
		bValid = bValid && checkLength(name,"filename",3,16);
		bValid = bValid && checkRegexp(name,/^[a-z]([0-9a-z_])+$/i,"FileName may consist of a-z, 0-9, underscores, begin with a letter.");	
		if (bValid) {
		  sceneName = document.getElementById('name').value;
		  $(this).dialog('close');
		  saveFile();
	    }
      },
	  Cancel: function() {
	    $(this).dialog('close');
	  }
	}
   });
   $("#dialog-load").dialog({
     autoOpen: false,
	 modal: true,
	 buttons: {
	  'Load': function() {	
		  sceneName = document.getElementById('selectedname').value;
		  $(this).dialog('close');
		   loadScene(sceneName);
      },
	  Cancel: function() {
	    $(this).dialog('close');
	  }
	}
   });
    var name = $("#name");
    // Accordion
	$("#accordion").accordion({ header: "h3" });
    });
    //run the currently selected effect
	var scaleEffect = this.scaleEffect = function scaleEffect(){
	  var options = {};
      $("#effect").toggle("slide",options,500);
	};	
})();
