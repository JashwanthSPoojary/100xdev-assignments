const express = require('express')
const app = express();

app.use(express.json());

const donation = [{
    name: "john",
    kidneys: [{
            kidney: false,
        },
        {
            kidney: true,
        },
    ]
}]
const johnKidney = donation[0].kidneys;
const noofKidneys = johnKidney.length;



app.get('/', function (req, res) {
    const healthkidneys = [];

    for (i = 0; i < noofKidneys; i++) {
        if (johnKidney[i].kidney === true) {
            healthkidneys.push(johnKidney[i]);
        }
    }

    const nohealthkidneys = healthkidneys.length;

    res.json({
        noofKidneys,
        nohealthkidneys
    })
    console.log(noofKidneys)
})

app.post('/addKidney', function (req, res) {
    johnKidney.push({
        kidney: true
    });
    res.json({
        johnKidney
    });
});

app.put('/update', function (req, res) {
    for (i = 0; i < noofKidneys; i++) {
        if (johnKidney[i].kidney === false) {
            johnKidney[i].kidney = true
        }
    }
    res.json({
        johnKidney
    });
})

app.listen(3000);