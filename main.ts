input.onButtonPressed(Button.A, function () {
    radio.sendString("Vali")
})
radio.onReceivedString(function (receivedString) {
    // Přijatý text
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
radio.setGroup(1)
basic.forever(function () {
	
})
