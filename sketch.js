///VARIABLES///
let rocket;
let explosion;
let coinIcon;
let lifeIcon1;
let lifeIcon2;
let lifeIcon3;
///VALUES///
let gameState = 0;
let rocketUser = 0;
let score = 0;
let gun = 0;
let lifes = 3;
let coins = 0;
let asteroidLife = 3;
let TimeWorld = 0;
let cambio = 0;
///SOUNDS///
let RBAThemeSound;
let explosionSound, coinSound, powerUpSound, laserSound, delaySound, destroySound, lifeUpSound, endSound, gameOverSound;
///IMAGES///
let coinIconImg, lifeIconImg, lifeIcon2xImg, star1Img, star2Img, rocketRun, coinsImg, powerImg, delayImg, lifeUpImg, asteroidImg, asteroidDestroyedImg;
///GROUPS///
let asteroidsGroup, lasersX1Group, starsGroup, coinsGroup, powerGroup, delayGroup, lifeUpGroup;
///BOTTONS///
let title, titleImg; 
let playButton;
let optionsButton;
let overButton;
let backButton;
let automaticButton;
let manualButton;
let restartBotton;
let quitBotton;

function preload() {
  ///IMAGES///
  coinIconImg = loadImage("./assets/Coin0.png");
  lifeIconImg = loadImage("./assets/Heart.png");
  lifeIcon2xImg = loadImage("./assets/Heart2x.png");
  star1Img = loadImage("./assets/star01_2D0.png");
  star2Img = loadImage("./assets/star02_2D0.png");
  rocketRun = loadAnimation("./assets/x1ROCKET010.png", "./assets/x2ROCKET010.png", "./assets/x3ROCKET010.png");
  coinsImg = loadImage("./assets/Coin0.png")
  powerImg = loadImage("./assets/poder+.png");
  delayImg = loadImage("./assets/delay0.png");
  lifeUpImg = loadImage("./assets/Life2D0.png");
  asteroidImg = loadImage("./assets/asteroide2D.png");
  explosion = loadImage("./assets/explosionnn.jpg");
  asteroidDestroyedImg = loadImage("./assets/AsteroidDestroyed.png");
  titleImg = loadImage("./assets/RBA0.png");
  //restartBottonImg = loadImage("./assets/RestartBotton0.png");
  //quitBottonImg = loadImage("./assets/QuitBotton0.png");
  ///SOUNDS///
  RBAThemeSound = loadSound("./assets/KakyoinThemeRBA.mp3");
  explosionSound = loadSound("./assets/Explosion.mp3");
  coinSound = loadSound("./assets/Coin.mp3");
  powerUpSound = loadSound("./assets/Item.mp3");
  laserSound = loadSound("./assets/Laser.mp3");
  delaySound = loadSound("./assets/Delay.mp3");
  destroySound = loadSound("./assets/Destroy.mp3");
  lifeUpSound = loadSound("./assets/LifeUp.mp3");
  endSound = loadSound("./assets/End.mp3");
  gameOverSound = loadSound("./assets/GameOver.mp3","./assets/ExplosionFinale");
}

