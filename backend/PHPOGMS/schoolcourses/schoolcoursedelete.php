<?php




/**
 * Delete one school course.
 */
require '../osms.dbconfig.php';

$sql = "delete
        from tbl_schoolcourse
        ";
if(empty($_GET['id'])==false) {
    if (is_numeric($_GET['id'])) {
        $id = (int)$_GET['id'];

        $sql .="where SchoolCourseID='$id'";
        //echo $sql ;
        if($result = mysqli_query($mysqli,$sql))
        {
            $deletenumber=mysqli_affected_rows($mysqli);
            if($deletenumber==1){
                echo json_encode(['data'=>'success']);
            }
            else{
                echo json_encode(['data'=>'fail']);
            }
        }
    }
    else {
        echo json_encode(['data'=>'fail']);
    }
}
else {
    echo json_encode(['data'=>'fail']);
}


