

//  --------------------------TASK1----------------------------------
//  ? 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.

// function array1(array) {

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == 45) {
//             return i
//         }
//     }
//      {
//         console.log("bu eded arrayda yoxdur")

//     }
// }
// const array = [1, 23, 34, 45, 65, 78]
// const netice = array1(array)
// if (!netice)
//     console.log(" 45 ededi indeksde yoxdr")
// else {
//     console.log(netice);
// }


// // ---------------------task2-------------------------------
// // ?Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.

// function myfunction2(array2,num_tekrar) {
//     let netice=0
//     for (let i = 0; i < array2.length; i++) {
//         if (num_tekrar == array2[i]) {
//             netice++
            
//         }
//     }
//     return netice
// }
// const array2 = [1, 2, 3, 3, 4, 5, 6, 3, 45, 4]
//  tekrar = 45
// console.log(myfunction2(array2, tekrar))




// ------------------------------------------------------------
// ----------task3---------------------------------------------
// arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.


// function myfunction3(array3) {
//     let sum = 0
//     let num_min = array3[0]
//     let num_max =array3[0]
//     for (let i = 0; i < array3.length; i++) {
//         if (num_min > array3[i]) {
            
//         }
//         else if(num_max[i] < array3[i]) {
            
//         }
//         sum+=array3[i]
//     }
//     return sum-num_min-num_max
// }
// const array3 = [1, 2, 4, 5, 7, 8, 0, 10,11]

// console.log(myfunction3(array3))


// ------------------------TASK4---------------------------------
// ?Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function.
function myfunction4(num4) {
    for (let i = 0; i < num4; i++) {
        if (num4 < 10 && num4 > -10) {
            return num4
        }
        else if (num4 > 10 && num4 < 100) {
             let qaliq = num4 % 10 // son reqemk tapmaq ucun ededi 10a bolub qaligi tappiriq(when >10)
        num4 = (num4 - qaliq) / 10 // num4den hemin qaligi cixiriq ve 10a bolub tam eded aliriq
        let eded = num4   // yeni deyisene bunu
        eded=num4+qaliq* 10 // burada qaliqin ustune 
        }
            else if (num4>100 && num4<1000){
                        let qaliq = num4%10
                        num4=(num4-qaliq)/100
                        let eded = num4
                        eded=num4+qaliq*100
            }
            
        return 0;

const num4 = 37
const eded = myfunction4(num4)
console.log(myfunction4())
