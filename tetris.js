

function cube(){
  //this.axis = [[343],[377.5],[412],[446.5],[481],[515.5],[550],[584.5],[619],[653.5],[688],[722.5],[757],[791.5],[826],[860.5],[895],[929.5],[964],[998.5],[1033]]
  this.x= random(343,1033);
  this.y= 20;
  this.w=69;
  this.h=69;
  this.speed3=speed1;
  this.speed4=speed2;
  this.update  = function(){
    
    if(this.y < 640){
      this.y += random(this.speed3,this.speed4);
    }
    else if((this.y ==  640) ||(this.y > 640  )){
      document.getElementById("health").innerHTML --;
      
      this.x =(343,1033);
      this.y =20
      
    }
  }
  this.show = function(){
    
    //texture(img1)
    rect(this.x,this.y,this.w,this.h)
    
    
  }
  
    
  
}

function shooter(){
  this.x=722;
  this.y=675;
  this.x2=770;
  this.y2 =710;
  this.x3= 673;
  this.y3=710
  this.bullet =720
  this.xc = this.x
  this.gravity = 0
  this.lift=-10
  this.velo=0
  
  this.update2 = function(){
    
  }
  this.show2 = function(){
    //texture(img2)
    
    triangle(this.x,this.y,this.x2,this.y2,this.x3,this.y3)
  }
  
  
  this.shoot = function(){

    fill(241, 250, 80)
    circle(this.xc,this.bullet,15)
  }

  this.up = function(){
    this.velo += this.lift
    
  }
  this.update3 = function(){
    this.velo += this.gravity;
    this.bullet += this.velo;
    if(this.bullet>720){
      this.bullet = 720
    }
    if(this.bullet <20){
      this.bullet = 720;
      this.velo = 0
      this.xc =this.x
    }
    
  }
  
}


  
  
  
  
  
  
  

