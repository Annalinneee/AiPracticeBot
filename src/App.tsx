import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import HomeTabs from './pages/home-tabs/HomeTabs';
import LandingPage from './pages/LandingPage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter basename="/it35-lab">
      <IonRouterOutlet>
        {/* Landing page as first page */}
        <Route exact path="/it35-lab/landing" component={LandingPage} />

        {/* Login/Register */}
        <Route exact path="/it35-lab" component={Login} />
        <Route exact path="/it35-lab/register" component={Register} />

        {/* App & HomeTabs */}
        <Route path="/it35-lab/app" component={Menu} />
        <Route path="/it35-lab/home-tabs" component={HomeTabs} />

        {/* Redirect root */}
        <Redirect from="/" to="/it35-lab/landing" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
