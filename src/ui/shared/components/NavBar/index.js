import React from 'react';
import profileImage from '../../images/profile.png';

const sections = [
  [
    { title: 'SOBRE MIM', href: '#aboutMe' },
    { title: 'INTRODUÇÃO', href: '#introduction' },
    { title: 'MOTIVAÇÕES', href: '#motivations' },
    { title: 'REGRAS', href: '#rules' },
  ],
  [
    { title: 'useState', href: '#useState' },
    { title: 'useEffect', href: '#useEffect' },
  ],
  [
    { title: 'useMemo', href: '#useMemo' },
    { title: 'useCallback', href: '#useCallback' },
  ],
  [
    { title: 'REDUX', href: '#redux' },
    { title: 'CUSTOM HOOKS', href: '#customHooks' },
    { title: 'REFERÊNCIAS', href: '#references' },
  ],
];

const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <div className="navbar-brand d-none d-lg-block">
      <h3 className="lighteen-primary">React Hooks</h3>
    </div>
    <div className="navbar-brand">
      <span className="d-block d-lg-none">React Hooks</span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={profileImage}
          alt="profile"
        />
      </span>
    </div>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        {sections &&
          sections.map((section, index) => {
            const lastSection = sections.length - 1;
            return (
              <div key={index}>
                {section &&
                  section.map((each, index) => {
                    const { title, href } = each;
                    return (
                      <li key={title + href + index} className="nav-item">
                        <a className="nav-link" href={href}>
                          {title}
                        </a>
                      </li>
                    );
                  })}
                {index !== lastSection && (
                  <span className="lighteen-primary">--------------------</span>
                )}
              </div>
            );
          })}
      </ul>
    </div>
  </nav>
);

export default NavBar;
