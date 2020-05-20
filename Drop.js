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
        this.x=x;
        this.y=y;
    }
    velocity(){
        this.y=this.y+1
        if(this.y>400){
            this.y=Math.round(random(-550,-50))
            this.x=Math.round(random(20,1180))
        }
    }
    display(){
        var colors=["red","blue","green","yellow","white","orange"]
        rectMode(CENTER);
        var rand=Math.round(random(0,5));
        fill(colors[rand]);
        rect(this.x,this.y,this.width,this.height);
    }
}