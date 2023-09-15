import { styled } from "@mui/material/styles";
import { useRoot } from "@/hooks/RootContext";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";
import MetaMask from "@/assets/wallet/metamask.png";
import Torus from "@/assets/wallet/torus.png";

const DialogWrapper = styled(Paper)(({ theme }) => ({
  padding: "16px 15px",
//   borderRadius: "8px",
  backgroundImage: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#1A1D1F" : "#fff",
}));

const DialogTitleCustom = styled(DialogTitle)(() => ({
  color: "#6F767E",
  textAlign: "center",
  padding: 0,
}));

const DialogFooter = styled(DialogTitle)(() => ({
  width: "310px",
  fontSize: "12px",
  fontWeight: 700,
  margin: "auto",
  color: "#6F767E",
  textAlign: "center",
  padding: 0,
}));

const ListCustom = styled(List)(() => ({
  gap: "8px",
  width: "347px",
  display: "flex",
  padding: "0px 16px",
  margin: "16px 0px",
  flexDirection: "column",
}));

const ListItemButtonCustom = styled(ListItemButton)(() => ({
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "#272B30",
  borderRadius: "8px",
  padding: "8px 16px",
  fontFamily: "BalooSemiBold",
  display: "flex",
  justifyContent: "center",
}));

const ListItemTextCustom = styled(ListItemText)(() => ({
  flex: "none",
  "& span": {
    fontFamily: "BalooSemiBold",
    fontSize: "20px",
    fontWeight: 600,
  },
}));

const ListItemImg = styled("img")(() => ({
  width: "25px",
}));

