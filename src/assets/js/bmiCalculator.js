const calculateMetricBMI = (weight, height) => {
    let results 
    results = weight / ((height / 100) * (height / 100))
    return results
}
const  getBMIClassification = (value) => {
	if (value < 18.5){
	return  "Underweight"
    }
    else  if (value > 18.5 && value < 25){
	return  "Healthy"
    }
    else  if(value > 25 && value < 30){
	return  "Overweight"
    }
    else if(value > 30 && value < 35){
    return "Obese"
    }
    else {
    return "Extremely obese"
    }
}