function setup() {

  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile) {
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth, displayHeight);
  } else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  }
  ///SPRITES///
  edges = createEdgeSprites();
  rocket = createSprite(canW/2, canH/2 /*+ 150*/);
  rocket.addAnimation("rocket", rocketRun);
  rocket.scale = canW/1500;
  rocket.rotation = 270;
  rocket.visible = true;
  //rocket.debug = true;
  coinIcon = createSprite(canW/2 + 575, canH/2 - 300, 50, 50);
  coinIcon.addImage(coinIconImg);
  coinIcon.scale = 0.033;
  coinIcon.visible = false;
  lifeIcon1 = createSprite(canW/2 - 650, canH/2 - 300, 50, 50);
  lifeIcon1.addImage(lifeIconImg);
  lifeIcon1.scale = 0.025;
  lifeIcon1.visible = false;
  lifeIcon2 = createSprite(canW/2 - 603, canH/2 - 300, 50, 50);
  lifeIcon2.addImage(lifeIconImg);
  lifeIcon2.scale = 0.025;
  lifeIcon2.visible = false;
  lifeIcon3 = createSprite(canW/2 - 556, canH/2 - 300, 50, 50);
  lifeIcon3.addImage(lifeIconImg);
  lifeIcon3.scale = 0.025;
  lifeIcon3.visible = false;
  title = createSprite(canW/2, canH/2 - 750, 25, 15);
  title.scale = canH/3000;
  title.addImage(titleImg);
  playButton = createImg("./assets/PlayBotton0.png");
  playButton.size(canW/3, canH/11);
  playButton.position(canW/3, canH/2 + 500);
  playButton.mouseClicked(playGameSetup);
  optionsButton = createImg("./assets/OptionsBotton0.png");
  optionsButton.size(canW/2, canH/11);
  optionsButton.position(canW/4, playButton.y + 175);
  optionsButton.mouseClicked(optionsSetup);
  overButton = createImg("./assets/OverBotton0.png");
  overButton.size(canW/3, canH/11);
  overButton.position(canW/3, canH/2.15);
  overButton.mouseClicked(overSetup);
  overButton.hide();
  automaticButton = createImg("./assets/AutomaticBotton0.png");
  automaticButton.size(canW/2 + 125, canH/11);
  automaticButton.position(canW/5, canH/2 + 125);
  automaticButton.mouseClicked(automaticSetup);
  automaticButton.hide();
  manualButton = createImg("./assets/ManualBotton0.png");
  manualButton.size(canW/2, canH/11);
  manualButton.position(canW/4, canH/2 - 125);
  manualButton.mouseClicked(manualSetup);
  manualButton.hide();
  backButton = createImg("./assets/BackBotton0.png");
  backButton.size(canW/3, canH/11);
  backButton.position(canW/12, canH/2 + 700);
  backButton.mouseClicked(backSetup);
  backButton.hide();
  //restartBotton = createSprite(canW/2, canH-150, 25, 15);
  //restartBotton.rotation = 90;
  //restartBotton.scale = 0.195;
  //restartBotton.addImage(restartBottonImg);
  //quitBotton = createSprite(canW/2+580, canH/2+275, 25, 15);
  //quitBotton.rotation = 90;
  //quitBotton.scale = 0.65;
  //quitBotton.addImage(quitBottonImg);
  
  ///GROUPS///
  asteroidsGroup = new Group();
  starsGroup = new Group();
  coinsGroup = new Group();
  powerGroup = new Group();
  delayGroup = new Group();
  lifeUpGroup = new Group();
  lasersX1Group = new Group();
  lasersX2Group = new Group();
  lasersX4Group = new Group();
  lasersX8Group = new Group();

  //RBAThemeSound.play();
  //RBAThemeSound.looping = true;
}

