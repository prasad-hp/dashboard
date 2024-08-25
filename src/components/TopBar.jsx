import React from 'react'
import { useSetRecoilState } from 'recoil'
import { displayWidgetForm } from '../recoil/dashboardState'

function TopBar() {
    const setWidgetForm = useSetRecoilState(displayWidgetForm)
  return (
    <div className='flex justify-between mx-5 mt-10'>
        <h1 className='text-3xl font-semibold'>CNAPP Dashboard</h1>
        <div className='flex space-x-3'>
            <button onClick={()=>setWidgetForm({display:true})} className='bg-white flex h-10 rounded-md items-center w-32 justify-center border-2 border-gray-400'>
                Add Widget
                <img src="../../add.svg" alt="Add" />
            </button>
            <button onClick={()=>window.location.reload()} className='bg-white flex h-10 rounded-md items-center w-10 justify-center border-2 border-gray-400'>
                <img src="../../autorenew.svg" alt="Autorenew" />
            </button>
            <button className='bg-white flex h-10 rounded-md items-center w-10 justify-center border-2 border-gray-400'>
                <img src="../../more.svg" alt="More" />
            </button>
            <button className='bg-white flex h-10 rounded-md items-center p-1 w-44 justify-center border-2 border-blue-700 text-blue-600'>
                <img src="../../watch_later.svg" alt="Watch later" />
                <p> | Last Two Days</p>
                <img src="../../expand.svg" alt="Expand" />
            </button>
        </div>
    </div>
  )
}

export default TopBar