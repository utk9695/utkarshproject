<?php
	$link = mysqli_connect("localhost","root","sql","booking3233a66c");
	if(!$link)
	{
		die("There is some error in connecting to database");
	}
	if(isset($_POST['Submit']))
	{	
	$roomno = $_POST['room'];
	$person = $_POST['person'];
	$name = $_POST['name'];
	$email = $_POST['email'];
	$contactno = $_POST['contact'];
	$query = "INSERT INTO booking VALUES('$roomno','$person','$name','$email','$contactno')";
	$x=mysqli_query($link,$query);
	echo $x;	
	if(!$x)
	{	echo "hello";
	
}
	//echo "$name"."$email";
	}
	mysqli_close($link);
?>
