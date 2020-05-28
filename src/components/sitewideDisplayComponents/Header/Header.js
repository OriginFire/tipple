import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCocktail } from '@fortawesome/free-solid-svg-icons';
import s from './Header.scss';
import Link from '../../utilityComponents/link';
import history from '../../../history';
import Logo from '../../../../public/Tipple_WoC_Reduced.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick() {
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true });
    } else {
      this.setState({ menuOpen: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.menuOpen) {
      this.setState({ menuOpen: false });
    }
  }

  menuVisibility() {
    if (this.state.menuOpen) {
      return (
        <div>
          <div
            className={s.shadow_background}
            onClick={e => this.setState({ menuOpen: false })}
          />
          <div className={s.dropdown_menu}>
            <Link className={s.menu_link} to="/">
              <div className={s.menu_link_text}>Home</div>
            </Link>

            <Link className={s.menu_link} to="/vendor-login">
              <div className={s.menu_link_text}>Vendor Login</div>
            </Link>

            <Link className={s.menu_link} to="/vendor-create">
              <div className={s.menu_link_text}>Create Vendor Account</div>
            </Link>

            <Link className={s.menu_link} to="/about">
              <div className={s.menu_link_text}>About Tipple</div>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className={s.shadow_background_inactive} />
        <div className={s.dropdown_menu_inactive} />
      </div>
    );
  }

  render() {
    return (
      <div className={s.container}>
        <img
          src={Logo}
          className={s.logo}
          alt="Tipple Supply Co"
          onClick={e => history.push('/')}
        />
        <div
          className={s.text_logo}
          onClick={e => history.push('/')}
        >
          Tipple Supply Co.
        </div>
        <div className={s.menu_icon} onClick={this.menuClick}>
          <FontAwesomeIcon icon={faBars} size="lg" color="white" pull="right" />
        </div>
        {this.menuVisibility()}
      </div>
    );
  }
}

export default withStyles(s)(Header);
