import React from 'react';
import { render } from '@testing-library/react';
import ContactCard from './contact-card';

describe('ContactCard Component', () => {
  const supportContact = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    baseUrlImg: 'https://example.com/avatar.jpg',
    phone: '123-456-7890'
  };

  it('renders without crashing', () => {
    render(<ContactCard supportContact={supportContact} />);
  });

  it('renders the contact name', () => {
    const { getByText } = render(<ContactCard supportContact={supportContact} />);
    const nameElement = getByText('John Doe');
    expect(nameElement).toBeInTheDocument();
  });

  it('renders the email with correct href', () => {
    const { getByText } = render(<ContactCard supportContact={supportContact} />);
    const emailLink = getByText('john.doe@example.com');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:john.doe@example.com');
  });

  it('renders the phone with correct href', () => {
    const { getByText } = render(<ContactCard supportContact={supportContact} />);
    const phoneLink = getByText('123-456-7890');
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:123-456-7890');
  });

  it('renders the image if baseUrlImg is provided', () => {
    const { getByAltText } = render(<ContactCard supportContact={supportContact} />);
    const imageElement = getByAltText('John Doe');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders the placeholder image if baseUrlImg is not provided', () => {
    const contactWithoutImg = { ...supportContact, baseUrlImg: '' };
    const { getByTestId } = render(<ContactCard supportContact={contactWithoutImg} />);
    const placeholderImage = getByTestId('avatar-placeholder');
    expect(placeholderImage).toBeInTheDocument();
    expect(placeholderImage.textContent).toBe('J');
  });
});
