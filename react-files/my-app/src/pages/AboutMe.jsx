import { Typography, Paper, Box, Avatar } from "@mui/material";
import pic from "../assets/pic2.jpg";

const AboutMe = () => {
  return (
    <Box
      component={Paper}
      elevation={6}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Responsive stacking on small screens
        alignItems: "center",
        gap: "20px",
        justifyContent: "flex-start",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflowY: "auto",
        p: { xs: 2, md: 0 },
      }}
    >
      <Box
        component={Paper}
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "auto",
          width: { xs: "90%", md: "55%" },
          borderRadius: 4,
          marginLeft: { xs: 0, md: "5vw" },
          padding: 4,
          background: "rgba(151, 144, 144, 0.28)", // Frosted glass effect
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 32px 0 rgba(26, 197, 189, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          color: "white",
          textAlign: "left",
          overflowY: "auto",
          fontFamily: "'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          "&::-webkit-scrollbar": {
            width: 0,
          },
          scrollbarWidth: "none",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mt={3}
          sx={{ fontSize: "1.4rem", lineHeight: 1.8, color: "white" }}
        >
          Hello there,
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.2rem", lineHeight: 1.8, color: "white" }}
        >
          My name is Shams, and I am currently a Computer Science Bachelor's student
          at Darmstadt University of Applied Sciences, in my sixth semester. Alongside
          my studies, I work as a Werkstudent in software development and as a student
          assistant at my university, where I work with Python and Docker containers.
        </Typography>



        <Typography
          variant="h5"
          fontWeight="bold"
          mt={3}
          sx={{ fontSize: "1.4rem", lineHeight: 1.8, color: "white" }}
        >
          I’m familiar with:
        </Typography>

        <Box component="ul" sx={{ paddingLeft: 3, color: "white" }}>
          {[
            "Qt (UI Development)",
            "React with TypeScript/JavaScript (Beginner)",
            "SQL",
            "PHP, HTML, CSS",
            "Python",
            "Docker",
            "Java",
          ].map((skill, index) => (
            <Typography
              component="li"
              key={index}
              variant="body1"
              sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}
            >
              {skill}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "30vw" },
          height: { xs: 300, md: "60vh" },
          paddingLeft: { xs: 0, md: 2 },
          marginTop: { xs: 4, md: 0 },
        }}
      >
        <Avatar
          alt="My Avatar"
          src={pic}
          sx={{
            width: { xs: 200, md: 250 },
            height: { xs: 200, md: 250 },
            borderRadius: "50%",
            boxShadow: "0 0 15px 4px rgba(255, 255, 255, 0.3)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 0 25px 6px rgba(255, 255, 255, 0.6)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutMe;
