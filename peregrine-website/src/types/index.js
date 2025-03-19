// This file defines TypeScript interfaces for the application data structures.

export interface HeaderData {
    title: string;
    logoUrl: string;
    navLinks: Array<NavLink>;
}

export interface NavLink {
    href: string;
    text: string;
}

export interface SliderImage {
    url: string;
    alt: string;
}

export interface FormInput {
    name: string;
    email: string;
    message: string;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}