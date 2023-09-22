import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

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

const Pagination: React.FC = () => {
  return (
    <Box
      gap={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "15px",
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
  );
};

export default Pagination;
