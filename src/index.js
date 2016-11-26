'use strict'

let Robot = require('./robot');
let Helper = require('./helper'); 

let robot = new Robot(); 

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  var input = process.stdin.read();
  if (input !== null) {
    processInput(input);
  }
});

function processInput(input) {
    if(input.indexOf("PLACE") >= 0) {
        let positionInput = input.split(' ')[1];
        let arr = positionInput.split(',');
        let position = {
            x: parseInt(arr[0]),
            y: parseInt(arr[1]),
            f: Helper.getDirectionValue(arr[2])
        }
        robot.place(position);
    } else if(input.indexOf("MOVE") >= 0) {
        robot.move();
    } else if(input.indexOf("LEFT") >= 0) {
        robot.left();
    } else if(input.indexOf("RIGHT") >= 0) {
        robot.right();
    } else if(input.indexOf("REPORT") >= 0) {
        let position = robot.report();
        process.stdout.write(`${position.x},${position.y},${Helper.getDirectionText(position.f)}\n`);
        process.exit();
    } 
}