// Write your code below

//Loops Method

// function hasUniqueChars(wordInput){
//     let chars = wordInput.split("")

//     loop1:
//     for(i=0; i<chars.length; i++){
//         loop2:    
//         for(n=i+1; n<=chars.length; n++){
//             //  if(chars[i] != chars[i+n]){
//             //     n += 1
//             if(chars[i] === chars[n]){
//                     return console.log(`false`)
//                 } 
//             }
//         } console.log(`true`)
// }

// hasUniqueChars('sdfg')
// hasUniqueChars('sdfdg')


//Set Method


let hasUniqueChars = wordInput =>{
    let chars = wordInput.split("")

    const UniqueCharsSet = new Set ()
    for (i=0; i<chars.length; i++) {
        UniqueCharsSet.add(chars[i])
    }

    if(chars.length === UniqueCharsSet.size){
        console.log('true')
    } else {
        console.log('false')
    }
}

console.log(hasUniqueChars('sdfs'))


















