'use strict'


const findBestEmployee = function (employees) {
    let keyWithBiggestValue = ""
    let maxValue = 0
    for (const key in employees) {
        if (maxValue < employees[key]) {
            maxValue = employees[key];
            keyWithBiggestValue = key;
        }
    } console.log(keyWithBiggestValue);
    
};

const firstDepartment = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

const secondDepartment = {
    poly: 12,
    mango: 17,
    ajax: 7,
};

const thirdDepartment = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
};

findBestEmployee(firstDepartment)
findBestEmployee(secondDepartment)
findBestEmployee(thirdDepartment)