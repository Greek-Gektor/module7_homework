function ElectricalItems() {
    this.mainsPower = true // Питане от сети
    this.power = false // Выключен
}

ElectricalItems.prototype.powerOn = function () {
    return this.power = !this.power
} // Включает питание

Television.prototype = new ElectricalItems()

function Television(color, brand, wattPower) {
    this.color = color
    this.brand = brand
    this.wattPower = wattPower
    this.volume = 0
}

Television.prototype.setVolume = function (volume) {
    return this.volume = volume
} // Устанавливает громкость

const television = new Television('black', 'Bosh', 100)

television.powerOn() // Включаем или выключаем питание
television.setVolume(100) // Устанавливаем громкость
console.log(television)

Kettle.prototype = new ElectricalItems()

function Kettle(color, brand, wattPower) {
    this.color = color
    this.brand = brand
    this.wattPower = wattPower
    this.heat = 0
}

Kettle.prototype.setHeat = function (heat) {
    return this.heat = heat
} // Устанавливает температуру воды

const kettle = new Kettle('white', 'samsung', 1500)
kettle.powerOn() //  Включаем или выключаем питание
kettle.setHeat(80) //  До какой температуры нагреть воду
console.log(kettle)

