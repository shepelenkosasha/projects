<form action="" method="post" enctype="multipart/form-data">
    <div class="create_update-form">
    <p>Заголовок: <input type="text" name="title" value="<?php echo $result['title'];?>"></p>
    <p>Посилання: <input type="text" name="url" value="<?php echo $result['url'];?>"></p>
    <p>Короткий опис: <textarea name="descr_min"><?php echo $result['title'];?></textarea></p>
    <p>Повний опис: <textarea name="description"><?php echo $result['title'];?></textarea></p>
    <p>Категорія:
        <select name="cid">
            <?php
            $out = '';
            for($i = 0; $i < count($category); $i++){
                if($category[$i]['id'] === $result['cid']){
                    $out .= '<option value="'.$category[$i]['id'].'" selected>'.$category[$i]['title']."</option>";
                }else{
                    $out .= '<option value="'.$category[$i]['id'].'">'.$category[$i]['title']."</option>";
                }
            }
            echo $out;
            ?>
        </select>
    </p>
    <p>Фото: <input type="file" name="image" value="<?php echo $result['image'];?>"></p>
    <?php
        if(isset($result['image']) AND $result['image'] !== ''){
            echo '<img src="/static/images/'.$result['image'].'" style="width:200px">';
        }
    ?>
    <p><input type="submit" value="<?php echo $action ?>" name="submit"></p>
    </div>
</form>