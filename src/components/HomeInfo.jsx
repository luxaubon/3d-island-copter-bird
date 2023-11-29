import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        <span className='font-semibold mx-2 text-white'>สวัสดี</span>
        <br />
         โปรเจคนี้ เขียนด้วย Vite - React (เลื่อนไปทางขวานะ)
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          โปรเจคที่เขียนขึ้นมา เพื่ออยากลองแหนะ และ อยากให้เข้าใจ ว่า การเขียนโปรแกรม มันไม่ยากอย่างที่คิด
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          ดู หรือเลื่อนไป
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          โปรเจคอื่นๆ ที่เคยทำไว้ หรือ ที่กำลังทำอยู่ 
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          ดู หรือเลื่อนไป
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        ติดต่อเรา เขียนด้วย emailjs ทดสอบการส่งเมลในแบบอื่นๆ
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        ลองดู ไม่เสียเงินมันฟรี
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;