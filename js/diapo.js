
// faire en objet plutard
class Sliders {
       //var slideIndex = 1;
        constructor(element) {
           // var slideIndex = 1;
          //slideIndex;
          this.slideIndex = 3;
          this.element = element;

        }

      
    

      // Next/previous controls
      plusSlides(n) {
          showSlides(slideIndex += n);
      }

      // Thumbnail image controls
      currentSlide(n) {
          showSlides(slideIndex = n);
      }

      showSlides(n) {
          console.log("hello");
            var i;
            var slides = document.getElementsByClassName(this.element);
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1}
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";
            dots[this.slideIndex-1].className += " active";
        } 
    }
//var slider = new Sliders( "mySlide");