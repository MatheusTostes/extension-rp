


let phones = []

const intervalIntro = setInterval(() => {
    
    let phoneBoxList = document.getElementsByClassName('_3m_Xw')
    
    console.log(phoneBoxList.length)
    
    for (let c=0; c < phoneBoxList.length; c++) {
        let phoneBox = phoneBoxList[c]
        console.log(phoneBox)
        let phone = phoneBox.firstChild.firstChild.lastChild.firstChild.firstChild.firstChild.firstChild.firstChild
        phones.push(phone.data)
        // console.log(phone.data)
    }

    if (phones.length > 0) {
        clearInterval(intervalIntro)
    }
}, 1000)

// console.log(phones)

// let clientStates = localStorage.getItem('data')

// if (typeof clientStates !== 'object'){
//     clientStates = {
//         "+55 32 9119-1901":"",
//         "+55 27 99772-6170":"",
//         "+55 11 95218-4941":"",
//         "+55 38 9200-3706":""}
// }

let clientStates = {}

for (let i=0; i < phones.length; i++) {
    phone = phones[i]
    clientStates.phone = ""
    // console.log(phones)
}

const interval = setInterval(() => {

    for (let client in clientStates){
        // console.log(client)
        // console.log(typeof client)
        let stateClient = clientStates[client]
        if (typeof stateClient !== null) {
            if (stateClient === "ok") {
                document.querySelector('[title*="'+client+'"]').style.color = "green"
            } else if (stateClient === "failed"){
                document.querySelector('[title*="'+client+'"]').style.color = "red"
            }
        } else {
            
        }
    }

    for (let i=0; i < phones.length; i++) {
        let phoneNumber = phones[i]
        // document.querySelector('[title*="+55 32 9119-1901"]').style.backgroundColor = "red"
        let phone = document.querySelector('[title*="'+phoneNumber+'"]')
    
        // clearInterval(interval)

        if (phone)  {
            box = phone.closest('._3OvU8')
            var str = box.innerHTML
            // console.log(str)
            // console.log(typeof str)
            if (!str.includes("okButton")){

                box.style.color = "white"
    
                const okButton = document.createElement("button")
                okButton.innerHTML = "✔"
                okButton.style.color = "green"
                okButton.classList.add("okButton")
                okButton.addEventListener("click", () => {
                    box = okButton.closest('._3OvU8')
                    var firstChild = box.firstChild.firstChild.firstChild.firstChild.firstChild
                    clientStates[firstChild.data] = "ok"
                    console.log(clientStates)
                })
                box.appendChild(okButton)
    
                const failedButton = document.createElement("button")
                failedButton.innerHTML = "X"
                failedButton.style.color = "red"
                failedButton.classList.add("failedButton")
                failedButton.addEventListener("click", () => {
                    box = okButton.closest('._3OvU8')
                    var firstChild = box.firstChild.firstChild.firstChild.firstChild.firstChild
                    clientStates[firstChild.data] = "failed"
                    console.log(clientStates)
                })
                box.appendChild(failedButton)
            }
    }
    } 
    localStorage.setItem("data", clientStates)
}, 3000)

