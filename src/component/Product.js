import React,{useEffect,useState} from 'react'
import Card from './Card';

const Product = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        // api
        fetch('https://fakestoreapi.com/products').then((data) => data.json()).then((result) => setproducts((result)));
    });


    const cards = products.map(prodcut => (
        <div className='flex justify-center items-center '>
            <div className=" max-w-sm rounded overflow-hidden shadow-lg  grid grid-cols-3 gap-4">
                <img className="w-full" src={prodcut.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{prodcut.title}</div>
                    <p className="text-gray-700 text-base">
                        {prodcut.discription}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
                <button className='bg-sky-600 text-white rounded items-center '>Add to Cart</button>
            </div>
        </div>
    ));



  return (
      <div>
          {/* <h3>{JSON.stringify(product)}</h3> */}
          {cards}
    </div>
  )
}

export default Product