const WalletDialog: React.FC = () => {
  const { walletDialogOpen, toggleWalletDialog } = useRoot();
  
  const handleDialogClose = () => {
    toggleWalletDialog();
  };

  return (
    <Dialog onClose={handleDialogClose} open={walletDialogOpen}>
      <DialogWrapper>
        <DialogTitleCustom>Connect Wallet</DialogTitleCustom>
        <ListCustom sx={{ pt: 0 }}>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.3335 0C2.12516 0 0.333496 1.77083 0.333496 3.97917V20C0.333496 22.1944 2.13905 24 4.3335 24H21.6668C23.8613 24 25.6668 22.1944 25.6668 20V3.97917C25.6668 1.77083 23.8752 0 21.6668 0H4.3335ZM18.6668 2.64583C19.2189 2.64583 19.6668 3.09375 19.6668 3.64583C19.6668 4.19792 19.2189 4.64583 18.6668 4.64583C18.1147 4.64583 17.6668 4.20139 17.6668 3.64583C17.6668 3.09375 18.1147 2.64583 18.6668 2.64583ZM22.0002 2.64583C22.5522 2.64583 23.0002 3.09375 23.0002 3.64583C23.0002 4.19792 22.5522 4.64583 22.0002 4.64583C21.4481 4.64583 21.0002 4.20139 21.0002 3.64583C21.0002 3.09375 21.4481 2.64583 22.0002 2.64583ZM3.00016 7.3125H23.0002V20C23.0002 20.7535 22.4203 21.3333 21.6668 21.3333H4.3335C3.58002 21.3333 3.00016 20.7535 3.00016 20V7.3125Z"
                  fill="white"
                />
              </svg>
            </ListItemIcon>
            <ListItemTextCustom primary="Browser connect" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListItemImg src={MetaMask}></ListItemImg>
            </ListItemIcon>
            <ListItemTextCustom primary="Metamask" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <svg
                width="32"
                height="18"
                viewBox="0 0 32 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.85036 3.51509C11.9051 -1.1743 20.1029 -1.1743 25.1576 3.51509L25.7655 4.0757C26.0214 4.31055 26.0214 4.68933 25.7655 4.92418L23.686 6.856C23.558 6.96964 23.3581 6.96964 23.2301 6.856L22.3904 6.0757C18.8633 2.80297 13.1447 2.80297 9.61765 6.0757L8.72188 6.90903C8.59391 7.02267 8.39396 7.02267 8.266 6.90903L6.17853 4.98479C5.9226 4.74994 5.9226 4.37115 6.17853 4.1363L6.85036 3.51509ZM29.4605 7.50752L31.316 9.22721C31.572 9.46206 31.572 9.84085 31.316 10.0757L22.9582 17.8257C22.7023 18.0605 22.2944 18.0605 22.0464 17.8257L16.12 12.3257C16.056 12.2651 15.952 12.2651 15.888 12.3257L9.96156 17.8257C9.70562 18.0605 9.29773 18.0605 9.04979 17.8257L0.69195 10.0757C0.436017 9.84085 0.436017 9.46206 0.69195 9.22721L2.54747 7.50752C2.80341 7.27267 3.2113 7.27267 3.45924 7.50752L9.38571 13.0075C9.44969 13.0681 9.55366 13.0681 9.61765 13.0075L15.5441 7.50752C15.8001 7.27267 16.2079 7.27267 16.4559 7.50752L22.3824 13.0075C22.4463 13.0681 22.5503 13.0681 22.6143 13.0075L28.5408 7.50752C28.7967 7.27267 29.2046 7.27267 29.4605 7.50752Z"
                  fill="#3B99FC"
                />
              </svg>
            </ListItemIcon>
            <ListItemTextCustom primary="Wallet Connect" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1584_4166)">
                  <path
                    d="M12.5 24C19.1281 24 24.5 18.6281 24.5 12C24.5 5.37188 19.1281 0 12.5 0C5.87188 0 0.5 5.37188 0.5 12C0.5 18.6281 5.87188 24 12.5 24Z"
                    fill="#0052FF"
                  />
                  <path
                    d="M12.5023 7.78125C10.1727 7.78125 8.28359 9.66797 8.28359 12C8.28359 14.332 10.1727 16.2188 12.5023 16.2188C14.5906 16.2188 16.325 14.6953 16.6578 12.7031H20.907C20.5484 17.0344 16.9227 20.4375 12.5 20.4375C7.84062 20.4375 4.0625 16.6594 4.0625 12C4.0625 7.34062 7.84062 3.5625 12.5 3.5625C16.9227 3.5625 20.5484 6.96562 20.907 11.2969H16.6555C16.3203 9.30469 14.5906 7.78125 12.5023 7.78125Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1584_4166">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(1 0 0 -1 0.5 24)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ListItemIcon>
            <ListItemTextCustom primary="Coinbase" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListItemImg src={Torus}></ListItemImg>
            </ListItemIcon>
            <ListItemTextCustom primary="Torus" />
          </ListItemButtonCustom>
          <ListItemButtonCustom>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.955654 0.0789111C0.583331 0.248857 0.351298 0.462491 0.183198 0.790065C0.00926909 1.12909 0 1.41105 0 6.37393V11.6008L0.71674 12.3177L1.43348 13.0346V18.2625C1.43348 24.0588 1.40701 23.8076 2.0709 24.3177L2.42182 24.5873L7.70047 24.6354L12.979 24.6835L13.6809 25.3418L14.3826 26L19.6249 25.9929C24.7504 25.986 24.8743 25.9813 25.1867 25.7869C25.3625 25.6775 25.6052 25.4278 25.7262 25.2321L25.946 24.876L25.973 19.6765L26 14.477L25.304 13.7735L24.6081 13.0701L24.5603 7.67894L24.5125 2.28782L24.0646 1.87961C23.7191 1.56474 23.5139 1.45715 23.1672 1.40932C22.9201 1.37516 20.5261 1.34725 17.8472 1.34725H12.9765L12.2867 0.673625L11.5968 0L6.34784 0.00673696C3.461 0.01049 1.0345 0.0429202 0.955654 0.0789111ZM19.2448 6.69006C19.3845 6.83085 19.3998 7.45116 19.3998 12.9913C19.3998 18.4495 19.383 19.1534 19.2496 19.2877C19.1162 19.422 18.4182 19.4389 13.0084 19.4389C8.2859 19.4389 6.88071 19.4119 6.75466 19.3186C6.60405 19.2072 6.59392 18.7383 6.61695 12.9432L6.64179 6.68813L7.93193 6.64002C8.6415 6.61355 11.4422 6.57891 14.1559 6.56294C18.6038 6.53686 19.105 6.54937 19.2448 6.69006Z"
                  fill="#252C32"
                />
              </svg>
            </ListItemIcon>
            <ListItemTextCustom primary="Frame" />
          </ListItemButtonCustom>
        </ListCustom>
        <DialogFooter>
          Safely connect to your existing blockchain wallet and directly stake
          tokens in them.
        </DialogFooter>
      </DialogWrapper>
    </Dialog>
  );
};

export default WalletDialog;
