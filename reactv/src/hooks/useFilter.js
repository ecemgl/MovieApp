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
			j++
		}
	}
  return [newArr,setNewArr];
}
export default useFilter;

