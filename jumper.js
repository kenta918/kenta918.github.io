

function jumper(){
  this.x=w/2;
  this.y=0;
  this.gravity= 0.5;//for force of gravity
  this.lift = -15;//the opposing force of gravity when I jump
  this.velocity = 0; //speed of gravity force
  
  //I am building  function to display on the screen this is where I put my values of wht the jumper will look like
  this.show = function(){
    fill(255,0,0);
    texture(mario)
    ellipse(this.x,this.y,50,50);
    
  }
  
  //build a function called up that will take the intial velocity and modify by opposing gravity
  this.up = function(){
    //if(jumpcount < 2){
    this.velocity += this.lift;

    //}
    
    
  }
  //this will continuously update the jumper
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9;//air resistance
    //this will prevent the jumoer from leaving the ground
    if(this.y > h){
      this.y=h;
      this.velocity=0;
      //jumpcount = 0;
      location.reload();
      window.alert("game over");
      
    }
    //this will prevent the jumper from leaving the ceiling
    if(this.y < 0){
      this.y =0;
      this.velocity = 0;
    }

  }
  
}