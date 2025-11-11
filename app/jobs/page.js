"use client";

import Link from "next/link";
import { useGetJobsQuery } from "../../store/jobsApi";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";

export default function JobsPage() {
  const { data, error, isLoading } = useGetJobsQuery();

  if (isLoading)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f4f8",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );

  if (error)
    return (
      <Box
        sx={{
          padding: 4,
          textAlign: "center",
          backgroundColor: "#f0f4f8",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Error loading jobs.
        </Typography>
      </Box>
    );

  // ✅ Limit to 26 jobs
  const jobs = (data?.jobs || []).slice(0, 26);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ✅ Background image (fixed) */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          backgroundImage: "url('/job.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.8,
        }}
      />

      {/* ✅ Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3))",
          zIndex: 0,
        }}
      />

      {/* ✅ Foreground content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          py: 6,
        }}
        maxWidth="lg"
      >
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#0a0a0aff",
              mb: 1,
              textShadow: "0px 2px 4px rgba(0,0,0,0.4)",
            }}
          >
            Available Jobs
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#06802aff",
              textShadow: "0px 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Explore the latest job opportunities from around the world.
          </Typography>
        </Box>

        {/* ✅ Job Cards Grid */}
        <Grid container spacing={4}>
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Link
                href={`/jobs/${job.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  sx={{
                    height: 280, // ✅ Fixed card height (same for all)
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    transition:
                      "transform 0.25s, box-shadow 0.25s, background-color 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                      backgroundColor: "#e8f5e9",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#333",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          mb: 1,
                        }}
                      >
                        {job.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: "#666", mb: 0.5 }}
                        noWrap
                      >
                        <strong>Company:</strong> {job.company_name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: "#666", mb: 1 }}
                      >
                        <strong>Location:</strong>{" "}
                        {job.candidate_required_location || "Remote"}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#388e3c",
                        mt: "auto",
                        textAlign: "right",
                        fontWeight: 500,
                      }}
                    >
                      View details →
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
