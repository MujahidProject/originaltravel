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


function copyright(){
	global $config;
	if(!empty($config['copyright'])){
		return $config['copyright'];
	}else{
		$config['title']= "Default";
		return $config['copyright'];
	}
}


?>