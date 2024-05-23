// dropdown
var filterDropdown = document.getElementById("myFilterDropdown");
function toggleDropdown(event) {
    event.stopPropagation();
    filterDropdown.classList.toggle("showFilterItens");
}

document.querySelector(".btn-filters").addEventListener("click", toggleDropdown);

document.addEventListener("click", function(event) {
    if (!event.target.closest(".btn-filters") && !event.target.closest("#myFilterDropdown")) {
        filterDropdown.classList.remove("showFilterItens");
    }
});



// cards
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".result-group-cards", ".bottom-content");
    const cards = document.querySelectorAll(".result-card-item", ".popular-content");
    const cardWidth = cards[0].offsetWidth;
    
    let isDragging = false;
    let initialX;
    let scrollLeft = 0;
    
    container.addEventListener("mousedown", e => {
      isDragging = true;
      initialX = e.clientX - container.getBoundingClientRect().left;
      container.style.cursor = "grabbing";
      container.style.userSelect = "none";
    });
    
    container.addEventListener("mousemove", e => {
      if (!isDragging) return;
      const currentX = e.clientX - container.getBoundingClientRect().left;
      const scrollAmount = currentX - initialX;
      container.scrollLeft = scrollLeft - scrollAmount;
    });
    
    container.addEventListener("mouseup", () => {
      isDragging = false;
      container.style.cursor = "grab";
      container.style.removeProperty("user-select");
    });
    
    container.addEventListener("mouseleave", () => {
      isDragging = false;
      container.style.cursor = "grab";
      container.style.removeProperty("user-select");
    });
    
    // Adicione um evento para ajustar o scroll quando a janela é redimensionada
    window.addEventListener("resize", function() {
      const containerRect = container.getBoundingClientRect();
      const containerRight = containerRect.right;
      const lastCardRect = cards[cards.length - 1].getBoundingClientRect();
      const lastCardRight = lastCardRect.right;
      
      if (lastCardRight > containerRight) {
        container.scrollLeft += lastCardRight - containerRight;
      }
    });
  });

