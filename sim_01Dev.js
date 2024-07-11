//this part the general for all files_______________________

var canvas, stage, exportRoot;



function init() {
	canvas = document.getElementById("canvas");
	images = images||{};
	
	//__Preloading_______________________________________	
	stage = new createjs.Stage(canvas);
	 var preloader_text = new createjs.Text("Loading", "20px 'MS Reference Sans Serif'", "#6E8AB6");
	preloader_text.name = "preloader_text";
	preloader_text.textAlign = "center";
	preloader_text.lineHeight = 22;
	preloader_text.lineWidth = 167;
	preloader_text.setTransform(268,227);  
  stage.addChild(preloader_text);
  stage.update();
	
	//__Preloading_______________________________________
	
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
exportRoot = new lib.sim_01();

	stage = new createjs.Stage(canvas);
	//here we change the name for the current

	var touchDev;
	if (BrowserDetect.version != touchDevice) {
		touchDev = false;
		stage.enableMouseOver();
	} else {
		touchDev = true;

	}

	var touchDevice = (window.hasOwnProperty('ontouchstart'));

	if (BrowserDetect.browser == 'Explorer' && BrowserDetect.version == 10 && !touchDevice) {
	} else {
		createjs.Touch.enable(stage, false, true);
	}

	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	//______________________________________________________________________
		//______________________________________________________________________
		
		exportRoot.gotoAndStop(1);
var m1 = exportRoot.m1;
var m2 = exportRoot.m2;
var m3 = exportRoot.m3;
var sp = exportRoot.sp;
var cord = exportRoot.cord;
var slider_val = exportRoot.val;
var sliderThumb = exportRoot.sliderThumb; 
var slidertrack = exportRoot.slidertrack; 
var forceL = exportRoot.forceL;
var forceA = exportRoot.forceA;
var fr = exportRoot.fr;
var acceleration = exportRoot.acceleration;
var vel = exportRoot.vel;
var velocityL = exportRoot.velocityL;
var velocityA = exportRoot.velocityA;
var accL = exportRoot.accL;
var accA = exportRoot.accA;
var bPlay = exportRoot.bPlay;
var disable_mc = exportRoot.disable_mc;

var rbGroup = exportRoot.rbGroup;
var bPlayDis = exportRoot.bPlayDis;


m1.visible = false;
m2.visible = true;
m3.visible = false;
sp.visible = false;
cord.visible = false;

forceL.visible = false;
forceA.visible = false;
fr.visible = false;
acceleration.visible = false;
vel.visible = false;
velocityL.visible = false;
velocityA.visible = false;
accL.visible = false;
accA.visible = false;

var sign1;
var sign2;
var active = false;
var motion = false;
var scater= m2;
var cordX0;
var cordY0;
var forceK = 0.005;
var force;
var m1X0 = m1.x;
var m2X0 = m2.x;
var m3X0 = m3.x;
var scaterX0 = m2.x;
var scaterXcurrent = m2.x;
var scaleIncrement =0.01;

var scaterHeight1 = 73;
var scaterHeight2 = 100;
var scaterHeight3 = 106;

var currTime = 0;
var a = 0;
var v = 0;
var stopMove = false;
scater.scaleY = 1 +(20-40)/300;
scater.scaleX = 1 +(20-40)/300;
slider_val.text = "50";
var val = 50;
disable_mc.visible = false;

var cordWidth;

//_____________________________________________
rbGroup.RadBut_1.gotoAndStop(2);

//_____________________________________________


//Rb_______________________________________________________
             rbGroup.RadBut_1.labelT.text = "Small: 0 - 1 newtons";
			 rbGroup.RadBut_2.labelT.text = "Medium: 0 - 5 newtons";
			 rbGroup.RadBut_3.labelT.text = "Large: 0 - 25 newtons";
			 
		var buttonsNumber = 3; 
		var rbValue;

			 for(var i = 1; i<= buttonsNumber; i++){
			 	rbGroup["RadBut_" + i].name = "RadBut_" + i;
				 rbGroup["RadBut_" + i].addEventListener("click", rbOn); 
	         }

	  function rbOn(event) {
	  	event.nativeEvent.preventDefault();
             for(var i = 1; i<= buttonsNumber; i++){
				  rbGroup["RadBut_" + i].gotoAndStop (0); 
			     }
				 
				 event.currentTarget.gotoAndStop(2);				  
				rbValue =  event.currentTarget.name.substr(7,8);

				
if (rbValue =="1") {
		forceK=0.005;

	}
	if (rbValue =="2") {
		
		forceK=0.025;
	}
	if (rbValue=="3") {
		forceK=0.125;
	}
			
}
//_________________________________________________________________

bPlay.addEventListener("click", clickStop);

function clickStop(event) {
	event.nativeEvent.preventDefault();
     scater.removeEventListener("tick", handleTick);
    a=0;
	v=0;
    motion = false;
	active = false;
	
	//scater.addEventListener("mousedown", mouseDownHandler);
	stopMove = true;
	scater.x=312.6;
	//rm1.enabled = true;
	//rm2.enabled = true;
	//rm3.enabled = true;
	//massStepper.enabled = true;
	disable_mc.visible = false;
	bPlayDis.visible = true;
	
  scater.gotoAndStop(0);
	forceL.visible = false;
forceA.visible = false;
fr.visible = false;
acceleration.visible = false;
vel.visible = false;
velocityL.visible = false;
velocityA.visible = false;
accL.visible = false;
accA.visible = false;
stage.update();
}

scater.addEventListener("mousedown", mouseDownHandler);

function mouseDownHandler(event) {
	event.nativeEvent.preventDefault();
    scater.addEventListener("tick", handleTick);
	currTime = 0;
	cordX0 = scater.x;
	 console.log(val);
	if (val>=20 && val<40) {
	     cordY0 = scater.y - scaterHeight1/2-10;
    }
  if (val>=40 && val<70) {
	     cordY0 = scater.y - scaterHeight2/2-10;
   
    }
     if (val>=70 && val<=100) {
	     cordY0 = scater.y - scaterHeight3/2-10;
      
    }   
    
	

	sp.x = cordX0;
	sp.y = cordY0;
	bPlayDis.visible = false;
	sp.visible = true;
	active = true;
	disable_mc.visible = true;
    motion = true;
stage.update();
 }

scater.addEventListener("pressup", mouseUpHandler);


function mouseUpHandler(event) {
	event.nativeEvent.preventDefault();
	sp.visible = false;
	cord.visible = false;
	scater.mouseEnabled = true;
	motion = false;
	 
 stage.update();
}

function handleTick(event) {
	
    	sp.x = stage.mouseX;
 
	arrows();
	if(motion){
		

	disable_mc.visible = true;
 //________________________________________   
   cord.visible = true;
    scaterXcurrent = scater.x;
 
	
    a = forceK*(sp.x-scater.x)/Number(val);
	  v = v + a; 
	if(a>=0){
	scater.gotoAndStop(1); 
	}else{
	scater.gotoAndStop(2);
	}
	scater.x = scaterXcurrent + v/5;
	
	}else{ 
		scaterXcurrent = scater.x;
	scater.x = scaterXcurrent + v/5;
	
	cord.visible = false;
	}
   cord.x = scater.x;
		if (event.currentTarget.x >scater.x) {
			cord.scaleX =(sp.x-scater.x)/10;
			cord.rotation = 0;
        
		} else {
     cord.rotation = 180;
			cord.scaleX =-(sp.x-scater.x)/10;
			
		}
		
	if (active) {

       
		cord.visible = true;
		cord.y = sp.y;
		
		active = false;
	}
 cordWidth = Math.abs(sp.x-scater.x);

 }


function arrows() {
	if(motion){
	forceL.visible = true;
	forceA.visible = true;
	fr.visible = true;
	fr.f.text = my_round(forceK*cordWidth,2) + " N";
	forceL.scaleX = forceK*cordWidth/10;
	if (stage.mouseX >scater.x) {
		forceL.rotation = 0;
		forceA.rotation = 0;
		forceA.x = forceL.x+forceL.scaleX*10;
	} else {

		forceL.rotation = 180;
		forceA.rotation = 180;
		forceA.x = forceL.x-forceL.scaleX*10;
	  }
	}else{
	  forceL.visible = false;
	forceA.visible = false;
	fr.visible = false;
	}
	//-------------------------
	if(motion){
	acceleration.visible = true;
	acceleration.a.text = Math.abs(my_round(a,3)) + " m/s²";
	accL.visible = true;
	accA.visible = true;
	accL.scaleX = Math.abs(a*20)/10;
	
	if (stage.mouseX>scater.x) {
		accL.rotation = 0;
		accA.rotation = 0;
		accA.x = accL.x+accL.scaleX*10;
	} else {
		accL.rotation = 180;
		accA.rotation = 180;
		accA.x = accL.x-accL.scaleX*10;
	}
	}else{
	   acceleration.visible = false;
	   accL.visible = false;
	    accA.visible = false;
	}
	//-------------------------
	if(motion){
	vel.visible = true;
	vel.v.text = Math.abs(my_round(v,2)) + " m/s";
		velocityL.scaleX = Math.abs(v)/10;
		velocityL.visible = true;
		velocityA.visible = true;
	if (stage.mouseX>scater.x) {
		velocityL.rotation = 0;
		velocityA.rotation = 0;
        velocityA.x = velocityL.x+velocityL.scaleX*10;
	} else {
		velocityL.rotation = 180;
		velocityA.rotation = 180;
        velocityA.x = velocityL.x-velocityL.scaleX*10;
	    }
     }   
	}


function massChanger() {
	if (val>=20 && val<40) {
		scater = m1;
		m1.visible = true;
		m2.visible = false;
		m3.visible = false;
		//m2.enabled = false;
		//m3.enabled = false;
		scaterX0 = m1X0;
		scater.scaleY = 1 +(val-20)/200;
		scater.scaleX = 1 +(val-20)/200;

		scater.addEventListener("mousedown", mouseDownHandler);
		scater.addEventListener("pressup", mouseUpHandler);
	}
	if (val>=40 && val<70) {
		scater = m2;
		m1.visible = false;
		m2.visible = true;
		m3.visible = false;
		scaterX0 = m2X0;
		scater.scaleY = 1 +(val-40)/300;
		scater.scaleX = 1 +(val-40)/300;

		scater.addEventListener("mousedown", mouseDownHandler);
		
	}
	if (val>=70 && val<=100) {
		scater = m3;
		m1.visible = false;
		m2.visible = false;
		m3.visible = true;
		scaterX0 = m3X0;
		scater.scaleY = 1 +(val-70)/300;
		scater.scaleX = 1 +(val-70)/300;

		scater.addEventListener("mousedown", mouseDownHandler);
		scater.addEventListener("pressup", mouseUpHandler);
	}
stage.update();

}


//slider______________________________________________	

            var shift =200;
			var area = 800;
			var step = 0.1;
			var rounding = 1;
			var percent;
		//	var zeroP;
      var dragged = false; 
      
   //   var sliderWidth  = 263;
      var sliderTrackWidth  = 185;

		//	zeroP = sliderWidth  - sliderTrackWidth;
			
			sliderThumb.addEventListener("pressmove", dragSl);  


function dragSl(event){
	event.preventDefault();
	event.nativeEvent.preventDefault();
      
/*	if (stage.mouseX  >= zeroP && stage.mouseX  <= zeroP + sliderTrackWidth)
		{
			slider.sliderThumb.x = stage.mouseX - slider.x;
			
		}
		if (stage.mouseX < zeroP)  
		{
			slider.sliderThumb.x = zeroP  - slider.x;
		}
		if (stage.mouseX > zeroP + sliderTrackWidth)
		{
			slider.sliderThumb.x = zeroP + sliderTrackWidth - slider.x;
		}
 percent = (slider.sliderThumb.x-slider.slidertrack.x)/sliderTrackWidth*area;  

  slider.val.text = my_round((percent + shift) * step,rounding).toString();
              
				  val = Number(slider.val.text);
				  massChanger();
	       stage.update();
		*/	
		
		event.currentTarget.x = event.stageX;
		if(event.currentTarget.x < slidertrack.x){	
	    		event.currentTarget.x= slidertrack.x;
	    	} 
	  if(event.currentTarget.x > slidertrack.x + sliderTrackWidth){	
	    		event.currentTarget.x= slidertrack.x + sliderTrackWidth;
	    	}   		
		percent = (sliderThumb.x-slidertrack.x)/sliderTrackWidth*area;  

slider_val.text = my_round((percent + shift) * step,rounding).toString();
              
				  val = Number(slider_val.text);
				  massChanger();
	       stage.update();
		
		
		}












}

function my_round(number, n) {
	var k = Math.pow(10, n);
	var t = Math.round(number * k) / k;

	var b;
	var s = t.toString().length - t.toString().indexOf(".");
	var d = n - s + 1;
	if (t.toString().indexOf(".") == -1) {

		b = t + ".0";
		for (var i = 0; i < n - 1; i++) {
			b = b + "0";
		}
	}
	else {
		if (d > 0) {
			b = t + "0";
			for (i = 0; i < d - 1; i++) {
				b = b + "0";
			}
		}
		if (d == 0) {
			b = t;
		}
	}
	return b;
       }
