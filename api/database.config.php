<?php


	define('DB_HOST', 'localhost');
    define('DB_USER', 'zzAppSuperuser');
    define('DB_PASSWORD', 'Dbpass1!');
    define('DB_DATABASE', 'zzapp');
	
	define("SECURE", TRUE);
	
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
		if(mysqli_connect_errno()) {
			printf("Connect failed: %s\n", mysqli_connect_error());
			exit();
		}