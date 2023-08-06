import React, { useRef, useEffect, useState } from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";
import DeveloperImage from "./developer-image.png";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Rating from "@mui/material/Rating"; // Import Rating component

import "./App.css"; // Import custom CSS for terminal styling

function App() {
  const sections = useRef([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  // Scroll to a specific section
  const scrollToSection = (index) => {
    if (sections.current[index]) {
      sections.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    sections.current = document.querySelectorAll(".terminal-section");
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log({ name, email, note });
    // Clear the form fields after submission
    setName("");
    setEmail("");
    setNote("");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <header className="terminal-header">
        <img src={DeveloperImage} alt="Developer" className="terminal-image" />
        <div className="terminal-info">
          <Typography variant="h6" className="terminal-name">
            John Doe
          </Typography>
          <Typography variant="body1" className="terminal-designation">
            Software Engineer
          </Typography>
          <Box className="terminal-social-links">
            <Box className="terminal-social-link">
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Box>
            <Box className="terminal-social-link">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </Box>
            <Box className="terminal-social-link">
              <a
                href="https://instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </Box>
            {/* Add more social media icons here */}
          </Box>
        </div>
      </header>
      <Container maxWidth="lg" className="terminal-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} className="terminal-section">
              <Typography variant="h6">Sections</Typography>
              <List component="nav">
                <ListItem button onClick={() => scrollToSection(0)}>
                  <ListItemText primary="About Me" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection(1)}>
                  <ListItemText primary="Education" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection(2)}>
                  <ListItemText primary="Current Position" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection(3)}>
                  <ListItemText primary="Technical Skills" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection(4)}>
                  <ListItemText primary="Projects Undertaken" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection(5)}>
                  <ListItemText primary="Hobbies" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection(6)}>
                  <ListItemText primary="Contact Details" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection(7)}>
                  <ListItemText primary="Contact me" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper
              elevation={3}
              className="terminal-section"
              ref={(el) => (sections.current[0] = el)}
            >
              <Typography className="section-header"  variant="h6">About Me</Typography>
              <Typography variant="body1">
                Hello, I am a passionate software engineer with a strong focus
                on building scalable and efficient web applications. I have a
                solid background in software development and am always eager to
                learn new technologies. My goal is to create innovative and
                user-friendly solutions to real-world problems.
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              className="terminal-section"
              ref={(el) => (sections.current[1] = el)}
            >
              <Typography className="section-header"  variant="h6">Education</Typography>
              <ul className="terminal-list">
                <li>
                  <SchoolIcon /> Degree Name - University Name - Year of Passing
                </li>
                {/* Add more education details here if needed */}
              </ul>
            </Paper>
            <Paper
              elevation={3}
              className="terminal-section"
              ref={(el) => (sections.current[2] = el)}
            >
              <Typography className="section-header"  variant="h6">Current Position</Typography>
              <Typography variant="body1">
                Software Engineer at XYZ Company
              </Typography>
            </Paper>
            <Paper
              elevation={3}
              className="terminal-section"
              ref={(el) => (sections.current[3] = el)}
            >
              <Typography className="section-header"  variant="h6">Technical Skills</Typography>
              <div className="terminal-skills">
                <div className="skill-name">Language 1</div>
                <Rating
                  className="terminal-skill-rating"
                  name="Language 1 Rating"
                  value={3} // Replace with the actual skill level (1 to 5)
                  readOnly
                />
                <div className="skill-name">Language 2</div>
                <Rating
                  className="terminal-skill-rating"
                  name="Language 2 Rating"
                  value={4} // Replace with the actual skill level (1 to 5)
                  readOnly
                />
                <div className="skill-name">Framework 1</div>
                <Rating
                  className="terminal-skill-rating"
                  name="Framework 1 Rating"
                  value={5} // Replace with the actual skill level (1 to 5)
                  readOnly
                />
                {/* Add more skills and skill levels here */}
              </div>
            </Paper>
            <Paper
              elevation={3}
              className="terminal-section"
              ref={(el) => (sections.current[4] = el)}
            >
              <Typography className="section-header"  variant="h6">Projects Undertaken</Typography>
              <ul className="terminal-list">
                <li>
                  <WorkIcon /> Project 1 - Description of Project 1
                </li>
                <li>
                  <WorkIcon /> Project 2 - Description of Project 2
                </li>
                {/* Add more project details here if needed */}
              </ul>
            </Paper>
            <Paper
              elevation={3}
              className="terminal-section"
              ref={(el) => (sections.current[5] = el)}
            >
              <Typography className="section-header"  variant="h6">Hobbies</Typography>
              <ul className="terminal-list">
                <li>
                  <SportsEsportsIcon /> Gaming
                </li>
                <li>
                  <CodeIcon /> Coding
                </li>
                {/* Add more hobbies here if needed */}
              </ul>
            </Paper>
            <Paper
              elevation={3}
              className="terminal-section"
              ref={(el) => (sections.current[6] = el)}
            >
              <Typography  className="section-header" variant="h6">Contact Details</Typography>
              <Typography variant="body1">
                <EmailIcon /> your-email@example.com
              </Typography>
              <Typography variant="body1">
                <PhoneIcon /> +1 123-456-7890
              </Typography>
            </Paper>
            <Paper elevation={3} className="terminal-section">
              <Typography  className="section-header" variant="h6">Contact me</Typography>
              <form onSubmit={handleFormSubmit}>
                <div className="terminal-submit-form">
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <TextField
                    label="Note"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    required
                  />
                  <Button
                    className="contact-form-submit-btn"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <footer className="terminal-footer">
        © {new Date().getFullYear()} Your Name
      </footer>
      <div className="scroll-buttons">
        <IconButton
          className="scroll-button-up"
          color="primary"
          onClick={() => {
            for (let i = sections.current.length - 1; i >= 0; i--) {
              if (sections.current[i].getBoundingClientRect().top < 0) {
                scrollToSection(i);
                break;
              }
            }
          }}
        >
          <ArrowUpwardIcon color="info" />
        </IconButton>
        <IconButton
          className="scroll-button-down"
          color="primary"
          onClick={() => {
            for (let i = 0; i < sections.current.length; i++) {
              if (sections.current[i].getBoundingClientRect().top > 0) {
                scrollToSection(i);
                break;
              }
            }
          }}
        >
          <ArrowDownwardIcon />
        </IconButton>
      </div>
    </React.Fragment>
  );
}

export default App;
