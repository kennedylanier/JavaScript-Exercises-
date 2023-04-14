const photoSlideShow = {
    photoList: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'],
    currentPhotoIndex: 0,
    nextPhoto() {
      if (this.currentPhotoIndex < this.photoList.length - 1) {
        this.currentPhotoIndex++;
        console.log(`Current photo: ${this.photoList[this.currentPhotoIndex]}`);
      } else {
        console.log("End of slideshow");
      }
    },
    prevPhoto() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
        console.log(`Current photo: ${this.photoList[this.currentPhotoIndex]}`);
      } else {
        console.log("End of slideshow");
      }
    },
    getCurrentPhoto() {
      return this.photoList[this.currentPhotoIndex];
    }
  };