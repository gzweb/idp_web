export function formatSeconds(value) {
    let secondTime = parseInt(value);// 秒
    let minuteTime = 0;// 分
    let hourTime = 0;// 小时
    if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
        minuteTime = parseInt(secondTime / 60);
        secondTime = parseInt(secondTime % 60);
        if (minuteTime > 60) {
            hourTime = parseInt(minuteTime / 60);
            minuteTime = parseInt(minuteTime % 60);
        }
    };

    return {
        s: secondTime < 10 ? '0' + secondTime : secondTime,
        m: minuteTime < 10 ? '0' + minuteTime : minuteTime,
        h: hourTime < 10 ? '0' + hourTime : hourTime
    };
}


// export function initDefaultDate(n,timeUnit) {
//     var curr_date = new Date();
//     if (timeUnit === 'd') {
//     curr_date.setDate(curr_date.getDate() + n);
//     } else if (timeUnit === 'M') {
//         curr_date.setMonth(curr_date.getMonth() + n);
//     } else if (timeUnit === 'y') {
//         curr_date.setFullYear(curr_date.getFullYear() + n);
//     }
//     var strYear = curr_date.getFullYear();
//     var strMonth = curr_date.getMonth()+1;
//     var strDay = curr_date.getDate();
//     var strHours = curr_date.getHours();
//     var strMinutes = curr_date.getMinutes();
 
//     // var datastr = strYear + '-' + formatNumber(strMonth) + '-'
//     //     + formatNumber(strDay) +' '+ formatNumber(strHours) + ':' + formatNumber(strMinutes);
//     var datastr = strYear + '-' + formatNumber(strMonth) + '-'
//         + formatNumber(strDay);
//     return datastr;
// }


// function formatNumber(value){  
//     return (value < 10 ? '0' : '') + value;  
// }
