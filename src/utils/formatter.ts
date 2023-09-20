const formatShortWalletAddress = (address: string): string => {
  if (typeof address !== 'string' || address.length < 6) {
    return '';
  }
  const prefix = address.substring(0, 6);
  const suffix = address.slice(-4);
  const middle = '...';
  const formattedAddress = `${prefix}${middle}${suffix}`;
  
  return formattedAddress;
}

const formatLongWalletAddress = (address: string): string => {
  if (typeof address !== 'string' || address.length < 6) {
    return '';
  }
  const prefix = address.substring(0, 6);
  const suffix = address.slice(-7);
  const middle = '...';
  const formattedAddress = `${prefix}${middle}${suffix}`;
  
  return formattedAddress;
}

const formatBalance = (balance?: string): string => {
  const formattedBalance = Number(balance).toFixed(3);

  return formattedBalance;
}

export {
  formatShortWalletAddress,
  formatLongWalletAddress,
  formatBalance
}