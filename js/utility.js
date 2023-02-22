function updateItemNumber(itemId, isIncreased){
    const inputNumberField = document.getElementById(itemId);
    const inputNumberString = inputNumberField.value;
    const previousItemNumber = parseInt(inputNumberString);

    let newItemNumber;
    if(isIncreased == true){
        newItemNumber = previousItemNumber + 1;
    }
    else if(isIncreased == false && previousItemNumber > 0){
        newItemNumber = previousItemNumber - 1;
    }
    else if(previousItemNumber <= 0){
        alert('you cant not set the value less than 0!!');
        newItemNumber = 0;
    }

    inputNumberField.value = newItemNumber;

    return newItemNumber;
}


function updateCaseTotalPrice(itemId, newItemNumber){
    const itemTotalPrice = newItemNumber * 59;
    const casePriceElement = document.getElementById(itemId);
    casePriceElement.innerText = itemTotalPrice;
}

function updatePhoneTotalPrice(itemId, newItemNumber){
    const itemTotalPrice = newItemNumber * 1219;
    const casePriceElement = document.getElementById(itemId);
    casePriceElement.innerText = itemTotalPrice;
}


function getTextElementById(itemId){
    const inputField = document.getElementById(itemId);
    const inputValueString = inputField.innerText;
    const textValue = parseInt(inputValueString);
    return textValue;
}


function resetTotalAmount(inputId, updatedNumber){
    const subTotalElement = document.getElementById(inputId);
    subTotalElement.innerText = updatedNumber;
}

function calculateSubtotal(){
    // calculate subtotal
    const currentPhoneTotal = getTextElementById('phone-price');
    const currentCaseTotal = getTextElementById('case-price');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    resetTotalAmount('total-cost', currentSubTotal);

    // calculate 10% tax
    const taxAmountString = currentSubTotal * 0.1;
    const taxAmount = parseInt(taxAmountString);
    resetTotalAmount('total-tax', taxAmount);

    // calculate total amount
    const finalAmount = currentSubTotal + taxAmount;
    resetTotalAmount('payment', finalAmount);
}



// link to pin verification page
document.getElementById('security-check').addEventListener('click', function(){
    window.location.href = 'pin-verify.html'
})

