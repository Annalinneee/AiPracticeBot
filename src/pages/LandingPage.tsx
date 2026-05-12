import {
  IonButton,
  IonContent,
  IonPage,
} from "@ionic/react";

const LandingPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>

        <style>{`

          *{
            box-sizing:border-box;
            margin:0;
            padding:0;
          }

          .page{
            font-family:sans-serif;
            background:#f0f6fd;
            color:#1e293b;
          }

          /* NAVBAR */
          .nav{
            background:white;
            border-bottom:1px solid #dbeafe;
            padding:0 2rem;
            height:60px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            position:sticky;
            top:0;
            z-index:100;
          }

          .logo{
            display:flex;
            align-items:center;
            gap:10px;
          }

          .logo-icon{
            width:35px;
            height:35px;
            background:#185FA5;
            border-radius:10px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:18px;
            font-weight:bold;
          }

          .logo-text{
            font-size:18px;
            font-weight:700;
            color:#042C53;
          }

          .logo-text span{
            color:#378ADD;
          }

          .nav-links{
            display:flex;
            gap:10px;
            align-items:center;
          }

          .nav-link{
            font-size:14px;
            padding:10px 16px;
            border:none;
            background:transparent;
            border-radius:8px;
            cursor:pointer;
            color:#475569;
            transition:0.3s;
          }

          .nav-link:hover{
            background:#E6F1FB;
            color:#185FA5;
          }

          /* HERO */
          .hero{
            padding:5rem 2rem;
            text-align:center;
            background:linear-gradient(
              180deg,
              #E6F1FB 0%,
              #f0f6fd 100%
            );
          }

          .hero-badge{
            display:inline-block;
            background:white;
            border:1px solid #B5D4F4;
            padding:10px 18px;
            border-radius:999px;
            color:#185FA5;
            font-size:13px;
            font-weight:600;
            margin-bottom:25px;
          }

          .hero h1{
            font-size:58px;
            font-weight:700;
            color:#042C53;
            line-height:1.2;
            margin-bottom:20px;
          }

          .hero h1 span{
            color:#378ADD;
          }

          .hero p{
            max-width:700px;
            margin:0 auto;
            color:#475569;
            line-height:1.8;
            font-size:18px;
          }

          .hero-buttons{
            margin-top:35px;
            display:flex;
            justify-content:center;
            gap:12px;
            flex-wrap:wrap;
          }

          /* STATS */
          .stats{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
            background:white;
            border-top:1px solid #dbeafe;
            border-bottom:1px solid #dbeafe;
          }

          .stat-box{
            padding:30px;
            text-align:center;
            border-right:1px solid #dbeafe;
          }

          .stat-box:last-child{
            border-right:none;
          }

          .stat-value{
            font-size:34px;
            font-weight:700;
            color:#185FA5;
          }

          .stat-label{
            color:#64748b;
            font-size:14px;
            margin-top:8px;
          }

          /* GENERAL SECTION */
          .section{
            padding:80px 20px;
          }

          .section-title{
            text-align:center;
            color:#378ADD;
            font-size:13px;
            font-weight:700;
            text-transform:uppercase;
            margin-bottom:12px;
            letter-spacing:1px;
          }

          .section h2{
            text-align:center;
            font-size:42px;
            margin-bottom:12px;
            color:#042C53;
          }

          .section-sub{
            text-align:center;
            color:#64748b;
            margin-bottom:45px;
            font-size:16px;
          }

          /* FEATURE CARDS */
          .cards{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
            gap:20px;
            max-width:1150px;
            margin:auto;
          }

          .card{
            background:white;
            border-radius:20px;
            padding:30px;
            border:1px solid #dbeafe;
            transition:0.3s;
          }

          .card:hover{
            transform:translateY(-5px);
            box-shadow:0 10px 25px rgba(0,0,0,0.05);
          }

          .card-icon{
            font-size:42px;
            margin-bottom:15px;
          }

          .card h3{
            margin-bottom:12px;
            color:#042C53;
          }

          .card p{
            color:#475569;
            line-height:1.7;
          }

          /* ROLES */
          .roles{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(170px,1fr));
            gap:18px;
            max-width:1050px;
            margin:auto;
          }

          .role{
            background:white;
            border:1px solid #dbeafe;
            border-radius:18px;
            padding:25px;
            text-align:center;
            transition:0.3s;
          }

          .role:hover{
            background:#E6F1FB;
            transform:translateY(-5px);
          }

          .role-icon{
            font-size:38px;
            margin-bottom:12px;
          }

          .role h3{
            color:#042C53;
            font-size:17px;
          }

          /* STEPS */
          .steps{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
            gap:20px;
            max-width:1050px;
            margin:auto;
          }

          .step{
            background:white;
            border-radius:20px;
            padding:35px;
            text-align:center;
            border:1px solid #dbeafe;
          }

          .step-number{
            width:55px;
            height:55px;
            border-radius:50%;
            background:#185FA5;
            color:white;
            display:flex;
            align-items:center;
            justify-content:center;
            margin:auto auto 20px;
            font-weight:bold;
            font-size:20px;
          }

          .step h3{
            margin-bottom:12px;
            color:#042C53;
          }

          .step p{
            color:#64748b;
            line-height:1.7;
          }

          /* CTA */
          .cta{
            background:#0C447C;
            color:white;
            text-align:center;
            padding:90px 20px;
          }

          .cta h1{
            font-size:46px;
            margin-bottom:20px;
          }

          .cta p{
            color:#dbeafe;
            max-width:650px;
            margin:auto auto 35px;
            line-height:1.8;
            font-size:17px;
          }

          /* FOOTER */
          .footer{
            background:white;
            border-top:1px solid #dbeafe;
            padding:60px 20px 20px;
          }

          .footer-container{
            max-width:1200px;
            margin:auto;
            display:grid;
            grid-template-columns:
              repeat(auto-fit,minmax(250px,1fr));
            gap:40px;
          }

          .footer-brand{
            display:flex;
            gap:15px;
          }

          .footer-logo{
            width:55px;
            height:55px;
            background:#185FA5;
            border-radius:14px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:24px;
            font-weight:bold;
          }

          .footer-brand h2{
            color:#042C53;
            margin-bottom:10px;
          }

          .footer-brand span{
            color:#378ADD;
          }

          .footer-brand p{
            color:#64748b;
            line-height:1.7;
            font-size:14px;
          }

          .footer-links{
            display:flex;
            flex-direction:column;
            gap:10px;
          }

          .footer-links h3,
          .footer-contact h3{
            color:#042C53;
            margin-bottom:10px;
          }

          .footer-links a{
            text-decoration:none;
            color:#475569;
            transition:0.3s;
            font-size:14px;
          }

          .footer-links a:hover{
            color:#185FA5;
            transform:translateX(5px);
          }

          .footer-contact p{
            color:#64748b;
            margin-bottom:10px;
            font-size:14px;
          }

          .footer-bottom{
            margin-top:40px;
            padding-top:20px;
            border-top:1px solid #e2e8f0;
            text-align:center;
            color:#94a3b8;
            font-size:14px;
          }

          /* MOBILE */
          @media(max-width:768px){

            .hero h1{
              font-size:42px;
            }

            .section h2{
              font-size:34px;
            }

            .nav{
              padding:0 1rem;
            }

            .nav-links{
              display:none;
            }

          }

        `}</style>

        <div className="page">

          {/* NAVBAR */}
          <div className="nav">

            <div className="logo">
              <div className="logo-icon">
                ▶
              </div>

              <div className="logo-text">
                AI <span>Practice</span> Bot
              </div>
            </div>

            <div className="nav-links">
              <button className="nav-link">
                Features
              </button>

              <button className="nav-link">
                Roles
              </button>

              <button className="nav-link">
                How it works
              </button>
            </div>

          </div>

          {/* HERO */}
          <section className="hero">

            <div className="hero-badge">
              AI-powered interview coaching
            </div>

            <h1>
              Ace your next
              <br />
              interview with <span>AI</span>
            </h1>

            <p>
              Practice real interview questions for your
              dream job, receive instant AI feedback,
              and improve your communication confidence.
            </p>

            <div className="hero-buttons">

              <IonButton
                size="large"
                routerLink="/home"
              >
                Start Free Session
              </IonButton>

              <IonButton
                size="large"
                fill="outline"
              >
                Watch Demo
              </IonButton>

            </div>

          </section>

          {/* STATS */}
          <div className="stats">

            <div className="stat-box">
              <div className="stat-value">6+</div>
              <div className="stat-label">
                Job Roles
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-value">3</div>
              <div className="stat-label">
                Difficulty Levels
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-value">AI</div>
              <div className="stat-label">
                Instant Feedback
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-value">100%</div>
              <div className="stat-label">
                Free to Use
              </div>
            </div>

          </div>

          {/* FEATURES */}
          <section className="section">

            <div className="section-title">
              WHY IT WORKS
            </div>

            <h2>
              Everything you need to prepare
            </h2>

            <p className="section-sub">
              Structured practice with real AI feedback.
            </p>

            <div className="cards">

              <div className="card">
                <div className="card-icon">⏱️</div>
                <h3>Real-time feedback</h3>
                <p>
                  Get instant scoring and suggestions.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">📈</div>
                <h3>Track your progress</h3>
                <p>
                  Improve communication and confidence.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">💼</div>
                <h3>Role-specific questions</h3>
                <p>
                  Questions are based on your role.
                </p>
              </div>

              <div className="card">
                <div className="card-icon">👥</div>
                <h3>Follow-up prompts</h3>
                <p>
                  AI asks deeper interview questions.
                </p>
              </div>

            </div>

          </section>

          {/* ROLES */}
          <section className="section">

            <div className="section-title">
              SUPPORTED ROLES
            </div>

            <h2>
              Pick your role
            </h2>

            <p className="section-sub">
              Choose your preferred interview field.
            </p>

            <div className="roles">

              <div className="role">
                <div className="role-icon">💻</div>
                <h3>Software Eng.</h3>
              </div>

              <div className="role">
                <div className="role-icon">🖥️</div>
                <h3>IT Support</h3>
              </div>

              <div className="role">
                <div className="role-icon">🤝</div>
                <h3>HR Specialist</h3>
              </div>

              <div className="role">
                <div className="role-icon">📊</div>
                <h3>Finance Analyst</h3>
              </div>

            </div>

          </section>

          {/* STEPS */}
          <section className="section">

            <div className="section-title">
              HOW IT WORKS
            </div>

            <h2>
              Three easy steps
            </h2>

            <div className="steps">

              <div className="step">
                <div className="step-number">
                  1
                </div>

                <h3>Choose setup</h3>

                <p>
                  Pick role and difficulty.
                </p>
              </div>

              <div className="step">
                <div className="step-number">
                  2
                </div>

                <h3>Answer questions</h3>

                <p>
                  Respond naturally like a real interview.
                </p>
              </div>

              <div className="step">
                <div className="step-number">
                  3
                </div>

                <h3>Get AI feedback</h3>

                <p>
                  Receive scores and improvements.
                </p>
              </div>

            </div>

          </section>

          {/* CTA */}
          <section className="cta">

            <h1>
              Ready to start practicing?
            </h1>

            <p>
              Start your AI-powered interview
              preparation today.
            </p>

            <IonButton
              size="large"
              color="light"
              routerLink="/home"
            >
              Start Now
            </IonButton>

          </section>

          {/* FOOTER */}
          <footer className="footer">

            <div className="footer-container">

              {/* BRAND */}
              <div className="footer-brand">

                <div className="footer-logo">
                  ▶
                </div>

                <div>
                  <h2>
                    AI <span>Practice</span> Bot
                  </h2>

                  <p>
                    AI-powered interview preparation
                    platform designed to help you
                    practice smarter and improve
                    confidence.
                  </p>
                </div>

              </div>

              {/* LINKS */}
              <div className="footer-links">

                <h3>Quick Links</h3>

                <a href="#">
                  Home
                </a>

                <a href="#">
                  Features
                </a>

                <a href="#">
                  Roles
                </a>

                <a href="#">
                  How It Works
                </a>

              </div>

              {/* CONTACT */}
              <div className="footer-contact">

                <h3>Contact</h3>

                <p>
                  Email:
                  support@aipracticebot.com
                </p>

                <p>
                  Phone:
                  +63 912 345 6789
                </p>

                <p>
                  Built with Ionic React ❤️
                </p>

              </div>

            </div>

            <div className="footer-bottom">
              © 2026 AI Practice Bot.
              All rights reserved.
            </div>

          </footer>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default LandingPage;