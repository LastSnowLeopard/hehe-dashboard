import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import IconButton from '@mui/material/IconButton';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SVG from '@/components/SVG';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "none",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1A1D1F",
    color: "#6F767E",  
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
  alignItems: "center",
  display: "flex"
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#1A1D1F"
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#1A1D1F"
  },
  // hide last border
  // '& td, th': {
  //   border: 0,
  // },
}));

const FlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%"
}));

const IDChip = styled(Chip)(() => ({
  alignSelf: "center",
  color: "#83BF6E",
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  fontSize: 15,
  padding: "0px 8px",
  backgroundColor: "#EAFAE426",
  borderRadius: "4px"
}));

const RootDivider = styled(Divider)(() => ({
  margin: "8px 0px"
}))

const PaginationArrow = styled("div")(() => ({
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100px",
  borderColor: "transparent",
  borderWidth: "2px",
  borderStyle: "solid",
  cursor: "pointer",
  "&:hover": {
    borderColor: "#272B30",
    "& svg path": {
      fill: "#FCFCFC",
    },
  },
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
          <TableRow>
            <FlexBox>
              <StyledTableCell width={"50px"}>Type</StyledTableCell>
              <StyledTableCell width={"150px"}>Date</StyledTableCell>
              <StyledTableCell width={"150px"} align="left">ID</StyledTableCell>
              <StyledTableCell width={"150px"} align="left">Program</StyledTableCell>
              <StyledTableCell width={"100px"} align="left">Level</StyledTableCell>
              <StyledTableCell width={""} align="left">Wallet</StyledTableCell>
              <Box flex={1} bgcolor={"#1A1D1F"}></Box>
              <StyledTableCell align="right">Profit</StyledTableCell>
            </FlexBox>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <FlexBox>
                <StyledTableCell width={"50px"} component="th" scope="row">
                  {row.type ? (
                    <SVG id='up-arrow-white' height={19} width={16} />
                  ) : (
                    <SVG id='up-arrow-white' height={19} width={16} />
                  )}
                </StyledTableCell>
                <StyledTableCell width={"150px"} component="th" scope="row">{row.date}</StyledTableCell>
                <StyledTableCell width={"150px"} component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell width={"150px"} component="th" scope="row">{row.program}</StyledTableCell>
                <StyledTableCell width={"100px"} component="th" scope="row">{row.level}</StyledTableCell>
                <StyledTableCell width={""} align="left">
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    {row.wallet}
                    <IconButton sx={{padding: 0}}>
                      <OpenInNewIcon sx={{ color: "#6F767E" }} />
                    </IconButton>
                  </Box>
                </StyledTableCell>
                <Box flex={1}></Box>
                <StyledTableCell align="right">{row.profit}</StyledTableCell>
              </FlexBox>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter sx={{backgroundColor: "#1A1D1F"}}>
          <Box padding={1}>
            <RootDivider />
            <RootDivider />
          </Box>
          <Box
            gap={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <PaginationArrow>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.70708 13.7929C9.0976 14.1834 9.0976 14.8166 8.70708 15.2071C8.31655 15.5976 7.68339 15.5976 7.29286 15.2071L1.49997 9.41421C0.718923 8.63317 0.718921 7.36684 1.49997 6.58579L7.29286 0.792894C7.68339 0.402369 8.31655 0.402369 8.70708 0.792894C9.0976 1.18342 9.0976 1.81658 8.70708 2.20711L3.91419 7H18C18.5523 7 19 7.44772 19 8C19 8.55229 18.5523 9 18 9H3.91418L8.70708 13.7929Z"
                  fill="#6F767E"
                />
              </svg>
            </PaginationArrow>
            <PaginationArrow>
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2929 13.7929C9.90237 14.1834 9.90237 14.8166 10.2929 15.2071C10.6834 15.5976 11.3166 15.5976 11.7071 15.2071L17.5 9.41421C18.281 8.63317 18.281 7.36684 17.5 6.58579L11.7071 0.792894C11.3166 0.402369 10.6834 0.402369 10.2929 0.792894C9.90237 1.18342 9.90237 1.81658 10.2929 2.20711L15.0858 7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H15.0858L10.2929 13.7929Z"
                  fill="#6F767E"
                />
              </svg>
            </PaginationArrow>
          </Box>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default StatsBody;
