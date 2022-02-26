<!DOCTYPE html>
<html>

<head>
</head>


<body>

<?php


$Formats = [
	'mp4',
	'webm',
	'flv',
	'vob',
	'gif',
	'ogg',
	'ogv',
	'avi',
	'mov',
	'wmv',
	'amv',
	'mpg',
];


if (isset($_GET['q']))
{
	$Path = $_GET['q'];
	?>

	<video width="320" height="240" controls>
		<source src="<?php echo $Path; ?>" type="video/mp4">
		<source src="<?php echo $Path; ?>" type="video/mkv">
		<source src="<?php echo $Path; ?>">
		Your Browser Not Support
	</video>
	<?php
}else{echo "Please Enter The Path";}

?>

</body>
</html>