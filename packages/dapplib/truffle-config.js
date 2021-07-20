require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note maze pull install hill equal gesture'; 
let testAccounts = [
"0x2d026f0699ae3754aebbdeabcf70d16b51ed195ef349a1bd226bb66ea769b078",
"0x6b50ca76b3a1ca9e3ac9fec7f54461f9a4af61fa3a9f51c5faee4e17cb13c0da",
"0x8aef32e29a4733dbca1a5c910b417105cf13373ab1851649d9dc4d822bc922fe",
"0xd95c2f7d564f2ab277377c0543a5526b8ed99c27d81e789282b0f7e20f6b2afd",
"0x5b672c41803f690bc790915f0bb723a9ff35e99d64f36d825d47a8176a2e5a78",
"0x1c19fd5aca1e1a775ed6c8e094df6eb8903cba72d2c913b0da2a11ff16696388",
"0xc621a81aff5f27d470bfeec2138b4583b6b0cc33b2ca94c9d40b1c5240cb0248",
"0x9e96f87c1513f95dd7df821a24d8c4cb8451d0afcaa98d2fd6ab639f576d5fe2",
"0x4ecd071be61848e4d2617bcf5b3b0309829a75745c96a17e539592fa45f2ff36",
"0x9d8f069e1321833fc4c4a823689c35673b7ddc3117d296fb1918cd750165a783"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


