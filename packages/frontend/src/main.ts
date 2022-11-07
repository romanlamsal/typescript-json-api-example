import { ApiRequest } from "@example/types"

const validObj: ApiRequest = {
    requiredStr: "I am required",
    optionalNum: 123,
    optionalStrUnion: "format-a",
}

const invalidObj = {
    requiredStr: 123,
    optionalNum: null,
    optionalStrUnion: "invalid-format",
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div>
        <h2>Valid Object</h2>
        <div>
            <h3>Object to send:</h3>
            <article>
                <label>Valid: <code>${JSON.stringify(validObj, null, 2)}</code></label>
                <button class="send-button" data-obj-type="valid">Send valid</button>
            </article>
            <article>
                <label>Invalid: <code>${JSON.stringify(invalidObj, null, 2)}</code></label>
                <button class="send-button" data-obj-type="invalid">Send invalid</button>
            </article>
        </div>
        <div>
            <h3>Response:</h3>
            <div id="response"></div>
        </div>
    </div>
  </div>
`

function setResponse(status: number, message: string) {
    document.getElementById("response")!.innerText = `Status: ${status}, message: ${message}`
}

document.querySelectorAll(".send-button").forEach(sendButtonElement => {
    sendButtonElement.addEventListener("click", () => {
        const obj = sendButtonElement.getAttribute("data-obj-type") === "valid" ? validObj : invalidObj

        fetch("/api", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async res => {
            setResponse(res.status, await res.text())
        })
    })
})
