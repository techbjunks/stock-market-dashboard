import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Details from "../../../views/Details";

describe('Details', () => {
    const renderApp = () => render(<MemoryRouter><Details /></MemoryRouter>);
    
    test('should render Details Screen', () => {
        renderApp();
        screen.debug();
    })
})