function draw() {
  
  background(0);
  if(gameState == 0){

    TimeWorld = 0;
    spawnSTARS1();
    spawnSTARS2();
    spawnCOINS();
    title.visible = true;

  }
  if(gameState == 0.1){
    TimeWorld = 0;
    //spawnSTARS1();
    //spawnSTARS2();
    //spawnCOINS();
    backButton.show();
  }
  if(gameState == 0.2){
    TimeWorld = 0;
    automaticButton.show();
    manualButton.show();
    backButton.show();
    //spawnSTARS1();
    //spawnSTARS2();
    //spawnCOINS();
  }
  if(gameState == 1){
    TimeWorld = 0;
    //spawnSTARS1();
    //spawnSTARS2();
    rocket.visible = true;
    rocket.velocityY =- 10;
    if(rocket.y < canH - 250) {
      rocket.velocityY = 0;
      //textSize(30);
      //fill("white");
      //text("TESTE"/*"Joseph Joestar: OH NO! Uma chuva de meteoros está vindo em nossa direção!"*/, canW/2, canH/2 - 250);
    }
    textSize(50);
    fill("red");
    text("STAGE 1", canW/2 - 95, canH/2);
    if(frameCount == 185){
      gameState = 1.1;
    }
  }
  if(gameState == 1.1){
    base();
    //spawnASTEROIDS();
    rocket.bounceOff(edges);
    if(rocket.isTouching(asteroidsGroup)) {
      explosionSound.play();
      endSound.play();
      //rocket.addImage(explosion);
      lifes = lifes - 1;
      gameState = 3;
      if(lifes === 0){
        gameState = 4;
        gameOverSound.play();
      }
    }
    lasersX1Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX2Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX4Group.bounceOff(asteroidsGroup,destroyasteroid);
    lasersX8Group.bounceOff(asteroidsGroup,destroyasteroid);
    if(frameCount > 1000){
      gameState = "Stage1Clear";
    }
  }
  if(gameState == "Stage1Clear"){
    spawnSTARS1();
    spawnSTARS2();
    iconsRemove();
    starsGroup.setVelocityXEach(-10);
    asteroidsGroup.setVelocityXEach(-10);
    textSize(50);
    fill("white");
    text("Parabéns, você passou pelo Stage 1!", canW/2-170, canH/2+300);
    rocket.velocityX = + 7;
    //if(rocket.y >= 150){
    //  rocket.velocityY = -3;
    //}
    //if(rocket.y <= 150){
    //  rocket.velocityY = +3;
    //}
    //if(rocket.y === 150){
    //  rocket.velocityY = 0;
    //  rocket.y = 150;
    //}
    if(rocket.x > canW/2+350){
      gameState = "EmBreve";
    }
  }
  if(gameState == "EmBreve"){
    spawnSTARS1();
    spawnSTARS2();
    textSize(50);
    fill("White");
    text("Obrigado por jogar!", canW/2-220, canH/2);
    iconsRemove();

    if(mousePressedOver(quitBotton)){
      quit();
    }
  }
  if(gameState == "end"){
    iconsRemove();
    starsGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    powerGroup.setVelocityXEach(0);
    delayGroup.setVelocityXEach(0);
    lifeUpGroup.setVelocityXEach(0);
    asteroidsGroup.setVelocityXEach(0);
    lasersX1Group.setVelocityXEach(0);
    lasersX2Group.setVelocityXEach(0);
    lasersX4Group.setVelocityXEach(0);
    lasersX8Group.setVelocityXEach(0);
    powerGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    delayGroup.setLifetimeEach(-1);
    lifeUpGroup.setLifetimeEach(-1);
    starsGroup.setLifetimeEach(-1);
    asteroidsGroup.setLifetimeEach(-1);
    lasersX1Group.setLifetimeEach(-1);
    lasersX2Group.setLifetimeEach(-1);
    lasersX4Group.setLifetimeEach(-1);
    lasersX8Group.setLifetimeEach(-1);
    rocket.scale = 0.095;
    textSize(45)
    fill("red");
    text("YOU BLEW UP!", canW/2-160, canH/2-50);
    fill("red");
    text("Score: ", canW/2-80, canH/2+25);
    fill("white");
    text(" "+score, canW/2+60, canH/2+25);
    

    if(mousePressedOver(restartBotton)){
      reset();
      quitBotton.visible = false;
    }
    if(mousePressedOver(quitBotton)){
      quit();
      restartBotton.visible = false;
    }
  }
  if(gameState == "gameOver"){
    frameCount = 0;
    TimeWorld = 0;
    iconsRemove();
    starsGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    powerGroup.setVelocityXEach(0);
    delayGroup.setVelocityXEach(0);
    lifeUpGroup.setVelocityXEach(0);
    asteroidsGroup.setVelocityXEach(0);
    lasersX1Group.setVelocityXEach(0);
    lasersX2Group.setVelocityXEach(0);
    lasersX4Group.setVelocityXEach(0);
    lasersX8Group.setVelocityXEach(0);
    powerGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    delayGroup.setLifetimeEach(-1);
    lifeUpGroup.setLifetimeEach(-1);
    starsGroup.setLifetimeEach(-1);
    asteroidsGroup.setLifetimeEach(-1);
    lasersX1Group.setLifetimeEach(-1);
    lasersX2Group.setLifetimeEach(-1);
    lasersX4Group.setLifetimeEach(-1);
    lasersX8Group.setLifetimeEach(-1);
    //rocket.scale = 0.095;
    textSize(45)
    fill("red");
    text("GAME OVER!", canW/2-140, canH/2-50);
    fill("red");
    text("Score: ", canW/2-80, canH/2+25);
    fill("white");
    text(" "+score, canW/2+60, canH/2+25);
    if(mousePressedOver(quitBotton)){
      explosionSound.stop();
      gameOverSound.stop();
      quit();
    }
  }
  if(frameCount % 10 === 0 ){
    TimeWorld = TimeWorld + 4;
  }

  //textSize(15);
  //text(""+frameCount, 400, 290);
  drawSprites();
  //console.log(cambio);
  //console.log(gun);
  //console.log(gameState);

}

