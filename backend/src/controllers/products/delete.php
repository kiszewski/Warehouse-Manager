<?php 
$result = Product::delete($param);
echo json_decode($result);