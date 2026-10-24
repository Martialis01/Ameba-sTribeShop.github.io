
document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // DANE PRODUKTÓW
    // Każdy osobnik musi mieć unikalne ID.
    // ========================================

    const products = {
        carcha_01: {
            name: "carcharodontosaurus ♀",
            category: "Dinki",
            price: "15.430dd",

            // Ścieżki do zdjęć
            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_01.jpg",

            alt: "carcharodontosaurus - osobnik pierwszy",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "845",
            sex: "Samica ♀",
            mutations: "98 zdrowie | 98 siła",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_02: {
            name: "carcharodontosaurus ♀",
            category: "Dinki",
            price: "16.030dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_02.jpg",

            alt: "carcharodontosaurus - osobnik drugi",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "870",
            sex: "Samica ♀",
            mutations: "98 zdrowie | 98 udźwig",
            extra: "otrzymasz podstawowe siodło"
        },

        veilwyn_01: {
            name: "veilwyn ♂",
            category: "Dinki",
            price: "1.810dd",

            image: "miniatury/Veilwyn.png",
            descriptionImage: "dinki/veilwyn_01.jpg",

            alt: "veilwyn - osobnik pierwszy",

            shortDescription: "veilwyn dostępny w ofercie AMEBA'S TRIBE.",

            level: "510",
            sex: "Samiec ♂",
            mutations: "Brak",
            extra: "Brak"
        },

        titanoboa_01: {
            name: "Abberant Titanoboa ⚥",
            category: "Dinki",
            price: "1.730dd",

            image: "miniatury/Titanoboa.png",
            descriptionImage: "dinki/titanoboa_01.jpg",

            alt: "Titanoboa - osobnik pierwszy",

            shortDescription: "Titanoboa dostępny w ofercie AMEBA'S TRIBE.",

            level: "500",
            sex: "Brak",
            mutations: "Brak",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_03: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "21.580dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_03.jpg",

            alt: "carcharodontosaurus - osobnik trzeci",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "1052",
            sex: "samiec ♂",
            mutations: "98 zdrowie | 98 siła | 98 udźwig",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_04: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "21.580dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_04.jpg",

            alt: "carcharodontosaurus - osobnik czwarty",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "1052",
            sex: "samiec ♂",
            mutations: "98 zdrowie | 98 siła | 98 udźwig",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_05: {
            name: "carcharodontosaurus ♀",
            category: "Dinki",
            price: "5.640dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_05.jpg",

            alt: "carcharodontosaurus - osobnik piąty",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "535",
            sex: "samica ♀",
            mutations: "brak",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_06: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "14.450dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_06.jpg",

            alt: "carcharodontosaurus - osobnik szósty",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "804",
            sex: "samiec ♂",
            mutations: "98 udźwig | 98 siła",
            extra: "otrzymasz podstawowe siodło"
        },
 
        drakeling_01: {
            name: "drakeling ♂",
            category: "Dinki",
            price: "1.970dd",

            image: "miniatury/Drakeling.png",
            descriptionImage: "dinki/drakeling_01.jpg",

            alt: "drakeling - osobnik pierwszy",

            shortDescription: "drakeling dostępny w ofercie AMEBA'S TRIBE.",

            level: "505",
            sex: "samiec ♂",
            mutations: "brak",
            extra: "brak"
        },

        rex_01: {
            name: "rex ♂",
            category: "Dinki",
            price: "2.090dd",

            image: "miniatury/Rex.png",
            descriptionImage: "dinki/rex_01.jpg",

            alt: "rex - osobnik pierwszy",

            shortDescription: "rex dostępny w ofercie AMEBA'S TRIBE.",

            level: "448",
            sex: "samiec ♂",
            mutations: "brak",
            extra: "otrzymasz podstawowe siodło"
        },

        rex_02: {
            name: "rex ♀",
            category: "Dinki",
            price: "2.000dd",

            image: "miniatury/Rex.png",
            descriptionImage: "dinki/rex_02.jpg",

            alt: "rex - osobnik drugi",

            shortDescription: "rex dostępny w ofercie AMEBA'S TRIBE.",

            level: "434",
            sex: "samica ♀",
            mutations: "brak",
            extra: "otrzymasz podstawowe siodło"
        },

        drakeling_02: {
            name: "drakeling ♀",
            category: "Dinki",
            price: "2.100dd",

            image: "miniatury/Drakeling.png",
            descriptionImage: "dinki/drakeling_02.jpg",

            alt: "drakeling - osobnik drugi",

            shortDescription: "drakeling dostępny w ofercie AMEBA'S TRIBE.",

            level: "517",
            sex: "samica ♀",
            mutations: "2 udźwig | 2 stamina",
            extra: "brak"
        },

        carcha_07: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "15.240dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_07.jpg",

            alt: "carcharodontosaurus - osobnik drugi",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "837",
            sex: "samiec ♂",
            mutations: "98 udźwig | 98 siła",
            extra: "otrzymasz podstawowe siodło"
        },

        deinosuchus_01: {
            name: "deinosuchus ♂",
            category: "Dinki",
            price: "3.030dd",

            image: "miniatury/Deinosuchus.png",
            descriptionImage: "dinki/deinosuchus_01.jpg",

            alt: "deinosuchus - osobnik pierwszy",

            shortDescription: "deinosuchus dostępny w ofercie AMEBA'S TRIBE.",

            level: "500",
            sex: "samiec ♂",
            mutations: "34 zdrowie",
            extra: "otrzymasz podstawowe siodło"
        },

        drakeling_03: {
            name: "drakeling ♀",
            category: "Dinki",
            price: "2.020dd",

            image: "miniatury/Drakeling.png",
            descriptionImage: "dinki/drakeling_03.jpg",

            alt: "drakeling - osobnik trzeci",

            shortDescription: "drakeling dostępny w ofercie AMEBA'S TRIBE.",

            level: "510",
            sex: "samica ♀",
            mutations: "brak",
            extra: "brak"
        },

        drakeling_04: {
            name: "drakeling ♂",
            category: "Dinki",
            price: "2.020dd",

            image: "miniatury/Drakeling.png",
            descriptionImage: "dinki/drakeling_04.jpg",

            alt: "drakeling - osobnik czwarty",

            shortDescription: "drakeling dostępny w ofercie AMEBA'S TRIBE.",

            level: "510",
            sex: "samiec ♂",
            mutations: "brak",
            extra: "brak"
        },

        carcha_08: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "21.580dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_08.jpg",

            alt: "carcharodontosaurus - osobnik ósmy",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "1052",
            sex: "samiec ♂",
            mutations: "98 zdrowie | 98 udźwig | 98 siła",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_09: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "21.580dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_09.jpg",

            alt: "carcharodontosaurus - osobnik dziewiąty",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "1052",
            sex: "samiec ♂",
            mutations: "98 zdrowie | 98 udźwig | 98 siła",
            extra: "otrzymasz podstawowe siodło"
        },

        x_con_01: {
            name: "x-con ♂",
            category: "Dinki",
            price: "2.560dd",

            image: "miniatury/X-con.png",
            descriptionImage: "dinki/x-con_01.jpg",

            alt: "x-con - osobnik pierwszy",

            shortDescription: "x-con dostępny w ofercie AMEBA'S TRIBE.",

            level: "513",
            sex: "samiec ♂",
            mutations: "brak",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_10: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "20.400dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_10.jpg",

            alt: "carcharodontosaurus - osobnik dziesiąty",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "1003",
            sex: "samiec ♂",
            mutations: "98 zdrowie | 98 udźwig | 98 siła",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_11: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "20.400dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_11.jpg",

            alt: "carcharodontosaurus - osobnik jedenasty",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "1004",
            sex: "samiec ♂",
            mutations: "98 zdrowie | 98 udźwig | 98 siła",
            extra: "otrzymasz podstawowe siodło"
        },

        carcha_12: {
            name: "carcharodontosaurus ♂",
            category: "Dinki",
            price: "17.620dd",

            image: "miniatury/Carcharodontosaurus.png",
            descriptionImage: "dinki/carcha_12.jpg",

            alt: "carcharodontosaurus - osobnik dwunasty",

            shortDescription: "carcharodontosaurus dostępny w ofercie AMEBA'S TRIBE.",

            level: "936",
            sex: "samiec ♂",
            mutations: "98 zdrowie | 98 siła",
            extra: "otrzymasz podstawowe siodło"
        },

        veilwyn_02: {
            name: "veilwyn ♀",
            category: "Dinki",
            price: "1.800dd",

            image: "miniatury/Veilwyn.png",
            descriptionImage: "dinki/veilwyn_02.jpg",

            alt: "veilwyn - osobnik drugi",

            shortDescription: "veilwyn dostępny w ofercie AMEBA'S TRIBE.",

            level: "507",
            sex: "samica ♀",
            mutations: "2 tlen",
            extra: "Brak"
        }
    };


    // ========================================
    // POBIERANIE WYBRANEGO PRODUKTU Z URL
    // Przykład: produkt.html?id=stona_01
    // ========================================

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id") || "carcha_01";
    const product = products[productId];

    // Sprawdzenie, czy produkt istnieje
    if (!product) {
        const page = document.querySelector(".product-page");

        if (page) {
            page.innerHTML = `
                <section class="product-not-found">
                    <h1>Nie znaleziono produktu</h1>
                    <p>Ten produkt nie istnieje lub nie jest już dostępny.</p>
                    <a href="offer.html" class="back-to-offer">
                        ← Wróć do oferty
                    </a>
                </section>
            `;
        }

        return;
    }


    // ========================================
    // UZUPEŁNIANIE DANYCH PRODUKTU
    // ========================================

    document.title = product.name + " | AMEBA'S TRIBE";

    function setText(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value ?? "";
        }
    }

    setText("breadcrumb-name", product.name);
    setText("product-category", product.category.toUpperCase());
    setText("product-name", product.name);
    setText("product-price", product.price);
    setText("product-short-description", product.shortDescription);
    setText("product-description", product.description);

    setText("stat-level", product.level);
    setText("stat-sex", product.sex);
    setText("stat-mutations", product.mutations);
    setText("stat-extra", product.extra);


    // ========================================
    // GŁÓWNE ZDJĘCIE PRODUKTU
    // ========================================

    const mainImage = document.getElementById("product-image");

    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.alt;

        mainImage.onerror = function () {
            console.error("Nie udało się wczytać głównego zdjęcia:", product.image);
            mainImage.alt = "Nie udało się wczytać zdjęcia produktu";
        };
    }


    // ========================================
    // ZDJĘCIE W SEKCJI OPISU
    // W HTML musi istnieć:
    // <div id="product-description-image"></div>
    // ========================================

    const descriptionImageContainer =
        document.getElementById("product-description-image");

    if (descriptionImageContainer && product.descriptionImage) {
        const descriptionImage = document.createElement("img");

        descriptionImage.src = product.descriptionImage;
        descriptionImage.alt = product.alt;
        descriptionImage.className = "product-description-image";

        descriptionImage.onerror = function () {
            console.error(
                "Nie udało się wczytać zdjęcia w opisie:",
                product.descriptionImage
            );
            descriptionImageContainer.textContent =
                "Nie udało się wczytać zdjęcia. Sprawdź ścieżkę do pliku.";
        };

        descriptionImageContainer.replaceChildren(descriptionImage);
    }


    // ========================================
    // LINK DO KONTAKTU
    // ========================================

    const contactLink = document.getElementById("product-contact");

    if (contactLink) {
        contactLink.href =
            "contact.html?product=" + encodeURIComponent(product.name);
    }

});
