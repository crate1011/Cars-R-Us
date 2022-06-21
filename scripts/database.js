const database = {
    technology: [
        { id: 1, tech: 'Basic Package', price: 500 },
        { id: 2, tech: 'Navigation Package', price: 600 },
        { id: 3, tech: 'Visibility Package', price: 900 },
        { id: 4, tech: 'Ultra Package', price: 1000 }
    ],
    colors: [
        { id: 1, color: 'Silver', price: 24},
        { id: 2, color: 'Midnight Blue', price: 12},
        { id: 3, color: 'Firebrick Red', price: 56},
        { id: 4, color: 'Spring Green', price: 150}
    ],
    interiors: [
        { id: 1, type: 'Beige Fabric', price: 300},
        { id: 2, type: 'Charcoal Fabric', price: 400},
        { id: 3, type: 'White Leather', price: 500},
        { id: 4, type: 'Black Leather', price: 600}
    ],
    wheels: [
        { id: 1, wheel: '17-inch Pair Radial', price: 500 },
        { id: 2, wheel: '17-inch Pair Radial Black', price: 500 },
        { id: 3, wheel: '18-inch Pair Spoke Silver', price: 500 },
        { id: 4, wheel: '18-inch Pair Spoke Black', price: 500 },
    ],
    customOrders: [
        {
            id: 1,
            techId: 3,
            interiorId: 2,
            wheelId: 3,
            colorId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {

    }
}

export const getTech = () => {
    return database.technology.map(tech => ({...tech}))
}
export const getColor = () => {
    return database.colors.map(color => ({...color}))
}
export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}