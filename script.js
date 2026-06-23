function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const aboutGalleryImage = document.getElementById("about-gallery-image");

if (aboutGalleryImage) {
    const aboutGalleryPhotos = [
        "./assets/about_me/about.png",
        "./assets/about_me/fam_1.JPG",
        "./assets/about_me/fam_2.JPG"
    ];

    let currentAboutPhotoIndex = 0;

    const updateAboutGalleryImage = () => {
        aboutGalleryImage.src = aboutGalleryPhotos[currentAboutPhotoIndex];
        aboutGalleryImage.alt = `Aiden Racelis about photo ${currentAboutPhotoIndex + 1}`;
    };

    const showNextAboutPhoto = () => {
        currentAboutPhotoIndex =
            (currentAboutPhotoIndex + 1) % aboutGalleryPhotos.length;
        updateAboutGalleryImage();
    };

    const showPreviousAboutPhoto = () => {
        currentAboutPhotoIndex =
            (currentAboutPhotoIndex - 1 + aboutGalleryPhotos.length) %
            aboutGalleryPhotos.length;
        updateAboutGalleryImage();
    };

    document
        .querySelector(".about-gallery__btn--next")
        ?.addEventListener("click", showNextAboutPhoto);

    document
        .querySelector(".about-gallery__btn--prev")
        ?.addEventListener("click", showPreviousAboutPhoto);

    updateAboutGalleryImage();
}