function convertToc() {
    let fahrenheit = document.getElementById("inputKG").value; 
    let celsiusTemp = (fahrenheit - 32) * (5/9);
    return document.getElementById("celsConverted").innerHTML = `${celsiusTemp} Degrees Celsius`;
  }
  function convertTof() {
    let celsiusTemp = document.getElementById("inputKG").value; 
    let fahrenheit = celsiusTemp * 9/5 + 32;
    return document.getElementById("celsConverted").innerHTML = `${fahrenheit} Degrees Fahrenheit`;
  }