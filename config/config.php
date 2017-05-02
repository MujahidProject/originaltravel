<?php 

$base_url = "http://localhost/originaltravel/"
$title = "mujahid";





function base_url(){
	global $base_url;
	if(!empty($base_url)){
		return $base_url;
	}else{
		$base_url= "";
		return $base_url;
	}
}

function page_title(){
	global $title;
	if(!empty($title)){
		return $title;
	}else{
		$title = 'Default';
		return $title;
	}
}


?>