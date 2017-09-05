var myArgs = process.argv.slice(2) 

var string;
var pigstring;
var finalpig="";
for (i = 0; i < myArgs.length; i++)
 {string = myArgs[i].split(''); 
 
var pigstring = ""; 
for ( var n = 1; n< string.length; n++  )
{ pigstring = pigstring + string[n]; }
pigstring = pigstring + string [0]+"ay"; 


if (i < myArgs.length) {
	finalpig = finalpig + pigstring+" ";
	
}
}


console.log(finalpig); 


