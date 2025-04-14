const plans = {
  basic: {
      label: "Basic",
      title: "Icon Sets",
      price: "$60",
      description: "Up to 50 creative& profesional icons + one color version/themes",
      features: [
          { text: "No source files", icon: "image/centang.svg" },
          { text: "Converted to responsive components", icon: "image/x.svg" }
      ]
  },
  standard: {
      label: "standard",
      title: "Icon Sets",
      price: "$120",
      description: "Up to 100 creative & professional icons + two color versions/themes per month",
      features: [
          { text: "Included source files", icon: "image/centang.svg" },
          { text: "Converted to responsive components", icon: "image/centang.svg" }
      ]
  },
  premium: {
      label: "premium",
      title: "Icon sets",
      price: "$180",
      description: "Up to 200 creative & professional  icons + four color versions/themes per month",
      features: [
          { text: "Included source files", icon: "image/centang.svg" },
          { text: "Responsive components included", icon: "image/centang.svg" }
      ]
  }
};

function updateCard(plan) {
  document.getElementById("planLabel").innerText = plans[plan].label;
  document.getElementById("planTitle").innerText = plans[plan].title;
  document.getElementById("planPrice").innerText = plans[plan].price;
  document.getElementById("planDescription").innerHTML = `<b>${plans[plan].description}</b>`;

  document.getElementById("feature1").querySelector("img").src = plans[plan].features[0].icon;
  document.getElementById("feature1").querySelector("p").innerText = plans[plan].features[0].text;

  document.getElementById("feature2").querySelector("img").src = plans[plan].features[1].icon;
  document.getElementById("feature2").querySelector("p").innerText = plans[plan].features[1].text;
}

function setActiveButton(activeId) {
  document.getElementById("basicBtn").classList.remove("active-plan");
  document.getElementById("standardBtn").classList.remove("active-plan");
  document.getElementById("premiumBtn").classList.remove("active-plan");

  document.getElementById(activeId).classList.add("active-plan");
}


document.getElementById("basicBtn").addEventListener("click", () => {
  updateCard("basic");
  setActiveButton("basicBtn");
});

document.getElementById("standardBtn").addEventListener("click", () => {
  updateCard("standard");
  setActiveButton("standardBtn");
});

document.getElementById("premiumBtn").addEventListener("click", () => {
  updateCard("premium");
  setActiveButton("premiumBtn");
});

const addToCartButton = document.querySelector("button");
const notif = document.getElementById("notifSuccess");

addToCartButton.addEventListener("click", () => {
    notif.style.opacity = "1";

    setTimeout(() => {
        notif.style.opacity = "0";
    }, 2500);
});


