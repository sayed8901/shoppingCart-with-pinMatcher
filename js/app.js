function generatePin(){
    const random = Math.ceil(Math.random()*10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('4 digit pin not found:', pin)
        getPin();
    }
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    // reset the input value by new pin
    displayPinField.value = pin;
})

// usage of event bubble & event delegate 
document.getElementById('calculator').addEventListener('click', function(event){
    // to access all the numbers button (as child/ target)
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbersField.value;

    // check if the input is number or not, (NaN means Not a Number)
    // if it is not a number id true
    if(isNaN(number)){
        if(number == 'C'){
            // to clear all the typed numbers
            typedNumbersField.value = '';
        }
        else if(number == '<'){
            // to clear last number one by one
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbersField.value = remainingDigits;
        }
    }
    // if it is a number, it returns the concatenated 4 digit number.
    else{
        typedNumbersField.value = previousTypedNumber + number;
        return typedNumbersField.value;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersField.value;

    if(currentPin == typedNumbers){
        // alert('✅ Pin Matched... Secret door is opening for you');
        document.getElementById('pin-success').style.display = 'block';
        document.getElementById('pin-unsuccessful').style.display = 'none';
    }
    else {
        // alert('❌ Pin Did not Match, Please try again');
        document.getElementById('pin-unsuccessful').style.display = 'block';
        document.getElementById('pin-success').style.display = 'none';
    }
})

