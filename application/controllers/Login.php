<?php

class Login extends CI_Controller {

    public function __construct() {
        parent::__construct();
        if (!empty($this->session->userdata('name'))) {
            redirect(base_url() . 'Admin/');
        }
        $this->load->model('Login_model');
    }

    public function index() {
        $this->load->view('admin/login.php');
    }

    public function login() {
        $this->form_validation->set_rules('name', 'Name', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');
        unset($data);
        if ($this->form_validation->run() == false) {
            $this->session->set_userdata('login_notification', validation_errors());
            redirect(base_url() . 'Login/index');
        }
        $data['name'] = $this->input->post('name');
        $data['password'] = $this->input->post('password');
        if ($this->Login_model->validate_credentials($data) === true) {
            redirect(base_url() . 'Admin');
        } else {
            $sdata['login_notification'] = 'username or password is wrong';
            $this->session->set_userdata($sdata);
            redirect(base_url() . 'Login/index');
        }
    }

}
