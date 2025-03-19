class Slider {
    constructor(containerSelector, prevButtonSelector, nextButtonSelector, imageUrls) {
        this.sliderContainer = document.querySelector(containerSelector);
        this.prevButton = document.querySelector(prevButtonSelector);
        this.nextButton = document.querySelector(nextButtonSelector);
        this.imageUrls = imageUrls;
        this.currentSlide = 0;

        this.init();
    }

    init() {
        this.createSlides();
        this.showSlide(this.currentSlide);
        this.addEventListeners();
        this.startAutoSlide();
    }

    createSlides() {
        const slider = document.createElement('div');
        slider.classList.add('slider');

        this.imageUrls.forEach(url => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            const img = document.createElement('img');
            img.src = url;
            img.alt = "Slider Image";
            slide.appendChild(img);
            slider.appendChild(slide);
        });

        this.sliderContainer.appendChild(slider);
        this.slides = slider.querySelectorAll('.slide');
    }

    showSlide(index) {
        if (this.slides.length === 0) return;

        if (index < 0) {
            this.currentSlide = this.slides.length - 1;
        } else if (index >= this.slides.length) {
            this.currentSlide = 0;
        } else {
            this.currentSlide = index;
        }

        const translateValue = -this.currentSlide * 100 + '%';
        gsap.to(this.sliderContainer.querySelector('.slider'), {
            x: translateValue,
            duration: 0.8,
            ease: "power3.out"
        });
    }

    addEventListeners() {
        this.prevButton.addEventListener('click', () => {
            this.showSlide(this.currentSlide - 1);
        });

        this.nextButton.addEventListener('click', () => {
            this.showSlide(this.currentSlide + 1);
        });
    }

    startAutoSlide() {
        setInterval(() => {
            this.showSlide(this.currentSlide + 1);
        }, 5000);
    }
}

export default Slider;