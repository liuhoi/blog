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