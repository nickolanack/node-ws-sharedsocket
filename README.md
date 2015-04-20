# node-ws-sharedsocket
I am trying to create a shared web-socket server such that multiple (completely different) node web-socket applications can all share the same server port. application routing can be controlled similar to name based vhosting.

this might be uselful in sitauations where your server is behind a network firewall, such that you do not have 65 thousand spare ports lying around.
