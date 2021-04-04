function preload()
{
    
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
        console.log('nose x = '+results[0].pose.nose.x);
        console.log('nose y = '+results[0].pose.nose.y);
    }
}
function draw()
{
    image(video,0,0,300,300);
    tint(color);
}
function color_catch()
{
    color = document.getElementById("color").value;
}
function take_snapshot()
{
    save("myFilterImage.png");
}