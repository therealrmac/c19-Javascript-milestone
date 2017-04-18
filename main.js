console.log("hello");

var treeHeight= document.getElementById('height');
var charType= document.getElementById('char');
const enterButton= document.getElementById('enter');
const resetButton= document.getElementById("reset");


resetButton.addEventListener('click', () =>{
	location.reload();
});

function enterKey(x){
	if(x.keyCode ==13 || x.which==13){
	x.preventDefault();
	tree();
}
}

function tree(obj){
	var object={treeH:"",charT:""}
	treeH= treeHeight.value;
	charT= charType.value;

	console.log(treeH, charT);
	var x=" ";
	var y=0;
	var z;
	for (var i=0; i<treeH; i++){
		y=treeH-i;
		z= treeH-y+i+1;
		console.log(x.repeat(y),charT.repeat(z));
	}
	if(charT === "" || treeH ==="" || treeH==="0"){
		alert("Enter a value");
		location.reload();
	}
}


enterButton.addEventListener('click', tree);
document.getElementById('treesize').addEventListener('keypress', enterKey);
