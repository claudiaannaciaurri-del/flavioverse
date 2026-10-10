document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Welcome to the Flavioverse"
        );
    const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
    }
);