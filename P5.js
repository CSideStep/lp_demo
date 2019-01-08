let pValueSlider;
let points = [
	[400, 400, [255, 0, 0]],
	[200, 200, [0, 255, 0]]];	
let last_value=0;

function setup() {
	createCanvas(500, 500);
	pValueSlider = createSlider(pValueSlider = 1, 10, 2);
}

function mouseReleased(){
	if(mouseX < width && mouseX >= 0 && mouseY < height && mouseY >= 0){
	points.push([mouseX, mouseY, [random(255), random(255), random(255)]]);
	}
	last_value =0;
}

function draw(){
	if(last_value != pValueSlider.value()){
		for (let x = 0; x < width/10; x++) {
			for (let y = 0; y < height/10; y++) {
				let best_point = [0, 0, [0, 0, 0]]
				let best_dist = 1000000;
				for (let i = 0; i < points.length; i++) {
					if (dist(points[i][0], points[i][1], x*10, y*10) < best_dist) {
						best_point = points[i];
						best_dist = p_dist(points[i][0], points[i][1], x*10, y*10, pValueSlider.value());
					}
				}
				fill(best_point[2]);
				rect(x*10, y*10, 10, 10);
			}
		}
		for (let i = 0; i < points.length; i++) {
			fill(255, 255, 255);
			ellipse(points[i][0]+5, points[i][1]+5, 5, 5);
		}
	}
	last_value = pValueSlider.value()
	print(last_value)
}

function p_dist(x1, y1, x2, y2, p) {
	return pow((pow(abs(x1 - x2), p) + pow(abs(y1 - y2), p)), 1 / p);
}
