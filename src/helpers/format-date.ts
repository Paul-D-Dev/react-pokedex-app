// date.getMonth + 1 because January = Month 0
const formatDate = (date: Date = new Date()): string => {
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

export default formatDate;