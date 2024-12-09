export const formatWallet = (address: any) => {
  if (!address) return '';
  return `${address?.slice(0, 5)}...${address?.slice(-4)}`;
};

export const formatStarknet = (address: any) => {
  if (!address) return '';
  return (
    address.split('x')[0] +
    'x' +
    '0'.repeat(66 - address.length) +
    address.split('x')[1]
  );
};

export const handleCopy = async (text: string, setCopied: any) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};

export const formatTimeUnit = (timeUnit: any) => {
  return timeUnit < 10 ? `0${timeUnit}` : `${timeUnit}`;
};

export const parseUnits = (value: string, decimals: number): any => {
  let [integer, fraction = ''] = value.split('.');

  const negative = integer.startsWith('-');
  if (negative) {
    integer = integer.slice(1);
  }

  // If the fraction is longer than allowed, round it off
  if (fraction.length > decimals) {
    const unitIndex = decimals;
    const unit = Number(fraction[unitIndex]);

    if (unit >= 5) {
      const fractionBigInt = BigInt(fraction.slice(0, decimals)) + BigInt(1);
      fraction = fractionBigInt.toString().padStart(decimals, '0');
    } else {
      fraction = fraction.slice(0, decimals);
    }
  } else {
    fraction = fraction.padEnd(decimals, '0');
  }

  const parsedValue = BigInt(`${negative ? '-' : ''}${integer}${fraction}`);

  return {
    value: parsedValue,
    decimals,
  };
};
