// var fs=require("fs");
// var data=fs.readFileSync("info.txt");
// console.log(data.toString());
var name=['rana','salam','heba','ola'];
var age="26";
var gender="female";
var fs=require("fs");
var employees=name.forEach(function(x){
	console.log(x+" "+age+" "+gender);
})
fs.writeFile('employees.txt',employees,function(err){
	if(err) return
		console.log(err);
})

