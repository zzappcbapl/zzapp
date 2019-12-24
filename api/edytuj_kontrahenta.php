<?php
if(session_status() !== PHP_SESSION_ACTIVE) session_start();

require_once('database.config.php');

$errmsg_arr = array();	
$errflag = false;

$inputdata = file_get_contents("php://input");
$postdata = json_decode($inputdata, true);    

$indeks = $postdata['indeks'];
$nip = $postdata['nip'];
$regon = $postdata['regon'];
$nazwa = $postdata['nazwa'];
$platnikVat = $postdata['platnikVat'];
$ulica = $postdata['ulica'];
$nrDomu = $postdata['nrDomu'];
$nrMieszkania = $postdata['nrMieszkania'];


$qry = "UPDATE Tabela_Kontrahentow SET nip= ?, regon= ?, nazwa= ?, platnikVat= ?, ulica= ?, nrDomu= ?, nrMieszkania= ? WHERE indeks= ?";
    
    $stmt = $conn->prepare($qry);
    $stmt->bind_param("iisisiii", $nip, $regon, $nazwa, $platnikVat, $ulica, $nrDomu, $nrMieszkania, $indeks);

    if($stmt->execute()) {
        $errmsg_arr[] = 'Kontrahent zapisany pomyślnie!';
             
        echo json_encode($errmsg_arr);
        http_response_code(200);
        session_write_close();   
    }
    else {
        $errflag = true;
        $errmsg_arr[] = 'Wpisane dane są nieprawidłowe!';
        echo json_encode($errmsg_arr);
        http_response_code(409);
        session_write_close();
        exit();
    }
   