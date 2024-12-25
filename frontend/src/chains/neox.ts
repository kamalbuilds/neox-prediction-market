
import { Chain } from "thirdweb/chains";

export const neoxTestnet: Chain = {
    id: 12227332,
    name: "NeoX T4",
    rpc: "https://neoxt4seed1.ngd.network/",
    nativeCurrency: {
        name: "GAS",
        symbol: "GAS",
        decimals: 18,
    },
    blockExplorers: [{
        name: "NeoX T4 Explorer",
        url: "https://xt4scan.ngd.network",
    }],
    testnet: true,
};

export const neoxMainnet: Chain = {
    id: 47763,
    name: "NeoX Mainnet",
    rpc: "https://mainnet-1.rpc.banelabs.org",
    nativeCurrency: {
        name: "GAS",
        symbol: "GAS",
        decimals: 18,
    },
    blockExplorers: [{
        name: "NeoX Explorer",
        url: "https://xexplorer.neo.org",
    }],
}; 