import live from '../../assets/Background.svg'
type LiveFeedProps = {
  camera : string , 
  zone : string
}

function LiveFeed({camera , zone}: LiveFeedProps){
  return(
    <div className="col-span-9 pb-5 bg-white rounded">
      
      <div className="flex justify-between p-4 bg-[#3F474E] rounded-t ">
        <span className="text-white"> Live Feed : {zone}</span>
         <span className="text-white"> {camera}</span>
      </div>
      <div>
        <img src={live} alt="" className='rounded-b' />
      </div>
    </div>
  )
}


export default LiveFeed