import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function ConnectButton() {
  const { open } = useWeb3Modal()

  return (
    <>
      <button className='pointer test-btn' onClick={() => open()}>Open Connect Modal</button>
    </>
  )
}