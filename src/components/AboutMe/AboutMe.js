import React, { useState } from 'react';
import classes from './AboutMe.module.css';
import Clouds from '../UI/Clouds/Clouds';
import CvButton from '../UI/CvButton/CvButton';
import VisibilitySensor from 'react-visibility-sensor';

export default React.memo(function AboutMe() {
    const [visible, setVisible] = useState(false);

    const onChange = (isVisible) => {
        if (isVisible) {
            setVisible(true);
        }
    };

    const socialIcons = (
        <ul className={visible ? null : classes.HideLeft}>
            <li>
                <a
                    href="https://www.linkedin.com/in/sergeyarenzon/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
            </li>

            <li>
                <a
                    href="https://github.com/SergeyArenzon"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </li>
            <li>
                <a
                    href="mailto:arenzonsergey@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fas fa-envelope fa-lg"></i>
                </a>
            </li>
            <li>
                <a
                    href="https://www.facebook.com/ArenzonSergey/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
            </li>
        </ul>
    );

    return (
        <div>
            <div className={classes.AboutMe} id="about">
                <VisibilitySensor
                    partialVisibility
                    onChange={onChange}
                    minTopValue={350}
                >
                    <div className={classes.LeftSide}>
                        <h1
                            className={[
                                classes.AboutText,
                                visible ? null : classes.HideLeft,
                            ].join(' ')}
                        >
                            About<h1 className={classes.MeText}>ME</h1>
                        </h1>

                        <div
                            className={[
                                classes.Profile,
                                visible ? null : classes.HideLeft,
                            ].join(' ')}
                        ></div>
                        {socialIcons}

                        <div className={classes.Tail}>
                            <div></div>
                        </div>
                    </div>
                </VisibilitySensor>
                <div
                    className={
                        classes.RightSide

                        // visible ? classes.fadeIn : null,
                    }
                >
                    <p
                        className={`${classes.TextP} ${
                            visible && classes.fadeIn
                        } `}
                    >
                        I'am BS.c graduate of{' '}
                        <strong>
                            Computer Science & Mathematics{' '}
                            <i className="fas fa-graduation-cap"></i>
                        </strong>{' '}
                        and web fullstack developer course.<br></br> Experienced
                        with the newest technologies like{' '}
                        <strong>
                            React, Redux, React Hooks, NodeJS, ExpressJS &
                            MongoDB
                        </strong>
                        .<br></br>
                        Aquired good knowledge in{' '}
                        <strong>JavaScript & CSS</strong> with very good
                        interpersonal skills and a part time{' '}
                        <strong>
                            GAMER <i className="fas fa-gamepad"></i>
                        </strong>
                    </p>
                    <CvButton type="resume_link">RESUME</CvButton>
                </div>
            </div>

            <Clouds />
        </div>
    );
});
