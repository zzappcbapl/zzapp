<?php
if(session_status() !== PHP_SESSION_ACTIVE) session_start();

require_once('database.config.php');

$errmsg_arr = array();	
$errflag = false;

$inputdata = file_get_contents("php://input");
$postdata = json_decode($inputdata, true);    

$indeks = $postdata['indeks'];

$qry = "SELECT indeks FROM Tabela_Kontrahentow WHERE indeks= ?";
$stmt = $conn->prepare($qry);
$stmt->bind_param("i", $indeks);

if($stmt->execute()) {
    $stmt->store_result();
    $found = $stmt->affected_rows;
}
$stmt->free_result();
$stmt->close();

if($found != 0) {
    $qry = "DELETE FROM Tabela_Kontrahentow WHERE indeks= ? LIMIT 1";
    $errmsg_arr[] = 'Kontrahent usunięty pomyślnie!';
}
else {
    $errflag = true;
    $errmsg_arr[] = 'Osoba z podanym NIP-em nie istnieje!';
}
if($errflag) {
    echo json_encode($errmsg_arr);
    http_response_code(409);
    session_write_close();
    exit();
}
else {
    $stmt = $conn->prepare($qry);

    if($stmt) {
        $stmt->bind_param("i", $indeks);

        if($stmt->execute()) {            
            echo json_encode($errmsg_arr);
            http_response_code(200);
            session_write_close();   
        }
        else {
            $errmsg_arr[] = error_get_last();
            echo json_encode(error_get_last());
        }
    }
    $stmt->close();
}