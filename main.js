noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,300);
    video.hide();
    color = " ";

    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-70;
        noseY = results[0].pose.nose.y+5;
        console.log('nose x = '+noseX);
        console.log('nose y = '+noseY);
    }
}
function draw()
{
    image(video,0,0,300,300);
    tint(color);
    image(clown_nose, noseX, noseY, 80, 35);
}
function color_catch()
{
    color = document.getElementById("color").value;
}
function take_snapshot()
{
    save("myFilterImage.png");
}