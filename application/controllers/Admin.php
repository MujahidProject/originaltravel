<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Admin
 *
 * @author pain
 */
class Admin extends CI_Controller {

    public function __construct() {
        parent::__construct();
        if (empty($this->session->userdata('id'))) {
            redirect(base_url() . 'Login/');
        }
    }

    public function index() {
        $data['content'] = $this->load->view('admin/home_content', '', true);
        $this->load->view('admin/admin_master', $data);
    }

    public function logout($id) {
        if ($this->session->userdata('id') == $id) {
            $this->session->unset_userdata('id');
            $this->session->unset_userdata('name');
            redirect(base_url() . 'Login/');
        }
    }

}
