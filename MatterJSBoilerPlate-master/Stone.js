class Stone{
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r = r;
        this.image=loadImage("images/stone.png")
        this.body = Bodies.circle(x, y,this.r, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
       
          var pos =this.body.position;
          
          push();
        
          translate(pos.x,pos.y);
          imageMode(CENTER);   
          ellipseMode(RADIUS)     
          image(this.image, 0,0,50,50);
          pop();
        
           
         }
        
       
      
      
}