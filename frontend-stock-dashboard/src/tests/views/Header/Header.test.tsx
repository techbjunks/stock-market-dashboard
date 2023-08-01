import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from "../../../views/Header";

describe('Header', () => {
    const renderApp = (title: string) => render(<MemoryRouter><Header title={title} /></MemoryRouter>);
    
    test('should render Header component with Home as title', () => {
        const title = 'Home'
        renderApp(title);
        const homeCTA = screen.getByText('Home');
        expect(homeCTA).toBeInTheDocument();
    })

    test('should render Header component with Detail as title', () => {
        const title = 'Detail'
        renderApp(title);
        const homeCTA = screen.getByText('Detail');
        expect(homeCTA).toBeInTheDocument();
    })

    test('should render Input field in Header component', async () => {
        const title = 'Home'
        renderApp(title);
        const searchBar = screen.getByTestId('search-bar');
        expect(searchBar).toBeInTheDocument();
        const value = 'MSFT';
        await userEvent.type(searchBar, value);
        expect(searchBar).toHaveValue(value);
    })

    test('should render Button in Header component', async () => {
        const title = 'Home'
        renderApp(title);
        const searchBtn = screen.getByRole("button", {
            name: "Search",
        });
        expect(searchBtn).toBeInTheDocument();
    })
})