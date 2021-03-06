var status = "";
object = [];
var img = "";
objectDetector = "";

function preload() {
    img = loadImage("bathroom.jpg");
}

function setup() {
    canvas = createCanvas(670, 670);
    canvas.center();
    /*video = createCapture(VIDEO);
    video.hide();
    video.size(380, 380);*/

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status: Detecting Objects";
}

function modelLoaded() {
    status = true;
    console.log("model Loaded");
    objectDetector.detect(img, gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function draw() {
    image(img, 0, 0, 670, 670);

    if (status != "") {
        console.log(status);

        for (i = 0; i < object.length; i++) {

            document.getElementById("status").innerHTML = " Status: Object Detected";
            document.getElementById("numOfObj").innerHTML = " Number of Objects : " + object.length;
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            stroke("red");
            noFill();
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}