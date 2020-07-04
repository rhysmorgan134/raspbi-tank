const sensor = require('ds18b20-raspi');

setInterval(readTemp, 1000)

function readTemp() {
    var temp = sensor.readSimpleC(2);
    console.log(temp);
};