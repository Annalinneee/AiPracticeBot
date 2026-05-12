import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { home, person, settings } from 'ionicons/icons';
import Feed from './Feed';
import Profile from './Profile';
import Settings from './Settings';

const HomeTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/it35-lab/app/feed" component={Feed} />
      <Route exact path="/it35-lab/app/profile" component={Profile} />
      <Route exact path="/it35-lab/app/settings" component={Settings} />
      <Redirect exact from="/it35-lab/app" to="/it35-lab/app/feed" />
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="feed" href="/it35-lab/app/feed">
        <IonIcon icon={home} />
        <IonLabel>Feed</IonLabel>
      </IonTabButton>
      <IonTabButton tab="profile" href="/it35-lab/app/profile">
        <IonIcon icon={person} />
        <IonLabel>Profile</IonLabel>
      </IonTabButton>
      <IonTabButton tab="settings" href="/it35-lab/app/settings">
        <IonIcon icon={settings} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default HomeTabs;
