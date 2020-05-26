<?php
$json = file_get_contents('php://input');   

if ($json == "") {
    $result = Product::get();
    foreach ($result as $key => $obj) {
        $result[$key]["id"] = intval($result[$key]["id"]);
        $result[$key]["price"] = floatval($result[$key]["price"]);
    }

    echo json_encode($result);
} else {
    $array = json_decode($json, 1);
    $result = Product::insert($array);
}
