import React from 'react';
import { render } from '@testing-library/react';
import PercentageText from './percentage-text';

describe('PercentageText Component', () => {
  it('renders percentage and text correctly', () => {
    const percentage = 70;
    const percentageText = 'Upload Success';

    const { getByText } = render(<PercentageText percentage={percentage} percentage_text={percentageText} />);

    const percentageElement = getByText(`${percentage}%`);
    expect(percentageElement).toBeInTheDocument();

    const textElement = getByText(percentageText);
    expect(textElement).toBeInTheDocument();
  });
});
