export default function getDate(option) {
    if (option == 'fullDate') {
        let date = new Date();
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        let hour = date.getHours().toString().padStart(2, '0');
        let minute = date.getMinutes().toString().padStart(2, '0');
        let second = date.getSeconds().toString().padStart(2, '0');
        let millisecond = date.getMilliseconds().toString().padStart(3, '0');
        return `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}Z`;
    }

    let date = new Date()
    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');
    return `${hour}:${minute}:${second}`;
}

