function toppings() {
    return new Promise((reso, rej) => {
        setTimeout(() => {
            reso(console.log("I love promise"))
        }, 2000)
    })
}

async function hello() {
    console.log("A")
    console.log("B")
    console.log("C")
try{
    await toppings()
}
catch{
    console.log("This")
}

    console.log("D")
    console.log("E")
}
hello()