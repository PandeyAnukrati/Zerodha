import React from "react";

const appsData = [
  {
    name: "Kite",
    description: "Trading and investing platform.",
    link: "https://kite.zerodha.com",
  },
  {
    name: "Console",
    description: "Backoffice reporting dashboard.",
    link: "https://console.zerodha.com",
  },
  {
    name: "Coin",
    description: "Mutual fund investment platform.",
    link: "https://coin.zerodha.com",
  },
  {
    name: "Varsity",
    description: "Free and open stock market education.",
    link: "https://zerodha.com/varsity",
  },
  {
    name: "Sensibull",
    description: "Options trading simplified.",
    link: "https://sensibull.com",
  },
  {
    name: "Streak",
    description: "Algorithmic trading without coding.",
    link: "https://streak.zerodha.com",
  },
];

const styles = {
  page: {
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#fafafa",
    transition: "all 0.2s ease",
  },
  cardHover: {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontSize: "20px",
    margin: "0 0 10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#0077cc",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

const AppCard = ({ app }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 style={styles.cardTitle}>{app.name}</h3>
      <p style={styles.description}>{app.description}</p>
      <a href={app.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
        Visit
      </a>
    </div>
  );
};

const Apps = () => {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Apps</h2>
      <div style={styles.list}>
        {appsData.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
