import { Interiors } from "./interiors.js"
import { Paints } from "./paints.js"
import { Technologies } from "./technology.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {  
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
        addCustomOrder()
    }
    }
)

//function that adds all other functions together to create one large HTML element to be displayed to the dom
export const theCars = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__tech options">
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Package Orders</h2>
            ${Orders()}
        </article>
    `
}

