import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Pagination from "@/components/Pagination";
import SVG from "@/components/SVG";

const StyledTableCell = styled(TableCell)(() => ({
  border: "none",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1A1D1F",
    color: "#6F767E",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
  alignItems: "center",
  display: "flex",
}));

const StyledTableRow = styled(TableRow)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  "&:nth-of-type(odd)": {
    backgroundColor: "#1A1D1F",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#1A1D1F",
  },
}));

const RootTypography = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  alignSelf: "center",
}));

const IDChip = styled(Chip)(() => ({
  alignSelf: "center",
  color: "#83BF6E",
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  fontSize: 15,
  padding: "0px 8px",
  backgroundColor: "#EAFAE426",
  borderRadius: "4px",
}));

const RootDivider = styled(Divider)(() => ({
  margin: "8px 0px",
}));

function createData(increase: boolean, id: string, profit: string, where: string, time: string) {
  return { increase, id, profit, where, time };
}

const rows = [
  createData(true, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(true, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(false, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(true, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(true, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(false, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(true, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(true, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(true, "ID234234", "+0.05BNB", "xCore", "1 minute"),
  createData(true, "ID234234", "+0.05BNB", "xCore", "1 minute"),
];

const RecentActivity: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Box
        gap={2}
        padding={2}
        sx={{
          display: "flex",
          borderBottom: "solid 1px #272B30",
          paddingBottom: "15px",
          backgroundColor: "#1A1D1F",
          width: "100%"
        }}
      >
        <RootTypography fontSize={20}>Platform recent activity</RootTypography>
        <Tooltip title="Help">
          <IconButton>
            <HelpOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell width={"50px"} component="th" scope="row">
                <SVG
                  id={row.increase ? "up-arrow-gray" : "down-arrow-gray"}
                  width={26}
                  height={31}
                />
              </StyledTableCell>
              <StyledTableCell width={"150px"} align="left">
                <IDChip label={row.id} />
              </StyledTableCell>
              <StyledTableCell width={"200px"} align="left" sx={{display: "flex"}}>
                <RootTypography fontSize={15}>{row.profit}</RootTypography>
                <RootTypography fontSize={15} sx={{ color: "#FDE048" }}>&nbsp;in {row.where}</RootTypography>
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ flex: 1, display: "flex" }}>
                <RootTypography sx={{ display: { xs: 'none', sm: 'block'}, color: "#6F767E" }} fontSize={15}>
                  {row.time}
                </RootTypography>
                <IconButton>
                  <OpenInNewIcon sx={{ color: "#6F767E" }} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ backgroundColor: "#1A1D1F", width: "100%" }}>
        <Box padding={1}>
          <RootDivider />
          <RootDivider />
        </Box>
        <Pagination />
      </Box>
    </TableContainer>
  );
};

export default RecentActivity;
