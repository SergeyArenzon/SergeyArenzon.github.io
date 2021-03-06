import React, { useState } from "react";
import Logo from "../Logo/Logo";
import classes from "./Navbar.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import NavLinks from "./NavLinks/NavLinks";

export default function Navbar(props) {
    const [hamburgerClicked, setHamburgerClicked] = useState(false);

    let color = null;
    if (props.color) {
        if (props.color) {
            color = classes.Colorize;
        } else {
            color = null;
        }
    }

    // Hamburger click & full screen navlinks handler
    const hamburgerClickHandler = () => {
        setHamburgerClicked(!hamburgerClicked);
    };

    let hamburgerClick = null;
    if (hamburgerClicked) {
        hamburgerClick = classes.HamburgerClicked;
    }


    return (
        <nav className={[classes.Navbar, color].join(" ")}>
            <Logo /> 
            <NavLinks showFullscreenLinks={hamburgerClicked} hamburgerClickHandler={hamburgerClickHandler}/>

            {/* Hamburger */}
            <div
                className={[classes.HamburgerContainer, hamburgerClick].join(   
                    " "
                )}
                onClick={() => hamburgerClickHandler()}
            >
                <div className={classes.Hamburger}></div>
            </div>

            <ProgressBar scrollTop={props.scrollTop} />
        </nav>
    );
}
