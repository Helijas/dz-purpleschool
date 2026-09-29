let language = prompt('Какой у тебя язык? Введи en - если английский, ru - если русский, de - если немецкий.');

function greet(language){
    switch(language) {
        case 'ru':
            console.log('Добрый день!')
        break;
        case 'en':
            console.log('Hello!')
        break;
        case 'de':
            console.log('Gutten tag!')
        break;
        default:
            console.log('greetings')
    }
}

greet(language)