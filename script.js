
/* Iteration 4: Make Everything Work */
// pikachu - sky, ground, body, ears, cheeks,
var sky = document.getElementById("sky");
var buttonsky = document.getElementById("buttonsky");
buttonsky.oninput = () => {
//  console.log("My color input is working");
 sky.style.fill = buttonsky.value;
};
var ground = document.getElementById("ground");
var buttonground = document.getElementById("buttonground");
buttonground.oninput = () => {
 //  console.log("My color input is working");
ground.style.fill = buttonground.value;
};
var body = document.getElementById("body");
var buttonbody = document.getElementById("buttonbody");
buttonbody.oninput = () => {
//  console.log("My color input is working");
 body.style.fill = buttonbody.value;
};
var cheeks = document.getElementById("cheeks");
var buttoncheeks = document.getElementById("buttoncheeks");
buttoncheeks.oninput = () => {
 //  console.log("My color input is working");
 cheeks.style.fill = buttoncheeks.value;
};
var ears = document.getElementById("ears");
var buttonears = document.getElementById("buttonears");
buttonears.oninput = () => {
//  console.log("My color input is working");
 ears.style.fill = buttonears.value;
};


