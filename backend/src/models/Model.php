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

    public static function get($id = null, $columns = '*') {
        $registries = [];
        
        $sql = "SELECT ${columns} FROM "
        . static::$tableName;

        if(isset($id)) {
            $sql .= " WHERE id = {$id}";
        }

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
            $conn->close();
            return $stmt->insert_id;
        } else {
            return $stmt->error;
        }
    }

    public static function update($array, $id) {
        $sql = "UPDATE products SET ";

        foreach($array as $key => $value) {
            if($key !== 'id') {
                $sql .= "$key = " . static::getFormatedValue($value) . ", ";
            } else {
                $id = $value;
            }
            $values[] = static::formatValues($value);
        }

        $sql[strlen($sql) - 2] = ' ';
        $sql .= "WHERE id = $id";

        $result = Database::sendQuery($sql);

        if($result) {
            return $result;
        } else {
            return $sql;
        }
    }

    public static function delete($id) {
        $sql = "DELETE FROM " . static::$tableName . "
        WHERE id = " . $id;

        $result = Database::sendQuery($sql);
        return $result;
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

    private static function getFormatedValue($value) {
        if(is_null($value)) {
            return "null";
        } elseif(is_string($value)) {
            return "'$value'";
        } else {
            return $value;
        }
    }
}