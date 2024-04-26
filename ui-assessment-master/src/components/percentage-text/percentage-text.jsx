import React from "react";
import { Container } from './styles'
import PropTypes from 'prop-types';

export const PercentageText = ({ percentage, percentage_text }) => {

    return (
        <Container>
            <h4 aria-live="polite" aria-atomic="true">
                {percentage}%
            </h4>
            <p>
                {percentage_text}
            </p>
        </Container>
    )
}

PercentageText.prototype = {
    percentage: PropTypes.number.isRequired,
    percentage_text: PropTypes.string.isRequired
}

export default PercentageText;