class box {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("square2.png");
      this.visibility = 255;
      World.add(world, this.body);
    }


    score(){
      if(this.visibility<0 && this.visibility>-105){
        score = score+1;
      }
    }

    display(){
      if(this.body.speed < 3){
        var pos =this.body.position;
        push();
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
      }else{
        World.remove(world, this.body);
        var pos =this.body.position;
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
      }
    }
  }