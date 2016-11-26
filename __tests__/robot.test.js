/* eslint no-undef: "off" */

'use strict'

let DIRECTION = require('../src/helper').DIRECTION;
let Robot = require('../src/robot');


describe('Robot should', () => {
    let robot = new Robot();
    
    it('not get placed at location', () => {
        robot.place({ x: 5, y: 0, f: DIRECTION.NORTH });
        expect(robot.report()).toEqual({ x: undefined, y: undefined, f: undefined });
    })

    it('get placed at location', () => {
        robot.place({ x: 0, y: 0, f: DIRECTION.NORTH });
        expect(robot.report()).toEqual({ x: 0, y: 0, f: DIRECTION.NORTH });
    })

    it('report', () => {
        robot.place({ x: 0, y: 0, f: DIRECTION.NORTH });
        expect(robot.report()).toEqual({ x: 0, y: 0, f: DIRECTION.NORTH });
    })
})

describe('Robot should move', () => {
    let robot = new Robot();
    
    it('towards north', () => {
        robot.place({ x: 0, y: 0, f: DIRECTION.NORTH });
        robot.move();
        expect(robot.report()).toEqual({ x: 0, y: 1, f: DIRECTION.NORTH });
    })

    it('towards east', () => {
        robot.place({ x: 0, y: 0, f: DIRECTION.EAST });
        robot.move();
        expect(robot.report()).toEqual({ x: 1, y: 0, f: DIRECTION.EAST });
    })

    it('towards south', () => {
        robot.place({ x: 4, y: 4, f: DIRECTION.SOUTH });
        robot.move();
        expect(robot.report()).toEqual({ x: 4, y: 3, f: DIRECTION.SOUTH });
    })

    it('towards west', () => {
        robot.place({ x: 4, y: 4, f: DIRECTION.WEST });
        robot.move();
        expect(robot.report()).toEqual({ x: 3, y: 4, f: DIRECTION.WEST });
    })
})


describe('Robot should rotate', () => {
    let robot = new Robot();
    
    it('left', () => {
        robot.place({ x: 0, y: 0, f: DIRECTION.EAST });
        robot.left();
        expect(robot.report()).toEqual({ x: 0, y: 0, f: DIRECTION.NORTH });
    })

    it('right', () => {
        robot.place({ x: 0, y: 0, f: DIRECTION.WEST });
        robot.right();
        expect(robot.report()).toEqual({ x: 0, y: 0, f: DIRECTION.NORTH });
    })
})