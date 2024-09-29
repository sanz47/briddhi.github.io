document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.getElementsByClassName("close")[0];

    // Add click event to all flowchart cards
    document.querySelectorAll(".flowchart-card").forEach(card => {
        card.addEventListener("click", function () {
            const imgSrc = card.getAttribute("data-image");
            modal.style.display = "block";
            modalImg.src = imgSrc;
        });
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when user clicks anywhere outside the image
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});