var mas = document.getElementById("mas"); 

mas.addEventListener("click",function(){
    alert("Seccion en desarrollo...");
});

document.addEventListener("DOMContentLoaded", () => {
    // Botón "See all posts"
    const seeAllPosts = document.querySelector(".see-all");
    const recommendations = document.getElementById("recommendations");

    seeAllPosts.addEventListener("click", (e) => {
        e.preventDefault();
        if (recommendations.classList.contains("hidden")) {
            recommendations.classList.remove("hidden");
            recommendations.classList.add("visible");
            recommendations.innerHTML = `
                <ul>
                    <li>Visit Paris, France</li>
                    <li>Explore Tokyo, Japan</li>
                    <li>Discover Cancún, México</li>
                    <li>Enjoy Bali, Indonesia</li>
                </ul>
            `;
        } else {
            recommendations.classList.add("hidden");
            recommendations.classList.remove("visible");
            recommendations.innerHTML = "";
        }
    });

     // Botón "See all picks 1"
    const picks1Btn = document.querySelectorAll(".read-more")[0];
    const picks1 = document.getElementById("picks1");

    picks1Btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (picks1.classList.contains("hidden")) {
            picks1.classList.remove("hidden");
            picks1.classList.add("visible");
            picks1.innerHTML = `
                <img src="IMG_4167.JPG" width="200">
                <img src="IMG_4167.JPG" width="200">
            `;
        } else {
            picks1.classList.add("hidden");
            picks1.classList.remove("visible");
            picks1.innerHTML = "";
        }
    });

    // Botón "See all picks 2"
    const picks2Btn = document.querySelectorAll(".read-more")[1];
    const picks2 = document.getElementById("picks2");

    picks2Btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (picks2.classList.contains("hidden")) {
            picks2.classList.remove("hidden");
            picks2.classList.add("visible");
            picks2.innerHTML = `
                    <img src="IMG_4012.JPG" width="200">
                    <img src="IMG_4012.JPG" width="200">
            `;
        } else {
            picks2.classList.add("hidden");
            picks2.classList.remove("visible");
            picks2.innerHTML = "";
        }
    });
});