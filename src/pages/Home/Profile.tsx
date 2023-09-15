import { styled } from "@mui/material/styles";
import { Box, Avatar, Typography, IconButton, Chip } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const WalletAddress = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  alignSelf: "center"
}));

const InviteAddress = styled(Typography)(() => ({
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  alignSelf: "center",
  color: "#6F767E"
}));

const InviteChip = styled(Chip)(() => ({
  color: "#FDE048",
  fontFamily: "BalooSemiBold",
  fontWeight: 600,
  fontSize: 15,
  backgroundColor: "#FCF5B140",
  borderRadius: "4px"
}));

const AvatarCustom = styled(Avatar)(() => ({
  width: 94,
  height: 94,
  alignSelf: "center"
}))

const Profile: React.FC = () => {
  return (
    <Box display={"flex"} gap={3}>
      <AvatarCustom alt="Lee" />
      <Box alignSelf={"center"}>
        <Box display={"flex"}>
          <WalletAddress>0xaDJd...ef48</WalletAddress>
          <IconButton aria-label="delete">
            <ContentCopyIcon />
          </IconButton>
        </Box>
        <Box display={"flex"} gap={1}>
          <WalletAddress>ID 4623</WalletAddress>
          <InviteAddress>Invited 01.05.2024 by</InviteAddress>
          <InviteChip label={"ID 4623"}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
