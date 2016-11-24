// Demonstrate a digital signal
// Pins: any logic analyzer pin to pin 0 on port A

var tessel = require('tessel');
var port = tessel.port.A;

// Toggle pin 0 10x/second
setInterval(function () {
  port.pin[0].toggle();
}, 100);

console.log("Blinking a pin");
