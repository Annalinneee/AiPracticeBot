import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  IonCard,
  IonCardContent,
  useIonRouter,
} from '@ionic/react';

import {
  personCircleOutline,
  mailOutline,
  lockClosedOutline,
} from 'ionicons/icons';

import { useState } from 'react';

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const doLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Please enter email and password');
      setShowAlert(true);
      return;
    }

    // SAMPLE LOGIN
    if (email === 'admin@gmail.com' && password === '123456') {
      setShowToast(true);

      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 1500);
    } else {
      setErrorMessage('Invalid email or password');
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{
          '--background': '#f4f7ff',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <IonCard
            style={{
              width: '100%',
              maxWidth: '420px',
              borderRadius: '25px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              padding: '10px',
            }}
          >
            <IonCardContent>
              {/* LOGO */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '20px',
                  marginBottom: '30px',
                }}
              >
                <IonAvatar
                  style={{
                    width: '120px',
                    height: '120px',
                    background: '#e8f0ff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <IonIcon
                    icon={personCircleOutline}
                    style={{
                      fontSize: '90px',
                      color: '#3880ff',
                    }}
                  />
                </IonAvatar>

                <h1
                  style={{
                    marginTop: '15px',
                    fontWeight: 'bold',
                    color: '#1e293b',
                  }}
                >
                  Welcome Back
                </h1>

                <p
                  style={{
                    color: '#64748b',
                    marginTop: '-5px',
                  }}
                >
                  Login to continue
                </p>
              </div>

              {/* EMAIL */}
              <IonInput
                fill="outline"
                label="Email"
                labelPlacement="floating"
                type="email"
                placeholder="Enter your email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              >
                <IonIcon icon={mailOutline} slot="start" />
              </IonInput>

              {/* PASSWORD */}
              <IonInput
                style={{
                  marginTop: '15px',
                }}
                fill="outline"
                label="Password"
                labelPlacement="floating"
                type="password"
                placeholder="Enter password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              >
                <IonIcon icon={lockClosedOutline} slot="start" />
                <IonInputPasswordToggle slot="end" />
              </IonInput>

              {/* LOGIN BUTTON */}
              <IonButton
                expand="block"
                shape="round"
                onClick={doLogin}
                style={{
                  marginTop: '25px',
                  height: '50px',
                  fontWeight: 'bold',
                }}
              >
                LOGIN
              </IonButton>

              {/* REGISTER */}
              <IonButton
                routerLink="/it35-lab/register"
                expand="block"
                fill="clear"
                shape="round"
              >
                Create New Account
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        {/* ALERT */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Login Failed"
          message={errorMessage}
          buttons={['OK']}
        />

        {/* TOAST */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login Successful!"
          duration={1500}
          position="top"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;