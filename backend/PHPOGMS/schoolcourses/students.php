<?php




/**
 * Returns the list of cars.
 */
require '../osms.dbconfig.php';

$students = [];
$sql = "select PantherID,FirstName,MiddleName,LastName,Email,MobileNumber,College,Department,
        Location,Degree,Major,Concentration,matricTerm,Position,Status
        from tbl_student_info
        ";

if($result = mysqli_query($mysqli,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $students[$cr]['PantherID'] = $row['PantherID'];
        $students[$cr]['FirstName'] = $row['FirstName'];
        $students[$cr]['MiddleName'] = $row['MiddleName'];
        $cr++;
    }

    echo json_encode(['data'=>$students]);
}
else
{
    http_response_code(404);
}


