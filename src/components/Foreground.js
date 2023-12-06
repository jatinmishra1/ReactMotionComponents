import react, { useRef } from 'react'
import { Card } from './Card'

const Foreground=()=>{
const ref=useRef(null)
    const data=[
        {descriptionn:"item1",fileSize:".9mb",close:false,tag:{isopen:true,tagTitle:"DownLoad Now",tagColor:"green"}},,
        {descriptionn:"item1",fileSize:".9mb",close:false,tag:{isopen:false,tagTitle:"DownLoad Now",tagColor:"green"}},
        {descriptionn:"item1",fileSize:".9mb",close:false,tag:{isopen:true,tagTitle:"DownLoad Now",tagColor:"green"}},
        {descriptionn:"item1",fileSize:".9mb",close:true,tag:{isopen:true,tagTitle:"DownLoad Now",tagColor:"green"}},
        {descriptionn:"item1",fileSize:".9mb",close:true,tag:{isopen:false,tagTitle:"DownLoad Now",tagColor:"sky"}}
    ]

    return (
        <>
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
           {/* <Card/> */}
           {data.map((item,key)=>{
            return (
                <Card desc={item.descriptionn} fileSize={item.fileSize} close={item.close} tag={item.tag} reference={ref}/>
            )
           })}
        </div>
        </>
    )
}
export default Foreground