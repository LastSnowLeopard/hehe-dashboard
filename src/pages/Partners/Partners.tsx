import Box from "@mui/material/Box"
import PartnersHeader from "./components/PartnersHeader";
import PartnersBody from "./components/PartnersBody";

const Partners: React.FC = () => {
  return (
    <Box padding={3}>
      <PartnersHeader />
      <PartnersBody />
    </Box>
  )
}

export default Partners;
