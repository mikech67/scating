(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/boy1.png", id:"boy1"},
		{src:"images/boy2.png", id:"boy2"},
		{src:"images/boy3.png", id:"boy3"},
		{src:"images/iceRink.jpg", id:"iceRink"},
		{src:"images/man1.png", id:"man1"},
		{src:"images/man2.png", id:"man2"},
		{src:"images/man3.png", id:"man3"},
		{src:"images/w1.png", id:"w1"},
		{src:"images/w4.png", id:"w4"},
		{src:"images/w6.png", id:"w6"}
	]
};



// symbols:



(lib.boy1 = function() {
	this.initialize(img.boy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,264);


(lib.boy2 = function() {
	this.initialize(img.boy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,268);


(lib.boy3 = function() {
	this.initialize(img.boy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,269);


(lib.iceRink = function() {
	this.initialize(img.iceRink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,618,343);


(lib.man1 = function() {
	this.initialize(img.man1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,401);


(lib.man2 = function() {
	this.initialize(img.man2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,401);


(lib.man3 = function() {
	this.initialize(img.man3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,401);


(lib.w1 = function() {
	this.initialize(img.w1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,366);


(lib.w4 = function() {
	this.initialize(img.w4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,401);


(lib.w6 = function() {
	this.initialize(img.w6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,401);


(lib.workArea = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AlfMAAAhK+MBj+AAAMAAABK+g");
	this.shape.setTransform(320,240);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.woman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.012)").s().p("AkdEeQh3h2ABioQgBimB3h3QB2h3CnAAQCnAAB3B3QB3B3AACmQAACoh3B2Qh3B3ingBQinABh2h3g");
	this.shape.setTransform(1,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer 1
	this.instance = new lib.w1();
	this.instance.setTransform(-7.8,-87.7,0.25,0.25);

	this.instance_1 = new lib.w6();
	this.instance_1.setTransform(-43.4,-102.6,0.25,0.25);

	this.instance_2 = new lib.w4();
	this.instance_2.setTransform(-39.4,-96.6,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,17.6).s().p("AidA5QgjgYAUghQAVggBCgYQBCgYBGAAQBHAAAkAYQAjAYgUAgQgWAhhBAYQhCAYhGAAQhIAAgjgYg");
	this.shape_1.setTransform(5.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,29.2).s().p("AkFAuQg8gTAjgbQAigaBugTQBtgUB2AAQB2AAA8AUQA7ATgjAaQgjAbhtATQhuAUh1AAQh3AAg6gUg");
	this.shape_2.setTransform(-6.1,1.7,1,1,0,0,0,0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,24.6).s().p("AjcAxQgygUAdgdQAdgcBcgUQBcgVBjAAQBkAAAyAVQAyAUgdAcQgeAdhcAUQhdAVhiAAQhkAAgxgVg");
	this.shape_3.setTransform(-1.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-87.7,81,99);


(lib.velocityL = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99CC").s().p("AoqAUIAAgnIRUAAIAAAng");
	this.shape.setTransform(5,0.1,0.09,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,10,4.2);


(lib.velocityA = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF99CC").s().p("Ag/hBIB+BBIh+BCg");
	this.shape.setTransform(6.4,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6.6,12.8,13.3);


(lib.vel = function() {
	this.initialize();

	// Layer 1
	this.v = new cjs.Text("", "14px 'Arial'", "#FFFFFF");
	this.v.name = "v";
	this.v.lineHeight = 16;
	this.v.lineWidth = 83;
	this.v.setTransform(51.1,0);

	this.text = new cjs.Text("velocity = ", "14px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(15,0.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("ArgBsIAAjWIXBAAIAADWg");
	this.shape.setTransform(53.7,10.4);

	this.addChild(this.shape,this.text,this.v);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-0.4,157.8,21.6);


(lib.sp = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AA4g4QAYAYAAAgQAAAhgYAXQgXAYghAAQggAAgXgYQgYgXAAghQAAggAYgYQAXgXAgAAQAhAAAXAXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag3A4QgYgXAAghQAAggAYgYQAXgXAgAAQAhAAAXAXQAYAYAAAgQAAAhgYAXQgXAYghAAQggAAgXgYg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.1,-10.1,20.2,20.2);


(lib.slidertrack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzATIAAgmIPmAAIAAAmg");
	this.shape.setTransform(50,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,100,4);


(lib.sliderThumb = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.012)").s().p("Ai+CzIAAllIF9AAIAAFlg");
	this.shape.setTransform(0,-0.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AApBjIhRAAIAAjFIBRAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7E5E9","#9D9F9B"],[0.404,1],0,-8.6,0,9.7).s().p("AgaBhIgJjBIBGAAIgJDBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgoBjIAAjFIBRAAIAADFgAgaBhIA0AAIABAAIAJjAIAAAAIhGAAg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.2,-18,38.4,35.9);


(lib.radiobutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(170,170,170,0.251)","rgba(0,0,0,0.251)"],[0,1],-2.1,-2,0,-2.1,-2,6.4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape.setTransform(8.5,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#AAAAAA","#000000"],[0,1],-2.1,-2,0,-2.1,-2,6.4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape_1.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.labelT = new cjs.Text("RadioButton", "13px 'Times New Roman'");
	this.labelT.name = "labelT";
	this.labelT.lineHeight = 15;
	this.labelT.lineWidth = 181;
	this.labelT.setTransform(22,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.labelT).wait(3));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
	this.shape_2.setTransform(8.5,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#E1E1E1"],[0,1],0,6.4,0,-6.3).s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAaAAATASQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_3.setTransform(8.5,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E1E1E1","#AEAEAE"],[0,1],-5.2,-5.2,0,-5.2,-5.2,15.4).s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZgAgsgsQgTATAAAZQAAAaATASQATATAZAAQAaAAASgTQATgSAAgaQAAgZgTgTQgSgTgaAAQgZAAgTATg");
	this.shape_4.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,208,19.1);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.012)").s().p("AgxHdQg0gYAAhmQAAg2ANg0IALgzIAAgIQAAgWgEgPQgEgRgEgcIgOgRQgMAIgQAAQgeAAgNgXQgHgOAAgNQAAgUAPgOQAGgFAGgDIgSgjQgkhPgchQQAAgqAVgjQAnhCAIgQQAfhKBQgDQAag6AXgEQAPgDAOAeQAfgEAWBTQBXBEAoBeQAkBTAABuQAABYgIAVQgHAUAABdQAABMAHAeQAIAeAAAtQAAAqgDALQgIAagZALIgEAFQgVAUhFAAQh+AAgegNg");
	this.shape.setTransform(-5.2,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer 1
	this.instance = new lib.man1();
	this.instance.setTransform(-51.2,-99.3,0.25,0.25);

	this.instance_1 = new lib.man2();
	this.instance_1.setTransform(-60.2,-97.9,0.25,0.25);

	this.instance_2 = new lib.man3();
	this.instance_2.setTransform(-62.2,-98.9,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,22.8).s().p("AjMA/QgugaAbglQAbgkBWgZQBUgbBcAAQBcAAAuAbQAvAZgbAkQgcAlhVAaQhWAahaAAQhdAAgugag");
	this.shape_1.setTransform(-6.7,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-100.1,98.5,105.9);


(lib.fr = function() {
	this.initialize();

	// Layer 1
	this.f = new cjs.Text("", "14px 'Arial'", "#FFFFFF");
	this.f.name = "f";
	this.f.lineHeight = 16;
	this.f.lineWidth = 61;
	this.f.setTransform(51.1,0);

	this.text = new cjs.Text("force = ", "14px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(25.2,0.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AodBvIAAjcIQ7AAIAADcg");
	this.shape.setTransform(54,10.1);

	this.addChild(this.shape,this.text,this.f);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-1,115.9,22.2);


(lib.forceL = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C0FF").s().p("AoqAUIAAgnIRUAAIAAAng");
	this.shape.setTransform(5,0.1,0.09,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,10,4.2);


(lib.forceA = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C0FF").s().p("Ag/hBIB+BBIh+BCg");
	this.shape.setTransform(6.4,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6.6,12.8,13.3);


(lib.disable_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrlAHlIAAvJMBXLAAAIAAPJg");
	this.shape.setTransform(279,48.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,558,97);


(lib.cord = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiSAJIAAgRIElAAIAAARg");
	this.shape.setTransform(9.5,0,0.034,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiRAJIAAgRIEjAAIAAARg");
	this.shape_1.setTransform(8.5,0,0.034,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiSAJIAAgRIEkAAIAAARg");
	this.shape_2.setTransform(7.5,0,0.034,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiRAJIAAgRIEjAAIAAARg");
	this.shape_3.setTransform(6.5,0,0.034,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AiRAJIAAgRIEjAAIAAARg");
	this.shape_4.setTransform(5.5,0,0.034,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiRAJIAAgRIEjAAIAAARg");
	this.shape_5.setTransform(4.5,0,0.034,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiSAJIAAgRIEkAAIAAARg");
	this.shape_6.setTransform(3.5,0,0.034,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiRAJIAAgRIEjAAIAAARg");
	this.shape_7.setTransform(2.5,0,0.034,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AiRAJIAAgRIEjAAIAAARg");
	this.shape_8.setTransform(1.5,0,0.034,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiSAJIAAgRIElAAIAAARg");
	this.shape_9.setTransform(0.5,0,0.034,1);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,10,2);


(lib.Bplaycopy = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AEUApQgJgKAAgSQAAgQAJgKQAKgKAPAAQAOAAAKAJQAJAKAAAQIAAAEIg2AAQAAAMAGAGQAGAGAKAAQAGAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgKgJgAEfgIQgGAGgBAHIApAAQgBgHgEgEQgGgHgJAAQgJAAgFAFgACcAtQgGgGAAgJQAAgGACgEQADgFAEgCIAIgEIALgCQAPgCAHgCIAAgDQAAgGgDgDQgFgEgJAAQgJAAgEADQgEADgCAHIgMgBQACgIADgFQAEgEAHgDQAHgCAKAAQAJAAAGACQAGACACADQADAEABAFIABAJIAAAQQAAARABAFQAAAFADAEIgNAAQgCgEgBgFQgGAGgHACQgGACgHAAQgMAAgHgFgAC0ARIgLACQgDACgBACQgCADAAADQAAAFAEADQADAEAIAAQAHAAAFgDQAGgDACgGQACgEAAgIIAAgFQgGADgOACgAATAtQgIgGgCgMIAMgCQABAHAFAEQAFAEAIAAQAJAAAEgDQAEgEAAgEQAAgEgEgDIgMgEQgOgDgFgDQgFgCgDgFQgDgEAAgEQAAgEACgFQADgEADgCQADgDAFgBQAFgBAGAAQAIAAAHACQAGACADAFQADAEACAHIgMACQgBgGgEgDQgEgDgHAAQgJAAgDACQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAEACIALADIASAFQAFADADAEQADAEAAAGQAAAHgDAFQgEAFgHADQgGADgJAAQgOAAgHgFgAiHApQgJgKAAgSQAAgQAJgKQAKgKAPAAQAOAAAKAJQAJAKAAAQIAAAEIg2AAQAAAMAGAGQAGAGAKAAQAGAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgKgJgAh8gIQgGAGgBAHIApAAQgBgHgEgEQgGgHgJAAQgJAAgFAFgAjNAtQgIgGgCgMIAMgCQABAHAFAEQAFAEAIAAQAJAAAEgDQAEgEAAgEQAAgEgEgDIgMgEQgOgDgFgDQgFgCgDgFQgDgEAAgEQAAgEACgFQADgEADgCQADgDAFgBQAFgBAGAAQAIAAAHACQAGACADAFQADAEACAHIgMACQgBgGgEgDQgEgDgHAAQgJAAgDACQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAEACIALADIASAFQAFADADAEQADAEAAAGQAAAHgDAFQgEAFgHADQgGADgJAAQgOAAgHgFgAkbApQgJgKAAgSQAAgQAJgKQAKgKAPAAQAOAAAKAJQAJAKAAAQIAAAEIg2AAQAAAMAGAGQAGAGAKAAQAGAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgKgJgAkQgIQgGAGgBAHIApAAQgBgHgEgEQgGgHgJAAQgJAAgFAFgADxAwQgEgDgBgDQgCgDAAgMIAAgnIgJAAIAAgKIAJAAIAAgSIAMgHIAAAZIANAAIAAAKIgNAAIAAAoQAAAFABACIACACIAEABIAGAAIACALIgKABQgGAAgEgCgAg1AwQgEgDgBgDQgCgDAAgMIAAgnIgJAAIAAgKIAJAAIAAgSIAMgHIAAAZIANAAIAAAKIgNAAIAAAoQAAAFABACIACACIAEABIAGAAIACALIgKABQgGAAgEgCgAFdAxIAAhHIALAAIAAALQAEgIAEgCQADgCAFAAQAGAAAGADIgEAMQgEgDgFAAQgEAAgDADQgDACgCAEQgCAFAAAIIAAAmgACBAxIgYglIgJAIIAAAdIgMAAIAAhiIAMAAIAAA3IAdgcIAQAAIgbAZIAeAugAk8AxIgNgVIgJgOIgHgHIgGgCIgIgBIgPAAIAAAtIgNAAIAAhiIAsAAQAOAAAHACQAHADAEAHQAEAHAAAIQAAALgHAHQgHAFgOACIAIAFQAFAFAGAIIARAcgAl2gFIAdAAQAJAAAFgCQAFgCADgEQACgEAAgFQAAgHgFgFQgFgEgLAAIggAAg");
	this.shape.setTransform(51.7,10.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],20.5,-11.5,21,11.5).ss(1,0,0,4).p("ADNhtImZAAAjMBuIGZAA");
	this.shape_1.setTransform(43.5,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],27.9,-11.5,28.1,11.5).ss(1,0,0,4).p("AByhtIjAAAQgeAAAAAeIAACfQAAAeAeAAIDAAA");
	this.shape_2.setTransform(11,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],29.7,-11.5,30.1,11.5).ss(1,0,0,4).p("AgBBuIADAAAAChtIgDAA");
	this.shape_3.setTransform(22.7,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],-9.2,-11.5,-8.8,11.5).ss(1,0,0,4).p("ABNhtIiZAAAhMBuICZAA");
	this.shape_4.setTransform(71.7,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],-27.5,-11.5,-27.3,11.5).ss(1,0,0,4).p("Ah3BuIDMAAQAeAAAAgeIAAifQAAgegeAAIjMAA");
	this.shape_5.setTransform(91.5,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AEXBtIibAAImXAAIgGAAIjDAAQgeAAAAgeIAAieQAAgeAeAAIDDAAIAGAAIGXAAICbAAIDNAAQAeAAAAAeIAACeQAAAegeAAg");
	this.shape_6.setTransform(51.5,11);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,105,24);


(lib.Bplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEUApQgJgKAAgSQAAgQAJgKQAKgKAPAAQAOAAAKAJQAJAKAAAQIAAAEIg2AAQAAAMAGAGQAGAGAKAAQAGAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgKgJgAEfgIQgGAGgBAHIApAAQgBgHgEgEQgGgHgJAAQgJAAgFAFgACcAtQgGgGAAgJQAAgGACgEQADgFAEgCIAIgEIALgCQAPgCAHgCIAAgDQAAgGgDgDQgFgEgJAAQgJAAgEADQgEADgCAHIgMgBQACgIADgFQAEgEAHgDQAHgCAKAAQAJAAAGACQAGACACADQADAEABAFIABAJIAAAQQAAARABAFQAAAFADAEIgNAAQgCgEgBgFQgGAGgHACQgGACgHAAQgMAAgHgFgAC0ARIgLACQgDACgBACQgCADAAADQAAAFAEADQADAEAIAAQAHAAAFgDQAGgDACgGQACgEAAgIIAAgFQgGADgOACgAATAtQgIgGgCgMIAMgCQABAHAFAEQAFAEAIAAQAJAAAEgDQAEgEAAgEQAAgEgEgDIgMgEQgOgDgFgDQgFgCgDgFQgDgEAAgEQAAgEACgFQADgEADgCQADgDAFgBQAFgBAGAAQAIAAAHACQAGACADAFQADAEACAHIgMACQgBgGgEgDQgEgDgHAAQgJAAgDACQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAEACIALADIASAFQAFADADAEQADAEAAAGQAAAHgDAFQgEAFgHADQgGADgJAAQgOAAgHgFgAiHApQgJgKAAgSQAAgQAJgKQAKgKAPAAQAOAAAKAJQAJAKAAAQIAAAEIg2AAQAAAMAGAGQAGAGAKAAQAGAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgKgJgAh8gIQgGAGgBAHIApAAQgBgHgEgEQgGgHgJAAQgJAAgFAFgAjNAtQgIgGgCgMIAMgCQABAHAFAEQAFAEAIAAQAJAAAEgDQAEgEAAgEQAAgEgEgDIgMgEQgOgDgFgDQgFgCgDgFQgDgEAAgEQAAgEACgFQADgEADgCQADgDAFgBQAFgBAGAAQAIAAAHACQAGACADAFQADAEACAHIgMACQgBgGgEgDQgEgDgHAAQgJAAgDACQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAEACIALADIASAFQAFADADAEQADAEAAAGQAAAHgDAFQgEAFgHADQgGADgJAAQgOAAgHgFgAkbApQgJgKAAgSQAAgQAJgKQAKgKAPAAQAOAAAKAJQAJAKAAAQIAAAEIg2AAQAAAMAGAGQAGAGAKAAQAGAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgKgJgAkQgIQgGAGgBAHIApAAQgBgHgEgEQgGgHgJAAQgJAAgFAFgADxAwQgEgDgBgDQgCgDAAgMIAAgnIgJAAIAAgKIAJAAIAAgSIAMgHIAAAZIANAAIAAAKIgNAAIAAAoQAAAFABACIACACIAEABIAGAAIACALIgKABQgGAAgEgCgAg1AwQgEgDgBgDQgCgDAAgMIAAgnIgJAAIAAgKIAJAAIAAgSIAMgHIAAAZIANAAIAAAKIgNAAIAAAoQAAAFABACIACACIAEABIAGAAIACALIgKABQgGAAgEgCgAFdAxIAAhHIALAAIAAALQAEgIAEgCQADgCAFAAQAGAAAGADIgEAMQgEgDgFAAQgEAAgDADQgDACgCAEQgCAFAAAIIAAAmgACBAxIgYglIgJAIIAAAdIgMAAIAAhiIAMAAIAAA3IAdgcIAQAAIgbAZIAeAugAk8AxIgNgVIgJgOIgHgHIgGgCIgIgBIgPAAIAAAtIgNAAIAAhiIAsAAQAOAAAHACQAHADAEAHQAEAHAAAIQAAALgHAHQgHAFgOACIAIAFQAFAFAGAIIARAcgAl2gFIAdAAQAJAAAFgCQAFgCADgEQACgEAAgFQAAgHgFgFQgFgEgLAAIggAAg");
	this.shape.setTransform(51.7,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],20.5,-11.5,21,11.5).ss(1,0,0,4).p("AjMBuIGZAAADNhtImZAA");
	this.shape_1.setTransform(43.5,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],27.9,-11.5,28.1,11.5).ss(1,0,0,4).p("AByhtIjAAAQgeAAAAAeIAACfQAAAeAeAAIDAAA");
	this.shape_2.setTransform(11,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],29.7,-11.5,30.1,11.5).ss(1,0,0,4).p("AAChtIgDAAAgBBuIADAA");
	this.shape_3.setTransform(22.7,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],-9.2,-11.5,-8.8,11.5).ss(1,0,0,4).p("AhMBuICZAAABNhtIiZAA");
	this.shape_4.setTransform(71.7,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#C0C2C4","#999D9F"],[0,0.992],-27.5,-11.5,-27.3,11.5).ss(1,0,0,4).p("Ah3BuIDMAAQAeAAAAgeIAAifQAAgegeAAIjMAA");
	this.shape_5.setTransform(91.5,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EBEBEB","#FBFBFB"],[0,0.992],-12.5,9,-12.5,-9).s().p("AEXBtIibAAImXAAIgGAAIjDAAQgeAAAAgeIAAieQAAgeAeAAIDDAAIAGAAIGXAAICbAAIDNAAQAeAAAAAeIAACeQAAAegeAAg");
	this.shape_6.setTransform(51.5,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-1.4,-11.5,-0.9,11.5).ss(1,0,0,4).p("AimBuIFNAAACnhtIlNAA");
	this.shape_7.setTransform(54.8,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],27.7,-11.5,27.9,11.5).ss(1,0,0,4).p("AB1htIjGAAQgeAAAAAeIAACfQAAAeAeAAIDGAA");
	this.shape_8.setTransform(11.2,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],17.6,-11.5,17.9,11.5).ss(1,0,0,4).p("ABLhtIiVAAAhKBuICVAA");
	this.shape_9.setTransform(30.5,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-16.1,-11.5,-15.8,11.5).ss(1,0,0,4).p("AgaBuIA1AAAAbhtIg1AA");
	this.shape_10.setTransform(74.2,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-26.3,-11.5,-26.1,11.5).ss(1,0,0,4).p("AiDBuIDkAAQAeAAAAgeIAAifQAAgegeAAIjkAA");
	this.shape_11.setTransform(90.2,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EBEBEB","#FBFBFB"],[0,0.992],-12.5,9,-12.5,-9).s().p("AD+BtIg3AAIlNAAIiWAAIjIAAQgeAAAAgeIAAieQAAgeAeAAIDIAAICWAAIFNAAIA3AAIDmAAQAeAAAAAeIAACeQAAAegeAAg");
	this.shape_12.setTransform(51.5,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],28.2,-11.5,28.7,11.5).ss(1,0,0,4).p("AjYBuIGxAAADZhtImxAA");
	this.shape_13.setTransform(43.3,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],40.2,-11.5,40.6,11.5).ss(1,0,0,4).p("AgVBuIArAAAAWhtIgrAA");
	this.shape_14.setTransform(19.2,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],30.7,-11.5,30.9,11.5).ss(1,0,0,4).p("ABXhtIiKAAQgeAAAAAeIAACfQAAAeAeAAICKAA");
	this.shape_15.setTransform(8.2,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],1.4,-11.5,1.8,11.5).ss(1,0,0,4).p("AgcBuIA5AAAAdhtIg5AA");
	this.shape_16.setTransform(68,11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#C4886D","#9E6100"],[0,0.992],-23.3,-11.5,-23.1,11.5).ss(1,0,0,4).p("AihBuIEgAAQAeAAAAgeIAAifQAAgegeAAIkgAA");
	this.shape_17.setTransform(87.2,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#EFB8A0","#FEF1EF"],[0,0.992],20.2,9,20.2,-9).s().p("ADCBtIg8AAImwAAIguAAIiMAAQgeAAAAgeIAAieQAAgeAeAAICMAAIAuAAIGwAAIA8AAIEiAAQAeAAAAAeIAACeQAAAegeAAg");
	this.shape_18.setTransform(51.5,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,105,24);


(lib.boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.012)").s().p("AgUE3IgSgHQgVAMghAAQgnAAgcghQgZgcABggQAAglAGgSQARgfARgpIAcg5IgZgnQgwhRgBgWQABgsAsgoIAdgaQAOgMAAgKIgHgtQAAgWAPgVQAOgTAMAUQAcAEAVAXIACAFQAFgQANgKQAWgNAdAFQAfAFAUAXQAXAZAAAnQAAAYgJASQgIASgBAHQAAATApAmQAoAlgBATQABAPgDAFQgHAPgaAAQgrAAg3gwIgOAnQgUA1AAAbQAABWAwBSIAgAzQAPAXAAAIQAAANgFAHQgJAJgXAAQgoAAg8gWgAAMi6IAAgBIgBAAIABABg");
	this.shape.setTransform(3.3,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer 1
	this.instance = new lib.boy1();
	this.instance.setTransform(-11.7,-63.8,0.25,0.25);

	this.instance_1 = new lib.boy2();
	this.instance_1.setTransform(-17.5,-63.9,0.25,0.25);

	this.instance_2 = new lib.boy3();
	this.instance_2.setTransform(-20.7,-63.6,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,13.6).s().p("Ah5AsQgbgSAQgaQAQgYAzgTQAzgSA1AAQA3AAAcASQAbATgQAYQgQAagzASQgzASg1AAQg4AAgbgSg");
	this.shape_1.setTransform(-1.3,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-63.8,38,72.5);


(lib.accL = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA99").s().p("AoqAUIAAgnIRUAAIAAAng");
	this.shape.setTransform(5,0.1,0.09,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,10,4.2);


(lib.acceleration = function() {
	this.initialize();

	// Layer 1
	this.a = new cjs.Text("", "14px 'Arial'", "#FFFFFF");
	this.a.name = "a";
	this.a.lineHeight = 16;
	this.a.lineWidth = 111;
	this.a.setTransform(51.1,0);

	this.text = new cjs.Text("acceleration = ", "14px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(1.2,0.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("At2BsIAAjWIbtAAIAADWg");
	this.shape.setTransform(38.7,10.4);

	this.addChild(this.shape,this.text,this.a);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-0.4,216,21.6);


(lib.accA = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCA99").s().p("Ag/hBIB+BBIh+BCg");
	this.shape.setTransform(6.4,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6.6,12.8,13.3);


(lib.MainSlider = function() {
	this.initialize();

	// Layer 1
	this.val = new cjs.Text("188.65", "bold 12px 'Times New Roman'");
	this.val.name = "val";
	this.val.textAlign = "center";
	this.val.lineHeight = 14;
	this.val.lineWidth = 44;
	this.val.setTransform(22.9,3);

	this.sliderThumb = new lib.sliderThumb();
	this.sliderThumb.setTransform(163.6,10.4);

	this.slidertrack = new lib.slidertrack();
	this.slidertrack.setTransform(78,10.8,1.85,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjuhZIHdAAIAACzIndAAg");
	this.shape.setTransform(23.9,9);

	this.addChild(this.shape,this.slidertrack,this.sliderThumb,this.val);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-7.6,264,35.9);


(lib.RbGroupMain = function() {
	this.initialize();

	// Layer 1
	this.RadBut_3 = new lib.radiobutton();
	this.RadBut_3.setTransform(61.1,57.6,1,1,0,0,0,61.1,8.6);

	this.RadBut_2 = new lib.radiobutton();
	this.RadBut_2.setTransform(61.1,33.6,1,1,0,0,0,61.1,8.6);

	this.RadBut_1 = new lib.radiobutton();
	this.RadBut_1.setTransform(61.1,9.2,1,1,0,0,0,61.1,8.6);

	this.addChild(this.RadBut_1,this.RadBut_2,this.RadBut_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,0,207.5,66.8);


// stage content:
(lib.sim_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.disable_mc = new lib.disable_mc();
	this.disable_mc.setTransform(323,409.5,1,1,0,0,0,279,48.5);
	this.disable_mc.alpha = 0.5;
	this.disable_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.disable_mc).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.vel = new lib.vel();
	this.vel.setTransform(332.8,124.5,1,1,0,0,0,58.3,10.6);

	this.acceleration = new lib.acceleration();
	this.acceleration.setTransform(344.8,86.1,1,1,0,0,0,58.3,10.6);

	this.fr = new lib.fr();
	this.fr.setTransform(322.2,42.5,1,1,0,0,0,58.3,10.6);

	this.accA = new lib.accA();
	this.accA.setTransform(333.8,103.9);

	this.accL = new lib.accL();
	this.accL.setTransform(323.8,103.9);

	this.velocityA = new lib.velocityA();
	this.velocityA.setTransform(333.8,143.4);

	this.velocityL = new lib.velocityL();
	this.velocityL.setTransform(323.8,143.4);

	this.forceA = new lib.forceA();
	this.forceA.setTransform(333,60.2);

	this.forceL = new lib.forceL();
	this.forceL.setTransform(323,60.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.forceL},{t:this.forceA},{t:this.velocityL},{t:this.velocityA},{t:this.accL},{t:this.accA},{t:this.fr},{t:this.acceleration},{t:this.vel}]},1).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAoHAEEQgJgLAAgYQAAgPADgKQAEgJAFgFQAHgFAJAAQAHAAAFADQAFADADAFQAEAFACAIQACAHAAANQAAAPgDAJQgDAKgGAFQgHAFgJAAQgMAAgHgJgEAoPADEQgGAIAAAVQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgHAAgVQAAgVgFgHQgFgHgHAAQgHAAgEAGgEAnEAEEQgJgLAAgYQABgPADgKQADgJAGgFQAGgFAKAAQAGAAAGADQAFADADAFQAEAFABAIQADAHAAANQAAAPgEAJQgDAKgGAFQgGAFgJAAQgNAAgHgJgEAnMADEQgGAIABAVQAAAVAEAHQAFAHAIAAQAHAAAFgHQAEgHAAgVQAAgVgEgHQgFgHgHAAQgIAAgEAGgAGkEEQgJgLAAgYQAAgPAEgKQADgJAGgFQAGgFAJAAQAHAAAGADQAFADADAFQADAFACAIQACAHABANQgBAPgDAJQgDAKgGAFQgGAFgKAAQgMAAgHgJgAGsDEQgGAIABAVQAAAVAEAHQAFAHAHAAQAIAAAFgHQAEgHAAgVQAAgVgEgHQgFgHgIAAQgHAAgEAGgEAmWAELIAAhDQgEAEgGADIgLAGIAAgKQAJgFAHgGQAGgFADgGIAGAAIAABWgAFYELQgBgEACgDQACgGAFgFQAFgGAIgIQAOgLAFgHQAGgGAAgGQgBgHgEgEQgEgEgIAAQgHAAgFAEQgEAFgBAIIgLgBQACgMAHgHQAHgGAMAAQANAAAHAHQAHAHAAAKQAAAFgCAFQgCAFgFAFQgFAGgLAKIgMAKIgFAGIAqAAIAAAKgAKxAbQASgbAAgcQAAgLgCgLQgCgIgFgJIgJgRIAIAAQALAPAFAOQAFANgBAOQAAAQgFANQgHAOgIAMgAJ0AWQgHgGABgKIAKACQABAFACACQAEADAHAAQAHAAAFgDQADgDABgFIABgMQgGAGgLAAQgNAAgHgHQgGgJgBgNQABgJADgIQADgHAGgEQAGgEAIAAQAMAAAGAJIAAgIIAKAAIAAA2QAAAMgDAGQgDAGgGAEQgGAEgKAAQgLAAgHgFgAJ7guQgFAGAAALQAAAMAFAGQAFAGAIAAQAHAAAFgGQAEgGAAgMQAAgLgEgGQgGgGgHAAQgHAAgFAGgAIfAbQgIgMgGgOQgGgNAAgQQAAgOAEgNQAGgOAKgPIAIAAIgJARQgEAIgCAJQgDALABALQAAAcARAbgAGyAAQgGgFgCgKIAKgCQABAGAEAEQAEADAHAAQAHAAAEgDQADgDAAgEQAAgDgDgDIgKgDIgRgFQgEgCgCgEQgCgEgBgEQAAgFACgDIAGgGIAHgDIAJgBQAHAAAFACQAGACADADQACAEABAGIgLABQAAgEgDgDQgDgDgHAAQgHAAgDADQgDACgBADIACAEQAAABABAAQAAAAAAABQABAAABAAQAAAAABABIAKADIAPAEQAEACADAEQADAEAAAFQAAAFgEAFQgDAFgGAAQgGADgGAAQgNAAgGgDgAF2AAQgHgFgCgKIALgCQABAGAEAEQAEADAHAAQAHAAAEgDQADgDABgEQAAgDgEgDIgLgDIgQgFQgEgCgCgEQgDgEAAgEQABgFACgDIAEgGIAIgDIAIgBQAIAAAFACQAGACACADQADAEABAGIgKABQgBgEgEgDQgDgDgGAAQgHAAgDADQgDACAAADIABAEQAAABABAAQAAAAAAABQABAAABAAQAAAAABABIAJADIAQAEQAFACACAEQACAEAAAFQAAAFgCAFQgEAFgFAAQgHADgHAAQgMAAgGgDgAEyAAQgGgFAAgIQAAgFACgDQACgEAEgDIAHgDIAKgCQAMgBAGgCIAAgDQAAgGgDgDQgEgEgIAAQgHAAgEADQgDADgCAGIgLgBQACgHAEgEQACgEAHgCQAGgCAHAAQAIAAAGABQAFACACADQACADACAEIAAAKIAAAOIAAATQABAEACABIgLAAIgCgFQgGAEgFABQgGACgGAAQgKAAgFgDgAFGgYQgGABgDABQgDABgCADQgBACAAADQAAAEAEADQACACAHAAQAFAAAGgCQAEgDADgFQABgDAAgHIAAgEIgRAEgAByAAQgHgFgCgKIALgCQABAGAEAEQAEADAHAAQAHAAAEgDQADgDABgEQAAgDgDgDIgMgDIgPgFQgFgCgCgEQgCgEAAgEQAAgFACgDIAEgGIAHgDIAJgBQAIAAAGACQAFACACADQADAEABAGIgKABQgBgEgEgDQgDgDgGAAQgHAAgDADQgEACABADIABAEQAAABABAAQAAAAAAABQABAAABAAQAAAAABABIAJADIAQAEQAEACADAEQADAEgBAFQAAAFgCAFQgEAFgFAAQgHADgHAAQgMAAgGgD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ggFgC4QgFgFgEgHQgDgHAAgKQAAgJACgIQAEgHAGgEQAGgEAIAAQAGAAAEACQAFACACAEIAAgfIALAAIAABWIgKAAIAAgIQgGAKgLAAQgIAAgHgEgEggCgDnQgEAGgBAMQAAAMAGAGQAEAGAHAAQAHAAAFgGQAFgFAAgMQAAgNgFgGQgFgGgHAAQgHAAgFAGgEgh0gC9QgIgIAAgQQAAgRAJgIQAJgHALAAQANAAAIAIQAJAIAAAPQgBAMgEAHQgDAHgHAEQgHAEgIAAQgNAAgIgJgEghsgDnQgFAGAAAMQAAAMAFAGQAGAGAHAAQAIAAAFgGQAGgGgBgMQABgMgGgGQgFgGgIAAQgHAAgGAGgEgiwgC9QgHgIgBgQQAAgKAEgHQAEgIAGgEQAHgDAIAAQAKAAAGAFQAHAFACAJIgLACQgBgGgDgEQgFgDgEAAQgIAAgGAGQgEAGAAAMQAAANAEAFQAFAGAIAAQAGAAAEgEQAFgEAAgIIALACQgCALgHAGQgHAGgKAAQgNAAgIgJgEgkNgC9QgIgIAAgQQAAgKADgHQAEgIAHgEQAHgDAHAAQAKAAAHAFQAGAFACAJIgKACQgCgGgDgEQgEgDgFAAQgIAAgFAGQgFAGAAAMQAAANAFAFQAFAGAHAAQAHAAADgEQAFgEABgIIAKACQgBALgIAGQgGAGgLAAQgNAAgHgJgEgmFgC5QgHgFgCgKIALgCQABAGADAEQAFADAHAAQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgDIgQgFQgFgCgCgEQgCgEAAgEQAAgFACgDIAFgGIAHgDIAJgBQAHAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgHAAQgGAAgEADQgDACAAADIABAEIAFADIAJADIAPAEQAFACACAEQADAEAAAFQAAAFgDAFQgEAFgFACQgGADgHAAQgNAAgFgFgEgnKgC5QgGgFAAgIQAAgFADgDQABgEAEgDIAHgDIAKgCQAMgBAGgCIAAgDQAAgGgCgDQgFgEgIAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAIAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAAOIABATQABAEACADIgMAAIgCgHQgGAFgEACQgGACgGAAQgKAAgGgFgEgm2gDRQgGABgDABQgDABgBADQgBACAAADQAAAEADADQADACAGAAQAGAAAFgCQAEgDADgFQACgDgBgHIAAgEIgRAEgA15i3IgFgEQgBgDAAgKIAAgkIgIAAIAAgIIAIAAIAAgPIAKgHIAAAWIALAAIAAAIIgLAAIAAAlIABAFIABACIAFABIAEAAIACAJIgIABQgGAAgDgCgA6Li3IgEgEQgBgDAAgKIAAgkIgIAAIAAgIIAIAAIAAgPIALgHIAAAWIAKAAIAAAIIgKAAIAAAlIAAAFIABACIAFABIAEAAIABAJIgIABQgFAAgEgCgEglGgC3IgFgEQgBgDAAgKIAAgkIgIAAIAAgIIAIAAIAAgPIALgHIAAAWIAKAAIAAAIIgKAAIAAAlIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgDgCgA04i2IAAgnQAAgIgDgEQgDgDgGAAQgGAAgDACQgFADgBAEQgCAEAAAHIAAAiIgKAAIAAhWIAKAAIAAAfQAIgIALAAQAGAAAFACQAFADADAFQACAFAAAJIAAAngA3ei2IAAgmQAAgGgCgDQgBgDgCgCQgEgCgEAAQgHAAgEAEQgGAEAAAMIAAAiIgKAAIAAg+IAJAAIAAAJQAIgKAMAAQAGAAAEACQAGACABADQADADABAFIABAKIAAAmgA5xi2IAAg+IAKAAIAAAJQAEgGACgCQADgCAFAAQAEAAAGADIgDAKQgFgCgDAAQgEAAgDACQgCACgBADQgCAGAAAHIAAAggA8Li2IAAhWIALAAIAABWgA8li2IAAhWIAKAAIAABWgEgg1gC2IAAg+IAJAAIAAAJQADgGAEgCQADgCADAAQAGAAAFADIgEAKQgDgCgFAAQgDAAgCACQgDACgCADQgBAGAAAHIAAAggEgksgC2IAAg+IALAAIAAA+gEgnngC2IAAhWIALAAIAABWgEgo1gC2IAAhWIA+AAIAAAKIgzAAIAAAbIAwAAIAAAKIgwAAIAAAdIA1AAIAAAKgEgksgEAIAAgMIALAAIAAAMg");
	this.shape.setTransform(329.9,393.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer 5
	this.rbGroup = new lib.RbGroupMain();
	this.rbGroup.setTransform(128.6,408.4,1,1,0,0,0,61.1,21.4);

	this.val = new cjs.Text("188.65", "bold 12px 'Times New Roman'");
	this.val.name = "val";
	this.val.textAlign = "center";
	this.val.lineHeight = 14;
	this.val.lineWidth = 44;
	this.val.setTransform(327.5,409.7);

	this.sliderThumb = new lib.sliderThumb();
	this.sliderThumb.setTransform(468.3,417);

	this.slidertrack = new lib.slidertrack();
	this.slidertrack.setTransform(382.7,417.5,1.85,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AjthZIHcAAIAACzIncAAg");
	this.shape_1.setTransform(328.6,415.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.slidertrack},{t:this.sliderThumb},{t:this.val},{t:this.rbGroup}]},1).wait(1));

	// Layer 3
	this.bPlayDis = new lib.Bplaycopy();
	this.bPlayDis.setTransform(541.5,319.5,1,1,0,0,0,39,11);
	this.bPlayDis._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bPlayDis).wait(1).to({_off:false},0).wait(1));

	// Layer 6
	this.sp = new lib.sp();
	this.sp.setTransform(321.3,191.5);

	this.bPlay = new lib.Bplay();
	this.bPlay.setTransform(541.5,319.5,1,1,0,0,0,39,11);
	new cjs.ButtonHelper(this.bPlay, 0, 1, 2, false, new lib.Bplay(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(2,1,1).p("EAu8gW3QgFi+jDAAMhXnAAAQjIAAAADIMAAAAtbQAADIDIAAMBXnAAAQDIAAAAjIMAAAgtbQAAgFAAgFg");
	this.shape_2.setTransform(320,179.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(2,1,1).p("AGGIqMAlnAAAQDIAAAAjIIAArDQAAjIjIAAMglnAAAAFxopMgxdAAAQjIAAAADIIAALDQAADIDIAAMAxdAAA");
	this.shape_3.setTransform(320.8,408.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.bPlay},{t:this.sp}]},1).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgrzAZ2QjIAAAAjIMAAAgtbQAAjIDIAAMBXnAAAQDDAAAFC+IAAAKMAAAAtbQAADIjIAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:319.4,y:178.6}).wait(1));

	// Layer 8
	this.m1 = new lib.boy();
	this.m1.setTransform(319.6,256.6,1,1,0,0,0,0,3.8);
	this.m1._off = true;

	this.m1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1).to({_off:false},0).wait(1));

	// Layer 9
	this.m2 = new lib.woman();
	this.m2.setTransform(312.6,256.3);
	this.m2._off = true;

	this.m2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.m2).wait(1).to({_off:false},0).wait(1));

	// Layer 10
	this.m3 = new lib.man();
	this.m3.setTransform(324.5,256.6,1,1,0,0,0,0,-3.1);
	this.m3._off = true;

	this.m3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.m3).wait(1).to({_off:false},0).wait(1));

	// Layer 11
	this.cord = new lib.cord();
	this.cord.setTransform(321.6,191.7);
	this.cord._off = true;

	this.cord.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.cord).wait(1).to({_off:false},0).wait(1));

	// Layer 12
	this.instance = new lib.iceRink();
	this.instance.setTransform(13,9);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 20
	this.workArea = new lib.workArea();
	this.workArea.setTransform(300.4,165.5,1,1,0,0,0,300.4,165.5);
	this.workArea._off = true;

	this.timeline.addTween(cjs.Tween.get(this.workArea).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;