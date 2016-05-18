// JavaScript For Text Billy.js is a bad name for a file but reminds me of Mika's Billy Brown so I'll leave it: https://www.youtube.com/watch?v=gX0AJbRjJRE
 

function type(string,element){
    (function writer(i){
      if(string.length <= i++){
        element.value = string;
        return;
      }
      element.value = string.substring(0,i);
      if( element.value[element.value.length-1] != " " )element.focus();
      var rand = Math.floor(Math.random() * (100)) + 140;
      setTimeout(function(){writer(i);},rand);
    })(0);
}





button = document.getElementById("billybutton");
button.addEventListener("click", function() {
	a = window.confirm("Are you sure you want to destroy the website?");
	if (a){
		document.getElementById("content").style.display="none";
		document.getElementById("ta").style.display="block";
  	 	var text = "Good work buddy :/ ... Want the website back? Well you can't :(. I couldn't figure out how to do that. So we are stuck here forever then. Sit back and enjoy the music I guess. No seriously this is it. I tried. We can't go back. Maybe try clicking refresh and be more careful next time. What you're here for an easter egg? Sorry you will have to work harder than that buddy. :)";
		var ta = document.getElementById("ta");
		type(text,ta);
		var vid = document.getElementById("myMusic");
		vid.volume = 0.20;
		vid.play();
		}});
				
// Please forgive me for the stolen audio (https://www.youtube.com/watch?v=mqWq_48LxWQ), Don't feel cheated, it's just not that simple, is like escaping when burred in Deroit. Be as you are and arrest me if you have to. Save your goodbye. I'm on top of the world and anyway I'll be gone in September. 

//Here is easter egg no 1: http://ditwebtsv.jcu.edu.au/~bro33/testing123/  		
	