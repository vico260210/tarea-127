var song1="";
var song2="";

scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
    console.log("info:srw=scoreRightWrist,slw=scoreLeftWrist");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("srw="+scoreRightWrist+"slw="+scoreLeftWrist);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
    }
}