// console.log("Hello")
// function aa(){
//     console.log("first");
// }

// setTimeout(aa,2000);




// function roll(num){
//     console.log("shshsh",num);
// }
// setTimeout(roll,3000,71);










// function rollnumber(num,delay,nextroll){
//     setTimeout(() => {
//         console.log("Roll number is : ", num);
//         if (nextroll) nextroll();


//     },delay);
// }

// rollnumber(12121,1000,()  => {
//     rollnumber(12122,2000,()  => {
//         rollnumber(12123,3000,()  => {
//             rollnumber(12124,4000);

//         })
//     })
// })






function rollnumber(num, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Roll number is:", num);
            resolve(); 
        }, delay);
    });
}


rollnumber(12121, 1000)
    .then(() => rollnumber(12122, 2000))
    .then(() => rollnumber(12123, 3000))
    .then(() => rollnumber(12124, 4000))
    .catch(error => console.error('Error:', error));

