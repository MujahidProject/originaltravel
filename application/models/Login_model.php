<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of login_model
 *
 * @author pain
 */
class Login_model extends CI_Model {

    public function validate_credentials($data) {
        $this->db->select('*');
        $this->db->where($data);
        $handle = $this->db->get('admin');
        if (!empty($handle->row())) {
            $row = $handle->row();
            $sdata['name'] = $row->name;
            $sdata['id'] = $row->id;
            $this->session->set_userdata($sdata);
            return true;
        } else {
            return false;
        }
    }

}
