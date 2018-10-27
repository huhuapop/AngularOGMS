<?php




/**
 * Returns the list of students.
 */
require '../osms.dbconfig.php';

$students = [];
$sql = "select PantherID,FirstName,MiddleName,LastName,Email,MobileNumber,College,Department,
        Location,Degree,Major,Concentration,matricTerm,Position,Status
        from tbl_student_info
        ";

if(empty($_GET['id'])==false) {
    if (is_numeric($_GET['id'])) {
        $id = (int)$_GET['id'];

        $sql .="where PantherID='$id'";
    }
}
$sql .=" order by FirstName";
if($result = mysqli_query($mysqli,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $students[$cr]['PantherID'] = $row['PantherID'];
        $students[$cr]['FirstName'] = $row['FirstName'];
        $students[$cr]['MiddleName'] = $row['MiddleName'];
        $students[$cr]['LastName'] = $row['LastName'];
        $students[$cr]['Email'] = $row['Email'];
        $students[$cr]['MobileNumber'] = $row['MobileNumber'];
        $students[$cr]['College'] = $row['College'];
        $students[$cr]['Department'] = $row['Department'];
        $students[$cr]['Location'] = $row['Location'];
        $students[$cr]['Degree'] = $row['Degree'];
        $students[$cr]['Major'] = $row['Major'];
        $students[$cr]['Concentration'] = $row['Concentration'];
        $students[$cr]['matricTerm'] = $row['matricTerm'];
        $students[$cr]['Position'] = $row['Position'];
        $students[$cr]['Status'] = $row['Status'];
        $cr++;
    }

    echo json_encode(['data'=>$students]);
}
else
{
    http_response_code(404);
}


