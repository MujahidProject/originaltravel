<?php

class Home extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index() {
        $data['title'] = "Original Travel";
        $data['copyright'] = "smartupworld 2017";
        $data['content'] = $this->load->view('home_content', '', true);
        $this->load->view('home_master', $data);
    }

    public function destination() {
        $data['title'] = "Original Travel";
        $data['copyright'] = "smartupworld 2017";
        $data['content'] = $this->load->view('destination_content', '', true);
        $this->load->view('home_master', $data);
    }

    public function collections() {
        $data['title'] = "Original Travel";
        $data['copyright'] = "smartupworld 2017";
        $data['content'] = $this->load->view('collections_content', '', true);
        $this->load->view('home_master', $data);
    }

    public function about() {
        $data['title'] = "Original Travel";
        $data['copyright'] = "smartupworld 2017";
        $data['content'] = $this->load->view('about_content', '', true);
        $this->load->view('home_master', $data);
    }

}
