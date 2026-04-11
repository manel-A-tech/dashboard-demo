

function Header({title , subtitle} : {title: string , subtitle?:string}){

  return(
    <div >
       <p className="pl-4  text-[28px]  text-[#212529]">
        {title}
       </p>
       <p className="pl-4  text-[16px]  text-[#212529]">
        {subtitle}
       </p>
    </div>
  )
}

export default Header