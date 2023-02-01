<?php
/**
 * create page template
 */

 $action = "Додати";

 if(isset($_POST['submit'])){
    $title = trim($_POST['title']);
    $url = trim($_POST['url']);
    $descr_min = trim($_POST['descr_min']);
    $description = trim($_POST['description']);
    $cid = $_POST['cid'];

    move_uploaded_file($_FILES['image']['tmp_name'], 'static/images/'.$_FILES['image']['name']);
    $image = $_FILES['image']['name'];

    $create = createArticle($title, $url, $descr_min, $description, $cid, $image);

    if($create){
        header('Location: /admin');
    }else {
        setcookie("alert", "create error", time()+60*10);
    }
    if(isset($_COOKIE['alert'])){
        $alert = $_COOKIE['alert'];
        setcookie("alert", "", time()-60*10);
        unset($_COOKIE['alert']);
        echo $alert;
    }
 }
 else{
    $result = array(
        "title" => '',
        "url" => '',
        "descr_min" => '',
        "description" => '',
        "cid" => '',
        "image" => ''
    );
 }
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Додати</title>
</head>
<body>
<header>
    <h1>Додати</h1>
    <div class="wrapper-log"><a href="/admin">Назад</a></div>
</header>

<?php
    require_once '_form.php';
    ?>

<footer>
    <div>&#169; 2022 Oleksandr Shepelenko</div>
</footer>
</body>
</html>
