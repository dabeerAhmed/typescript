function detectType(val: number | string){
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}
detectType(3)

function provideId(id: string | null){
    if (!id){
        console.log("please provide id")
        return   
    }
    id.toLowerCase()
}
provideId("abc")


function printAll(val: string | string[] | null){
    if (val) {
        if (typeof val === "object") {
            for (const s of val){
                console.log(s);
            }
            
        }   else if (typeof val === "string"){
            console.log(val);

        }
        
    }
}



interface user {
    name: string,
    email: string
}

interface admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: user | admin){
    if ("isAdmin" in account) {
        return account.isAdmin
        
    }
}


function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        
    }
    else {
        console.log(x.toUpperCase());
    }
}


type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return(pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}


interface Circle {
    kind: "circle"
    radius: number
}

interface Square{
    kind: "square"
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI*shape.radius**2
    } else{
        // return shape.side * shape.side
    }
}


function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.width * shape.width
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}