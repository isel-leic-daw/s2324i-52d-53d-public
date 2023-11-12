type Attributes = {
    [name : string] : string | boolean
}
type Child = HTMLElement | string

export function createElement(
    name: string, 
    attrs : Attributes,
    ...childs : Array<Child> ) : HTMLElement{
    //1 .Create element
    const elem = document.createElement(name)

    //2.set Attributes
    for(const atrName in attrs){
        const value = attrs[atrName]
        if(typeof value == 'string'){
            elem.setAttribute(atrName, value)
        }else{
            elem.setAttribute(atrName, "" )
        }  
    }
    //3. add childs
    childs.forEach( child =>{
        if(typeof child === 'string'){
            elem.appendChild(document.createTextNode(child))
        }else{
            elem.appendChild(child)
        }
    })

    return elem

}