let P0analog = 0
basic.forever(function () {
    P0analog = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    P0analog,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(P0analog)
    }
})
