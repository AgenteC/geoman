class Circle{
constructor(x,y){
var options = {
'restitution':0.3
'friction':5
'density':1
}
this.body = Bodies.ellipse(x,y,100,75,options)
this.width = 100
this.height = 40
World.add(world,this.body)
}
display()
fill('blue')
ellipse(0,0,this.r,this.r);
}