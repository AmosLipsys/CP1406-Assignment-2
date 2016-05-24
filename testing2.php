<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">


<head>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-switch.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

<link rel="stylesheet" href="css/smoothbox.css" type="text/css"/>
<link rel="stylesheet" href="mainstyle.css" type="text/css"/>
<title>Gallery</title>
<style type="text/css">

/* copy and paste the css here */
</style>
</head>
<body>

 <!-- NAVBAR
        ================================================== -->
        <div class="navbar-wrapper">
            <div class="container">

                <nav class="navbar navbar-inverse navbar-static-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button  class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="index.html"><img class="big_logo" src="photos/bro-logo2-withcaption.png"  alt="BRO Logo"/></a>
                            <a class="navbar-brand" href="index.html"><img class="small_logo" src="photos/bro-logo2-small-withcaption.png"  alt="BRO Logo"/></a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li><a href="index.html">Home <span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
                                <li><a href="want_a_ticket.html">Want a Ticket?</a></li>
                                <li><a href="become_a_patron.html">Become A Patron</a></li>

                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Want more Info?<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="hot_off_the_press.html">Hot off the Press</a></li>
                                        <li><a href="our_legacy.html">Our Legacy</a></li>
                                        <li><a href="honorary_members.html">Honorary Members</a></li>
                                        <li><a href="say_cheese.html">Say Cheese <span class="glyphicon glyphicon-camera" aria-hidden="true"></span></a></li>
                                    </ul>
                                </li>

                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Members Only<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="want_to_join.html">Want to Join?</a></li>
                                        <li><a href="staff_room.html">Staff Room</a></li>
                                        
                                        <li><a href="pdf/nqei-rules-2010.pdf">Rules and Regulations</a></li>
                                        <li><a href="pdf/BRO_Repertoire.pdf">Report </a></li>
                                    </ul>
                                </li>

                                <li><a href="contact_us.html">Contact Us <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>





<h1 class="title">Gallery</h1>

<?php
 /* function:  generates thumbnail */
function make_thumb($src,$dest,$desired_width) {
	/* read the source image */
	$source_image = imagecreatefromjpeg($src);
	$width = imagesx($source_image);
	$height = imagesy($source_image);
	/* find the "desired height" of this thumbnail, relative to the desired width  */
	$desired_height = floor($height*($desired_width/$width));
	/* create a new, "virtual" image */
	$virtual_image = imagecreatetruecolor($desired_width,$desired_height);
	/* copy source image at a resized size */
	imagecopyresized($virtual_image,$source_image,0,0,0,0,$desired_width,$desired_height,$width,$height);
	/* create the physical thumbnail image to its destination */
	imagejpeg($virtual_image,$dest);
}

/* function:  returns files from dir */
function get_files($images_dir,$exts = array('jpg')) {
	$files = array();
	if($handle = opendir($images_dir)) {
		while(false !== ($file = readdir($handle))) {
			$extension = strtolower(get_file_extension($file));
			if($extension && in_array($extension,$exts)) {
				$files[] = $file;
			}
		}
		closedir($handle);
	}
	return $files;
}

/* function:  returns a file's extension */
function get_file_extension($file_name) {
	return substr(strrchr($file_name,'.'),1);
}

/** settings **/
$images_dir = 'gallery_pics/slavonicswoon/';
$thumbs_dir = 'gallery_pics/slavonicswoon-thumbs/';
$thumbs_width = 200;
$images_per_row = 300;

?>

<div class="gallery_content">
<h2 class="sub-heading">Slavonic Swoon </h2>


<?php
/** generate photo gallery **/
$image_files = get_files($images_dir);
if(count($image_files)) {
	$index = 0;
	foreach($image_files as $index=>$file) {
		$index++;
		$thumbnail_image = $thumbs_dir.$file;
		if(!file_exists($thumbnail_image)) {
			$extension = get_file_extension($thumbnail_image);
			if($extension) {
				make_thumb($images_dir.$file,$thumbnail_image,$thumbs_width);
			}
		}
		echo '<a href="',$images_dir.$file,'" class="photo-link sb img-responsive" rel="gallery"><img src="',$thumbnail_image,'" /></a>';
		if($index % $images_per_row == 0) { echo '<div class="clear"></div>'; }
	}
	echo '<div class="clear"></div>';
}
else {
	echo '<p>There are no images in this gallery.</p>';
}



?>
<h2 class="sub-heading">Last Night of Proms </h2>
<?php
/** generate photo gallery **/
$thumbs_width = 200;
$images_per_row = 300;
$images_dir2 = 'gallery_pics/lastnightofproms/';
$thumbs_dir2 = 'gallery_pics/lastnightofproms-thumbs/';


$image_files = get_files($images_dir2);
if(count($image_files)) {
	$index = 0;
	foreach($image_files as $index=>$file) {
		$index++;
		$thumbnail_image = $thumbs_dir2.$file;
		if(!file_exists($thumbnail_image)) {
			$extension = get_file_extension($thumbnail_image);
			if($extension) {
				make_thumb($images_dir2.$file,$thumbnail_image,$thumbs_width);
			}
		}
		echo '<a href="',$images_dir2.$file,'" class="photo-link sb img-responsive" rel="gallery"><img src="',$thumbnail_image,'" /></a>';
		if($index % $images_per_row == 0) { echo '<div class="clear"></div>'; }
	}
	echo '<div class="clear"></div>';
}
else {
	echo '<p>There are no images in this gallery.</p>';
}

?>

<h2>Hot Summer Nights </h2>
<?php
/** generate photo gallery **/
$thumbs_width = 200;
$images_per_row = 300;
$images_dir2 = 'gallery_pics/hotsummernight2008/';
$thumbs_dir2 = 'gallery_pics/hotsummernight2008-thumbs/';


$image_files = get_files($images_dir2);
if(count($image_files)) {
	$index = 0;
	foreach($image_files as $index=>$file) {
		$index++;
		$thumbnail_image = $thumbs_dir2.$file;
		if(!file_exists($thumbnail_image)) {
			$extension = get_file_extension($thumbnail_image);
			if($extension) {
				make_thumb($images_dir2.$file,$thumbnail_image,$thumbs_width);
			}
		}
		echo '<a href="',$images_dir2.$file,'" class="photo-link sb img-responsive" rel="gallery"><img src="',$thumbnail_image,'" /></a>';
		if($index % $images_per_row == 0) { echo '<div class="clear"></div>'; }
	}
	echo '<div class="clear"></div>';
}
else {
	echo '<p>There are no images in this gallery.</p>';
}
?>



<script src="assets/js/vendor/jquery.min.js"></script>
<script type="text/javascript" src="js/smoothbox.jquery2.js"></script>
<script type="text/javascript" src="mootools.js"></script>
<script type="text/javascript" src="js/smoothbox.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="eagle.gallery/eagle.gallery.js"></script>
<link rel="stylesheet" href="eagle.gallery/eagle.gallery.css" type="text/css"/>
</body>
</html>



