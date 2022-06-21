import { getTech, setTechnology } from "./database.js";

const technologys = getTech()

//event listener that "hears" when something with the name of "style" gets clicked on and is changed
document.addEventListener(
    "change",
    (changeEvent) => { 
        if (changeEvent.target.id === "technology") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="technology">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologys.map( (technology) => {
            return `<option value="${technology.id}">${technology.tech}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}