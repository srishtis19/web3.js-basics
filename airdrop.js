const solanaWeb3 = require("@solana/web3.js");

// console.log(solanaWeb3);

const a = (async() =>{
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"),"confirmed")

    let publicKey = solanaWeb3.Keypair.generate().publicKey;

    let tokenAmount = await connection.getBalance(publicKey);
    console.log(`amount: ${tokenAmount}`)
    
    const airdropSignature = await connection.requestAirdrop(
        publicKey, 2*solanaWeb3.LAMPORTS_PER_SOL
    );
    
    await connection.confirmTransaction(airdropSignature);
    console.log(`updated balance: ${await connection.getBalance(publicKey)}`)
    
})

a()


