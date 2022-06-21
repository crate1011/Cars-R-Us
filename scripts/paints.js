import { getColor, setColor } from "./database.js";

const colors = getColor()

//event listener that "hears" when something with the name of "style" gets clicked on and is changed
document.addEventListener(
    "change",
    (changeEvent) => { 
        if (changeEvent.target.id === "color") {
            setColor(parseInt(changeEvent.target.value))
        }
    }
)

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="color">'
    html += '<option value="0">Select a paint package</option>'

    const arrayOfOptions = colors.map( (color) => {
            return `<option value="${color.id}">${color.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}