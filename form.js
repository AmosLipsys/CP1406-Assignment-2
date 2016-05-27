// JavaScript Document

 
// Change Progress Bar
function pro_bar(percent){
	"use strict";
	document.getElementById("progress_bar").style.width = percent + "%";
	if (percent === 100){
		document.getElementById("submit").style.backgroundColor = "#4CAF50";
	}
	if (percent || 100){
		document.getElementById("submit").style.backgroundColor = "#008CBA";
	}
}

// Starting Variables
var input_name = document.getElementById("name");

var input_alt_name = document.getElementById("alt_name");
var input_mailing_address = document.getElementById("mailing_address");
var input_phone_number = document.getElementById("phone_number");
var input_amount = document.getElementById("amount");
var input_submit = document.getElementById("submit");
var input_back = document.getElementById("back");
var has_name = 0;
var has_alt_name = 0;
var has_address = 0;
var has_phone_number = 0;
var has_amount = 0;
var has_payment = 0;

// Set Progress Bar
var progress = 1 + 24 * has_name + 15 * has_alt_name + 15 * has_address + 15 * has_phone_number + 15 * has_amount + has_payment * 15 ;


// Name
input_name.addEventListener("focus", function() {
	"use strict";
	document.getElementById("name").style.borderColor = "#ffffff";
	});
	

input_name.addEventListener("blur", function() {
	"use strict";
	if (input_name.value !== ""){
		has_name = 1;
		document.getElementById("name").style.backgroundColor = "#ffffff";
		}
	else{
		has_name = 0;
		document.getElementById("name").style.backgroundColor = "#ff0000";
		}
		
	progress = 1 + 24 * has_name + 15 * has_alt_name + 15 * has_address + 15 * has_phone_number + 15 * has_amount + has_payment * 15 ;
	pro_bar(progress);	
});

		
		
		
// Alt Name
input_alt_name.addEventListener("focus", function() {
	"use strict";
	document.getElementById("alt_name").style.backgroundColor = "#ffffff";
	});
	

input_alt_name.addEventListener("blur", function() {
	"use strict";
	if (input_alt_name.value !== ""){
		has_alt_name = 1;
		document.getElementById("alt_name").style.backgroundColor = "#ffffff";
		}
	else{
		has_alt_name = 0;
		document.getElementById("alt_name").style.backgroundColor = "#ff0000";
		}
	progress = 1 + 24 * has_name + 15 * has_alt_name + 15 * has_address + 15 * has_phone_number + 15 * has_amount + has_payment * 15 ;
	pro_bar(progress);	
});



$('.BSswitch').bootstrapSwitch('state', false);
$('#anonymous_switch').on('switchChange.bootstrapSwitch', function () {
	"use strict";
	if ($('#anonymous_switch').bootstrapSwitch('state')){
		document.getElementById("alt_name").disabled = true;
		has_alt_name = 1;
		document.getElementById("alt_name").style.backgroundColor = "#d1d1d1";
	}
	else{
		document.getElementById("alt_name").disabled = false;
		if (input_alt_name.value !== ""){
			has_alt_name = 1;
			document.getElementById("alt_name").style.backgroundColor = "#ffffff";
		}
		else{
			has_alt_name = 0;
			document.getElementById("alt_name").style.backgroundColor = "#ff0000";
		}
	}
	progress = 1 + 24 * has_name + 15 * has_alt_name + 15 * has_address + 15 * has_phone_number + 15 * has_amount + has_payment * 15 ;
	pro_bar(progress);
});


// Mailing Address
input_mailing_address.addEventListener("focus", function() {
	"use strict";
	document.getElementById("mailing_address").style.backgroundColor = "#ffffff";
	});
	

input_mailing_address.addEventListener("blur", function() {
	"use strict";
	if (input_mailing_address.value !== ""){
		has_address = 1;
		document.getElementById("mailing_address").style.backgroundColor = "#ffffff";
		}
	else{
		has_address = 0;
		document.getElementById("mailing_address").style.backgroundColor = "#ff0000";
		}
	progress = 1 + 24 * has_name + 15 * has_alt_name + 15 * has_address + 15 * has_phone_number + 15 * has_amount + has_payment * 15 ;
	pro_bar(progress);	
});

// Phone Number
input_phone_number.addEventListener("focus", function() {
	"use strict";
	document.getElementById("phone_number").style.backgroundColor = "#ffffff";
	});
	

input_phone_number.addEventListener("blur", function() {
	"use strict";
	if (input_phone_number.value.length >= 6){
		has_phone_number = 1;
		document.getElementById("phone_number").style.backgroundColor = "#ffffff";
		}
	else{
		has_phone_number = 0;
		document.getElementById("phone_number").style.backgroundColor = "#ff0000";
		}
	progress = 1 + 24 * has_name + 15 * has_alt_name + 15 * has_address + 15 * has_phone_number + 15 * has_amount + has_payment * 15 ;
	pro_bar(progress);	
});

//Amount


input_amount.addEventListener("focus", function() {
	"use strict";
	document.getElementById("amount").style.backgroundColor = "#ffffff";
	});
	

input_amount.addEventListener("blur", function() {
	"use strict";
	if (input_amount.value !== ""){
		has_amount = 1;
		document.getElementById("amount").style.backgroundColor = "#ffffff";
		}
	else{
		has_amount = 0;
		document.getElementById("amount").style.backgroundColor = "#ff0000";
		}
	progress = 1 + 24 * has_name + 15 * has_alt_name + 15 * has_address + 15 * has_phone_number + 15 * has_amount + has_payment * 15 ;
	pro_bar(progress);	
});

$('input:radio').on('click', function(){
	"use strict";
	has_payment = 1;
	progress = 1 + 24 * has_name + 15 * has_alt_name + 15 * has_address + 15 * has_phone_number + 15 * has_amount + has_payment * 15 ;
	pro_bar(progress);
});

input_submit.addEventListener("click", function() {
	"use strict";
	if (progress === 100){	
	window.location.href = "bene_form_finished.html";
	}
	else{
		var fail_string = "Sorry you are missing some information can you please:\n";
		if (! has_name){
			fail_string = fail_string + "\nInclude a name";
			input_name.focus();
		}
		if (! has_alt_name){
			fail_string = fail_string + "\nInclude an alternate name or type &quotanonymous&quot to remain anonymous";
			input_alt_name.focus();
		}
		if (! has_address){
			fail_string = fail_string + "\nInclude a Mailing Address";
			input_mailing_address.focus();
		}
		if (! has_phone_number){
			fail_string = fail_string + "\nInclude a Phone Number";
			input_phone_number.focus();
		}
		if (! has_amount){
			fail_string = fail_string + "\nInclude an Amount you are willing to give";
			input_amount.focus();
		}
		if (! has_payment){
			fail_string = fail_string + "\nInclude a Payment Method";
		}
		fail_string = fail_string + "\n\n Don't worry, you are " + progress + "% your way there. ";
		
		
		
		alert(fail_string);
	}
	});

input_back.addEventListener("click", function(){
	"use strict";
	window.location.href = "become_a_patron.html";
});
