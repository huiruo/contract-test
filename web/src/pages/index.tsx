import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ConnectButton from "@/context/ConnectButton";
import { getPublicClient } from '@wagmi/core'
import Account from "@/context/Account";
import { useEffect } from "react";
import { http, createConfig } from '@wagmi/core'
import { hardhat } from '@wagmi/core/chains'
import { readContract } from '@wagmi/core'
import { erc20Abi } from "viem";
import { abi, counterAddress } from "@/context/abi";





const inter = Inter({ subsets: ["latin"] });

export default function Home() {

async  function run() {
    
    const config = createConfig({
      chains: [hardhat],
      transports: {
        [hardhat.id]: http(),
      },
    })

    const client = getPublicClient(config)
    client.getBalance({address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'}).then(b => {
      console.log('BBBB-------:', b);
    })

    client.getBlockNumber().then((d) => {
      console.log('bl---------:', d);
    })

    const result = await readContract(config, {
      abi: abi,
      address: counterAddress,
      functionName: 'get',
    })
    console.log('------------resultxxxx:', result);
    
      
  }

  useEffect(() => {
run()

  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        hello web
        <ConnectButton />

        <Account />
      </main>
    </>
  );
}