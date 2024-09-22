maqueenPlusV2.I2CInit()
let P = true
basic.forever(function () {
    if (input.soundLevel() > 100) {
        P = !(P)
        if (P == true) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Open)
        } else {
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
            maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
        }
    }
})
