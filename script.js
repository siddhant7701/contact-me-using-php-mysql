document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");

    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(nameInput.value)) {
        nameError.textContent = "Please enter a valid name";
        return;
    }

    nameError.textContent = "";
    const form = event.target;
    const formData = new FormData(form);

    fetch('submit.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("popup-container").style.display = "block";
            document.querySelector(".content-container").classList.add("blur");
            setTimeout(function() {
                document.getElementById("popup-container").style.display = "none";
                document.querySelector(".content-container").classList.remove("blur");
                location.reload();
            }, 2000);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    backToTopBtn.addEventListener("click", function(event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});