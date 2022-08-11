// const isPalandrome = function(x) {
//     console.log(x.toString().split('').reverse().join('') === x.toString())
// }

// isPalandrome(1001)




















// const longestPalandrome = function(s) {
//     let sarray = s.split('')
//     let narray = []
//     let n = 1
//     match = false
//     for (let i = 0; i < sarray.length ; i++) {
//         if (sarray[i] === sarray[i+1] ){
//             narray.push(sarray[i] + sarray[i+n])
//             console.log(narray)
//         }
//         if (sarray[i] === sarray[i-n]){
//             narray.push(sarray[i] + sarray[i-n])
//             console.log(narray)
//         }
//         if (sarray[i-n] === sarray[i+n]){

//             console.log('m')
//             narray.push(sarray[i-n] + sarray[i] + sarray[i-n])
//             console.log(narray)
//             match = true
//             while(match){
//                 n += 1

//                 if (sarray[i-n] === sarray[i+n] && sarray[i-n] !== undefined) {
//                     o = sarray.slice((i-n),(i+(n + 1)))
//                     narray.push(o.join(''))
//                 }
//                 else {
//                     match = false
//                 }
//             }
//         }
//     }
//     console.log(narray)
//     let max = 0
//     let top = 0
//     for (let i = 0; i < narray.length ; i++) {
//         if (narray[i].length > max){
//             max = narray[i].length
//             top = i

//         }
//         console.log(narray[i].length)
//     }
//     console.log(narray[top])
// }






















































const longestPalandrome = function(s){
    let sarray = s.split('')
    let narray = []
    let n = 1
    for (let i = 0; i < sarray.length ; i++) {
        if (sarray[i] === sarray[i-1] && sarray[i] !== sarray[i+1]){
            narray.push(sarray[i-1] + sarray[i])
        }
        if (sarray[i] === sarray[i+1] && sarray[i] !== sarray[i-1]){
            narray.push(sarray[i] + sarray[i+1])
        }
    }

    for (let i = 0; i < sarray.length ; i++) {
        let check = function(){
            if (sarray[i-n] === sarray[i+n] && sarray[i-n] !== undefined){
                o = sarray.slice((i-n),(i+(n + 1)))
                narray.push(o.join(''))
                n += 1

            }
        }
        if (sarray[i-n] === sarray[i+n] && sarray[i-n] !== undefined){
            o = sarray.slice((i-n),(i+(n + 1)))
            narray.push(o.join(''))
            n += 1

        }
    }
    console.log(narray)
}
longestPalandrome('vbaarabv')
