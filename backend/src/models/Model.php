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
        $resultJSON = [];
        $class = get_called_class();
        
        $sql = "SELECT ${columns} FROM "
        . static::$tableName;

        $conn = Database::conect();
        $result = $conn->query($sql);
        $conn->close();

        if($result) {
            while ($row = $result->fetch_assoc()) {
                $resultJSON[] = $row;
            }
        }
        return $resultJSON;
    }
}