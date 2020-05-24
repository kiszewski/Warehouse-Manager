<?php

class Product extends Model {
    protected static $tableName = 'products';
    protected static $columns = ['id', 'name', 'price'];
}