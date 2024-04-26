import React from "react";
import { Card, ImageIcon } from './styles'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



export const ContactCard = ({ supportContact }) => {
    return (
        <Card aria-labelledby="contact-heading">
            {supportContact.baseUrlImg ? (
                <img className="avatar-img" src={supportContact.baseUrlImg} alt={supportContact.name} />
            ) : (
                <ImageIcon data-testid="avatar-placeholder" className="avatar-placeholder">{supportContact.name.charAt(0)}</ImageIcon>
            )}
            <section>
                <h5 id="contact-heading">{supportContact.name}</h5>
                <div>
                    <span><FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${supportContact.email}`}>{supportContact.email}</a></span>
                    <span><a href={`tel:${supportContact.phone}`}>{supportContact.phone} </a></span>
                </div>
            </section>
        </Card>
    )
}

ContactCard.prototype = {
    supportContact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        baseUrlImg: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }).isRequired
}

export default ContactCard;