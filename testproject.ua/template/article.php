<?php
/**
 * article page template
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title><?php echo $result['title'] ?></title>
</head>
<body>
<header>
    <h1><?php echo $result['title'] ?></h1>
</header>
<?php
//echo '<pre>';
//print_r($result);
$out = '';
echo "<div class='wrapper-article'>";
$out .='<div class="article">';
// $out .='<h4>'.$result['title'].'</h4>';
$out .='<p>'.$result['descr_min'].'</p>';
$out .='<img src="/static/images/'.$result['image'].'">';
$out .='<p>'.$result['description'].'</p>';
$out .='<div><a class="ancor" href="/">Назад</a></div>';
$out .='</div>';
echo $out;
echo '</div>';
?>
<footer>
    <div>&#169; 2022 Oleksandr Shepelenko</div>
</footer>
</body>
</html>