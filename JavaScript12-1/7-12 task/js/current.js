var hund= document.getElementById("hund");
var thous= document.getElementById("thous");
var tenThous= document.getElementById("tenThous");
var hundThous= document.getElementById("hundThous");
var time1= document.getElementById("time1");
var time2= document.getElementById("time2");
var time3= document.getElementById("time3");
var time4= document.getElementById("time4");

var start=new Date().getTime();
for (i=0;i<100;++i){
}
	hund.innerHTML +=i;
	var end=new Date().getTime();
	var time=end-start;
	time1.innerHTML+=("execution time"+time);

var start=new Date().getTime();
for (i=0;i<100;++i){
}
	thous.innerHTML +=i;
	var end=new Date().getTime();
	var time=end-start;
	time2.innerHTML+=("execution time"+time);

var start=new Date().getTime();
for (i=0;i<100;++i){
}
	tenThous.innerHTML +=i;
	var end=new Date().getTime();
	var time=end-start;
	time3.innerHTML+=("execution time"+time);

var start=new Date().getTime();
for (i=0;i<100;++i){
}
	hundThous.innerHTML +=i;
	var end=new Date().getTime();
	var time=end-start;
	time4.innerHTML+=("execution time"+time);

