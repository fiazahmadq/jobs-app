"use client";

import Link from "next/link";
import { Box, Typography, Button, Container, Paper } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={2}
          sx={{
            padding: 5,
            textAlign: "center",
            borderRadius: 4,
            backgroundColor: "#e6f4ea",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 700, color: "#0d47a1" }}
          >
            Jobs App
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#555", lineHeight: 1.6 }}>
            Discover the latest remote jobs and find your next career opportunity.
          </Typography>
          <Link href="/jobs" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                paddingX: 4,
                paddingY: 1.5,
                borderRadius: 2,
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              View Jobs
            </Button>
          </Link>
        </Paper>
      </Container>
    </Box>
  );
}
