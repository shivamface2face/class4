import React,{useState} from 'react'
import { Card } from './Card';

export const Cards = ({ courses }) => {
  
  let allCourses = [];
  const [likedCourse, setlikedCourse] = useState([]);

  // return list of all courses recived from the api response

  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    
    });
    return allCourses;
  };

  return (
    <div>
      {
        getCourses().map((courses) => {
        return( <Card key={courses.id} likedCourse={likedCourse} setlikedCourse={setlikedCourse}  courses={courses}/>)
        })
      }
    </div>
  )
}
