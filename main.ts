let Humtext = ""
let Hum = 0
let temptext = ""
let temp = 0
envirobit.setLEDs(envirobit.OnOff.Off)
basic.forever(function () {
    temp = envirobit.getTemperatureDecimal()
    temptext = convertToText(temp)
    Hum = envirobit.getHumidity()
    Humtext = convertToText(Hum)
    basic.showString(temptext)
    basic.showString("C")
    basic.showString(Humtext)
    basic.showString("%")
})
