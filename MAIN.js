function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,180,150,250,200);
    fill(0,255,0);
    stroke(0,255,0);
    circle(50,50,80);
    circle(50,590,80);
    circle(430,50,80);
    circle(430,590,80);
    fill(255,0,0);
    stroke(255,0,0);
    rect(50,50,20,1000);
    rect(50,590,20,1000);
    rect(430,50,20,1000);
 rect(430,590,20,1000);
}

function takePic(){
    console.log("*KHICHAAIK*!!!!");
    console.log("Clicked pic'.");
    console.log("Saved pic' as .png file.");
    save("khichaaik! pic.png");
}