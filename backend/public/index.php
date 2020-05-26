<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
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
} else {

}