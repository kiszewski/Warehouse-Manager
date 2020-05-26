<?php
class Model {
    protected static $tableName = '';
    protected static $columns = [];
    protected static $values = [];

    public function __construct($arr)
    {
        if($arr) {
            foreach($arr as $key => $value) {
                $this->$key = $value;
            }
        }
    }

    public function __get($key) {
        return $this->values[$key];
    }

    public function __set($key, $value) {
        $this->values[$key] = $value;
    }

    public static function get($columns = '*') {
        $registries = [];
        
        $sql = "SELECT ${columns} FROM "
        . static::$tableName;

        $conn = Database::conect();
        $result = $conn->query($sql);
        $conn->close();

        if($result) {
            while ($row = $result->fetch_assoc()) {
                $registries[] = $row;
            }
        }
        return $registries;
    }

    public static function insert($array) {
        $conn = Database::conect();

        $sql = "INSERT INTO " . static::$tableName . 
        " (name, price) VALUES (?, ?)";

        $stmt = $conn->prepare($sql);
        $params = static::formatValues($array);
        $stmt->bind_param('sd', ...$params);

        if ($stmt->execute()) {
            return $stmt;
        } else {
            return $stmt->error;
        }
    }

    private static function formatValues($array) {
        $values = [];
        foreach ($array as $value) {
            if (is_string($value)) {
                $values[] = "$value";
            } else {
                $values[] = $value;
            }
        }
        return $values;
    }
}