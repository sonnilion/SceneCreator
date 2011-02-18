<?php

// open the current directory
$dhandle = opendir('./scenes');
// define an array to hold the files
$files = array();

if ($dhandle) {
   // loop through all of the files
   while (false !== ($fname = readdir($dhandle))) {
      // if the file is not this file, and does not start with a '.' or '..',
      // then store it for later display
      if (($fname != '.') && ($fname != '..') &&
          ($fname != basename($_SERVER['PHP_SELF']))) {
          // store the filename
          $files[] = (is_dir( "./$fname" )) ? "(Dir) {$fname}" : $fname;
      }
   }
   // close the directory
   closedir($dhandle);
}
for ( $i = 0; $i < sizeof($files)-1; $i ++) {
 echo $files[$i]; 
 echo ",";
}
echo $files[sizeof($files)-1];
?>