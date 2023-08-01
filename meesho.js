import BagsFootwear from "./data/BagsFootwear.js"
import BeautyHealth from "./data/BeautyHealth,js"
import Electronics from "./data/Electronics.js"
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAccessories from "./data/JewellaryAccessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"
let inputsearchE1 = document.querySelector(".inputsearch")
let recentinput = []
let forminputE1 =document.getElementById("inputform")
const listofrecentE1 = document.querySelector(".listofrecent")


inputsearchE1.addEventListener("keydown",()=>{
    console.log(inputsearchE1)
    if(inputsearchE1.value){
        document.getElementById("closesearch").style.display = "block"
    }
    else{
        document.getElementById("closesearch").style.display ="none"
    }
})
forminputE1.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofrecentHTMLE1 = ""
    recentinput.unshift(inputsearchE1.value)
    console.log(recentinput)

    if(recentinput.length > 0) {
        for(let i = 0; i < recentinput.length; i++) {
            listofrecentHTMLE1 += `
            <div class="recentitem">
                <div class="recenticon">
                    <img src="https://icon-library.com/images/recent-icon/recent-icon-23.jpg"/>
                </div>
                <p>${recentinput[i]}</p>
            </div>
        `
        }
        listofrecentE1.innerHTML = listofrecentHTMLE1
    }
})
// function reuble
function renderSubMenu(id,data){
    let temp = document.getElementById(id)
function TempFunc(){
   return data.map(el =>{
        let list = ""; 
        list = el.data.map(element => `<p>${element}</p>`).join(" ")    
       return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
    }).join("")
}
    temp.innerHTML = TempFunc()
}






/**womenEthic */
renderSubMenu("womenEthic",WomenEthnic)

/**WomenWestern */
renderSubMenu("womenWestern",WomenWestern)

//Men 
renderSubMenu("men",Men)

/***kids */
renderSubMenu("kids",Kids)

/**home % kitchen */
renderSubMenu("HomeAndKitchen",HomeAndKitchen)

/**beauty and health */
renderSubMenu("beautyAndHealth",BeautyHealth)

// Jewellery & Accessories
renderSubMenu("JewelleryAndAccessories",JewelleryAccessories)

// Bags & Footwear
renderSubMenu("BagsFootWarId",BagsFootwear)

// Electronics
renderSubMenu("ElectronicsId",Electronics)