document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("globalSearchInput");
  const searchResults = document.getElementById("searchResults");

  // Determine if we are on the root index.html or inside the /pages/ folder
  const isRoot = !window.location.pathname.includes("/pages/");

  // Your Website Database
  const searchIndex = [
    {
      title: "Overview & How to Use",
      url: "index.html",
      keywords: "overview, home, start, guide, instructions",
    },
    {
      title: "Organizational Profile",
      url: "organization-profile.html",
      keywords: "name, type, license, year, mission, vision, history, products, services",
    },
    {
      title: "Contact Information",
      url: "contact-information.html",
      keywords: "email, phone, address, location, support, internal admin, telegram, whatsapp",
    },
    {
      title: "Website Purpose",
      url: "website-purpose.html",
      keywords: "primary purpose, problem, visitor action, success metrics, payment gateway, e-commerce",
    },
    {
      title: "Target Audience",
      url: "target-audience.html",
      keywords: "age range, geography, location, language, primary device, mobile, desktop",
    },
    {
      title: "Branding & Identity",
      url: "branding-identity.html",
      keywords: "logo, colors, typography, fonts, tagline, slogan, hex codes",
    },
    {
      title: "General Requirements",
      url: "required-questions.html",
      keywords: "testimonials, reviews, partner logos, social media, inspiration, google profile, budget, launch date, legal pages, privacy policy",
    }
  ];

  // Helper function to fix URLs depending on which folder the user is currently in
  function getLink(url) {
    if (isRoot) {
      return url === "index.html" ? "index.html" : "pages/" + url;
    } else {
      return url === "index.html" ? "../index.html" : url;
    }
  }

  // Handle User Typing
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();

    // Hide dropdown if query is empty
    if (query === "") {
      searchResults.classList.remove("active");
      return;
    }

    // Filter the index
    const results = searchIndex.filter((item) =>
      item.title.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query)
    );

    // Generate HTML for results
    if (results.length > 0) {
      searchResults.innerHTML = results
        .map(
          (item) => `
        <a href="${getLink(item.url)}" class="search-result-item">
          <span class="search-result-title">${item.title}</span>
          <span class="search-result-desc">Matches: ${item.keywords}</span>
        </a>
      `
        )
        .join("");
    } else {
      searchResults.innerHTML = `<div class="search-no-results">No results found for "${query}"</div>`;
    }

    // Show dropdown
    searchResults.classList.add("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove("active");
    }
  });

  // Enable Command+K / Ctrl+K Shortcut
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault(); // Prevent default browser search
      searchInput.focus();
    }
  });
});