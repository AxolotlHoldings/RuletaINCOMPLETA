//Variables

var Wheel, Wheel_Img
var Y2020, Y2021,Y2022, Y2023, Y2024, Y2025, Y2026, Y2027, Y2028, Y2029;
var I2020, I2021,I2022, I2023, I2024, I2025, I2026, I2027, I2028, I2029;
var slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10;

function preload() {
  Wheel_Img = loadImage("Assets/Vacia.png");
  I2020 = loadImage("Assets/2020.png");
  I2021 = loadImage("Assets/2021.png");
  I2022 = loadImage("Assets/2022.png");
  I2023 = loadImage("Assets/2023.png");
  I2024 = loadImage("Assets/2024.png");
  I2025 = loadImage("Assets/2025.png");
  I2026 = loadImage("Assets/2026.png");
  I2027 = loadImage("Assets/2027.png");
  I2028 = loadImage("Assets/2028.png");
  I2029 = loadImage("Assets/2029.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function createWheel() { 
Wheel = createSprite(width/2, height/2); 
Wheel.addImage(Wheel_Img);
};