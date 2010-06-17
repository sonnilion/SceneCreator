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
      key_m = false;
    return {
      "KEY_UP": key_up,
      "KEY_DOWN": key_down,
      "KEY_LEFT": key_left,
      "KEY_RIGHT": key_right,
      "KEY_M": key_m
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
  default:
    break;
  }
}
//When a button is pressed from html
function buttonOn(buttonID)
{
  switch (buttonID)
  {
  case 0:
    buttons[0] = true;
    break;
  case 1:
    buttons[1] = true;
    break;
  case 2:
    buttons[2] = true;
    break;
  case 3:
    buttons[3] = true;
    break;
  case 4:
    buttons[4] = true;
    break;
  case 5:
    buttons[5] = true;
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
function buttonOff(buttonID)
{
  switch (buttonID)
  {
  case 0:
    buttons[0] = false;
    break;
  case 1:
    buttons[1] = false;
    break;
  case 2:
    buttons[2] = false;
    break;
  case 3:
    buttons[3] = false;
    break;
  case 4:
    buttons[4] = false;
    break;
  case 5:
    buttons[5] = false;
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
  if (objectsPicked.length > 0)
  {
    if (objectSelected)
    {
      objectSelected.setEffect(c3dl.effects.STANDARD);
      objectSelected = null;
    }
    // get the object that was picked
    objectSelected = objectsPicked[0];
    objectSelected.setEffect(selectedEffect);
  }
  else
  {
    objectSelected.setEffect(c3dl.effects.STANDARD);
    objectSelected = null;
  }
}

function update(deltaTime)
{
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
  if (buttons[0] && objectSelected != null)
  {
    var curpos = objectSelected.getPosition();
    objectSelected.setPosition([curpos[0], curpos[1] + 1, curpos[2]]);
  }
  //move selected object down 
  else if (buttons[1] && objectSelected != null)
  {
    var curpos = objectSelected.getPosition();
    objectSelected.setPosition([curpos[0], curpos[1] - 1, curpos[2]]);
  }
  //rotate selected object left
  else if (buttons[2] && objectSelected != null)
  {
    objectSelected.yaw(-0.1)
  }
  //rotate selected object right
  else if (buttons[3] && objectSelected != null)
  {
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
  if (keysDown.KEY_LEFT)
  {
    moveCamera(SIDEWAYS, moveAmount);
  }
  else if (keysDown.KEY_RIGHT)
  {
    moveCamera(SIDEWAYS, -moveAmount);
  }
  if (keysDown.KEY_UP)
  {
    moveCamera(FORWARD, moveAmount);
  }
  else if (keysDown.KEY_DOWN)
  {
    moveCamera(FORWARD, -moveAmount);
  }

  //move selected object to mouse postion
  if (moveObject)
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
  moveObject = false;
}

function mouseDown(event)
{
  if (objectSelected)
  {
    moveObject = true;
  }
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
  // towards user
  if (-delta < 0) {
    if (zoom > 5) zoom -= 5;
  }
  // towards screen
  else {
    if (zoom < 100) zoom += 5;
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
function createObject(objID)
{
  objects[numObjects] = new c3dl.Collada();
  var isValid = true;

  switch (objID)
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
    objectSelected = objects[numObjects];
    objectSelected.setEffect(selectedEffect);
  }
  numObjects++;
}

//remove selected object from scene
function deleteSelected()
{
  if (objectSelected)
  {
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
  }
}

//copys selected object stats and creates a new one
function copySelected()
{
  if (objectSelected)
  {
    var temp = [];
    objects[numObjects] = new c3dl.Collada();
    objects[numObjects].init(objectSelected.getPath());
    objects[numObjects].setPosition([objectSelected.getPosition()[0], objectSelected.getPosition()[1], objectSelected.getPosition()[2] - objectSelected.getWidth()-1]);
    scn.addObjectToScene(objects[numObjects]);
    objectSelected.setEffect(c3dl.effects.STANDARD);
    temp[0] = objectSelected.getLength();
    temp[1] = objectSelected.getHeight();
    temp[2] = objectSelected.getWidth();
    objectSelected = objects[numObjects];
    objectSelected.setEffect(selectedEffect);
    objectSelected.setSize(temp[0], temp[2], temp[1]);
    numObjects++;
  }
}

//creates a positional light at specified position 
function createLight(posX, posZ)
{
  lights[numLights] = new c3dl.PositionalLight();
  lights[numLights].setPosition([posX, 10, posZ]);
  lights[numLights].setDiffuse([2, 2, 2, 2]);
  lights[numLights].setOn(true);
  scn.addLight(lights[numLights]);
  numLights++;
}

//deletes seleted positional light
function deleteLight(lightnum)
{
  scn.removeLight(lights[lightnum]);
  for (var k = lightnum; k < numLights - 1; k++)
  {
    lights[k] = lights[k + 1];
  }
  numLights--;
}

//moves seleted positional light
function moveLight(lightnum, posX, posZ)
{
  lights[lightnum].setPosition([posX, 10, posZ])
}
//creates a wall from one specified position to another 
function createWall(posStart, posEnd)
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
function deleteWall(wallnum)
{
  scn.removeObjectFromScene(walls[wallnum]);
  for (var k = wallnum; k < numWalls - 1; k++)
  {
    walls[k] = walls[k + 1];
  }
  numWalls--;
}

//moves seleted wall
function moveWall(wallnum, posStart, posEnd)
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

//removes everything in the scene
function deleteScene()
{
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
}

function forwardCam()
{
  if (currentCam == 4) currentCam = 0;
  else currentCam++;
  camHeight = cam[currentCam].getPosition()[1];
  newCamHeight = camHeight;
  zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
}

function backCam()
{
  if (currentCam == 0) currentCam = 4;
  else currentCam--;
  camHeight = cam[currentCam].getPosition()[1];
  newCamHeight = camHeight;
  zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
}

function topView()
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

function show2d()
{
  document.getElementById("main2d").setAttribute("style", "display:inline;");
  document.getElementById("main3d").setAttribute("style", "display:none;");
  document.getElementById("maingoogle").setAttribute("style", "display:none;");
  pause3d();
  unpause2d();
}

function show3d()
{
  document.getElementById("main3d").setAttribute("style", "display:inline;");
  document.getElementById("main2d").setAttribute("style", "display:none;");
  document.getElementById("maingoogle").setAttribute("style", "display:none;");
  unpause3d();
  pause2d();
}

function showgoogle()
{
  document.getElementById("maingoogle").setAttribute("style", "display:inline;");
  document.getElementById("main2d").setAttribute("style", "display:none;");
  document.getElementById("main3d").setAttribute("style", "display:none;");
  pause3d();
  pause2d();
}

function Pressed(bvalue)
{
  var bpressed = document.getElementById('pressed');
  bpressed.value = bvalue;
}

function scale()
{
  if (objectSelected)
  {
    pause3d();
    var tester = window.open("scale.html", "Window2", "width=300,height=250");
  }
}

function getSize()
{
  var size = [];
  size[0] = objectSelected.getLength();
  size[1] = objectSelected.getHeight();
  size[2] = objectSelected.getWidth();
  return size;
}

function setSize(length, width, height)
{
  objectSelected.setSize(length, width, height);
}

function getPic(length, width, height)
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

function unpause3d()
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