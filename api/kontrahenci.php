<?php
if(session_status() !== PHP_SESSION_ACTIVE) session_start();

require_once('database.config.php');

$kontrahenci = [];

$qry = "SELECT indeks, nip, regon, nazwa, platnikVat, ulica, nrDomu, nrMieszkania FROM Tabela_Kontrahentow";

$stmt = $conn->prepare($qry);

if($stmt->execute()) {
    $i = 0;
    
    $stmt->bind_result($indeks, $nip, $regon, $nazwa, $platnikVat, $ulica, $nrDomu, $nrMieszkania);
			
    while($stmt->fetch()){
        
        $kontrahenci[$i]['indeks']        = $indeks;
        $kontrahenci[$i]['nip']           = $nip;
        $kontrahenci[$i]['regon']         = $regon;
        $kontrahenci[$i]['nazwa']         = $nazwa;
        $kontrahenci[$i]['platnikVat']    = $platnikVat;
        $kontrahenci[$i]['ulica']         = $ulica;
        $kontrahenci[$i]['nrDomu']        = $nrDomu;
        $kontrahenci[$i]['nrMieszkania']  = $nrMieszkania;
        $i++;
    }

    echo json_encode($kontrahenci);
    http_response_code(200);
}
else {
    http_response_code(404);
}