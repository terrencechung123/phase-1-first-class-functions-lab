const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier){
    return function(value){
        return fareMultiplier * value;
    }
}

const fareDoubler = function(fareDoubler){
    return fareDoubler * 2;
}

const fareTripler = function(fareTripler){
    return fareTripler * 3;
}

function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}