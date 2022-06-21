import { getColor, getTech, getInterior, getWheels, getOrders} from "./database.js"
const colors = getColor()
const techs = getTech()
const interiors = getInterior()
const wheels = getWheels()



const buildOrderListItem = (order) => {
    const foundColor = colors.find((color) => {
        return color.id === order.colorId
    }
    )

    const foundTech = techs.find((tech) => {
        return tech.id === order.techId
    }
    )

    const foundInterior = interiors.find((interior) => {
        return interior.id === order.interiorId
    }
    )
    const foundWheels = wheels.find((wheel) => {
        return wheel.id === order.wheelId
    }
    )

    const totalCost = foundTech.price + foundInterior.price + foundWheels.price + foundColor.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
</li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

