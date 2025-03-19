import Header from './components/header.js';
import Slider from './components/slider.js';
import FormValidation from './components/formValidation.js';
import { loadHeader, loadMoreDetails } from './services/api.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = new Header();
    header.loadHeader();

    const slider = new Slider();
    slider.initSlider();

    const formValidation = new FormValidation();
    formValidation.setupFormValidation();

    loadMoreDetails();
});