# site
Docker source of site's index page.

### Instruction
1. PULL: 'docker pull hypocrisy.info'
2. RUN: `docker run -p 80:80 -dit hypocrisy/site`

### SSL
1. letsencrypt should run in interactive interface.
   ```
   letsencrypt certonly -a webroot --webroot-path=/var/www/html -d example.com -d www.example.com
   ```
