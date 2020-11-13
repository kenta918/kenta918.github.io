
let video;
let poseNet;
let poses = [];
var eyes = [1,2]
let lhX;
let lhY;
let pLhX;
let pLhY;
let pg;
function setup() {
  createCanvas(1200, 700);
  video = createCapture(VIDEO);
  video.size(width, height);
  pixelDensity(1);
  pg = createGraphics(width, height);
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, width, height);
  image(pg, 0, 0, width, height);
  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        if(j==10){
        
       
        lhX=keypoint.position.x;
        lhY=keypoint.position.y;
        pg.fill(50, 168, 70);
        pg.stroke(255, 204, 0);
        pg.strokeWeight(15);

        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        pg.line(lhX,lhY,pLhX,pLhY)
        pLhX = lhX
        pLhY = lhY

      }
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(50, 168, 70);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}