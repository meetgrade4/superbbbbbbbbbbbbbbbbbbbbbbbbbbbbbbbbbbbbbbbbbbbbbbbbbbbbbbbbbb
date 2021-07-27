var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 100;
player_y = 100;
var player = "";
var object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player = Img;
        player.scaleToWidth(140);
        player.scaleToHeight(140);
        player.set({
            top :player_y,
            left :player_x
        });
        canvas.add(player);
    });
}
player_update();

function new_image(x) {
    fabric.Image.fromURL(x, function(img){
        object = img;
        object.scaleToWidth(block_image_width);
        object.scaleToHeight(block_image_height);
        object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(object);
    });  
}