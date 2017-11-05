<?php
	$HostName = "localhost";
	$DatabaseName = "gofer_db";
	$HostUser = "root";
	$HostPass = "";
	$connection = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$title = $obj['title'];
	$description = $obj['description'];
	$location = $obj['location'];
	$datetime = $obj['datetime'];
	$payment = $obj['payment'];
	$insert = "insert into favor(issued_by,description,favor_location,datetime_issued,initial_payment) values ('gio','$description','$location','$datetime','$payment');";
	mysqli_multi_query($connection,$insert);
	if(mysqli_affected_rows($connection) === 0){
		$failed = "Try again!";
		$fail = json_encode($fail);
		echo $fail;	
	}else{
		$successful = "You have posted a favor!";
		$success = json_encode($successful);
		echo $success;
	}
	mysqli_close($connection);
?>