/*
  Evan MacHale - 19191391
  07.10.19
  Nav.js
*/

// Icons
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

/*
  Note: When creating navigation headers,
  it’s important to have a Skip to content link
  so keyboard users can skip the navigation items
  and go straight to the main content.
*/

/*
  Problem with this file.
  Using React Router <Link>
  with IBM <HeaderName>, <HeaderMenu>, <HeaderMenuItem>
  Creates error :
  "Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>."
*/

import React, { Component } from 'react';
// Router
import { Link } from 'react-router-dom';
// Carbon
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
} from 'carbon-components-react/lib/components/UIShell';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideNavExpanded: false,
    };
    this.onClickSideNavExpand = this.onClickSideNavExpand.bind(this);
  }

  onClickSideNavExpand() {
    this.setState((prevState) => ({ isSideNavExpanded: !prevState.isSideNavExpanded }));
  }

  render() {
    const { isSideNavExpanded } = this.state;
    return (
      <>
        <Header aria-label="IBM Platform Name">

          <SkipToContent />

          <HeaderMenuButton
            aria-label="Open menu"
            onClick={this.onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />

          <Link to={'/'} element='div'>
            <HeaderName prefix="Evan MacHale">
              Starter
            </HeaderName>
          </Link>

          <HeaderNavigation aria-label="Starter">
            <HeaderMenu aria-label="Fundamentals" menuLinkName="Fundamentals">
              <Link to={'/man+machine'} element='div'>
                <HeaderMenuItem>Man & Machine</HeaderMenuItem>
              </Link>
              <Link to={'/people+place'} element='div'>
                <HeaderMenuItem>People & Place</HeaderMenuItem>
              </Link>
            </HeaderMenu>
          </HeaderNavigation>

          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenu aria-label="Fundamentals" menuLinkName="IxD Fundamentals">
                  <Link to={'/man+machine'} element='div'>
                    <HeaderMenuItem>Man & Machine</HeaderMenuItem>
                  </Link>
                  <Link to={'/people+place'} element='div'>
                    <HeaderMenuItem>People & Place</HeaderMenuItem>
                  </Link>
                </HeaderMenu>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>

        </Header>
      </>
    );
  }
}

export default Nav;
