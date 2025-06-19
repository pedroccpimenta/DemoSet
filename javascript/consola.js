
filename="";

////////////////////////////////////////////////////

async function sharetanda()
{		t=document.getElementById("tanda").value
		b=document.getElementById("brano").value
		url = "http://127.0.0.1:5353/page2?tandacorrente="+c[t][0].nome+"&brano='"+c[t][b].file+"'"
		console.log(url)
		try {
          fetch(url)
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok ' + response.statusText);
                  		}
                      return response.json();
              })
              .then(data => {
              	console.log(data)
              })
    }
    catch (error) {
            console.log('Error fetching data');
            throw error;
    }
}
    /////////////////////////////////////////////////////////////

function go1(){
	t=	document.getElementById("audio2");
	t.addEventListener('ended',function(e){
		console.log('ended');
		if (document.getElementById('autoplay').value=='autoplay:on')
		{
				wbrano('plus');
		}
		else
		{	console.log('autoplay:off')
			document.getElementById('sn').value="Autoplay off"
		}
		})


	ht1=setInterval("cambiai()",5000)

	litems=getURLvars("lista");
	console.log("litems:"+litems["lista"]);

	ht2=setInterval("verifica()",15000)

	if (litems['verifica'])
	{	document.getElementById("verifica").value="verifica:on"	;
		document.getElementById("verifica").style="font-weight:bold;";
		document.getElementById("autoplay").value="autoplay:on";
		document.getElementById("autoplay").style="font-weight:bold;";
	//	document.getElementById("verifica").style="font-weight:bold;";	

	}

	// Tandas :-)
		url=window.location.pathname;		
		filename=url.substring(url.lastIndexOf('/')+1)
		console.log(filename)
		//alert(filename)

		switch(filename.toLowerCase())
		{	case "cavallaro.htm": // "video.htm", "video2.htm":
			case "video.htm":
			case "milongadj4.htm":
				ncols=4;
				break;
			case "geral.htm":
				ncols=5;
				break;
			break;
				default:
				ncols=4	;
		}
	//alert('ncols:'+ncols);

if (ncols==5)
{i0=0;
}
else
{
	i0=3;

	lh=document.getElementById('abertura')
	for(j=1;j<c[0].length;j++)
	{		item = document.createElement("li");
			item.innerHTML="<span id='b.0."+j+"'  title='b.0."+j+"'  style='' onclick=\"play5(this,0,"+j+");\">"+c[0][j].nome+"</span>"
			lh.appendChild(item);
/*
			item.id="b."+i+"."+j
			item.title="b."+i+"."+j
			lh.appendChild(item);
			
			itemLirica=document.createElement("SPAN");
			itemLirica.id="b."+i+"."+j+".lirica"
			//itemLirica.innerHTML="<span style='margin-left:-5px;'></span>"
			itemLirica.innerHTML="<span></span>"
			lh.appendChild(itemLirica)
*/
			itemLirica=document.createElement("SPAN");
			itemLirica.id="b.0."+j+".lirica"
			//itemLirica.innerHTML="<span style='margin-left:-5px;'></span>"
			itemLirica.innerHTML="<span></span>"
			lh.appendChild(itemLirica)
	}

//Cortinas
	lh=document.getElementById('cortinas')
	for(j=1;j<c[1].length;j++)
	{		item = document.createElement("li");
			item.innerHTML="<span  id='b.1."+j+"' title='b.1."+j+"'  style='' onclick=\"play5(this,1,"+j+");\">"+c[1][j].nome+"</span>"
			lh.appendChild(item);

			itemLirica=document.createElement("SPAN");
			itemLirica.id="b.1."+j+".lirica"
			//itemLirica.innerHTML="<span style='margin-left:-5px;'></span>"
			itemLirica.innerHTML="<span></span>"
			lh.appendChild(itemLirica)
	}
//Fecho
	lh=document.getElementById('fecho')
	for(j=1;j<c[2].length;j++)
	{		item = document.createElement("li");
			item.innerHTML="<span  id='b.2."+j+"' style=''  title='b.2."+j+"'  onclick=\"play5(this,2,"+j+");\">"+c[2][j].nome+"</span>"
			lh.appendChild(item);
			itemLirica=document.createElement("SPAN");
			itemLirica.id="b.2."+j+".lirica"
			//itemLirica.innerHTML="<span style='margin-left:-5px;'></span>"
			itemLirica.innerHTML="<span></span>"
			lh.appendChild(itemLirica)
	}
}
	xc=0;
	nf=0;	
	for(i=i0;i<c.length;i++)
	{	ct=document.getElementById('tandas'+(i)%(ncols))

		iitem=document.createElement("img");
		iitem.src="./13pietre/p15.jpg"
		iitem.src=""
		
		iitem.style="display:none;max-width:100%;margin-top:-5px;"
		iitem.id="ii"+i.toFixed(0)
		iitem.title="ii"+i.toFixed(0)

		citem = document.createElement("div");
		citem.style="border-radius: 8px;margin:2px;margin-bottom:5px;padding-bottom:5px;margin-top:0px;"
		citem.id='ctanda'+i;

		switch(c[i][0].tipo)
		{	case "vals":
				citem.style.background="pink";	break;
			case "milonga":
				citem.style.background="aqua";	break; 
			case "ascolto":
				citem.style.background="papayawhip";	break; 
			case "tango cres":
				citem.style.background="yellowgreen";	break; 
			case "tango decres":
				citem.style.background="darkorange";	break; 
			case "tango unif":
				citem.style.background="tan";	break; 
			case "chacarera":
				citem.style.background="gold";	break; 
			case "zamba":
				citem.style.background="gold";	break; 
			default:
				citem.style.background=kor[((kor.length-1)*Math.random()).toFixed(0)];
		}
		
		//citem.title='tanda'+i
		ct.appendChild(citem)				//whitesmoke
		//citem.innerHTML="<h3 style='border-radius:8px;background:gray;color:blanchedalmond;margin:0px;'>&nbsp;"+c[i][0].nome+"</h3>"
		ct.appendChild(iitem)

		z="<h3 style='border-radius: 6px;background:whitesmoke;margin-bottom:2px;font-size:13px;margin-top:0px;font-weight:bold;'>"
		z+="<img id='li"+i+"' src='./pics/mut.png' alt='colapsa'  onclick='colapsa("+i+")'>"	
		z+="<input type=button id='b"+i+"' value='C' onclick='colapsa("+i+")' style='margin:0px;margin-bottom:0px;display:none;'> "+c[i][0].nome
		z+="</h3>"

		citem.innerHTML=z;	
		// tricky !!!

		
		item = document.createElement("ol");
		item.style='margin:0px;display:;margin-bottom:0px;padding:0px;margin-left:-10px;'
		item.id='tanda'+i
		//item.title='tanda'+i
		citem.appendChild(item)

		lh=document.getElementById('tanda'+i)
		lh.style="display:;margin:0px;padding-left:28px;"

		for(j=1;j<c[i].length;j++)
		{	//console.log(c[0]+":"+c[0].length)

			item = document.createElement("li");
			if (typeof c[i][j].nome != "undefined")
			{	//c[i][j].nome="\<sconosciuto\>"
				
			}// onclick=\"play5(this,"+i+","+j+");\" documentGetLementByID ("b.2.1")
			else{	c[i][j].nome=c[i][j].interprete //+" - "+c[i][j].titulo
					if(c[i][j].nome==undefined){ c[i][j].nome="\<sconosciuto\>";}
					if(c[i][j].nome==''){ c[i][j].nome="\<<i>sconosciuto</i>\>";}
						
					tmp=c[i][j].url.replace("..\\", "")

					switch(filename)
					{	case  "video.htm", "video2.htm":
							c[i][j].file=tmp.replace(".mp4", "")
							break;
						default:
							c[i][j].file=tmp.replace(".mp3", "")
					}
			}

			if (c[i][j].nome == ''){ c[i][j].nome="<i>sconosciuto</i>";}
			
			item.innerHTML="<span style='margin:0px;padding:0px;margin-left:0px;' onclick=\"play5(this,"+i+","+j+");\">"+c[i][j].nome+"</span>"
			//item.innerHTML+="<span style='margin:0px;padding:0px;margin-left:0px;' id=></span>"

			item.id="b."+i+"."+j
			item.title="b."+i+"."+j
			lh.appendChild(item);
			
			itemLirica=document.createElement("SPAN");
			itemLirica.id="b."+i+"."+j+".lirica"
			//itemLirica.innerHTML="<span style='margin-left:-5px;'></span>"
			itemLirica.innerHTML="<span></span>"
			lh.appendChild(itemLirica)

			nf++;	

			if (litems["lista"]=="true")
			{			
				switch(filename)
				{	case  "video.htm": case "video2.htm":

						fp=c[i][0].cartella + "/" +c[i][j].file + '.mp4'
						break;

					default:
						//	ncols=5	
						fp=c[i][0].cartella + "/" +c[i][j].file + '.mp3'
				}
				//alert(fp)
				fp=fp.replace( "./", ".\\")
				var omg=fp.replace( /\//gi, "\\")
				//tcopy='xcopy "'+omg+'" '+ ' "e:\milongadj\'+omg+'*" /s /v /y /q /i /c /J'; 
				tcopy='xcopy "'+omg+'" '+ ' "e:/milongadj/'+omg+'*" /s /y /q /i /c /J /D'; 
				
				document.getElementById('tocopy').innerHTML+=tcopy+"<br>"	;
				if (++xc%15==0)
				{	document.getElementById('tocopy').innerHTML+="echo "+xc.toString()+" files<br>"	;

				}
			}
		
		}	
		
		//document.getElementById('topics').innerHTML+=1+i+". "+c[i][0].nome+" ("+ iarr[i].length +")<br>";
	//	document.getElementById('tocopy').innerHTML+="_________________________________________<br>";
		tpp=0
		if (litems["lista"]=="true")
		{
			for(k=0;k<iarr[i].length;k++)
			{	tpp++;
				if (typeof iarr[i][k]=="undefined")
				{

				}
				else
				{
				document.getElementById('topics').innerHTML+="<img src='"+iarr[i][k]+"' title='"+iarr[i][k]+"' height=80 style='border-radius:5%;'>";

				if (tpp%6==0)
				{	document.getElementById('topics').innerHTML+="<br>";
				}

				fp=iarr[i][k];
				fp=fp.replace( "./", ".\\")
				var omg=fp.replace( /\//gi, "\\")
				tcopy='xcopy "'+omg+'" '+ ' "e:'+omg+'*" /s /v /y /q /D /i'; 
				//console.log(tcopy)
				document.getElementById('tocopy').innerHTML+=tcopy+"<br>"	;
				}	
			}
			document.getElementById('topics').innerHTML+="<br>";

		}
	//	alert(9)
	
	

	//console.log("- verifica2 -")
	p=document.getElementById("audio2");
	spos=p.currentTime;//.toFixed(1);
	//console.log("spos:"+spos)	}

		if (litems["menork"]!=undefined)
		{	limk=1*litems["menork"];
			for (i=0;i<limk;i++)
			(colapsa(i, 'A'))
		}
		document.getElementById("sn").title=nf+ " brani."
}
}
ot=-1
ci=1
t=0
function cambiai(x){
	//return;
	console.log('cambiai')
	ci++
	t=document.getElementById("tanda").value
	if (t=="")
	{	console.log("waiting...")
	}
	else
	{	//if(typeof iarr[])
		console.log("Tanda t:"+t)
		t=0+t*1.0
		console.log('tanda:'+t)	
		

		if(t==ot)
		{	console.log("autoplay")
		}
		else
		{	console.log("aui vamos:"+t)
   		pw=document.getElementById("tanda"+t).offsetWidth;
			console.log("...aqui vamos")	
	
			ci=0
			if(ot==-1)
			{	z=document.getElementById("ii"+t)
				z.style="align:center;display:;max-width:"+pw+"px;"	
				///		z.style.display="";
				console.log("1. width:"+pw)
			}
			else
			{	z=document.getElementById("ii"+ot)
				//z.style.display="none";
				z.style="display:none;max-width:"+pw+"px;"	
				
				z=document.getElementById("ii"+t)
				z.style="display:;max-width:"+pw+"px;"	
				//z.style.display="";
				console.log("2. width:"+pw)

			}
			ot=t
			
		}

try
{ 
	ci=ci%iarr[t].length 
}
catch (err)
{		console.log ("iarr manca a " + t)

}
		if ( isNaN(ci) ) 
		{}
		else
		{	console.log('settingoimg'+t+':'+ci)
			//z=document.getElementById("ii"+t)
			pw=document.getElementById("ctanda"+t).offsetWidth;

			z.src=iarr[t][ci]
			z.title=iarr[t][ci]
			///z.title=t+":"+ci+":"+z.id;

			z.style.borderRadius='5px'
			z.style.display='max-width:'+pw+'px;'
		}


if(litems["flash"]=='true')
{
	toc=((c.length-1)*Math.random()).toFixed(0)
	if(toc==document.getElementById("tanda").value)
	{	colapsa(toc, "A")
	}
	else
	{	colapsa(toc, "C")
	}
}
	

	}

	//debug=	getURLvars("debug")
	//console.log("debug:"+debug)
	if(litems["debug"]=='true')
	{		document.getElementById('tanda').style.display='';		
			document.getElementById('brano').style.display='';
	}

}

function colapsa(x, s){

	console.log('colapsa:'+x)

	switch(s)
	{	case "A":
			p=""
		case "C":
			p="none"
		default:
			p=document.getElementById("tanda"+x).style.display;
	}

		if(p=='none')
		{	
			document.getElementById("tanda"+x).style.display=""
			dumm=document.getElementById("b"+x)
			dumm.value="C"
			dumm.title="Chiudi"
			document.getElementById("li"+x).src="./pics/mut.png"
			document.getElementById("li"+x).alt="colapsa"

			document.getElementById("li"+x).title="Chiudi"

		}
		else
		{	document.getElementById("tanda"+x).style.display='none'
			document.getElementById("b"+x).value="A"
			document.getElementById("b"+x).title="Apri"
			document.getElementById("li"+x).src="./pics/min.png"
			document.getElementById("li"+x).alt="expande"
			document.getElementById("li"+x).title="Apri"
		}	
}

function wplay(){
	p=document.getElementById("audio2");
	p.play();


}
function wstop(){
	p=document.getElementById("audio2");
	p.pause();
}
function wvol(x){
	p=document.getElementById("audio2");
	vol=p.volume;//.toFixed(1);

	document.getElementById('cvol').value=vol.toFixed(1)
	if(x=='minus'){
		vol -= .1;
	}
	else{
		vol += .10;
	}
	if(vol<0){
		vol=0.	
	}
	else if(vol>1){
		vol=1.
	}
	p.volume=vol.toFixed(1);
	
}


function wseek(x){
	p=document.getElementById("audio2");
	spos=p.currentTime;//.toFixed(1);

	//document.getElementById('cvol').value=vol.toFixed(1)
	if(x=='minus'){
		p.currentTime-=10
	}
	else{
		p.currentTime+=10
	}
	if(vol<0){
		vol=0.	
	}
	else if(vol>1){
		vol=1.
	}
	//p.volume=vol.toFixed(1);	
}


function wloop(x){
	p=document.getElementById("wl").value;
	if(p=="loop")
	{	document.getElementById("audio2").loop=false
		document.getElementById("wl").value="noloop"
	}
	else
	{	document.getElementById("audio2").loop=true
		document.getElementById("wl").value="loop"

	}
}

function waleat(x){
	p=document.getElementById("wa").value;
	if(p=="aleat")
	{	document.getElementById("wa").value="noaleat"
	}
	else
	{	document.getElementById("wa").value="aleat"
	}
}

function autoplay(x){
	p=document.getElementById("autoplay").value;
	if(p=="autoplay:off")
	{	document.getElementById("autoplay").value="autoplay:on"
		document.getElementById("autoplay").style="font-weight:bold;";
	}
	else
	{	document.getElementById("autoplay").value="autoplay:off"
		document.getElementById("autoplay").style="font-weight:;";

	}
}

var tanda=0*1;
var brano=0*1;

function wbrano(x){
	p=document.getElementById("audio2");
	p.pause()
	brano=document.getElementById("brano").value*1;
    tanda=document.getElementById("tanda").value*1;

  //  console.log('t:'+tanda+',b:'+brano)
    loops=document.getElementById("loops").selectedOptions[0].value;
    console.log("loops:"+loops)
    if(loops != 'loopbrano')
    {	if(x=="plus")
    	{  	brano=1*brano+1;
    		//console.log ("s1:" + tanda + ":" + brano +"::" + c[tanda].length);		
	    	//console.log(brano+"=>"+c[tanda].length); 
	    	if( brano*1. >= 1.*c[tanda].length )
    		{	brano=1
    			//console.log ("cavolo")
    			if (loops!='looptanda')	
    			{	tanda++;
    				if (loops!='noloop')
    				{	if(tanda >= c.length){
    					tanda=0
    					brano=1
    					}
    				}
    				else
    				{	//tanda--;
    					
    					brano=1;
    				}
    			}
    		}
   		 }
    	else
    	{	brano--
  	    	if(brano<1)
    		{	
    			if(loops=='looptanda')	
    			{	brano=c[tanda].length-1
    			}
    			else
    			{	if (tanda!=0)		
    				{	tanda--
 						brano=c[tanda].length-1;	
    				}
    				else
    				{	if(loops=='noloop')
    					{	brano=1
    					}	
    					else
    					{	tanda=c.length-1;
    						brano=c[tanda].length-1
    					}	
    				}

    			}
   		    	//console.log('t:'+tanda+',b:'+brano)
    		}	
    	}

	   	if(document.getElementById("wa").value=="aleat")	
   		{	
   			if (loops!="looptanda")	
   			{	tanda=(Math.random()*(c.length-1)).toFixed(0)
   			}
   			brano=	(1*1+Math.random()*(c[tanda].length-1)).toFixed(0)
   			//if(brano==0) brano=1
   		}
	}

   	document.getElementById("tanda").value=tanda
   	document.getElementById("brano").value=brano

 //  	b=document.getElementById('b.'+tanda+'.'+brano)

	lh=document.getElementById('tanda'+tanda)
	lh.style="display:;margin:0px;"
	b=document.getElementById('b.'+tanda+'.'+brano)
   	play5(b,tanda,brano)

}
var tanda;
var brano;

var sof=0
function onthefly()
{		esto=c[tanda][brano]["nome"]
	//	console.log(esto + " ...")
		tbusca=tanda;	
		while (tbusca==tanda)
		{	tbusca=Math.floor(Math.random()*(c.length-1))
			//tbusca=54+Math.floor(3*Math.random())
		} 
		console.log('... '+tbusca)
		cof=c.length-1
		for (f in c[tbusca])
		{	
			dt=	c[tbusca][f]['nome']
			//console.log ("dt:"+dt)
			if (esto.toLowerCase()==dt.toLowerCase())
			{	//	console.log ("! adicionandao a "+cof)
					fp = c[tbusca][0]['cartella']+"/"+c[tbusca][f]['file']
					//c[cof].push()

					add=true
					lh=document.getElementById('tanda'+(c.length-1))
					ln=lh.childElementCount;
					
					for (i=1; i<c[cof].length; i++)
					{	if 	(c[cof][i]['file']==fp) 
						{	add=false;
							console.log ("ooopss!!! repetido!!")
						}	
					}

					if (add)
					{
					c[cof].push({'file':fp,'nome':dt})
					c[cof][0]['cartella']="."	

				//	console.log(fp)
					lh=document.getElementById('tanda'+(c.length-1))
					ln=lh.childElementCount;
					j=ln+1
					
					item = document.createElement("li");
					item.innerHTML="<span  id='b."+cof+"."+j+"' title='b."+cof+"."+j+"'  style='' onclick=\"play5(this,"+cof+","+j+");\">"+fp+"</span>"


					lh.appendChild(item);
					sof++
				}

				/*	if (sof>3)			
					{	clearInterval(otf)
						clearInterval(ht1)
					} */
 			}
		}
}
var otf;
otf=setInterval( function(){onthefly()}, 1000)

function play5(x,i,j){
	//console.log('P5:'+x);
	furl=c[i][0].cartella+"/"+c[i][j].file;
	//console.log('furl:'+furl);

	
	switch(filename.toLowerCase())
	{	case "video2.htm":
		case "video.htm":
			furl=furl+".mp4";
			break;
		default:
			furl=furl+".mp3";
	}



  var request = new XMLHttpRequest();
  request.open("GET", furl, true);
  request.send();
  request.onload = function() {
    status = request.status;
    if (request.status == 200) //if(statusText == OK)
    {
      console.log("image exists");
      existe = true
			document.getElementById("played").innerHTML+="<font color=olive>"+furl+"</font><br>"
    } else {
      console.log("image doesn't exist");
      existe = false
			document.getElementById("played").innerHTML+="<font color=red>"+furl+"</font><br>"
    }
  }


	document.getElementById("audio2").src=furl;
	

	document.getElementById('sn').value=furl;
	p=document.getElementById("audio2")

	p.volume=.9;	
	document.getElementById('cvol').value=.9;

	try{
	p.load();
	p.play();
 }
	catch(e)
	{
console.log("====================="+e)

	}	
	

	y=document.getElementById("b."+i+"."+j)
	z=document.getElementById("b."+i+"."+j+".lirica")
	y.style.color="orange"
	y.style.fontWeight="bold"
	y.style.fontSize="13px"

	console.log("equivs lirica:" + c[i][j].nome)
	equivs=[]
	equivs.push(['!', '']) // Paciencia!
	equivs.push(['ó', 'o'])
	equivs.push(['ú', 'u']) // Tú, el cielo y tú
	equivs.push(['á', 'a']) // Soñar y nada más
	equivs.push(['í', 'i']) // Vida mía
	equivs.push(['ñ', 'n']) // Soñar y nada más, Tristeza mariña

	for (l in lirica)
	{	//console.log (l)
		if (c[i][0].nome.toLowerCase()==lirica[l]["faixa"].toLowerCase())
		{	z.innerHTML="<hr style='margin-left:-10px;width:90%;background:white;'><font size=2>"+lirica[l]["lirica"]+"<hr style='margin-left:-10px;width:90%;'>"
		}

		/* if (l==148){ console.log("148:"+lirica[l]["faixa"])
			console.log(c[i][j].nome.substring(c[i][j].nome.length-lirica[l]["faixa"].length).toLowerCase())
			console.log(lirica[l]["faixa"].toLowerCase())
		}*/

		if (c[i][j].nome.toLowerCase() == lirica[l]["faixa"].toLowerCase())
		{	z.innerHTML="<hr style='margin-left:-10px;width:90%;background:white;'><font size=2>"+lirica[l]["lirica"]+"<hr style='margin-left:-10px;width:90%;'>"
			//z.style="margin:-15px;"
			//z.style="background:white;background-color:white;"
		}
		else if (c[i][j].nome.substring(c[i][j].nome.length-lirica[l]["faixa"].length).toLowerCase() ==  lirica[l]["faixa"].toLowerCase())
		{	z.innerHTML="<hr style='margin-left:-10px;width:90%;background:white;'><font size=2>"+lirica[l]["lirica"]+"<hr style='margin-left:-10px;width:90%;'>"
		}
		else
		{	vero=false	
			//console.log("vero:"+vero)
			a=c[i][j].nome.toLowerCase();
			b=lirica[l]["faixa"].toLowerCase()	
			for (k in equivs)
			{	a=a.replaceAll(equivs[k][0], equivs[k][1])
				b=b.replaceAll(equivs[k][0], equivs[k][1])
				//console.log("a:"+a+", b:"+b)
				if (a==b)
				{	vero=true
					break;
				}					
			}
		}
			if (vero) z.innerHTML="<hr style='margin-left:-10px;width:90%;background:white;'><font size=2>"+lirica[l]["lirica"]+"<hr style='margin-left:-10px;width:90%;'>"
	}

	document.getElementById("tanda").value=i
	tanda=i
	document.getElementById("brano").value=j
	brano=j

	var  a=0,b=0;
	for(a=0;a<c.length;a++)
	{	for(b=1;b<c[a].length;b++)
		{	y=document.getElementById("b."+a+"."+b);
			z=document.getElementById("b."+a+"."+b+".lirica");
			if((a==i)&&(b==j)){}
			else
			{	y.style.color="black";
				y.style.fontWeight="";
				y.style.fontSize="11px";
				
				try
				{
				z.innerHTML="";
				}
				catch(err)
				{	console.log("b."+a+"."+b+".lirica")

				}
			}
		}
	}
}


function aprid(x)
{	play5(document.getElementById('b.3.1'),x,1);document.getElementById('tanda'+x).style.display='';

}	


function verifica()
{	//Out.20 console.log("- verifica:" + document.getElementById("verifica").value);

	if (document.getElementById("verifica").value=='verifica:off') return;	
	console.log(document.getElementById("verifica").value)	

	p=document.getElementById("audio2");
	//p=document.getElementById("audio2");
	spos=p.currentTime;//.toFixed(1);
	console.log("spos:"+spos+" duration:"+p.duration)
	tt=document.getElementById('tandas')
	tr=document.createElement("TR");
	td1=document.createElement("TD");
	
	if (isNaN(p.duration))
	{	//td1.innerHTML=c[document.getElementById('tanda').value][document.getElementById('brano').value].url;
		td1.innerHTML="<font color=red>"+document.getElementById('audio2').src;
	//	wbrano('plus');
		//alert(c[document.getElementById('tanda').value][document.getElementById('brano').value].nome)		
	}
	else
	{
		td1.innerHTML="<font color=green>"+document.getElementById('audio2').src;
		//console.log(p.)
	}
	tr.appendChild(td1)
	tt.appendChild(tr)
	
	//if (document.getElementById('autoplay').value=='autoplay-on')
	//{	wbrano('plus');
	//}

	wbrano ('plus');
}

function listatandas()
{	tt=document.getElementById('tandas')
	for (i=0; i<c.length;i++)
	{	tr=document.createElement("TR");
		td1=document.createElement("TD");
		td2=document.createElement("TD");
		td1.innerHTML=c[i][0].nome;
		td2.innerHTML=c[i].length;

		tr.appendChild(td1)
		tr.appendChild(td2)
		tt.appendChild(tr)
	}


}

function setverifica()
{		if(document.getElementById("verifica").value=="verifica:on")
		{		document.getElementById("verifica").value="verifica:off"
				//document.getElementById("verifica").value=="verifica:off"
				document.getElementById("verifica").style="font-weight:;";
		}
		else
		{		document.getElementById("verifica").value="verifica:on"
				//document.getElementById("verifica").style=="verifica:off"
				document.getElementById("verifica").style="font-weight:bold;";			
				document.getElementById("autoplay").value="autoplay:on"
				document.getElementById("autoplay").style="font-weight:bold;";
		}
}


function onfading(){
	p=document.getElementById("fading").value;
	if(p=="fading")
	{	
		v=document.getElementById("audio2");
		vol=v.volume;//.toFixed(1);
		f2f=document.getElementById("f2f").value*1;
		//vol*=.6*1
		vol*=f2f
		document.getElementById('cvol').value=vol.toFixed(2)
		v.volume=vol.toFixed(3);	

		if(v.volume<.01)
		{	
			v.pause();
			document.getElementById("fading").value="tofade"	
		}
		else
		{
		setTimeout(onfading,1000)
		}
		
	}
	else
	{	document.getElementById("fading").value="fading"
		setTimeout(onfading,1000)
	}
}

document.onkeyup = function(e) {
	console.log(e.code)
/*)  if (e.which == 77) {

  	document.getElementById("pid").value=document.getElementById("pid").value*1+1
  	prev()
 }
*/
  if ((e.code == "Space")||(((e.code == "KeyP")))&&(e.altKey)) 
  {	console.log("... apanhei o if...")
	p=document.getElementById("audio2");
	if (p.paused)
	{ p.play()}
	else
	{	p.pause(); }
 }  

}


