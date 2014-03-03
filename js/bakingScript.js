
// BUTTER CONVERSION METHOD

function convertButter(form){
	//the thing.thing.value works here over getvaluebyid - why????
	//if listOptions value = 1-4, then do this convesion
	var butterToConvert = parseFloat(butterform.butterconv.value);
	console.log(butterToConvert);

	var listValue = parseFloat(butterform.listOptions.value);
	var butterCup = 0;
	var butterLbs = 0;
	var butterTbs = 0;
	var butterOz = 0;

	if(listValue === 1){

		console.log("to cups");
		butterCup = (butterToConvert * 226.8);
		console.log(butterCup);
		butterform.butterResult.value = butterCup;

	} else if(listValue === 2) {

		console.log("to lbs");
		butterCup = (butterToConvert * 226.8 *2);
		console.log(butterCup);
		butterform.butterResult.value = butterCup;

	} else if(listValue === 3) {

		console.log("to tbs");
		butterCup = (butterToConvert * 226.8)/16;
		console.log(butterCup);
		butterform.butterResult.value = butterCup;

	} else if(listValue === 4) {

		console.log("to oz");
		butterCup = (butterToConvert * 226.8)/8;
		console.log(butterCup);
		butterform.butterResult.value = butterCup;
	}

}

//FLOUR CONVERSION METHOD
function convertFlour(form){

	var flourToConvert = parseFloat(flourform.flourconv.value);
	console.log(flourToConvert);

	
	var flourCup = 0;
	var flourLbs = 0;
	var flourTbs = 0;
	var flourOz = 0;
	var listValue = parseFloat(flourform.listOptionsF.value);

	console.log(listValue);
	if(listValue === 1){

		console.log("from cups");
		flourCup = (flourToConvert * 125);
		console.log(flourCup);
		flourform.flourResult.value = flourCup;

	} else if(listValue === 2){

		console.log("from lbs");
		flourCup = (flourToConvert * 453.6);
		console.log(flourCup);
		flourform.flourResult.value = flourCup;

	} else if(listValue === 3){

		console.log("from tbs");
		flourCup = (flourToConvert * 453.6);
		console.log(flourCup);
		flourform.flourResult.value = "cups?";

	} else if(listValue === 4){

		console.log("from oz");
		flourCup = (flourToConvert * 125)/4.4;
		console.log(flourCup);
		flourform.flourResult.value = flourCup;

	}
}



				
//TEMPERATURE CONVERSION METHOD

function convertTemperature(form){

	var tempToConvert = parseFloat(tempform2.tempconvtwo.value);
	var celciusOutput = 0;
	var farenheightOutput = 0;
	var listValue = parseFloat(tempform2.listOptions.value);
	console.log(listValue);

	if (listValue=== 1){
		console.log("farenheight to c");
		farenheightOutput = (tempToConvert - 32.0) * 5.0 / 9.0;
		tempform2.temperatureResult.value = farenheightOutput+ " c";

	} else if (listValue === 2){
		console.log("celcius to f");
		celciusOutput = ((tempToConvert * 9.0)/ 5.0) + 32.0;
		tempform2.temperatureResult.value = celciusOutput + " f";
	}
}			
