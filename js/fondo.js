let fondo;


let w;

function setup(){
    fondo = createCanvas(windowWidth, windowHeight);
    fondo.position(0, 0);
    fondo.style('z-index', -1);
    w = [];
    /*
    for(let i = 0; i < 3; i++){

    }
    */

    w[0] = new Wave(height * .65, 60, 25, "#6DCFF4");
    w[1] = new Wave(height * .72, 100, 50, "#01A6DE");
    w[2] = new Wave(height * .85, 160, 75, "#0067A1");
}


function draw(){
    clear();
    stroke(255, 90);
    strokeWeight(2);
    
    for(let wave of w){
        wave.draw();
       // wave.per = mouseX/width * wave.z * wave.per;
    }
}

class Wave{
    constructor(y, per, amp, col){
        this.y = y;
        this.per = per;
        this.amp = amp;
        this.col = col;
        this.z = map(this.y, 0, height, 2, 1);
    }

    draw(){
        let xoff = map(mouseX, 0,  width, -100, 100) * this.z;
        let yoff = map(mouseY, 0,  height, -100, 100) * this.z;
        let res = 5;
        noStroke();
        fill(this.col);
        beginShape();
        for(let x = 0; x < width; x += res){
            let y = yoff + this.y + sin(xoff/100 + (millis()/(this.y/100) + x)/this.per) * this.amp;
            vertex(x, y);
        }
        vertex(width, height);
        vertex(0, height);
        endShape();
    }
}