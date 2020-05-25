<?php
$result = Product::get();
foreach($result as $key => $obj) {
    $result[$key]["id"] = intval($result[$key]["id"]);
    $result[$key]["price"] = floatval($result[$key]["price"]);
}

echo json_encode($result);