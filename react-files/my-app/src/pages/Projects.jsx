import { Box, Typography, Link, Paper } from "@mui/material";

const projects = [
  {
    title: "SerpentBot",
    link: "https://shams72.github.io/SerpentBot/",
    description:
    "The SerpentBot is a snake game that utilizes a Breadth-First Search (BFS) algorithm enhanced with the Manhattan distance heuristic to efficiently locate the nearest prey without crossing its own body. If no valid moves remain, it halts to avoid collision. The game features both auto mode, where BFS and heuristics are used, and manual mode, where the snake can be controlled using the arrow keys."
  },
  {
    title: "Yapple Social Media",
    link: "https://github.com/shams72/Yapple-Social",
    description:
      "Yapple is a social media website developed as part of a collaborative project for an advanced web module course. My contributions included implementing bell notifications on the frontend, fixing frontend bugs, and writing API calls for backend functionalities, particularly for setting up communities and posts as well as writing the tests for the endpoints.",
  },  
  {
    title: "ShopEsy",
    link: "https://github.com/shams72/ShopEsy",
    description:
      "ShopEasy is a simple CRUD application developed as part of a web development course to learn React. The backend was implemented using RESTful API with Express and tested with Jest and Supertest. Built with React and TypeScript, it allows users to add articles to a shopping list and perform CRUD operations on both articles and the list.",
  },

  {
    title: "Skyrim Website",
    link: "https://github.com/shams72/Skyrim",
    description:
      "This was a collaborative project for a DevOps course, designed using DevOps principles for a hypothetical customer. I was responsible for writing RESTful APIs and their corresponding tests, ensuring they aligned with user stories to meet customer expectations.",
  },
  {
    title: "FunTaskTic (To-Do App)",
    link: "https://github.com/shams72/FunTaskTic",
    description:
      "Collaborated on a user-centric To-Do app using Android Studio and Java for a Human-Computer Interaction university module. Features include sorting tasks based on preferences and a built-in calendar for setting deadlines.",
  },
    {
    title: "Portfolio Website",
    link: "https://github.com/shams72/reactPortfolio",
    description:
      "A simple portfolio website built with React that highlights my experience, shares information about me, and provides an easy way to get in touch. Feel free to explore my projects by clicking on their titles.",
  },


];

const Projects = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "85%",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", color: "white", marginTop: "35px" }}
          gutterBottom
        >
          Projects
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)" // Two boxes per row
          gap={3}
          justifyContent="center"
          sx={{
            minWidth: "30px",
            maxWidth: "550rem",
            minHeight: "50%",
            maxHeight: "50%",
            marginTop: "30px",
          }}
        >
          {projects.map((project, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                p: 3,
                minWidth: 400,
                maxWidth: 700,
                minHeight: 128,
                maxHeight: 450,
                overflowY: "auto",
                backgroundColor: "rgba(255,255,255,0.9)",

                // New styling for border and font
                border: "2px solid #ccc",
                borderRadius: 2,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",

                "&::-webkit-scrollbar": {
                  width: 0,
                  height: 0,
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
                scrollbarWidth: "none",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
              >
                <Link href={project.link} target="_blank" underline="hover">
                  {project.title}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                mt={1}
                sx={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
              >
                {project.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
