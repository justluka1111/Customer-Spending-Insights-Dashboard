import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f172a", // Deep navy
      light: "#1e293b",
      dark: "#020617",
    },
    secondary: {
      main: "#1e293b", // Dark slate
      light: "#334155",
      dark: "#0f172a",
    },
    error: {
      main: "#dc2626",
    },
    success: {
      main: "#16a34a",
    },
    warning: {
      main: "#f59e0b",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    body1: {
      fontSize: "0.875rem",
    },
    body2: {
      fontSize: "0.8125rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 8,
        },
      },
    },
  },
});

export default theme;
