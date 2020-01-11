// var http=require("http");
// var myhttp=http.createServer(function(request,response){
// 	response.writeHead(200);
// 	response.write('welcome to first nodejs server');
// 	response.end()
// });

// myhttp.listen(8888,"127.0.0.1");
// console.log("we listen to http://127.0.0.1:8888/");

// var http=require("http");
// var info={
// 	"name":"Rana",
// 	"age":26
// }
 
// var html='<!DOCTYPE html><html><head>	<title></title></head><body><h1>this is html page</h1></body></html>'

// var myhttp=http.createServer(function(request,response){
// 	response.writeHead(200);
// 	response.write(JSON.stringify(html));
// 	response.end()
// });
// myhttp.listen(8888,"127.0.0.1");
// console.log("we listen to http://127.0.0.1:8888/");




// var http=require("http");
// var url=require("url");

// var myhttp=http.createServer(function(request,response){
// 	var queryString=url.parse(request.url,true).query;
// 	console.log(queryString);
// 	console.log(queryString.id);
// });
// myhttp.listen(8888,"127.0.0.1");
// console.log("we listen to http://127.0.0.1:8888?id=1");


var http = require("http"); // call http libraray 
var postHTML = "<!DOCTYPE html><html><head>	<title></title></head><body><!-- <h1>this is html page</h1> --><form method='post' action='/'>First Name: <input type='text' name='fname'>Last Name: <input type='text' name='lname'><input type='submit'></form></html></body></html>";

var qs = require("querystring");
var myhttp = http.createServer(function(request,response){ // accept request and response 	
	response.end(postHTML);	
	if(request.method =='POST'){
		var body ="";
		request.on('data',function(data){ // on posting data 
			body += data;
		});
		request.on('end',function(){
			var post = qs.parse(body); // convert data so i can read it 			
			console.log(post['fname']);	
			console.log(post['lname']);	
		});
	}
});
myhttp.listen(8888,"127.0.0.1");

console.log("we listen to http://127.0.0.1:8888/");
