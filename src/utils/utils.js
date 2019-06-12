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

export function setCookie(name, value, exdays) {  
    var d = new Date();  
    d.setTime(d.getTime() + (exdays*24*60*60*1000));  
    var expires = "expires="+d.toUTCString();  
    // document.cookie = cname + "=" + cvalue + "; " + expires;  
    document.cookie = `${name}=${value}; ${expires}`
} 

export function getCookie(cookie_name){
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);
    if (cookie_pos != -1){
        cookie_pos += cookie_name.length + 1; 
        var cookie_end = allcookies.indexOf(";", cookie_pos);
        if (cookie_end == -1){
            cookie_end = allcookies.length;
        }
        var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
    }
    return value;
} 


export function removeCookie(name){
    var ex = new Date();ex.setTime(ex.getTime()-1);
    // var path = process.env.NODE_ENV == 'development' ? '/':'/html'
    var path = './'
    // document.cookie = name + "=; expires="+ex.toGMTString();
    document.cookie = `${name}=;expires=${ex.toGMTString()};path=${path}`
}