function spawnSTARS1(){
  if(frameCount % 12 === 0){
    let star1 = createSprite(Math.round(random(canW)), Math.round(random(canH)));
    star1.addImage(star1Img);
    star1.scale = canW/150;
    star1.velocityY = (6 + TimeWorld * 2/100);
    star1.lifetime = canH/star1.velocityY;
    rocket.depth = star1.depth;
    rocket.depth += 1;
    title.depth = star1.depth;
    title.depth += 1;
    coinIcon.depth = star1.depth;
    coinIcon.depth += 1;
    lifeIcon1.depth = star1.depth;
    lifeIcon1.depth += 1;
    lifeIcon2.depth = star1.depth;
    lifeIcon2.depth += 1;
    lifeIcon3.depth = star1.depth;
    lifeIcon3.depth += 1;
    starsGroup.add(star1);
  }
}

function spawnSTARS2(){
  if(frameCount % 12 === 0){
    let star2 = createSprite(Math.round(random(canW)), Math.round(random(canH)));
    star2.addImage(star2Img);
    star2.scale = canW/100;
    star2.velocityY = (6 + TimeWorld * 2/100);
    star2.lifetime = canH/star2.velocityY;
    rocket.depth = star2.depth;
    rocket.depth += 1;
    title.depth = star2.depth;
    title.depth += 1;
    coinIcon.depth = star2.depth;
    coinIcon.depth += 1;
    lifeIcon1.depth = star2.depth;
    lifeIcon1.depth += 1;
    lifeIcon2.depth = star2.depth;
    lifeIcon2.depth += 1;
    lifeIcon3.depth = star2.depth;
    lifeIcon3.depth += 1;
    starsGroup.add(star2);
  }
}

function spawnASTEROIDS(){
  if(frameCount % 25 === 0){
    let asteroid = createSprite(Math.round(random(canW)), canH.lenght);
    asteroid.addImage(asteroidImg);
    asteroid.scale = (random(canW/3000, canW/6000));
    asteroid.rotation = Math.round(random(0, 360));
    asteroid.velocityY = Math.round(random((5 + TimeWorld * 2/100), (10 + TimeWorld * 2/100)));
    asteroid.lifetime = canH/asteroid.velocityY;
    rocket.depth = asteroid.depth;
    rocket.depth += 1;
    coinIcon.depth = asteroid.depth;
    coinIcon.depth += 1;
    lifeIcon1.depth = asteroid.depth;
    lifeIcon1.depth += 1;
    lifeIcon2.depth = asteroid.depth;
    lifeIcon2.depth += 1;
    lifeIcon3.depth = asteroid.depth;
    lifeIcon3.depth += 1;
    //asteroid.debug = true;
    asteroid.setCollider("circle", 0, 0, 230);
    asteroidsGroup.add(asteroid);
  }
}

function spawnCOINS(){
  if(frameCount % 75 === 0){
    let coins = createSprite(500, 150);
    coins.rotation = Math.round(random(90, 270));
    coins.addImage(coinsImg);
    coins.scale = canW/18000;
    coins.velocityY = Math.round(random((4 + TimeWorld * 2/100), (7 + TimeWorld * 2/100)));
    if(coins.y > canH.lenght + 10) {
      coins.destroy();
    }
    coins.y = 0;
    coins.x = Math.round(random(canW));
    rocket.depth = coins.depth;
    rocket.depth += 1;
    coinsGroup.add(coins);
  }
}

function spawnPOWERS(){
  if(frameCount % 400 === 0){
    let powerUp = createSprite(500, 150, 10, 10);
    powerUp.addImage(powerImg);
    powerUp.scale = 0.12;
    powerUp.velocityX = Math.round(random(-(4 + TimeWorld * 2/100), -(7 + TimeWorld * 2/100)));
    powerUp.lifetime = canW/powerUp.velocityX;
    powerUp.y = Math.round(random(canH-1, canH-663));
    powerUp.x = canW;
    rocket.depth = powerUp.depth;
    rocket.depth += 1;
    //powerUp.debug = true;
    powerGroup.add(powerUp);
  }
}

function spawnDELAYS(){
  if(frameCount % 750 === 0){
    let delay = createSprite(500, 150, 10, 10);
    delay.addImage(delayImg);
    delay.scale = 0.15;
    delay.velocityX = Math.round(random(-(4 + TimeWorld * 2/100), -(7 + TimeWorld * 2/100)));
    delay.lifetime = canW/delay.velocityX;
    delay.y = Math.round(random(canH-1, canH-663));
    delay.x = canW;
    rocket.depth = delay.depth;
    rocket.depth += 1;
    //delay.debug = true;
    delayGroup.add(delay);
  }
}

