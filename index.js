function timeConversion(s) {
    let hour = +s.split(':')[0];
    let minutes = s.split(':')[1];
    let seconds = s.split(':')[2].substring(0, 2);
    const type = s.substring(8);
    
    if(type === 'PM' && hour == 12){
        hour = 12;
    }
    else if(type === 'PM'){
        hour += 12;
    }
    if(type === 'AM' && hour == 12){
        hour = 0;
    }
    hour = hour > 9 ? hour : '0' + hour;
    return `${hour}:${minutes}:${seconds}`;
}

console.log(timeConversion('12:45:54PM'));