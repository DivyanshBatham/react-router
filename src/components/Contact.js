import React from 'react';

const Contact = (props) => {

    // Route automatically sends a prop with Router Information
    console.log(props);

    setTimeout(() => {
        // Programtically redirecting to new link
        props.history.push('/about');
    }, 5000);

    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>This is Contact Page.</p>
        </div>
    );
}

export default Contact;