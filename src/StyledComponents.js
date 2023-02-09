import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const PrimaryButton = styled(Button)(() => ({
    backgroundColor: "#7d0529",
    fontFamily: 'Quicksand', 
    color: "white",
    textTransform: "none",
    borderRadius: "20px",
    '&:hover': {
        backgroundColor: '#480318',
  }}));

export const Text = styled(Typography)(() => ({
    fontFamily: "Quicksand",
    fontWeight: "500",
    margin: "20px",
    color: "#b99b4c",
    textShadow: "4px 4px 4px black"
}))