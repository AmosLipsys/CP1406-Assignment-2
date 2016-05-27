// JavaScript For Easter Egg
 

function type(string,element){
	 "use strict";
    (function writer(i){
      if(string.length <= i++){
        element.value = string;
        return;
      }
      element.value = string.substring(0,i);
      if( element.value[element.value.length-1] !== " " )element.focus();
      var rand = Math.floor(Math.random() * (100)) + 140;
      setTimeout(function(){writer(i);},rand);
    })(0);
}

var button = document.getElementById("easter_egg_button");

button.addEventListener("click", function() {
	 "use strict";
	var a = window.confirm("Are you sure you want to destroy the website? Warning: There is playing music!");
	if (a){
		document.getElementById("content").style.display="none";
		document.getElementById("ta").style.display="block";
  	 	var text = "Hey you found an easter egg! Want the website back? Sorry, I couldn't figure out how to do that. So we are stuck here forever then. Sit back and enjoy the music I guess. Maybe try clicking refresh and be more careful next time :)";
		var ta = document.getElementById("ta");
		type(text,ta);
		var vid = document.getElementById("myMusic");
		vid.volume = 0.20;
		vid.play();
		}});
				

	