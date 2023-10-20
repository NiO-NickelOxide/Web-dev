//alert("testing: 1,2,3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("I got clicked!");
        var buttonInnerHTML = this.innerHTML; //key that was pressed.

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });

    document.addEventListener("keypress", function(event) {
        makeSound(event.key); //calls function on key that was pressed and tells the program which key was pressed.
        buttonAnimation(event.key);
    });

    //Detecting keyboard press and producing appropriate sounds.
    function makeSound (key) {
        switch (key) {
            case "w":
                var tom1 = new Audio ("./sounds/tom-1.mp3")
                tom1.play();
             break;

             case "a":
                var tom2 = new Audio ("./sounds/tom-2.mp3")
                tom2.play();
             break;

             case "s":
                var tom3 = new Audio ("./sounds/tom-3.mp3")
                tom3.play();
             break;

             case "d":
                var tom4 = new Audio ("./sounds/tom-4.mp3")
                tom4.play();
             break;

             case "j":
                var snare = new Audio ("./sounds/snare.mp3")
                snare.play();
             break;

             case "k":
                var crash = new Audio ("./sounds/crash.mp3")
                crash.play();
             break;

             case "l":
                var kickBass = new Audio ("./sounds/kick-bass.mp3")
                kickBass.play();
             break;


            default:console.log(buttonInnerHTML);
        }

    }

    function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey); //key that was pressed as a class for querySelector.
        activeButton.classList.add("pressed"); //Adds a shaded effect on pressed buttons.
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100)
    }
    
}

``
