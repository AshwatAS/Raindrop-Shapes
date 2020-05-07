class Drop{
    constructor(x,y,width,height){
        var options={
            density:1,
            restitution:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        var colors=["red","blue","green","yellow","white","orange"]
        rectMode(CENTER);
        var rand=Math.round(random(0,5));
        fill(colors[rand]);
        rect(pos.x,pos.y,this.width,this.height);
    }
}