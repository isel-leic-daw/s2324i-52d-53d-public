//primitive types

const str : string = "DAW"
const aNumber1 : number = 12
const aNumber2 = 12
const flag : boolean = true

//Functions

type Operation = (a: number,b : number) => number

function add(a: number,b : number) : number{return a + b}
function sub(a: number,b : number) : number{return a - b}

function executeAndPrint(operation : Operation, a : number , b : number){
    console.log(operation(a,b))
}

executeAndPrint(add, 2,3)

//Arrays

const array1 : Array<String> = ["Hello","World"]

//Objects

const std1 : {name : string, nbr : number} = {name : "Jonh", nbr : 12}

type Student = {name : string, nbr : number}

const std2 : Student = std1

type Task = {
    text : string,
    owner?: string
}
const t1 : Task = {text : "Must study daw"}
const t2 : Task = {text : "Must study daw", owner : "Joao"}

console.log(t1)
console.log(t2)

//Unions

export function f1(parm : string | number){
    if(typeof parm == 'string'){
        console.log(parm)
    }else{
        console.log(parm + 1)
    }
}

//Discriminated Unions

type Result = 
    {type : "success" , message : string} 
    | {type : "error", error : Error}
    
function f2(res : Result){
    if(res.type == "success"){
        console.log(res.message)
    }else{
        console.log(res.error)
    }
}

const res : Result = { type : "success", message : "test"}
f2(res)

const div = document.getElementById("id")
div.innerText = "true" 






