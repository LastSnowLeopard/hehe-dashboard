import React, { createContext, useContext, useState } from "react";

interface RootContextType {
  drawerWidth: number;
  sideOpenD: boolean;
  sideOpenM: boolean;
  walletDialogOpen: boolean;
  connectWalletAnchor: HTMLElement | null;
  selectNetworkAnchor: HTMLElement | null;
  toggleSideOpenD: () => void;
  toggleSideOpenM: () => void;
  toggleWalletDialog: () => void;
  _setConnectWalletAnchor: (event: React.MouseEvent<HTMLButtonElement>) => void;
  _setSelectNetworkAnchor: (event: React.MouseEvent<HTMLButtonElement>) => void;
  closeConnectWallet: () => void;
  closeSelectNetwork: () => void;
}

const RootContext = createContext<RootContextType | undefined>(undefined);

interface RootProviderProps {
  children: React.ReactNode;
}

export const RootProvider: React.FC<RootProviderProps> = ({
  children,
}) => {
  const [drawerWidth] = useState<number>(300);
  const [sideOpenD, setSideOpenD] = useState(true);
  const [sideOpenM, setSideOpenM] = useState(false);
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);
  const [connectWalletAnchor, setConnectWalletAnchor] = useState<HTMLElement | null>(null)
  const [selectNetworkAnchor, setSelectNetworkAnchor] = useState<HTMLElement | null>(null)

  const toggleSideOpenD = () => {
    setSideOpenD((prev) => !prev);
  };

  const toggleSideOpenM = () => {
    setSideOpenM((prev) => !prev);
  };

  const toggleWalletDialog = () => {
    setWalletDialogOpen((prev) => !prev)
  };

  const _setConnectWalletAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
    setConnectWalletAnchor(event.currentTarget)
  };

  const closeConnectWallet = () => {
    setConnectWalletAnchor(null)
  }

  const _setSelectNetworkAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectNetworkAnchor(event.currentTarget)
  };

  const closeSelectNetwork = () => {
    setSelectNetworkAnchor(null)
  }

  return (
    <RootContext.Provider
      value={{
        drawerWidth,
        sideOpenD,
        sideOpenM,
        walletDialogOpen,
        connectWalletAnchor,
        selectNetworkAnchor,
        toggleSideOpenD,
        toggleSideOpenM,
        toggleWalletDialog,
        _setConnectWalletAnchor,
        _setSelectNetworkAnchor,
        closeConnectWallet,
        closeSelectNetwork
      }}>
        {children}
    </RootContext.Provider>
  );
};

export const useRoot = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRoot must be used within a RootProvider");
  }
  return context;
};
