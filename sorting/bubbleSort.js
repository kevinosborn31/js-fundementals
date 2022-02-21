function bubbleSort(array) {
	let swapsPerformed = 0;
  for (i=0; i < array.length; i++) {
		if (array[i] > array[i+1]) {
			let firstNumber = array[i];
			let secondNumber = array[i+1];
			array[i] = secondNumber;
			array[i+1] = firstNumber;
			swapsPerformed++;
		}
	}
	console.log(array);
	if (swapsPerformed > 0) {
		bubbleSort(array);
	} else {
		return array;
	}

}