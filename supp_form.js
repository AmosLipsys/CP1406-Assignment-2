// JavaScript Document

// Make checkbox into switch
$("[type='checkbox']").bootstrapSwitch();
 
// Change Progress Bar
function pro_bar(percent){
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
var input_submit = document.getElementById("submit");
var input_back = document.getElementById("back");
var input_mailing_address = document.getElementById("mailing_address");
var input_amount = document.getElementById("amount");
var has_name = 0;
var has_address = 0;
var has_amount = 0;
var has_payment = 0;

// Set Progress Bar
var progress = 1 + 24 * has_name + 25 * has_address + 25 * has_amount + has_payment * 25;


// Name
input_name.addEventListener("focus", function() {
	document.getElementById("name").style.borderColor = "#ffffff";
	});
	

input_name.addEventListener("blur", function() {
	if (input_name.value != ""){
		has_name = 1;
		document.getElementById("name").style.backgroundColor = "#ffffff";
		}
	else{
		has_name = 0;
		document.getElementById("name").style.backgroundColor = "#ff0000";
		}
		
	progress = 1 + 24 * has_name + 25 * has_address + 25 * has_amount + has_payment * 25;
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
	progress = 1 + 24 * has_name + 25 * has_address + 25 * has_amount + has_payment * 25;
	pro_bar(progress);	
});

//Amount
input_amount.addEventListener("focus", function() {
	document.getElementById("amount").style.backgroundColor = "#ffffff";
	});
	

input_amount.addEventListener("blur", function() {
	if (input_amount.value != ""){
		has_amount = 1;
		document.getElementById("amount").style.backgroundColor = "#ffffff";
		}
	else{
		has_amount = 0;
		document.getElementById("amount").style.backgroundColor = "#ff0000";
		}
	progress = 1 + 24 * has_name + 25 * has_address + 25 * has_amount + has_payment * 25;
	pro_bar(progress);	
});


// Payment
$('input:radio').on('click', function(){
	has_payment = 1;
	progress = 1 + 24 * has_name + 25 * has_address + 25 * has_amount + has_payment * 25;
	pro_bar(progress);
});


// Submission 
input_submit.addEventListener("click", function() {
	if (progress == 100){	
	window.location.href = "supp_form_finished.html";
	}
	else{
		var fail_string = "Sorry you are missing some information can you please:\n";
		if (! has_name){
			fail_string = fail_string + "\nInclude a name";
			input_name.focus();
		}
		if (! has_address){
			fail_string = fail_string + "\nInclude a Mailing Address";
			input_mailing_address.focus();
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
	window.location.href = "become_a_patron.html";
});