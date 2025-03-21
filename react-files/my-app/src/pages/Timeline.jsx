import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


<KeyboardArrowDownIcon fontSize="large" /> 

const timelineData = [
  {
    title: "Student Assistant",
    company: "Darmstadt University of Applied Sciences",
    duration: "April 2024 - Present",
    description: "Programming with Python, setting up mock dashboards, and containerizing applications."
  },
  {
    title: "Werkstudent Software Development",
    company: "Abasoft EDV-Programme GmbH",
    duration: "November 2024 - Present",
    description: "Developing new features using PHP, HTML, CSS, and JavaScript while contributing to React-based bug fixes and feature implementations."
  }
];

const Timeline = () => {
  return (

    <Box    
      sx={{     
        height: "100vh",
        width: "100%",   
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{  
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          marginBottom: "80px" 
      }}>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "white", }}>
        Work Experience
      </Typography>

      <Box sx={{ position: "relative", width: "900px", backgroundColor:"black",marginTop:"40px" }}>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "3px",
            height: "50%",
            marginTop:"15px",
            backgroundColor: "#ff3b3b",
          }}
        />

        {timelineData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
              textAlign: "left" ,
              position: "relative",
              width: "100%",
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "red",
                position: "absolute",
                left: "calc(50% - 8px)",
                top: 10,
              }}
            />

            <Paper elevation={4} sx={{ p: 3, width: "420px", backgroundColor: "rgba(255,255,255,0.9)"
            ,alignSelf: index % 2 === 0 ? "flex-start" : "flex-end" }}>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.company} | {item.duration}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {item.description}
              </Typography>
            </Paper>
            
          </Box>
        ))}
      </Box>


      <div className="flex justify-center items-center space-x-4 mt-10">

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-64}
              className="text-white text-lg cursor-pointer mt-2"
            >
            <div style={{ cursor: "pointer" }}>
              <ChevronDown size={100} color="white" sx={{ cursor: "pointer" }} />
            </div>

            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </Box>
    
  );
};

export default Timeline;