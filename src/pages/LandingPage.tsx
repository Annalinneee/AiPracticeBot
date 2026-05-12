import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export default function App() {
  const features = [
    {
      title: "Real-time feedback",
      description:
        "Get scored on every answer with strengths, improvements, and sample responses instantly.",
      icon: "⏱️",
    },
    {
      title: "Track your progress",
      description:
        "Watch your communication, clarity, and problem-solving improve.",
      icon: "📈",
    },
    {
      title: "Role-specific questions",
      description:
        "Questions are tailored to your selected role and difficulty.",
      icon: "✅",
    },
    {
      title: "Follow-up prompts",
      description:
        "The AI asks deeper follow-up questions like a real interviewer.",
      icon: "👥",
    },
  ];

  const roles = [
    "Software Eng.",
    "IT Support",
    "HR Specialist",
    "Finance Analyst",
    "Product Manager",
    "Data Scientist",
  ];

  const steps = [
    {
      title: "Choose your setup",
      desc: "Pick a role, difficulty, and session length.",
    },
    {
      title: "Answer questions",
      desc: "Respond naturally like a real interview.",
    },
    {
      title: "Get feedback",
      desc: "Receive instant AI scoring and suggestions.",
    },
  ];

  return (
    <IonApp>
      <IonPage>
        {/* HEADER */}
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>AI Practice Bot</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          {/* HERO SECTION */}
          <div
            style={{
              background: "#f4f8ff",
              padding: "80px 20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "white",
                border: "1px solid #dbeafe",
                color: "#2563eb",
                fontWeight: "600",
                marginBottom: "25px",
              }}
            >
              AI-powered interview coaching
            </div>

            <h1
              style={{
                fontSize: "52px",
                fontWeight: "bold",
                color: "#0f172a",
                marginBottom: "20px",
              }}
            >
              Ace your next interview with AI
            </h1>

            <p
              style={{
                maxWidth: "750px",
                margin: "0 auto",
                color: "#475569",
                fontSize: "18px",
                lineHeight: "1.7",
              }}
            >
              Practice real interview questions for your chosen role,
              receive instant AI feedback, and improve your confidence.
            </p>

            <div style={{ marginTop: "35px" }}>
              <IonButton size="large" color="primary">
                Start Free Session
              </IonButton>

              <IonButton
                size="large"
                fill="outline"
                color="primary"
                style={{ marginLeft: "12px" }}
              >
                Watch Demo
              </IonButton>
            </div>
          </div>

          {/* STATS */}
          <IonGrid style={{ padding: "20px" }}>
            <IonRow>
              {[
                ["6+", "Job Roles"],
                ["3", "Difficulty Levels"],
                ["AI", "Instant Feedback"],
                ["100%", "Free to Use"],
              ].map(([value, label], index) => (
                <IonCol size="6" sizeMd="3" key={index}>
                  <IonCard>
                    <IonCardContent style={{ textAlign: "center" }}>
                      <h1
                        style={{
                          color: "#2563eb",
                          fontSize: "34px",
                          fontWeight: "bold",
                        }}
                      >
                        {value}
                      </h1>

                      <p>{label}</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>

          {/* FEATURES */}
          <div style={{ padding: "30px 20px" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "38px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Everything you need to prepare
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#64748b",
                marginBottom: "40px",
              }}
            >
              Structured practice with real AI feedback.
            </p>

            <IonGrid>
              <IonRow>
                {features.map((feature, index) => (
                  <IonCol size="12" sizeMd="6" sizeLg="3" key={index}>
                    <IonCard>
                      <IonCardContent
                        style={{
                          textAlign: "center",
                          padding: "30px",
                        }}
                      >
                        <div style={{ fontSize: "45px" }}>
                          {feature.icon}
                        </div>

                        <h2>{feature.title}</h2>

                        <p>{feature.description}</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>

          {/* ROLES */}
          <div style={{ padding: "30px 20px" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "38px",
                fontWeight: "bold",
                marginBottom: "40px",
              }}
            >
              Pick your role
            </h2>

            <IonGrid>
              <IonRow>
                {roles.map((role, index) => (
                  <IonCol size="6" sizeMd="4" sizeLg="2" key={index}>
                    <IonCard button={true}>
                      <IonCardContent style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "36px" }}>💼</div>

                        <h3>{role}</h3>

                        <p>Easy → Hard</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>

          {/* STEPS */}
          <div
            style={{
              background: "#ffffff",
              padding: "60px 20px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "38px",
                fontWeight: "bold",
                marginBottom: "50px",
              }}
            >
              Three steps to interview-ready
            </h2>

            <IonGrid>
              <IonRow>
                {steps.map((step, index) => (
                  <IonCol size="12" sizeMd="4" key={index}>
                    <IonCard>
                      <IonCardContent
                        style={{
                          textAlign: "center",
                          padding: "35px",
                        }}
                      >
                        <div
                          style={{
                            width: "55px",
                            height: "55px",
                            borderRadius: "50%",
                            background: "#2563eb",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          {index + 1}
                        </div>

                        <h2>{step.title}</h2>

                        <p>{step.desc}</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>

          {/* CTA */}
          <div
            style={{
              background: "#0f172a",
              color: "white",
              textAlign: "center",
              padding: "80px 20px",
            }}
          >
            <h1
              style={{
                fontSize: "42px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Ready to start practicing?
            </h1>

            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto 30px",
                color: "#cbd5e1",
              }}
            >
              Pick your role and begin your AI-powered interview
              preparation today.
            </p>

            <IonButton size="large" color="light">
              Start Now
            </IonButton>
          </div>

          {/* FOOTER */}
          <div
            style={{
              textAlign: "center",
              padding: "25px",
              background: "white",
            }}
          >
            <h3>AI Practice Bot</h3>

            <p>Built with Ionic React ❤️</p>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}