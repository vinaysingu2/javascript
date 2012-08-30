var stooge = {
"first-name": "Jerome",
"last-name": "Howard"
};
if (typeof Object.create !== 'function') {
Object.create = function (o) {
var F = function () {};
F.prototype = o;
return new F();
};
}
var another_stooge = Object.create(stooge);
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
var name1;
for (name1 in another_stooge)
{
	if(typeof another_stooge[name1] !== 'undefined')
	{
		document.writeln(name1 + ":" + another_stooge[name1]);
	}
}
document.writeln(another_stooge.nickname);
