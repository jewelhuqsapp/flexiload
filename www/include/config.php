<?php

define('TIMEZONE', 'Asia/Dhaka');
date_default_timezone_set(TIMEZONE);


$username="autoflex_flexi";
$userpass="**123456**";
$db="autoflex_flexiload";
$bkash_rate = 2.5;

$conn = mysql_connect("autoflexisoftware.com", "$username", "$userpass") or die("Could not connect to the Localhost");
$add1           = "&nbsp;";
$add2           = "&nbsp;";
$add3           = "&nbsp;";
$submitted_date = date("d-m-Y h:s");
mysql_select_db($db) or die("Could not connect to the dataabase");

if (mysql_errno($conn) == 1203) {

				echo "<center><h1>We are working to update the server. Please try after 2 minutes</h1> <br><h2>Thank you for your patience</h2></center>";
                exit;

}
$us_email = "bdloadnet@gmail.com";
mysql_query("SET SESSION time_zone = '+6:00'");
?>