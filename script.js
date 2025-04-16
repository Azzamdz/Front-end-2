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
  const selectedPlan = plans[plan];
  document.getElementById("planLabel").innerText = selectedPlan.label;
  document.getElementById("planTitle").innerText = selectedPlan.title;
  document.getElementById("planPrice").innerText = selectedPlan.price;
  document.getElementById("planDescription").innerHTML = `<b>${selectedPlan.description}</b>`;

  selectedPlan.features.forEach((feature, index) => {
    const featureEl = document.getElementById(`feature${index + 1}`);
    featureEl.querySelector("img").src = feature.icon;
    featureEl.querySelector("p").innerText = feature.text;
  });
}

function setActiveButton(activeId) {
  ["basicBtn", "standardBtn", "premiumBtn"].forEach(id =>
    document.getElementById(id).classList.toggle("active-plan", id === activeId)
  );
}

["basic", "standard", "premium"].forEach(plan => {
  document.getElementById(`${plan}Btn`).addEventListener("click", () => {
    updateCard(plan);
    setActiveButton(`${plan}Btn`);
  });
});

document.querySelector("button").addEventListener("click", () => {
  const notif = document.getElementById("notifSuccess");
  notif.style.opacity = "1";
  setTimeout(() => (notif.style.opacity = "0"), 2500);
});
