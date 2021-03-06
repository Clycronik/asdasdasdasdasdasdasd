var ball;
var position,database,hball;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    hball = createSprite(250,250,10,10);
    hball.shapeColor = "red";
    var hballposition = database.ref('ball/position');
    hballposition.on("value",readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();

    
}
function readPosition(data){
    position = data.val();
    hball.x = position.x;
    hball.y = position.y;
}
function showError(){
    console.log("error");
}
function changePosition(x,y){
    database.ref('ball/position').set({
'x': position.x + x,
'y': position.y + y
    })
}
