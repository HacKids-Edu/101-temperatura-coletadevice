basic.forever(function () {
    serial.writeValue("Celsius", input.temperature())
    basic.pause(1000)
})
