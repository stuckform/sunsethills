document.getElementById("btnSubmit").addEventListener("click", SunsetHills);
document.getElementById("btnClear").addEventListener("click", Clear);


function SunsetHills() {
    //1: collect data
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);
    let num5 = parseInt(document.getElementById("num5").value);
    //2: Turn the user data into an array
  let userArray = [num1, num2, num3, num4, num5]

  // 3:create an ascending array using a for loop
    let highestBld = userArray[0];
    let sunSet = [];
    sunSet.push(highestBld);
    
    for(let i=1; i < userArray.length; i++){
        if(userArray[i] > highestBld){
            highestBld = userArray[i]
            sunSet.push(highestBld);
        }
    }

    document.getElementById("results").innerText =`The buildings that will see the sunset are[${sunSet.join(',')}]`;
}
function Clear(){
document.getElementById("results").innerText = "";
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";
document.getElementById("num3").value = "";
document.getElementById("num4").value = "";
document.getElementById("num5").value = "";
 

    
}



