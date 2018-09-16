
function getDesc() {
	var field = document.createElement('div');
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			div = document.createElement('div');
		    if ((i + j) % 2 == 0 ) {
		    	div.className = 'black';
		    	div.style.background = '#000000';
		    	div.style.width = '20px';
		    	div.style.height = '20px';
		    } else {
		    	div.className = 'white';
		    	div.style.background = '#ffffff';
		    	div.style.width = '20px';
		    	div.style.height = '20px';
		    }
		    field.appendChild(div);
		}
	}
	document.body.appendChild(field);
	field.style.width = '160px';
	field.style.height = '160px';
	field.style.display = 'flex';
	field.style.flexWrap = 'wrap';
	field.style.border = '2px solid black';
}
getDesc();

