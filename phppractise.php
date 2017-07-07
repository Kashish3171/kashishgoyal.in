 
<?php
 if(isset($_SERVER['HTTP_REFERER']))
 	{
 		 echo $_SERVER['HTTP_REFERER'];
 	}

 	$ref='http://www.stuaca.com/exams.php?cid=13&ex=ibps%20po';
 	$index=strpos($ref,'?',0);
 	$ref=substr($ref,0,$index);
 if($ref==='http://www.stuaca.com/exams.php')
 {
 	echo "1";
 }
 else
 {
 	echo "0";
 }
 ?>