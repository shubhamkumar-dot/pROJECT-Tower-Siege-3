class Block{
    constructor(x,y){
        var options  = {
              isStatic:false
        }
        this.body = Bodies.rectangle(x,y,25,20,options);
        this.width  =20;
        this.height = 20;
        this.Visiblity = 225
        World.add(world,this.body);
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed > 3){
            // World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            // fill("black")
            tint(255,this.Visiblity);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }
        else{
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("green")
        rect(pos.x,pos.y,this.width,this.height);
        pop();
        }

        if(this.Visiblity < 0 && this.Visiblity > -1005){
            score++;
        }

    }
}