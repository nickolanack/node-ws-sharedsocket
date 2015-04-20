/**
 * 
 */



module.exports={
		
		handle:function(websocket){
			
			console.log('websocket:'+ websocket);
			
			websocket.on('message',function(data, flags){
				console.log('app recieved: '+data);
				websocket.send(data);
			});
			
		}
		
}
