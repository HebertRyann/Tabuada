function tabuada(argument) {
	var tab = document.getElementById('txtini')
	var tabu = document.getElementById('seltab')
	
	if (tab.value.length == 0) {
		window.alert('DEU B.O')
	} else {
		var tab1 = Number(tab.value)
		tabu.innerHTML =''

		

		for (var c = 1; c <= 10; c++) {
			var re1 = tab1 * c
			var item = document.createElement('option')

			item.text=`${tab1} * ${c} = ${re1} `
			
			tabu.appendChild(item)
		}
	}
}