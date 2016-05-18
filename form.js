// JavaScript Document

// Make checkbox into switch
$("[type='checkbox']").bootstrapSwitch();

 
// Change Progress Bar
function pro_bar(percent){
	document.getElementById("progress_bar").style.width = percent + "%";}

var input_name = document.getElementById("name");
var input_alt_name = document.getElementById("alt_name");
var input_mailing_address = document.getElementById("mailing_address");
var input_phone_number = document.getElementById("phone_number");
var has_name = 0;
var has_alt_name = 0;
var has_address = 0;
var has_phone_number = 0;

var progress = 1 + 24 * has_name + 25 * has_alt_name + 25 * has_address + 25 * has_phone_number;




// Name
input_name.addEventListener("focus", function() {
	document.getElementById("name").style.borderColor = "#ffffff";
	});
	

input_name.addEventListener("blur", function() {
	if (input_name.value != ""){
		has_name = 1;
		document.getElementById("name").style.borderColor = "#ffffff";
		}
	else{
		has_name = 0;
		document.getElementById("name").style.borderColor = "#ff0000";
		}
		
	progress = 1 + 24 * has_name + 25 * has_alt_name + 25 * has_address + 25 * has_phone_number;
	pro_bar(progress);	
});

		
		
		
// Alt Name
input_alt_name.addEventListener("focus", function() {
	document.getElementById("alt_name").style.backgroundColor = "#ffffff";
	});
	

input_alt_name.addEventListener("blur", function() {
	if (input_alt_name.value != ""){
		has_alt_name = 1;
		document.getElementById("alt_name").style.backgroundColor = "#ffffff";
		}
	else{
		has_alt_name = 0;
		document.getElementById("alt_name").style.backgroundColor = "#ff0000";
		}
	progress = 1 + 24 * has_name + 25 * has_alt_name + 25 * has_address + 25 * has_phone_number;
	pro_bar(progress);	
});

// Switch

$('.BSswitch').bootstrapSwitch('state', false);
$('#anonymous_switch').on('switchChange.bootstrapSwitch', function () {
	if ($('#anonymous_switch').bootstrapSwitch('state')){
		document.getElementById("alt_name").disabled = true;
		has_alt_name = 1;
		document.getElementById("alt_name").style.backgroundColor = "#d1d1d1";
	}
	else{
		document.getElementById("alt_name").disabled = false;
		
		if (input_alt_name.value != ""){
			has_alt_name = 1;
			document.getElementById("alt_name").style.backgroundColor = "#ffffff";
		}
		else{
			has_alt_name = 0;
			document.getElementById("alt_name").style.backgroundColor = "#ff0000";
		}
	}
	progress = 1 + 24 * has_name + 25 * has_alt_name + 25 * has_address + 25 * has_phone_number;
	pro_bar(progress);
});


// Mailing Address
input_mailing_address.addEventListener("focus", function() {
	document.getElementById("mailing_address").style.backgroundColor = "#ffffff";
	});
	

input_mailing_address.addEventListener("blur", function() {
	if (input_mailing_address.value != ""){
		has_address = 1;
		document.getElementById("mailing_address").style.backgroundColor = "#ffffff";
		}
	else{
		has_address = 0;
		document.getElementById("mailing_address").style.backgroundColor = "#ff0000";
		}
	progress = 1 + 24 * has_name + 25 * has_alt_name + 25 * has_address + 25 * has_phone_number;
	pro_bar(progress);	
});

// Mailing Address
input_phone_number.addEventListener("focus", function() {
	document.getElementById("phone_number").style.backgroundColor = "#ffffff";
	});
	

input_phone_number.addEventListener("blur", function() {
	if (input_phone_number.value != ""){
		has_phone_number = 1;
		document.getElementById("phone_number").style.backgroundColor = "#ffffff";
		}
	else{
		phone_number = 0;
		document.getElementById("phone_number").style.backgroundColor = "#ff0000";
		}
	progress = 1 + 24 * has_name + 25 * has_alt_name + 25 * has_address + 25 * has_phone_number;
	pro_bar(progress);	
});

