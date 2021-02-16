import './header.scss';

export const Header: React.FC = () => {
  const displayWidth = document.body.clientWidth;
    return (
      <header>
        {displayWidth > 768 ?
              <div className="header">
              <div className="header-menu">
              <div className="header-menu-button">
                <div className="header-menu-box">
                  <div className="header-menu-icon"></div>
                  <div className="header-menu-icon"></div>
                  <div className="header-menu-icon"></div>
                </div>
              </div>
              <div className="header-menu-logo">Logo</div>
              <div className="header-menu-logo-name">Vilka</div>
            </div>
            <div className="header-search">
              <div className="header-search-magnifier">Типа лупа</div>
              <div className="header-search-box">Я ищу...</div>
              <div className="header-search-microphone">Мик.</div>
              <div className="header-search-submit">Найти</div>
            </div>
            <div className="header-basket-box">
              <div className="header-basket-icon-user">Usr</div>
              <div className="header-basket-icon-heart">Hrt</div>
              <div className="header-basket-icon">Bskt</div>
            </div>
            </div>
       :
       displayWidth < 768 ?
       <div className="header">
       <div className="header-menu">
       <div className="header-menu-button">
         <div className="header-menu-box">
           <div className="header-menu-icon"></div>
           <div className="header-menu-icon"></div>
           <div className="header-menu-icon"></div>
         </div>
       </div>
     </div>
     <div className="header-search">
       <div className="header-search-box">Я ищу...</div>
     </div>
     <div className="header-basket-box">
       <div className="header-basket-icon">Bskt</div>
     </div>
     </div>
     :
      <div className="header">
      <div className="header-menu">
      <div className="header-menu-button">
        <div className="header-menu-box">
          <div className="header-menu-icon"></div>
          <div className="header-menu-icon"></div>
          <div className="header-menu-icon"></div>
        </div>
      </div>
      <div className="header-menu-logo">Logo</div>
    </div>
    <div className="header-search">
      <div className="header-search-magnifier">Типа лупа</div>
      <div className="header-search-box">Я ищу...</div>
      <div className="header-search-submit">Найти</div>
    </div>
    <div className="header-basket-box">
      <div className="header-basket-icon-heart">Hrt</div>
      <div className="header-basket-icon">Bskt</div>
    </div>
    </div>
}
    </header>
  );
}