function spawnLIFESUP(){
  if(frameCount % 200 === 0){
    let lifeUp = createSprite(500, 150, 10, 10);
    lifeUp.addImage(lifeUpImg);
    lifeUp.scale = 0.12;
    lifeUp.velocityX = Math.round(random(-(4 + TimeWorld * 2/100), -(7 + TimeWorld * 2/100)));
    lifeUp.lifetime = canW/lifeUp.velocityX;
    lifeUp.y = Math.round(random(canH-1, canH-663));
    lifeUp.x = canW;
    rocket.depth = lifeUp.depth;
    rocket.depth += 1;
    //lifeUp.debug = true;
    lifeUpGroup.add(lifeUp);
  }
}

function laser1x() {
  let bala1 = createSprite(rocket.x, rocket.y + 50, canW/100, canH/20);
  bala1.shapeColor = "yellow";
  bala1.velocityY =- 30;
  //bala1.lifetime = bala1.velocityX / canW;
  //bala1.x = rocket.x;
  //bala1.y = rocket.y + 50;
  rocket.depth = bala1.depth;
  rocket.depth += 1;
  lasersX1Group.add(bala1);
}

function laser2x() {
  let bala2 = createSprite(200, 200, 18.1, 3.6);
  bala2.shapeColor = "yellow";
  bala2.velocityX = + 10;
  bala2.lifetime = bala2.velocityX / canW;
  bala2.x = rocket.x + 19;
  bala2.y = rocket.y + 11;
  bala2.depth = rocket.depth;
  bala2.depth += 1;
  lasersX2Group.add(bala2);
  let bala3 = createSprite(200, 200, 18.1, 3.6);
  bala3.shapeColor = "yellow";
  bala3.velocityX = + 10;
  bala3.lifetime = bala3.velocityX / canW;
  bala3.x = rocket.x + 19;
  bala3.y = rocket.y - 11;
  bala3.depth = rocket.depth;
  bala3.depth += 1;
  lasersX2Group.add(bala3);
}

function laser4x(){
  let bala4 = createSprite(200, 200, 18.1, 3.6);
  bala4.shapeColor = "yellow";
  bala4.velocityX = + 10;
  bala4.lifetime = bala4.velocityX / canW;
  bala4.x = rocket.x + 19;
  bala4.y = rocket.y + 11;
  bala4.depth = rocket.depth;
  bala4.depth += 1;
  lasersX4Group.add(bala4);
  let bala5 = createSprite(200, 200, 18.1, 3.6);
  bala5.shapeColor = "yellow";
  bala5.velocityX = + 10;
  bala5.lifetime = bala5.velocityX / canW;
  bala5.x = rocket.x + 19;
  bala5.y = rocket.y - 11;
  bala5.depth = rocket.depth;
  bala5.depth += 1;
  lasersX4Group.add(bala5);
  let bala6 = createSprite(200, 200, 18.1, 3.6);
  bala6.shapeColor = "yellow";
  bala6.velocityX = + 10;
  bala6.lifetime = bala6.velocityX / canW;
  bala6.x = rocket.x + 19;
  bala6.y = rocket.y + 16;
  bala6.depth = rocket.depth;
  bala6.depth += 1;
  lasersX4Group.add(bala6);
  let bala7 = createSprite(200, 200, 18.1, 3.6);
  bala7.shapeColor = "yellow";
  bala7.velocityX = + 10;
  bala7.lifetime = bala7.velocityX / canW;
  bala7.x = rocket.x + 19;
  bala7.y = rocket.y - 16;
  bala7.depth = rocket.depth;
  bala7.depth += 1;
  lasersX4Group.add(bala7);
}

