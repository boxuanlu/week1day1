function obfuscate(string) { 
  var breakdown=string.split('');
  var pass=''; 
for ( var i = 0; i < breakdown.length; i++)
{ 
if (breakdown[i] === "a")
  pass=pass+"4";
  else if (breakdown[i] === "e")
  pass=pass+'3';
  else if (breakdown[i] === "o")
  pass=pass+"0";
  else if (breakdown[i] === "l")
  pass=pass+"1";
  else
  	pass=pass+breakdown[i];
  


}
return pass;
}