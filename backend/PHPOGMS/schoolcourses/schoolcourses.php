<?php




/**
 * Returns the list of school course.
 */
require '../osms.dbconfig.php';

$students = [];
$sql = "select SchoolCourseID,Subject,Course,CourseName,Credit,Prerequisites,Description
        from tbl_schoolcourse
        ";
if(empty($_GET['id'])==false) {
    if (is_numeric($_GET['id'])) {
        $id = (int)$_GET['id'];

        $sql .="where SchoolCourseID='$id'";
    }
}
if($result = mysqli_query($mysqli,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $students[$cr]['SchoolCourseID'] = $row['SchoolCourseID'];
        $students[$cr]['Subject'] = $row['Subject'];
        $students[$cr]['Course'] = $row['Course'];
        $students[$cr]['CourseName'] = $row['CourseName'];
        $students[$cr]['Credit'] = $row['Credit'];
        $students[$cr]['Prerequisites'] = $row['Prerequisites'];
        $students[$cr]['Description'] = $row['Description'];

        $cr++;
    }

    echo json_encode(['data'=>$students]);
}
else
{
    http_response_code(404);
}


