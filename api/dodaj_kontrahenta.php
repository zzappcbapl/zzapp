<?php
if(session_status() !== PHP_SESSION_ACTIVE) session_start();

require_once('database.config.php');

$errmsg_arr = array();	
$errflag = false;

$inputdata = file_get_contents("php://input");
$postdata = json_decode($inputdata, true);    

$nip = $postdata['nip'];
$regon = $postdata['regon'];
$nazwa = $postdata['nazwa'];
$platnikVat = $postdata['platnikVat'];
$ulica = $postdata['ulica'];
$nrDomu = $postdata['nrDomu'];
$nrMieszkania = $postdata['nrMieszkania'];

$qry = "SELECT nip FROM Tabela_Kontrahentow WHERE nip= ?";
$stmt = $conn->prepare($qry);
$stmt->bind_param("i", $nip);

if($stmt->execute()) {
    $stmt->store_result();
    $found = $stmt->affected_rows;
}
$stmt->free_result();
$stmt->close();

if($found != 1) {
    $qry = "INSERT INTO Tabela_Kontrahentow(nip, regon, nazwa, platnikVat, ulica, nrDomu, nrMieszkania) VALUES(?,?,?,?,?,?,?)";
    $errmsg_arr[] = 'Kontrahent dodany pomyślnie!';
}
else {
    $errflag = true;
    $errmsg_arr[] = 'Osoba z podanym NIP-em już istnieje!';
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
        $stmt->bind_param("iisisii", $nip, $regon, $nazwa, $platnikVat, $ulica, $nrDomu, $nrMieszkania);

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