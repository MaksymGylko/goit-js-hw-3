'use strict'

const countTotalSalary = function (employees) {
    const values = Object.values(employees);
    let total = 0;
    for (const value of values) {
        total += value
    } console.log(total);
};

countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
});

countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
});