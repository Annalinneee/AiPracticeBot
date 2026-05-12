// src/App.tsx

import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";

import "@ionic/react/css/core.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>

          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Redirect to="/" />

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;