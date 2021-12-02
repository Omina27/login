let storage = window.localStorage

let userName = prompt('Please enter your name!')
let surName = prompt('Enter your surname')
let password = prompt('Enter your password')

storage.setItem('username',userName)
storage.setItem('surname',surName)
storage.setItem('parol',password)


console.log(userName);
console.log(surName);
console.log(password);

function saveData(promptData) {
    if (!storage.getItem("username" ,"surname", "parol") == promptData){
        alert("You have been registered!")
    }else {
       storage.setItem("username" ,"surname", "parol", promptData) 
       alert("You are registered right now!")
    }
}

saveData(userName, surName, password)
