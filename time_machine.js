// JavaScript Document



function remove_all(){
	document.getElementById("content_before_2007").style.display = 'none';
	document.getElementById("content_2007").style.display = 'none';
	document.getElementById("content_2008").style.display = 'none';
	document.getElementById("content_2009").style.display = 'none';
	document.getElementById("content_2010").style.display = 'none';
	document.getElementById("content_2011").style.display = 'none';
	document.getElementById("content_2012").style.display = 'none';
	document.getElementById("content_2013").style.display = 'none';
	document.getElementById("content_2014").style.display = 'none';
}

$(document).ready(function() {
	remove_all();
	document.getElementById("content_2014").style.display = 'block';    
});

$('.btn').click(function(){	
		var butt_id = this.name;
		var time = butt_id.substring(5);
		if (time){
		var content_id = "content_" + time;
		remove_all();
		document.getElementById(content_id).style.display = 'block';
		}
});