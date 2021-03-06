import React, { PropTypes, cloneElement } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const Header = ({ logOut, handleToggle, auth, location }) => {
  const renderFlatButton = (label, path) => {
    const flatButton = <FlatButton label={label} containerElement={<Link to={path}>{label}</Link>} />;
    if (label === 'Log Out') return cloneElement(flatButton, { onTouchTap: logOut });
    return flatButton;
  };

  const renderAppBar = (label, path) => (
    <AppBar
      title="ShyBi"
      onLeftIconButtonTouchTap={handleToggle}
      iconElementRight={renderFlatButton(label, path)}
    />
  );

  if (!auth) {
    if (location === '/login') return renderAppBar('Sign UP', '/signup');
    return renderAppBar('Log In', '/login');
  }
  return renderAppBar('Log Out', '/');
};

Header.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
};

export default Header;
