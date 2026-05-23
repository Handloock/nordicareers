import { Routes, Route, Link } from "react-router-dom";

/* ================= LAYOUT ================= */
function Layout({ children }) {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <header style={styles.nav}>
        <div style={styles.logo}>Nordic Careers</div>

        <nav style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Apply</Link>
        </nav>
      </header>

      {children}

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Nordic Careers · Chef Recruitment Sweden
      </footer>
    </div>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.h1}>Work as a Chef in Sweden</h1>

            <p style={styles.subtitle}>
              We connect skilled chefs with restaurants across Sweden and the Nordic region.
              Fast placement, relocation support, and accommodation assistance.
            </p>

            <Link to="/contact" style={styles.cta}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <section style={styles.sectionFull}>
        <h2>Why Sweden?</h2>
        <br></br>
        <p style={styles.text}>
          High demand for chefs, strong salaries, and excellent work-life balance.
          We help you relocate and start working quickly with trusted employers.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>Fast Job Placement</div>
          <div style={styles.card}>Accommodation Help</div>
          <div style={styles.card}>Relocation Support</div>
        </div>
      </section>

      <section style={styles.highlight}>
        <h2>Hiring is open now</h2>
        <br></br>
        <p>
          Restaurants across Sweden are actively recruiting international chefs.
        </p>

        <Link to="/contact" style={styles.secondaryButton}>
          Start Application
        </Link>
      </section>
    </div>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <div style={styles.pageFull}>
      <h1>About Nordic Careers</h1>
      <br></br>
      <p style={styles.text}>
        Nordic Careers is a recruitment platform focused on connecting chefs
        and hospitality professionals with employers across Sweden and Scandinavia.
      </p>

      <p style={styles.text}>
        We handle job matching, relocation guidance, and employer communication
        to simplify your move abroad.
      </p>
    </div>
  );
}

/* ================= APPLY ================= */
function Contact() {
  return (
    <div style={styles.applyPage}>
      <div style={styles.applyCard}>
        <h1>Apply as a Chef</h1>

        <p style={styles.text}>
          Send your application and we will match you with employers in Sweden.
        </p>

        <a
          href="mailto:ivan.klokov.job@gmail.com?subject=Chef%20Application%20-%20Nordic%20Careers"
          style={styles.emailButton}
        >
          Send Application Email
        </a>

        <p style={styles.smallText}>
          Please include: CV, experience, location, and availability.
        </p>
      </div>
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  );
}

/* ================= STYLES ================= */
const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    color: "#111",
    width: "100%",
    overflowX: "hidden"
  },

  /* NAV */
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 28px",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    background: "white",
    zIndex: 10
  },

  logo: {
    fontWeight: "bold",
    letterSpacing: "0.5px"
  },

  navLinks: {
    display: "flex",
    gap: "18px"
  },

  link: {
    textDecoration: "none",
    color: "#333"
  },

  /* HERO FULL WIDTH */
  hero: {
    height: "90vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    color: "white"
  },

  heroOverlay: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    alignItems: "center"
  },

  heroContent: {
  padding: "80px 40px",
  maxWidth: "720px",
  marginLeft: "6%",
  },

  h1: {
    fontSize: "48px",
    marginBottom: "12px",
    color: "white"
  },

  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    lineHeight: "1.6",
    color: "white"
  },
  /* BUTTONS */
  cta: {
  display: "inline-block",
  marginTop: "25px",
  padding: "14px 28px",
  background: "#ffffff",
  color: "#111",
  fontWeight: "600",
  borderRadius: "8px",
  textDecoration: "none",
  transition: "0.2s"
  },

  secondaryButton: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 18px",
    background: "#111",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px"
  },

  emailButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "14px 22px",
    background: "#111",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px"
  },

  /* SECTIONS FULL WIDTH */
  sectionFull: {
  padding: "90px 24px",
  maxWidth: "1100px",
  margin: "0 auto"
  },

  text: {
    maxWidth: "700px",
    lineHeight: "1.7"
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "25px"
  },

  card: {
    padding: "22px",
    border: "1px solid #eee",
    borderRadius: "10px",
    textAlign: "center"
  },

  highlight: {
    padding: "70px 30px",
    background: "#f5f5f5",
    textAlign: "center"
  },

  /* APPLY PAGE */
  applyPage: {
    width: "100%",
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px"
  },

  applyCard: {
    maxWidth: "600px",
    width: "100%",
    padding: "40px",
    border: "1px solid #eee",
    borderRadius: "12px",
    textAlign: "center"
  },

  smallText: {
    marginTop: "15px",
    fontSize: "13px",
    opacity: 0.7
  },

  pageFull: {
    padding: "70px 30px",
    maxWidth: "1100px",
    margin: "0 auto"
  },

  footer: {
    textAlign: "center",
    padding: "30px",
    borderTop: "1px solid #eee",
    fontSize: "14px",
    opacity: 0.7
  }
};