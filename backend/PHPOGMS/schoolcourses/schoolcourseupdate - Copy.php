<?php




/**
 * Delete one school course.
 */
//require '../osms.dbconfig.php';

//// Get the posted data.
//$postdata = file_get_contents("php://input");
//
//if(isset($postdata) && !empty($postdata)) {
//    // Extract the data.
//    $request = json_decode($postdata);
//
//     //Validate.
//    if ((int)$request->data->id < 1 || trim($request->data->model) == '' || (int)$request->data->price < 1) {
//        return  json_encode(['data'=>'fail']);
//    }
//
//    // Sanitize.SchoolCourseID,Subject,Course,CourseName,Credit,Prerequisites,Description
//    $SchoolCourseID   = mysqli_real_escape_string($mysqli, (int)$request->data->SchoolCourseID);
//    $Subject = mysqli_real_escape_string($mysqli, trim($request->data->Subject));
//    $Course = mysqli_real_escape_string($mysqli, (int)$request->data->Course);
//    $CourseName = mysqli_real_escape_string($mysqli, (int)$request->data->CourseName);
//    $Credit = mysqli_real_escape_string($mysqli, (int)$request->data->Credit);
//    $Prerequisites = mysqli_real_escape_string($mysqli, (int)$request->data->Prerequisites);
//    $Description = mysqli_real_escape_string($mysqli, (int)$request->data->Description);
//
//    $sql = "UPDATE tbl_schoolcourse
//            SET `Subject`='$Subject',`Course`='$Course' ,`CourseName`='$CourseName' ,`Credit`='$Credit' ,`Prerequisites`='$Prerequisites' ,`Description`='$Description'
//            WHERE `SchoolCourseID ` = '{$SchoolCourseID }' LIMIT 1";
//    $result=mysqli_query($mysqli, $sql);
//    if(mysqli_query($con, $sql))
//    {
//        return  json_encode(['data'=>'success']);
//    }
//    else
//    {
//        return  json_encode(['data'=>'fail']);
//    }
//}
//else{
//    return  json_encode(['data'=>'fail']);
//}

return json_encode(['data'=>'success']);
//http_response_code(204);


