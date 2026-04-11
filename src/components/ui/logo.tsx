import logo from '../../assets/logo.svg'

function Logo (){
  return(
    <div className='border-b mb-4 p-4 border-stone-500 h-16 flex items-center'>
      <img src={logo} alt="" className='' />
    </div>
  )
}

export default Logo

