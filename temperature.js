let kelvin = 0 ; // this is kelvin temp
let celcius = kelvin - 273 ; // this is kelvin to celcius temp
console.log(`${kelvin} kelvin adalah : ${celcius} celcius`) ;
let fahrenheit = (celcius * 9/5) + 32 ; // this is celc temp to fahrenheit
fahrenheit = (Math.floor(fahrenheit)) ; // round down floating result
// console.log(fahrenheit) ;
console.log(`${celcius} celcius adalah : ${fahrenheit} fahrenheit`) ;