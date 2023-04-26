let result = document.getElementById('result');

function addToResult(val) {
	result.value += val;
}

function clearResult() {
	result.value = '';
}

function backspace() {
	result.value = result.value.slice(0, -1);
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch(err) {
		result.value = 'Error';
	}
}