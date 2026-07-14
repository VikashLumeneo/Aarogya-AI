/**
 * Pricing comparison table + cards highlighting
 */
document.addEventListener("DOMContentLoaded", () => {

    let activeCol = 2; // Hospital default
    let hoveredCol = null;

    const cells = document.querySelectorAll("[data-col]");
    const cards = document.querySelectorAll(".pricing-card");

    function clearCards() {
        cards.forEach(card => card.classList.remove("active-card"));
    }

    function update() {

        const current = hoveredCol !== null ? hoveredCol : activeCol;

        cells.forEach(cell => {

            const col = Number(cell.dataset.col);

            cell.classList.remove("col-active");

            // Hospital column always highlighted
            if (col === 2) {

                cell.style.background = "#1E2B6A";
                cell.style.color = "#fff";

            } else {

                cell.style.background = "";
                cell.style.color = "";

                if (col === current) {
                    cell.classList.add("col-active");
                }

            }

        });

        clearCards();

        const activeCard = document.querySelector(
            `.pricing-card[data-plan="${current}"]`
        );

        if (activeCard) {
            activeCard.classList.add("active-card");
        }

    }

    cells.forEach(cell => {

        const col = Number(cell.dataset.col);

        cell.addEventListener("mouseenter", () => {

            hoveredCol = col;
            update();

        });

        cell.addEventListener("mouseleave", () => {

            hoveredCol = null;
            update();

        });

        cell.addEventListener("click", () => {

            activeCol = col;
            update();

        });

    });

    cards.forEach(card => {

        const col = Number(card.dataset.plan);

        card.addEventListener("mouseenter", () => {

            hoveredCol = col;
            update();

        });

        card.addEventListener("mouseleave", () => {

            hoveredCol = null;
            update();

        });

        card.addEventListener("click", () => {

            activeCol = col;
            update();

            document.querySelector(".comparison-heading")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        });

    });

    update();

});


/** Opens the shared signup modal from radiology pricing cards */
function openModal(plan) {
    openSignup(plan === "early-access" ? "Early Access" : plan || "Plan");
}