
c3dl.BoundingBox = function ()
{
  //x
  this.length = 0;
  //y
  this.height = 0;
  //z
  this.width = 0;
  //All Verts
  this.allverts = [];
  this.boxverts = [];
  this.lineList =[];
  this.maxMins= [];
  this.realposition = [];
  this.position = c3dl.makeVector(0.0, 0.0, 0.0);
  this.init = function (vertices)
  {
    if (vertices) {
      this.allverts = vertices;
      var lengthVerts=[], widthVerts=[], heightVerts=[], j = 0;
      for (var i = 0; i < vertices.length/3; i++) {
        lengthVerts[i] = vertices[j];
        heightVerts[i] = vertices[j+1];
        widthVerts[i] = vertices[j+2];
        j+=3
      }    
       
      this.maxMins[0] = c3dl.findMax(lengthVerts); 
      this.maxMins[1] = c3dl.findMin(lengthVerts);
      this.maxMins[2] = c3dl.findMax(heightVerts);
      this.maxMins[3] = c3dl.findMin(heightVerts); 
      this.maxMins[4] = c3dl.findMax(widthVerts); 
      this.maxMins[5] = c3dl.findMin(widthVerts);     
     
      this.realposition[0] = (this.maxMins[0] + this.maxMins[1])/2;
      this.realposition[1] = (this.maxMins[2] + this.maxMins[3])/2;
      this.realposition[2] = (this.maxMins[4] + this.maxMins[5])/2;
      this.length=this.maxMins[0]-this.maxMins[1];
      this.height=this.maxMins[2]-this.maxMins[3];
      this.width=this.maxMins[4]-this.maxMins[5];
    }
    for (var i = 0; i <12; i++) {
      this.lineList[i] = new c3dl.Line();
      this.lineList[i].setWidth(2);
    }  

    //F top left 
    this.boxverts[0] =[ this.maxMins[1] - this.realposition[0], this.maxMins[3] - this.realposition[1] ,  this.maxMins[5] - this.realposition[2] ];
    //B top left 
    this.boxverts[1] =[ this.maxMins[1] - this.realposition[0] , this.maxMins[3] - this.realposition[1],  this.maxMins[4] - this.realposition[2]];                         
    //F top right                       
    this.boxverts[2] =[ this.maxMins[0] - this.realposition[0] , this.maxMins[3] - this.realposition[1],  this.maxMins[5] - this.realposition[2]]; 
    //B top right    
    this.boxverts[3] =[ this.maxMins[0]  - this.realposition[0], this.maxMins[3] - this.realposition[1],  this.maxMins[4] - this.realposition[2]];
    //F bottom left 
    this.boxverts[4] =[ this.maxMins[1]  - this.realposition[0], this.maxMins[2] - this.realposition[1],  this.maxMins[5]- this.realposition[2] ];
    //B bottom left
    this.boxverts[5] =[ this.maxMins[1]  - this.realposition[0], this.maxMins[2] - this.realposition[1],  this.maxMins[4]- this.realposition[2] ];
    //F bottom right
    this.boxverts[6] =[ this.maxMins[0]  - this.realposition[0], this.maxMins[2] - this.realposition[1],  this.maxMins[5]- this.realposition[2] ]; 
    //B bottom right  
    this.boxverts[7] =[ this.maxMins[0]  - this.realposition[0], this.maxMins[2]- this.realposition[1] , this.maxMins[4]- this.realposition[2] ];

  }
  
  this.setPosition = function (position)
  {
    for (var i = 0; i <8; i++) {
      this.boxverts[i] = c3dl.subtractVectors(this.boxverts[i], this.position);
    }
    this.position = [position[0], position[1], position[2]];
    this.realposition = [position[0]-this.realposition[0], position[1]-this.realposition[1], position[2]-this.realposition[2]];
    for (var i = 0; i <8; i++) {
      this.boxverts[i] = c3dl.addVectors(this.boxverts[i], this.position);
    }
    
  }
  this.scale = function (scaleVec)
  {
    this.length = this.length * scaleVec[0];
    this.height = this.height * scaleVec[1];
    this.width = this.width * scaleVec[2];
    for (var i = 0; i <8; i++) 
      this.boxverts[i] = c3dl.subtractVectors(this.boxverts[i], this.position);
    for (var i = 0; i <8; i++) 
      this.boxverts[i] = c3dl.multiplyVectorByVector(this.boxverts[i], scaleVec);
    for (var i = 0; i <8; i++) 
      this.boxverts[i] = c3dl.addVectors(this.boxverts[i], this.position);
  }
  
  this.rotateOnAxis = function (axisVec, angle)
  {
    var rotateOnAxisQuat = c3dl.makeQuat(0, 0, 0, 0);
    var rotateOnAxisMat = c3dl.makeZeroMatrix();
    
    if (!c3dl.isValidVector(axisVec))
    {
      c3dl.debug.logWarning('Actor::rotateOnAxis() called with the first parameter not a vector');
      return;
    }
    if (isNaN(angle))
    {
      c3dl.debug.logWarning('Actor::rotateOnAxis() called with the second parameter not a number');
      return;
    }
    if (angle == 0)
    {
      return;
    }

    // Create a proper Quaternion based on location and angle
    c3dl.axisAngleToQuat(axisVec, angle, rotateOnAxisQuat);

    // Create a rotation Matrix out of this quaternion
    rotateOnAxisMat = c3dl.quatToMatrix(rotateOnAxisQuat);

    // Apply changes to the remaining vectors
    //
    for (var i = 0; i <8; i++) {
      this.boxverts[i] = c3dl.subtractVectors(this.boxverts[i], this.position);
    }
    for (var i = 0; i <8; i++) 
      c3dl.multiplyMatrixByVector(rotateOnAxisMat, this.boxverts[i], this.boxverts[i]);
    for (var i = 0; i <8; i++) 
      this.boxverts[i] = c3dl.addVectors(this.boxverts[i], this.position);
  }
  this.getHeight = function ()
  {
    return this.height;
  }
  this.getLength = function ()
  {
    return this.length;
  }
  this.getWidth = function ()
  {
    return this.width;
  }
  
  //draw a box using lines
  this.render = function(scene)
  {
    //front of box
    //top left to top right
    this.lineList[0].setCoordinates(this.boxverts[0],this.boxverts[2]);
    //top left to bottom left                            
    this.lineList[1].setCoordinates(this.boxverts[0],this.boxverts[4]); 
    //bottom left to bottom right 
    this.lineList[2].setCoordinates(this.boxverts[4],this.boxverts[6]);
    //bottom right to top right
    this.lineList[3].setCoordinates(this.boxverts[6],this.boxverts[2]);

    //back of box
    //top left to top right
    this.lineList[4].setCoordinates(this.boxverts[1],this.boxverts[3]);
    //top left to bottom left                            
    this.lineList[5].setCoordinates(this.boxverts[1],this.boxverts[5]); 
    //bottom left to bottom right 
    this.lineList[6].setCoordinates(this.boxverts[5],this.boxverts[7]);
    //bottom right to top right
    this.lineList[7].setCoordinates(this.boxverts[7],this.boxverts[3]);
    
    //connectors
    //F top left to B top left
    this.lineList[8].setCoordinates(this.boxverts[0],this.boxverts[1]);
    //F top right to B top right                           
    this.lineList[9].setCoordinates(this.boxverts[2],this.boxverts[3]); 
    //F bottom left to B bottom left 
    this.lineList[10].setCoordinates(this.boxverts[4],this.boxverts[5]);
    //F bottom right to B bottom right  
    this.lineList[11].setCoordinates(this.boxverts[6],this.boxverts[7]);
    
    scene.getRenderer().renderLines(this.lineList);
  }
  this.getCorners = function () 
  {
    return [this.position[0] + this.maxMins[0], this.position[2] + this.maxMins[5], this.position[0] + this.maxMins[1], this.position[2] + this.maxMins[4]];
  }
}



