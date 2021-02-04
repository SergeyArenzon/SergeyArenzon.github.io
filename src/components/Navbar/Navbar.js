import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Navbar.module.css";

export default function Navbar(props) {
    let color = null;
    if (props.color) {
        if (props.color === "red") {
            color = classes.Red;
        } else {
            color = null;
        }
    }

    return (
        <nav className={[classes.Navbar, color].join(" ")}>
            <Logo />
        </nav>
    );
}
