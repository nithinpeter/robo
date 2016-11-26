'use strict'
const DIRECTION = require('./helper').DIRECTION;

class Robot {
    
    constructor() {
        this.position = {
            x: undefined,
            y: undefined,
            f: undefined
        }

        this.directions = [
            DIRECTION.NORTH, 
            DIRECTION.EAST,
            DIRECTION.SOUTH,
            DIRECTION.WEST
        ];
    }

    place(position) {
        if(this._isValidPosition(position)) {
            this.position = position; 
        }
    }

    move() {
        if(!this._hasPlaced(this.position)) 
            return;

        let x = this.position.x,
            y = this.position.y,
            f = this.position.f

        switch(f) {
            case DIRECTION.NORTH:
                y = y + 1;
                break;
            case DIRECTION.EAST:
                x = x + 1;
                break;
            case DIRECTION.SOUTH:
                y = y - 1;
                break;
            case DIRECTION.WEST:
                x = x - 1;
                break;
        }

        this.place({ x, y, f });
    }

    left() {
        if(!this._hasPlaced(this.position)) 
            return;
        
        let f = this.position.f - 1;

        if(f < 0) 
            f = DIRECTION.WEST;
        
        this.place({
            x: this.position.x,
            y: this.position.y,
            f: f
        });
    }

    right() {
        if(!this._hasPlaced(this.position)) 
            return;

        let f = this.position.f + 1;

        if(f > 3) 
            f = DIRECTION.NORTH;
        
        this.place({
            x: this.position.x,
            y: this.position.y,
            f: f
        });
    }

    report() {
        return this.position;
    }

    _isValidPosition(position) {
        if((position.x > 4 || position.x < 0) 
            || (position.y > 4 || position.y < 0) 
            || this.directions.indexOf(position.f) == -1) {
                return false; 
        }

        return true;
    }

    _hasPlaced(position) {
        if(typeof position.x == "undefined" 
            || typeof position.y == "undefined"  
            || typeof position.f == "undefined") {
                return false; 
            }
        
        return true;
    }
}

module.exports = Robot;