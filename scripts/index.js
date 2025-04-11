t = e => {
	let n = document.getElementById(`p${e}`);
	if(n.classList.contains("dsc")){
		n.classList.remove("dsc");
		n.classList.add("dso");
	}else if(n.classList.contains("dso")){
		n.classList.remove("dso");
		n.classList.add("dsc");
	}
}
