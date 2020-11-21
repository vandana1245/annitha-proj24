class Paper {
    constructor(x,y, radius){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        } 
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options)
        World.add(world,this.body);
    }
  
    display() {
    var paperPos = this.body.position;

        push();
        translate(paperPos.x, paperPos.y)
        rectMode(CENTER);
        fill(255, 0 , 255);
        strokeWeight(3);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
  }
  