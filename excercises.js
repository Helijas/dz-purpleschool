
let balance = 1100;
let bonus = 10;
let isBanned = false;
let gameByed = false;
let gameSelling = true;

function byingGame(balance, bonus, isBanned, gameByed, gameSelling){
    let canBuyGame = (balance >= 1000 || bonus >= 100) 
        && isBanned != true 
        && gameByed != true 
        && gameSelling == true;
    
    if(canBuyGame == true){
        console.log("Поздравляем! Игра куплена!")
    } else if(balance < 1000){
        console.log("Нехватает средств")
    } else if(isBanned == true){
        console.log("Вы заблокированы для покупки")
    } else if(gameByed == true) {
        console.log("Игра уже куплена")
    } else if(gameSelling == false){
        console.log("Игра не продаётся")
    }
}

byingGame(balance, bonus, isBanned, gameByed, gameSelling)

console.log("" || 'Гость')