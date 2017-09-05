var myArgs = process.argv.slice(2);
var data;
var datarev;
for (i = 0; i < myArgs.length; i++)
	{data = myArgs[i].split('');
datarev = ""; 
for (var n = data.length-1; n>=0; n--)
    {datarev = datarev + data[n] }

console.log(datarev);
}

var pigstring;
for (i = 0; i < myArgs.length; i++)
 {string = myArgs[i].split('');}
var pigstring = "";