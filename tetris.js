

function cube(){
  //this.axis = [axis]
  this.x= random(-400,290);
  this.y=-300;
  this.w=69;
  this.h=69;
  this.speed1=1;
  this.speed2=3.5;
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

    if(document.getElementById("score").innerHTML== 15){
        document.getElementById("lvl").innerHTML=2;
        this.speed1 = 2;
        this.speed2=3.75;
        moveRight = 10
        moveLeft =10;
        shooter.lift = -70
 }
    else if(document.getElementById("score").innerHTML == 25){
        document.getElementById("lvl").innerHTML =3;
  
        this.speed1 =2;
        this.speed2=4.25;
        moveRight = 10.25
        moveLeft =10.25
        shooter.lift = -80
    }
    else if(document.getElementById("score").innerHTML ==40){
        document.getElementById("lvl").innerHTML= 4;
  
        this.speed1 =2;
        this.speed2=4.75;
        moveRight = 10.5
        moveLeft =10.5
        shooter.lift = -90
      }
    else if(document.getElementById("score").innerHTML ==55){
      document.getElementById("lvl").innerHTML =5
 
      this.speed1 =2.1;
      this.speed2=5;
      moveRight = 10.5
      moveLeft =10.5
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==60){
      document.getElementById("lvl").innerHTML =6
 
      this.speed1 =2.3;
      this.speed2=5.25;
      moveRight = 10.5
      moveLeft =11
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==75){
      document.getElementById("lvl").innerHTML =7
 
      this.speed1 =2.5;
      this.speed2=5.5;
      moveRight = 10.5
      moveLeft =10.5
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==90){
      document.getElementById("lvl").innerHTML =8
 
      this.speed1 =2.7;
      this.speed2=5.75;
      moveRight = 10.5
      moveLeft =10.5
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==105){
      document.getElementById("lvl").innerHTML =9
 
      this.speed1 =2.9;
      this.speed2=6;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==120){
      document.getElementById("lvl").innerHTML =10
 
      this.speed1 =3;
      this.speed2=6.25;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==135){
      document.getElementById("lvl").innerHTML =11
 
      this.speed1 =3.1;
      this.speed2=6.5;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==150){
      document.getElementById("lvl").innerHTML =12
 
      this.speed1 =3.2;
      this.speed2=6.75
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==165){
      document.getElementById("lvl").innerHTML =13
 
      this.speed1 =3.5;
      this.speed2=7;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
   else if(document.getElementById("score").innerHTML ==180){
      document.getElementById("lvl").innerHTML =14
 
      this.speed1 =3.6;
      this.speed2=7.25;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==195){
      document.getElementById("lvl").innerHTML =15
 
      this.speed1 =3.7;
      this.speed2=7.5;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==210){
      document.getElementById("lvl").innerHTML =16
 
      this.speed1 =3.75;
      this.speed2=7.75;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==225){
      document.getElementById("lvl").innerHTML =17
 
      this.speed1 =3.8;
      this.speed2=8;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==240){
      document.getElementById("lvl").innerHTML =18
 
      this.speed1 =3.9;
      this.speed2=8.25;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==255){
      document.getElementById("lvl").innerHTML =19
 
      this.speed1 =4;
      this.speed2=8.5;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==270){
      document.getElementById("lvl").innerHTML =20
 
      this.speed1 =4.5;
      this.speed2=10;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==300){
      document.getElementById("lvl").innerHTML = 30
 
      this.speed1 =4.6;
      this.speed2=12;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==400){
      document.getElementById("lvl").innerHTML =40
 
      this.speed1 =4.8;
      this.speed2=12.5;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML ==500){
      document.getElementById("lvl").innerHTML =100
 
      this.speed1 =6;
      this.speed2=15;
      moveRight = 10.75
      moveLeft =10.75
      shooter.lift = -200
  
    }
    else if(document.getElementById("score").innerHTML > 502){
      document.getElementById("lvl").innerHTML = 1000
      window.alert("You win!")
      //his.speed1 =2;
      //this.speed2=5;
      //moveRight = 10.75
      //moveLeft =10.75
      //shooter.lift = -200
  
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


  
  
  
  
  
  
  

