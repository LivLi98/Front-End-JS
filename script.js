let foodArray= []
fetch('http://localhost:3000/fridge')
.then(response => response.json()).then(data => foodArray.push(data))

// use query selection to show where data should pop up 

// for each item in food array .. appened 

// append child

// document.addEventListener('DOMContentLoaded', function (){
//     function renderFood(foodArray){
//         let foodHTML=foodArray.map(foodList => {
//             return `
//             <div class="foodInven">
//     <p> ${foodList.food-item} </p>
//     <p> ${foodList.weight}</p>
//     <p> ${foodList.price}</p>
//     <p> ${foodList.quanity}</p>
//     <p> ${foodList.expiration} date</p>
//     <input type="submit" value="Add Food Item" id="foodBtn">   
//         </div>`
//      })
//      return foodHTML
//     }
//     document.querySelector('#foodInven').innerHTML=renderFood(foodData)
// })

