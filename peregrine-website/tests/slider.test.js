import Slider from '../src/components/slider';

describe('Slider Component', () => {
    let slider;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="slider-container">
                <div class="slider"></div>
                <button class="slider-btn prev">Previous</button>
                <button class="slider-btn next">Next</button>
            </div>
        `;
        slider = new Slider();
    });

    test('should initialize with the correct number of slides', () => {
        const imageUrls = [
            'images/slider-image1.jpg',
            'images/slider-image2.jpg',
            'images/slider-image3.jpg',
            'images/slider-image4.jpg'
        ];
        slider.init(imageUrls);
        const slides = document.querySelectorAll('.slider .slide');
        expect(slides.length).toBe(imageUrls.length);
    });

    test('should show the next slide when next button is clicked', () => {
        const imageUrls = [
            'images/slider-image1.jpg',
            'images/slider-image2.jpg',
            'images/slider-image3.jpg'
        ];
        slider.init(imageUrls);
        slider.showSlide(0); // Show first slide

        const nextButton = document.querySelector('.slider-btn.next');
        nextButton.click();

        expect(slider.currentSlide).toBe(1);
        expect(slider.slider.style.transform).toBe('translateX(-100%)');
    });

    test('should show the previous slide when previous button is clicked', () => {
        const imageUrls = [
            'images/slider-image1.jpg',
            'images/slider-image2.jpg',
            'images/slider-image3.jpg'
        ];
        slider.init(imageUrls);
        slider.showSlide(1); // Show second slide

        const prevButton = document.querySelector('.slider-btn.prev');
        prevButton.click();

        expect(slider.currentSlide).toBe(0);
        expect(slider.slider.style.transform).toBe('translateX(0%)');
    });

    test('should loop back to the last slide when next button is clicked on the last slide', () => {
        const imageUrls = [
            'images/slider-image1.jpg',
            'images/slider-image2.jpg',
            'images/slider-image3.jpg'
        ];
        slider.init(imageUrls);
        slider.showSlide(2); // Show last slide

        const nextButton = document.querySelector('.slider-btn.next');
        nextButton.click();

        expect(slider.currentSlide).toBe(0);
        expect(slider.slider.style.transform).toBe('translateX(-0%)');
    });

    test('should loop back to the first slide when previous button is clicked on the first slide', () => {
        const imageUrls = [
            'images/slider-image1.jpg',
            'images/slider-image2.jpg',
            'images/slider-image3.jpg'
        ];
        slider.init(imageUrls);
        slider.showSlide(0); // Show first slide

        const prevButton = document.querySelector('.slider-btn.prev');
        prevButton.click();

        expect(slider.currentSlide).toBe(2);
        expect(slider.slider.style.transform).toBe('translateX(-200%)');
    });
});