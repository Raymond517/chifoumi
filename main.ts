input.onButtonPressed(Button.A, function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        Envoye = 0
        radio.sendString("FEUILLE")
        basic.showIcon(IconNames.SmallSquare)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        Envoye = 1
        radio.sendString("CISEAU")
        basic.showIcon(IconNames.Scissors)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        Envoye = 2
        radio.sendString("CAILLOU")
        basic.showIcon(IconNames.Diamond)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "FEUILLE") {
        if (Envoye == 0) {
            basic.showString("Match Nul")
        } else if (Envoye == 1) {
            basic.showString("Gagne")
        } else {
            basic.showString("Perdu")
        }
    } else if (receivedString == "CISEAU") {
        if (Envoye == 0) {
            basic.showString("Perdu")
        } else if (Envoye == 1) {
            basic.showString("Matchn Nul")
        } else {
            basic.showString("Gagne")
        }
    } else if (receivedString == "CAILLOU") {
        if (Envoye == 0) {
            basic.showString("Gagne")
        } else if (Envoye == 1) {
            basic.showString("Perdu")
        } else {
            basic.showString("Match nul")
        }
    }
})
let Envoye = 0
radio.setGroup(1)
