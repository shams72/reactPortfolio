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
    "χαιρετώ",
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
    "~(kha-ye-TO)~",
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
    }, 2000); // Change greeting every 2.5 seconds

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
        background: "black",
        backgroundImage: `url(${space})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        component={Paper}
        elevation={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
          width: "50vw",
          borderRadius: 6,
          padding: 5,
          background: "rgba(255, 255, 255, 0.06)", // subtle transparent white
          backdropFilter: "blur(8px)", // frosted glass effect
          boxShadow: "0 8px 32px 0 rgba(16, 20, 214, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          color: "white",
          textAlign: "center",
          fontFamily: "'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // cool modern font
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
            fontWeight="700"
            sx={{
              fontSize: "5rem",
              color: "white",
              textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
            }}
          >
            {greetings[currentIndex]}
          </Typography>
        </motion.div>

        {translations[currentIndex] && (
          <motion.div
            key={translations[currentIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {currentIndex > 1 && (
              <Typography
                variant="h6"
                fontStyle="italic"
                fontWeight="500"
                sx={{
                  fontSize: "1.5rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  marginTop: 2,
                }}
              >
                {translations[currentIndex - 2]}
              </Typography>
            )}
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default Greetings;
