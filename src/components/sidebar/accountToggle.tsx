function AccountToggle (){
  return(
    <div className="border-b mb-4 mt-2 pb-4 border-stone-500 ">
      <button className="flex items-center pl-4 gap-3 justify-center" >
        <img src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Felix" alt="" className="size-8 rounded-full shrink-0  " />
        <div className="text-start">
          <span className="text-md text-stone-400">Manel</span>
        </div>
      </button>
    </div>
  )
}

export default AccountToggle