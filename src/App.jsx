import { Routes, Route, Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div style={styles.app}>
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
          <h1 style={styles.h1}>
            Work as a Chef in Sweden
          </h1>

          <p style={styles.subtitle}>
            We connect experienced chefs with top restaurants across Sweden.
            Full relocation support, accommodation assistance, and fast hiring process.
          </p>

          <Link to="/contact">
            <button style={styles.cta}>Apply Now</button>
          </Link>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Why Sweden?</h2>
        <p style={styles.text}>
          High demand for skilled chefs, competitive salaries, and strong work-life balance.
          We help you relocate and start working quickly.
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>Fast Job Placement</div>
          <div style={styles.card}>Accommodation Help</div>
          <div style={styles.card}>Relocation Support</div>
        </div>
      </section>

      <section style={styles.highlight}>
        <h2>We are hiring now</h2>
        <p>
          Restaurants in Sweden are actively looking for experienced kitchen staff.
          Apply today and get matched with employers.
        </p>
      </section>
    </div>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <div style={styles.page}>
      <h1>About Nordic Careers</h1>

      <p style={styles.text}>
        Nordic Careers is a recruitment platform focused on connecting chefs
        and hospitality professionals with employers across Sweden and Scandinavia.
      </p>

      <p style={styles.text}>
        We handle job matching, relocation guidance, and employer communication
        so candidates can focus on their career move.
      </p>
    </div>
  );
}

/* ================= APPLY ================= */
function Contact() {
  return (
    <div style={styles.page}>
      <h1>Apply as a Chef</h1>

      <p style={styles.text}>
        Send your application and we will match you with employers in Sweden.
      </p>

      <a
        href="mailto:yourfriend@email.com?subject=Chef%20Application%20-%20Nordic%20Careers"
        style={styles.emailButton}
      >
        Send Application Email
      </a>

      <p style={{ marginTop: "15px", fontSize: "14px", opacity: 0.7 }}>
        Include CV, experience, location, and availability.
      </p>
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
    color: "#111"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 24px",
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

  hero: {
    height: "75vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1556910103-1c02745aae4d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    color: "white"
  },

  heroOverlay: {
    background: "rgba(0,0,0,0.55)",
    padding: "50px",
    width: "100%"
  },

  h1: {
    fontSize: "42px",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    lineHeight: "1.5"
  },

  cta: {
    marginTop: "20px",
    padding: "12px 22px",
    background: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  },

  section: {
    padding: "50px 24px"
  },

  text: {
    maxWidth: "700px",
    lineHeight: "1.6"
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    marginTop: "20px"
  },

  card: {
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: "10px",
    textAlign: "center"
  },

  highlight: {
    padding: "50px 24px",
    background: "#f7f7f7",
    textAlign: "center"
  },

  page: {
    padding: "50px 24px"
  },

  emailButton: {
    display: "inline-block",
    marginTop: "15px",
    padding: "14px 20px",
    background: "#111",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px"
  },

  footer: {
    textAlign: "center",
    padding: "25px",
    borderTop: "1px solid #eee",
    marginTop: "50px",
    fontSize: "14px",
    opacity: 0.7
  }
};