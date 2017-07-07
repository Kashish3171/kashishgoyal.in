<?php
	$output='';
	if(isset($_POST['name']))
	{ 
		$name=htmlentities($_POST['name']);
		$email=htmlentities($_POST['email']);
		$cno=htmlentities($_POST['cno']);
		$message=htmlentities($_POST['message']);
		if(empty($name)||empty($email)||empty($cno)||empty($message))
		{
			$output='Please fill all fields';
		}
		else if(!filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match('^[789]\d{9}$^', $cno))
	{
	$output='Please enter valid input';
	}
	else{
		$touser = $email;
		$from="admin@kashishgoyal.in";
		$headeruser='From : kashishgoyal.in';
		$subjectuser='Copy of contact us form';
		$messageuser='hey'." ".$name.", Thank you for contacting us. We will get back to you as soon as we can \n \n \n 
		You recieved this mail in response to the contact us form you sbmitted at kashishgoyal.in.\n In case of any doubt or query you can mail us at admin@kashishgoyal.in";
		$tome="kashishgoyal3171@gmail.com";
		$subjectme="Contact us form filled at kashishgoyal.in";
		$messageme ="Someone filled this contatc form at kashishgoyal.in \n Name:".$name."\n Email:" .$email."\n Contact Number:".$cno."\n Message:".$message ;
		if(mail($touser,$subjectuser,$messageuser,$headeruser) && mail($tome,$subjectme,$messageme,$headeruser))
		{

		$output ='Thank you for contacting us!';
		}
		else
		{
			$output='Sorry, unknown error occured. Please try again later.';
		}
	}}
	else
	{
		$output ='Please fill all fields';
	}
		echo $output;
?>