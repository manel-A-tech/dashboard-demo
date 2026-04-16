import map from '../../assets/map.svg'

function Coordinates(){
  return(
    <div className="col-span-3 p-4 bg-white  flex flex-col gap-3 rounded">
      <span className='text-[16spanx] font-semibold '>Site Coordinates</span>
      <img src={map} alt="" />

      <div className='flex flex-row justify-between items-center gap-3'>
        <button className='flex flex-col  justify-center items-start  bg-[#6750B2] text-white px-4 py-2 rounded'>
          <span className='text-[10px]'>Facility</span>
          <span className='text-[14px]'>Logistics Hub B</span>
        </button>

        <button className='flex flex-col justify-center items-start  bg-[#6750B2] text-white px-4 py-2 rounded'>
          <span className='text-[10px]'>Floor</span>
          <span className='text-[14px]'>Ground Level</span>
        </button>
      </div>
    </div>
  )
}

export default Coordinates