<?php

$link = mysqli_connect("shareddb1e.hosting.stackcp.net","booking-3233a66c","pratik0001","booking-3233a66c");
$frst = $_POST['fname'];
$last = $_POST['lname'];
$query = "INSERT INTO `name`(`firstname`,`lastname`) VALUES('$frst','$last')";
if(!mysqli_query($link,$query))
	echo "read";
mysqli_close($link);

?>