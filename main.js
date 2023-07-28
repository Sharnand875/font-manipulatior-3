function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(550,150);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('on',gotposes);
}
function draw(){
    background('#969A97');
}
function modelloaded(){
    console.log("posenet initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        leftWristx=results[0].pose.leftWrist.x;
    }    
}

function draw(){
    background('#969A97');
    textsize(16);
    fill('#F90093');
    text('Nandita',50,400);
}