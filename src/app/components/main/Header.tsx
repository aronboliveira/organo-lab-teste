import SearchHeader from "../client/inputs/header/SearchHeader";
import Image from "next/image";
import FSSearchIcon from "../icons/FSSearchIcon";
export default function Header(): JSX.Element {
  return (
    <header
      id="header"
      className="header header-full-width has-sticky sticky-jump"
    >
      <div className="header-wrapper stuck">
        <div id="masthead" className="header-main">
          <div
            className="header-inner flex-row container logo-left"
            role="navigation"
          >
            <div id="logo" className="flex-col logo">
              <a
                href="https://blog.organolab.com.br/"
                title="Organo Lab – Blog - Cultive conhecimento."
                rel="home"
              >
                <Image
                  width={300}
                  height={100}
                  src="https://blog.organolab.com.br/wp-content/uploads/2022/05/LOGO-BLOG.png"
                  className="header_logo header-logo"
                  alt="Organo Lab – Blog"
                />
                <Image
                  width={1020}
                  height={1020}
                  src="https://blog.organolab.com.br/wp-content/uploads/2022/05/ORGLAB_Logo-1024x1024.png"
                  className="header-logo-dark"
                  alt="Organo Lab – Blog"
                />
              </a>
            </div>
            <div className="flex-col show-for-medium flex-left">
              <ul className="mobile-nav nav nav-left "></ul>
            </div>
            <div
              className="flex-col hide-for-medium flex-left
            flex-grow"
            >
              <ul className="header-nav header-nav-main nav nav-left  nav-uppercase nav-prompts-overlay"></ul>
            </div>
            {/* //TODO PARADO AQUI */}
            <div className="flex-col hide-for-medium flex-right">
              <ul className="header-nav header-nav-main nav nav-right  nav-uppercase nav-prompts-overlay">
                <li className="header-search header-search-lightbox has-icon">
                  <a
                    href="#search-lightbox"
                    aria-label="Search"
                    data-open="#search-lightbox"
                    data-focus="input.search-field"
                    className="is-small"
                  >
                    <FSSearchIcon />
                  </a>
                  <div
                    id="search-lightbox"
                    className="mfp-hide dark text-center"
                  >
                    <div className="searchform-wrapper ux-search-box relative form-flat is-large">
                      <form
                        method="get"
                        className="searchform"
                        action="https://blog.organolab.com.br/"
                        role="search"
                        encType="x-www-formurl-encoded"
                        id="header-search-form"
                      >
                        <div className="flex-row relative">
                          <div className="flex-col flex-grow">
                            <SearchHeader />
                          </div>
                          <div className="flex-col">
                            <button
                              type="submit"
                              className="ux-search-submit submit-button secondary button icon mb-0"
                              aria-label="Enviar"
                            >
                              <i className="icon-search"></i>
                            </button>
                          </div>
                        </div>
                        <div className="live-search-results text-left z-top">
                          <div
                            className="autocomplete-suggestions"
                            style={{
                              position: "absolute",
                              display: "none",
                              maxHeight: 300,
                              zIndex: 9999,
                            }}
                          ></div>
                        </div>
                      </form>
                    </div>{" "}
                  </div>
                </li>
                <li className="header-divider"></li>
                <li className="html custom html_topbar_right">
                  <a href="https://www.organolab.com.br/">
                    <Image
                      alt="Loja"
                      src="https://blog.organolab.com.br/wp-content/uploads/2022/12/Sem-titulo-1.png"
                      width={150}
                      height={50}
                    />
                  </a>
                </li>
                <li className="html custom html_top_right_text">
                  <a href="https://blog.organolab.com.br/blog">
                    <Image
                      alt="Artigos"
                      src="https://blog.organolab.com.br/wp-content/uploads/2022/05/artigos.png"
                      width={150}
                      height={50}
                    />
                  </a>
                </li>
                <li className="html custom html_nav_position_text">
                  <a href="https://blog.organolab.com.br/">
                    <Image
                      alt="Downloads"
                      src="https://blog.organolab.com.br/wp-content/uploads/2022/05/downloads.png"
                      width={150}
                      height={50}
                    />
                  </a>
                </li>{" "}
              </ul>
            </div>
            {/* <!-- Mobile Right Elements --> */}
            <div className="flex-col show-for-medium flex-right">
              <ul className="mobile-nav nav nav-right ">
                <li className="nav-icon has-icon">
                  <div className="header-button">
                    <a
                      href="#"
                      data-open="#main-menu"
                      data-pos="left"
                      data-bg="main-menu-overlay"
                      data-color=""
                      className="icon primary button round is-small"
                      aria-label="Menu"
                      aria-controls="main-menu"
                      aria-expanded="false"
                    >
                      <i className="icon-menu"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="top-divider full-width"></div>
          </div>
        </div>
        <div className="header-bg-container fill">
          <div className="header-bg-image fill"></div>
          <div className="header-bg-color fill"></div>
        </div>
      </div>
    </header>
  );
}
