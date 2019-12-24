<?php
if(session_status() !== PHP_SESSION_ACTIVE) session_start();

require_once('database.config.php');

$delegacje = [];

$qry = "SELECT Lp, imie, nazwisko, dataOd, dataDo, wyjazd, przyjazd FROM Tabela_Delegacji";

$stmt = $conn->prepare($qry);

if($stmt->execute()) {
    $i = 0;
    
    $stmt->bind_result($lp, $imie, $nazwisko, $dataOd, $dataDo, $miejsceWyjazdu, $miejscePrzyjazdu);
			
    while($stmt->fetch()){
        
        $delegacje[$i]['lp']               =    $lp;
        $delegacje[$i]['imieNazwisko']     =    $imie . ' ' . $nazwisko;
        $delegacje[$i]['dataOd']           =    date("Y-m-d H:i:s", $dataOd);
        $delegacje[$i]['dataDo']           =    date("Y-m-d H:i:s", $dataDo);
        $delegacje[$i]['miejsceWyjazdu']   =    $miejsceWyjazdu;
        $delegacje[$i]['miejscePrzyjazdu'] =    $miejscePrzyjazdu;
        $i++;
    }

    echo json_encode($delegacje);
    http_response_code(200);
}
else {
    http_response_code(404);
}