import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        px: 3,
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#0f172a",
        }}
      >
        Customer Dashboard
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton
          sx={{
            color: "#475569",
            transition: "0.2s ease",
            "&:hover": {
              backgroundColor: "#f1f5f9",
            },
          }}
        >
          <NotificationsNoneIcon />
        </IconButton>

        <IconButton
          onClick={() => navigate("/dashboard")}
          sx={{
            color: "#475569",
            transition: "0.2s ease",
            "&:hover": {
              backgroundColor: "#f1f5f9",
            },
          }}
        >
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;