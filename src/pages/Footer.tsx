import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Icon,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const StyledFooterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 10,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  lineHeight: 1.375,
  marginBottom: 0,
}));

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ px: 2 }}>
      <Dialog
        fullWidth
        open={isOpen}
        onClose={() => setIsOpen(false)}
        slotProps={{ backdrop: { sx: { filter: "blur(4px)" } } }}
      >
        <IconButton
          size="small"
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <DialogTitle variant="h5">Imprint</DialogTitle>
        <DialogContent>
          <StyledTypography sx={{ mt: 2, fontWeight: 500 }}>
            Diensteanbieter im Sinne des § 5 TMG:
          </StyledTypography>
          <StyledTypography>Omer Eilam Musiker</StyledTypography>
          <StyledTypography>Bozener 24</StyledTypography>
          <StyledTypography>14612 Falkensee</StyledTypography>
          <StyledTypography>Germany</StyledTypography>
          <StyledTypography sx={{ mt: 2, fontWeight: 500 }}>
            Kontaktinformationen:
          </StyledTypography>
          <StyledTypography>E-mail: omereilam1@gmail.com</StyledTypography>
          <StyledTypography sx={{ mt: 2, fontWeight: 500 }}>
            Bevollmächtigte Vertreter:
          </StyledTypography>
          <StyledTypography>Omer Eilam</StyledTypography>
          <StyledTypography>Eingetragener Sitz: Germany</StyledTypography>
          <StyledTypography>Registergericht: Finanzamt Nauen</StyledTypography>
          <StyledTypography>
            Handelsregisternummer: 051/216/01062
          </StyledTypography>
        </DialogContent>
      </Dialog>
      <Divider sx={{ width: "100%" }} />
      <StyledFooterBox>
        <Typography
          sx={{ textAlign: "center", fontSize: 13, cursor: "pointer", mb: 0 }}
          onClick={() => setIsOpen(true)}
        >
          Imprint
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: 13, mb: 0 }}>
          ©{dayjs().format("YYYY")} Omer Eilam
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: 13, mb: 0 }}>
          created by Vassilios Ekoutsidis
        </Typography>
      </StyledFooterBox>
    </Box>
  );
};
