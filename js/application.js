// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "Tiles/2.jpg",
        "Tiles/4.jpg",
        "Tiles/8.jpg",
        "Tiles/16.jpg",
        "Tiles/32.jpg",
        "Tiles/64.jpg",
        "Tiles/128.jpg",
        "Tiles/256.jpg",
        "Tiles/512.jpg",
        "Tiles/1024.jpg",
        "Tiles/2048.jpg",
        "Tiles/4096.jpg"
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
