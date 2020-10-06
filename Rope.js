class Rope{
    constructor(pointA, bodyB){
        var options ={
            pointA : pointA,
            bodyB : bodyB,
            length : 350,
            stiffness: 0.2
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.pointA;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}