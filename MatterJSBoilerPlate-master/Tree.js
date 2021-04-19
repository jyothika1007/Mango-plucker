class Tree{
	constructor(x,y,width,height)
	{
		
		this.image=loadImage("images/tree.png")
		this.body=Bodies.rectangle(x,y,width,height);
		this.width = width;
        this.height = height;

		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER);
			image(this.image, 1200,390,300,400);
			pop()
			
	}

}