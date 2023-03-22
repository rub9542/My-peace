import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import OutsideClickHandler from "react-outside-click-handler";
import { StaticImage } from "gatsby-plugin-image";

import {
  HeaderContainer,
  HeaderInnerSection,
  HeroContentSection,
  ListWrapper,
  Navbar,
  ResponsiveNavIcon,
  HeaderImageWrapper,
  ResponsiveAppoinmentWrapper,
  ResponsiveMenuContainer,
  ResponsiveMenuImageContainer,
  ResponsiveMenuImage,
  ResponsiveNav,
  ResponsiveNavList,
  ResponsiveMenuHeader,
  ResponiveSubMenuWrapper,
  ResponsiveSubMenuList,
  HeaderWrapper,
  ResponsiveBackground,
  LinkText,
  List,
} from "./headerStyle";
import {
  OutlineButton,
  OutlineLargeButton,
  PrimaryLargeButton,
  DefaultButton,
} from "../button";
import SubMenu from "../subMenu";
import { navLinks } from "./headerVariable";
import BookAppointmentModal from "../bookAppointmentModal";
import NavIcon from "../../images/header/navMenu.png";
import Close from "../../images/header/close.png";
import HelpLineBlack from "../../images/header/helpline_dark.png";
import PopUp from "./popUp";
import HelpLine from "../../images/header/helpline.png";

