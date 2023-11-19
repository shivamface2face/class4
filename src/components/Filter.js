import React from 'react'

export const Filter = ({ filterData, category, setCategory }) => {
  

  function filterHandler(title) {
    setCategory(title);
  }

  return (
      <div className="flex flex-wrap w-11/12 py-4 space-x-4 max-w-max gap-y-4 max-auto jsutify-enter">
          
          {
              filterData.map((data) => {
               return(   <button  onClick={()=>filterHandler(data.title)}>
                    {data.title}
               </button>
               )
            })
          }
          
    </div>
  )
}
