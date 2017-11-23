<?php
	$HostName = "localhost";
	$DatabaseName = "gofer_db";
	$HostUser = "root";
	$HostPass = "";
	$connection = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$currentUser = $obj['currentUser'];
	$check_query = "select favor_title as 'Title', issued_by as 'Requested By', datetime_issued as 'Due Date', favor_location as 'Location' from favor;";
	$getIt = mysqli_query($connection,$check_query);
	if(mysqli_num_rows($getIt) === 0){
		$nothingToShow = "No favors to show!";
		$noFavors = json_encode($nothingToShow);
		echo $noFavors;	
	}else{
		$rows = array();
		while($r = mysqli_fetch_assoc($getIt)){
			$rows[] = $r;
		}
		$convertToJson = json_encode($rows);
		echo $convertToJson;
	}
	mysqli_close($connection);
?>