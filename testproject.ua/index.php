<?php
require_once 'config/db.php';
require_once 'core/db_function.php';
require_once 'core/function.php';
$conn = connect();

$route = @$_GET['route'];// NULL!
$route = explodeURL($route);

// Сховати відображення помилок
set_error_handler(function($errno, $error){
    if (!str_starts_with($error, 'Undefined array key')){
        return false;  //default error handler.
    }
}, E_WARNING);

// main - головна сторінка
// cat - категорії
// article - стаття

switch ($route) {
    case ($route[0] == ''):
        $query = 'SELECT * FROM info';
        $result = select($query);
        require_once 'template/main.php';
        break;
    case ($route[0] == 'article' && isset($route[1])):
        $url = $route[1];
        $result = getArticle($url);
        require_once 'template/article.php';
        break;
    case ($route[0] == 'cat' && isset($route[1])):
        $url = $route[1];
        $cat = getCategory($url);// потрібна перевірка на пусту категорію
        $result = getCategoryArticle($cat['id']);
        require_once 'template/cat.php';
        break;
    case ($route[0] == 'register'):
        require_once 'template/register.php';
        break;
    case ($route[0] == 'login'):
        require_once 'template/login.php';
        break;
    case ($route[0] == 'admin' && $route[1] === 'delete' && isset($route[2]))://перевірка на числовий тип
        if(getUser()){
            $query = "DELETE FROM info WHERE id=".$route[2];
            execQuery($query);
            header("Location: /admin");
            exit;
        }
        header("Location: /");
        break;
    case ($route[0] == 'admin' && $route[1] === 'create'):
        if(getUser()){
            $query = "SELECT id, title FROM category";
            $category = select($query);
            require_once 'template/create.php';
        }
        break;
    case ($route[0] == 'admin' && $route[1] === 'update' && isset($route[2])):
        if(getUser()){
            $query = "SELECT id, title FROM category";
            $category = select($query);
            $query = "SELECT * FROM info WHERE id=".$route[2];
            $result = select($query)[0];
            require_once 'template/update.php';
        }
        break;
    case ($route[0] == 'admin'):
        $query = "SELECT * FROM info";
        $result = select($query);
        require_once 'template/admin.php';
        break;
    case ($route[0] == 'logout'):
        require_once 'template/logout.php';
        break;
    default:
       require_once 'template/404.php';
}
?>