var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);

// Stream accelerometer data
accel.on('data', function (xyz) {
  // Acceleration in x=xyz[0], y=xyz[1], z=xyz[2]
  if(xyz[2] < 0) { console.log('upside down'); } // Negative gravity in Z means upside down
});
