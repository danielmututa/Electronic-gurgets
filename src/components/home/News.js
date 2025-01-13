

import  { useState, useEffect} from 'react'
import newsimg from "../Images/news-image.png"


const News = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    
     
  useEffect(() => {
    // Set your target date here
    const targetDate = new Date('2024-12-31T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className='relative h-[450px]'>
        <img src={newsimg} className='object-cover w-full h-full' alt="" />
        <div className="absolute left-[100px]  top-0  flex justify-center  h-full flex-col gap-3">
          <h4 className='font-montserratBold text-[16px] text-white'>  Fresh Updates & Trends</h4>
           <h1 className='font-montserratBold text-[36px] text-white'> Upcoming Launch Countdown</h1>
           <div className="border w-[70px] border-solid rounded-s-[10px] bg-white p-1"><span></span></div>
            </div>



            <div className="flex gap-8 justify-center items-center">
      <div className="flex flex-col items-center">
        <span className="font-bold text-3xl">{timeLeft.days}</span>
        <span className="text-sm">days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-3xl">{timeLeft.hours}</span>
        <span className="text-sm">hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-3xl">{timeLeft.minutes}</span>
        <span className="text-sm">mins</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-3xl">{timeLeft.seconds}</span>
        <span className="text-sm">secs</span>
      </div>
    </div>
     

    </div>
  )
}

export default News