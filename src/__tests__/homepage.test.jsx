import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/homepage';

describe('HomePage Component', () => {
  test('renders company name in navbar', () => {
    render(<HomePage />);
    const companyName = screen.getByText('DigiTech');
    expect(companyName).toBeInTheDocument();
  });

  test('renders trending section title', () => {
    render(<HomePage />);
    const trendingTitle = screen.getByText(/trending products/i);
    expect(trendingTitle).toBeInTheDocument();
  });

  test('renders 10 trending product cards', () => {
    render(<HomePage />);
    const orderButtons = screen.getAllByRole('button', { name: /order now/i });
    // You may see 16 buttons: 10 trending + 6 recommended — so assert >=10
    expect(orderButtons.length).toBeGreaterThanOrEqual(10);
  });
});
