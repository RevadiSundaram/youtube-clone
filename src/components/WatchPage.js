import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    console.log(searchParams.get("v"));
    const dispatch =  useDispatch();
    useEffect(()=>{
       dispatch(closeMenu());
    });
  return (
    <div className='flex w-full'>
    <div>
      <div className='p-5'>
          <iframe className='rounded-lg' width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
      </div>
      <CommentsContainer />
    </div>
    <div className='w-full p-5'>
      <LiveChat />
    </div>
    </div>
    
  )
}

export default WatchPage