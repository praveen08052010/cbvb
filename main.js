function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded()
{
    console.log('PoseNet is insatalized!');
}

function gotPoses(results)
{
  if (results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);

    rightWristX = results[0].pose.rightWrist.x;
    leftWristY = results[0].pose.leftWrist.x;
    difference = floor(leftWristY - rightWristX);
    square_r.innerHTML = difference
    console.log("rightWristX = " + rightWristX + "leftWristY = " + leftWristY + "difference = " + difference);
  }
}

function draw()
{
    background('#969A97');
     fill('#F90093');
     stroke('#F90093')
     square(noseX, noseY, difference);
}


noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;
function preload(){
}

