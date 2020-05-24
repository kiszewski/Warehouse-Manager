<?php

class Database {
    public static function conect() {
        $envPath = realpath(dirname(__FILE__) . '/../../env.ini');
        $env = parse_ini_file($envPath);
        $conexao = new mysqli($env['server'], $env['user'], $env['password'], $env['db']);

        if (!$conexao->connect_error) {
            return $conexao;
        } else {
            die('Error' . $conexao->connect_error);
        }
    }
}