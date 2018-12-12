`use strict`;


const adminLogin = `admin`;

const adminPassword = `m4ng0h4ckz`;

let message;

let userLogin;

let userPassword;

userLogin = prompt('Введите логин!');

if (userLogin === null) { message = alert('Отменено пользователем!');

} else if (userLogin !== adminLogin) { message = alert('Доступ запрещен, неверный логин!');

} else if (userLogin === adminLogin) { userPassword = prompt('Введите пароль!');

if (userPassword === null) { message = alert('Отменено пользователем!');

} else if (userPassword !== adminPassword) { message = alert('Доступ запрещен, неверный пароль!');

} else if (userPassword === adminPassword) { message = alert ('Добро пожаловать!');
}

}




