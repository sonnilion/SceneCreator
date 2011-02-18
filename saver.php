<?php 

  $filename = $_GET['location']; 
	$somecontent = $GLOBALS['HTTP_RAW_POST_DATA'];
  // Let's make sure the file exists and is writable first.

      if (file_exists($filename)) { unlink ($filename); }
      // In our example we're opening $filename in append mode.
      // The file pointer is at the bottom of the file hence
      if (!$handle = fopen($filename, 'w+')) {
      // that's where $somecontent will go when we fwrite() it.
           echo "Cannot open file ($filename)";
           exit;
      }
      @chmod($filename, 0666);
      // Write $somecontent to our opened file.
      if (fwrite($handle, $somecontent) === FALSE) {
          echo "Cannot write to file ($filename)";
          exit;
      }

      echo "Success, wrote".var_dump($somecontent)."to file ($filename)";

      fclose($handle);
?>