<?php
require '../osms.dbconfig.php';

// Get the posted data.
//$postdata = file_get_contents("php://input");
//file_get_contents("php://input");
//echo $GLOBALS['HTTP_RAW_POST_DATA'];
$postdata = json_decode(file_get_contents("php://input"));
//echo json_encode($postdata);
//echo json_encode(['data'=>'success']);
//return  json_encode(['data'=>json_decode(json_encode($postdata))]);
if(isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode(json_encode($postdata));

     //Validate.
    if ((int)$request->data->SchoolCourseID < 1 || trim($request->data->Subject) == '' || trim($request->data->Course) =='' ||
        trim($request->data->CourseName) == '' || trim($request->data->Credit) =='' ) {
        return  json_encode(['data'=>'fail']);
    }

    // Sanitize.SchoolCourseID,Subject,Course,CourseName,Credit,Prerequisites,Description
    $SchoolCourseID   = mysqli_real_escape_string($mysqli, (int)$request->data->SchoolCourseID);
    $Subject = mysqli_real_escape_string($mysqli, trim($request->data->Subject));
    $Course = mysqli_real_escape_string($mysqli, trim($request->data->Course));
    $CourseName = mysqli_real_escape_string($mysqli, trim($request->data->CourseName));
    $Credit = mysqli_real_escape_string($mysqli, trim($request->data->Credit));
    $Prerequisites = mysqli_real_escape_string($mysqli, trim($request->data->Prerequisites));
    $Description = mysqli_real_escape_string($mysqli, trim($request->data->Description));

    $sql = "UPDATE tbl_schoolcourse
            SET `Subject`='$Subject',`Course`='$Course' ,`CourseName`='$CourseName' ,`Credit`='$Credit' ,`Prerequisites`='$Prerequisites' ,`Description`='$Description'
            WHERE `SchoolCourseID` = '{$SchoolCourseID }' LIMIT 1";
    $result=mysqli_query($mysqli, $sql);
    //echo $sql; echo json_encode(['data'=>'35']);
    //echo  json_encode(['data'=>'success']);
    if($result)
    {
        //echo json_encode(['data'=>'39']);
        echo  json_encode(['data'=>'success']);
    }
    else
    {
        //echo json_encode(['data'=>'44']);
        echo  json_encode(['data'=>'fail']);
    }
}
else{
    return  json_encode(['data'=>'fail']);
}