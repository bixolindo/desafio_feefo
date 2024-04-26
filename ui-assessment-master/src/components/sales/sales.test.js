import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sales from './sales';

test('Sales Component › renders Sales with correct data', () => {
    const salesOverview = {
        successfulUploads: 3,
        linesSaved: 4,
        lastUploadDate: new Date('2021-11-10')
    };

    render(<Sales salesOverview={salesOverview} />);

    const salesHeader = screen.getByTestId('sales-heading');
    expect(salesHeader).toBeInTheDocument();

    const uploadsElement = screen.getByTestId('uploads');
    expect(uploadsElement).toHaveTextContent('3');

    const linesAddElement = screen.getByTestId('lines-added');
    expect(linesAddElement).toHaveTextContent('4');
});

test('Sales Component › updates data when salesOverview prop changes', () => {
    const initialSalesOverview = {
        successfulUploads: 3,
        linesSaved: 4,
        lastUploadDate: new Date('2021-11-10')
    };

    const newSalesOverview = {
        successfulUploads: 5,
        linesSaved: 7,
        lastUploadDate: new Date('2021-02-03')
    };

    const { rerender } = render(<Sales salesOverview={initialSalesOverview} />);

    const uploadsElement = screen.getByTestId('uploads');
    expect(uploadsElement).toHaveTextContent('3');

    const linesAddElement = screen.getByTestId('lines-added');
    expect(linesAddElement).toHaveTextContent('4');

    rerender(<Sales salesOverview={newSalesOverview} />);

    expect(uploadsElement).toHaveTextContent('5');
    expect(linesAddElement).toHaveTextContent('7');
});
