import React from 'react';
import './CardNav.css'; // optional, kung gusto nimo custom CSS
import { IonButton } from '@ionic/react';

interface LinkItem {
  label: string;
  ariaLabel?: string;
}

interface MenuItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: LinkItem[];
}

interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: MenuItem[];
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  ease?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  baseColor = "#fff",
  menuColor = "#000",
  buttonBgColor = "#111",
  buttonTextColor = "#fff",
}) => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', background: baseColor }}>
      {/* Logo */}
      <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
        <img src={logo} alt={logoAlt} style={{ height: '50px', objectFit: 'contain' }} />
      </div>

      {/* Menu Items */}
      <div style={{ display: 'flex', gap: '15px', flex: 1 }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              padding: '5px 10px',
              cursor: 'pointer',
              color: menuColor
            }}
          >
            {item.label}

            {/* Dropdown */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: item.bgColor,
                color: item.textColor,
                minWidth: '150px',
                display: 'none',
                flexDirection: 'column',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                zIndex: 10
              }}
              className="dropdown"
            >
              {item.links.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={link.ariaLabel}
                  style={{ padding: '10px', textDecoration: 'none', color: item.textColor }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Optional Button */}
      <div>
        <IonButton
          style={{
            background: buttonBgColor,
            color: buttonTextColor,
            borderRadius: '5px'
          }}
        >
          Contact
        </IonButton>
      </div>
    </nav>
  );
};

export default CardNav;
