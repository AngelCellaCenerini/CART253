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

//Drawing the body
//Lower part of body
noStroke();
fill(255,255,255);
ellipse(300, 190, 85, 90);

// Middle - flowing pink rings
noFill();

strokeWeight(8);
stroke(236,140,195);
ellipse(290,230,50,55);

stroke(255,215,238);
ellipse(270,260,50,60);

//Upper part body
noStroke();
fill(255,255,255);
ellipse(240,280,85,75);



//Drawing the head


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
