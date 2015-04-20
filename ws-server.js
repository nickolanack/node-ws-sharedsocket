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
	
	
	
	/*
	
	example wsclient object
	
	headers: HTTP/1.1 101 Switching Protocols,Upgrade: websocket,Connection: Upgrade,Sec-WebSocket-Accept: A+FvOLoe+gRU6G17KAyVFSCa9mg=,Sec-WebSocket-Extensions: permessage-deflate
	{ domain: null,
	  _events: { close: [Function] },
	  _maxListeners: 10,
	  _socket: 
	   { _connecting: false,
	     _handle: 
	      { fd: 11,
	        writeQueueSize: 0,
	        owner: [Circular],
	        onread: [Function: onread],
	        reading: true },
	     _readableState: 
	      { highWaterMark: 16384,
	        buffer: [],
	        length: 0,
	        pipes: null,
	        pipesCount: 0,
	        flowing: false,
	        ended: false,
	        endEmitted: false,
	        reading: true,
	        calledRead: true,
	        sync: false,
	        needReadable: true,
	        emittedReadable: false,
	        readableListening: false,
	        objectMode: false,
	        defaultEncoding: 'utf8',
	        ranOut: false,
	        awaitDrain: 0,
	        readingMore: false,
	        decoder: null,
	        encoding: null },
	     readable: true,
	     domain: null,
	     _events: 
	      { end: [Object],
	        finish: [Function: onSocketFinish],
	        _socketEnd: [Function: onSocketEnd],
	        drain: [Object],
	        timeout: [Function],
	        error: [Object],
	        close: [Object],
	        data: [Object],
	        readable: [Function] },
	     _maxListeners: 10,
	     _writableState: 
	      { highWaterMark: 16384,
	        objectMode: false,
	        needDrain: false,
	        ending: false,
	        ended: false,
	        finished: false,
	        decodeStrings: false,
	        defaultEncoding: 'utf8',
	        length: 0,
	        writing: false,
	        sync: false,
	        bufferProcessing: false,
	        onwrite: [Function],
	        writecb: null,
	        writelen: 0,
	        buffer: [],
	        errorEmitted: false },
	     writable: true,
	     allowHalfOpen: true,
	     onend: null,
	     destroyed: false,
	     bytesRead: 551,
	     _bytesDispatched: 175,
	     _pendingData: null,
	     _pendingEncoding: '',
	     server: 
	      { domain: null,
	        _events: [Object],
	        _maxListeners: 10,
	        _connections: 1,
	        connections: [Getter/Setter],
	        _handle: [Object],
	        _usingSlaves: false,
	        _slaves: [],
	        allowHalfOpen: true,
	        httpAllowHalfOpen: false,
	        timeout: 120000,
	        _connectionKey: '4:0.0.0.0:8080' },
	     _idleTimeout: -1,
	     _idleNext: null,
	     _idlePrev: null,
	     _idleStart: 1429504648874,
	     _monotonicStartTime: 3588372363,
	     parser: null,
	     ondata: null,
	     _paused: false,
	     pipe: [Function],
	     addListener: [Function: addListener],
	     on: [Function: addListener],
	     pause: [Function],
	     resume: [Function],
	     read: [Function],
	     _consuming: true },
	  _ultron: 
	   { id: 0,
	     ee: 
	      { _connecting: false,
	        _handle: [Object],
	        _readableState: [Object],
	        readable: true,
	        domain: null,
	        _events: [Object],
	        _maxListeners: 10,
	        _writableState: [Object],
	        writable: true,
	        allowHalfOpen: true,
	        onend: null,
	        destroyed: false,
	        bytesRead: 551,
	        _bytesDispatched: 175,
	        _pendingData: null,
	        _pendingEncoding: '',
	        server: [Object],
	        _idleTimeout: -1,
	        _idleNext: null,
	        _idlePrev: null,
	        _idleStart: 1429504648874,
	        _monotonicStartTime: 3588372363,
	        parser: null,
	        ondata: null,
	        _paused: false,
	        pipe: [Function],
	        addListener: [Function: addListener],
	        on: [Function: addListener],
	        pause: [Function],
	        resume: [Function],
	        read: [Function],
	        _consuming: true } },
	  _closeReceived: false,
	  bytesReceived: 0,
	  readyState: 1,
	  supports: { binary: true },
	  extensions: 
	   { 'permessage-deflate': 
	      { _options: {},
	        _isServer: true,
	        _inflate: null,
	        _deflate: null,
	        params: {} } },
	  protocol: undefined,
	  protocolVersion: 13,
	  upgradeReq: 
	   { _readableState: 
	      { highWaterMark: 16384,
	        buffer: [],
	        length: 0,
	        pipes: null,
	        pipesCount: 0,
	        flowing: false,
	        ended: true,
	        endEmitted: false,
	        reading: false,
	        calledRead: false,
	        sync: true,
	        needReadable: false,
	        emittedReadable: false,
	        readableListening: false,
	        objectMode: false,
	        defaultEncoding: 'utf8',
	        ranOut: false,
	        awaitDrain: 0,
	        readingMore: false,
	        decoder: null,
	        encoding: null },
	     readable: true,
	     domain: null,
	     _events: {},
	     _maxListeners: 10,
	     socket: 
	      { _connecting: false,
	        _handle: [Object],
	        _readableState: [Object],
	        readable: true,
	        domain: null,
	        _events: [Object],
	        _maxListeners: 10,
	        _writableState: [Object],
	        writable: true,
	        allowHalfOpen: true,
	        onend: null,
	        destroyed: false,
	        bytesRead: 551,
	        _bytesDispatched: 175,
	        _pendingData: null,
	        _pendingEncoding: '',
	        server: [Object],
	        _idleTimeout: -1,
	        _idleNext: null,
	        _idlePrev: null,
	        _idleStart: 1429504648874,
	        _monotonicStartTime: 3588372363,
	        parser: null,
	        ondata: null,
	        _paused: false,
	        pipe: [Function],
	        addListener: [Function: addListener],
	        on: [Function: addListener],
	        pause: [Function],
	        resume: [Function],
	        read: [Function],
	        _consuming: true },
	     connection: 
	      { _connecting: false,
	        _handle: [Object],
	        _readableState: [Object],
	        readable: true,
	        domain: null,
	        _events: [Object],
	        _maxListeners: 10,
	        _writableState: [Object],
	        writable: true,
	        allowHalfOpen: true,
	        onend: null,
	        destroyed: false,
	        bytesRead: 551,
	        _bytesDispatched: 175,
	        _pendingData: null,
	        _pendingEncoding: '',
	        server: [Object],
	        _idleTimeout: -1,
	        _idleNext: null,
	        _idlePrev: null,
	        _idleStart: 1429504648874,
	        _monotonicStartTime: 3588372363,
	        parser: null,
	        ondata: null,
	        _paused: false,
	        pipe: [Function],
	        addListener: [Function: addListener],
	        on: [Function: addListener],
	        pause: [Function],
	        resume: [Function],
	        read: [Function],
	        _consuming: true },
	     httpVersion: '1.1',
	     complete: true,
	     headers: 
	      { host: 'media.geolive.ca:8080',
	        connection: 'Upgrade',
	        pragma: 'no-cache',
	        'cache-control': 'no-cache',
	        upgrade: 'websocket',
	        origin: 'http://media.geolive.ca',
	        'sec-websocket-version': '13',
	        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36',
	        'accept-encoding': 'gzip, deflate, sdch',
	        'accept-language': 'en-US,en;q=0.8',
	        cookie: '_ga=GA1.2.739570465.1428971002',
	        'sec-websocket-key': 'y4OJGsytUEZiaLBl3GWE2Q==',
	        'sec-websocket-extensions': 'permessage-deflate; client_max_window_bits' },
	     trailers: {},
	     _pendings: [],
	     _pendingIndex: 0,
	     url: '/',
	     method: 'GET',
	     statusCode: null,
	     client: 
	      { _connecting: false,
	        _handle: [Object],
	        _readableState: [Object],
	        readable: true,
	        domain: null,
	        _events: [Object],
	        _maxListeners: 10,
	        _writableState: [Object],
	        writable: true,
	        allowHalfOpen: true,
	        onend: null,
	        destroyed: false,
	        bytesRead: 551,
	        _bytesDispatched: 175,
	        _pendingData: null,
	        _pendingEncoding: '',
	        server: [Object],
	        _idleTimeout: -1,
	        _idleNext: null,
	        _idlePrev: null,
	        _idleStart: 1429504648874,
	        _monotonicStartTime: 3588372363,
	        parser: null,
	        ondata: null,
	        _paused: false,
	        pipe: [Function],
	        addListener: [Function: addListener],
	        on: [Function: addListener],
	        pause: [Function],
	        resume: [Function],
	        read: [Function],
	        _consuming: true },
	     _consuming: false,
	     _dumped: false,
	     httpVersionMajor: 1,
	     httpVersionMinor: 1,
	     upgrade: true,
	     parser: null },
	  _isServer: true,
	  _receiver: 
	   { fragmentedBufferPool: 
	      { _growStrategy: [Function],
	        _shrinkStrategy: [Function],
	        _buffer: <Buffer 60 82 60 02 00 00 00 00 da 80 8f 12 05 00 00 00 30 8f 56 02 00 00 00 00 20 82 60 02 00 00 00 00 d6 49 66 25 04 00 00 00 40 8f 56 02 00 00 00 00 00 00 00 ...>,
	        _offset: 0,
	        _used: 0,
	        _changeFactor: 0,
	        size: [Getter],
	        used: [Getter] },
	     unfragmentedBufferPool: 
	      { _growStrategy: [Function],
	        _shrinkStrategy: [Function],
	        _buffer: <Buffer 48 81 60 02 00 00 00 00 f0 74 53 02 00 00 00 00 00 00 00 00 01 00 00 00 01 00 00 00 ff ff ff ff ff ff ff ff 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ...>,
	        _offset: 0,
	        _used: 0,
	        _changeFactor: 0,
	        size: [Getter],
	        used: [Getter] },
	     extensions: { 'permessage-deflate': [Object] },
	     state: 
	      { activeFragmentedOperation: null,
	        lastFragment: false,
	        masked: false,
	        opcode: 0,
	        fragmentedOperation: false },
	     overflow: [],
	     headerBuffer: <Buffer 05 00 00 00 01 00 00 00 28 88>,
	     expectOffset: 0,
	     expectBuffer: <Buffer 05 00>,
	     expectHandler: [Function],
	     currentMessage: [],
	     messageHandlers: [],
	     dead: false,
	     processing: false,
	     onerror: [Function: onerror],
	     ontext: [Function: ontext],
	     onbinary: [Function: onbinary],
	     onclose: [Function: onclose],
	     onping: [Function: onping],
	     onpong: [Function: onpong] },
	  _sender: 
	   { domain: null,
	     _events: { error: [Function: onerror] },
	     _maxListeners: 10,
	     _socket: 
	      { _connecting: false,
	        _handle: [Object],
	        _readableState: [Object],
	        readable: true,
	        domain: null,
	        _events: [Object],
	        _maxListeners: 10,
	        _writableState: [Object],
	        writable: true,
	        allowHalfOpen: true,
	        onend: null,
	        destroyed: false,
	        bytesRead: 551,
	        _bytesDispatched: 175,
	        _pendingData: null,
	        _pendingEncoding: '',
	        server: [Object],
	        _idleTimeout: -1,
	        _idleNext: null,
	        _idlePrev: null,
	        _idleStart: 1429504648874,
	        _monotonicStartTime: 3588372363,
	        parser: null,
	        ondata: null,
	        _paused: false,
	        pipe: [Function],
	        addListener: [Function: addListener],
	        on: [Function: addListener],
	        pause: [Function],
	        resume: [Function],
	        read: [Function],
	        _consuming: true },
	     extensions: { 'permessage-deflate': [Object] },
	     firstFragment: true,
	     compress: false,
	     messageHandlers: [],
	     processing: false } }
	
	*/