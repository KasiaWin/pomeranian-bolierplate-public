import React from 'react';

import './styles/header.css';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { ArrowIcon } from '../Components/Icons/ArrowIcon';
import { ElipseIcon } from '../Components/Icons/ElipseIcon';

//utworz mi komponent react o nazie Logo ze sciezki do pliku ktora podalem
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
// import { HeaderMenu } from '../Components/HeaderMenu';

export function AppHeader() {
  return (
    //tag jsx -> html
    <header>
      <div className="PomeranianLogo">
        {/* // component react  */}
        <PomeranianLogo />
      </div>

        <ArrowIcon />
      </div>
    </header>
  );
}
