import logo1 from '../../assets/Icon1.svg'

type AiStreamProps = {
 zone : string
}

function AiStream({zone} : AiStreamProps){
  return(
    <div className="col-span-9 bg-[#E5E6FA] rounded pb-5 w-full h-full ">
     <div className='flex flex-row gap-2 p-5'>
      <img src={logo1} alt="" />
      <span className="text-[16px] font-semibold"> Incident Intelligence Stream</span>
     </div>
     <div className='flex flex-col items-center gap-2'>
      <div className='flex flex-row gap-5 bg-white py-3 w-[96%] rounded '>
        <div><span className='text-[10px] text-[#535451] pl-3'>14:22:04</span></div>
        <div className='flex flex-col gap-1.5'>
          <span className='text-[14px] font-semibold text-[#161C22]'>Initial Trigger: Perimeter Breach</span>
          <span className='text-[12px] text-[#414754]'>{zone} South Gate sensor #88 triggered human detection. AI Confidence: 94%</span>
        </div>
      </div>
      <div className='flex flex-row gap-5 bg-white py-3 w-[96%] rounded '>
        <div><span className='text-[10px] text-[#535451] pl-3'>14:22:15</span></div>
        <div className='flex flex-col gap-1.5'>
          <span className='text-[14px] font-semibold text-[#161C22]'>Facial Recognition Attempt</span>
          <span className='text-[12px] text-[#414754]'>Subject unidentified. Metadata: Male, 1.8m, Dark Clothing. No authorization found.</span>
        </div>
      </div>
      <div className='flex flex-row gap-5 bg-white py-3 w-[96%] rounded '>
       <div> <span className='text-[10px] text-[#535451] pl-3'>14:22:45</span></div>
       <div className='flex flex-col gap-1.5' >
         <span className='text-[14px] font-semibold text-[#161C22]'>Escalation Threshold Met</span>
        <span className='text-[12px] text-[#414754]'>Alert escalated to Operator Terminal due to prolonged presence in restricted zone.</span>
       </div>
      </div>
     </div>
    </div>
  )
}

export default AiStream