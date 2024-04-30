document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery");
  
    // Array of image file names
    const imageNames = [
      "1.png",
      "2.png",
      "3.png",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.png",
      "9.png",
      // Add more image file names here...
    ];
  
    // Function to create image elements and append them to the gallery container
    function createGallery(images) {
      images.forEach((imageName) => {
        const img = document.createElement("img");
        img.src = `./Assets/Images/Gallery/${imageName}`;
        img.alt = "Image";
        galleryContainer.appendChild(img);
      });
    }
  
    // Load initial set of images
    const initialImages = imageNames.slice(0, 9); // Display first 9 images
    createGallery(initialImages);
  });
  