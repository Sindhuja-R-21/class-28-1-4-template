class Cannon{
  //Properties
  constructor(x,y,w,h,angle){
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.angle=angle;
  }

  //function
  display(){
      fill("#676e6a");
      push();
      translate(this.x,this.y);
      rotate(this.angle); //45
      rect(-10,-20,this.w,this.h);
      pop();

      arc(this.x-30,this.y+90,140,200,PI,PI*2);
      noFill();
  }


}