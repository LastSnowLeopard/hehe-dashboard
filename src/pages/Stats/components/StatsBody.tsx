import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import IconButton from "@mui/material/IconButton";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SVG from "@/components/SVG";
import Pagination from "@/components/Pagination";

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

function createData(
  type: boolean,
  date: string,
  id: string,
  program: string,
  level: number,
  wallet: string,
  profit: string
) {
  return { type, date, id, program, level, wallet, profit };
}

const rows = [
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
  createData(true, "20.04.2023 14:23", "ID234234", "Boost Program", 3, "0x2323...1csd3", "5,200 HEHE"),
];

const StatsBody: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell width={"50px"}>Type</StyledTableCell>
            <StyledTableCell width={"150px"}>Date</StyledTableCell>
            <StyledTableCell width={"150px"} align="left">
              ID
            </StyledTableCell>
            <StyledTableCell width={"150px"} align="left">
              Program
            </StyledTableCell>
            <StyledTableCell width={"100px"} align="left">
              Level
            </StyledTableCell>
            <StyledTableCell width={""} align="left" sx={{ flex: 1 }}>
              Wallet
              <Box flex={1} bgcolor={"#1A1D1F"}></Box>
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ float: "right" }}>
              Profit
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell width={"50px"} component="th" scope="row">
                {row.type ? (
                  <SVG id="up-arrow-white" height={19} width={16} />
                ) : (
                  <SVG id="up-arrow-white" height={19} width={16} />
                )}
              </StyledTableCell>
              <StyledTableCell width={"150px"} component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell width={"150px"} component="th" scope="row">
                <IDChip label={row.id} />
              </StyledTableCell>
              <StyledTableCell width={"150px"} component="th" scope="row">
                {row.program}
              </StyledTableCell>
              <StyledTableCell width={"100px"} component="th" scope="row">
                {row.level}
              </StyledTableCell>
              <StyledTableCell width={""} align="left">
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  {row.wallet}
                  <IconButton sx={{ padding: 0 }}>
                    <OpenInNewIcon sx={{ color: "#6F767E" }} />
                  </IconButton>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ flex: 1 }}>
                {row.profit}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ backgroundColor: "#1A1D1F" }}>
        <Box padding={1}>
          <RootDivider />
          <RootDivider />
        </Box>
        <Pagination />
      </Box>
    </TableContainer>
  );
};

export default StatsBody;
