



litems=getURLvars("lista");
console.log("litems:"+litems["lista"]);

if (litems["lista"]=="true")
{	
	//alert ("dkjfdkjf")
	j=document.querySelector("link[rel*='icon']");
	//j.href;
	tc=j.href;
	tc=tc.replace("file:///D:/Pedro","")
	tc="."+tc;
	fp=tc.replace( "./", ".\\")
	var omg=fp.replace( /\//gi, "\\")
	tcopy='xcopy "'+omg+'" '+ ' "e:'+omg+'*" /s /v /y /q /i'; 
	document.getElementById('tocopy').innerHTML+=tcopy+"<br>"	;

}

/*
function getURLvars()
{	var vars={};
	var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
		vars[key]=value;
	});
	return vars;
}*/


function getURLvars()
{	var vars={};
	var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value)
		{	vars[key]=value;
			console.log (value);
		});
	return vars;
}