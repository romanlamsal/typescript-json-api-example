import express = require("express")
import { isApiRequest } from "@example/types/gen"

const app = express()
app.use(express.json())

app.post("/api", (req, res) => {
    const isValid = isApiRequest(req.body)

    if (isValid) {
        res.status(200).send("OK!").end()
    } else {
        res.status(400).send("Validation failed.").end()
    }
})

app.listen(8080, () => {
    console.log("Started express app on http://localhost:8080.")
})
