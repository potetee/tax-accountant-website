import React from "react";

const Footer :React.FC= () =>{
    return (
        <footer>
            <p>© {new Date().getFullYear()} Tax Accountant. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;