const getClasses = (classes) => {
    return Object.keys(classes).filter(key => classes[key]).join(' ')
}



export default getClasses