let fondo;
let slider;

function setup(){
    fondo = createCanvas(windowWidth, windowHeight);
    fondo.position(0, 0);
    fondo.style('z-index', -1);
    slider = createSlider(3, width/2, 100, 1);
    slider.position(50, height - 100)
}


function draw(){
    clear();
    stroke(255, 90);
    strokeWeight(2);
    let offset = (millis()/30) % 900;
    for(let i = 0; i < 1300; i++){
        line(-width + i * slider.value(), height, -width + offset + i * slider.value(), 0);
    }
    ellipse(width/2, height - 155, 300, 300)
}