<?php 

function page_title(){
	global $config;
	if(!empty($config['title'])){
		return $config['title'];
	}else{
		$config['title']= "Default";
		return $config['title'];
	}
}


?>