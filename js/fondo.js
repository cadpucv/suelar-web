let fondo; // sketch
let w;     // waves
let page;

function setup(){
    page = document.getElementById('page');
    fondo = createCanvas(page.offsetWidth, page.offsetHeight);
    fondo.position(0, 0);
    fondo.style('z-index', -1);
    w = [];
    
    /*
    w[0] = new Wave(height * .62, 20, 10, "#B1D8E7");
    w[1] = new Wave(height * .63, 25, 15, "#8EBFD5");
    w[2] = new Wave(height * .65, 25, 20, "#6AA5C3");
    w[3] = new Wave(height * .70, 40, 25, "#478CB0");
    w[4] = new Wave(height * .75, 90, 50, "#23729E");
    w[5] = new Wave(height * .85, 130, 75, "#00598C");
*/

    w[0] = new Wave(height * .62, 20, 10, "#8BDAF7ff");
    w[1] = new Wave(height * .63, 25, 15, "#6FBDDCff");
    w[2] = new Wave(height * .65, 25, 20, "#53A0C1ff");
    w[3] = new Wave(height * .70, 40, 25, "#3882A7ff");
    w[4] = new Wave(height * .75, 90, 50, "#1C658Cff");
    w[5] = new Wave(height * .85, 130, 75, "#004871ff");

}

function draw(){
    clear();
    // blendMode(MULTIPLY);
    stroke(255, 90);
    strokeWeight(2);
    
    for(let wave of w){
        wave.draw();
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
        for(let x = -res; x < width + res; x += res){
            let y = yoff + this.y + sin(xoff/100 + (millis()/(this.y/20) + x)/this.per) * this.amp;
            vertex(x, y);
        }
        vertex(width, height);
        vertex(0, height);
        endShape();
    }
}

function windowResized(){
    setup();
}