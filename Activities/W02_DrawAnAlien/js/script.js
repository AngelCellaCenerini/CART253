/**************************************************
WEEK 02 - ACTIVITY: Dran an alien

Angel Cella Cenerini
Template by CART253Course

Drawing an alien entity through notions from Week02's lessons
**************************************************/

// Setting up:
//    setting uo canavs (500x500)
//    space sky background
//    alien cat-creature


function setup() {

// Creating Canvas - modified dimensions
createCanvas(500,500);


// Creating background - Space sky(concentric shades), with shining stars

//Space sky

// Deep blue base
background(0, 53, 115);

// Removing outlines for all sky shades
noStroke();

//First lighter blue concentric shade
fill(14, 93, 153);
circle(250, 250, 600);

// Second green-blue concentric shade
fill(39, 139, 167);
circle(250,250,450);

// Pink bright trail
noFill();
stroke(139, 183, 160);
strokeWeight(6);

circle(250, 250, 350);
stroke(215, 132, 227);
strokeWeight(2);
circle(250,250,640);

// Fourth green shade
noStroke();
fill(139, 183, 160);
circle(250,250,200);


// Drawing the stars

//PT1- Stars'shine - white light, lowered opacity
stroke(255,255,255,140);
fill(255,255,255,140);

strokeWeight(22);
point(130,100);
point(480,400);

strokeWeight(13);
point(460,80);
point(80,460);


//PT2- White starts
fill(255,255,255);
stroke(255,255,255);

// The biggest, shiniest stars
strokeWeight(10);
point(130,100);
point(480,400);
//Medium stars
strokeWeight(7);
point(460,80);
point(80,460);
// Tiniest stars
strokeWeight(5);
point(50,250);
point(440,60);
point(30,490);
point(30,150);
point(389,200);
point(430,440);
point(260,30);


//Drawing the creature: white alien cat

//Drawing the body//

//Tail - two pink rings
//Pink shine
noFill();
strokeWeight(4);
stroke(255,215,238,170);
ellipse(260,140,45,35);

stroke(236,140,195,100);
ellipse(280,145,29,27);


//Pink rings
noFill();
strokeWeight(4);
stroke(255,215,238);
ellipse(260,140,40,30);

stroke(236,140,195);
ellipse(280,145,24,22);

//

//Lower part of body
noStroke();
fill(255,255,255);
ellipse(300, 190, 85, 90);

//Left leg lower body
//Pink lineart
fill(250,227,241);
ellipse(287, 188, 69, 66);
//Left paw in lower body
ellipse(340,196,18,28);
//Actual leg
fill(255,255,255);
ellipse(290, 185, 75, 70);

//Pink shadow lower legs
fill(250,227,241);
ellipse(304,200,21,58);
ellipse(305,200,23,50);

//Paw
fill(255,255,255);
ellipse(305,195,20,65);
//Pink paw fingertips left lower leg
fill(255,200,225);
ellipse(305,216,9,14);


// Middle - flowing pink rings
noFill();
//Pink shine darker ring
strokeWeight(8);
stroke(236,140,195,80);
ellipse(290,230,60,65);

//Two pink rings
//Ring1 - darker
strokeWeight(8);
stroke(236,140,195);
ellipse(290,230,50,55);

//Pink shine brighter ring
stroke(255,215,238,100);
ellipse(270,260,60,70);
//Ring2 -brighter
stroke(255,215,238);
ellipse(270,260,50,60);


//Upper part body
noStroke();
fill(255,255,255);
ellipse(240,280,85,75);

//Paws
//Pink lineart/shadow
fill(250,227,241);
ellipse(231,319,28,18);
ellipse(260,303,17,40);

//Actual white paws
fill(255,255,255);
ellipse(230,320,28,20);
ellipse(263,307,21,60);
ellipse(342,195,20,30);
//Pink paw fingertips right lower leg
fill(255,200,225);
ellipse(342,199,12,14);

//Shoulder
fill(255,255,255);
ellipse(248,259,50,35);
ellipse(250,264,50,32);




//Drawing the white head

//The shadow
noStroke();
fill(250,227,241);
circle(215,265,50,50);
circle(209,278,30,30);
circle(217,278,25,25);

//The actual cat head
fill(255,255,255);
circle(210,260,55,55);
//The ears
triangle(200,282,150,278,190,250);
triangle(188,245,195,205,220,234);
circle(204,276,30,30);
circle(210,276,25,25);

//The pink eyes
stroke(255,200,225);
point(220,252);
point(204,275);
//White shine in eyes
strokeWeight(1.8);
stroke(255,255,255);
point(220,250);
point(204,273);

//Ears details
strokeWeight(1.2);
stroke(255,200,225);
line(168,272,180,267);
line(198,237, 197,220);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
