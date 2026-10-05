let sum = 1000;
let cur = 'руб'
let needCur = '$'

function convertCur(sum, cur, needCur){
    let rubToDol = 85
    let eurTodol = 0.98

    if(cur == 'руб' && needCur == '$'){
        return sum/rubToDol + '$'
    } else if(cur == '€' && needCur == '$'){
        return sum/eurTodol + '$'
    } else if(cur == '$' && needCur == 'руб'){
        return sum * rubToDol + 'руб'
    } else if(cur == '$' && needCur == '€'){
        return sum * eurTodol + '€'
    } else {
        return null
    }
}