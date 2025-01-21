import { LuckyBox } from "./lucky-box";
import { MathsolClient } from "./sdk/sdk";
import * as bs58 from "bs58";
// import { privateKey } from "./key.json";
import userKey from "./wallets/user.json";
import adminKey from "./wallets/admin.json";
// import signerKey from "./wallets/signer.json";
import { Keypair } from "@solana/web3.js";
import { FailrLaunch } from "./fair-launch";

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

async function main() {
    const client = MathsolClient.fromEndpoint("https://api.devnet.solana.com");
    const user = Keypair.fromSecretKey(new Uint8Array(userKey));
    const admin = Keypair.fromSecretKey(new Uint8Array(adminKey));
    // const signer = Keypair.fromSecretKey(new Uint8Array(signerKey));
    console.log("user", user.publicKey.toBase58());
    const fairLaunch = new FailrLaunch(client, "https://api.mathsol.pro");
    await fairLaunch.run(user);

    // const luckyBox = new LuckyBox(client);
    // await luckyBox.run(user, user.publicKey);
}
