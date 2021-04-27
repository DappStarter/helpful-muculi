require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth remind property install globe equal gentle'; 
let testAccounts = [
"0xf611e2ce81c4f5090692dbaee3a3eb0c1eef4f35e9b310100f01e48e400f6740",
"0x2892413c03108b38845c4d23a3678d486a03b8b8a2dc29fc99d5575d6d6bb4e5",
"0xc2b4da938c54b0c39566dc56100615a3782f04d362fb76ae5efaee4932648bdc",
"0x2e89fd707b451096e54fd85c182c3c559211b50a9ada034620161fa4a1b2b0e0",
"0xb977255f318a44a333c2b0c17119a73e3a60e79fed555fb24497536291260839",
"0xde9bcda3d23fec36a282a1e6a6e7713c74b4429a33a8230e04c2e0a49930de74",
"0x64caf8a7a13583ba633d2d0e8dcc6fa6928cf460d77287b98717b90f84e36441",
"0xd8b2b8b078b78245e114c34a7413c6745b9b3af02144f5cdca2bb6e4da4905c5",
"0x15e0c9fb09a0a07c2a2936ec95e2a1d45a4e09f4e19506a3344c2e2395059ab3",
"0x96906c843ef4b18ebb65497d28a58f7a8682ba50dcf68270b13fc0a8aefee87c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
