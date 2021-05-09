class ball{
    constructor(x,y,radius){
       var option = {
           isStatic:true,
           density : 0.5,
           friction : 0.2
       } 
       this.body = Bodies.circle(x,y,radius,option)
       this.radius=radius
       World.add(world,this.body)
    }
   display(){
       var pos = this.body.position
       var angle = this.body.angle 
       push();
       translate(pos.x,pos.y)
       rotate(angle)
       ellipseMode(RADIUS)
       ellipse(0,0,20,20);
       pop();
   }

}