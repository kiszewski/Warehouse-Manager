<?php
$json = file_get_contents('php://input');   

$array = json_decode($json);
$result = Product::update($array, $param);

echo json_encode($result);