console.log("============ Task 4 ============");
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("All form fields must be filled in");
    }

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(`${name}: ${value.trim()}`);
    });

    event.currentTarget.reset();
}
console.log("================================");