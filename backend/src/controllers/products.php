<?php
$result = Product::get();
foreach($result as $key => $obj) {
    $result[$key]["id"] = intval($result[$key]["id"]);
    $result[$key]["price"] = floatval($result[$key]["price"]);
}

header('Content-Type: application/json');
echo json_encode($result);