function laser8x(){
  let bala8 = createSprite(200, 200, 18.1, 3.6);
  bala8.shapeColor = "cyan";
  bala8.velocityX = + 10;
  bala8.lifetime = bala8.velocityX / canW;
  bala8.x = rocket.x + 19;
  bala8.y = rocket.y + 11;
  bala8.depth = rocket.depth;
  bala8.depth += 1;
  lasersX8Group.add(bala8);
  let bala9 = createSprite(200, 200, 18.1, 3.6);
  bala9.shapeColor = "cyan";
  bala9.velocityX = + 10;
  bala9.lifetime = bala9.velocityX / canW;
  bala9.x = rocket.x + 19;
  bala9.y = rocket.y - 11;
  bala9.depth = rocket.depth;
  bala9.depth += 1;
  lasersX8Group.add(bala9);
  let bala10 = createSprite(200, 200, 18.1, 3.6);
  bala10.shapeColor = "cyan";
  bala10.velocityX = + 10;
  bala10.lifetime = bala10.velocityX / canW;
  bala10.x = rocket.x + 19;
  bala10.y = rocket.y + 16;
  bala10.depth = rocket.depth;
  bala10.depth += 1;
  lasersX8Group.add(bala10);
  let bala11 = createSprite(200, 200, 18.1, 3.6);
  bala11.shapeColor = "cyan";
  bala11.velocityX = + 10;
  bala11.lifetime = bala11.velocityX / canW;
  bala11.x = rocket.x + 19;
  bala11.y = rocket.y - 16;
  bala11.depth = rocket.depth;
  bala11.depth += 1;
  lasersX8Group.add(bala11);
}

function destroyasteroid(laser, asteroid) {
  laser.destroy();
  asteroidLife = asteroidLife - 1;
  if(asteroidLife < 0){ 
    destroySound.play();
    asteroid.remove();
    asteroidLife = 3;
    score = score + 5;
    TimeWorld = TimeWorld + 0.5;
    //asteroid.addImage(asteroidDestroyedImg);
  } 
}

function destroyCoin(coin){
  coin.remove();
  coinSound.play();
  coins = coins + 1;
}

function destroyDelay(delay){
  delay.remove();
  delaySound.play();
  TimeWorld = 0;
}

function destroyLifeUp(lifesUp){
  lifesUp.remove();
  lifeUpSound.play();
  lifes = lifes + 1;
  if(lifes > 6){
    lifes = lifes - 1;
  }
}

function destroyPowerUp(powersUp){
  powersUp.remove();
  powerUpSound.play();
}

function reset(){
  lasersX1Group.destroyEach();
  lasersX2Group.destroyEach();
  lasersX4Group.destroyEach();
  lasersX8Group.destroyEach();
  starsGroup.destroyEach();
  asteroidsGroup.destroyEach();
  coinsGroup.destroyEach();
  powerGroup.destroyEach();
  delayGroup.destroyEach();
  lifeUpGroup.destroyEach();
  //rocket.addImage(rocketImg);
  rocket.scale = 0.25;
  gameState = 2;
  restartBotton.visible = false;
  gun = 0;
}

function base(){
  rocket.visible = true;
  spawnSTARS1();
  spawnSTARS2();
  spawnCOINS();
  spawnPOWERS();
  spawnDELAYS();
  spawnLIFESUP();
  lifesIcons();
  gunsXP();
  coinIcon.visible = true;
  if(cambio === 1){
    laserAutomatic();
  }
  if(keyDown("W")){
    rocket.y = rocket.y - 10;
  }
  if(keyDown("S")){
    rocket.y = rocket.y + 10;
  }
  if(keyDown("A")){
    rocket.x = rocket.x - 10;
  }
  if(keyDown("D")){
    rocket.x = rocket.x + 10;
  }
  if(keyDown("UP")){
    rocket.y = rocket.y - 10;
  }
  if(keyDown("DOWN")){
    rocket.y = rocket.y + 10;
  }
  if(keyDown("LEFT")){
    rocket.x = rocket.x - 10;
  }
  if(keyDown("RIGHT")){
    rocket.x = rocket.x + 10;
  }
  textSize(36);
  fill("white");
  text("x" +coins, canW/2+595, canH/2-282);
  textSize(47);
  fill("red");
  text("SCORE: ", canW/2-115, canH/2-290);
  fill("white");
  text(" " +score, canW/2+60, canH/2-290);
  if(gameState == 2){
    coinsGroup.bounceOff(rocket,destroyCoin);
  }
  delayGroup.bounceOff(rocket,destroyDelay);
  lifeUpGroup.bounceOff(rocket,destroyLifeUp);
}

