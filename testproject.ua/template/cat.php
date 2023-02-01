<?php
/**
 * category page template
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title><?php echo $cat['title'] ?></title>
</head>
<body>
<header>
<?php
//echo '<pre>';
//print_r($result);
$out = '';
$out .='<div>';
$out .='<h1>Category: '.$cat['title'].'</h1>';
$out .='<p>'.$cat['description'].'</p>';
$out .='</div>';
echo $out;
?>
</header>
<?php
//
$out = '';
echo '<div class="wrapper-article">';
for ($i = 0; $i < count($result); $i++) {
    $out .='<div class="article">';
    $out .='<h4>'.$result[$i]['title'].'</h4>';
    $out .='<p>'.$result[$i]['descr_min'].'</p>';
    $out .='<a href="/article/'.$result[$i]['url'].'"><img src="/static/images/'.$result[$i]['image'].'" width=200></a>';
    $out .= '<div><a class="ancor" href="/article/'.$result[$i]['url'].'">Докладніше</a><div>';
    $out .='</div>';
}
$out .='<div><a class="ancor" href="/">Назад</a></div>';
echo $out;
echo '</div>';
?>
<footer>
    <div>&#169; 2022 Oleksandr Shepelenko</div>
</footer>
</body>
</html>