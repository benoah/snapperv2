import React, { useState, useEffect } from "react";
import { getCurrentTime } from "../utils/getTime";
import { getCurrentDate } from "../utils/getDate";
import styles from "./Navbar.module.css";
import Avatar from "./97.png";
import { Outlet, Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export default function Layout() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let { year, month, day } = getCurrentDate();
      setDate(`${day}-${month}-${year}`);
    }, 1000);

    setInterval(() => {
      let { hours, minutes, format } = getCurrentTime();
      setTime(`${hours}:${minutes} ${format}`);
    }, 1000);
  }, []);

  return (
    <Row>
      <nav>
        <div className={styles.logoWrapper}>
          <h1>Snapper</h1>
        </div>
        <div className={styles.linksWrapper}>
          <div className={styles.links}>
            <Link to="/">Min Side</Link>
            <Link to="/leder">Leder</Link>
          </div>
          <div className={styles.profile}>
            <img src={Avatar} className={styles.profileImg} alt={"avatar"} />
            <h1 className={styles.name}>Ben Moussa</h1>
            <div className={styles.date}>
              <p>{date}</p>
              <h1>{time}</h1>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Row>
  );
}
