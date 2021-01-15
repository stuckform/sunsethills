document.getElementById("btnSubmit").addEventListener("click", SunsetHills);
document.getElementById("btnClear").addEventListener("click", function () {
    document.getElementById("results").innerHTML = "";
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("num3").value = "";
        document.getElementById("num4").value = "";
        document.getElementById("num5").value = "";
});


function SunsetHills() {
    //1: collect data
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);
    let output = document.getElementById("results");
    //2: Turn the user data into an array
    let userArray = [num1, num2, num3, num4, num5]

    // 3:create an ascending array using a for loop
    let highestBld = userArray[0];
    let sunSet = [];
    sunSet.push(highestBld);
    
    for (let i = 1; i < userArray.length; i++) {
        //    if the current position is higher than the position of the highest building than the 
        if (userArray[i] > highestBld) {
            highestBld = userArray[i]
            sunSet.push(highestBld);
        }
    };

    output.innerHTML = `The buildings that can see the sunset are ${sunSet.join(',')}`;


};
