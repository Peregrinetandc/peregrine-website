import Header from '../src/components/header';
import { fetchHeaderContent } from '../src/services/api';

jest.mock('../src/services/api');

describe('Header Component', () => {
    let header;

    beforeEach(() => {
        document.body.innerHTML = '<div id="header-placeholder"></div>';
        header = new Header();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should load header content successfully', async () => {
        const mockData = '<nav><ul><li>Home</li><li>About</li></ul></nav>';
        fetchHeaderContent.mockResolvedValueOnce(mockData);

        await header.loadHeader();

        const headerPlaceholder = document.getElementById('header-placeholder');
        expect(headerPlaceholder.innerHTML).toBe(mockData);
    });

    test('should handle error when loading header content', async () => {
        fetchHeaderContent.mockRejectedValueOnce(new Error('Failed to load'));

        await header.loadHeader();

        const headerPlaceholder = document.getElementById('header-placeholder');
        expect(headerPlaceholder.innerHTML).toContain('Error loading header. Please refresh the page.');
    });

    test('should toggle mobile menu visibility', () => {
        const menuToggle = document.createElement('button');
        menuToggle.classList.add('menu-toggle');
        document.body.appendChild(menuToggle);
        const navLinks = document.createElement('div');
        navLinks.classList.add('nav-links');
        document.body.appendChild(navLinks);

        header.addMenuToggleListeners();

        menuToggle.click();
        expect(navLinks.classList.contains('show')).toBe(true);

        menuToggle.click();
        expect(navLinks.classList.contains('show')).toBe(false);
    });
});