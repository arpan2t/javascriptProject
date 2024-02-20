function convert(){

    let enterValue = document.getElementById("inputValue").value
    if(C2F.checked && F2C.checked){
       document.getElementById('result').innerText="Choose Only Single At Once"
    }
    else if (C2F.checked){
        let final = ((enterValue*9)/5)+32
        document.getElementById('result').innerText=final+"F"
    }
    else if (F2C.checked){
        let final = ((enterValue-32)*5)/9
        document.getElementById('result').innerText=final+"C"
    }
    else{
        document.getElementById('result').innerText="Coose One"
    }
}