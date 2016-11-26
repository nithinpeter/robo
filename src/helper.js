const DIRECTION = {
    NORTH: 0,
    EAST: 1,
    SOUTH: 2,
    WEST: 3
}

function getDirectionText(direction) {
    switch(direction) {
        case DIRECTION.NORTH:
            return "NORTH";
        case DIRECTION.EAST:
            return "EAST";
        case DIRECTION.SOUTH:
            return "SOUTH";
        case DIRECTION.WEST:
            return "WEST";
    }
}

function getDirectionValue(direction) {
    if(direction.indexOf("NORTH") >= 0)
        return DIRECTION.NORTH;
    else if(direction.indexOf("EAST") >= 0)
        return DIRECTION.EAST;
    else if(direction.indexOf("SOUTH") >= 0)
        return DIRECTION.SOUTH;
    else if(direction.indexOf("WEST") >= 0)
        return DIRECTION.WEST;
}

module.exports = {
    DIRECTION,
    getDirectionText,
    getDirectionValue
}