/**
 * 
 */

	var wsserver=new (require('ws').Server)({port: 8080});
	console.log('running: 8089');
	
	wsserver.on('connection',function(wsclient){
		
		var wsserver=this;
		console.log('created a new connection');
		
		
	}).on('headers',function(headers){
		console.log('headers: '+headers);
	}).on('error',function(error){
		console.log('error: '+error);
	});