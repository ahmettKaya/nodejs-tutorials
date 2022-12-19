const fs = require('fs')
const path = require('path')

const newDir = path.join(__dirname, "files", "new")

if (!fs.existsSync(newDir)) {
    fs.mkdir(newDir, (err) => {
        if (err) throw err
        console.log("Directory created.")
    })
}
else {
    fs.rmdir(newDir, (err) => {
        if (err) throw err
        console.log("Directory removed.")
    })
}