  //Paths
  const WALL_PATH = "./models/wall/cube.dae";
  //Objects
  const CHAIR_PATH = "./models/chair-modern/models/chair.dae";
  const TABLE_PATH = "./models/wood-table/models/table.dae";
  const LAMP_PATH = "./models/table-lamp/models/lamp.dae";
  const CEILINGLAMP_PATH = "./models/ceiling-lamp/models/ceilinglamp.dae";
  const PICTURE_PATH = "./models/wall-picture/models/picture.dae";
  const FLOOR_PATH = "./models/plane/plane.dae";
  const DUCK_PATH = "./models/duck.dae";
  const PACMAN_PATH = "./models/pacman.dae";
  const REDGHOST_PATH = "./models/redghost.dae";
  const BLUEGHOST_PATH = "./models/blueghost.dae";
  const ORANGEGHOST_PATH = "./models/orangeghost.dae";
  const PINKGHOST_PATH = "./models/pinkghost.dae";
  const PACMANBALL_PATH = "./models/ball.dae";
  const PLAY_PATH = "./models/play.dae";
  const TWITTER_PATH = "./models/twitter.dae";
  const FLICKR_PATH = "./models/flickr.dae";
  const CUSTOMIMG_PATH = "./models/customimage.dae";
  const CUSTOMVIDEO_PATH = "./models/customvideo.dae";
  const CLOCK_PATH = "./models/clock.dae";
  const TV_PATH = "./models/tv/models/tv.dae";
  const SC1_PATH = "./models/sc/810/810OpenCollada.DAE";
  const SC2_PATH = "./models/sc/868/868OpenCollada.DAE";
  const SC3_PATH = "./models/sc/K-108-3/K-108-3OpenCollada.DAE";
  const SC4_PATH = "./models/sc/K-110-3/K-110-3OpenCollada.DAE";
  const SC5_PATH = "./models/sc/k-839/k-839OpenCollada.DAE";
  const SC6_PATH = "./models/sc/K-1454/K-1454OpenCollada.DAE";
  const SC7_PATH = "./models/sc/k-2200/k-2200OpenCollada.DAE";
  const SC8_PATH = "./models/sc/k-2314/k-2314OpenCollada.DAE";
  const SC9_PATH = "./models/sc/k-2605/k-2605OpenCollada.DAE";
  const SC10_PATH = "./models/sc/k-15136/k-15136OpenCollada.DAE";
  const CEILINGLIGHT_PATH = "./models/ceiling-light.dae";
  const CEILINGLIGHT2_PATH = "./models/ceiling-light2.dae";
  const COMPCHAIR_PATH = "./models/computer-chair.dae";
  const LEXMARKPRINTER_PATH = "./models/lexmark-printer.dae";
  const ALIENWAREPC_PATH = "./models/AlienwareArea51Case/models/AlienwareArea51Case.dae";
  const APLLEMACPRO_PATH = "./models/AppleMacPro/models/AppleMacPro.dae";
  const HPMONITOR_PATH = "./models/HP-monitor/models/hp-monitor.dae";
  const CEILINGFAN_PATH = "./models/ceiling-fan/models/fan.dae";
  const COFFEETABLE_PATH = "./models/coffee-table/models/coffee-table.dae";
  const SIDETABLE_PATH = "./models/side-table/models/side-table.dae";
  const TABLE2_PATH = "./models/table2.dae";
  const CHAIR2_PATH = "./models/wood-dinner-chair/models/chair.dae";
  const RACKMOUNTSERVER_PATH = "./models/rack-mount-server-2U.dae";
  const RACKMOUNTSERVER2_PATH = "./models/rack-mount-server-1U.dae";
  const RACKMOUNTSERVER3_PATH = "./models/barracuda350.dae";
  const SERVERRACK_PATH = "./models/APC3100-Cabinet/models/APC3100-Cabinet.dae";
  const SERVERRACK2_PATH = "./models/Server-Rack-with-Keypad/models/Server-Rack-with-Keypad.dae";
  const SERVERRACK3_PATH = "./models/panduit-CS1-server-rack/models/panduit-cn1.dae";
  const SOFA_PATH = "./models/sofa/models/sofa.dae";
  const SOFA2_PATH = "./models/sofa2.dae";
  
