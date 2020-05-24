<?php

define('CONTROLLERS_PATH', realpath(dirname(__FILE__) . '/../controllers'));
define('MODELS_PATH', realpath(dirname(__FILE__) . '/../models'));

require_once(realpath(dirname(__FILE__) . '/database.php'));
require_once(realpath(MODELS_PATH . '/Model.php'));
require_once(realpath(MODELS_PATH . '/Product.php'));
require_once(realpath(MODELS_PATH . '/Warehouse.php'));