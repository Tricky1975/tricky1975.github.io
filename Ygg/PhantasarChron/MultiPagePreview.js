let Tabel 
/*
function Hide(T) { document.getElementById("PChapter_"+T).style.visibility="hidden" };
function Show(T) { document.getElementById("PChapter_"+T).style.visibility="visible" };
*/

function Show(T) { 
	for (let item of Tabel) if (item["ID"]==T)	document.getElementById("PrevContent").innerHTML = item["Content"] }
function Start(_Tabel) {
	console.log("Initiating!")
	//for (let item of _Tabel) {
	//	Hide(item["ID"]);
	//	console.log(item["ID"]+" ("+item["Caption"]+") set!")
	//}
	Tabel=_Tabel
	Show(_Tabel[0]["ID"])
		
}
/*
function Click(_ID) {
	for (let item of Tabel) {
		if (_ID===item["ID"])
			Show(_ID)
		else
			Hide(_ID)
	}
}*/

function ShowMenu(element) {
	let txt = "<table width=\"100%\"><tr>";
	for (let item of Tabel) 
		txt += "<td><center><a href=\"javascript: Show('"+item["ID"]+"')\">"+item["Caption"]+"</center></td>" 
	txt += "</tr></table>"
	document.getElementById(element).innerHTML=txt
}
	