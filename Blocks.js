class Block {
    constructor(x,y,width,height)
    {
        var options = {
            restitution : 1,
            friction : 2,
        }

        this.block = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world,this.block);
       this.Visiblity - 255;
       
      }

    display()
    {
      if(this.block.speed < 3)
      {
       
      }
      else
      {
        World.remove(world,this.body);
        push();
        this.Visiblity - this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }                                                                                                                                                                                                                                                            
    }
}