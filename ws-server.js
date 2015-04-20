/**
 * 
 */

	var port=8080;
	
	//check argv (--port) here.

	var wsserver=new (require('ws').Server)({port: port});
	var fs=require('fs');
	
	console.log('Websocket - Named Vhost Router, listening on port: '+port);
	
	wsserver.on('connection',function(wsclient){
		
		
		console.log(wsclient.upgradeReq);

		console.log('recieved a new connection from: '+wsclient.upgradeReq.headers.host);
		
		require('node-apache-config').getDocumentRoot(wsclient.upgradeReq.headers.host, function(path){
			
			console.log(path);
			var pathname=wsclient.upgradeReq.url;
			
			fs.exists(path, function (exists) {
				  if(exists){
					  
					  if(pathname==='/'||pathname===''){
						  var defaultApp=path+'ws.js';
						  fs.exists(defaultApp, function (exists) {
							  if(exists){
								  console.log('Creating Default App: '+defaultApp)
								  require(defaultApp).handle(wsclient);
							  }else{
								  wsclient.close(4000, 'Default app does not exist');
							  }
						  });
					  }else{
						  var app=path+pathname;
						  var p=pathname.indexOf('ws.js');
						  if(p>=0&&p===pathname.length-5){
							  fs.exists(app, function (exists) {
								  if(exists){
									  console.log('Creating App: '+app)
									  require(app).handle(wsclient);
								  }else{
									  wsclient.close(4000, 'Default app does not exist');
								  }
							  });
						  }else{
							  wsclient.close(4000, 'Invalid url to websocket app:'+pathname);
						  }
					  }
					  
					  
					
					  
					  
					  
				  }else{
					  wsclient.close(4000, 'Document root does not exist');
				  }
			});
			
		});
		
		
		wsclient.on('close',function(code, message){
			console.log('Connection closed: '+code+' '+message);
		});
		
		
	});
	wsserver.on('headers',function(headers){
		console.log('headers: '+headers);
	});
	wsserver.on('error',function(error){
		console.log('error: '+error);
	});
