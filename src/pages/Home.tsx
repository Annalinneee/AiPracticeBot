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
  gridOutline,
  analyticsOutline,
  settingsOutline,
  peopleOutline,
  laptopOutline,
  headsetOutline,
  cashOutline,
  checkmarkCircleOutline,
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
      <IonContent fullscreen>
        <style>{`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            font-family: Arial, sans-serif;
          }

          .main-layout{
            display:flex;
            height:100vh;
            background:#f3f6fb;
          }

          /* SIDEBAR */

          .sidebar{
            width:260px;
            background:white;
            border-right:1px solid #dbe4f0;
            padding:20px;
            display:flex;
            flex-direction:column;
            gap:20px;
          }

          .logo{
            display:flex;
            align-items:center;
            gap:10px;
            margin-bottom:10px;
          }

          .logo-box{
            width:42px;
            height:42px;
            border-radius:12px;
            background:#2563eb;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:22px;
          }

          .logo h1{
            font-size:24px;
            color:#2563eb;
            font-weight:700;
          }

          .menu-title{
            font-size:13px;
            color:#94a3b8;
            font-weight:bold;
            margin-bottom:8px;
            text-transform:uppercase;
          }

          .menu-item{
            display:flex;
            align-items:center;
            gap:12px;
            padding:14px;
            border-radius:14px;
            font-size:17px;
            color:#334155;
            cursor:pointer;
            transition:.2s;
          }

          .menu-item:hover{
            background:#eff6ff;
          }

          .menu-item.active{
            background:#dbeafe;
            color:#1d4ed8;
            font-weight:600;
          }

          /* MAIN */

          .main-content{
            flex:1;
            display:flex;
            flex-direction:column;
          }

          .topbar{
            background:white;
            padding:18px 25px;
            border-bottom:1px solid #dbe4f0;
            display:flex;
            justify-content:space-between;
            align-items:center;
          }

          .top-buttons{
            display:flex;
            gap:10px;
          }

          .custom-btn{
            --border-radius:12px;
            font-weight:600;
          }

          .setup-bar{
            background:white;
            padding:20px;
            display:flex;
            gap:20px;
            align-items:center;
            border-bottom:1px solid #dbe4f0;
            flex-wrap:wrap;
          }

          .setup-box{
            display:flex;
            align-items:center;
            gap:10px;
          }

          .setup-box label{
            font-weight:600;
            color:#334155;
          }

          .setup-select{
            min-width:220px;
            background:white;
            border:2px solid #bfdbfe;
            border-radius:12px;
            padding:4px 10px;
          }

          .chat-section{
            flex:1;
            overflow-y:auto;
            padding:20px;
          }

          .bot-message,
          .user-message{
            display:flex;
            gap:12px;
            margin-bottom:18px;
          }

          .user-message{
            justify-content:flex-end;
          }

          .avatar{
            width:42px;
            height:42px;
            background:#2563eb;
            color:white;
          }

          .bot-card{
            max-width:70%;
            border-radius:18px;
            box-shadow:none;
          }

          .user-card{
            max-width:70%;
            border-radius:18px;
            --background:#2563eb;
            color:white;
            box-shadow:none;
          }

          .feedback-card{
            border-left:5px solid #22c55e;
            border-radius:18px;
            margin-bottom:20px;
          }

          .typing{
            color:#64748b;
            font-style:italic;
          }

          .input-area{
            background:white;
            border-top:1px solid #dbe4f0;
            padding:15px 20px;
          }

          .input-wrapper{
            display:flex;
            gap:12px;
            align-items:center;
          }

          .textarea{
            flex:1;
            border:2px solid #dbeafe;
            border-radius:18px;
            padding:10px;
            background:#f8fafc;
          }

          .send-btn{
            --border-radius:14px;
            height:52px;
          }

          /* RIGHT PANEL */

          .right-panel{
            width:280px;
            background:white;
            border-left:1px solid #dbe4f0;
            padding:20px;
          }

          .right-title{
            font-size:14px;
            color:#94a3b8;
            font-weight:bold;
            margin-bottom:15px;
            text-transform:uppercase;
          }

          .progress-circle{
            width:90px;
            height:90px;
            border-radius:50%;
            border:10px solid #dbeafe;
            margin:auto;
            margin-bottom:10px;
          }

          .score-text{
            text-align:center;
            margin-bottom:25px;
          }

          .stats-box{
            display:flex;
            justify-content:space-between;
            margin-bottom:14px;
            color:#475569;
          }

          .skill{
            margin-bottom:18px;
          }

          .skill p{
            margin-bottom:8px;
            color:#334155;
            font-size:15px;
          }

          @media(max-width: 900px){

            .sidebar{
              display:none;
            }

            .right-panel{
              display:none;
            }

            .setup-bar{
              flex-direction:column;
              align-items:flex-start;
            }

            .setup-select{
              width:100%;
            }
          }
        `}</style>

        <div className="main-layout">

          {/* SIDEBAR */}

          <div className="sidebar">

            <div className="logo">
              <div className="logo-box">
                <IonIcon icon={chatbubbleEllipsesOutline} />
              </div>

              <h1>AI Practice Bot</h1>
            </div>

            <div>
              <p className="menu-title">Menu</p>

              <div className="menu-item active">
                <IonIcon icon={gridOutline} />
                Dashboard
              </div>

              <div className="menu-item">
                <IonIcon icon={chatbubbleEllipsesOutline} />
                Practice
              </div>

              <div className="menu-item">
                <IonIcon icon={analyticsOutline} />
                Analytics
              </div>
            </div>

            <div>
              <p className="menu-title">Job Roles</p>

              <div className="menu-item">
                <IonIcon icon={laptopOutline} />
                Software Eng.
              </div>

              <div className="menu-item">
                <IonIcon icon={headsetOutline} />
                IT Support
              </div>

              <div className="menu-item">
                <IonIcon icon={peopleOutline} />
                HR / People
              </div>

              <div className="menu-item">
                <IonIcon icon={cashOutline} />
                Finance
              </div>
            </div>

            <div>
              <p className="menu-title">Account</p>

              <div className="menu-item">
                <IonIcon icon={personOutline} />
                Profile
              </div>

              <div className="menu-item">
                <IonIcon icon={settingsOutline} />
                Settings
              </div>
            </div>

          </div>

          {/* MAIN CONTENT */}

          <div className="main-content">

            <div className="topbar">

              <div></div>

              <div className="top-buttons">
                <IonButton
                  fill="outline"
                  className="custom-btn"
                >
                  No active session
                </IonButton>

                <IonButton
                  fill="outline"
                  className="custom-btn"
                >
                  New Session
                </IonButton>

                <IonButton className="custom-btn">
                  Sign In
                </IonButton>
              </div>

            </div>

            {/* SETUP */}

            <div className="setup-bar">

              <div className="setup-box">
                <label>Job Role</label>

                <IonSelect
                  className="setup-select"
                  placeholder="Select role..."
                  value={role}
                  onIonChange={(e) => setRole(e.detail.value!)}
                >
                  <IonSelectOption value="Software Engineer">
                    Software Engineer
                  </IonSelectOption>

                  <IonSelectOption value="IT Support">
                    IT Support
                  </IonSelectOption>

                  <IonSelectOption value="HR Specialist">
                    HR Specialist
                  </IonSelectOption>

                  <IonSelectOption value="Finance Analyst">
                    Finance Analyst
                  </IonSelectOption>

                  <IonSelectOption value="Product Manager">
                    Product Manager
                  </IonSelectOption>

                  <IonSelectOption value="Data Scientist">
                    Data Scientist
                  </IonSelectOption>
                </IonSelect>
              </div>

              <div className="setup-box">
                <label>Difficulty</label>

                <IonSelect
                  className="setup-select"
                  placeholder="Select..."
                  value={difficulty}
                  onIonChange={(e) => setDifficulty(e.detail.value!)}
                >
                  <IonSelectOption value="Easy">
                    Easy
                  </IonSelectOption>

                  <IonSelectOption value="Medium">
                    Medium
                  </IonSelectOption>

                  <IonSelectOption value="Hard">
                    Hard
                  </IonSelectOption>
                </IonSelect>
              </div>

              <IonButton
                onClick={startPractice}
                disabled={!role || !difficulty}
                className="custom-btn"
              >
                Start Session
              </IonButton>

            </div>

            {/* CHAT */}

            <div className="chat-section">

              <IonProgressBar
                value={questionIndex / questions.length}
              />

              <br />

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

                        <h2>
                          <IonIcon icon={checkmarkCircleOutline} />
                          {' '}AI Feedback
                        </h2>

                        <br />

                        <p>{msg.feedback}</p>

                        <br />

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

            {/* INPUT */}

            <div className="input-area">

              <div className="input-wrapper">

                <IonTextarea
                  autoGrow
                  className="textarea"
                  placeholder="Type your answer..."
                  value={answer}
                  onIonChange={(e) => setAnswer(e.detail.value!)}
                />

                <IonButton
                  onClick={sendAnswer}
                  className="send-btn"
                >
                  Send
                </IonButton>

              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="right-panel">

            <p className="right-title">
              Session Progress
            </p>

            <div className="progress-circle"></div>

            <div className="score-text">
              <h1>{score}%</h1>
              <p>In progress</p>
            </div>

            <p className="right-title">
              Stats
            </p>

            <div className="stats-box">
              <span>Total score</span>
              <b>{score}</b>
            </div>

            <div className="stats-box">
              <span>Accuracy</span>
              <b>85%</b>
            </div>

            <div className="stats-box">
              <span>Role</span>
              <b>{role || '-'}</b>
            </div>

            <div className="stats-box">
              <span>Difficulty</span>
              <b>{difficulty || '-'}</b>
            </div>

            <br />

            <p className="right-title">
              Skills Assessed
            </p>

            <div className="skill">
              <p>Communication</p>
              <IonProgressBar value={0.8}></IonProgressBar>
            </div>

            <div className="skill">
              <p>Problem Solving</p>
              <IonProgressBar value={0.7}></IonProgressBar>
            </div>

            <div className="skill">
              <p>Technical Depth</p>
              <IonProgressBar value={0.6}></IonProgressBar>
            </div>

            <div className="skill">
              <p>Clarity</p>
              <IonProgressBar value={0.9}></IonProgressBar>
            </div>

          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;