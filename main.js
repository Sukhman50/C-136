noseX = 0;
noseY = 0;
differnece = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    canvas=createCanvas(800, 550);
    canvas.position(600,90);
    video= createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, differnece);
}

function modelLoaded(){
    console.log('Pose net is innitialized!');
}

function gotPoses(results){
if(results.length >0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    differnece = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " differnce = " + differnece)
}
}
