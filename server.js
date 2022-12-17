const os = require('os')
const path = require('path')
const math = require('./math')
const fs = require('fs')
const fsPromises = require('fs').promises

/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(os.cpus().length)

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

console.log(math.add(2, 5))
*/

/*
fs.readFile(path.join(__dirname, "files", "texts", "file2.txt"), (err, data) => {
    if (err) throw err
    console.log(data.toString())
})*/

process.on('uncaughtException', err => {
    console.log(`There is an uncaught error: ${err}`)
    process.exit(1)
})

/*
// Callback hell
fs.writeFile(path.join(__dirname, "files", "texts", "file3.txt"), "yeni dosya oluşturuldu", err => {
    if (err) throw err
    console.log("Write completed.")

    fs.appendFile(path.join(__dirname, "files", "texts", "file3.txt"), "\ndosyaya yeni bilgi eklendi", err => {
        if (err) throw err
        console.log("Append completed.")

        fs.rename(path.join(__dirname, "files", "texts", "file3.txt"), path.join(__dirname, "files", "texts", "file4.txt"), err => {
            if (err) throw err
            console.log("Rename completed.")
        })
    })
})
*/

// No callback hell with promises. Clean code.
const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "texts", "file2.txt"), "utf-8")
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, "files", "texts", "file3.txt"), "yeni dosya oluşturuldu")
        await fsPromises.appendFile(path.join(__dirname, "files", "texts", "file3.txt"), "\ndosyaya yeni bilgi eklendi")
        await fsPromises.rename(path.join(__dirname, "files", "texts", "file3.txt"), path.join(__dirname, "files", "texts", "file4.txt"))
    } catch (err) {
        console.error(err)
    }
}

fileOps()