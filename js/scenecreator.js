(function () {
  c3dl.addMainCallBack(canvasViewer, "objectViewer");
  c3dl.addMainCallBack(canvasMain, "SceneCaster3d");

  ////////////////////////////////////////////////////////////////////////////
  // Model Used
  ////////////////////////////////////////////////////////////////////////////  
  //Paths
  const WALL_PATH = "./models/wall/cube.dae";
  //Objects
  const CHAIR_PATH = "./models/chair.dae";
  const TABLE_PATH = "./models/table.dae";
  const LAMP_PATH = "./models/lamp.dae";
  const CEILINGLAMP_PATH = "./models/ceilinglamp.dae";
  const PICTURE_PATH = "./models/picture.dae";
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
  const TV_PATH = "./models/tv.dae";
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
  var SceneObjectList = function () {
    this.list = [];
    this.init = function () {
      //models created so clone can be used
      this.list[0] = new SceneObject();
      this.list[0].init(CHAIR_PATH, "object", "floor", false);
      this.list[0].model.scale([0.08, 0.08, 0.08]);
      this.list[1] = new SceneObject();
      this.list[1].init(TABLE_PATH, "object", "floor", true);
      this.list[1].model.scale([0.25, 0.25, 0.25]);
      this.list[2] = new SceneObject();
      this.list[2].init(PACMAN_PATH, "object", "floor", false);
      this.list[2].model.scale([0.005, 0.005, 0.005]);
      this.list[3] = new SceneObject();
      this.list[3].init(REDGHOST_PATH, "object", "floor", false);
      this.list[3].model.scale([5, 5, 5]);
      this.list[4] = new SceneObject();
      this.list[4].init(BLUEGHOST_PATH, "object", "floor", false);
      this.list[4].model.scale([5, 5, 5]);
      this.list[5] = new SceneObject();
      this.list[5].init(ORANGEGHOST_PATH, "object", "floor", false);
      this.list[5].model.scale([5, 5, 5]);
      this.list[6] = new SceneObject();
      this.list[6].init(PINKGHOST_PATH, "object", "floor", false);
      this.list[6].model.scale([5, 5, 5]);
      this.list[7] = new SceneObject();
      this.list[7].init(PACMANBALL_PATH, "object", "floor", false);
      this.list[7].model.scale([0.04, 0.04, 0.04]);
      this.list[8] = new SceneObject();
      this.list[8].init(PACMANBALL_PATH, "object", "floor", false);
      this.list[8].model.scale([0.02, 0.02, 0.02]);
      this.list[9] = new SceneObject();
      this.list[9].init(LAMP_PATH, "object", "object", false);
      this.list[9].model.scale([0.1, 0.1, 0.1]);
      this.list[10] = new SceneObject();
      this.list[10].init(CEILINGLAMP_PATH, "object", "ceiling", false);
      this.list[10].model.scale([0.08, 0.08, 0.08]);
      this.list[11] = new SceneObject();
      this.list[11].init(PICTURE_PATH, "object", "wall", false);
      this.list[11].model.scale([0.06, 0.06, 0.06]);
      this.list[12] = new SceneObject();
      this.list[12].init(PLAY_PATH, "object", "floor", false);
      this.list[12].model.scale([0.8, 0.8, 0.8]);
      this.list[13] = new SceneObject();
      this.list[13].init(TWITTER_PATH, "object", "wall", false, "Twitter", "Displays a twitter feed", "images/sidebar/twitter.jpg");
      this.list[13].model.scale([2, 4, 0.25]);
      this.list[14] = new SceneObject();
      this.list[14].init(CLOCK_PATH, "object", "wall", false);
      this.list[14].model.scale([0.1, 0.1, 0.1]);
      this.list[15] = new SceneObject();
      this.list[15].init(FLICKR_PATH, "object", "wall", false, "Flickr", "Displays a flickr album", "images/sidebar/flickr.jpg");
      this.list[15].model.scale([2, 2, 0.25]);
      this.list[16] = new SceneObject();
      this.list[16].init(CUSTOMIMG_PATH, "object", "wall", false, "CustomImage", "Displays a custom image from a selected url");
      this.list[16].model.scale([2, 2, 0.25]);
      this.list[17] = new SceneObject();
      this.list[17].init(CUSTOMVIDEO_PATH, "object", "wall", false, "CustomVideo", "Displays a custom video from a selected url");
      this.list[17].model.scale([2, 2, 0.25]);
      this.list[18] = new SceneObject();
      this.list[18].init(TV_PATH, "object", "object", false, "TV", "Displays a custom video from a selected url on the screen");
      this.list[18].model.scale([0.01, 0.01, 0.01]);
    };
    this.getSceneObject = function (num) {
      closeAllWidgets();
      return this.list[num].getCopy();
    };
    this.getSceneObjectbyPath = function (path) {
      closeAllWidgets();
      for (var i = 0; i < this.list.length;i++) {
        if (this.list[i].path === path) {
          return this.list[i].getCopy();
        }
      }
    };
  }

  var SceneObject = function () {
    this.model = new c3dl.Collada();
    //types: wall, floor, ceiling, object
    this.type = null;
    //hang on wall or ceiling. Sit on floor or object
    this.snapTo = null;
    //Allow objects to sit on object
    this.stand = false;
    //reference to object siting on it
    this.objectOnTop = [];
    //reference to object it is sitting on
    this.objectOnBottom = null;
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
    //file path to model
    this.path = null;
    this.init = function () {
      if (arguments.length >= 4) {
        this.model.init(arguments[0]);
        this.path=arguments[0];
        this.model.centerObject();
        this.type = arguments[1];
        this.snapTo = arguments[2];
        this.stand = arguments[3];
      }
      if (arguments.length >= 5) {
        this.name = arguments[4];
      }
      if (arguments.length >= 6) {
        this.description = arguments[5];
      }
      if (arguments.length >= 7) {
        this.picture = arguments[6];
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
      this.snapTo = other.snapTo;
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
      if (this.snapTo === "wall") {
        this.oldpos = this.model.getPosition();
        var worldCoords = currNode(mouseX, mouseY, this.model.getPosition(), this.wallNorm);
        var wallCenter = this.objectOnBottom.model.getPosition();
        var height = this.objectOnBottom.model.getHeight() / 2;
        var length = this.objectOnBottom.model.getLength() / 2;
        var difLen = c3dl.subtractVectors([wallCenter[0], 0, wallCenter[2]], [worldCoords[0], 0, worldCoords[2]]);
        difLen = c3dl.vectorLength(difLen);
        difLen = difLen - this.objectOnBottom.model.getWidth() / 2 - this.model.getWidth() / 2;
        var difHeight = worldCoords[1] - wallCenter[1];
        if (difHeight + this.model.getHeight() / 2 < height && difLen + this.model.getLength() / 2 + 1 < length && difLen - this.model.getLength() / 2 - 1 > -length && difHeight - this.model.getHeight() / 2 > -height) {
          this.model.setPosition(worldCoords)
        }
      }
      else if (this.snapTo === "ceiling") {
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
      if (this.snapTo === "object" && objectCollided.type === "object" && objectCollided.stand) {
        if (objectCollided !== this.objectOnBottom) {
          this.placeObjectOnObject(objectCollided);
          commands[curcmd].execute();
          moveObject = false;
          holding = false;
        }
      }
      else if (this.snapTo === "wall" && objectCollided.type === "wall") {
        if (objectCollided !== this.objectOnBottom) {
          this.model.rotateOnAxis([0,1,0], -this.angle);
          this.placeObjectOnWall(objectCollided);
          commands[curcmd].execute();
          moveObject = false;
          holding = false;
        }
      }
      else {
        this.model.setPosition(this.oldpos);
        for (var i = 0, len = this.objectOnTop.length; i < len; i++) {
          this.objectOnTop[i].model.setPosition(this.objectOnTop[i].oldpos);
        }
      }
    };
    this.placeObjectOnWall = function (wall) {
      this.objectOnBottom = wall;
      wall.objectOnTop.push(this);
      var wallPos = wall.model.getPosition();
      var camPos = zcam[currentCam].getPosition();
      this.wallNorm = wall.model.getDirection();
      var difPos = c3dl.subtractVectors(camPos, wallPos);
      c3dl.normalizeVector(difPos)
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
      for (var i = 0, len = this.objectOnTop.length; i < len; i++) {
        this.objectOnTop[i].moveTopObjects(x, z);
      }
    };
    this.placeObjectOnObject = function (obj) {
      if (obj.stand) {
        this.oldpos = this.model.getPosition();
        var temp = obj.model.getPosition();
        this.model.setPosition([temp[0], temp[1] + (obj.model.getHeight() / 2) + (this.model.getHeight() / 2) -0.01, temp[2]]);
        obj.objectOnTop.push(this);
        this.objectOnBottom = obj;
      }
    };
    this.removeObjectOnTop = function (obj) {
      var foundFlag = false;
      for (var i = 0, len = this.objectOnTop.length; i < len; i++) {
        if (this.objectOnTop[i] === obj) {
          foundFlag = true;
          this.objectOnTop[i] = null;
        }
        else if (foundFlag) {
          this.objectOnTop[i-1] = this.objectOnTop[i];
        }
      }
       this.objectOnTop.pop();
    };
    this.updateWallObjects = function (oldWallPos, wallObjList, oldLength) {
      this.objectOnTop = wallObjList;
      var newLength = this.model.getLength();
      var difLength = newLength / oldLength;
      var m = (this.endPoint[2] - this.startPoint[2]) / (this.endPoint[0] - this.startPoint[0]);
      if (isFinite(m)) {
        var b = (m * -this.startPoint[0]) + this.startPoint[2];
        for (var i = 0, len = this.objectOnTop.length; i < len; i++) {
          this.objectOnTop[i].objectOnBottom = this;
          this.objectOnTop[i].model.yaw(-this.objectOnTop[i].angle);
          this.objectOnTop[i].model.yaw(this.angle);
          this.objectOnTop[i].setAngle(this.angle);
          var modelPos = this.objectOnTop[i].model.getPosition();

          var x = this.model.getPosition()[0] + ((modelPos[0] - oldWallPos[0]) * difLength);
          var y = (m * x) + b;
          var newPos = [x, modelPos[1], y];
          var norm = this.objectOnTop[i].model.getDirection();
          var width = this.model.getWidth() / 2 + this.objectOnTop[i].model.getWidth() / 2;
          newPos = c3dl.addVectors(newPos, c3dl.multiplyVector(norm, width));
          this.objectOnTop[i].model.setPosition(newPos);
        }
      }
      else {
        var z = oldWallPos[2] - this.model.getPosition()[2];
        for (var i = 0, len = this.objectOnTop.length; i < len; i++) {
          this.objectOnTop[i].objectOnBottom = this;
          this.objectOnTop[i].model.yaw(-this.objectOnTop[i].angle);
          this.objectOnTop[i].model.yaw(this.angle);
          this.objectOnTop[i].setAngle(this.angle);
          var mPos = this.objectOnTop[i].model.getPosition();
          var newPos = [this.model.getPosition()[0], mPos[1], (mPos[2] - z)];
          var norm = this.objectOnTop[i].model.getDirection();
          var width = this.model.getWidth() / 2 + this.objectOnTop[i].model.getWidth() / 2;
          newPos = c3dl.addVectors(newPos, c3dl.multiplyVector(norm, width));
          this.objectOnTop[i].model.setPosition(newPos);
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
        var worldCoords = currNode(mouseX, mouseY, this.obj.model.getPosition(), scn.getCamera().getDir());
        var worldCoordsOrig = currNode(this.x, this.y, this.obj.model.getPosition(), scn.getCamera().getDir());
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
        worldCoords[1] = currNode(mouseX, mouseY, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoords = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoords);
        var worldCoordsOrig = getworldCoords(this.x, this.y, this.obj.model.getPosition()[1]);
        worldCoordsOrig[1] = currNode(this.x, this.y, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoordsOrig = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoordsOrig);
        var dif = worldCoords[0] / worldCoordsOrig[0];
        if (length * dif > 0) {
          length = length * dif;
        }
      }
      else if (selectedAxis === this.model[1]) {
        var worldCoords = getworldCoords(mouseX, mouseY, this.obj.model.getPosition()[1]);
        worldCoords[1] = currNode(mouseX, mouseY, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoords = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoords);
        var worldCoordsOrig = getworldCoords(this.x, this.y, this.obj.model.getPosition()[1]);
        worldCoordsOrig[1] = currNode(this.x, this.y, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoordsOrig = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoordsOrig);
        var dif = worldCoords[1] / worldCoordsOrig[1];
        if (height * dif > 0) {
          height = height * dif;
        }
      }
      else if (selectedAxis === this.model[2]) {
        var worldCoords = getworldCoords(mouseX, mouseY, this.obj.model.getPosition()[1]);
        worldCoords[1] = currNode(mouseX, mouseY, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
        worldCoords = c3dl.multiplyMatrixByVector(c3dl.inverseMatrix(obj.model.getTransform()), worldCoords);
        var worldCoordsOrig = getworldCoords(this.x, this.y, this.obj.model.getPosition()[1]);
        worldCoordsOrig[1] = currNode(this.x, this.y, this.obj.model.getPosition(), scn.getCamera().getDir())[1];
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
          this.pointOnSphere = currNode(this.x, this.y, obj.model.getPosition(), [1, 0, 0]);
          //calculate the line equation for the line tangent from the rotate widget
          var m = -1 * (this.pointOnSphere[2] - centerPos[2]) / (this.pointOnSphere[1] - centerPos[1]);
          var b = this.pointOnSphere[1] - (m * this.pointOnSphere[2]);
          var x = currNode(mouseX, mouseY, obj.model.getPosition(), [1, 0, 0])[2];
          var y = (m * x) + b;
          
          var x2 = currNode(this.x, this.y, obj.model.getPosition(), [1, 0, 0])[2];
          var y2 = (m * x2) + b;

          //angle in between tangent and mouse pos
          obj.angleX = -1*(((y - y2)/m)/3);
          //drawing the line tangent
          temp = (m * (this.pointOnSphere[2]-1)) + b;
          var pos1 = [this.pointOnSphere[0], temp, this.pointOnSphere[2]-1];
          var temp2 = (m * (this.pointOnSphere[2]+1)) + b;
          var pos2 = [this.pointOnSphere[0], temp2, this.pointOnSphere[2]+1];          
          this.l.setCoordinates(pos1,pos2);
          
          pos2 = currNode(mouseX, mouseY, obj.model.getPosition(), [1, 0, 0]);
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
          this.pointOnSphere = currNode(this.x, this.y, obj.model.getPosition(), [0, 0, 1]);
          //calculate the line equation for the line tangent from the rotate widget
          var m = -1 * (this.pointOnSphere[0] - centerPos[0]) / (this.pointOnSphere[1] - centerPos[1]);
          var b = this.pointOnSphere[1] - (m * this.pointOnSphere[0]);
          var x = currNode(mouseX, mouseY, obj.model.getPosition(), [0, 0, 1])[0];
          var y = (m * x) + b;
          
          var x2 = currNode(this.x, this.y, obj.model.getPosition(), [0, 0, 1])[0];
          var y2 = (m * x2) + b;

          //angle in between tangent and mouse pos
          obj.angleZ = ((y - y2)/m)/3;
          //drawing the line tangent
          temp = (m * (this.pointOnSphere[0]-1)) + b;
          var pos1 = [this.pointOnSphere[0]-1, temp, this.pointOnSphere[2]];
          var temp2 = (m * (this.pointOnSphere[0]+1)) + b;
          var pos2 = [this.pointOnSphere[0]+1, temp2, this.pointOnSphere[2]];
          this.l.setCoordinates(pos1,pos2);
          
          pos2 = currNode(mouseX, mouseY, obj.model.getPosition(), [0, 0, 1]);
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
      sceneObjectList = new SceneObjectList,
      wallSelected = null,
      wallObjectFlag = false,
      mWidget = null,
      sWidget = null,
      rWidget = null,
      selectedAxis = null,
      updateTimer = 0,
      fCounter = 0,
	    tweets = [],
      roofs = [],
      floors = [];
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

  //When a button is pressed from html
  var buttonOn = this.buttonOn = function (buttonID) {
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
        commands[curcmd] = new moveObjectCommand(objectSelected.model.getPosition());
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
        commands[curcmd] = new moveObjectCommand(objectSelected.model.getPosition());
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
  var buttonOff = this.buttonOff = function (buttonID) {
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
    document.getElementById("main2d").setAttribute("style", "display:inline;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    document.getElementById("mainImages").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("TwitterDiv").setAttribute("style", "display:none;");
    document.getElementById("FlickrDiv").setAttribute("style", "display:none;");
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:none;");
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:none;");
    pause3d();
    unpause2d();
    viewer = false;
  }
  var show3d = this.show3d = function () {
    document.getElementById("main3d").setAttribute("style", "display:inline;");
    document.getElementById("mainButtons").setAttribute("style", "display:inline;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    document.getElementById("mainImages").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("TwitterDiv").setAttribute("style", "display:none;");
    document.getElementById("FlickrDiv").setAttribute("style", "display:none;");
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:none;");
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:none;");
    unpause3d();
    pause2d();
    viewer = false;
  }
  var showgoogle = this.showgoogle = function () {
    document.getElementById("maingoogle").setAttribute("style", "display:inline;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("mainImages").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("TwitterDiv").setAttribute("style", "display:none;");
    document.getElementById("FlickrDiv").setAttribute("style", "display:none;");
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:none;");
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
    viewer = false;
  }
  var showImages = this.showImages = function () {
    document.getElementById("mainImages").setAttribute("style", "display:inline;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("TwitterDiv").setAttribute("style", "display:none;");
    document.getElementById("FlickrDiv").setAttribute("style", "display:none;");
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:none;");
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
    viewer = false;
  }
  var showTwitter = this.showTwitter = function () {
    document.getElementById("TwitterDiv").setAttribute("style", "display:inline;");
    document.getElementById("mainImages").setAttribute("style", "display:none;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("mainButtons").setAttribute("style", "display:none;");
    document.getElementById("FlickrDiv").setAttribute("style", "display:none;");
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:none;");
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
    viewer = false;
  }
  var showFlickr = this.showFlickr = function () {
    document.getElementById("FlickrDiv").setAttribute("style", "display:inline;");
    document.getElementById("TwitterDiv").setAttribute("style", "display:none;");
    document.getElementById("mainImages").setAttribute("style", "display:none;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("mainButtons").setAttribute("style", "display:none;");
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:none;");
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
    viewer = false;
  }
  var showImageSrcDiv = this.showImageSrcDiv = function () {
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:inline;");
    document.getElementById("FlickrDiv").setAttribute("style", "display:none;");
    document.getElementById("TwitterDiv").setAttribute("style", "display:none;");
    document.getElementById("mainImages").setAttribute("style", "display:none;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("mainButtons").setAttribute("style", "display:none;");
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
    viewer = false;
  }
 
   var showVideoSrcDiv = this.showVideoSrcDiv = function () {
    document.getElementById("VideoSrcDiv").setAttribute("style", "display:inline;");
    document.getElementById("FlickrDiv").setAttribute("style", "display:none;");
    document.getElementById("TwitterDiv").setAttribute("style", "display:none;");
    document.getElementById("mainImages").setAttribute("style", "display:none;");
    document.getElementById("main2d").setAttribute("style", "display:none;");
    document.getElementById("main3d").setAttribute("style", "display:none;");
    document.getElementById("maingoogle").setAttribute("style", "display:none;");
    document.getElementById("viewerMain").setAttribute("style", "display:none;");
    document.getElementById("mainButtons").setAttribute("style", "display:none;");
    document.getElementById("ImageSrcDiv").setAttribute("style", "display:none;");
    pause3d();
    pause2d();
    viewer = false;
  }
  var createClock = this.createClock = function () {
    createObject(14); 
    objectSelected.canvas = document.createElement('CANVAS');  
    objectSelected.canvas.setAttribute('id',"Clock");  
    objectSelected.canvas.setAttribute('width',256);  
    objectSelected.canvas.setAttribute('height',256);  
    var scripts = document.getElementsByTagName("script");
    for ( var i = 0; i < scripts.length; i++ ) {
      if (scripts[i].id == "ClockPjs" ) {
        objectSelected.pjs = new Processing(objectSelected.canvas, scripts[i].text);      
      }
    }
    objectSelected.model.setTexture(objectSelected.canvas);
  }
  var createTwitter = this.createTwitter = function (query) {
    if (objectSelected && objectSelected.editing) {
      objectSelected.editing = null;
    }
    else {
      createObject(13); 
    }
    objectSelected.canvas = document.createElement('CANVAS');  
    objectSelected.canvas.setAttribute('id',"Twitter");  
    objectSelected.canvas.setAttribute('width',256);  
    objectSelected.canvas.setAttribute('height',512);  
    var scripts = document.getElementsByTagName("script");
    for ( var i = 0; i < scripts.length; i++ ) {
      if (scripts[i].id == "twitterPjs" ) {
        objectSelected.pjs = new Processing(objectSelected.canvas, scripts[i].text); 
        objectSelected.query = query;      
      }
    }
    objectSelected.model.setTexture(objectSelected.canvas);
  }
  
  var createFlickr = this.createFlickr = function (query) {
    if (objectSelected && objectSelected.editing) {
      objectSelected.editing = null;
    }
    else {
    createObject(15); 
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
      createObject(16); 
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
      createObject(17); 
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
    createObject(18); 
    var src = "http://code.bocoup.com/audio-data-api/flash-vs-html5/mj-dontstop2.ogv"
    objectSelected.video = document.createElement('video');
    objectSelected.video.setAttribute('id',"video");  
    objectSelected.video.setAttribute('src',src);  
    objectSelected.video.setAttribute('autoplay',"autoplay");  
    objectSelected.video.setAttribute('loop',"loop");
    objectSelected.model.updateTextureByName("updatingTexture",objectSelected.video);  
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
      document.getElementById("viewerMain").setAttribute("style", "display:inline;");
      document.getElementById("main2d").setAttribute("style", "display:none;");
      document.getElementById("main3d").setAttribute("style", "display:none;");
      document.getElementById("maingoogle").setAttribute("style", "display:none;");
      document.getElementById("mainImages").setAttribute("style", "display:none;");
      pause3d();
      pause2d();
      scnViewer.unpauseScene();
      viewer = true;
    }
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
      if (objects[i].objectOnTop.length) {
        serial.objects[i].objectOnTop = [];
        for (var j = 0; j < objects[i].objectOnTop.length; j++) {
          for (var k = 0; k < numObjects; k++) {
            if (objects[i].objectOnTop[j] === objects[k]) {
              serial.objects[i].objectOnTop.push(k);
            }
          }
        }
      }
      if (objects[i].objectOnBottom) {
        for (var k = 0; k < numObjects; k++) {
          if (objects[i].objectOnBottom === objects[k]) {
            serial.objects[i].onWall=false; 
            serial.objects[i].objectOnBottom=k;
          }
        }
        for (var k = 0; k < numWalls; k++) {
          if (objects[i].objectOnBottom === walls[k]) {
            serial.objects[i].onWall=true; 
            serial.objects[i].wallNorm = objects[i].wallNorm;
            serial.objects[i].angle = objects[i].angle;
            serial.objects[i].objectOnBottom=k;
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
      if (walls[i].objectOnTop.length) {
        serial.walls[i].objectOnTop = [];
        for (var j = 0; j < walls[i].objectOnTop.length; j++) {
          for (var k = 0; k < numObjects; k++) {
            if (walls[i].objectOnTop[j] === objects[k]) {
              serial.walls[i].objectOnTop.push(k);
            }
          }
        }
      }
    }
    var serial = JSON.stringify(serial);
    this.localStorage.setItem(sceneName, serial);
  }
  var load = this.load = function () {

    for (i = 0; i < localStorage.length; i++) {
      theSel = document.getElementById('selectedname');
      var key = localStorage.key(i);
      var newOpt = new Option(key, key);
      theSel.options[i] = newOpt;
    }
    $("#dialog-load").dialog("open");
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
    var serial = JSON.parse(localStorage.getItem(name));
    currentCam = serial.currentCam;
    numWalls = serial.numWalls;
    numLights = serial.numLights;
    numObjects = serial.numObjects;
    Processing.getInstanceById("SceneCaster2d").setVars(serial.allVars);
    objects = [];
    for (var i = 0; i < serial.numObjects; i++) {
      objects[i]= sceneObjectList.getSceneObjectbyPath(serial.objects[i].path);
      objects[i].model.setSize(serial.objects[i].length, serial.objects[i].width,serial.objects[i].height);
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
      if (serial.objects[i].objectOnTop) {
        objects[i].objectOnTop = [];
        for (var j = 0; j < serial.objects[i].objectOnTop.length; j++) {
          objects[i].objectOnTop.push(objects[serial.objects[i].objectOnTop[j]]);
        }
      }
      if (serial.objects[i].objectOnBottom >= 0) {
        if (serial.objects[i].onWall){
          objects[i].wallNorm = serial.objects[i].wallNorm;
          objects[i].angle = serial.objects[i].angle;
          objects[i].objectOnBottom= walls[serial.objects[i].objectOnBottom];
        }
        else {
          objects[i].objectOnBottom= objects[serial.objects[i].objectOnBottom];
        } 
      }
    }
    for (var i = 0; i < numWalls; i++) {
      if (serial.walls[i].objectOnTop) {
        walls[i].objectOnTop = [];
        for (var j = 0; j < serial.walls[i].objectOnTop.length; j++) {
          walls[i].objectOnTop.push(objects[serial.walls[i].objectOnTop[j]]);
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
  //checks a regular expression

  function checkRegexp(o, regexp, n) {
    if (!(regexp.test(o.val()))) {
      return false;
    }
    else {
      return true;
    }
  }
  //checks the length

  function checkLength(o, n, min, max) {
    if (o.val().length > max || o.val().length < min) {
      return false;
    }
    else {
      return true;
    }
  }
  
  var starupdateTimer = this.starupdateTimer = function () {
    updateTimer = 1;
  }
  
  var DisplayObjectInfo = function () {
    if (objectSelected) {
      document.getElementById('objPic').src = objectSelected.getPicture();
      document.getElementById('objName').innerHTML = objectSelected.getName();
      document.getElementById('objDes').innerHTML = objectSelected.getDescription();
      var pos = objectSelected.model.getPosition();
      document.getElementById('objPos').innerHTML = "x=" +  pos[0].toFixed(2) + " " +"y=" + pos[1].toFixed(2) +  " " +"z=" + pos[2].toFixed(2) +  " ";
      if (objectSelected.processor) {
        document.getElementById("videoControls").setAttribute("style", "display:inline;");
        $("#volumeSlider").slider("value", objectSelected.video.volume*100);
        $("#seekSlider").slider("value", objectSelected.video.currentTime);
        if (objectSelected.video.duration >0) {
          $("#seekSlider").slider("option","max", objectSelected.video.duration);
        }
      }
      else if (objectSelected.video) {
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
  var createObjectCommand = function (objID) {
    Command.call();
    this.objects = objects;
    this.objectSelected = objectSelected;
    this.objID = objID;
    this.newobject;
    this.execute = function () {
      if (!this.newobject) {
        objects[numObjects] = sceneObjectList.getSceneObject([objID]);
        scn.addObjectToScene(objects[numObjects].model);
        if (objectSelected) {
          objectSelected.model.setRenderObb(false);
        }
        this.newobject = objectSelected = objects[numObjects];
        objectSelected.model.setRenderObb(true);
        moveObject = true;
        if (objectSelected.snapTo === "ceiling") {
          objectSelected.model.setPosition([0, 15 - (objectSelected.model.getHeight() / 2), 0]);
        }
        if (objectSelected.snapTo === "wall") {
          alert("Please Select a wall the attach object")
          wallObjectFlag = true;
          objectSelected.model.setPosition([0, -50, 0]);
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
        if (objectSelected.snapTo === "ceiling") {
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
    CANVAS_HEIGHT = canvas.height = Math.floor(canvas.width*0.75);
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

      //create all objects that will be used
      sceneObjectList.init();

      // Effect used when game objects are selected
      selectedEffect = new c3dl.Effect();
      selectedEffect.init(c3dl.effects.SEPIA);
      selectedEffect.setParameter("color", [10, 10, 0]);
      scn.setAmbientLight([0.2, 0.2, 0.2, 0.2]);
      
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
      CANVAS_WIDTH = canvas.width = Math.floor(myWidth*0.6);
      CANVAS_HEIGHT = canvas.height = Math.floor(canvas.width*0.75);
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
    //move selected object up 
    if (buttons[0] && objectSelected) {
      var curpos = objectSelected.model.getPosition();
      objectSelected.model.setPosition([curpos[0], curpos[1] + 1, curpos[2]]);
    }
    //move selected object down 
    else if (buttons[1] && objectSelected) {
      var curpos = objectSelected.model.getPosition();
      objectSelected.model.setPosition([curpos[0], curpos[1] - 1, curpos[2]]);
    }
    //rotate selected object left
    else if (buttons[2] && objectSelected) {
      rot += -0.1;
      objectSelected.model.yaw(-0.1)
    }
    //rotate selected object right
    else if (buttons[3] && objectSelected) {
      rot += 0.1;
      objectSelected.model.yaw(0.1)
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
    if (wallObjectFlag) {
      if (wallSelected) {
        objectSelected.placeObjectOnWall(wallSelected);
        wallSelected = null;
        wallObjectFlag = false;
      }
    }
    else {
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
            for (var j = 0, len2 = objectSelected.objectOnTop.length; j < len2; j++) {
              if (objectSelected.objectOnTop[j] === sceneObjectsCollided[i]) {
                foundFlag = false;
              }
            }
            if (foundFlag) {
              objectSelected.handleCollision(sceneObjectsCollided[i]);
            }
          }
        }
        else {
          if (objectSelected.objectOnBottom && objectSelected.snapTo !== "wall") {
            var curpos = objectSelected.model.getPosition();
            objectSelected.model.setPosition([curpos[0], objectSelected.model.getHeight() / 2, curpos[2]]);
            objectSelected.objectOnBottom.removeObjectOnTop(objectSelected);
            objectSelected.objectOnBottom = null;
            
          }
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
    if (objectsPicked.length > 0) {
      //check for selecting a wall for adding wall objects
      if (wallObjectFlag) {
        for (var i = 0, len = walls.length; i < len; i++) {
          if (objectsPicked[0] === walls[i].model) {
            wallSelected = walls[i];
          }
        }
      }
      //check move widget selection
      else if (mWidget.getVisible()) {
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
      //picking objects
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
    }
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
  var currNode = this.currNode = function (mmx, mmy, origin, norm) {
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
  var createObject = this.createObject = function (objID) {
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
  var getPNG = function () {
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
    var wallObjList = c3dl.copyObj(walls[wallnum].objectOnTop);
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
    if (wallObjList[0]) {
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
      }
    });
    $("#dialog-load").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        'Load': function () {
          sceneName = document.getElementById('selectedname').value;
          $(this).dialog('close');
          loadScene(sceneName);
        },
        Cancel: function () {
          $(this).dialog('close');
        }
      }
    });
    var name = $("#name");
    // Accordion
    $("#accordion").accordion({
      header: "h3"
    });
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