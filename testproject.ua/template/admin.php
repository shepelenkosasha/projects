<?php
/**
 * admin page template
 */
if(!getUser()){
    header('Location: /login');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Адмін панель</title>
</head>
<body>
<header>
    <h1>Адмін панель</h1>
    <div class="wrapper-log">
        <a href="/admin/create">Додати</a>
        <a href="/logout">Вийти</a>
    </div>
</header>
<?php
$out = '';
echo "<div class='wrapper-article-admin'>";
for ($i = 0; $i < count($result); $i++) {
    $out .='<div>';
    $out .='<p>'.$result[$i]['title'].'</p>';
    $out .='<img src="/static/images/'.$result[$i]['image'].'">';
    $out .= '<div class="wrapper-article-admin_ancor-wrap"><a class="ancor" href="/admin/delete/'.$result[$i]['id'].'" onclick="return confirm(\'Точно?\')">Видалити</a>';
    $out .= '<a class="ancor" href="/admin/update/'.$result[$i]['id'].'" onclick="return confirm(\'Точно?\')">Оновити</a></div>';
    $out .='</div>';
}
echo $out;
echo '</div>';
?>
<footer>
    <div>&#169; 2022 Oleksandr Shepelenko</div>
</footer>
</body>
</html>