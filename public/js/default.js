



function searchLibrary(){

	let entered = document.getElementById("searchBar").value;
	console.log(entered);

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {

			document.getElementById("library").innerHTML = "";
			let search_data = JSON.parse(this.responseText)

			search_data.forEach( index => {

				let a = document.createElement('a');
				a.href = "http://localhost:3000/books/" + index.isbn;
				a.target = "_blank";
				a.innerHTML = index.title + " by " + index.author ;


				let div = document.getElementById("library");
				div.appendChild(a);
				div.appendChild(document.createElement("br"));


			})
		   }
	 }
	xhttp.open("POST", `http://localhost:3000/someBooks?search=${entered}`, true);
	xhttp.send();


}
