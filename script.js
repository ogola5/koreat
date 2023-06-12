// Create a new instance of ethers.js library
const provider = ethers.getDefaultProvider();

// Input data
const data = "I love you";
const privateKey = "0x4024c61d1e2ed69214cfd432f4dc2b2a81d100d022e328988691936eafe4f619";

// Convert the private key to a Wallet instance
const wallet = new ethers.Wallet(privateKey, provider);

// Get the public key
const publicKey = wallet.publicKey;

// Get the address from the public key
const address = wallet.address;

// Sign the data
const message = ethers.utils.toUtf8Bytes(data);
const signingKey = wallet._signingKey(); // Access the signingKey property
const signature = signingKey.signDigest(ethers.utils.keccak256(message));

// Verify the signature
const signer = ethers.utils.recoverAddress(ethers.utils.keccak256(message), signature);
const resultVerify = (signer === wallet.address);

// Print the outputs
console.log("Signature: ", signature);
console.log("Address: ", address);
console.log("Public Key: ", publicKey);
console.log("Result Verify: ", resultVerify);
