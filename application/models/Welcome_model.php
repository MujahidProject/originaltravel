<?php


class Welcome_model extends CI_Model {
    
    public function insert_customer($data){
        $this->db->insert('customers',$data);
    }
    public function view_customers(){
        $this->db->select('*');
        $this->db->from('customers');
        $query = $this->db->get();
        $result = $query->result();
            return $result;
    }
    public function customer_row_count(){
          return $this->db->count_all("customers");
          
    }
    public function get_customers($limit,$start = 0){
        $query = $this->db->get('customers',$limit,$start);
        return $query->result();
    }
    
    
    
public function view_cus($limit,$start=0){
    $query = $this->db->get('customers',$limit,$start);
    return $query->result_array();
}
    public function cus_rows(){
     $query = $this->db->get('customers');
     return $query->num_rows();
        }
    
}
