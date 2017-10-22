<?php
	$HostName = "localhost";
	$DatabaseName = "gofer_db";
	$HostUser = "root";
	$HostPass = "";
	$connection = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$user_name = $obj['user_name'];
	$last_name = $obj['last_name'];
	$first_name = $obj['first_name'];
	$email = $obj['email'];
	$phone_number = $obj['phone_number'];
	$password = $obj['password'];
	$insert = "insert into user(user_name,last_name,first_name,email,phone_number) values ('$user_name','$last_name','$first_name','$email','$phone_number');";
	$insert .= "insert into credentials(password) values ('$password')";
	mysqli_multi_query($connection,$insert);
	mysqli_close($connection);
?>