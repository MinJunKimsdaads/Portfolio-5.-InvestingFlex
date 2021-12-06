<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPPER,false);
curl_setopt($ch, CURLOPT_PETURNTRANSFER,true);
curl_setopt($ch, CURLOPT_HEADER,0);
curl_setopt($ch, CURLOPT_URL,
  'http://rss.etnews.com/Section022.xml');
  $url_source = curl_exec($ch);
  curl_close($ch);

  echo $url_source;
?>