<?php
class Warehouse extends Model {
    protected static $tableName = 'warehouses';
    protected static $columns = [
        'id', 'name', 'cep', 'location', 'image_url' 
    ]; 
}