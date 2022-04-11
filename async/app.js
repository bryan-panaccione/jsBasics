///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// How to play
// Issue commands to your runner inside the yourCode function

// runner.moveRight() // moves right
// runner.moveLeft()  // moves left
// runner.speedUp()   // speeds up
// runner.slowDown()  // slows down

// You can chain on commands to the runner object, e.g.
// runner.moveRight().speedUp().speedUp() 

// Run a command from above after a specified delay:
// after100(fn)
// after300(fn)
// after600(fn)
// after1000(fn)
// after3000(fn)
// after9000(fn)

// example: 

// after100(function(){
//     runner.moveRight()
// })

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// function yourCode() { ROUND 2 SOLUTION

//     // ADD YOUR CODE HERE

//     // Uncomment the lines below to get started
//     console.log(runner);
//     runner.moveRight()
//     after9000(() => { after1000(() => { after1000(() => { runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp() }) }) })




// }
// function yourCode() { //ROUND 3 SOLUTION

//     // ADD YOUR CODE HERE

//     // Uncomment the lines below to get started
//     console.log(runner);
//     runner.moveRight()
//     after3000(() => { runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp() })
//     after9000(() => { runner.slowDown().slowDown().slowDown().slowDown() })




// }

// function yourCode() { //ROUND 4 SOLUTION

//     // ADD YOUR CODE HERE

//     // Uncomment the lines below to get started
//     console.log(runner);
//     runner.moveRight()
//     after3000(() => after3000(() => { runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp() }))
//     after9000(() => { runner.moveLeft().slowDown().slowDown().slowDown().slowDown() })
//     after9000(() => { after3000(() => { after1000(() => after300(() => { runner.moveRight().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp() })) }) })




// }

function yourCode() { //ROUND 5 SOLUTION

    // ADD YOUR CODE HERE

    // Uncomment the lines below to get started
    console.log(runner);
    runner.moveRight().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp()
    after3000(() => { runner.speedUp() })
    after3000(() => after1000(() => { runner.moveLeft().slowDown() }))
    after3000(() => after3000(() => { runner.slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown() }))
    after9000(() => after9000(() => { runner.moveRight().speedUp().speedUp().speedUp().speedUp() }))
    after9000(() => after9000(() => after3000(() => after3000(() => after1000(() => after600(() => { runner.moveLeft().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp() }))))))
    after9000(() => after9000(() => after3000(() => after3000(() => after3000(() => after1000(() => { runner.moveRight().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown().slowDown() }))))))
    after9000(() => after9000(() => after9000(() => after9000(() => after3000(() => after3000(() => after1000(() => after1000(() => { runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp() }))))))))

}


// uncomment the next round when you have completed the current one
//round1() // Freebie
//round2() // Warm up (HINT: You will need to start using the afterX commands)
//round3() // Tricky
//round4() // Hard
round5() // Nightmare


// DO NOT MODIFY
// Will stop the program whenever runner.moveRight or runner.moveLeft throws an error
yourCode()
pacer.movement(round)
// DO NOT MODIFY
