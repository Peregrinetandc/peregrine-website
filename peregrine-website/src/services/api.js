import axios from 'axios';

const API_BASE_URL = '/';

export const fetchHeaderContent = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}header.html`);
        return response.data;
    } catch (error) {
        console.error('Error fetching header content:', error);
        throw error;
    }
};

export const fetchMoreDetails = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}data/more-details.json`);
        return response.data.details;
    } catch (error) {
        console.error('Error fetching more details:', error);
        throw error;
    }
};