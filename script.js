document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const responseBox = document.getElementById("response");

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {

        responseBox.innerText = "Sending message...";

        const response = await fetch("http://127.0.0.1:8000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Failed to send");
        }

        const result = await response.json();

        responseBox.innerText = result.message;

        document.getElementById("contactForm").reset();

    } catch (error) {

        responseBox.innerText = "Something went wrong. Please try again.";

    }
});
