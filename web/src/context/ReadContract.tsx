import { useReadContract, useWriteContract } from 'wagmi'
import { abi, counterAddress } from './abi'

export function ReadContract() {
  const { writeContract } = useWriteContract()

  const result = useReadContract({
    abi,
    address: counterAddress,
    functionName: 'get',
  })

  const onWriteContract = async() => {
     const res = writeContract({
      abi,
      address: counterAddress,
      functionName: 'inc',
      args: [],
    })
  }

  console.log('%c=ReadContract:', 'color:red', { result })

  return <div>
    <div>
      <div>
        val:{!!result?.data && result.data.toString()}
      </div>
      <div>
        isLoading:{result.isLoading? 'true' : 'false'}
      </div>
    </div>

    <button className='pointer test-btn' onClick={onWriteContract}>inc</button>
  </div>
}