import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
    it('renders welcome text', () => {
        render(<App />);
        expect(screen.getByText(/vite/i)).toBeInTheDocument();
    });
});
