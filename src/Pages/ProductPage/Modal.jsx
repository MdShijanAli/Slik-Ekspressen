
import { useState } from "react";
import image from "../../assets/_W7A5101_fritlagt 1.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Modal = () => {

  const [product, setProduct] = useState({});
  // const [candies, setCandies] = useState({});

  useEffect(() => {
    fetch('packing.json')
      .then(res => res.json())
      .then(data => {
      setProduct(data)
    })
  }, [])

  const handleReload = () => {
    window.location.href = "/"
  }
  return (
    <div>
      <input type="checkbox" id="add_order" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-8/12 max-w-3xl p-0 rounded-md pb-5">
          <div className="shadow-xl">
              <h3 className="text-3xl text-[#9C6EAC] text-center font-semibold py-5">What should be packed?</h3>
          </div>
          <p className="py-4 text-center text-2xl font-semibold text-yellow-600">Pak i pose</p>

          
          <div className="grid grid-cols-5 mx-10">
            <div className="xl:text-xl md:text-sm col-span-2">
              <p className="my-10">Weight: { product?.data?.order_details?.bag_list[0]?.total_bag_weight}g</p>
              <p className="my-10">Bag Name: { product?.data?.order_details?.bag_list[0]?.name}</p>
              <p className="my-10">Bag no: 1 out of 1</p>
            </div>
            <div className="flex items-center justify-center h-64 text-center">
                            <div className="divider divider-horizontal"></div>
             </div>
            <div className="col-span-2">
              <img className="w-3/5 mx-auto" src={image} alt="" />
            </div>
          </div>

          <div className='gap-5  flex items-center justify-end pr-5'>
                       <button onClick={handleReload} className="btn xl:w-40 md:w-32 mt-5 h-12 font-bold bg-[#C8F0BD] xl:text-xl md:text-md capitalize">Stop Packing</button>
                       <Link to="/product"><button className="btn xl:w-40 md:w-32 mt-5 h-12 font-bold bg-[#C8F0BD] xl:text-xl md:text-md capitalize">Start Mixing</button></Link>
          </div>




        </div>
        <label className="modal-backdrop" htmlFor="add_order">Close</label>
      </div>
    </div>
  );
};

export default Modal;