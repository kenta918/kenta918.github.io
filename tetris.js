

function cube(){
  //this.axis = [axis]
  this.x= random(-400,290);
  this.y=-300;
  this.w=69;
  this.h=69;
  this.speed1=1;
  this.speed2=4;
  this.update  = function(){
    this.y += random(this.speed1,this.speed2);
    if(this.y > 241){
      this.x =(random(-400,290));
      this.y =-300;
      document.getElementById("health").innerHTML --;
    }
    if(document.getElementById("health").innerHTML == 0){
       location.reload();
        window.alert("you died");
      storeItem('sco',document.getElementById("score").innerHTML);
      storeItem('lv',document.getElementById("lvl").innerHTML);
      //highScore = getItem('sco');
      document.getElementById("past").innerHTML = getItem('sco')
      document.getElementById("past").innerHMTL = getitem('lv')
      window.alert()
}

    if(document.getElementById("score").innerHTML== 20){
        document.getElementById("lvl").innerHTML=2;
        this.speed1 = 2;
        this.speed2=5;
        moveRight = 10
        moveLeft =10;
        shooter.lift = -70
 }
    else if(document.getElementById("score").innerHTML == 40){
        document.getElementById("lvl").innerHTML =3;
  
        this.speed1 =2;
        this.speed2=5.8;
        moveRight = 10.5
        moveLeft =10.5
        shooter.lift = -80
    }
    else if(document.getElementById("score").innerHTML ==60){
        document.getElementById("lvl").innerHTML= 4;
  
        this.speed1 =2;
        this.speed2=6.8;
        moveRight = 11
        moveLeft =11
        shooter.lift = -90
      }
    else if(document.getElementById("score").innerHTML ==80){
      document.getElementById("lvl").innerHTML =5
 
      this.speed1 =2;
      this.speed2=73;
      moveRight = 11.5
      moveLeft =11.5
      shooter.lift = -200
  
    }
    
  }
  this.show = function(){
    
    fill(255,0,0);
    texture(img1)
    rect(this.x,this.y,this.w,this.h)
    
    
  }
  
    
  
}

function shooter(){
  this.x=0;
  this.y=250;
  this.x2=50;
  this.y2 =320;
  this.x3= -50;
  this.y3=320
  this.bullet =700
  this.xc = this.x
  this.gravity = 0
  this.lift=-60
  this.velo=0
  
  this.update2 = function(){
    
  }
  this.show2 = function(){
    fill(255,0,0)
    texture(img2)
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
    if(this.bullet>320){
      this.bullet = 320
    }
    if(this.bullet <-300){
      this.bullet = 320;
      this.velo = 0
      this.xc =this.x
    }
    
  }
  
}


  
  
  
  
  
  
  

