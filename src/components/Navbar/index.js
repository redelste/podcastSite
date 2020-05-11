import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@material-ui/icons/Home';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";


export default () => (
  <div className={styles.dataDisplay}>
    <SideNav className={styles.colorForce}>
      <SideNav.Toggle className={styles.dataDisplay} />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" className={styles.navColors}>

          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} >
              <Link to="/pods">
                <HomeIcon className={styles.dataDisplay}></HomeIcon>
              </Link>
            </i>

          </NavIcon>
          <NavText>
            <Link className={styles.dataDisplay} to="/pods"> Home </Link>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  </div>
)

