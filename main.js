function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classisyCanvas);
    synth = window.speechSynthesis;
}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function draw(){


    //set stroke weight to 13
    strokeWeight(13);
    //Set stroke color to black
    stroke(0);
    //f mouse is pressed, draw a line between curreent a previous positions
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

    function classisyCanvas(){
        classifier.classify(canvas, gotResult);
    }

    function gotResult(error, results){
        if(error){
            console.error(error);
        }
        console.log(results);
        document.getElementById('label').innerHTML = "Label: " + results[0].label;
        document.getElementById('confidence').innerHTML = "Confidence: " + Math.round(results[0].confidence*100) + "%";
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
    function  clearCanvas(){
        background("white")
    }