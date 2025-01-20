import { MathsolClient } from "./sdk/sdk";
import * as bs58 from "bs58";
import { Keypair, PublicKey } from "@solana/web3.js";
import { BN } from "@coral-xyz/anchor";
import axios from "axios";

export class FailrLaunch {
    constructor(
        private readonly client: MathsolClient,
        private readonly apiDomain: string
    ) {}

    async run(user: Keypair) {
        console.log("user", user.publicKey.toBase58());
        for (let i = 0; i < 1000; i++) {
            const ts = await this.client.fairLaunchDraw(user);
            console.log("fairLaunchDraw", ts);
            await new Promise((r) => setTimeout(r, 3000));
            await this.claim(user);
            await this.refund(user);
        }
    }

    async claim(user: Keypair) {
        let res = await axios.get(`${this.apiDomain}/api/fair-launch/user-draw-logs?&user=${user.publicKey.toBase58()}`);
        const drawIds = res.data.data.filter((item) => item.isSuccess && item.claimTime == 0).map((item) => item.drawId);
        if (drawIds.length > 10) {
            const url = `${this.apiDomain}/api/fair-launch/claim-params?&user=${user.publicKey.toBase58()}&drawId=${drawIds.join(",")}`;
            let res = await axios.get(url);
            let { signer, message, signature } = res.data.data;
            const ts = await this.client.fairLaunchBatchClaim(
                user,
                new PublicKey(signer),
                drawIds.map((drawId: number) => new BN(drawId)),
                bs58.decode(message),
                bs58.decode(signature)
            );
            console.log("fairLaunchBatchClaim", ts);
        }
    }

    async refund(user: Keypair) {
        let res = await axios.get(`${this.apiDomain}/api/fair-launch/user-draw-logs?&user=${user.publicKey.toBase58()}`);
        const drawIds = res.data.data.filter((item) => !item.isSuccess && item.refundTime == 0).map((item) => item.drawId);
        if (drawIds.length > 10) {
            const url = `${this.apiDomain}/api/fair-launch/refund-params?&user=${user.publicKey.toBase58()}&drawId=${drawIds.join(",")}`;
            let res = await axios.get(url);
            let { signer, message, signature } = res.data.data;
            const ts = await this.client.fairLaunchBatchRefund(
                user,
                new PublicKey(signer),
                drawIds.map((drawId: number) => new BN(drawId)),
                bs58.decode(message),
                bs58.decode(signature)
            );
            console.log("fairLaunchBatchRefund", ts);
        }
    }

    async initlize(admin: Keypair, signer: Keypair) {
        // const startTime = new BN(1705566450); //2024-01-18 16:27:30
        // const drawPrice = new BN(1e8);
        // const solRefundAmount = new BN(9e7);
        // const tokenClaimAmount = new BN(1000e6);
        let account = await this.client.queryFairLaunchAccount();
        // let vault = this.client.findFairLaunchValultAccountPDA()
        // let token =  this.client.findTokenPDA()
        console.log(account)
        // if (!account) {
        //     const ts = await this.client.fairLaunchInitialize(admin, signer.publicKey, startTime, drawPrice, solRefundAmount, tokenClaimAmount);
        //     console.log("fairLaunchInitialize", ts);
        //     account = await this.client.queryFairLaunchAccount();
        // }
        // B7jtde64natBhpeiRNWPnWwJnKXupLg8vKdy5yBzGL5V
        // let metadata = await this.client.queryTokenMetadata();
        // if (!metadata) {
        //     const uri = "https://api.mathsol.pro/api/metadata/collection.json";
        //     const name = "Mathsol Token";
        //     const symbol = "MATH";
        //     const tx = await this.client.createToken(admin, name, symbol, uri, 6);
        //     console.log("createToken", tx);
        //     metadata = await this.client.queryTokenMetadata();
        // }

    //     let metadata = await this.client.queryCollectionMetadata();
    // if (!metadata) {
    //     const name = "MathSOL Collection";
    //     const symbol = "MATH Col";
    //     const uri = "https://api.mathsol.pro/api/metadata/collection.json";

    //     console.log("create createCollection start");
    //     let tx = await this.client.createCollection(admin, name, symbol, uri);
    //     console.log("createCollection", tx);
    //     metadata = await this.client.queryCollectionMetadata();
    // }

    // let config = await this.client.queryLuckyBoxAccount();
    // console.log(config)
    // if (!config) {
    //     const mintStartTime = new BN(Date.now() / 1000);
    //     const swapStartTime = new BN(Date.now() / 1000);
    //     let tx = await this.client.luckyBoxInitialize(admin, signer.publicKey, mintStartTime, swapStartTime, new BN(2000));
    //     console.log("initialize", tx);
    //     config = await this.client.queryLuckyBoxAccount();
    // }
    // const referrer = new Keypair().publicKey;
    // let userInfo = await this.client.queryLuckyBoxUserAccount(admin.publicKey);
    // console.log("verifyLuckyBoxMintNFT, userInfo", userInfo);
    // if (!userInfo || userInfo.nftId.toNumber() == 0) {
    //     const tx = await this.client.luckyBoxMintNft(admin, referrer);
    //     console.log("mint nft", tx);
    //     userInfo = await this.client.queryLuckyBoxUserAccount(admin.publicKey);
    // }
    // console.log("verifyLuckyBoxMintNFT userInfo", userInfo);
    }
}
