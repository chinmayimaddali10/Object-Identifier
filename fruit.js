var status = "";

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    satus = true;
    console.log("model Loaded");

}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}