<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

require_once(dirname(__FILE__, 2) . '/src/utils/config.php');

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);

$uri = explode('/', $uri);

if(count($uri) <= 2) {
    $folder = $uri[1];
    require_once(realpath(CONTROLLERS_PATH . "/{$folder}/{$folder}" . '.php'));
} elseif(count($uri) <= 3) {
    $folder = $uri[1];
    $id = $uri[2];
    require_once(realpath(CONTROLLERS_PATH . "/{$folder}/{$folder}" . '.php'));
} else {
    $folder = $uri[1];
    $file = $uri[2];
    $param = $uri[3];
    require_once(realpath(CONTROLLERS_PATH . "/{$folder}/{$file}" . '.php'));
}