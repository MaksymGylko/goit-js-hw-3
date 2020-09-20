'usr strict'

const empty = {};

const userProps = {
    name: 'Mango',
    age: 20,
};

const userOnlineProps = {
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
};

let countProps = function (obj) {
    let keys = Object.keys(obj)
    console.log(keys.length);
};

countProps(empty)
countProps(userProps)
countProps(userOnlineProps)
