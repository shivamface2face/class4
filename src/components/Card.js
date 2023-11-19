import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

export const Card = ({ courses,likedCourse,setlikedCourse }) => {
  
  function clickHandler() {
    if (likedCourse.includes(courses.id)) {
      setlikedCourse((prev) => prev.filter(( cid)=>(cid !== courses.id)));
        toast.warning("liked removed");
      
    } else {
      if (likedCourse.length == 0) {
        setlikedCourse([courses.id]);
      } else {
        setlikedCourse((prev) => [...prev, courses.id]);
      }
      toast.success("liked sucessfully");
      
    }
  };

  return (
    <div className='w-[300px] bg-dark'>
      <div className='relative'>
        <img src={courses.image.url} alt="" />
        <div>
          <button onClick={clickHandler}>
            {/* <FcLike fontsize="1.5rem" /> */}
            {
              !likedCourse.includes(courses.id) ?
                (<FcLikePlaceholder fontSize={"1.5rem"} />)
                : (<FcLike fontSize={"1.5rem"} />)
            }
          </button>
        </div>
      </div>
      <div>
        <p>{courses.title}</p>
        <p>
          {/* {
            courses.discription.length > 100 ?
              (courses.discription.substr(0, 100)) + "..." :
              (courses.discription)
          } */}
        </p>
       <p> 
        {courses.discription}
      
      </p>
      </div>
    </div>
  )
}
