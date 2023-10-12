// console.log("Hello World");
        // alert("ANAS wants to know your location");
//         document.write("this is document write");
//         const name="alice"
//         console.log("hello, "+ name);
// let firstBatch =5
// let secondBatch=7
// let count = firstBatch + secondBatch

// console.log(count)

// function increment(){
//         console.log("The button was clicked")
// }

// let countEl = document.getElementById("count-el")
// console.log(countEl)

// let count= 0

// function increment(){
//         count = count + 1   
//         console.log(count)
// }
// -------end

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     // console.log(count)
// }
// function save() {
//     console.log(count)
// }


// let username= "ANAS"
// let message= ",You have a new message!"
// console.log(username + message)

// let username1 = 10
// let username2 = 12
// let username3 = 14
// let username4 = (username1 + username2 + username3 + 4)
// console.log(username4)

// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// console.log(saveEl)
// console.log(count)


// function increment(){
//     count = count + 1
    
//     countEl.innerText=count
     
// }

// function save(){
//     let countStr = count + " - "

//     saveEl.innerText = saveEl.innerText + countStr

//     countEl.innerText = 0
//     count = 0
// }
let number = document.getElementById("number")
let count = 0
console.log(count)

function increment(){
    count = count + 1
    number.innerText = count

}

function save(){
    // let saav = count + " - "
    // console.log(count)
    number.innerText = 0
    previous.innerText = previous.innerText + count 
    count = 0


}


