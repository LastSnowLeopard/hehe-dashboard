import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const RootTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "BalooSemiBold",
  fontSize: 48,
  [theme.breakpoints.down("sm")]:{
    fontSize: 32
  }
}));

const IDChip = styled(Chip)(() => ({
  alignSelf: "center",
  color: "#FDE048",
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  fontSize: 15,
  backgroundColor: "#FCF5B140",
  borderRadius: "4px",
}));

interface PageHeaderProps {
  title: string,
  id: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, id }) => {
  return (
    <Box display={"flex"} gap={1}>
      <RootTypography>{title}</RootTypography>
      <IDChip label={id} />
    </Box>
  );
};

export default PageHeader;
