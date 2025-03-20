import React from "react";
import { Typography, Paper, Box, Avatar } from "@mui/material";
import paint from "../assets/l.jpg"; // Your background image
import pic from "../assets/pic2.jpg"

const AboutMe = () => {
  return (
 
    <Box
      component={Paper}
      elevation={6}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap:"20px",
        justifyContent: "flex-start",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    > 
  
      <Box
        component={Paper}
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // Align text to the left
          justifyContent: "center",
          maxHeight: "70%",
          width: "55vw", // Adjust width for left content
          borderRadius: 4,
          marginLeft:"5vw",
          padding: 4,
          background: "rgba(245, 245, 245, 0.9)", // Slightly transparent background
          color: "black", // Set text color to black for contrast
          textAlign: "left",
        }}
      >
      <Typography variant="h5" fontWeight="bold" mt={3} sx={{ fontSize: '1.4rem', lineHeight: 1.8 }}>
        Hello there,
      </Typography>

      <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
        My name is Shams, and I am currently a Computer Science bachelor's student at Darmstadt University of Applied Sciences, in my fifth semester. Alongside my studies, I work as a Werkstudent in software development and as a student assistant at my university, where I work with Python and Docker containers. 
      </Typography>

      <Typography variant="h5" fontWeight="bold" mt={3} sx={{ fontSize: '1.4rem', lineHeight: 1.8 }}>
        I happen to understand:
      </Typography>


        <Box component="ul" sx={{ paddingLeft: 3 }}>
          {[
            "Qt (UI Development)",
            "Java",
            "React with TypeScript/JavaScript (Beginner)",
            "SQL",
            "PHP, HTML, CSS",
            "Python",
            "Docker",
          ].map((skill, index) => (
            <Typography component="li" key={index} variant="body1">
              {skill}
            </Typography>
          ))}
        </Box>

        <Typography variant="body1" mt={3} sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
          If my profile interests you, feel free to reach out!
        </Typography>
      </Box>

      {/* Right side: Avatar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30vw", // Adjust the size of the avatar container
          height: "60vh", // Match the height of the left box
          paddingLeft: 2,
        }}
      >
        <Avatar
          alt="My Avatar"
          src={pic}
          sx={{ width: 250, height: 250, borderRadius: "50%" }}
        />
      </Box>
    </Box>
   
  );
};

export default AboutMe;
