const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "jashwanthlikeblockchain"
const cors = require('cors')


app.use(express.json());
app.use(cors());

let users = []
let logged = false;

// const generateToken = () => {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }



const auth = (req, res, next) => {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    if (decodedInformation.userName) {
        req.userName = decodedInformation.userName
        next();
    } else {
        res.send("not logged")
    }
}


app.get('/me', auth, (req, res) => {
    res.json(
        req.userName
    );
})

app.post('/signIn', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    const token = jwt.sign({
        userName: userName
    }, JWT_SECRET);

    const user = users.find(user => user.userName === userName && user.password === password);

    if (user) {
        res.json({
            token
        })
    } else {
        res.status(500).json({
            message: "not signed up "
        })
    }
})
app.post('/signUp', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    users.push({
        userName,
        password
    })
    res.send("you have signed up")
    console.log("you have signed up")
})



app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});