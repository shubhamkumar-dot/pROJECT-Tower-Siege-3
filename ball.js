class Ball{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.8
        }
        this.body = Bodies.circle(x,y,25,options);
        this.radius = 20;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.radius);
        pop();
    }
}