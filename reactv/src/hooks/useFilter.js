import { useState } from "react";

function useFilter(array,type) {
	const [elements,setElements] = useState(array);
	const setNewArr = (param) => {
		setElements(param);
	};

	const mustArrLength = elements.length;
	const newArr = []; 
	var j= 0;
	for(var i = 0; i< mustArrLength ; i++){
		if(elements[i].programType === type && elements[i].releaseYear > 2010){
			newArr.push(elements[i])
			if(newArr.length === 21){
				break
			}
			j++
		}
	}

	newArr.sort(function(a, b) {
		var textA = a.title.toUpperCase();
		var textB = b.title.toUpperCase();
		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	});

  return [newArr,setNewArr];
}
export default useFilter;

