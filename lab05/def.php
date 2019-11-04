<!DOCTYPE html>
<html lang = "en">
<head>
    <title>lab05</title>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet">
    <style>
        h1{
            text-align:center;
            font-family: 'Rigteous';
        }
    </style>

</head>
<body>
    <?php
    session_start();
    if(isset($_SESSION['views'])){
        $_SESSION['views']=$_SESSION['views']+1;
    }
    else{
        $_SESSION['views']=1;
    }
    echo"<h1>";
    echo"Page Views: ". $_SESSION['views'];
    echo"</h1>";
    echo "<table border=\"1\" align=\"center\">";
    $rows=$_POST['rows'];
    $columns=$_POST['columns'];
    for ($counter=1;$counter<=$rows;$counter+=1){
        echo"<tr><td>";
        echo"$counter</td>";
        for($counter2=2;$counter2<=$columns;$counter2+=1){
            echo"<td>";
            echo $counter2*$counter;
            echo"</td>";
        }            
    }


    ?>

</body>
</html>
