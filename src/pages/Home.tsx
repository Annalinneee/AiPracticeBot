// src/pages/Home.tsx

import {
  IonPage,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonTextarea,
  IonProgressBar,
  IonAvatar,
  IonIcon,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

import {
  personOutline,
  chatbubbleEllipsesOutline,
} from 'ionicons/icons';

import { useState } from 'react';

const questions = [
  'Tell me about yourself.',
  'What are your strengths?',
  'Why should we hire you?',
  'Describe a difficult situation you solved.',
];

const Home: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [answer, setAnswer] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [role, setRole] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [typing, setTyping] = useState(false);

  const startPractice = () => {
    setMessages([
      {
        type: 'bot',
        text: questions[0],
      },
    ]);

    setQuestionIndex(0);
    setScore(0);
  };

  const sendAnswer = () => {
    if (!answer.trim()) return;

    const userMessage = {
      type: 'user',
      text: answer,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      let feedback = 'Good answer!';
      let points = 5;

      if (answer.length < 20) {
        feedback = 'Try to explain more.';
        points = 2;
      }

      if (answer.length > 80) {
        feedback = 'Excellent detailed answer!';
        points = 10;
      }

      const feedbackMessage = {
        type: 'feedback',
        feedback,
        points,
      };

      setMessages((prev) => [...prev, feedbackMessage]);

      setScore((prev) => prev + points);

      const nextQuestion = questionIndex + 1;

      if (nextQuestion < questions.length) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              type: 'bot',
              text: questions[nextQuestion],
            },
          ]);
        }, 1000);
      }

      setQuestionIndex(nextQuestion);
    }, 1500);

    setAnswer('');
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{
          '--background': '#f1f5ff',
        }}
      >
        <style>{`
          .header {
            background: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #dbeafe;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .logo-icon {
            font-size: 28px;
            color: #2563eb;
          }

          .logo h1 {
            font-size: 20px;
            font-weight: bold;
            color: #1e3a8a;
          }

          .setup-bar {
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: white;
          }

          .progress-container {
            padding: 15px;
          }

          .chat-area {
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding-bottom: 180px;
          }

          .bot-message,
          .user-message {
            display: flex;
            gap: 10px;
            align-items: flex-start;
          }

          .user-message {
            justify-content: flex-end;
          }

          .avatar {
            width: 40px;
            height: 40px;
            background: #2563eb;
            color: white;
          }

          .bot-card {
            max-width: 75%;
            border-radius: 15px;
          }

          .user-card {
            max-width: 75%;
            border-radius: 15px;
            --background: #2563eb;
            color: white;
          }

          .feedback-card {
            border-left: 5px solid #22c55e;
            border-radius: 15px;
          }

          .typing {
            color: gray;
            font-style: italic;
          }

          .input-area {
            position: fixed;
            bottom: 0;
            width: 100%;
            background: white;
            padding: 10px;
            border-top: 1px solid #dbeafe;
          }
        `}</style>

        <div className="header">
          <div className="logo">
            <IonIcon
              icon={chatbubbleEllipsesOutline}
              className="logo-icon"
            />

            <h1>AI Practice Bot</h1>
          </div>

          <IonButton fill="outline" size="small">
            Session
          </IonButton>
        </div>

        <div className="setup-bar">
          <IonSelect
            placeholder="Select Role"
            value={role}
            onIonChange={(e) => setRole(e.detail.value!)}
          >
            <IonSelectOption value="Developer">
              Developer
            </IonSelectOption>

            <IonSelectOption value="Designer">
              Designer
            </IonSelectOption>

            <IonSelectOption value="Manager">
              Manager
            </IonSelectOption>
          </IonSelect>

          <IonSelect
            placeholder="Difficulty"
            value={difficulty}
            onIonChange={(e) => setDifficulty(e.detail.value!)}
          >
            <IonSelectOption value="Easy">Easy</IonSelectOption>

            <IonSelectOption value="Medium">Medium</IonSelectOption>

            <IonSelectOption value="Hard">Hard</IonSelectOption>
          </IonSelect>

          <IonButton
            onClick={startPractice}
            disabled={!role || !difficulty}
          >
            Start Practice
          </IonButton>
        </div>

        <div className="progress-container">
          <IonProgressBar
            value={questionIndex / questions.length}
          ></IonProgressBar>

          <p>
            <b>Score:</b> {score}
          </p>
        </div>

        <div className="chat-area">
          {messages.map((msg, index) => (
            <div key={index}>
              {msg.type === 'bot' && (
                <div className="bot-message">
                  <IonAvatar className="avatar">
                    <IonIcon icon={chatbubbleEllipsesOutline} />
                  </IonAvatar>

                  <IonCard className="bot-card">
                    <IonCardContent>
                      {msg.text}
                    </IonCardContent>
                  </IonCard>
                </div>
              )}

              {msg.type === 'user' && (
                <div className="user-message">
                  <IonCard className="user-card">
                    <IonCardContent>
                      {msg.text}
                    </IonCardContent>
                  </IonCard>

                  <IonAvatar className="avatar">
                    <IonIcon icon={personOutline} />
                  </IonAvatar>
                </div>
              )}

              {msg.type === 'feedback' && (
                <IonCard className="feedback-card">
                  <IonCardContent>
                    <h2>AI Feedback</h2>
                    <p>{msg.feedback}</p>
                    <h3>Score: {msg.points}/10</h3>
                  </IonCardContent>
                </IonCard>
              )}
            </div>
          ))}

          {typing && (
            <p className="typing">
              AI is typing...
            </p>
          )}
        </div>

        <div className="input-area">
          <IonTextarea
            autoGrow
            placeholder="Type your answer..."
            value={answer}
            onIonChange={(e) => setAnswer(e.detail.value!)}
          />

          <IonButton expand="block" onClick={sendAnswer}>
            Send Answer
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;