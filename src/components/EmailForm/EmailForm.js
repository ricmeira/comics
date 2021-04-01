import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './EmailForm.css';

const EmailForm = ({ sendEmail }) => {
    const [ emailValue, setEmailValue ] = useState("");

    return (
        <div className="EmailForm">
            <p>Digite o seu email:</p>
            <input className="EmailForm_input" onChange={event => setEmailValue(event.target.value)}/>
            <button className="Main_button" onClick={() => sendEmail(emailValue)}>Enviar</button>
        </div>
    );
};

EmailForm.propTypes = {
    sendEmail: PropTypes.func.isRequired,
};

export default EmailForm;