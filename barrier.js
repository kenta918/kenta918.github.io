

function barrier(){
  ranY = Math.floor(Math.random() * h);
  this.x2= w-20;
  this.y2= ranY;
  this.y3 = random()
  this.gravity2= random(0.5,1);
  this.velocity2 = random(0,2);
  
  this.ret = function(){
    fill(random(0,255),random(0,255),random(0,255))
    
    rect(this.x2,this.y2,200,20)
  }
  this.update2 = function(){
    this.velocity2 += this.gravity2;
    this.x2 -= this.velocity2;
    ranY2 = Math.floor(Math.random() * h);

    this.velocity2 *= 0.9;
    if((this.x2 < 0) || (this.y2 +100 >h)){
      this.y2 = ranY2;
      this.x2= w-20;
      document.getElementById("score").innerHTML ++;
      
    }
    
    
  }
}

