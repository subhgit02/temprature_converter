const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celToFah = (cal) => {
        let fahrenheit = Math.round((cal*9/5)+32);
        return fahrenheit;
    }
    const fahToCel = (fah) => {
        let celsius = Math.round((fah-32)*5/9);
        return celsius;
    }
    let result;
    if(valueTemp == 'cal'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}° Fahrenheit`;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result}° Celsius`;
    }
    
}