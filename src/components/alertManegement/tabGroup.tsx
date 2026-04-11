function TabGroup() {
  return (
    <div className="inline-flex flex-row">
      <button className="cursor-pointer px-4 py-2.5 text-[#636363] text-[16px] border border-stone-400 rounded-l-md  bg-white hover:bg-[#6F58C84F] hover:text-[#6F58C8]">
        Triage
      </button>
      <button className="cursor-pointer px-4 py-2.5 text-[#636363] text-[16px] border-t border-b border-r border-stone-400 bg-white hover:bg-[#6F58C84F] hover:text-[#6F58C8]">
        Technical
      </button>
      <button className="cursor-pointer px-4 py-2.5 text-[#636363] text-[16px] border border-stone-400 rounded-r-md bg-white hover:bg-[#6F58C84F] hover:text-[#6F58C8] ">
        Manager
      </button>
    </div>
  )
}

export default TabGroup