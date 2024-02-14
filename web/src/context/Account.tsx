import { useAccount, useDisconnect } from 'wagmi'
import { ReadContract } from './ReadContract'

export default function Account() {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const onDisconnect = () => {
    disconnect()
  }

  if (isConnecting) return <div>Connecting…</div>
  if (isDisconnected) return <div>Disconnected</div>

  return <div>
    {address}
    <div onClick={onDisconnect}>Disconnect</div>
    <ReadContract />
  </div>
}