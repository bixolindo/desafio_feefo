import React from "react";
import { Container } from './styles'
import ContactCard from '../contact-card/contact-card';
import PropTypes from 'prop-types';

export const Header = ({ supportContact }) => {
    return (
        <Container>
            <h1>Account Overview</h1>
            <section aria-labelledby="feefo-contact-heading">
                <h3 id="feefo-contact-heading">Your Feefo support contact</h3>
                <ContactCard supportContact={supportContact} />
            </section>
        </Container>
    )
}

Header.prototype = {
    supportContact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        baseUrlImg: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }).isRequired
}


export default Header;