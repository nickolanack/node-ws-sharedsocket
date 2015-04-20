# node-ws-sharedsocket
The purpose of this project, is to create a shared web-socket server such that multiple (completely different) node web-socket applications can all share the same server port. Application routing can be controlled similar to name based vhosting.

this might be uselful in sitauations where your server is behind a network firewall, such that you do not have 65 thousand spare ports lying around... I for example have a web server that hosts a number of websites via apache, using named virtual hosts. 
on many of these hosts I need to integrate at least one highly ajax web app, however my server is behind network firewall that only allows ports 80, and 8080 to recieve traffic, I would like to provide a number of websocket alternatives to ajax, on port 8080. Aditionally I will need to provide routing using the apache vhost configuration, to load a nodejs application located in a hosts document root, and possibly using the pathname as well. 



