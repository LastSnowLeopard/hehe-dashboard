import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

interface PersonalLinkProps {
  link?: string;
}

const CardCustom = styled(Card)(() => ({
  borderRadius: 12,
  backgroundColor: "#1A1D1F",
  padding: "12px 24px",
  backgroundImage: "none",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignContent: "space-between",
}));

const CardTitle = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  color: "#6F767E",
  margin: 0,
  padding: 0,
  alignSelf: "center",
}));

const InviteLink = styled(Link)(() => ({
  fontFamily: "BalooSemiBold",
  textDecoration: "none",
  color: "#FDE048",
  fontSize: 20,
  alignSelf: "center"
}));

const InviteBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignSelf: "center",
  padding: "16px 12px",
  borderRadius: 8,
  backgroundColor: "#272B30",
  marginTop: "16px",
}));

const PersonalLink: React.FC<PersonalLinkProps> = ({ link }) => {
  return (
    <CardCustom>
      <Box>
        <CardTitle>Personal link</CardTitle>
      </Box>
      <Box width={"100%"} height={"100%"} display={"flex"}>
        <InviteBox>
          <InviteLink href={link}>{link}</InviteLink>
          <Button
            variant="contained"
            sx={{
              borderRadius: "8px",
              padding: "8px 16px 5px",
              fontFamily: "Baloo",
              textTransform: "none"
            }}
          >
            Copy
          </Button>
        </InviteBox>
      </Box>
    </CardCustom>
  );
};

export default PersonalLink;
