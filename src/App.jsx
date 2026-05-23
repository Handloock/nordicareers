import { Routes, Route, Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <nav style={styles.nav}>
        <div style={styles.logo}>Nordic Careers</div>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>
      </nav>

      {children}

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Nordic Careers
      </footer>
    </div>
  );
}

/* HOME */
function Home() {
  return (
    <div>
      <header style={styles.hero}>
        <div style={styles.overlay}>
          <h1>Work as a Chef in Sweden</h1>
          <p>
            We connect skilled chefs with restaurants across Sweden and the Nordic region.
            Accommodation support and relocation assistance available.
          </p>
          <button style={styles.button}>Apply Now</button>
        </div>
      </header>

      <section style={styles.section}>
        <h2>Why Nordic Careers?</h2>
        <p>
          We help hospitality professionals move abroad and build careers in high-quality Nordic kitchens.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>Job Matching</div>
          <div style={styles.card}>Relocation Support</div>
          <div style={styles.card}>Accommodation Help</div>
        </div>
      </section>
    </div>
  );
}

/* ABOUT */
function About() {
  return (
    <div style={styles.page}>
      <h1>About Us</h1>
      <p>
        Nordic Careers is a recruitment platform focused on connecting international chefs
        with employers in Sweden and across the Nordic countries.
      </p>
      <p>
        Our goal is to simplify relocation and help skilled professionals find better opportunities abroad.
      </p>
    </div>
  );
}

/* CONTACT */
function Contact() {
  return (
    <div style={styles.page}>
      <h1>Contact</h1>
      <p>Email: info@nordicareers.com</p>
      <p>We typically respond within 24–48 hours.</p>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

/* SIMPLE STYLES (mobile friendly, clean) */
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 25px",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    background: "white",
    zIndex: 10
  },
  logo: { fontWeight: "bold" },
  links: { display: "flex", gap: "15px" },
  link: { textDecoration: "none", color: "#333" },

  hero: {
    height: "70vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1555992336-03a23c3c9f6d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    color: "white"
  },
  overlay: {
    background: "rgba(0,0,0,0.55)",
    padding: "40px",
    width: "100%"
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer"
  },

  section: { padding: "40px 25px" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginTop: "20px"
  },

  card: {
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: "8px",
    textAlign: "center"
  },

  page: { padding: "40px 25px" },

  footer: {
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #eee",
    marginTop: "40px"
  }
};