function gunsXP(){
  if(rocket.isTouching(powerGroup) && gun == 0){
    powerGroup.bounceOff(rocket, destroyPowerUp);
    gun = 1;
  }
  if(rocket.isTouching(powerGroup) && gun == 1){
    powerGroup.bounceOff(rocket, destroyPowerUp);
    gun = 2;
  }
  if(rocket.isTouching(powerGroup) && gun == 2){
    powerGroup.bounceOff(rocket, destroyPowerUp);
    gun = 3;
  }
  if(rocket.isTouching(powerGroup) && gun == 3){
    powerGroup.bounceOff(rocket, destroyPowerUp);
  }
}

function laserAutomatic(){
  gunsXP();
  if(frameCount % 7 === 0){
    if(gun == 0) {
      laser1x();
    }
    if(gun == 1) {
      laser2x();
    }
    if(gun == 2) {
      laser4x();
    }
    if(gun == 3) {
      laser8x();
    }
  }
}

function lifesIcons(){
  if(lifes == 1){
    lifeIcon1.visible = true;
    lifeIcon2.visible = false;
  }
  if(lifes == 2){
    lifeIcon1.visible = true;
    lifeIcon2.visible = true;
    lifeIcon3.visible = false;
  }
  if(lifes >= 3){
    lifeIcon1.visible = true;
    lifeIcon2.visible = true;
    lifeIcon3.visible = true;
  }
  if(lifes == 4){
    lifeIcon1.addImage(lifeIcon2xImg);
  } else {lifeIcon1.addImage(lifeIconImg)}
  if(lifes == 5){
    lifeIcon1.addImage(lifeIcon2xImg);
    lifeIcon2.addImage(lifeIcon2xImg);
  } else {lifeIcon2.addImage(lifeIconImg)}
  if(lifes == 6){
    lifeIcon1.addImage(lifeIcon2xImg);
    lifeIcon2.addImage(lifeIcon2xImg);
    lifeIcon3.addImage(lifeIcon2xImg);
  } else {lifeIcon3.addImage(lifeIconImg)}
}

function iconsRemove(){
  lifeIcon1.visible = false;
  lifeIcon2.visible = false;
  lifeIcon3.visible = false;
  coinIcon.visible = false;
}


function quit(){
  lasersX1Group.destroyEach();
  lasersX2Group.destroyEach();
  lasersX4Group.destroyEach();
  lasersX8Group.destroyEach();
  starsGroup.destroyEach();
  asteroidsGroup.destroyEach();
  coinsGroup.destroyEach();
  powerGroup.destroyEach();
  delayGroup.destroyEach();
  lifeUpGroup.destroyEach();
  //rocket.addImage(rocketImg);
  rocket.scale = 0.25;
  rocket.x = canW/2-750;
  rocket.y = canH/2;
  rocket.velocityX = 0;
  quitBotton.visible = false;
  gameState = 0;
  lifes = 3;
  score = 0;
  TimeWorld = 0;
  frameCount = 0;
  gun = 0;
}

function keyPressed() {
  if(cambio === 2 && gameState === 1.1) {
    if(keyCode === 32 && gun == 0){
      laser1x();
    }
    if(keyCode === 32 && gun == 1){
      laser2x();
    }
    if(keyCode === 32 && gun == 2){
      laser4x();
    }
    if(keyCode === 32 && gun == 3){
      laser8x();
    }
  }
}

function playGameSetup() {
  gameState = 1;
  RBAThemeSound.stop();
  TimeWorld = 0;
  frameCount = 0;
  title.visible = false;
  playButton.hide();
  optionsButton.hide();
}

function optionsSetup() {
  gameState = 0.1;
  title.visible = false;
  playButton.hide();
  optionsButton.hide();
  overButton.show();
}

function overSetup() {
  gameState = 0.2;
  overButton.hide();
}

function automaticSetup() {
  gameState = 0;
  cambio = 1;
  playButton.show();
  optionsButton.show();
  automaticButton.hide();
  manualButton.hide();
  backButton.hide();
}

function manualSetup() {
  gameState = 0;
  cambio = 2;
  playButton.show();
  optionsButton.show();
  automaticButton.hide();
  manualButton.hide();
  backButton.hide();
}

function backSetup() {
  if(gameState == 0.1) {
    overButton.hide();
    backButton.hide();
    playButton.show();
    optionsButton.show();
    gameState = 0;
  }
  if(gameState == 0.2) {
    automaticButton.hide();
    manualButton.hide();
    backButton.hide();
    overButton.show();
    gameState = 0.1;
  }
}

/////      CTRL + H  -  SUBSTITUIR    /////