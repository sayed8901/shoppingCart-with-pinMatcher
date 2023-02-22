document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateItemNumber('case-number', true);
    updateCaseTotalPrice('case-price', newCaseNumber);

    // adjusting subtotal
    calculateSubtotal()
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateItemNumber('case-number', false);
    updateCaseTotalPrice('case-price', newCaseNumber);

    // adjusting subtotal
    calculateSubtotal()
})

