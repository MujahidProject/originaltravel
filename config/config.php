<?php 
$config = array();
$config['base_url'] = "http://localhost/originaltravel/";
$config['title'] = "originaltravel";
$config['copyright'] = "by smartUpWorld | 2017";

function base_url(){
	global $config;
	if(!empty($config['base_url'])){
		return $config['base_url'];
	}else{
		$config['base_url']= "";
		return $config['base_url'];
	}
}


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