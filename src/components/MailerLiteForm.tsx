import { styled } from "@mui/material";
import { useEffect } from "react";

const StyledMailerLiteContainer = styled("div")(({ theme }) => ({
  "& .ml-form-align-center": {
    textAlign: "left !important",
  },
  "& .ml-form-embedWrapper": {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
}));

// Extend the Window interface to include the ml function
declare global {
  interface Window {
    ml?: {
      q?: any[];
      (...args: any[]): void;
    };
  }
}

export const MailerLiteForm: React.FC = () => {
  useEffect(() => {
    if (window.ml) return; // Prevent duplicate loading

    const script = document.createElement("script");
    script.text = `
      (function (w, d, e, u, f, l, n) {
        w[f] = w[f] || function () {
          (w[f].q = w[f].q || []).push(arguments);
        };
        l = d.createElement(e);
        l.async = 1;
        l.src = u;
        n = d.getElementsByTagName(e)[0];
        n.parentNode.insertBefore(l, n);
      })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
      
      ml('account', '1769446');
    `;

    document.head.appendChild(script);
  }, []);

  return (
    <StyledMailerLiteContainer>
      <div className="ml-embedded" data-form="K2Ct9Z"></div>
    </StyledMailerLiteContainer>
  );
};