export default function Header({ layout }) {
  const [activeMenu, setActiveMenu] = useState({ img: "", menus: [] });
  const [openModal, setOpenModal] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const isBrowser = typeof window !== "undefined";

  const onOpenSubMenu = (img, menus) => {
    setActiveMenu({ img, menus });
  };

  const onHoverMenus = (nav) => {
    const { img, subMenu } = nav;
    if (img && subMenu) {
      onOpenSubMenu(img, subMenu);
      closePopUp();
    }
  };
  const closeActiveSubMenu = () => {
    setActiveMenu({ img: "", menus: [] });
  };

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    onCloseSubMenu();
  };

  const onOpenResponsiveSubMenu = (name) => {
    setActiveSubMenu(name === activeSubMenu ? "" : name);
    if (isBrowser) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const onCloseSubMenu = () => {
    setActiveSubMenu("");
  };

  const showPopup = () => {
    setOpenPopup(!openPopup);
  };

  const closePopUp = () => {
    setOpenPopup(false);
  };

  const ImageCursor = {
    cursor: "pointer",
  };

  // Sticky Menu Area
  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Method that will fix header after a specific scrollable */
  const onScroll = (e) => {
    const scrollTop = isBrowser ? window.scrollY : "";
    setSticky(scrollTop > 250 ? true : false);
  };

  const renderResponsiveMenus = () => {
    return (
      <ResponsiveNav>
        <ResponsiveNavList>
          {navLinks.map((nav, idx) => (
            <li key={idx}>
              {nav.name && (
                <ResponsiveMenuHeader
                  onClick={() => onOpenResponsiveSubMenu(nav.name)}
                >
                  <Link to={nav.link}>{nav.name}</Link>
                  {nav.subMenu && (
                    <>
                      {activeSubMenu !== nav.name ? (
                        <svg
                          // onClick={() => onOpenResponsiveSubMenu(nav.name)}
                          width="20"
                          height="11"
                          viewBox="0 0 20 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0002 10.9065C9.91433 10.9065 9.82931 10.889 9.75035 10.8552C9.67138 10.8214 9.60011 10.7718 9.54087 10.7096L0.790865 1.95961C0.730539 1.89929 0.682686 1.82767 0.650038 1.74885C0.61739 1.67003 0.600586 1.58555 0.600586 1.50024C0.600586 1.41493 0.61739 1.33045 0.650038 1.25163C0.682686 1.17281 0.730539 1.10119 0.790865 1.04087C0.851191 0.98054 0.922808 0.932686 1.00163 0.900038C1.08045 0.86739 1.16493 0.850586 1.25024 0.850586C1.33555 0.850586 1.42003 0.86739 1.49885 0.900038C1.57767 0.932686 1.64929 0.98054 1.70962 1.04087L10.0002 9.32055L18.2909 1.04087C18.4127 0.919032 18.5779 0.850586 18.7502 0.850586C18.9225 0.850586 19.0878 0.919032 19.2096 1.04087C19.3314 1.1627 19.3999 1.32794 19.3999 1.50024C19.3999 1.67254 19.3314 1.83778 19.2096 1.95961L10.4596 10.7096C10.4004 10.7718 10.3291 10.8214 10.2501 10.8552C10.1712 10.889 10.0862 10.9065 10.0002 10.9065Z"
                            fill="black"
                          />
                        </svg>
                      ) : (
                        <svg
                          onClick={onCloseSubMenu}
                          width="20"
                          height="11"
                          viewBox="0 0 20 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99976 0.0935097C10.0857 0.0935097 10.1707 0.11096 10.2497 0.144802C10.3286 0.178645 10.3999 0.228173 10.4591 0.290385L19.2091 9.04039C19.2695 9.10071 19.3173 9.17233 19.35 9.25115C19.3826 9.32997 19.3994 9.41445 19.3994 9.49976C19.3994 9.58507 19.3826 9.66955 19.35 9.74837C19.3173 9.82719 19.2695 9.89881 19.2091 9.95913C19.1488 10.0195 19.0772 10.0673 18.9984 10.1C18.9196 10.1326 18.8351 10.1494 18.7498 10.1494C18.6644 10.1494 18.58 10.1326 18.5011 10.1C18.4223 10.0673 18.3507 10.0195 18.2904 9.95913L9.99976 1.67945L1.70914 9.95913C1.5873 10.081 1.42206 10.1494 1.24976 10.1494C1.07746 10.1494 0.912218 10.081 0.790384 9.95913C0.66855 9.8373 0.600105 9.67206 0.600105 9.49976C0.600105 9.32746 0.66855 9.16222 0.790384 9.04039L9.54039 0.290385C9.59963 0.228173 9.6709 0.178645 9.74987 0.144802C9.82883 0.11096 9.91385 0.0935097 9.99976 0.0935097Z"
                            fill="black"
                          />
                        </svg>
                      )}
                    </>
                  )}
                </ResponsiveMenuHeader>
              )}
              {nav.subMenu && activeSubMenu === nav.name
                ? nav.subMenu.map((sub, id) => (
                    <ResponiveSubMenuWrapper key={sub.title}>
                      <h4>{sub.title}</h4>
                      <ResponsiveSubMenuList>
                        {sub.menus.map((menu) => (
                          <Link key={menu.title} to={menu.link}>
                            <li>
                              <p>{menu.title}</p>
                            </li>
                          </Link>
                        ))}
                      </ResponsiveSubMenuList>
                    </ResponiveSubMenuWrapper>
                  ))
                : ""}
            </li>
          ))}
        </ResponsiveNavList>
      </ResponsiveNav>
    );
  };

  const renderLinks = () => {
    return (
      <Navbar>
        <ListWrapper>
          {navLinks.map((nav, index) => (
            <List
              onMouseEnter={() => onHoverMenus(nav)}
              onClick={() => onHoverMenus(nav)}
              key={nav.name + "menu name"}
              cursor={nav.img}
              onMouseLeave={closeActiveSubMenu}
            >
              {nav.icon ? (
                <div
                  onKeyUp={showPopup}
                  role="presentation"
                  onClick={showPopup}
                >
                  <img
                    style={ImageCursor}
                    alt="sukoon phycology center"
                    src={
                      layout === "other" || isSticky ? HelpLineBlack : HelpLine
                    }
                  />
                  <OutsideClickHandler onOutsideClick={closePopUp}>
                    {openPopup && <PopUp />}
                  </OutsideClickHandler>
                </div>
              ) : nav.subMenu ? (
                <LinkText
                  layout={isSticky || layout === "other" ? "other" : ""}
                >
                  {nav.name}
                </LinkText>
              ) : (
                <Link to={nav.link}>
                  <LinkText
                    layout={isSticky || layout === "other" ? "other" : ""}
                  >
                    {" "}
                    {nav.name}{" "}
                  </LinkText>
                </Link>
              )}
              {activeMenu.img === nav.img && (
                <SubMenu onClose={closeActiveSubMenu} menu={activeMenu} />
              )}
            </List>
          ))}
        </ListWrapper>
        {layout === "other" || isSticky ? (
          <DefaultButton onClick={onOpenModal} name="Book Online" />
        ) : (
          <OutlineButton onClick={onOpenModal} name="Book Online" />
        )}
      </Navbar>
    );
  };

  return (
    <HeaderWrapper layout={layout} id="header-wrapper">
      <HeaderInnerSection
      // layout={isSticky || layout === "other" ? "other" : ""}
      >
        <HeaderImageWrapper>
          <ResponsiveNavIcon src={NavIcon} onClick={handleMenuClick} />
          <Link to="/">
            <StaticImage
              alt="sukoon phycology center"
              src="../../images/header/Logo.png"
            />
          </Link>
        </HeaderImageWrapper>
        {renderLinks()}
        <ResponsiveAppoinmentWrapper>
          <PrimaryLargeButton name="Book Appointment" onClick={onOpenModal} />
        </ResponsiveAppoinmentWrapper>
      </HeaderInnerSection>
      {layout !== "other" && (
        <HeaderContainer>
          <HeroContentSection>
            <h6>physiotherapy Center</h6>
            <h1>
              A Safe Space For Better <br /> Days
            </h1>
            <OutlineLargeButton
              onClick={onOpenModal}
              name="Book an Appointment"
            />
          </HeroContentSection>
        </HeaderContainer>
      )}
      <BookAppointmentModal
        open={openModal}
        onCloseModal={onCloseModal}
        fromPath="header"
        title="Book an Appointment"
      />
      {menuClick && (
        <ResponsiveMenuContainer>
          {openPopup ? <ResponsiveBackground></ResponsiveBackground> : null}
          <ResponsiveMenuImageContainer>
            <ResponsiveNavIcon src={Close} onClick={handleMenuClick} />
            {openPopup ? <PopUp /> : null}{" "}
            <ResponsiveMenuImage src={HelpLineBlack} onClick={showPopup} />
          </ResponsiveMenuImageContainer>
          {renderResponsiveMenus()}
        </ResponsiveMenuContainer>
      )}
    </HeaderWrapper>
  );
}
