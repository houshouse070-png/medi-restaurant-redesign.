
/* =========================================
   MEDI RESTAURANT — INDEPENDENT REDESIGN
   Main JavaScript
========================================= */

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation" : "Close navigation"
    );

    mainNav.classList.toggle("open", !isExpanded);
  });

  // Close the navigation after selecting a link.

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  // Close the mobile navigation when returning to desktop.

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}


// MENU DATA

// These are illustrative portfolio entries.
// Verify all dishes and prices against MEDI's current
// official menu before presenting them as confirmed.

const menuItems = [
  {
    name: "Green Goddess Aubergine",
    price: "€14.50",
    description:
      "A vegetable-led dish inspired by Mediterranean flavours.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    alt: "Colourful vegetable dish"
  },
  {
    name: "MEDI Mezze",
    price: "€15.50",
    description:
      "A shared-plate concept inspired by Mediterranean mezze.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    alt: "A selection of fresh shared food"
  },
  {
    name: "Pan con Aioli",
    price: "€6.50",
    description:
      "Bread and aioli in a Mediterranean-inspired presentation.",
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh bread served at a table"
  },
  {
    name: "Harissa Steak Tartare",
    price: "€17.50",
    description:
      "A menu concept inspired by bold Mediterranean seasoning.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    alt: "Restaurant-style savoury dish"
  },
  {
    name: "Ribeye — 200 g",
    price: "€29.50",
    description:
      "A steakhouse-inspired main course concept.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    alt: "Grilled steak served on a plate"
  }
];


// DISPLAY MENU CARDS

const menuGrid = document.getElementById("menu-grid");

function renderMenu() {
  if (!menuGrid) return;

  menuGrid.replaceChildren();

  menuItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-card";

    const image = document.createElement("img");
    image.className = "menu-card-image";
    image.src = item.image;
    image.alt = item.alt;
    image.loading = "lazy";

    image.addEventListener("error", () => {
      image.style.display = "none";
    });

    const content = document.createElement("div");
    content.className = "menu-card-content";

    const top = document.createElement("div");
    top.className = "menu-card-top";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const price = document.createElement("span");
    price.className = "menu-price";
    price.textContent = item.price;

    const description = document.createElement("p");
    description.textContent = item.description;

    top.append(title, price);
    content.append(top, description);
    card.append(image, content);
    menuGrid.appendChild(card);
  });
}

renderMenu();


// FOOTER YEAR IS NOT NEEDED YET.
// Add booking, ordering or other functionality only
// when the project has a suitable backend.
