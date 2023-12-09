import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Person, Twitter, Instagram } from "@material-ui/icons";
import Footer from "./Footer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        PrepTalk
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to PrepTalk
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Master Your Next Interview with Confidence! Overcome Interview
              Anxiety. Exude Confidence. Land Your Dream Job.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Be Prepared, Be Confident, Be Yourself.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              InterviewAce is your personal interview coach, designed to help
              you conquer interview nerves and showcase your best self. Whether
              you're a fresh graduate, a professional seeking a career leap, or
              anyone in between, InterviewAce tailors your preparation to your
              unique needs.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              About Us
            </Typography>
            <Link to="/pricing">
              <Button variant="contained" color="primary">
                About Us
              </Button>
            </Link>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Features That Set You Up for Success:
            </Typography>
            <List dense={true}>
              <ListItem>
                <ListItemText
                  primary="Extensive Question Library: "
                  secondary={
                    "Dive into a vast pool of common and challenging interview questions across various industries."
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="AI-Powered Feedback: "
                  secondary={
                    "Get real-time analysis on your speech clarity, body language, and overall performance."
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Customizable Mock Interviews: "
                  secondary={
                    "Tailor your practice sessions with adjustable difficulty levels and specific job roles."
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Progress Tracking: "
                  secondary={
                    "Witness your growth with our intuitive progress tracker and set personalized goals."
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Community Support: "
                  secondary={
                    "Join a community of aspirants like you, share experiences, and learn together."
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Expert Tips & Resources: "
                  secondary={
                    "Access a wealth of resources including interview tips, body language guides, and success stories."
                  }
                />
              </ListItem>
            </List>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Why Choose PrepTalk?
            </Typography>
            <ListItem>
              <ListItemText
                primary="Reduce Anxiety:"
                secondary={
                  "Our unique AI analysis helps identify and mitigate factors that contribute to interview nervousness."
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Personalized Experience:"
                secondary={
                  "Enjoy a tailored approach to interview preparation that recognizes and adapts to your individual strengths and areas for improvement."
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Practice Anytime, Anywhere:"
                secondary={
                  "With InterviewAce, turn any place into your practice ground. Convenient, flexible, and always ready when you are."
                }
              />
            </ListItem>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Ready to Ace Your Next Interview?
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              <Button color="primary" variant="outlined">
                Get Access now
              </Button>
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Connect With Us:
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Stay updated with the latest tips and updates from InterviewAce.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Follow us on:
            </Typography>
            <ListItem>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemText primary="X (Formerly Twitter)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Testimonials:
            </Typography>
            <ListItem>
              <ListItemText
                primary="InterviewAce was a game-changer for me. I went from dreading interviews to feeling excited and prepared. Highly recommend!"
                secondary={"Adam Smith"}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="With this app, I noticed a significant improvement in my confidence level. The AI feedback is incredibly insightful."
                secondary={"Angelina Smith"}
              />
            </ListItem>
          </Container>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
}
