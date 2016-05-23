// JavaScript Document

function remove_all_content(){
	"use strict";
	var person_id ="";
	var i;
    for (i = 1; i < 19; i++) {
		person_id =	"person_" + i;
		document.getElementById(person_id).style.display = 'none';		
	}
	
}

function remove_buttons(){
	"use strict";
	document.getElementById("life_members").style.display = 'none';
	document.getElementById("guests").style.display = 'none';
	var person_id = "";
	var i;
	for (i = 1; i < 19; i++) {
		person_id =	"butt_person_" + i;
		document.getElementById(person_id).style.backgroundColor ='#499DF5' ;		
	}
	
}

$(document).ready(function() {
	"use strict";
	remove_all_content();
	remove_buttons();
	document.getElementById("person_1").style.display = 'block';
	document.getElementById("butt_person_1").style.backgroundColor = '#4682B4';	
	document.getElementById("guests").style.display = 'block';
	document.getElementById("butt_life_members").style.backgroundColor = '#344152';
});

$('.btn').click(function(){	
		"use strict";
		var guest_id = "";
		var random_int;
		var person_id ="";
		var i;
		
		var butt_id = this.id;
		butt_id = butt_id.substring(5);
		if (butt_id.substring(0,6) === "person") {
			remove_all_content();
			for (i = 1; i < 19; i++) {
				person_id =	"butt_person_" + i;
				document.getElementById(person_id).style.backgroundColor ='#499DF5' ;
			}
			person_id = "butt_" + butt_id;
			document.getElementById(person_id).style.backgroundColor ='#4682B4';
			document.getElementById(butt_id).style.display = 'block';
		}
		else if(butt_id === "guest_lucky") {
			remove_all_content();
			random_int = Math.floor((Math.random() * 11) + 1);
			guest_id = "person_" + random_int;
			for (i = 1; i < 19; i++) {
				person_id =	"butt_person_" + i;
				document.getElementById(person_id).style.backgroundColor ='#499DF5' ;
			}
			person_id = "butt_" + guest_id;
			document.getElementById(person_id).style.backgroundColor ='#4682B4';
			document.getElementById(guest_id).style.display = 'block';			
		}
		else if(butt_id === "life_lucky") {
			remove_all_content();
			random_int = Math.floor((Math.random() * 7) + 12);
			guest_id = "person_" + random_int;
			for (i = 1; i < 19; i++) {
				person_id =	"butt_person_" + i;
				document.getElementById(person_id).style.backgroundColor ='#499DF5' ;
			}
			person_id = "butt_" + guest_id;
			document.getElementById(person_id).style.backgroundColor ='#4682B4';
			document.getElementById(guest_id).style.display = 'block';			
		}
		
		else if(butt_id === "life_members") {
			remove_all_content();
			remove_buttons();
			document.getElementById("butt_life_members").style.backgroundColor = '#499DF5';	
			document.getElementById("butt_guests").style.backgroundColor = '#344152';
			document.getElementById("life_members").style.display = 'block';
			document.getElementById("person_12").style.display = 'block';
			document.getElementById("butt_person_12").style.backgroundColor = '#4682B4';		
			document.getElementById("down_arrow").style.marginLeft = '74%';
		}
		
		else if(butt_id === "guests") {
			remove_all_content();
			remove_buttons();
			document.getElementById("butt_life_members").style.backgroundColor = '#344152';	
			document.getElementById("butt_guests").style.backgroundColor = '#499DF5';
			document.getElementById("guests").style.display = 'block';	
			document.getElementById("person_1").style.display = 'block';
			document.getElementById("butt_person_1").style.backgroundColor = '#4682B4';	
			document.getElementById("down_arrow").style.marginLeft = '24%';
			
		}
});