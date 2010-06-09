
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
  
  this.init = function (vertices)
  {
    if (vertices) {
      var lengthVerts=[], widthVerts=[], heightVerts=[], j = 0;
      for (var i = 0; i < vertices.length/3; i++) {
        lengthVerts[i] = vertices[j];
        heightVerts[i] = vertices[j+1];
        widthVerts[i] = vertices[j+2];
        j+=3
      }    
      this.length=c3dl.findMax(lengthVerts)-c3dl.findMin(lengthVerts);
      this.height=c3dl.findMax(heightVerts)-c3dl.findMin(heightVerts);
      this.width=c3dl.findMax(widthVerts)-c3dl.findMin(widthVerts);
    }
  }
  
  this.setPosition = function (position)
  {
    this.position = [position[0], position[1], position[2]];
  }
  this.scale = function (scaleVec)
  {
    this.length = this.length * scaleVec[0];
    this.height = this.height * scaleVec[1];
    this.width = this.width * scaleVec[2];
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

  this.render = function(scene)
  {
  }
}



