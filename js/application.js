// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "Tiles/2.png",
        "Tiles/4.png",
        "Tiles/8.png",
        "Tiles/16.png",
        "Tiles/32.png",
        "Tiles/64.png",
        "Tiles/128.png",
        "Tiles/256.png",
        "Tiles/512.png",
        "Tiles/1024.png",
        "Tiles/2056.png",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
