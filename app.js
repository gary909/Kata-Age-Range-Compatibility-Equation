function datingRange(age){
    if(age > 14){
        let myMin = (age / 2) + 7;
        let myMax = (age - 7) * 2;
        return Math.floor(myMin) + "-" + Math.floor(myMax);
    } else {
        let myMin = age - (0.10 * age);
        let myMax = age + (0.10 * age);
        return Math.floor(myMin) + "-" + Math.floor(myMax);
    }
}

console.log(datingRange(17)); // "15-20"
console.log(datingRange(40)); // "27-66"
console.log(datingRange(15)); // "14-16"
console.log(datingRange(35)); // "24-56"
console.log(datingRange(10)); // "9-11"