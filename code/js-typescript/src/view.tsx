/** @jsx createElement */

import { createElement } from "./create-element"

export const element1 = 
    createElement("div",{},
        createElement("p", {}, "Must Study"),
        createElement("p", {}, "DAW"))
        

export const element2 =
    <div>
        <p>Must study</p>
        <p>DAW</p>
    </div>