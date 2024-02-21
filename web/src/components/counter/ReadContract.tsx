import { useReadContract, useWriteContract } from 'wagmi'
import { abi, counterAddress } from '../../abis/abiCouter'

export function ReadContract() {
  const { writeContract } = useWriteContract()

  const result = useReadContract({
    abi,
    address: counterAddress,
    functionName: 'get',
  })

  const onWriteContract = async() => {
     writeContract({
      abi,
      address: counterAddress,
      functionName: 'inc',
      args: [],
    })
  }

  const onAdd = async() => {
     writeContract({
      abi,
      address: counterAddress,
      functionName: 'dec',
      args: [],
    })
  }

  console.log('%c=ReadContract:', 'color:red', result)

  return <div>
    <div>
      <div>
        val:{!!result?.data && result.data.toString()}
      </div>
      <div>
        isLoading:{result.isLoading? 'true' : 'false'}
      </div>
    </div>

    <button className='pointer test-btn' style={{marginRight: '10px'}} onClick={onAdd}>dec</button>
    <button className='pointer test-btn' onClick={onWriteContract}>inc</button>
  </div>
}