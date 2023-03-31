let dbUsers = [
    {
        username: "soo",
        password: "password",
        name: "Soo Yew Guan",
        email: "soo@utem.edu.my"
    },
    {
        username: "wee",
        password: "password",
        name: "Abu",
        email: "soo@utem.edu.my"
    },
    {
    username: "que",
    password: "password",
    name: "Ali",
    email: "soo@utem.edu.my"
    }
]

// Purpose to sent request to cloud about the detail of login
function login (username, password){
    console.log("Someone try to login with", username, password)
    let matched = dbUsers.find(element => {
        element.username == username
    })
        //console.log(matched)
        if(matched)
        {
             if(matched.password == password){
                return matched
             }else{
                return "Password not matched"
             }
        }
        else {
            return "User not found"
        }
}

function register(newusername, newpassword, newname, newemail){
    // TO DO : Check if username exist

    dbUsers.push({
        username: newusername,
        password: newpassword,
        name: newname,
        email: newemail
    })
}

// Call function (give parameter) try to login
// login("soo", "password")
// login("soo", "123456")
console.log(login("soo","password"))

// Try to register
register("mia", "123456", "mia", "mia@utem.edu.my")
console.log(login("mia", "123456"))
