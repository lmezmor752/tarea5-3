radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (receivedNumber == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (receivedNumber == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (receivedNumber == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
})
let strip: neopixel.Strip = null
radio.setGroup(95)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
