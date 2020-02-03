import React from 'react';
import profileImage from '../../images/profile.png';

const sections = [
  [
    { content: 'SOBRE MIM', href: '#about' },
    { content: 'MOTIVAÇÕES', href: '#motivations' },
    { content: 'REGRAS', href: '#rules' },
  ],
  [
    { content: 'useState', href: '#useState' },
    { content: 'useEffect', href: '#useEffect' },
  ],
  [
    { content: 'useMemo', href: '#useMemo' },
    { content: 'useCallback', href: '#useCallback' },
  ],
  [
    { content: 'useReducer', href: '#useReducer' },
    { content: 'useSelector', href: '#useSelector' },
    { content: 'useDispatch', href: '#useDispatch' },
  ],
  [
    { content: 'CUSTOM HOOKS', href: '#customHooks' },
    { content: 'REFERÊNCIAS', href: '#references' },
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
              <>
                {section &&
                  section.map(each => {
                    const { content, href } = each;
                    return (
                      <li className="nav-item">
                        <a className="nav-link" href={href}>
                          {content}
                        </a>
                      </li>
                    );
                  })}
                {index != lastSection && (
                  <span className="lighteen-primary">--------------------</span>
                )}
              </>
            );
          })}
      </ul>
    </div>
  </nav>
);

export default NavBar;
