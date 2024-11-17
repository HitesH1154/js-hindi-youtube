const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);



const shopingCart = [
    {
        items: "js coures",
        price: 2999
    },
    {
        items: "py coures",
        price: 999
    },
    {
        items: "moblie dey coures",
        price: 5999
    },
    {
        items: "data science coures",
        price: 12999
    },
]

const priceToPay = shopingCart.reduce( (acc, item) => acc + item.
price, 0)

console.log(priceToPay);
