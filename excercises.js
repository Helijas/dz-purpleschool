
// let balance = 1100;
// let bonus = 10;
// let isBanned = false;
// let gameByed = false;
// let gameSelling = true;

// function byingGame(balance, bonus, isBanned, gameByed, gameSelling){
//     let canBuyGame = (balance >= 1000 || bonus >= 100) 
//         && isBanned != true 
//         && gameByed != true 
//         && gameSelling == true;
    
//     if(canBuyGame == true){
//         console.log("Поздравляем! Игра куплена!")
//     } else if(balance < 1000){
//         console.log("Нехватает средств")
//     } else if(isBanned == true){
//         console.log("Вы заблокированы для покупки")
//     } else if(gameByed == true) {
//         console.log("Игра уже куплена")
//     } else if(gameSelling == false){
//         console.log("Игра не продаётся")
//     }
// }

// byingGame(balance, bonus, isBanned, gameByed, gameSelling)


// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// function calculateW(present){
//     return present * KG_IN_USD;
// }

// function calculateKm(distance){
//     return distance * KM_IN_USD;
// }

// function getExchangePrice(present1, present2, distance){
//     return calculateW(present1) + calculateW(present2) +  calculateKm(distance);
// }

// console.log(getExchangePrice(1, 2, 10))


// Упражнение Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит.
let price = 2000;

let age = 25;
let haveWork = true;
let money = 2000;

function enoughMoney(money, price){
    return money >= price ? true : false
}

function credit(age, haveWork){
    let creditSum = 0;
    if(age >= 24 && haveWork){
        return creditSum = 500;
    } else if (age >= 24){
        return creditSum = 100;
    }
}

function buyMac(price, money, age, haveWork){
    let buyed;
    if(enoughMoney(money, price)){
        console.log('поздравляем с покупкой');
        return buyed = true;
    } else if(credit(age, haveWork) >=  price - money){
        console.log(`Вам одобрен кредит ${price - money}$`)
        return buyed = true;
    } else {
        console.log('Нехватает средств')
        return buyed = false;
    }
}

buyMac(price, money, age, haveWork)

