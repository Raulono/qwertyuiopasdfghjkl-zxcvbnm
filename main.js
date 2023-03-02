function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(379, 379);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="estatus defectando objeto";   
    video.hide(); 
}
img="";
status="";
function preload(){
    img=loadImage('a.jpg');
}
function draw(){
    image(video,0,0,379,379);

    if(status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResults);
for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="estetus objute datuctedi";
    document.getElementById("number_of_objects").innerHTML="numerou deu objetous detectadous"+objects.length;
    fill(r,g,b);
    percent=floor(objects[i].confidence *100);
    text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
   /*
    text("DORITO",45,75);
    noFill();
    stroke("#30FF30");
     rect(30,60,450,350);

     fill("#0000FF");
     text("CATITO",320,120);
     noFill();
     stroke("#6613B9");
     rect(300,90,270,320);
          */
}
function modelLoaded(){
    console.log("modelocargado");
    status=true;
    objectDetector.detect(video,gotResults);
}
function gotResults(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}
objects=[];