noseX= 0;
noseY= 0;

function preload(){
  clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
 
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
    if (results.length>0)
     {
         noseX= results[0].pose.nose.x;
         noseY= results[0].pose.nose.y;
         console.log(results);
         console.log("noseX="+results[0].pose.nose.x);
         console.log("noseY="+results[0].pose.nose.y);
     }
}

function modelLoaded()
{
    console.log("poseNet model is loaded!");
}

function draw()
{
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,20);
    image(clown_nose,noseX-15,noseY-15,30,30);
}
function take_snapshot()
    {
        save("myfilterimage.png");
    }