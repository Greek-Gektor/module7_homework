class ElectricalItems {
    constructor() {
        this.mainsPower = true
        this.power = false
    }

    powerOn() {
        return this.power = !this.power
    }
}

class Television extends ElectricalItems {
    constructor(color, brand, wattPower) {
        super();
        this.color = color
        this.brand = brand
        this.wattPower = wattPower
        this.volume = 0
    }

    setVolume(volume) {
        return this.volume = volume
    }
}

const television = new Television('black', 'Bosh', 100)
television.powerOn() // Включаем или выключаем питание
television.setVolume(100) // Устанавливаем громкость
console.log(television)


class Kettle extends ElectricalItems {
    constructor(color, brand, wattPower) {
        super();
        this.color = color
        this.brand = brand
        this.wattPower = wattPower
        this.heat = 0
    }

    setHeat(heat) {
        return this.heat = heat
    }
}

const kettle = new Kettle('white', 'samsung', 1500)
kettle.powerOn() //  Включаем или выключаем питание
kettle.setHeat(80) //  До какой температуры нагреть воду
console.log(kettle)




