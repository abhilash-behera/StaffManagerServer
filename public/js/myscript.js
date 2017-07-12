function myFunction(){
	document.getElementById("preview").style.backgroundColor=document.getElementById("hex").value;
}

function getFormattedDate(){
	var date=new Date();
	var str=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
	return str;
}