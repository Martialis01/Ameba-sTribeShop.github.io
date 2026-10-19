
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const productCards = document.querySelectorAll(".product-card");
    const emptyMessage = document.querySelector(".offer-empty");

    // Sprawdź, czy znaleziono elementy na stronie
    if (filterButtons.length === 0 || productCards.length === 0) {
        console.error(
            "Nie znaleziono przycisków kategorii lub produktów. Sprawdź klasy w HTML."
        );
        return;
    }

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.dataset.filter;
            let visibleProducts = 0;

            // Zaznacz aktywną kategorię
            filterButtons.forEach(function (item) {
                const isActive = item === button;

                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            // Filtruj produkty
            productCards.forEach(function (product) {
                const category = product.dataset.category;

                const matches =
                    selectedCategory === "all" ||
                    category === selectedCategory;

                product.hidden = !matches;

                if (matches) {
                    visibleProducts++;
                }
            });

            // Pokaż komunikat, jeśli kategoria jest pusta
            if (emptyMessage) {
                emptyMessage.hidden = visibleProducts > 0;
            }

            console.log(
                "Wybrana kategoria:",
                selectedCategory,
                "| Widoczne produkty:",
                visibleProducts
            );
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const productCards = document.querySelectorAll(".product-card");
    const emptyMessage = document.querySelector(".offer-empty");

    const validCategories = [
        "all",
        "carcha",
        "rex",
        "veilwyn",
        "titanoboa",
        "drake",
        "x-concavenator",
        "deinosuchus"
    ];

    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");

    let selectedCategory = validCategories.includes(requestedCategory)
        ? requestedCategory
        : "all";

    function filterProducts(category) {
        let visibleProducts = 0;

        productCards.forEach(function (product) {
            const matches =
                category === "all" ||
                product.dataset.category === category;

            product.hidden = !matches;

            if (matches) {
                visibleProducts++;
            }
        });

        filterButtons.forEach(function (button) {
            const isActive = button.dataset.filter === category;

            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        if (emptyMessage) {
            emptyMessage.hidden = visibleProducts > 0;
        }
    }

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            selectedCategory = button.dataset.filter;
            filterProducts(selectedCategory);
        });
    });

    filterProducts(selectedCategory);
});
