function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#0678E3");
    text("dog", 55, 75);
    noFill();
    stroke("#0678E3");
    rect(50, 60, 450, 350);
    text("cat", 300, 80);
    rect(290, 55, 315, 350);
}

img = "";
status = "";

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}