(function () {
  c3dl.addMainCallBack(canvasViewer, "objectViewer");
  c3dl.addMainCallBack(canvasMain, "SceneCaster3d");

  ////////////////////////////////////////////////////////////////////////////
  // Model Used
  ////////////////////////////////////////////////////////////////////////////  
  //Adding Models
  c3dl.addModel("./models/sky/skysphere.dae");
  c3dl.addModel(WALL_PATH);
  c3dl.addModel(CHAIR_PATH);
  c3dl.addModel(TABLE_PATH);
  c3dl.addModel(LAMP_PATH);
  c3dl.addModel(CEILINGLAMP_PATH);
  c3dl.addModel(PICTURE_PATH);
  c3dl.addModel(FLOOR_PATH);
  c3dl.addModel(PACMAN_PATH);
  c3dl.addModel(REDGHOST_PATH);
  c3dl.addModel(BLUEGHOST_PATH);
  c3dl.addModel(ORANGEGHOST_PATH);
  c3dl.addModel(PINKGHOST_PATH);
  c3dl.addModel(PACMANBALL_PATH);
  c3dl.addModel(PLAY_PATH);
  c3dl.addModel(TWITTER_PATH);
  c3dl.addModel(FLICKR_PATH);
  c3dl.addModel(CUSTOMIMG_PATH);
  c3dl.addModel(CUSTOMVIDEO_PATH);
  c3dl.addModel(CLOCK_PATH);
  c3dl.addModel(TV_PATH);
  c3dl.addModel(SC1_PATH);
  c3dl.addModel(SC2_PATH);
  c3dl.addModel(SC3_PATH);
  c3dl.addModel(SC4_PATH);
  c3dl.addModel(SC5_PATH);
  c3dl.addModel(SC6_PATH);
  c3dl.addModel(SC7_PATH);
  c3dl.addModel(SC8_PATH);
  c3dl.addModel(SC9_PATH);
  c3dl.addModel(SC10_PATH);
  c3dl.addModel(CEILINGLIGHT_PATH);
  c3dl.addModel(CEILINGLIGHT2_PATH);
  c3dl.addModel(COMPCHAIR_PATH);
  c3dl.addModel(LEXMARKPRINTER_PATH);
  c3dl.addModel(ALIENWAREPC_PATH);
  c3dl.addModel(APLLEMACPRO_PATH);
  c3dl.addModel(HPMONITOR_PATH);
  c3dl.addModel(CEILINGFAN_PATH);
  c3dl.addModel(COFFEETABLE_PATH);
  c3dl.addModel(SIDETABLE_PATH);
  c3dl.addModel(CHAIR2_PATH);
  c3dl.addModel(TABLE2_PATH);
  c3dl.addModel(RACKMOUNTSERVER_PATH);
  c3dl.addModel(RACKMOUNTSERVER2_PATH);
  c3dl.addModel(RACKMOUNTSERVER3_PATH);
  c3dl.addModel(SERVERRACK_PATH);
  c3dl.addModel(SERVERRACK2_PATH);
  c3dl.addModel(SERVERRACK3_PATH);
  c3dl.addModel(SOFA_PATH);
  c3dl.addModel(SOFA2_PATH);
  //Widgets
  const MoveX = "./models/movewidget/x.dae";
  const MoveY = "./models/movewidget/y.dae";
  const MoveZ = "./models/movewidget/z.dae";
/*
  const MoveXZ = "./models/movewidget/xz.dae";
  const MoveXY = "./models/movewidget/xy.dae";
  const MoveZY = "./models/movewidget/zy.dae";
  c3dl.addModel(MoveXZ);
  c3dl.addModel(MoveXY);
  c3dl.addModel(MoveZY);*/
  const ScaleX = "./models/scalewidget/x.dae";
  const ScaleY = "./models/scalewidget/y.dae";
  const ScaleZ = "./models/scalewidget/z.dae";
  const RotateX = "./models/rotatewidget/x.dae";
  const RotateY = "./models/rotatewidget/y.dae";
  const RotateZ = "./models/rotatewidget/z.dae";
  c3dl.addModel(MoveX);
  c3dl.addModel(MoveY);
  c3dl.addModel(MoveZ);
  c3dl.addModel(ScaleX);
  c3dl.addModel(ScaleY);
  c3dl.addModel(ScaleZ);
  c3dl.addModel(RotateX);
  c3dl.addModel(RotateY);
  c3dl.addModel(RotateZ);

  ////////////////////////////////////////////////////////////////////////////
  //SceneCreator Objects  
  //////////////////////////////////////////////////////////////////////////// 
  var SceneObject = function () {
    this.model = new c3dl.Collada();
    //types: wall, floor, ceiling, object
    this.type = null;
    //hang on wall or ceiling. Sit on floor or object
    this.placement = null;
    //Allow objects to sit on object
    this.stand = false;
    //reference to object siting on it
    this.childObjectList = [];
    //reference to object it is sitting on
    this.parentObject = null;
    //picture of the object
    this.picture = null;
    //description of the object
    this.description = null;
    //name of the object
    this.name = null;
    //canvas of special object
    this.canvas = null;
    //processing sketch used to texture object
    this.pjs = null;
    //holds the query string used for getting updates from twitter or flickr
    this.query = null; 
    //holds flickrImgs
    this.flickrImgs = null;
    //holds initalScale
    this.initalScale = null;
    //file path to model
    this.path = null;
    //file path to editable
    this.editable = false;
    
    this.init = function () {
      if (arguments.length >= 4) {
        this.model.init(arguments[0]);
        this.path=arguments[0];
        this.model.centerObject();
        this.type = arguments[1];
        this.placement = arguments[2];
        this.stand = arguments[3];
      }
      if (arguments[4]) {
        this.initalScale = arguments[4];
        this.model.scale(this.initalScale);
      }
      if (arguments[5]) {
        this.name = arguments[5];
      }
      if (arguments[6]) {
        this.description = arguments[6];
      }
      if (arguments[7]) {
        this.picture = arguments[7];
      }
      if (arguments[8]) {
        this.editable = arguments[8];
      }
      this.model.setStatic(true);
    }
    this.initPrimitive = function () {
      if (arguments.length >= 5) {
        this.model = arguments[0];
        this.path= arguments[1];
        this.type = arguments[2];
        this.placement = arguments[3];
        this.stand = arguments[4];
      }
      if (arguments.length >= 6) {
        this.name = arguments[7];
      }
      if (arguments.length >= 7) {
        this.description = arguments[6];
      }
      if (arguments.length >= 8) {
        this.picture = arguments[7];
      }
      this.model.setStatic(true);
    }
    this.getCopy = function () {
      var copy = new SceneObject();
      copy.clone(this);
      return copy;
    }
    this.clone = function (other) {
      this.model = new c3dl.Collada();
      this.model.clone(other.model);
      this.type = other.type;
      this.placement = other.placement;
      this.stand = other.stand;
      this.picture = other.picture;
      this.description = other.description;
      this.name = other.name;
    }
    this.getName = function () {
      return this.name;
    };
    this.getPicture = function () {
      return this.picture;
    };
    this.getDescription = function () {
      return this.description;
    };
    this.setLink = function (link) {
      this.link = link;
    };
    this.moveObject = function (mouseX, mouseY) {
      if (this.placement === "wall") {
        this.oldpos = this.model.getPosition();
        var worldCoords = getIntersectionOnPlane(mouseX, mouseY, this.model.getPosition(), this.model.getDirection());
        var wallCenter = this.parentObject.model.getPosition();
        var height = this.parentObject.model.getHeight() / 2;
        var length = this.parentObject.model.getLength() / 2;
        var difLen = c3dl.subtractVectors([wallCenter[0], 0, wallCenter[2]], [worldCoords[0], 0, worldCoords[2]]);
        difLen = c3dl.vectorLength(difLen);
        difLen = difLen - this.parentObject.model.getWidth() / 2 - this.model.getWidth() / 2;
        var difHeight = worldCoords[1] - wallCenter[1];
        if (difHeight + this.model.getHeight() / 2 < height && difLen + this.model.getLength() / 2 + 1 < length && difLen - this.model.getLength() / 2 - 1 > -length && difHeight - this.model.getHeight() / 2 > -height) {
          this.model.setPosition(worldCoords)
        }
      }
      else if (this.placement === "ceiling") {
        this.oldpos = this.model.getPosition();
        var worldCoords = getworldCoords(mouseX, mouseY, 15);
        this.model.setPosition([worldCoords[0], 15 - (this.model.getHeight() / 2), worldCoords[2]]);
      }
      else {
        this.oldpos = this.model.getPosition();
        var worldCoords = getworldCoords(mouseX, mouseY, this.model.getPosition()[1] - this.model.getHeight() / 2);
        var x = this.oldpos[0] - worldCoords[0];
        var z = this.oldpos[2] - worldCoords[2];
        this.moveTopObjects(x, z);
      }
    };
    this.handleCollision = function (objectCollided) {
      if (this.placement === "object" && objectCollided.type === "object" && objectCollided.stand) {
        if (objectCollided !== this.parentObject) {
          this.placeObjectOnObject(objectCollided);
          commands[curcmd].execute();
          moveObject = false;
          holding = false;
        }
      }
      else if (this.placement === "wall" && objectCollided.type === "wall") {
        if (objectCollided !== this.parentObject) {
          this.model.rotateOnAxis([0,1,0], -this.angle);
          this.placeObjectOnWall(objectCollided);
          commands[curcmd].execute();
          moveObject = false;
          holding = false;
        }
      }
      else {
        this.model.setPosition(this.oldpos);
        for (var i = 0, len = this.childObjectList.length; i < len; i++) {
          this.childObjectList[i].model.setPosition(this.childObjectList[i].oldpos);
        }
      }
    };
    this.placeObjectOnWall = function (wall) {
      this.parentObject = wall;
      wall.childObjectList.push(this);
      var wallPos = wall.model.getPosition();
      var camPos = zcam[currentCam].getPosition();
      this.wallNorm = wall.model.getDirection();
      var difPos = c3dl.subtractVectors(camPos, wallPos);
      c3dl.normalizeVector(difPos);
      var theta = c3dl.vectorDotProduct(difPos, this.wallNorm);
      theta = Math.acos(theta);
      var width = this.model.getWidth() / 2 + wall.model.getWidth() / 2;
      if (theta > Math.PI / 2 && theta < (3 * Math.PI) / 2) {
        this.wallNorm[0] = -1 * this.wallNorm[0];
        this.wallNorm[1] = -1 * this.wallNorm[1];
        this.wallNorm[2] = -1 * this.wallNorm[2];
      }
      this.model.setPosition(c3dl.addVectors(wallPos, c3dl.multiplyVector(this.wallNorm, width)));
      this.model.rotateOnAxis([0,1,0],wall.angle);
      if (Math.round(this.model.sceneGraph.dir[0]*100)/100 != Math.round(this.wallNorm[0]*100)/100 || Math.round(this.model.sceneGraph.dir[1]*100)/100 != Math.round(this.wallNorm[1]*100)/100 || 
          Math.round(this.model.sceneGraph.dir[2]*100)/100 != Math.round(this.wallNorm[2]*100)/100) {
        this.model.rotateOnAxis([0,1,0],Math.PI);
      }
      this.angle = wall.angle;
      this.oldpos = this.model.getPosition();
    };
    this.setAngle = function (ang) {
      this.angle = ang;
    };
    this.setWallStats = function (ang, startPoint, endPoint) {
      this.angle = ang;
      this.startPoint = startPoint;
      this.endPoint = endPoint;
    };
    this.moveTopObjects = function (x, z) {
      this.oldpos = this.model.getPosition();
      this.model.setPosition([this.oldpos[0] - x, this.oldpos[1], this.oldpos[2] - z]);
      for (var i = 0, len = this.childObjectList.length; i < len; i++) {
        this.childObjectList[i].moveTopObjects(x, z);
      }
    };
    this.placeObjectOnObject = function (obj) {
      if (obj.stand) {
        this.oldpos = this.model.getPosition();
        var temp = obj.model.getPosition();
        this.model.setPosition([temp[0], temp[1] + (obj.model.getHeight() / 2) + (this.model.getHeight() / 2) -0.01, temp[2]]);
        obj.childObjectList.push(this);
        this.parentObject = obj;
      }
    };
    this.removeChildFromChildObjectList = function (obj) {
      var foundFlag = false;
      for (var i = 0, len = this.childObjectList.length; i < len; i++) {
        if (this.childObjectList[i] === obj) {
          foundFlag = true;
          this.childObjectList[i] = null;
        }
        else if (foundFlag) {
          this.childObjectList[i-1] = this.childObjectList[i];
        }
      }
       this.childObjectList.pop();
    };
    this.updateWallObjects = function (oldWallPos, wallObjList, oldLength) {    
      this.childObjectList = wallObjList;
      var newLength = this.model.getLength();
      var difLength = newLength / oldLength;
      var m = (this.endPoint[2] - this.startPoint[2]) / (this.endPoint[0] - this.startPoint[0]);
      if (isFinite(m)) {
        var b = (m * -this.startPoint[0]) + this.startPoint[2];
        for (var i = 0, len = this.childObjectList.length; i < len; i++) {
          this.childObjectList[i].parentObject = this;
          this.childObjectList[i].model.yaw(-this.childObjectList[i].angle);
          this.childObjectList[i].model.yaw(this.angle);
          this.childObjectList[i].setAngle(this.angle);
          this.childObjectList[i].wallnorm
          var modelPos = this.childObjectList[i].model.getPosition();

          var x = this.model.getPosition()[0] + ((modelPos[0] - oldWallPos[0]) * difLength);
          var y = (m * x) + b;
          var newPos = [x, modelPos[1], y];
          var norm = this.childObjectList[i].model.getDirection();
          var width = this.model.getWidth() / 2 + this.childObjectList[i].model.getWidth() / 2;
          newPos = c3dl.addVectors(newPos, c3dl.multiplyVector(norm, width));
          this.childObjectList[i].model.setPosition(newPos);
        }
      }
      else {
        var z = oldWallPos[2] - this.model.getPosition()[2];
        for (var i = 0, len = this.childObjectList.length; i < len; i++) {
          this.childObjectList[i].parentObject = this;
          this.childObjectList[i].model.yaw(-this.childObjectList[i].angle);
          this.childObjectList[i].model.yaw(this.angle);
          this.childObjectList[i].setAngle(this.angle);
          var mPos = this.childObjectList[i].model.getPosition();
          var newPos = [this.model.getPosition()[0], mPos[1], (mPos[2] - z)];
          var norm = this.childObjectList[i].model.getDirection();
          var width = this.model.getWidth() / 2 + this.childObjectList[i].model.getWidth() / 2;
          newPos = c3dl.addVectors(newPos, c3dl.multiplyVector(norm, width));
          this.childObjectList[i].model.setPosition(newPos);
        }
      }
    };
  }

  Link = function (url, name, loadIn) {
    this.url = url;
    this.name = name;
    this.loadIn = loadIn;
  }

  var MoveWidget = function () {
    //models
    this.model = []
    for (var i = 0; i < 3; i++) {
      this.model[i] = new c3dl.Collada();
    }
    this.model[0].init(MoveX);
    this.model[0].setTexture("./images/x.jpg");
    this.model[1].init(MoveY);
    this.model[1].setTexture("./images/y.jpg");
    this.model[2].init(MoveZ);
    this.model[2].setTexture("./images/z.jpg");
    for (var i = 0; i < 3; i++) {
      scn.addObjectToScene(this.model[i]);
      this.model[i].setVisible(false);
    }

    this.visible = false;
    this.setVisible = function (visible) {
      for (var i = 0; i < 3; i++) {
        this.model[i].setVisible(visible);
      }
      this.visible = visible;
    }
    this.setObject = function (obj) {
      var pos = obj.model.getPosition();
      for (var i = 0; i < 3; i++) {
        this.model[i].setPosition(pos);
      }
      this.model[0].setLength(obj.model.getBoundingVolume().aabb.getLength());
      this.model[1].setHeight(obj.model.getBoundingVolume().aabb.getHeight());
      this.model[2].setWidth(obj.model.getBoundingVolume().aabb.getWidth());
      this.obj = objectSelected;
    }
    this.getVisible = function () {
      return this.visible;
    }
    this.selected = function () {
      this.x = mouseX;
      this.y = mouseY;
    }
    this.moveObject = function (obj, selectedAxis) {
      var pos = this.obj.model.getPosition();
      this.obj.oldpos = pos;
      if (selectedAxis === this.model[0]) {
        var worldCoords = getworldCoords(mouseX, mouseY, this.obj.model.getPosition()[1]);
        var worldCoordsOrig = getworldCoords(this.x, this.y, this.obj.model.getPosition()[1]);
        var dif = worldCoords[0] - worldCoordsOrig[0];
        this.obj.model.setPosition([pos[0] + dif, pos[1], pos[2]]);
      }
      else if (selectedAxis === this.model[1]) {
        var worldCoords = getIntersectionOnPlane(mouseX, mouseY, this.obj.model.getPosition(), scn.getCamera().getDir());
        var worldCoordsOrig = getIntersectionOnPlane(this.x, this.y, this.obj.model.getPosition(), scn.getCamera().getDir());
        var dif = worldCoords[1] - worldCoordsOrig[1];
        this.obj.model.setPosition([pos[0], pos[1] + dif, pos[2]]);
      }
      else if (selectedAxis === this.model[2]) {
        var worldCoords = getworldCoords(mouseX, mouseY, this.obj.model.getPosition()[1]);
        var worldCoordsOrig = getworldCoords(this.x, this.y, this.obj.model.getPosition()[1]);
        var dif = worldCoords[2] - worldCoordsOrig[2];
        this.obj.model.setPosition([pos[0], pos[1], pos[2] + dif]);
      }
      for (var i = 0; i < 3; i++) {
        this.model[i].setPosition(this.obj.model.getPosition());
      }
      this.selected();
    }
  }

  var ScaleWidget = function () {
    //models
    this.model = []
    for (var i = 0; i < 3; i++) {
      this.model[i] = new c3dl.Collada();
    }
    this.model[0].init(ScaleX);
    this.model[0].setTexture("./images/x.jpg");
    this.model[1].init(ScaleY);
    this.model[1].setTexture("./images/y.jpg");
    this.model[2].init(ScaleZ);
    this.model[2].setTexture("./images/z.jpg");

    for (var i = 0; i < 3; i++) {
      scn.addObjectToScene(this.model[i]);
      this.model[i].setVisible(false);
    }

    this.visible = false;
    this.setVisible = function (visible) {
      for (var i = 0; i < 3; i++) {
        this.model[i].setVisible(visible);
      }
      this.visible = visible;
    }
    this.setObject = function (obj) {
      var pos = obj.model.getPosition();
      for (var i = 0; i < 3; i++) {
        this.model[i].setPosition(pos);
      }
      this.model[0].setLength(obj.model.getLength());
      this.model[1].setHeight(obj.model.getHeight());
      this.model[2].setWidth(obj.model.getWidth());
      this.model[0].sceneGraph.dir = obj.model.sceneGraph.dir;
      this.model[1].sceneGraph.dir = obj.model.sceneGraph.dir;
      this.model[2].sceneGraph.dir = obj.model.sceneGraph.dir;
      this.model[0].sceneGraph.left = obj.model.sceneGraph.left;
      this.model[1].sceneGraph.left = obj.model.sceneGraph.left;
      this.model[2].sceneGraph.left = obj.model.sceneGraph.left;
      this.model[0].sceneGraph.up = obj.model.sceneGraph.up;
      this.model[1].sceneGraph.up = obj.model.sceneGraph.up;
      this.model[2].sceneGraph.up = obj.model.sceneGraph.up;
      this.obj = objectSelected;
    }
    this.getVisible = function () {
      return this.visible;
    }
    this.selected = function () {
      this.x = mouseX;
      this.y = mouseY;
    }
    this.scaleObject = function (obj, selectedAxis) {
      var length = obj.model.getLength(),
          width = obj.model.getWidth(),
          height = obj.model.getHeight();
      if (selectedAxis === this.model[0]) {
        var worldCoords = getworldCoords(mouseX, mouseY, this.obj.model.getPosition()[1]);
        worldCoords[1] = getIntersectionOnPlane(mouseX, mouseY, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoords = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoords);
        var worldCoordsOrig = getworldCoords(this.x, this.y, this.obj.model.getPosition()[1]);
        worldCoordsOrig[1] = getIntersectionOnPlane(this.x, this.y, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoordsOrig = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoordsOrig);
        var dif = worldCoords[0] / worldCoordsOrig[0];
        if (length * dif > 0) {
          length = length * dif;
        }
      }
      else if (selectedAxis === this.model[1]) {
        var worldCoords = getworldCoords(mouseX, mouseY, this.obj.model.getPosition()[1]);
        worldCoords[1] = getIntersectionOnPlane(mouseX, mouseY, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoords = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoords);
        var worldCoordsOrig = getworldCoords(this.x, this.y, this.obj.model.getPosition()[1]);
        worldCoordsOrig[1] = getIntersectionOnPlane(this.x, this.y, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoordsOrig = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoordsOrig);
        var dif = worldCoords[1] / worldCoordsOrig[1];
        if (height * dif > 0) {
          height = height * dif;
        }
      }
      else if (selectedAxis === this.model[2]) {
        var worldCoords = getworldCoords(mouseX, mouseY, this.obj.model.getPosition()[1]);
        worldCoords[1] = getIntersectionOnPlane(mouseX, mouseY, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoords = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoords);
        var worldCoordsOrig = getworldCoords(this.x, this.y, this.obj.model.getPosition()[1]);
        worldCoordsOrig[1] = getIntersectionOnPlane(this.x, this.y, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoordsOrig = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoordsOrig);
        var dif = worldCoords[2] / worldCoordsOrig[2];
        if (width * dif > 0) {
          width = width * dif;
        }
      }
      
      obj.model.setSize(length, width, height);         
      this.model[0].setLength(length);
      this.model[1].setHeight(height);
      this.model[2].setWidth(width);
      this.selected();
    }
  }

  var RotateWidget = function () {
    //models
    this.model = [];
    this.l = new c3dl.Line();
    this.l.setColors([255,255,0],[255,255,0]);
    this.l.setWidth(4);
    scn.addObjectToScene(this.l);
    this.l.setVisible(false);
    for (var i = 0; i < 3; i++) {
      this.model[i] = new c3dl.Collada();
    }
    this.model[0].init(RotateX);
    this.model[0].setTexture("./images/x.jpg");
    this.model[1].init(RotateY);
    this.model[1].setTexture("./images/y.jpg");
    this.model[2].init(RotateZ);
    this.model[2].setTexture("./images/z.jpg");

    for (var i = 0; i < 3; i++) {
      scn.addObjectToScene(this.model[i]);
      this.model[i].setVisible(false);
    }

    this.visible = false;
    this.setVisible = function (visible) {
      for (var i = 0; i < 3; i++) {
        this.model[i].setVisible(visible);
      }
      this.visible = visible;
    }
    this.setObject = function (obj) {
      var pos = obj.model.getPosition();
      for (var i = 0; i < 3; i++) {
        this.model[i].setPosition(pos);
      }
      var longest = obj.model.getHeight();
      longest = (longest < obj.model.getLength()) ? obj.model.getLength() : longest;
      longest = (longest < obj.model.getWidth()) ? obj.model.getWidth() : longest;
      this.model[0].setSize(0.1, longest+1, longest+1);
      this.model[1].setSize(longest+1, longest+1, 0.1);
      this.model[2].setSize(longest+1, 0.1, longest+1);
      this.obj = objectSelected;
    }
    this.getVisible = function () {
      return this.visible;
    }
    this.selected = function () {
      this.x = mouseX;
      this.y = mouseY;
    }
    this.showLineTangent = function (visible) {
      this.l.setVisible(visible);
    }
    this.rotateObject = function (obj, selectedAxis) {
      this.showLineTangent(false);
      var centerPos = obj.model.getPosition();
      //rotate around X axis
      if (selectedAxis === this.model[0]) {
        //set the angle it have been rotated by in the X to 0 if it is null
        if (!obj.angleX) {
          obj.angleX = 0;
        }
        //rotate object back the original position
        obj.model.rotateOnAxis([1, 0, 0], -obj.angleX);
        //calculate the angle from the rotation  axis and the position of the cam to determine how to handle it
        var temp = c3dl.normalizeVector(c3dl.subtractVectors(obj.model.getPosition(), zcam[currentCam].getPosition()));
        var angle = c3dl.vectorDotProduct([1, 0, 0], temp);
        if (angle < -0.14 || angle > 0.14) {
          this.pointOnSphere = getIntersectionOnPlane(this.x, this.y, obj.model.getPosition(), [1, 0, 0]);
          //calculate the line equation for the line tangent from the rotate widget
          var m = -1 * (this.pointOnSphere[2] - centerPos[2]) / (this.pointOnSphere[1] - centerPos[1]);
          var b = this.pointOnSphere[1] - (m * this.pointOnSphere[2]);
          var x = getIntersectionOnPlane(mouseX, mouseY, obj.model.getPosition(), [1, 0, 0])[2];
          var y = (m * x) + b;
          
          var x2 = getIntersectionOnPlane(this.x, this.y, obj.model.getPosition(), [1, 0, 0])[2];
          var y2 = (m * x2) + b;

          //angle in between tangent and mouse pos
          obj.angleX = -1*(((y - y2)/m)/3);
          //drawing the line tangent
          temp = (m * (this.pointOnSphere[2]-1)) + b;
          var pos1 = [this.pointOnSphere[0], temp, this.pointOnSphere[2]-1];
          var temp2 = (m * (this.pointOnSphere[2]+1)) + b;
          var pos2 = [this.pointOnSphere[0], temp2, this.pointOnSphere[2]+1];          
          this.l.setCoordinates(pos1,pos2);
          
          pos2 = getIntersectionOnPlane(mouseX, mouseY, obj.model.getPosition(), [1, 0, 0]);
          pos1 = c3dl.normalizeVector(c3dl.subtractVectors(pos1, this.pointOnSphere));
          pos2 = c3dl.normalizeVector(c3dl.subtractVectors(pos2, this.pointOnSphere));
          var angle = c3dl.vectorDotProduct(pos1, pos2);
          angle = Math.acos(angle);

          //Make it so that the object rotates based on the difference on the line tangent 
          if (angle < Math.PI / 2) {
            angle = (1 - (angle / (Math.PI / 2))) * 2;
          }
          else {
            angle = (angle - Math.PI / 2) / (Math.PI / 2) * 2;
          }

          //corrects the rotation so it behaves the same 
          obj.angleX = obj.angleX * angle;
          if (obj.model.getPosition()[1] < this.pointOnSphere[1]) {
              obj.angleX = -1 * obj.angleX;
          }
          this.showLineTangent(true);
        }
        else {
          angle = c3dl.vectorDotProduct([1, 0, 0], zcam[currentCam].getUp());
          if (angle < -0.14 || angle > 0.14) {
            if (obj.model.getPosition()[1] > zcam[currentCam].getPosition()[1]) {
              obj.angleX = -(mouseX - this.x) / 100;
            }
            else {
              obj.angleX = (mouseX - this.x) / 100;
            }
          }
          else {
            if (obj.model.getPosition()[2] > zcam[currentCam].getPosition()[2]) {
              obj.angleX = -(mouseY - this.y) / 100;
            }
            else {
              obj.angleX = (mouseY - this.y) / 100;
            }
          }
        }
        obj.model.rotateOnAxis([1, 0, 0], obj.angleX);
      }

      //rotate around Y axis
      else if (selectedAxis === this.model[1]) {
        //set the angle it have been rotated by in the Z to 0 if it is null
        if (!obj.angleY) {
          obj.angleY = 0;
        }
        //rotate object back the original position
        obj.model.rotateOnAxis([0, 1, 0], -obj.angleY);
        //calculate the angle from the rotation  axis and the position of the cam to determine how to handle it
        var temp = c3dl.normalizeVector(c3dl.subtractVectors(obj.model.getPosition(), zcam[currentCam].getPosition()));
        var angle = c3dl.vectorDotProduct([0, 1, 0], temp);
        if (angle < -0.14 || angle > 0.14) {
          this.pointOnSphere = getworldCoords(this.x, this.y, obj.model.getPosition()[1]);
          //calculate the line equation for the line tangent from the rotate widget
          var m = -1 * (this.pointOnSphere[0] - centerPos[0]) / (this.pointOnSphere[2] - centerPos[2]);
          var b = this.pointOnSphere[2] - (m * this.pointOnSphere[0]);
          var x = getworldCoords(mouseX, mouseY, obj.model.getPosition()[1])[0];
          var y = (m * x) + b;
          
          var x2 = getworldCoords(this.x, this.y, obj.model.getPosition()[1])[0];
          var y2 = (m * x2) + b;

          //angle in between tangent and mouse pos
          obj.angleY = -1*(((y - y2)/m)/3);
          //drawing the line tangent
          temp = (m * (this.pointOnSphere[0]-1)) + b;
          var pos1 = [this.pointOnSphere[0]-1, this.pointOnSphere[1], temp];
          var temp2 = (m * (this.pointOnSphere[0]+1)) + b;
          var pos2 = [this.pointOnSphere[0]+1, this.pointOnSphere[1], temp2];
          this.l.setCoordinates(pos1,pos2);
          
          pos2 = getworldCoords(mouseX, mouseY, obj.model.getPosition()[1]);
          pos1 = c3dl.normalizeVector(c3dl.subtractVectors(pos1, this.pointOnSphere));
          pos2 = c3dl.normalizeVector(c3dl.subtractVectors(pos2, this.pointOnSphere));
          var angle = c3dl.vectorDotProduct(pos1, pos2);
          angle = Math.acos(angle);

          //Make it so that the object rotates based on the difference on the line tangent 
          if (angle < Math.PI / 2) {
            angle = (1 - (angle / (Math.PI / 2))) * 2;
          }
          else {
            angle = (angle - Math.PI / 2) / (Math.PI / 2) * 2;
          }

          //corrects the rotation so it behaves the same 
          obj.angleY = obj.angleY * angle;
          if (obj.model.getPosition()[2] < this.pointOnSphere[2]) {
              obj.angleY = -1 * obj.angleY;
          }
        }
        else {
          obj.angleY = (mouseX - this.x) / 100;
        }
        obj.model.rotateOnAxis([0, 1, 0], obj.angleY);
        this.showLineTangent(true);
      }
      
      //rotate around Z axis
      else if (selectedAxis === this.model[2]) {
        //set the angle it have been rotated by in the Z to 0 if it is null
        if (!obj.angleZ) {
          obj.angleZ = 0;
        }
        //rotate object back the original position
        obj.model.rotateOnAxis([0, 0, 1], -obj.angleZ);
        //calculate the angle from the rotation  axis and the position of the cam to determine how to handle it
        var temp = c3dl.normalizeVector(c3dl.subtractVectors(obj.model.getPosition(), zcam[currentCam].getPosition()));
        var angle = c3dl.vectorDotProduct([0, 0, 1], temp);
        if (angle < -0.14 || angle > 0.14) {
          this.pointOnSphere = getIntersectionOnPlane(this.x, this.y, obj.model.getPosition(), [0, 0, 1]);
          //calculate the line equation for the line tangent from the rotate widget
          var m = -1 * (this.pointOnSphere[0] - centerPos[0]) / (this.pointOnSphere[1] - centerPos[1]);
          var b = this.pointOnSphere[1] - (m * this.pointOnSphere[0]);
          var x = getIntersectionOnPlane(mouseX, mouseY, obj.model.getPosition(), [0, 0, 1])[0];
          var y = (m * x) + b;
          
          var x2 = getIntersectionOnPlane(this.x, this.y, obj.model.getPosition(), [0, 0, 1])[0];
          var y2 = (m * x2) + b;

          //angle in between tangent and mouse pos
          obj.angleZ = ((y - y2)/m)/3;
          //drawing the line tangent
          temp = (m * (this.pointOnSphere[0]-1)) + b;
          var pos1 = [this.pointOnSphere[0]-1, temp, this.pointOnSphere[2]];
          var temp2 = (m * (this.pointOnSphere[0]+1)) + b;
          var pos2 = [this.pointOnSphere[0]+1, temp2, this.pointOnSphere[2]];
          this.l.setCoordinates(pos1,pos2);
          
          pos2 = getIntersectionOnPlane(mouseX, mouseY, obj.model.getPosition(), [0, 0, 1]);
          pos1 = c3dl.normalizeVector(c3dl.subtractVectors(pos1, this.pointOnSphere));
          pos2 = c3dl.normalizeVector(c3dl.subtractVectors(pos2, this.pointOnSphere));
          var angle = c3dl.vectorDotProduct(pos1, pos2);
          angle = Math.acos(angle);

          //Make it so that the object rotates based on the difference on the line tangent 
          if (angle < Math.PI / 2) {
            angle = (1 - (angle / (Math.PI / 2))) * 2;
          }
          else {
            angle = (angle - Math.PI / 2) / (Math.PI / 2) * 2;
          }

          //corrects the rotation so it behaves the same 
          obj.angleZ = obj.angleZ * angle;
          if (obj.model.getPosition()[1] < this.pointOnSphere[1]) {
              obj.angleZ = -1 * obj.angleZ;
          }
          this.showLineTangent(true);
        }
        else {
          angle = c3dl.vectorDotProduct([0, 0, 1], zcam[currentCam].getUp());
          if (angle < -0.14 || angle > 0.14) {
            if (obj.model.getPosition()[1] > zcam[currentCam].getPosition()[1]) {
              obj.angleZ = (mouseX - this.x) / 100;
            }
            else {
              obj.angleZ = -(mouseX - this.x) / 100;
            }
          }
          else {
            if (obj.model.getPosition()[0] > zcam[currentCam].getPosition()[0]) {
              obj.angleZ = (mouseY - this.y) / 100;
            }
            else {
              obj.angleZ = -(mouseY - this.y) / 100;
            }
          }
        }
        obj.model.rotateOnAxis([0, 0, 1], obj.angleZ);
      }
    }
  }

  var toggleMoveWidget = this.toggleMoveWidget = function () {
    if (objectSelected && !mWidget.obj) {
      mWidget.setVisible(true);
      mWidget.setObject(objectSelected);
      sWidget.setVisible(false);
      sWidget.obj = null;
      rWidget.setVisible(false);
      rWidget.obj = null;
    }
    else {
      mWidget.setVisible(false);
      mWidget.obj = null;
    }
  }
  var toggleScaleWidget = this.toggleScaleWidget = function () {
    if (objectSelected && !sWidget.obj) {
      sWidget.setVisible(true);
      sWidget.setObject(objectSelected);
      mWidget.setVisible(false);
      mWidget.obj = null;
      rWidget.setVisible(false);
      rWidget.obj = null;
    }
    else {
      sWidget.setVisible(false);
      sWidget.obj = null;
    }
  }
  var toggleRotateWidget = this.toggleRotateWidget = function () {
    if (objectSelected && !rWidget.obj) {
      rWidget.setVisible(true);
      rWidget.setObject(objectSelected);
      mWidget.setVisible(false);
      mWidget.obj = null;
      sWidget.setVisible(false);
      sWidget.obj = null;
    }
    else {
      rWidget.setVisible(false);
      rWidget.obj = null;
    }
  }
  var closeAllWidgets = function () {
    rWidget.setVisible(false);
    rWidget.obj = null;
    mWidget.setVisible(false);
    mWidget.obj = null;
    sWidget.setVisible(false);
    sWidget.obj = null;
  }
  
  var Tweet = function () {
    this.img = null;
    this.user = null;
    this.text = null;
    this.time = null;
  }
   
  var getTweets = this.getTweets = function(query, numTweets) {  
    var url="http://search.twitter.com/search.json?rpp=5&callback=?&q=";
    var newTweets = [];
    $.getJSON(url+query,function(json){
      $.each(json.results, function(i, t){
        newTweets[i] = new Tweet();     
        newTweets[i].img = t.profile_image_url;
        newTweets[i].text = t.text;
        newTweets[i].user = t.from_user;    
      });
      tweets[numTweets] =newTweets;
    });
  }

  ////////////////////////////////////////////////////////////////////////////
  // Variables
  ////////////////////////////////////////////////////////////////////////////
  var objectSelected = null,
      selectedEffect = null,
      buttons = [],
      moveObject = null,
      worldCoords = null,
      zoom = 0,
      camHeight = 10,
      newCamHeight = null,
      lights = [],
      numLights = 0,
      walls = [],
      numWalls = 0,
      objects = [],
      numObjects = 0,
      rot = 0,
      camLeftRight = null,
      camUpDown = null,
      scaling = false,
      rotating = false,
      sceneName = null,
      scalingObject = null,
      rotatingObject = null,
      wallPos2d = [],
      enclosures = [],
      usedWalls = [],
      objLocalTree = null,
      eTree = new ETree,
      pointsUsed = [],
      closedNodes = [],
      tiltHotKey = false,
      heightZoomHotKey = false,
      scn = null,
      scnViewer = null,
      camViewer = new c3dl.FreeCamera(),
      objectViewing = null,
      viewer = false,
      holding = false,
      wallSelected = null,
      mWidget = null,
      sWidget = null,
      rWidget = null,
      selectedAxis = null,
      updateTimer = 0,
      fCounter = 0,
	    tweets = [],
      roofs = [],
      floors = [],
      dialogOpen = false,
      nextDialog;
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
  var mouseX = 0,
      mouseY = 0,
      oldMouseX = 0,
      oldMouseY = 0,
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
  })();
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
        key_q = false,
        key_shift = false,
        key_p = false,
        key_del = false;
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
      "KEY_Q": key_q,
      "KEY_SHIFT": key_shift,
      "KEY_P": key_p,
      "KEY_Del": key_del,
    };
  })();

  ////////////////////////////////////////////////////////////////////////////
  // Constants 
  ////////////////////////////////////////////////////////////////////////////
  const CAM_MOVE_SPEED = 2;
  const SIDEWAYS = 0;
  const FORWARD = 1;
  // Canvas
  var CANVAS_WIDTH = 0,
    CANVAS_HEIGHT = 0;
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
  const KEY_P = 80;
  const KEY_SHIFT = 16;
  const KEY_Del = 46;

  ////////////////////////////////////////////////////////////////////////////
  // Functions 
  ////////////////////////////////////////////////////////////////////////////
  //When a key is pressed down

  function onKeyDown(event) {
    if (!dialogOpen) {
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
  }

  //When a key is released down

  function onKeyUp(event) {
    if (!dialogOpen) {
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
        heightZoomHotKey = (heightZoomHotKey) ? false : true;
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
        tiltHotKey = (tiltHotKey) ? false : true;
        break;
      case KEY_SHIFT:
        keysDown.KEY_SHIFT = false;
        break;
      case KEY_Del:
        deleteSelected();
        break;
      case KEY_P:
        if (keysDown.KEY_SHIFT) { 
          var img = document.createElement('img');
          document.getElementById('mainImages').appendChild(img);
          img.src = getPNG();
        }
        break;
      default:
        break;
      }
    }
  }

  //When a button is pressed from html
  var buttonOn = this.buttonOn = function (buttonID) {
    switch (buttonID) {
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
  var buttonOff = this.buttonOff = function (buttonID) {
    switch (buttonID) {
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

  //mouse events

  function mouseUp(event) {    
    if (moveObject && commands[curcmd] === moveObjectCommand && !mWidget.getVisible()) {
      commands[curcmd].execute();
    }
    else if (selectedAxis && commands[curcmd] === moveObjectCommand && mWidget.getVisible()) {
      commands[curcmd].execute();
    }
    else if (selectedAxis && commands[curcmd] === scaleCommand && sWidget.getVisible()) {
      commands[curcmd].execute();
    }
    else if (selectedAxis && rWidget.getVisible()) {
      commands[curcmd].execute();
    }

    moveObject = false;
    holding = false;
    selectedAxis = null;
    for (var j = 0; j < 3; j++) {
      mWidget.model[j].setEffect(c3dl.effects.STANDARD);
      sWidget.model[j].setEffect(c3dl.effects.STANDARD);
      rWidget.model[j].setEffect(c3dl.effects.STANDARD);
    }
    if (rWidget.getVisible()) {
      rWidget.pointOnSphere = null;
      objectSelected.angleY = null;
      objectSelected.angleZ = null;
      objectSelected.angleX = null;
      rWidget.showLineTangent(false);
    }
  }

  function mouseDown(event) {
    oldMouseX = mouseX;
    oldMouseY = mouseY;
    holding = true;
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

    if (viewer) {
      var curPos = camViewer.getPosition();
      if (-delta < 0) {
        camViewer.setPosition([curPos[0], curPos[1], curPos[2] + 1]);
      }
      else {
        camViewer.setPosition([curPos[0], curPos[1], curPos[2] - 1]);
      }
    }
    else {
      if (heightZoomHotKey) {
        if (-delta < 0) {
          if (camHeight > 0) {
            camHeight--;
          }
        }
        // towards screen
        else {
          if (camHeight < 50) {
            camHeight++;
          }
        }
      }
      else {
        // towards user
        if (-delta < 0) {
          if (zoom > 0) {
            zoom--;
          }
        }
        // towards screen
        else {
          if (zoom < 50) {
            zoom++;
          }
        }
      }
    }
  }

  //Shows the desired feild and pauses hidden
  var show2d = this.show2d = function () {
    hideAll();
    document.getElementById("main2d").setAttribute("style", "display:inline;");
    unpause2d();
  }
  var show3d = this.show3d = function () {
    hideAll();
    document.getElementById("main3d").setAttribute("style", "display:inline;");
    unpause3d();
  }
  var showImages = this.showImages = function () {
    hideAll();
    document.getElementById("mainImages").setAttribute("style", "display:inline;");
  }
  var showTwitter = this.showTwitter = function () {
    hideAll();
    document.getElementById("TwitterDiv").setAttribute("style", "display:inline;");
  }
  var showFlickr = this.showFlickr = function () {
    hideAll();
    document.getElementById("FlickrDiv").setAttribute("style", "display:inline;");
  }
  var showImageSrcDiv = this.showImageSrcDiv = function () {
    hideAll();
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:inline;");
  }
 
   var showVideoSrcDiv = this.showVideoSrcDiv = function () {
    hideAll();
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:inline;");
  }
  
  var updateTexturesInScene = this.updateTexturesInScene = function () {

    var primitiveList = objectViewing.getPrimitiveSets();
    var newPrimitiveList = objectSelected.model.getPrimitiveSets();
    for (var i = 0; i < primitiveList.length; i++) {
      newPrimitiveList[i].texture = primitiveList[i].getTexture();
    }
    show3d();
  }
  
  
  var editObjectTextures = this.editObjectTextures = function () {
    if (objectSelected) {
      if (objectViewing) {
        scnViewer.removeObjectFromScene(objectViewing);
      }
      objectViewing = new c3dl.Collada();
      objectViewing.clone(objectSelected.model);
      scnViewer.addObjectToScene(objectViewing);
      objectViewing.setPosition([0, 0, 0]);
      camViewer.setPosition([0, 0, 30]);
      hideAll();
      document.getElementById("viewerMain").setAttribute("style", "display:inline;");
      document.getElementById("viewer-buttons").setAttribute("style", "display:none;");
      document.getElementById("object-textures").setAttribute("style", "display:inline;");
      if (document.getElementById("texture-table")) {
        document.getElementById("object-textures").removeChild(document.getElementById("texture-table"));
      }
      document.getElementById("updateTexture-buttons").setAttribute("style", "display:inline;");
      var table = document.createElement("table");
      table.setAttribute("id","texture-table");
      table.setAttribute("border","1");
      var row = document.createElement("tr");
      var col1 = document.createElement("th");
      var col2 = document.createElement("th");
      var col3 = document.createElement("th");
      col1.innerHTML = "Current Texture";
      col2.innerHTML = "Edit";
      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      table.appendChild(row);
      var primitiveList = objectViewing.getPrimitiveSets();
      var imgs = [];
      for (var i = 0; i < primitiveList.length; i++) {
        imgs[i] = new Image();
        if (primitiveList[i].getTexture()) {
          imgs[i].src = primitiveList[i].getTexture();
        }
        else {
          imgs[i].src = "./images/none.jpg";
        }
        imgs[i].width = 128;
        imgs[i].height = 128;
        row = document.createElement("tr");
        col1 = document.createElement("td");
        col2 = document.createElement("td");
        col3 = document.createElement("td");
        var url = document.createElement("input");
        var urlButton = document.createElement("input");
        urlButton.type = 'button';
        urlButton.value = "Update";
        urlButton.onclick = function(url, primitive, img) {
          return function(){
            var img = new Image();
            img.src = url.value;
            primitive.texture = img;
          }; 
        }(url, primitiveList[i], imgs[i]);
        
        //Create ColorPickers
        var colorPicker = document.createElement("div");
        $(function () {
          $(colorPicker).ColorPicker({
            flat: true, 			
            onSubmit: function(col3, primitive, img) {
              return function (hsb, hex, rgb) {
                var canvas = document.createElement('canvas');
                canvas.width = 128;
                canvas.height = 128;
                var canvasContext = canvas.getContext('2d');
                canvasContext.fillStyle = "#"+hex;
                canvasContext.fillRect(0, 0, 128, 128);
                img.src = canvas.toDataURL('image/png');
                primitive.texture = img;
              }
            }(col3, primitiveList[i], imgs[i])
          });
        });

        col1.appendChild(imgs[i]);
        col2.innerHTML = "Enter image URL:";
        col2.appendChild(url);
        col2.appendChild(urlButton);
        col3.appendChild(colorPicker);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        table.appendChild(row);
      }
      document.getElementById("object-textures").appendChild(table);
      scnViewer.unpauseScene();
      viewer = true;
    }
  }

  var viewObject = this.viewObject = function () {
    if (objectSelected) {
      if (objectViewing) {
        scnViewer.removeObjectFromScene(objectViewing);
      }
      objectViewing = new c3dl.Collada();
      objectViewing.clone(objectSelected.model);
      scnViewer.addObjectToScene(objectViewing);
      objectViewing.setPosition([0, 0, 0]);
      camViewer.setPosition([0, 0, 30]);
      hideAll();
      document.getElementById("viewerMain").setAttribute("style", "display:inline;");
      document.getElementById("viewer-buttons").setAttribute("style", "display:inline;");
      document.getElementById("object-textures").setAttribute("style", "display:none;");
      document.getElementById("updateTexture-buttons").setAttribute("style", "display:none;");
      scnViewer.unpauseScene();
      viewer = true;
    }
  }
  
  var hideAll = function () {
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:none;");
    document.getElementById("FlickrDiv").setAttribute("style", "display:none;");
    document.getElementById("TwitterDiv").setAttribute("style", "display:none;");
    document.getElementById("mainImages").setAttribute("style", "display:none;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
    viewer = false;
  }
  var createClock = this.createClock = function () {
    createObject(CLOCK_PATH, "object", "wall", false,[0.1, 0.1, 0.1]); 
    objectSelected.canvas = document.createElement('CANVAS');  
    objectSelected.canvas.setAttribute('id',"Clock");  
    objectSelected.canvas.setAttribute('width',256);  
    objectSelected.canvas.setAttribute('height',256);  
    var oRequest = new XMLHttpRequest();
    oRequest.open("GET","js/clock.pjs",false);
    oRequest.setRequestHeader("User-Agent",navigator.userAgent);
    oRequest.send(null);
    var script = oRequest.responseText;
    objectSelected.pjs = new Processing(objectSelected.canvas, script);      
    objectSelected.model.setTexture(objectSelected.canvas);
  }
  var createTwitter = this.createTwitter = function (query) {
    if (objectSelected && objectSelected.editing) {
      objectSelected.editing = null;
    }
    else {
      createObject(TWITTER_PATH, "object", "wall", false, [2, 4, 0.25], "Twitter", "Displays a twitter feed", "images/sidebar/twitter.jpg", true); 
    }
    objectSelected.canvas = document.createElement('CANVAS');  
    objectSelected.canvas.setAttribute('id',"Twitter");  
    objectSelected.canvas.setAttribute('width',256);  
    objectSelected.canvas.setAttribute('height',512);  
    var oRequest = new XMLHttpRequest();
    oRequest.open("GET","js/twitter.pjs",false);
    oRequest.setRequestHeader("User-Agent",navigator.userAgent);
    oRequest.send(null);
    var script = oRequest.responseText;
    objectSelected.pjs = new Processing(objectSelected.canvas, script); 
    objectSelected.query = query;      
    objectSelected.model.setTexture(objectSelected.canvas);
  }
  
  var createFlickr = this.createFlickr = function (query) {
    if (objectSelected && objectSelected.editing) {
      objectSelected.editing = null;
    }
    else {
    createObject(FLICKR_PATH, "object", "wall", false, [2, 2, 0.25], "Flickr", "Displays a flickr album", "images/sidebar/flickr.jpg", true); 
    }
    objectSelected.canvas = document.createElement('CANVAS'); 
    objectSelected.canvasImage = new Image();
    objectSelected.canvasImage.obj = objectSelected;
    objectSelected.query = query;
    $.getJSON(query,null, function(data){      
    objectSelected.flickrImgs = [];
      $.each(data.items, function(i,item){
        objectSelected.flickrImgs[i] = item.media.m;
      });
    objectSelected.canvasImage.src = objectSelected.flickrImgs[0];
    });
    objectSelected.model.setTexture(objectSelected.canvasImage);
    starupdateTimer();
  }   
    
  var createCustomImgObject = this.createCustomImgObject = function (src) {
    if (objectSelected && objectSelected.editing) {
      objectSelected.editing = null;
    }
    else {
      createObject(CUSTOMIMG_PATH, "object", "wall", false, [2, 2, 0.25], "CustomImage", "Displays a custom image from a selected url", true); 
    }
    objectSelected.canvasImage = new Image();
    objectSelected.canvasImage.obj = objectSelected;
    objectSelected.canvasImage.src = src;
    document.getElementById('cUrl').value = "";
    objectSelected.model.setTexture(objectSelected.canvasImage);
    show3d();
  }   
  
  var createVideoObject = this.createVideoObject = function (src) {
    if (objectSelected && objectSelected.editing) {
      objectSelected.editing = null;
    }
    else {
      createObject(CUSTOMVIDEO_PATH, "object", "wall", false,[2, 2, 0.25], "CustomVideo", "Displays a custom video from a selected url", true); 
    }
    document.getElementById('vUrl').value = "";
    objectSelected.video = document.createElement('video');
    objectSelected.video.setAttribute('id',"video");  
    objectSelected.video.setAttribute('src',src);  
    objectSelected.video.setAttribute('autoplay',"autoplay");  
    objectSelected.video.setAttribute('loop',"loop");
    objectSelected.model.setTexture(objectSelected.video);   
    show3d();
  } 
  
  var createTV = this.createTV = function () {
    createObject(TV_PATH, "object", "object", false, [0.01, 0.01, 0.01], "TV", "Displays a custom video from a selected url on the screen"); 
    var src = "http://code.bocoup.com/audio-data-api/flash-vs-html5/mj-dontstop2.ogv"
    objectSelected.video = document.createElement('video');
    objectSelected.video.setAttribute('id',"video");  
    objectSelected.video.setAttribute('src',src);  
    objectSelected.video.setAttribute('autoplay',"autoplay");  
    objectSelected.video.setAttribute('loop',"loop");
    objectSelected.model.updateTextureByName("updatingTexture",objectSelected.video);  
  } 
  //pausing and unpausing the 2d and 3d to increase speed

  function pause3d() {
    scn.pauseScene();
    scnViewer.pauseScene();
  }
  var unpause3d = this.unpause3d = function () {
    scn.unpauseScene();
    scnViewer.pauseScene();
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
  var setUpDown = this.setUpDown = function (upDown) {
    camUpDown = upDown;
  }
  var setLeftRight = this.setLeftRight = function (leftRight) {
    camLeftRight = leftRight;
  }

  var save = this.save = function () {
    if (sceneName === null) {
      $("#dialog-saveAs").dialog("open");
    }
    else {
      saveFile();
    }
  }
  var saveAs = this.saveAs = function () {
    $("#dialog-saveAs").dialog("open");
  }
  var saveFile = function saveFile() {
    var allVars = Processing.getInstanceById("SceneCaster2d").getVars();
    serial = {
      lights: lights,
      numLights: numLights,
      walls: [],
      numWalls: numWalls,
      objects: [],
      numObjects: numObjects,
      cam: cam,
      zcam: zcam,
      currentCam: currentCam,
      allVars: allVars
    };
    function holder () {
      this.path = null;
      this.query = null;
      this.src = null;
      this.length = null;
      this.width = null;
      this.height = null;
      this.pos = null;
      this.dir = null;
      this.left = null;
      this.up = null;
    };
    for (var i = 0; i < numObjects; i++) {
      serial.objects[i] = new holder ();
      serial.objects[i].path = objects[i].model.path;
      serial.objects[i].query = objects[i].query;
      if (objects[i].canvasImage) {
        serial.objects[i].src = objects[i].canvasImage.src;
      }
      else if (objects[i].video) {
        serial.objects[i].src = objects[i].video.src;
      }
      serial.objects[i].length = objects[i].model.boundingVolume.length;
      serial.objects[i].width = objects[i].model.boundingVolume.width;
      serial.objects[i].height = objects[i].model.boundingVolume.height;
      serial.objects[i].pos = objects[i].model.sceneGraph.pos;
      serial.objects[i].dir = objects[i].model.sceneGraph.dir;
      serial.objects[i].left = objects[i].model.sceneGraph.left;
      serial.objects[i].up = objects[i].model.sceneGraph.up;
      if (objects[i].childObjectList.length) {
        serial.objects[i].childObjectList = [];
        for (var j = 0; j < objects[i].childObjectList.length; j++) {
          for (var k = 0; k < numObjects; k++) {
            if (objects[i].childObjectList[j] === objects[k]) {
              serial.objects[i].childObjectList.push(k);
            }
          }
        }
      }
      if (objects[i].parentObject) {
        for (var k = 0; k < numObjects; k++) {
          if (objects[i].parentObject === objects[k]) {
            serial.objects[i].onWall=false; 
            serial.objects[i].parentObject=k;
          }
        }
        for (var k = 0; k < numWalls; k++) {
          if (objects[i].parentObject === walls[k]) {
            serial.objects[i].onWall=true; 
            serial.objects[i].wallNorm = objects[i].wallNorm;
            serial.objects[i].angle = objects[i].angle;
            serial.objects[i].parentObject=k;
          }
        }
      }
    }
    for (var i = 0; i < numWalls; i++) {
      serial.walls[i] = new holder ();
      serial.walls[i].length = walls[i].model.boundingVolume.length;
      serial.walls[i].width = walls[i].model.boundingVolume.width;
      serial.walls[i].height = walls[i].model.boundingVolume.height;
      serial.walls[i].pos = walls[i].model.sceneGraph.pos;
      serial.walls[i].dir = walls[i].model.sceneGraph.dir;
      serial.walls[i].left = walls[i].model.sceneGraph.left;
      serial.walls[i].up = walls[i].model.sceneGraph.up;
      serial.walls[i].angle = walls[i].angle;
      serial.walls[i].startPoint = walls[i].startPoint;
      serial.walls[i].endPoint = walls[i].endPoint;
      if (walls[i].childObjectList.length) {
        serial.walls[i].childObjectList = [];
        for (var j = 0; j < walls[i].childObjectList.length; j++) {
          for (var k = 0; k < numObjects; k++) {
            if (walls[i].childObjectList[j] === objects[k]) {
              serial.walls[i].childObjectList.push(k);
            }
          }
        }
      }
    }
    var serial = JSON.stringify(serial);
    //save using HTML5 localStorage
    //this.localStorage.setItem(sceneName, serial);
    
    //save using PHP
    var options = {
      type: "POST", url: "saver.php?location=scenes/"+sceneName+".scn",
      data:  serial, 
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false
    };
    jQuery.ajax(options);
  }
  var load = this.load = function () {
    /*
    //fill dialog from LocalStorage
    for (i = 0; i < localStorage.length; i++) {
      theSel = document.getElementById('selectedname');
      var key = localStorage.key(i);
      var newOpt = new Option(key, key);
      theSel.options[i] = newOpt;
    }
    $("#dialog-load").dialog("open");
    
    //fill dialog from file list
    loadScene("scenes/test.scn"); */
    var options = {
      type: "GET", 
      url: "fileList.php",
      success: function(data){
        var list = data.split(",");
        var theSel = document.getElementById('selectedname');
        for (i = 0; i < list.length; i++) {
          var newOpt = new Option(list[i], list[i]);
          theSel.options[i] = newOpt;
        }
        $("#dialog-load").dialog("open");
      }
    };
    $.ajax(options);
   
  }
  
  function loadScene(name) {
    for (i = 0; i < numObjects; i++) {
      scn.removeObjectFromScene(objects[i].model);
    }
    for (i = 0; i < numWalls; i++) {
      scn.removeObjectFromScene(walls[i].model);
    }
    for (i = 0; i < numLights; i++) {
      scn.removeLight(lights[i]);
    }
    var fobj = [];
    numLights = 0;
    numWalls = 0;
    numObjects = 0;
    //load from LocalStorage
    //var serial = JSON.parse(localStorage.getItem(name));
    
    //load from file
    var oRequest = new XMLHttpRequest();
    oRequest.open("GET","scenes/"+name+".scn",false);
    oRequest.setRequestHeader("User-Agent",navigator.userAgent);
    oRequest.send(null);
    var serial = JSON.parse(oRequest.responseText);

    currentCam = serial.currentCam;
    numWalls = serial.numWalls;
    numLights = serial.numLights;
    numObjects = serial.numObjects;
    Processing.getInstanceById("SceneCaster2d").setVars(serial.allVars);
    objects = [];
    for (var i = 0; i < serial.numObjects; i++) {
      objects[i] = new SceneObject(); 
      if (serial.objects[i].path === "Sphere") {   
        var tempShape = new c3dl.Sphere(serial.objects[i].length/2, serial.objects[i].model.sphereDetailU, serial.objects[i].model.sphereDetailV);
        objects[i].initPrimitive(tempShape, serial.objects[i].path, serial.objects[i].type, serial.objects[i].placement, serial.objects[i].stand);
      }
      else if (serial.objects[i].path === "Cube") {   
        var tempShape = new c3dl.Cube(serial.objects[i].length,serial.objects[i].width,serial.objects[i].height);
        objects[i].initPrimitive(tempShape, serial.objects[i].path, serial.objects[i].type, serial.objects[i].placement, serial.objects[i].stand);
      }
      else if (serial.objects[i].path === "Plane") {  
        var tempShape = new c3dl.Plane(serial.objects[i].length,serial.objects[i].width);      
        objects[i].initPrimitive(tempShape, serial.objects[i].path, serial.objects[i].type, serial.objects[i].placement, serial.objects[i].stand);
      }
      else {
        objects[i].init(serial.objects[i].path, serial.objects[i].type, serial.objects[i].placement, serial.objects[i].stand);
        objects[i].model.setSize(serial.objects[i].length, serial.objects[i].width,serial.objects[i].height);  
      }
      objects[i].model.setPosition(c3dl.makeVector(serial.objects[i].pos[0],serial.objects[i].pos[1],serial.objects[i].pos[2]));
      objects[i].model.setRenderObb(false);
      objects[i].model.sceneGraph.dir = c3dl.makeVector(serial.objects[i].dir[0],serial.objects[i].dir[1],serial.objects[i].dir[2]);
      objects[i].model.sceneGraph.up = c3dl.makeVector(serial.objects[i].up[0],serial.objects[i].up[1],serial.objects[i].up[2]);
      objects[i].model.sceneGraph.left = c3dl.makeVector(serial.objects[i].left[0],serial.objects[i].left[1],serial.objects[i].left[2]);
      scn.addObjectToScene(objects[i].model);
      objectSelected = null;
      if (serial.objects[i].path === TWITTER_PATH) {
        objects[i].canvas = document.createElement('CANVAS');  
        objects[i].canvas.setAttribute('id',"Twitter");  
        objects[i].canvas.setAttribute('width',256);  
        objects[i].canvas.setAttribute('height',512);  
        var scripts = document.getElementsByTagName("script");
        for ( var k = 0; k < scripts.length; k++ ) {
          if (scripts[k].id == "twitterPjs" ) {
            objects[i].pjs = new Processing(objects[i].canvas, scripts[k].text); 
            objects[i].query = serial.objects[i].query;      
          }
        }
        objects[i].model.setTexture(objects[i].canvas);
      }
      else if (serial.objects[i].path === FLICKR_PATH) {
        objects[i].canvas = document.createElement('CANVAS'); 
        objects[i].canvasImage = new Image();
        objects[i].canvasImage.obj = objects[i];
        objects[i].query = serial.objects[i].query;
        fobj.push(objects[i]);
        var currentfobj = 0;
        $.getJSON(serial.objects[i].query,null, function(data){
          fobj.reverse();
          var temp = fobj.pop();
          fobj.reverse();
          temp.flickrImgs = [];
            $.each(data.items, function(k,item){
              temp.flickrImgs[k] = item.media.m;
            });
          temp.canvasImage.src = temp.flickrImgs[0];
        });
        objects[i].model.setTexture(objects[i].canvasImage);
        starupdateTimer();
      }
      else if (serial.objects[i].path === CUSTOMIMG_PATH) {
        objects[i].canvasImage = new Image();
        objects[i].canvasImage.obj = objects[i];
        objects[i].canvasImage.src = serial.objects[i].src;
        objects[i].model.setTexture(objects[i].canvasImage);
      }
      else if (serial.objects[i].path === CUSTOMVIDEO_PATH) {
        objects[i].video = document.createElement('video');
        objects[i].video.setAttribute('id',"video");  
        objects[i].video.setAttribute('src',serial.objects[i].src);  
        objects[i].video.setAttribute('autoplay',"autoplay");  
        objects[i].video.setAttribute('loop',"loop");
        objects[i].model.setTexture(objects[i].video);   
      }
      else if (serial.objects[i].path === CLOCK_PATH) {
        objects[i].canvas = document.createElement('CANVAS');  
        objects[i].canvas.setAttribute('id',"Clock");  
        objects[i].canvas.setAttribute('width',256);  
        objects[i].canvas.setAttribute('height',256);  
        var scripts = document.getElementsByTagName("script");
        for ( var k = 0; k < scripts.length; k++ ) {
          if (scripts[k].id == "ClockPjs" ) {
            objects[i].pjs = new Processing(objects[i].canvas, scripts[k].text);      
          }
        }
        objects[i].model.setTexture(objects[i].canvas);
      }
      else if (serial.objects[i].path === TV_PATH) {
        var src = "http://code.bocoup.com/audio-data-api/flash-vs-html5/mj-dontstop2.ogv"
        objects[i].video = document.createElement('video');
        objects[i].video.setAttribute('id',"video");  
        objects[i].video.setAttribute('src',src);  
        objects[i].video.setAttribute('autoplay',"autoplay");  
        objects[i].video.setAttribute('loop',"loop");
        objects[i].model.updateTextureByName("updatingTexture",objects[i].video);  
      }
    }
    for (var i = 0; i < numWalls; i++) {
      walls[i] = new SceneObject();
      walls[i].init(WALL_PATH, "wall", "none", false);
      walls[i].model.centerObject();
      walls[i].model.setSize(serial.walls[i].length, serial.walls[i].width,serial.walls[i].height);
      walls[i].model.setPosition(c3dl.makeVector(serial.walls[i].pos[0],serial.walls[i].pos[1],serial.walls[i].pos[2]));
      walls[i].model.setRenderObb(false);
      walls[i].model.sceneGraph.dir = c3dl.makeVector(serial.walls[i].dir[0],serial.walls[i].dir[1],serial.walls[i].dir[2]);
      walls[i].model.sceneGraph.up = c3dl.makeVector(serial.walls[i].up[0],serial.walls[i].up[1],serial.walls[i].up[2]);
      walls[i].model.sceneGraph.left = c3dl.makeVector(serial.walls[i].left[0],serial.walls[i].left[1],serial.walls[i].left[2]);
      walls[i].model.setTexture("./models/wall/wall-texture.jpg");
      scn.addObjectToScene(walls[i].model);
      walls[i].angle = serial.walls[i].angle;
      walls[i].startPoint = serial.walls[i].startPoint;
      walls[i].endPoint = serial.walls[i].endPoint;
    }
    //put object on objects
    for (var i = 0; i < numObjects; i++) {
      if (serial.objects[i].childObjectList) {
        objects[i].childObjectList = [];
        for (var j = 0; j < serial.objects[i].childObjectList.length; j++) {
          objects[i].childObjectList.push(objects[serial.objects[i].childObjectList[j]]);
        }
      }
      if (serial.objects[i].parentObject >= 0) {
        if (serial.objects[i].onWall){
          objects[i].wallNorm = serial.objects[i].wallNorm;
          objects[i].angle = serial.objects[i].angle;
          objects[i].parentObject= walls[serial.objects[i].parentObject];
        }
        else {
          objects[i].parentObject= objects[serial.objects[i].parentObject];
        } 
      }
    }
    for (var i = 0; i < numWalls; i++) {
      if (serial.walls[i].childObjectList) {
        walls[i].childObjectList = [];
        for (var j = 0; j < serial.walls[i].childObjectList.length; j++) {
          walls[i].childObjectList.push(objects[serial.walls[i].childObjectList[j]]);
        }
      }
    }
    for (var i = 0; i < numLights; i++) {
      lights[i] = new c3dl.PositionalLight();
      lights[i].setPosition(c3dl.makeVector(serial.lights[i].position[0],serial.lights[i].position[1],serial.lights[i].position[2]));
      lights[i].setDiffuse(c3dl.makeVector(serial.lights[i].diffuse[0],serial.lights[i].diffuse[1],serial.lights[i].diffuse[2]));
      lights[i].setOn(true);
      scn.addLight(lights[i]);
    }

    for (var i = 0; i < 5; i++) {
      cam[i].setPosition(c3dl.makeVector(serial.cam[i].pos[0],serial.cam[i].pos[1],serial.cam[i].pos[2]));
      zcam[i].setPosition(c3dl.makeVector(serial.zcam[i].pos[0],serial.zcam[i].pos[1],serial.zcam[i].pos[2]));
      cam[i].dir = c3dl.makeVector(serial.cam[i].dir[0],serial.cam[i].dir[1],serial.cam[i].dir[2]);
      zcam[i].dir = c3dl.makeVector(serial.zcam[i].dir[0],serial.zcam[i].dir[1],serial.zcam[i].dir[2]);
      cam[i].left = c3dl.makeVector(serial.cam[i].left[0],serial.cam[i].left[1],serial.cam[i].left[2]);
      zcam[i].left = c3dl.makeVector(serial.zcam[i].left[0],serial.zcam[i].left[1],serial.zcam[i].left[2]);
      cam[i].up = c3dl.makeVector(serial.cam[i].up[0],serial.cam[i].up[1],serial.cam[i].up[2]);
      zcam[i].up = c3dl.makeVector(serial.zcam[i].up[0],serial.zcam[i].up[1],serial.zcam[i].up[2]);
    }
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
    document.getElementById('objects').value = "";
    for (i = 0; i < numObjects; i++) {
      var objPos = [];
      objPos[0] = (objects[i].model.getPosition()[0] - objects[i].model.getLength() / 2).toFixed(2);
      objPos[1] = (objects[i].model.getPosition()[2] + objects[i].model.getWidth() / 2).toFixed(2);
      objPos[2] = (objects[i].model.getLength()).toFixed(2);
      objPos[3] = (objects[i].model.getWidth()).toFixed(2);
      document.getElementById('objects').value = document.getElementById('objects').value + objPos + ",";
    }
  }
  
  //open Create Primitive dialogs
  var createSphere = this.createSphere = function () {
    $("#dialog-create-sphere").dialog("open");
  }
  var createCube = this.createCube = function () {
    $("#dialog-create-cube").dialog("open");
  }
  var createPlane = this.createPlane = function () {
    $("#dialog-create-plane").dialog("open");
  }
  var setObjectProperties = this.setObjectProperties = function (func) {
    nextDialog = func;
    $("#dialog-object-properties").dialog("open");
  }
  
  var starupdateTimer = this.starupdateTimer = function () {
    updateTimer = 1;
  }
  
  var DisplayObjectInfo = function () {
    if (objectSelected) {
      document.getElementById("objInfo").setAttribute("style", "display:inline;");
      document.getElementById('objPic').src = objectSelected.getPicture();
      document.getElementById('objName').innerHTML = objectSelected.getName();
      document.getElementById('objDes').innerHTML = objectSelected.getDescription();
      var pos = objectSelected.model.getPosition();
      document.getElementById('objPos').innerHTML = "x=" +  pos[0].toFixed(2) + " " +"y=" + pos[1].toFixed(2) +  " " +"z=" + pos[2].toFixed(2) +  " ";
      if (objectSelected.editable) {
        document.getElementById("edit-button").setAttribute("style", "display:inline;");
      }
      else {
          document.getElementById("edit-button").setAttribute("style", "display:none;");
      }
      if (objectSelected.video) {
        document.getElementById("videoControls").setAttribute("style", "display:inline;");
        $("#volumeSlider").slider("value", objectSelected.video.volume*100);
        $("#seekSlider").slider("value", objectSelected.video.currentTime);
        if (objectSelected.video.duration >0) {
          $("#seekSlider").slider("option","max", objectSelected.video.duration);
        }
      }
      else {
          document.getElementById("videoControls").setAttribute("style", "display:none;");
      }
    }
    else {
      document.getElementById('objPic').src = "";
      document.getElementById('objName').innerHTML = "";
      document.getElementById('objDes').innerHTML = "";
      document.getElementById('objPos').innerHTML = "";    
      document.getElementById("videoControls").setAttribute("style", "display:none;");
      document.getElementById("objInfo").setAttribute("style", "display:none;");
    }
  }
  
  var playVideo = this.playVideo = function () {
    if (objectSelected.video.paused) {
      objectSelected.video.play();
    }
    else {
      objectSelected.video.pause();
    }
  }
  var muteVideo = this.muteVideo = function () {
    if (objectSelected.video.muted) {
      objectSelected.video.muted=false;
    }
    else {
      objectSelected.video.muted=true;
    }
  }  
  var editObject = this.editObject = function () {
    if (objectSelected.getName() ==="Twitter") {
      showTwitter();
      objectSelected.editing = true;
    }
    else if(objectSelected.getName() ==="Flickr") {
      showFlickr();
      objectSelected.editing = true;
    }
    else if(objectSelected.getName() ==="CustomImage") {
      showImageSrcDiv();
      objectSelected.editing = true;
    }
    else if(objectSelected.getName() ==="CustomVideo") {
      showVideoSrcDiv();
      objectSelected.editing = true;
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
  var deleteSelectedCommand = function () {
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
      scn.removeObjectFromScene(objectSelected.model);
      if (objectSelected.video) {
        if (!objectSelected.video.paused) {
          objectSelected.video.pause();
        }
      }
      objectSelected = null;
      numObjects--;
    };
    this.unexecute = function () {
      scn.addObjectToScene(this.objectSelected.model);
      objectSelected = this.objectSelected;
      if (objectSelected.video) {
        objectSelected.video.play();
      }
      objects = this.objects;
      numObjects++;
    };
  };

  //Create Command
  var createObjectCommand = function () {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.newobject;
    this.execute = function (path, type, placement, stand, initalScale, name, description, picture, editable) {
      if (!this.newobject) {
        objects[numObjects] = new SceneObject()        
        objects[numObjects].init(path, type, placement, stand, initalScale, name, description, picture, editable);
        scn.addObjectToScene(objects[numObjects].model);
        if (objectSelected) {
          objectSelected.model.setRenderObb(false);
        }
        this.newobject = objectSelected = objects[numObjects];
        objectSelected.model.setRenderObb(true);
        moveObject = true;
        if (objectSelected.placement === "ceiling") {
          objectSelected.model.setPosition([0, 15 - (objectSelected.model.getHeight() / 2), 0]);
        }
        if (objectSelected.placement === "wall") {
          var wallHit = [];
          for (var i = 0, len = walls.length; i < len; i++) {
            var currObj = walls[i];
            if (currObj.model.isVisible() && currObj.model.isInsideFrustum()) {
              if (currObj.model.rayIntersectsEnclosures(zcam[currentCam].getPosition(), zcam[currentCam].dir)) {
                wallHit.push(currObj);
              }
            }
          }
          if (wallHit.length) {
            objectSelected.placeObjectOnWall(wallHit[0]);
          }
          moveObject = false;
        }
        else {
          objectSelected.model.setPosition([0, objectSelected.model.getHeight() / 2, 0]);
        }
      }
      else {
        scn.addObjectToScene(this.newobject.model);
        if (objectSelected) {
          objectSelected.model.setRenderObb(false);
        }
        objectSelected = objects[numObjects] = this.newobject;
        objectSelected.model.setRenderObb(true);
      }
      numObjects++;
    };
    this.unexecute = function () {
      numObjects--;
      scn.removeObjectFromScene(this.newobject.model);
      objectSelected = this.objectSelected;
      objects = this.objects;
    };
  };
  
 //Create Command for Primitives
  var createPrimitiveCommand = function () {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.newobject;
    this.execute = function (shape, path, type, placement, stand) {
      if (!this.newobject) {
        objects[numObjects] = new SceneObject();
        objects[numObjects].initPrimitive(shape, path, type, placement, stand);
        scn.addObjectToScene(objects[numObjects].model);
        if (objectSelected) {
          objectSelected.model.setRenderObb(false);
        }
        this.newobject = objectSelected = objects[numObjects];
        objectSelected.model.setRenderObb(true);
        moveObject = true;
        if (objectSelected.placement === "ceiling") {
          objectSelected.model.setPosition([0, 15 - (objectSelected.model.getHeight() / 2), 0]);
        }
        if (objectSelected.placement === "wall") {
          var wallHit = [];
          for (var i = 0, len = walls.length; i < len; i++) {
            var currObj = walls[i];
            if (currObj.model.isVisible() && currObj.model.isInsideFrustum()) {
              if (currObj.model.rayIntersectsEnclosures(zcam[currentCam].getPosition(), zcam[currentCam].dir)) {
                wallHit.push(currObj);
              }
            }
          }
          if (wallHit.length) {
            objectSelected.placeObjectOnWall(wallHit[0]);
          }
          moveObject = false;
        }
        else {
          objectSelected.model.setPosition([0, objectSelected.model.getHeight() / 2, 0]);
        }
      }
      else {
        scn.addObjectToScene(this.newobject.model);
        if (objectSelected) {
          objectSelected.model.setRenderObb(false);
        }
        objectSelected = objects[numObjects] = this.newobject;
        objectSelected.model.setRenderObb(true);
      }
      numObjects++;
    };
    
    this.unexecute = function () {
      numObjects--;
      scn.removeObjectFromScene(this.newobject.model);
      objectSelected = this.objectSelected;
      objects = this.objects;
    };
  };
  
  //Copy Command
  var copySelectedCommand = function () {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.newobject;
    this.execute = function () {
      if (!this.newobject) {
        var temp = [];
        objects[numObjects] = new SceneObject();
        objects[numObjects].clone(objectSelected);
        scn.addObjectToScene(objects[numObjects].model);
        objectSelected.model.setRenderObb(false);
        this.newobject = objectSelected = objects[numObjects];
        objectSelected.model.setRenderObb(true);
        numObjects++;
        moveObject = true;
        if (objectSelected.placement === "ceiling") {
          objectSelected.model.setPosition([0, 15 - (objectSelected.model.getHeight() / 2), 0]);
        }
        else {
          objectSelected.model.setPosition([0, objectSelected.model.getHeight() / 2, 0]);
        }
      }
      else {
        scn.addObjectToScene(this.newobject.model);
        if (objectSelected) {
          objectSelected.model.setRenderObb(false);
        }
        objectSelected = objects[numObjects] = this.newobject;
        objectSelected.model.setRenderObb(true);
      }
    };
    this.unexecute = function () {
      numObjects--;
      scn.removeObjectFromScene(this.newobject.model);
      objectSelected = this.objectSelected;
      objects = this.objects;
    };
  };

  //Move Command
  var moveObjectCommand = function (sPos) {
    Command.call();
    this.objectSelected = objectSelected;
    this.sPos = sPos;
    this.ePos;
    this.execute = function () {
      if (!this.ePos) this.ePos = this.objectSelected.model.getPosition();
      this.objectSelected.model.setPosition(this.ePos);
    };
    this.unexecute = function () {
      this.ePos = this.objectSelected.model.getPosition();
      this.objectSelected.model.setPosition(this.sPos);
    };
  };

  //Edit Light Command
  var lightCommand = function () {
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
  var scaleCommand = function (length, width, height) {
    Command.call();
    this.objectSelected = objectSelected;
    this.oldHheight = objectSelected.model.getHeight();
    this.oldWidth = objectSelected.model.getWidth();
    this.oldLength = objectSelected.model.getLength();
    this.length = length;
    this.width = width;
    this.height = height;
    this.execute = function () {
      this.objectSelected.model.setSize(this.length, this.width, this.height);
      this.objectSelected.model.setPosition([objectSelected.model.getPosition()[0], this.height / 2, objectSelected.model.getPosition()[2]]);
    };
    this.unexecute = function () {
      this.height = objectSelected.model.getHeight();
      this.width = objectSelected.model.getWidth();
      this.length = objectSelected.model.getLength();
      this.objectSelected.model.setSize(this.oldLength, this.oldWidth, this.oldHeight);
      this.objectSelected.model.setPosition([objectSelected.model.getPosition()[0], this.oldHeight / 2, objectSelected.model.getPosition()[2]]);
    };
  };

  //Rotate Command
  var rotateObjectCommand = function () {
    Command.call();
    this.rot;
    this.objectSelected = objectSelected;
    this.execute = function (rot) {
      if (this.rot) {
        this.objectSelected.model.yaw(this.rot);
      }
      else {
        this.rot = rot;
      }
    };
    this.unexecute = function () {
      this.objectSelected.model.yaw(-this.rot);
    };
  };

  //Rotate on axis Command
  var rotateObjectOnAxisCommand = function (axisVec, rot) {
    Command.call();
    this.rot = rot;
    this.axisVec = axisVec;
    this.objectSelected = objectSelected;
    this.execute = function () {
      this.objectSelected.model.rotateOnAxis(this.axisVec, this.rot);
    };
    this.unexecute = function () {
      this.objectSelected.model.rotateOnAxis(this.axisVec, -this.rot);
    };
  };

  //New Page Command
  var deleteSceneCommand = this.deleteSceneCommand = function () {
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
        scn.removeObjectFromScene(objects[i].model);
      }
      for (i = 0; i < numWalls; i++) {
        scn.removeObjectFromScene(walls[i].model);
      }
      for (i = 0; i < numLights; i++) {
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
      scn.addObjectToScene(objects[i].model);
      for (i = 0; i < numWalls; i++)
      scn.addObjectToScene(walls[i].model);
      for (i = 0; i < numLights; i++)
      scn.addLight(lights[i]);
    };
  };
  
  //Rotate Widget Command
  var rotateWidgetCommand = function () {
    Command.call();
    this.first = true;
    this.objectSelected = objectSelected;
    this.execute = function () {
      if (this.first) {
        if (!objectSelected.angleX) {
          this.angleX = 0;
        }
        else {
          this.angleX = objectSelected.angleX;
        }
        if (!objectSelected.angleY) {
          this.angleY = 0;
        }
        else {
          this.angleY = objectSelected.angleY;
        }
        if (!objectSelected.angleZ) {
          this.angleZ = 0;
        }
        else {
          this.angleZ = objectSelected.angleZ;
        }
        objectSelected.model.rotateOnAxis([1, 0, 0], -this.angleX);
        objectSelected.model.rotateOnAxis([0, 1, 0], -this.angleY);
        objectSelected.model.rotateOnAxis([0, 0, 1], -this.angleZ);
        this.first = false;
      }
      objectSelected.model.rotateOnAxis([1, 0, 0], this.angleX);
      objectSelected.model.rotateOnAxis([0, 1, 0], this.angleY);
      objectSelected.model.rotateOnAxis([0, 0, 1], this.angleZ);
    };
    this.unexecute = function () {
      objectSelected.model.rotateOnAxis([1, 0, 0], -this.angleX);
      objectSelected.model.rotateOnAxis([0, 1, 0], -this.angleY);
      objectSelected.model.rotateOnAxis([0, 0, 1], -this.angleZ);
    };
  };

 
  ////////////////////////////////////////////////////////////////////////////
  //3d Setup Main
  ////////////////////////////////////////////////////////////////////////////
  // The program main

  function canvasMain(canvasName) {
    // Create new c3dl.Scene object
    scn = new c3dl.Scene();
    scn.setCanvasTag(canvasName);
    var canvas = scn.getCanvas();
    var myWidth = window.innerWidth;    
    CANVAS_WIDTH = canvas.width = Math.floor(myWidth*0.6);
    CANVAS_HEIGHT = canvas.height = Math.floor(Math.round(9 * canvas.width / 16));
    //empty hidden feild of objects
    document.getElementById('objects').value = "";
    show2d();
    //set widgets
    mWidget = new MoveWidget;
    sWidget = new ScaleWidget;
    rWidget = new RotateWidget;
    // Create GL context
    var renderer = new c3dl.WebGL();
    renderer.createRenderer(this);
    //turn collision off 
    scn.setCollision(false);
    // Attach renderer to the scene
    scn.setRenderer(renderer);
    drawRoofandFloor();
    if (scn.init(canvasName)) {
      scn.setCulling("All");
      //skybox
      sm = new c3dl.Collada();
      sm.init("./models/sky/skysphere.dae");
      sm.setTexture("./models/sky/sky.jpg");

      // Effect used when widget objects are selected
      selectedEffect = new c3dl.Effect();
      selectedEffect.init(c3dl.effects.SEPIA);
      selectedEffect.setParameter("color", [10, 10, 0]);
      scn.setAmbientLight([0, 0, 0, 0]);
      
      createLight(0, 0);
      
      var floor = [];
      var xOffset = -150,
          zOffset = -150;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          floor[i] = new c3dl.Collada();
          floor[i].init(FLOOR_PATH);
          floor[i].centerObject();
          floor[i].scale([10, 1, 10]);
          floor[i].setPickable(false);
          scn.addObjectToScene(floor[i]);
          floor[i].setPosition([xOffset, -0.02, zOffset]);
          floor[i].setStatic(true);
          xOffset += 100;
        }
        xOffset = -150;
        zOffset += 100;
      }

      //create an object
      createWall([-25, 0, -25], [25, 0, -25]);
      createWall([25, 0, -25], [25, 0, 25]);
      createWall([25, 0, 25], [-25, 0, 25]);
      createWall([-25, 0, 25], [-25, 0, -25]);
      
      cam[0].setPosition([0, 50, 1]);
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
    Processing.getInstanceById("CameraWidget").draw();
    var canvas = scn.getCanvas();
    var myWidth = window.innerWidth;    
    if (canvas.width !== Math.floor(myWidth*0.6)) {
      CANVAS_WIDTH = canvas.width = Math.floor(myWidth*0.5);
      CANVAS_HEIGHT = canvas.height = Math.floor(Math.round(9 * canvas.width / 16));
    }
    if (objectSelected) { 
      if (mWidget.getVisible()) {
        mWidget.setObject(objectSelected);
      }
      if (rWidget.getVisible()) {
        rWidget.setObject(objectSelected);
      }
      if (sWidget.getVisible()) {
        sWidget.setObject(objectSelected);
      }
    }
    DisplayObjectInfo();
    //Every 5 seconds it get the new tweets
    if(new Date() - updateTimer  >= 10000 && updateTimer){
      tweets = [];
      var numTweets = 0;
      for (var i = 0; i < objects.length; i++) {
        if (objects[i].pjs) {
          getTweets(objects[i].query, numTweets);
          numTweets++;
        }
      }
      updateTimer = +new Date();
      fCounter++;
      for (var i = 0; i < objects.length; i++) {
        if (objects[i].flickrImgs) {
          if (objects[i].flickrImgs[fCounter]) {
            objects[i].canvasImage.src = objects[i].flickrImgs[fCounter];
          }
          else {
            fCounter = 0;
          }
        }
      }
    }
    var numTweets = 0;
    for (var i = 0; i < objects.length; i++) {
      if (objects[i].pjs) {
        if (tweets[numTweets]) {
          objects[i].pjs.draw(tweets[numTweets],objects[i].canvas);
          numTweets++;
        }
        
      }
    }
    document.getElementById('fps').innerHTML = "FPS:" + scn.getFPS().toFixed(2);
    if (tiltHotKey) {
      camLeftRight = (mouseX - CANVAS_WIDTH / 2) / CANVAS_WIDTH;
      camUpDown = (CANVAS_HEIGHT / 2 - mouseY) / CANVAS_HEIGHT;
    }
    if (scaling && scalingObject !== objectSelected) {
      if (objectSelected) {
        document.getElementById("length").value = getSize()[0].toFixed(2);
        document.getElementById("width").value = getSize()[2].toFixed(2);
        document.getElementById("height").value = getSize()[1].toFixed(2);
        scalingObject = objectSelected;
      }
      else {
        scaleEffect();
        scaling = false;
      }
    }
    if (rotating && rotatingObject !== objectSelected) {
      if (objectSelected) {
        scalingObject = objectSelected;
      }
      else {
        rotateEffect();
        rotating = false;
      }
    }
    //update slider position
    $("#updownslider").slider("value", camHeight);
    $("#zoomslider").slider("value", zoom);
    //empty hidden feild of objects
    document.getElementById('objects').value = "";
    //check topview to disable rotation 
    if (currentCam == 0) {
      document.getElementById('topview').value = "true";
    }
    else {
      document.getElementById('topview').value = "false";
    }
    //set scene to current camera
    scn.setCamera(zcam[currentCam]);
    var moveAmount = CAM_MOVE_SPEED * deltaTime / 100;
    
    //empty
    if (buttons[0] && objectSelected) {

    }
    //empty
    else if (buttons[1] && objectSelected) {

    }
    //empty
    else if (buttons[2] && objectSelected) {

    }
    //empty
    else if (buttons[3] && objectSelected) {

    }
    //empty
    else if (buttons[4]) {

    }
    //empty
    else if (buttons[5]) {

    }
    //ud Up 
    else if (buttons[6]) {
      if (camHeight < 50) {
        camHeight ++;
      }
    }
    //ud Down 
    else if (buttons[7]) {
      if (camHeight > 0) {
        camHeight --;
      }
    }
    //zoom in 
    else if (buttons[8]) {
      if (zoom < 50) {
        zoom++;
      }
    }
    //zoom out 
    else if (buttons[9]) {
      if (zoom > 0) {
        zoom--;
      }
    }
    //move camera forward
    else if (buttons[10]) {
      moveCamera(FORWARD, moveAmount);
    }
    //move camera backward
    else if (buttons[11]) {
      moveCamera(FORWARD, -moveAmount);
    }
    //move camera left
    else if (buttons[12]) {
      moveCamera(SIDEWAYS, moveAmount);
    }
    //move camera right
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
      if (!objectSelected) {
        closeAllWidgets();
      }
      if (moveObject && objectSelected && !mWidget.getVisible() && !rWidget.getVisible() && !sWidget.getVisible()) {
        objectSelected.moveObject(mouseX, mouseY);
      }
      else if (selectedAxis && mWidget.getVisible()) {
        mWidget.moveObject(objectSelected, selectedAxis);
      }
      else if (selectedAxis && sWidget.getVisible()) {
        sWidget.scaleObject(objectSelected, selectedAxis);
      }
      else if (selectedAxis && rWidget.getVisible()) {
        rWidget.rotateObject(objectSelected, selectedAxis);
      }
      //collision   
      sceneObjectsCollided = [];
      var SceneCreatorCD = new c3dl.CollisionDetection();
      if (objectSelected) {
        for (var k = 0, len = objects.length; k < len; k++) {
          if (objectSelected.model !== objects[k].model) {
            if (SceneCreatorCD.checkObjectCollision(objectSelected.model, objects[k].model, null, "Geometry")) {
              for (var j = 0, len2 = scn.getObjListSize(); j < len2; j++) {
                if (scn.getObj(j) === objects[k].model) {
                  sceneObjectsCollided.push(objects[k]);
                }
              }
            }
          }
        }
        for (var k = 0, len = walls.length; k < len; k++) {
          if (SceneCreatorCD.checkObjectCollision(objectSelected.model, walls[k].model, null, "Collada")) {
            sceneObjectsCollided.push(walls[k]);
          }
        }
        
        if (sceneObjectsCollided[0]) {
          for (var i = 0, len = sceneObjectsCollided.length; i < len; i++) {
            var foundFlag = true;
            for (var j = 0, len2 = objectSelected.childObjectList.length; j < len2; j++) {
              if (objectSelected.childObjectList[j] === sceneObjectsCollided[i]) {
                foundFlag = false;
              }
            }
            if (foundFlag) {
              objectSelected.handleCollision(sceneObjectsCollided[i]);
            }
          }
        }
        else {
          if (objectSelected.parentObject && objectSelected.placement !== "wall") {
            var curpos = objectSelected.model.getPosition();
            objectSelected.model.setPosition([curpos[0], objectSelected.model.getHeight() / 2, curpos[2]]);
            objectSelected.parentObject.removeChildFromChildObjectList(objectSelected);
            objectSelected.parentObject = null;
            
          }
        }
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
      document.getElementById('objects').value = document.getElementById('objects').value + objects[i].model.getBoundingVolume().aabb.getCorners() + ",";
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  //3d Setup Object Viewer

  ////////////////////////////////////////////////////////////////////////////
  // The program main

  function canvasViewer(canvasName) {
    // Create new c3dl.Scene object
    scnViewer = new c3dl.Scene();
    scnViewer.setCanvasTag(canvasName);

    // Create GL context
    var renderer2 = new c3dl.WebGL();
    renderer2.createRenderer(this);
    // Attach renderer to the scene
    scnViewer.setRenderer(renderer2);
    scnViewer.init(canvasName);
    if (renderer2.isReady()) {
      scnViewer.setAmbientLight([0, 0, 0, 0]);
      var light = new c3dl.PositionalLight();
      light.setPosition([0, 10, 35]);
      light.setDiffuse([1, 1, 1, 1]);
      light.setOn(true);
      scnViewer.addLight(light);
      camViewer.setPosition([0, 0, 30]);
      camViewer.setLookAtPoint([0.0, 0.0, 0.0]);
      // Add the camera to the scene
      scnViewer.setCamera(camViewer);
      // Start the scene
      scnViewer.startScene();
      // tell the scene what function to use when
      // a mouse event is detected
      scnViewer.setUpdateCallback(updateViewer);
      scnViewer.setMouseCallback(mouseUp, mouseDown, mouseMove, mouseWheel);
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  // Canvas Update 
  ////////////////////////////////////////////////////////////////////////////

  function updateViewer(deltaTime) {
    if (holding) {
      objectViewing.rotateOnAxis([0, 1, 0], (mouseX - oldMouseX) / 100);
      objectViewing.rotateOnAxis([1, 0, 0], (mouseY - oldMouseY) / 100);
      oldMouseX = mouseX;
      oldMouseY = mouseY;
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

    //check move widget selection
    if (mWidget.getVisible()) {
      objectSelected.model.setRenderObb(true);
      for (var i = 0, len = objectsPicked.length; i < len; i++) {
        for (var j = 0; j < 3; j++) {
          if (objectsPicked[i] === mWidget.model[j]) {
            selectedAxis = mWidget.model[j];
            mWidget.model[j].setEffect(selectedEffect);
            mWidget.selected();
            curcmd++;
            if (curcmd <= commands.length - 1) {
              for (var i = curcmd, l = commands.length; i < l; i++) {
                commands[i] = null;
              }
            }
            commands[curcmd] = new moveObjectCommand(objectSelected.model.getPosition());
            i = len;
          }
        }
      }
    }
    
    //check scale widget selection
    else if (sWidget.getVisible()) {
      objectSelected.model.setRenderObb(true);
      for (var i = 0, len = objectsPicked.length; i < len; i++) {
        for (var j = 0; j < 3; j++) {
          if (objectsPicked[i] === sWidget.model[j]) {
            selectedAxis = sWidget.model[j];
            sWidget.model[j].setEffect(selectedEffect);
            sWidget.selected();
            curcmd++;
            if (curcmd <= commands.length - 1) {
              for (var i = curcmd, l = commands.length; i < l; i++) {
                commands[i] = null;
              }
            }
            commands[curcmd] = new scaleCommand(objectSelected.model.getLength(), objectSelected.model.getWidth(), objectSelected.model.getHeight());
            i = len;
          }
        }
      }
    }
    
    //check rotate widget selection
    else if (rWidget.getVisible()) {
      objectSelected.model.setRenderObb(true);
      for (var i = 0, len = objectsPicked.length; i < len; i++) {
        for (var j = 0; j < 3; j++) {
          if (objectsPicked[i] === rWidget.model[j]) {
            selectedAxis = rWidget.model[j];
            rWidget.model[j].setEffect(selectedEffect);
            rWidget.selected();
            curcmd++;
            if (curcmd <= commands.length - 1) {
              for (var i = curcmd, l = commands.length; i < l; i++) {
                commands[i] = null;
              }
            }
            commands[curcmd] = new rotateWidgetCommand();
            i = len;
          }
        }
      }
    }
    
    //picking scene objects
    else {
      if (objectSelected) {
        var oldSelected = objectSelected;
        objectSelected.model.setRenderObb(false);
        objectSelected = null;
      }
      for (var i = 0, len = objectsPicked.length; i < len; i++) {
        for (var j = 0, len2 = objects.length; j < len2; j++) {
          if (objectsPicked[i] === objects[j].model) {
            objectSelected = objects[j];
          }
        }
      }
      if (objectSelected) {
        objectSelected.model.setRenderObb(true);
      }
    }
    
    //clicking the same object turns moving on and activates the move command
    if (objectSelected === oldSelected && !moveObject) {
      curcmd++;
      if (curcmd <= commands.length - 1) {
        for (var i = curcmd, l = commands.length; i < l; i++) {
          commands[i] = null;
        }
      }
      commands[curcmd] = new moveObjectCommand(objectSelected.model.getPosition());
      moveObject = true;
    }
  }

  //returns clicked coordinates X and Y

  function getClickedCoords(event) {
    if (viewer) {
      var canvas = scnViewer.getCanvas();

    }
    else {
      var canvas = scn.getCanvas();
    }
    var canvasPosition = c3dl.getObjectPosition(canvas);
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
  var getworldCoords = this.getworldCoords = function (mmx, mmy, height) {
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
        var camHeight = rayInitialPoint[1] - height;
        var hyp = camHeight / Math.cos(angle);
        selEndWorldCoords[0] = hyp * rayDir[0] + rayInitialPoint[0];
        selEndWorldCoords[1] = hyp * rayDir[2] + rayInitialPoint[2];
        return [selEndWorldCoords[0], height, selEndWorldCoords[1]];
      }
    }
  }
  //calculates world coordinates 
  var getIntersectionOnPlane = this.getIntersectionOnPlane = function (mmx, mmy, origin, norm) {
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
        //c3dl.multiplyVectorByVector(temp, rayTerminalPoint, rayTerminalPoint)
        var rayDir = c3dl.normalizeVector(rayTerminalPoint);
        // get angle
        var distance = c3dl.subtractVectors(origin, rayInitialPoint);
        var temp = c3dl.vectorDotProduct(norm, distance);
        var temp2 = c3dl.vectorDotProduct(norm, rayDir);
        t = temp / temp2;
        var intersection = c3dl.addVectors(rayInitialPoint, c3dl.multiplyVector(rayDir, t));
        return intersection;
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
      var rotmat = c3dl.makeMatrix(Math.cos(90 * Math.PI / 180), 0, Math.sin(90 * Math.PI / 180), 0, 0, 1, 0, 0, -Math.sin(90 * Math.PI / 180), 0, Math.cos(90 * Math.PI / 180), 0, 0, 0, 0, 1);
      c3dl.transposeMatrix(rotmat);
      dir = c3dl.multiplyMatrixByVector(rotmat, dir);
      cam[currentCam].setPosition(c3dl.addVectors(cam[currentCam].getPosition(), dir));
    }
  }

  //create objects using a factory pattern
  var createObject = this.createObject = function (path, type, placement, stand, initalScale, name, description, picture, editable) {
    curcmd++;
    if (curcmd <= commands.length - 1) {
      for (var i = curcmd, l = commands.length; i < l; i++) {
        commands[i] = null;
      }
    }
    commands[curcmd] = new createObjectCommand();    
    commands[curcmd].execute(path, type, placement, stand, initalScale, name, description, picture, editable, editable);

  }
  
  //create objects using a factory pattern
  var createPrimitive = this.createPrimitive = function (shape, path, type, placement, stand) {
    curcmd++;
    if (curcmd <= commands.length - 1) {
      for (var i = curcmd, l = commands.length; i < l; i++) {
        commands[i] = null;
      }
    }
    commands[curcmd] = new createPrimitiveCommand();
    commands[curcmd].execute(shape, path, type, placement, stand);
  }

  //removes seleted object from scene
  var deleteSelected = this.deleteSelected = function () {
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
  var copySelected = this.copySelected = function () {
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
  var scale = this.scale = function () {
    if (objectSelected) {
      scaling = true;
      scalingObject = objectSelected;
      scaleEffect();
      document.getElementById("length").value = getSize()[0].toFixed(2);
      document.getElementById("width").value = getSize()[2].toFixed(2);
      document.getElementById("height").value = getSize()[1].toFixed(2);
    }
  }
  //rotation pop-up
  var rotate = this.rotate = function () {
    if (objectSelected) {
      rotating = true;
      rotatingObject = objectSelected;
      rotateEffect();
    }
  }
  var getSize = this.getSize = function () {
    var size = [];
    size[0] = objectSelected.model.getLength();
    size[1] = objectSelected.model.getHeight();
    size[2] = objectSelected.model.getWidth();
    return size;
  }
  var setSize = this.setSize = function (length, width, height) {
    curcmd++;
    if (curcmd <= commands.length - 1) {
      for (var i = curcmd, l = commands.length; i < l; i++) {
        commands[i] = null;
      }
    }
    commands[curcmd] = new scaleCommand(length, width, height);
    commands[curcmd].execute();
  }
  var rotateOnAxis = this.rotateOnAxis = function (axis, rot) {
    curcmd++;
    if (curcmd <= commands.length - 1) {
      for (var i = curcmd, l = commands.length; i < l; i++) {
        commands[i] = null;
      }
    }
    commands[curcmd] = new rotateObjectOnAxisCommand(axis, rot);
    commands[curcmd].execute();
  }
  var getPNG = this.getPNG = function () {
    var ctx = scn.getGL();
    try{
      var arr = ctx.readPixels(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, ctx.RGBA, ctx.UNSIGNED_BYTE);
      // Chrome posts an error
      if(ctx.getError()){
        arr = new C3DL_UINT_ARRAY(CANVAS_WIDTH * CANVAS_HEIGHT * 4);
        ctx.readPixels(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, ctx.RGBA, ctx.UNSIGNED_BYTE, arr);
      }
    }
    catch(e){
      if(!arr){
        arr = new C3DL_UINT_ARRAY(CANVAS_WIDTH * CANVAS_HEIGHT * 4);
        ctx.readPixels(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, ctx.RGBA, ctx.UNSIGNED_BYTE, arr);
      }
    }
    var cvs = document.createElement('canvas');
    cvs.width = CANVAS_WIDTH;
    cvs.height = CANVAS_HEIGHT;
    var ctx2d = cvs.getContext('2d');
    var image = ctx2d.createImageData(cvs.width, cvs.height);
 
    for (var y = 0; y < cvs.height; y++) {
      for (var x = 0; x < cvs.width; x++) {

        var index = (y * cvs.width + x) * 4;
        var index2 = ((cvs.height - 1 - y) * cvs.width + x) * 4;

        for (var p = 0; p < 4; p++) {
          image.data[index2 + p] = arr[index + p];
        }
      }
    }
    ctx2d.putImageData(image, 0, 0);
    return cvs.toDataURL();
  }

  ////////////////////////////////////////////////////////////////////////////
  // 2d Functions 
  ////////////////////////////////////////////////////////////////////////////
  //creates a positional light at specified position 
  var createLight = this.createLight = function (posX, posZ) {
    lights[numLights] = new c3dl.PositionalLight();
    lights[numLights].setPosition([posX, 14, posZ]);
    lights[numLights].setDiffuse([1, 1, 1, 1]);
    lights[numLights].setOn(true);
    scn.addLight(lights[numLights]);
    numLights++;
  }

  //deletes seleted positional light
  var deleteLight = this.deleteLight = function (lightnum) {
    scn.removeLight(lights[lightnum]);
    for (var k = lightnum; k < numLights - 1; k++) {
      lights[k] = lights[k + 1];
    }
    numLights--;
  }

  //moves seleted positional light
  var moveLight = this.moveLight = function (lightnum, posX, posZ) {
    lights[lightnum].setPosition([posX, 14, posZ])
  }

  //creates a wall from one specified position to another 
  var createWall = this.createWall = function (posStart, posEnd) {
    walls[numWalls] = new SceneObject();
    walls[numWalls].init(WALL_PATH, "wall", "none", false);
    walls[numWalls].model.centerObject();
    walls[numWalls].model.setTexture("./models/wall/wall-texture.jpg");
    walls[numWalls].model.setStatic(true);
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
    walls[numWalls].model.setPosition(wallpos);
    //calc walllength pythagorean theorem
    var walllength = Math.sqrt(sq(triA) + sq(triB));
    //no rotation
    if (posStart[0] === posEnd[0] || posStart[2] === posEnd[2]) {
      walls[numWalls].model.scale([walllength / 2 + 1, 7.5, 1]);
      if (posStart[0] === posEnd[0]) {
        walls[numWalls].model.yaw((90 * Math.PI) / 180);
        walls[numWalls].setWallStats((90 * Math.PI) / 180, posStart, posEnd);
      }
      else {
        walls[numWalls].setWallStats(0, posStart, posEnd);
      }
    }
    //calc angle to rotate cos law
    else {
      walls[numWalls].model.scale([walllength / 2 + 1, 7.5, 1]);
      theta = 180 * Math.acos((sq(walllength) + sq(triA) - sq(triB)) / (2 * walllength * triA)) / Math.PI;
      if (posEnd[2] < posStart[2]) {
        theta = 180 - theta;
      }

      walls[numWalls].model.yaw((theta * Math.PI) / 180);
      walls[numWalls].setWallStats((theta * Math.PI) / 180, posStart, posEnd);
    }
    //add object to scene
    scn.addObjectToScene(walls[numWalls].model);
    numWalls++;
  }

  //deletes seleted wall
  var deleteWall = this.deleteWall = function (wallnum) {
    scn.removeObjectFromScene(walls[wallnum].model);
    for (var k = wallnum; k < numWalls - 1; k++) {
      walls[k] = walls[k + 1];
    }
    numWalls--;
  }

  //moves seleted wall
  var moveWall = this.moveWall = function (wallnum, posStart, posEnd) {
    scn.removeObjectFromScene(walls[wallnum].model);
    var oldWallPos = c3dl.copyObj(walls[wallnum].model.getPosition());
    var wallObjList = c3dl.copyObj(walls[wallnum].childObjectList);
    var oldLength = walls[wallnum].model.getLength();
    walls[wallnum] = new SceneObject();
    walls[wallnum].init(WALL_PATH, "wall", "none", false);
    walls[wallnum].model.centerObject();
    walls[wallnum].model.setTexture("./models/wall/wall-texture.jpg");
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
    walls[wallnum].model.setPosition(wallpos);
    //calc walllength pythagorean theorem
    var walllength = Math.sqrt(sq(triA) + sq(triB));
    //no rotation
    if (posStart[0] === posEnd[0] || posStart[2] === posEnd[2]) {
      walls[wallnum].model.scale([walllength / 2 + 1, 7.5, 1]);
      if (posStart[0] === posEnd[0]) {
        walls[wallnum].model.yaw((90 * Math.PI) / 180);
        walls[wallnum].setWallStats((90 * Math.PI) / 180, posStart, posEnd);
      }
      else {
        walls[wallnum].setWallStats(0, posStart, posEnd);
      }
    }
    //calc angle to rotate cos law
    else {
      walls[wallnum].model.scale([walllength / 2 + 1, 7.5, 1]);
      theta = 180 * Math.acos((sq(walllength) + sq(triA) - sq(triB)) / (2 * walllength * triA)) / Math.PI;
      if (posEnd[2] < posStart[2]) {
        theta = 180 - theta;
      }
      else {
        theta = 180 + theta;
      }
      if (theta > 90 && theta < 270) {
        theta = 180 + theta;
      }
      walls[wallnum].model.yaw((theta * Math.PI) / 180);
      walls[wallnum].setWallStats((theta * Math.PI) / 180, posStart, posEnd);
    }
    //add object to scene
    scn.addObjectToScene(walls[wallnum].model);
    if (wallObjList.length) {
      walls[wallnum].updateWallObjects(oldWallPos, wallObjList, oldLength);
    }
  }
  
  
  function drawRoofandFloor() {
    if (scn) {
      for (var i = 0; i < roofs.length; i++) {
        scn.removeObjectFromScene(roofs[i]);
        scn.removeObjectFromScene(floors[i]);
      }
      floors = [];
      roofs = [];
      for (var i = 0; i < enclosures.length; i++) {
        var verts = [];
        var clock = isClockWise(enclosures[i]);
        for (var j = 0; j < enclosures[i].length; j++) {
          verts.push((enclosures[i][j]-23)/2.5-100);
        }
        if (clock) {
          var temp = [];
          for (var j = verts.length-1; j > 0; j-=2) {
            temp.push(verts[j-1]);
            temp.push(verts[j]);
          }
          roofs[i] = new c3dl.CustomPlane(temp);
        }
        else {
          roofs[i] = new c3dl.CustomPlane(verts);
        }
        roofs[i].setPosition([0, 15, 0]);
        roofs[i].setTexture("images/ceiling.jpg");
        scn.addObjectToScene(roofs[i]);
        if (clock) {
          floors[i] = new c3dl.CustomPlane(verts);
        }
        else {
          var temp = [];
          for (var j = verts.length-1; j > 0; j-=2) {
            temp.push(verts[j-1]);
            temp.push(verts[j]);
          }
          floors[i] = new c3dl.CustomPlane(temp);
        }
        floors[i].setPosition([0, -0.01, 0]); 
        floors[i].setTexture("images/inside.jpg");
        scn.addObjectToScene(floors[i]);
      }
    }
  }
  
 
 
  function isClockWise(enclosure) {
    var i,j,k;
    var count = 0;
    var z;
    var poly = [];
    for (i=0, j = 0; i < enclosure.length;i+=2, j++) {
      poly[j] = [];
      poly[j][0] = enclosure[i];
      poly[j][1] = enclosure[i+1];

    }
    for (i=0;i<poly.length;i++) {
      j = (i + 1) % poly.length;
      k = (i + 2) % poly.length;
      z = (poly[j][0] - poly[i][0]) * (poly[k][1] - poly[j][1]);
      z -= (poly[j][1] - poly[i][1]) * (poly[k][0] - poly[j][0]);
      if (z < 0) {
        count--;
      }
      else if (z > 0) {
        count++;
      }
    }
    if (count > 0) {
      return false;
    }
    return true;
  }
  var checkEnclosures = this.checkEnclosures = function () {
    enclosures = [];
    closedNodes = []
    wallPos2d = Processing.getInstanceById("SceneCaster2d").get2dWalls();
    for (var j = 0; j < wallPos2d.length; j += 4) {
      eTree = new ETree;
      checking(wallPos2d[j], wallPos2d[j + 1], null, j);
      getClosedNodes(eTree);

    }
    getEnclosures();
    if (enclosures[0]) {
      Processing.getInstanceById("SceneCaster2d").setEnclosures(enclosures);
    }
    else {
      Processing.getInstanceById("SceneCaster2d").setEnclosures(0);
    }
    drawRoofandFloor();
  }

  function checking(checkerx, checkery, curnode, curwall) {
    //create the root of the tree if there is none
    if (!curnode) {
      curnode = eTree.createRoot(checkerx, checkery, parseInt(curwall / 4));
    }
    //add child to current node, then set current node to the child
    else {
      curnode = curnode.addChild(checkerx, checkery, parseInt(curwall / 4));
    }
    //check all walls to see if they are touching
    for (var j = 0; j < wallPos2d.length; j += 2) {
      //check: touching, if the wall was used already, if it is closed
      if (checkerx === wallPos2d[j] && checkery === wallPos2d[j + 1] && !checkUsed(curnode, parseInt(j / 4)) && !curnode.closed) {
        //if it is the start position check the end of root node or recurse using start of current wall
        if ((j / 2) % 2 || j === 0) {
          if (eTree.checkRoot(wallPos2d[j - 2], wallPos2d[j - 1])) {
            curnode.closed = true;
          }
          else {
            checking(wallPos2d[j - 2], wallPos2d[j - 1], curnode, j - 2);
          }
        }
        //if it is the end position check the start of root node or recurse using end of current wall
        else {
          if (eTree.checkRoot(wallPos2d[j + 2], wallPos2d[j + 3])) {
            curnode.closed = true;
          }
          else {
            checking(wallPos2d[j + 2], wallPos2d[j + 3], curnode, j + 2);
          }
        }
      }
    }
  }

  function ETree() {
    this.root = null;
    this.nodes = new Array;
    objLocalTree = this;

    this.createRoot = function (x, y, wallnum) {
      this.root = new ENode(x, y, null, wallnum);
      this.root.id = "root";
      this.nodes["root"] = this.root;
      return this.root;
      return objNode;
    }
    this.checkRoot = function (x, y) {
      if (this.root.x === x && this.root.y === y) return true;
      else return false;
    }
  }

  function ENode(x, y, parent, wallnum) {
    this.x = x;
    this.y = y;
    this.closed = false;
    this.wallnum = wallnum;
    this.level = 0;
    this.childNodes = new Array;
    this.parent = parent;
    this.eLength = null;
    this.addChild = function (x, y, wallnum) {
      var objNode = new ENode(x, y, this, wallnum);
      objNode.level = this.level + 1;
      this.childNodes[this.childNodes.length] = objNode;
      objLocalTree.nodes[objLocalTree.nodes.length] = objNode;
      return objNode;
    }
  }

  function checkUsed(testing, wallnum) {
    var used = false;
    if (testing.parent && testing.parent.id !== "root") {
      used = checkUsed(testing.parent, wallnum);
    }
    if (testing.wallnum === wallnum) {
      return true;
    }
    return used;
  }

  function getClosedNodes(eTree) {
    //get all the enclousers created in the tree
    for (var i = 0; i < objLocalTree.nodes.length; i++) {
      if (objLocalTree.nodes[i].closed === true) {
        objLocalTree.nodes[i].eLength = getEnclosureLength(objLocalTree.nodes[i]);
        closedNodes.push(objLocalTree.nodes[i]);
      }
    }
  }

  function getEnclosures() {
    var enclosure = [];
    pointsUsed = [];
    var checker = false;
    var current = 0;
    var temp = closedNodes[0];
    for (var k = 0; k < closedNodes.length; k++) {
      for (var i = 0; i < closedNodes.length; i++) {
        if (closedNodes[i].eLength < temp.eLength) {
          temp = closedNodes[i];
          current = i;
        }
      }
      enclosure = [];
      for (var i = 0, lvl = temp.level; i <= lvl; i++) {
        enclosure.push(temp.x);
        enclosure.push(temp.y);
        temp = temp.parent;
      }
      closedNodes[current].eLength = 9999999;
      temp = closedNodes[current];
      checker = checkCreated(enclosure);
      if (checker) {
        for (var j = 0, len = enclosure.length; j < len; j += 2) {
          pointsUsed.push(enclosure[j]);
          pointsUsed.push(enclosure[j + 1]);
        }
        if (enclosure[0]) {
          enclosures.push(enclosure);
        }
      }
    }
  }

  function checkCreated(enclosure) {
    var check = false;
    var checkArray = [];
    for (var j = 0, len = enclosure.length; j < len; j += 2) {
      checkArray[j] = true;
      for (var i = 0, len2 = pointsUsed.length; i < len2; i += 2) {
        if (enclosure[j] === pointsUsed[i] && enclosure[j + 1] === pointsUsed[i + 1]) {
          checkArray[j] = false;
        }
      }
    }
    for (var j = 0, len = enclosure.length; j < len; j += 2) {
      if (checkArray[j]) {
        check = true;
      }
    }
    return check;
  }

  function getEnclosureLength(test) {
    var eLength = 0;
    for (var i = 0, lvl = test.level; i <= lvl; i++) {
      eLength += c3dl.vectorLength([test.x, test.y, 0]);
      test = test.parent;
    }
    return eLength;
  }

  ////////////////////////////////////////////////////////////////////////////
  // Camera Widget Functions 
  ////////////////////////////////////////////////////////////////////////////
  //changing cameras
  var forwardCam = this.forwardCam = function () {
    (currentCam === 4) ? currentCam = 0 : currentCam++;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }
  var backCam = this.backCam = function () {
    (currentCam == 0) ? currentCam = 4 : currentCam--;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }
  var topView = this.topView = function () {
    currentCam = 0;
    camHeight = cam[currentCam].getPosition()[1];
    newCamHeight = camHeight;
    zoom = c3dl.vectorLength(cam[currentCam].getPosition()) - c3dl.vectorLength(zcam[currentCam].getPosition());
  }
  var popLoad = this.popLoad = function () {
    var addOption = function (selectbox, text, value) {
      var optn = document.createElement("OPTION");
      optn.text = text;
      optn.value = value;
      selectbox.options.add(optn);
    }
    for (var i = 0; i < localStorage.length; ++i) {
      addOption(document.drop_list.files, localStorage.key(i), localStorage.key(i));
    }
  }

  //sliders
  $(function () {
    //jQuery vars
    var name = $( "#name" ),
        sRaduis = $( "#sRaduis" ),
        sDetailU = $( "#sDetailU" ),
        sDetailV = $( "#sDetailV" ),
        cubeLength = $( "#cubeLength" ),
        cubeWidth = $( "#cubeWidth" ),
        cubeHeight = $( "#cubeHeight" ),
        planeLength = $( "#planeLength" ),
        planeWidth = $( "#planeWidth" ),
        allFields,
        tips = $( ".validateTips" ),
        stand,
        placement;
  
    // zoom slider
    $('#zoomslider').slider({
      min: 0,
      max: 50,
      values: zoom,
      orientation: 'vertical',
      slide: function (event, ui) {
        zoom = ui.value - 1;
      }
    });
    // up and down slider
    $('#updownslider').slider({
      min: 5,
      max: 50,
      values: camHeight,
      orientation: 'vertical',
      slide: function (event, ui) {
        camHeight = ui.value - 1;
      }
    });
    //selected video volume slider
    $('#volumeSlider').slider({
      min: 0,
      max: 100,
      slide: function (event, ui) {
        objectSelected.video.volume = ui.value/100;
      }
    });
    //scene lighting slider
    $('#lightSlider').slider({
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
      range: "min",
      slide: function (event, ui) {
        for (i = 0; i < numLights; i++) {
          lights[i].setDiffuse([ui.value, ui.value, ui.value, ui.value]);
        } 
      }
    });
    //selected video position slider
    $('#seekSlider').slider({
      min: 0,
      slide: function (event, ui) {
        objectSelected.video.currentTime = ui.value;
      }
    });
    //Save Window
    $("#dialog-saveAs").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        'Save': function () {
          var bValid = true;
          bValid = bValid && checkLength(name, "filename", 3, 16);
          bValid = bValid && checkRegexp(name, /^[a-z]([0-9a-z_])+$/i, "FileName may consist of a-z, 0-9, underscores, begin with a letter.");
          if (bValid) {
            sceneName = document.getElementById('name').value;
            $(this).dialog('close');
            saveFile();
          }
        },
        Cancel: function () {
          $(this).dialog('close');
        }
      },
      open: function() {
        dialogOpen = true;
        allFields = $( [] ).add( name );
			},
      close: function() {
        dialogOpen = false;
        allFields.val( "" ).removeClass( "ui-state-error" );
        tips.text( "" );
        tips.removeClass( "ui-state-highlight");
			}
    });
    $("#dialog-load").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        'Load': function () {
          sceneName = document.getElementById('selectedname').value;
          sceneName = sceneName.split(".")[0];
          $(this).dialog('close');
          loadScene(sceneName);
        },
        Cancel: function () {
          $(this).dialog('close');
        }
      },
      open: function() {
        dialogOpen = true;
			},
      close: function() {
        dialogOpen = false;
			}
    });
    $("#dialog-create-sphere").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        'OK': function () {
          var bValid = true; 
          allFields.removeClass( "ui-state-error" );
					bValid = bValid && checkRegexp( sRaduis, /^([0-9])+$/, "Radius must be a number");
          bValid = bValid && checkNumberRange( sRaduis, "Raduis", 1, 25 );
          bValid = bValid && checkRegexp( sDetailU, /^([0-9])+$/, "Detail Longitudinally must be a number");
          bValid = bValid && checkNumberRange( sDetailU, "Detail Longitudinally", 3, 360 );
          bValid = bValid && checkRegexp( sDetailV, /^([0-9])+$/, "Detail latitudinally must be a number");
          bValid = bValid && checkNumberRange( sDetailV, "Detail latitudinally", 3, 360 );
          if (bValid) {
            var tempShape = new c3dl.Sphere(sRaduis.val(), sDetailU.val(), sDetailV.val());       
            createPrimitive(tempShape, 'Sphere', 'object', placement, stand);
            $(this).dialog('close');
          }
        },
        Cancel: function () {
          $(this).dialog('close');
        }
      },
      open: function() {
        dialogOpen = true;
        allFields = $( [] ).add( sRaduis ).add( sDetailU ).add( sDetailV );
			},
      close: function() {
        stand = null;
        placement = null;
        dialogOpen = false;
        allFields.val( "" ).removeClass( "ui-state-error" );
        tips.text( "" );
        tips.removeClass( "ui-state-highlight");
			}
    });
    $("#dialog-create-cube").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        'OK': function () {
          var bValid = true; 
          allFields.removeClass( "ui-state-error" );
					bValid = bValid && checkRegexp( cubeLength, /^([0-9])+$/, "Length must be a number");
          bValid = bValid && checkNumberRange( cubeLength, "Length", 1, 25 );
          bValid = bValid && checkRegexp( cubeWidth, /^([0-9])+$/, "Width must be a number");
          bValid = bValid && checkNumberRange( cubeWidth, "Width", 1, 25 );
          bValid = bValid && checkRegexp( cubeHeight, /^([0-9])+$/, "Height must be a number");
          bValid = bValid && checkNumberRange( cubeHeight, "Height", 1, 25 );
          if (bValid) {
            var tempShape = new c3dl.Cube(cubeLength.val(),cubeWidth.val(), cubeHeight.val());      
            createPrimitive(tempShape, "Cube", 'object', placement, stand);
            $(this).dialog('close');
          }
        },
        Cancel: function () {
          $(this).dialog('close');
        }
      },
      open: function() {
        dialogOpen = true;
        allFields = $( [] ).add( cubeLength ).add( cubeWidth ).add( cubeHeight );
			},
      close: function() {
        stand = null;
        placement = null;
        dialogOpen = false;
        allFields.val( "" ).removeClass( "ui-state-error" );
        tips.text( "" );
        tips.removeClass( "ui-state-highlight");
			}
    });
    $("#dialog-create-plane").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        'OK': function () {
          var bValid = true; 
          allFields.removeClass( "ui-state-error" );
					bValid = bValid && checkRegexp( planeLength, /^([0-9])+$/, "Length must be a number");
          bValid = bValid && checkNumberRange( planeLength, "Length", 1, 25 );
          bValid = bValid && checkRegexp( planeWidth, /^([0-9])+$/, "Width must be a number");
          bValid = bValid && checkNumberRange( planeWidth, "Width", 1, 25 );
          if (bValid) {
            var tempShape = new c3dl.Plane(planeLength.val(),planeWidth.val());      
            createPrimitive(tempShape, "Plane", 'object', placement, stand);
            $(this).dialog('close');
          }
        },
        Cancel: function () {
          $(this).dialog('close');
        }
      },
      open: function() {
        dialogOpen = true;
        allFields = $( [] ).add( planeLength ).add( planeWidth );
			},
      close: function() {
        stand = null;
        placement = null;
        dialogOpen = false;
        allFields.val( "" ).removeClass( "ui-state-error" );
        tips.text( "" );
        tips.removeClass( "ui-state-highlight");
			}
    });
    
    $("#dialog-object-properties").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        'OK': function () {
          placement = document.getElementById('placement').value;
          stand = document.getElementById('stand').value;
          nextDialog();
          $(this).dialog('close');
        },
        Cancel: function () {
          $(this).dialog('close');
        }
      },
      open: function() {
        dialogOpen = true;
			},
      close: function() {
        nextDialog = null;
        dialogOpen = false;
			}
    });
   
    // Accordion
    $("#accordion").accordion({
      fillSpace: true,
      header: "h3"
    });
    
    //tabs
		$( "#3d-tool-tabs" ).tabs();
		$( "#2d-tool-tabs" ).tabs();
		$( "#tool-tabs" ).tabs();
    
    //checks a regular expression
    function checkRegexp(o, regexp, n) {
      if (!(regexp.test(o.val()))) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      }
      else {
        return true;
      }
    }
    //checks the length

    function checkLength(o, n, min, max) {
      if (o.val().length > max || o.val().length < min) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of " + n + " must be between " +
        min + " and " + max + "." );      
        return false;
      }
      else {
        return true;
      }
    }
    
    function checkNumberRange(o, n, min, max) {
      if (o.val() > max || o.val() < min) {
        o.addClass( "ui-state-error" );
        updateTips(n + " must be between " +
        min + " and " + max + "." );      
        return false;
      }
      else {
        return true;
      }
    }
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
    }
  });
  
  //run the currently selected effect
  var scaleEffect = this.scaleEffect = function () {
    if (document.getElementById("scaleDiv").style.display === "none") {
      document.getElementById("scaleDiv").setAttribute("style", "display:inline;");
    }
    else {
      document.getElementById("scaleDiv").setAttribute("style", "display:none;");
    }
  };
  var rotateEffect = this.rotateEffect = function () {
    if (document.getElementById("rotateDiv").style.display === "none") {
      document.getElementById("rotateDiv").setAttribute("style", "display:inline;");
    }
    else {
      document.getElementById("rotateDiv").setAttribute("style", "display:none;");
    }
  }; 
})();
