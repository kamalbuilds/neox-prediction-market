import { client } from "@/app/client";
import { neoxTestnet } from "@/chains";
import { getContract } from "thirdweb";

export const contractAddress = "0x70A185DC70Be79c9717543CC48aB9AbCd8E84Bbf";
export const tokenAddress = "0x2AAC535db31DB35D13AECe36Ea7954A2089D55bE";

export const contract = getContract({
    client: client,
    chain: neoxTestnet,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: neoxTestnet,
    address: tokenAddress
});