document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateItemNumber('phone-number', true);
    updatePhoneTotalPrice('phone-price', newPhoneNumber);

    // adjusting subtotal
    calculateSubtotal()
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updateItemNumber('phone-number', false);
    updatePhoneTotalPrice('phone-price', newPhoneNumber);

    // adjusting subtotal
    calculateSubtotal()
})

