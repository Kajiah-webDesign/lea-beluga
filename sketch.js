let A=0;

function setup() {
  createCanvas(400, 400);
  strokeWeight (4);
}

function draw() {
  
  background(220);
  background (66, 135, 245);
  
  
  // arms
   line (A+50, 100, 125, 100)
  line (A+350, 100, 125, 100)
  
  
  //legs
  rect (A+140, 130,25, 100, 1);
  rect (A+240, 130, 25, 100);
  
  
 //eye and body
  
   ellipse (A+200, 95, 150, 160);
  fill (245, );
  ellipse (A+200, 77, 100, 100);
  
  
  
  fill (254, 0, 0);
  
  //eye
  circle (A+200, 70, 40);
  circle (A+150, 240, 50);
  
  // feet
  circle (A+250, 240, 50);
  fill (140, 182, 38);
 
  //mouth
  arc (A+200,130, 50,50, 0, PI);

  rect (0, 265, 400);
  
  //hands
  
   circle (A+70, 100, 40);
  
  circle (A+335, 100, 40);
  
  A = A+1;
  
  if(A>=200)
    {
      A=0;
    }
  
  
}
 
 