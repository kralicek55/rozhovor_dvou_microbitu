input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1500)
    basic.showLeds(`
        # # . # #
        # # # # #
        . . # . .
        # # # # #
        # # . # #
        `)
})
radio.onReceivedString(function (receivedString) {
    // Přijatý text
    basic.showString(receivedString)
    basic.showLeds(`
        # # . # #
        # # # # #
        . . # . .
        # # # # #
        # # . # #
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Vali")
})
basic.showIcon(IconNames.Butterfly)
radio.setGroup(1)
