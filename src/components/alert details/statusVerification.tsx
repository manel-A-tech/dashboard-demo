import Header from '../ui/header'
import icon from '../../assets/Icon.svg'

function StatusVerification(){
  return(
    <div className="col-span-3 px-4 bg-white rounded gap-5">
     <div className='flex flex-col gap-4'>
      <div className='py-2'>
       <Header title="Verify Status" subtitle="Select an action to conclude this alert"/>
     </div>
     <div className='flex flex-col gap-4 '>
      <button className='flex flex-col justify-center items-start bg-[#28A745] rounded p-3 cursor-pointer '>
        <span className='text-white text-[15px]'>Validate true position</span>
        <span className='text-white text-[10px]'>Confirm threat and dispatch local response team</span>
      </button>

      <button className='flex flex-col justify-center items-start bg-[#DEE2E6] rounded p-3 cursor-pointer'>
        <span className='text-[#5D5D5D] text-[15px]'>Mark as a false positive</span>
        <span className='text-[#5D5D5D] text-[10px]'>AI error or authorized personnel anomaly</span>
      </button>
     </div>

<    div className='flex flex-col items-center justify-center gap-2 bg-[#F1F2FC] rounded-xl border-2 border-dashed border-[#C5C7F1] p-6 max-w-xs mx-auto text-center'>
        <img src={icon} alt="" className='h-6 w-6' />
        <span className='text-[12px] font-bold tracking-wide uppercase  text-gray-600'>
    N+1 Protocol Active
          </span>
  <span className='text-[12px] text-gray-600'>
    Marking as Faux Positive will automatically notify Super Admin for secondary validation.
  </span>
</div>
     </div>
    </div>
  )
}

export default StatusVerification
