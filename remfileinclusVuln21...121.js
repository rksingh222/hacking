similar to local file inclusion
but allows an attacker read any file from any server
execute php files from other servers on the current server
store php files on other servers as .txt

10.20.14.204/dvwa/vulnerabilities/fi/?page=include.php
in file inclusion

go to metasploitable machine
sudo nano /etc/php5/cgi/php.ini

type ctrl + w

allow url_fopen = On

allow_url_include = On

ctrl + x to exit

restart the web server

sudo /etc/init.d/apache2 restart
