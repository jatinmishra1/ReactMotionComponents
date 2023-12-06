import react from 'react'
import { PiFiles } from "react-icons/pi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
export const Card=({desc,fileSize,close,tag,reference})=>{
    return (
        
         <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.3} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white px-8 py-10 overflow-hidden'>
        <PiFiles/>
        <p className='text-sm mt-5 font-semibold leading-tight'>{desc} </p>
        <div className='footer absolute bottom-0  w-full   left-0'>
        <div className='flex items-center justify-between px-8 py-3  mb-3'>
            <h5>{fileSize}</h5>
            <span className='w-5 h-5 bg-zinc-600 rounded-full  flex items-center justify-center'>
                {close ?<IoMdCloseCircle/>: <IoCloudDownloadOutline />}
           
            </span>
        </div>
        {tag.isopen && <div className={`tag w-full py-4 ${tag.tagColor==="green"?"bg-green-600":"bg-blue-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold  '>{tag.tagTitle}</h3>
        </div>}
        
        </div>
        </motion.div>
    )
}