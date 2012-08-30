var myapp = {};
myapp.flight = {
"first-name": "Jerome",
last: "Howard",
name: "vinay",
number: 815,
departure:{
 time: "1245",
 place: "hyderabad"
},
arrival:{
 time: "2:18",
 place: "Delhi"
}
};
//delete flight["first-name"];
var name1;
for (name1 in myapp.flight) {
if(typeof myapp.flight[name1] == 'number')
{	
	document.writeln(name1 + ':' + myapp.flight[name1]);
}

}

