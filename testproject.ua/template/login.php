<?php
/**
 * login page template
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Логін</title>
</head>
<body>
<div class="login-form">
    <h2>Логін</h2>
    <form method="post">
        <label for="login">Логін</label>
        <input type="text" name="login" required>
        <label for="password">Пароль</label>
        <input type="password" name="password" required>
        <div><label for="ip">Зберегти IP</label>
        <input type="checkbox" name="ip"></div>
        <input type="submit" name="submit" value="Вхід">

        <?php
            if(isset($_POST['submit'])){
                $user = login($_POST['login'], $_POST['password']);
                if($user){
                    $user = $user[0];
                    $hash = md5(generateCode(10));
                    $ip = null;
                    if(!empty($_POST['ip'])){
                        $ip = $_SERVER['REMOTE_ADDR'];
                    }
                    updateUser($user['id'], $hash, $ip);
                    setcookie('id', $user['id'], time()+60*60*24*30, "/");
                    setcookie('hash', $hash, time()+60*60*24*30, "/");
                    header('Location: /admin');
                    exit();
                }else{
                    echo '<p class="error-message">Не правильно введений логін чи пароль</p>';
                }
            }
        ?>

    </form>
    <div class="ancor-block"><a class="ancor" href="/">Назад</a></div>
</div>
<footer>
    <div>&#169; 2022 Oleksandr Shepelenko</div>
</footer>
</body>
</html>