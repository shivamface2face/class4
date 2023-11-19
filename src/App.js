import React, { useEffect,useState } from "react";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";

import { filterData ,apiUrl} from './data';
import { Cards } from "./components/Cards";
import { toast } from "react-toastify";
import { Spiner } from "./components/Spiner";
import ReactEditor from "./components/ReactEditor";
import CheackEditor from "./components/CheackEditor";
import Product from "./component/Product";
import Appy from "./component/Appy";

const App = () => {
  
  const [course, setcourse] = useState(null);
  const [loading, setloading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      try {
        const result = await fetch(apiUrl);
        const outputData = await result.json();
        console.log(outputData);
        setcourse(outputData.data);
         
      }
      catch (err) {
        console.log(err);
        toast.error("something went wrong");
      }
      setloading(false);
    }
    fetchData();
  },[]);




  return <div className="flex flex-col">
   <Navbar />
    <Filter filterData={filterData} course={course} category={category} setCategory={setCategory} />

    <div className="w-11/12 py-4 max-auto max-w-[1200] flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spiner />):<Cards courses={course} />
      }
    </div> 




  




 
  </div>;
};

export default App;


