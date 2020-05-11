import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 18em;
  transition: width linear 280ms;
  width: ${(props) => (props.menuOpen ? 20 : 4.5)}em;
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
`;

const MenuOpen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 3.5em;
  cursor: pointer;
`;
const MenuIcon = styled.span`
  font-size: 2em;
  margin: 0.5em;
`;

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    console.log('toggling state');
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { menuOpen } = this.state;
    let menuIconClasses = ['lnr'];
    if (menuOpen) {
      menuIconClasses.push('lnr-cross');
    } else {
      menuIconClasses.push('lnr-menu');
    }

    return (
      <NavBar id="left-navigation" menuOpen={menuOpen}>
        <MenuOpen onClick={this.toggleMenu}>
          <MenuIcon className={menuIconClasses}></MenuIcon>
        </MenuOpen>
        {this.props.children}
      </NavBar>
    );
  }
}
