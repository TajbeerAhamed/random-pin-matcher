function getPin() {
    const pin = generatePin()
    const pinString = pin + ''
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin()

    const displayPin = document.getElementById('display-pin')
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {

    const number = event.target.innerText
    const typedNumberField = document.getElementById('typed-numbers')
    const previousTypedNumber = typedNumberField.value
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = ''
        }
        else if (number === '<') {
            const digit = previousTypedNumber.split('')
            digit.pop();
            const remainingDigits = digit.join('')
            typedNumberField.value = remainingDigits
        }

    }
    else {


        const newTypedNumber = previousTypedNumber + number
        typedNumberField.value = newTypedNumber
    }

})


document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin')
    const currentPin = displayPin.value;

    const typeNumberField = document.getElementById('typed-numbers')
    const typedNumber = typeNumberField.value;

    const pinMatched = document.getElementById('pin-matched')
    const pinUnmatched = document.getElementById('pin-unmatched')


    if (typedNumber === currentPin) {
        pinMatched.style.display = 'block'
        pinUnmatched.style.display = 'none'

    }
    else {

        pinUnmatched.style.display = 'block'
        pinMatched.style.display = 'none'
    }
})


