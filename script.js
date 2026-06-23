function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const involvementCards = document.querySelectorAll(".involvement-card");
const involvementTabs = document.querySelectorAll(".involvement-tab");
const involvementModal = document.getElementById("involvement-modal");
const involvementModalTitle = document.getElementById("involvement-modal-title");
const involvementModalBody = document.getElementById("involvement-modal-body");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");

let activeInvolvementDetail = null;

function setInvolvementPanel(panelName) {
    if (!activeInvolvementDetail) {
        return;
    }

    const sourcePanel = activeInvolvementDetail.querySelector(
        `[data-panel="${panelName}"]`
    );

    if (!sourcePanel) {
        return;
    }

    involvementModalBody.innerHTML = sourcePanel.innerHTML;

    involvementTabs.forEach((tab) => {
        tab.classList.toggle("is-active", tab.dataset.panel === panelName);
    });
}

function openInvolvementModal(involvementKey) {
    activeInvolvementDetail = document.querySelector(
        `.involvement-detail[data-involvement="${involvementKey}"]`
    );

    if (!activeInvolvementDetail) {
        return;
    }

    involvementModalTitle.textContent = activeInvolvementDetail.dataset.title;
    setInvolvementPanel("overview");
    involvementModal.classList.add("open");
    involvementModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeInvolvementModal() {
    involvementModal.classList.remove("open");
    involvementModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

involvementCards.forEach((card) => {
    card.addEventListener("click", () => {
        openInvolvementModal(card.dataset.involvement);
    });
});

involvementTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        setInvolvementPanel(tab.dataset.panel);
    });
});

modalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeInvolvementModal);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && involvementModal.classList.contains("open")) {
        closeInvolvementModal();
    }
});