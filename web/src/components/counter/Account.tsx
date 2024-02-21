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
    <div>
      address:{address}
    </div>
    <div>
      <button className='pointer test-btn' onClick={onDisconnect}>Disconnect</button>
    </div>
    <ReadContract />
  </div>
}