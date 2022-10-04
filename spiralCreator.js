
function createSpiral(n){
  
    console.log(n)
    type
  
    if(isNaN(n) || n < 1){
        return []
    } 
  
    let spiral = createEmptySpiral(n)
    spiral = fieldSpiralPositions(spiral)

    return spiral
      
}

function fieldSpiralPositions(spiral){

    const numberOfPositions = (spiral.length * spiral.length) + 1 
    let actualDirection = "EAST"
    let actualArrayPosition = 0
    let actualArray = 0
    const maxPosition = spiral.length
    const minPosition = -1
    let spiralCounter = 1

    do {

        if(actualDirection == "EAST"){
            if(actualArrayPosition == maxPosition || hasThisPositionValue(spiral, actualArray, actualArrayPosition)){
                actualDirection = nextDirection(actualDirection)
                actualArrayPosition--
                actualArray++
                continue
            }

            spiral[actualArray][actualArrayPosition++] = spiralCounter++
            continue

        }

        if (actualDirection == "SOUTH"){
            if (actualArray == maxPosition || hasThisPositionValue(spiral, actualArray, actualArrayPosition)){
                actualDirection = nextDirection(actualDirection)
                actualArray--
                actualArrayPosition--
                continue;
            }

            spiral[actualArray++][actualArrayPosition] = spiralCounter++
            continue
        }


        if (actualDirection == "WEST"){
            if(actualArrayPosition == minPosition || hasThisPositionValue(spiral, actualArray, actualArrayPosition)){
                actualDirection = nextDirection(actualDirection)
                actualArrayPosition++
                actualArray--
                continue
            }

            spiral[actualArray][actualArrayPosition--] = spiralCounter++
            continue;
        }

        if (actualDirection == "NORTH"){
            if(actualArray == minPosition || hasThisPositionValue(spiral, actualArray, actualArrayPosition)){
                actualDirection = nextDirection(actualDirection)
                actualArray++
                actualArrayPosition++
                continue
            }
            spiral[actualArray--][actualArrayPosition] = spiralCounter++
            continue
        }


    } while(spiralCounter < numberOfPositions)

    return spiral
}

function hasThisPositionValue(spiral, actualArray, actualArrayPosition){
    return spiral[actualArray][actualArrayPosition] != undefined
}

function createEmptySpiral(n){
  
    let spiralArray = [];

    for(let i = 0 ; i < n ; i++){
        let inerArray = []
        for(let u = 0 ; u < n ; u++){
            inerArray.push()
        }
        spiralArray.push(inerArray)
    }
    return spiralArray
}

function nextDirection(actualRotation){
    if(actualRotation == "EAST"){
        return "SOUTH"
    }

    if(actualRotation == "SOUTH"){
        return "WEST"
    }

    if(actualRotation == "WEST"){
        return "NORTH"
    }

    if(actualRotation == "NORTH"){
        return "EAST"
    }

    return "ERROR"

}

