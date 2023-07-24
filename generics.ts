const score : Array<number> = []
const names : Array<string> = []

function identityOne(val: number | boolean): number | boolean{
    return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<type>(val:type):type{
    return val
}

// identityThree("3")

function identityFour<T>(val:T):T{
    return val
}

// interface Bottle{
//     brand: string,
//     type: number
// }

// identityFour<Bottle>({})


// GENERICS IN ARRAY
function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts =<T>(products: T[]): T => {
    //do some database operations
    const myIndex=4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction <T, U extends Database>(valOne: T, valTwo: U): object{
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(2,{})



interface Quiz{
    name: string,
    type: string
}

interface course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
}