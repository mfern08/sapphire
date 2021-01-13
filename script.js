
function changeColor(){
    var wrapperDiv = document.getElementById("colorUpdate");
    wrapperDiv.style.backgroundColor = "red";
}



function getTriv() {
    var trivia = document.getElementById('triv')
    
    fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))

}    


