<?php
/**
 * register page template
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Реєстрація</title>
</head>
<body>
    <div class="login-form">
        <h2>Реєстрація</h2>
        <form method="post">
            <label for="login">Логін</label>
            <input type="text" name="login" required>
            <label for="password">Пароль</label>
            <input type="password" name="password" required>
            <input type="submit" name="submit" value="Реєстрація">

            <?php
                if(isset($_POST['submit'])){
                    $errors = [];
                    if(strlen($_POST['login'] < 4)){
                        $errors[] = 'Логін має бути більше 4 символів';
                    }
                    if(strlen(trim($_POST['password']) < 6)){
                        $errors[] = 'Пароль має бути більше 6 символів';
                    }
                    if(isLoginExist($_POST['login'])){
                        $errors[] = 'Логін вже зареєстрований';
                    }
                    if(count($errors) === 0){
                        createUser($_POST['login'], $_POST['password']);
                        header('Location: /login');
                        exit();
                    }else{
                        foreach($errors as $error){
                            echo $error."<br>";
                        }
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