import { contractRead } from '@/utils/contracts';
import { Address, formatEther } from 'viem';

export const getEarnedToken = async (account: Address) => {
  const res = await contractRead({
    contractName: 'vesting',
    functionName: 'earned',
    args: [account],
    chain: 'ROOT',
  });
  return formatEther(res);
};

export const getTotalRewardsAmount = async (account: Address) => {
  const res = await contractRead({
    contractName: 'vesting',
    functionName: 'totalUserRewards',
    args: [account],
    chain: 'ROOT',
  });
  return formatEther(res);
};

export const getTotalWithdrawn = async (account: Address) => {
  const res = await contractRead({
    contractName: 'vesting',
    functionName: 'totalUserPayouts',
    args: [account],
    chain: 'ROOT',
  });
  return formatEther(res);
};

export const getEndTime = async () => {
  const res = await contractRead({
    contractName: 'vesting',
    functionName: 'endTime',
    args: [],
    chain: 'ROOT',
  });
  return BigInt(res).toString();
};
