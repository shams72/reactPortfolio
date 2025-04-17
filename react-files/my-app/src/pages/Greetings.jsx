import React, { useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion"; // For smooth animations
import space from "../assets/space.jpg"

const Greetings = () => {
  const greetings = [
    "Hej!!",
    "Bonjour!",
    "ٱلسَّلَامُ عَلَيْكُمْ",
    "স্বাগতম",
    "வணக்கம்",
    "Chào bạn!",
    "Привет",
    "こんにちは",
    "സ്വാഗതം",
    "आदाब",
    "你好",
    "Wilkommen!",
    "Hello!!"
  ];

  const translations = [
    "~(As-salāmu ʿalaykum)~",
    "~(Shagotom)~",
    "~(Vaṇakkam)~",
    "~(Chow ban)~",
    "~(Privyet)~",
    "~(Konnichiwa)~",
    "~(Swagatham)~",
    "~(Aadaab)~",
    "~(Nǐ hǎo)~",
    "~(Wilkommen)~",
    "~(Hello)~"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2500); // Change greeting every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component={Paper}
      elevation={6}
      sx={{
      
        height: "100vh",
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:"black",
        backgroundImage: "url('"+ space + "')", // Replace with your image URL
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
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
          width:"50vw",
          borderRadius: 4,
          padding: 4,
          background: "rgba(230, 229, 220, 0.72)" ,// 0.7 makes it slightly transparent,
          color: "white",
          textAlign: "center",
        }}
      >
        
        <motion.div
          key={greetings[currentIndex]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
        <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: "6rem",
              color: "black",  
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)", 
            }}
          >
            {greetings[currentIndex]}
          </Typography>

        </motion.div>

        {/* Translation Animation */}
        {translations[currentIndex] && (
          <motion.div
            key={translations[currentIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            { currentIndex > 1 &&
            <Typography
              variant="h6"
              fontStyle="italic"
              fontWeight="bold"
              sx={{
                fontSize: "1.5rem",
                color: "#555555"   
              }}

            >
              {translations[currentIndex-2]}
            </Typography>
            }
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default Greetings;
