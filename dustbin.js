class Dustbin {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;

        this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic: true});
        World.add(world, this.bottomBody);

        this.leftWallBody =  Bodies.rectangle(this.x - this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic: true});
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        World.add(world, this.leftWallBody);

        this.rightWallBody =  Bodies.rectangle(this.x + this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic: true});
        Matter.Body.setAngle(this.rightWallBody, -1 * this.angle);
        World.add(world, this.rightWallBody);
    }

    display(){
        var bottom = this.bottomBody.position;
        var left = this.leftWallBody.position;
        var right = this.rightWallBody. position;

        push();
        translate(left.x, left.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(right.x, right.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1 * this.angle);
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push()
        translate(bottom.x, bottom.y);
        rectMode(CENTER)
        //strokeWeight(4);
        stroke(255)
        angleMode(RADIANS)
        fill(255)
        rect(0,0,this.dustbinWidth, this.wallThickness);
        pop()
    }
}