

document.addEventListener("DOMContentLoaded", function () {
    let blogs = document.querySelectorAll(".blog__card");
    let visibleCount = 3;
    let button = document.getElementById("view-more");
    button.addEventListener("click",  ()=> {
       if (visibleCount < blogs.length) {
        visibleCount += 3; // Indlæs 3 ekstra blogs ad gangen
        blogs.forEach((blog, index) => {
            if (index < visibleCount) {
                blog.style.display = "block";
            }
        })

            if (visibleCount >= blogs.length) {
                button.textContent = "View less"; // Skjul knappen, når alle er vist
            }
     
        } else {
            
            blogs.forEach((blog, index) => {
                blog.style.display = index < 3 ? "block" : "none";
                button.textContent = "View more"
                visibleCount = 3;
        })
        }
    });
});