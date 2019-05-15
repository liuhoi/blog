export const timetampToTime = (timestamp,line ="-") => {
    let year,
        month,
        day,
        hour,
        minute,
        time = new Date(+timestamp);

    year = time.getFullYear();
    month = time.getMonth() + 1;
    day = time.getDate();
    hour = time.getHours();
    minute = time.getMinutes();

    month = month <10 ? '0' + month : month;
    day = day < 10? '0' + day : day;
    hour = hour < 10? '0' + hour : hour;
    minute = minute < 10? '0' + minute : minute;
    return `${year}${line}${month}${line}${day} ${hour}:${minute}`
}

export const timetampToYear = (timestamp,line ="-") => {
    let year,
        time = new Date(+timestamp);

    year = time.getFullYear();
    return `${year}`
}
export const timetampToMonth = (timestamp,line ="-") => {
    let month,
        day,
        time = new Date(+timestamp);

    month = time.getMonth() + 1;
    day = time.getDate();

    month = month <10 ? '0' + month : month;
    day = day < 10? '0' + day : day;
    return `${month}${line}${day}`
}

export const scrollAnimation = (to = 0, time = 600) => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let direction = to - scrollTop > 0 ? 'up': 'down'
    let step = Math.abs((scrollTop - to)/(time/60));
    let position = document.documentElement.scrollTop;
    function smooth(){
        switch(direction){
            case 'up':
                position += step;
                if(position < to){
                    document.documentElement.scrollTop = position;
                    requestAnimationFrame(smooth)
                }else{
                    document.documentElement.scrollTop = to;
                }
            break;
            case 'down':
                position -= step;
                if(position > to){
                    document.documentElement.scrollTop = position;
                    requestAnimationFrame(smooth)
                }else{
                    document.documentElement.scrollTop = to;
                }
            break;
        }
    }
    requestAnimationFrame(smooth)
}

export const getElementTop = (element) => {
    let actualTop = element.offsetTop; 
    let current = element.offsetParent; 
    while (current !== null){ 
        actualTop += current. offsetTop; 
        current = current.offsetParent; 
    } 
    return actualTop; 
}