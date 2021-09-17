function tatqc()

{

	document.getElementById('sl1').innerHTML="";

	document.getElementById('sl2').innerHTML="";

	document.getElementById('top650').innerHTML="";

	document.getElementById('sidebar1').innerHTML="";

	document.getElementById('tqc').innerHTML="";

	document.getElementById('fl813691').innerHTML="";

	document.getElementById('right_float').innerHTML="";

}

 var milisec=0 

 var seconds=30

 document.getElementById('counter').innerHTML="Tắt Quảng Cáo: 30"; 



function display(){ 

 if (milisec<=0){ 

    milisec=9 

    seconds-=1 

 } 

 if (seconds<=-1){ 

    milisec=0 

    seconds+=1 

 } 

 else 

    milisec-=1 

    document.getElementById('counter').innerHTML='Tắt Quảng Cáo: '+seconds;

    var t= setTimeout("display()",100) 

	if(seconds==0){

	document.getElementById('counter').innerHTML='Tắt Quảng Cáo';

	

	document.getElementById('tqc').innerHTML="<a onclick='tatqc()'><img width='25' height='20'  border='0' src='https://i.imgur.com/QtkE1ib.png' ><span id='counter' style='vertical-align:bottom'>Tắt Quảng Cáo</span></a>";

	clearTimeout(t);

	}

} 
