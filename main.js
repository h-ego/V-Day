onload = () => {
  document.body.classList.remove("container");
};

  // Add this to the very top of flower.html
  if (performance.navigation.type === 1) {
    // If the page is reloaded, go back to the question card
    window.location.href = "index.html";
  }
