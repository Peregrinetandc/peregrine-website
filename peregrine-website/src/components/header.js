class Header {
    constructor() {
        this.headerPlaceholder = document.getElementById('header-placeholder');
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }

    init() {
        this.loadHeader();
        this.addMenuToggleListeners();
    }

    async loadHeader() {
        try {
            const response = await fetch('header.html');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.text();
            this.headerPlaceholder.innerHTML = data;
            this.updateActiveNavLink();
        } catch (error) {
            console.error('Error loading header:', error);
            this.headerPlaceholder.innerHTML = '<div class="header-error">Error loading header. Please refresh the page.</div>';
        }
    }

    addMenuToggleListeners() {
        if (this.menuToggle && this.navLinks) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }
    }

    toggleMenu() {
        this.navLinks.classList.toggle('show');
    }

    updateActiveNavLink() {
        const path = window.location.pathname;
        const navLinks = this.navLinks.querySelectorAll('a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', path.endsWith(href));
        });
    }
}

export default Header;