const flowers = [
    {
        id: 1,
        color: "white",
        species: "Rose",
        price: .90
    },
    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 1.10
    }
]

const addFlower = (flowerObject) => {
    const lastFlower = flowers.length -1
    const currentLastFlower = flowers[lastFlower]
    const maxId = currentLastFlower.id
    const idForNewNote = maxId +1

    flowerObject.id = idForNewNote
    flowers.push(flowerObject)


}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
   for (const flower of flowers) {
       if (flower.price >= 1.00){
          expensiveFlowers.push(flower)
       } 
   }

    return expensiveFlowers  // Do not change this code
}

/* console.log(expensiveFlowers) */

// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

