
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiSolidCheckbox, BiUserCircle } from 'react-icons/bi';
import { GiNotebook, GiWeight } from 'react-icons/gi';
import { PiAlignLeft, PiAlignRight } from 'react-icons/pi';
import Modal from './Modal';


const ProductPage = ({val}) => {
  console.log(val)
  const [product, setProduct] = useState({});
  // const [candies, setCandies] = useState({});

  useEffect(() => {
    fetch('packing.json')
      .then(res => res.json())
      .then(data => {
      setProduct(data)
    })
  }, [])
  
  // console.log(product)
  const candyAllay = product?.data?.order_details?.bag_list[0]?.candies.filter(candie => candie.alley_side)
  const leftAllay = product?.data?.order_details?.bag_list[0]?.candies.filter(candie => candie.alley_side == "left")
  const rightAllay = product?.data?.order_details?.bag_list[0]?.candies.filter(candie => candie.alley_side == "right")
  // console.log(leftAllay)


  const [selectedCandies, setSelectedCandies] = useState([]);

  const handleCheckboxChange = (allay) => {
    setSelectedCandies((prevSelectedCandies) => {
      if (prevSelectedCandies.includes(allay)) {
       
        return prevSelectedCandies.filter((candy) => candy !== allay);
      } else {
       
        return [...prevSelectedCandies, allay];
      }
    });
  };

  const calculateTotalWeight = () => {
    const totalWeight = selectedCandies.reduce((total, candy) => total + candy.weight, 0);
    return totalWeight;
    // console.log(totalWeight)
  };

  const isButtonDisabled = selectedCandies.length === 0;


  const handleSelectAll = () => {
    // Select all candies
    setSelectedCandies(candyAllay);
  };

  const handleUnselectAll = () => {
    // Unselect all candies
    setSelectedCandies([]);
  };

  const handleOrderComplete=()=>{
         toast.success("We have recieved your order. Thanks for your shopping")
  }


 


  return (
    <div className={`${val}`}>



<Modal />





      <div className="flex justify-between px-10 my-3">
        <div>
           <p className='xl:text-2xl text-xl font-semibold'>DEV-{product?.data?.order_details?.bag_list[0]?.bag_tracking_id }</p>
        </div>
        <div>
          <p className='flex gap-1 items-center text-lg font-semibold'><BiSolidCheckbox />
          <span>Stop Packing Order</span></p>
        </div>
      </div>
      <hr />

      <div className="flex justify-between px-10 my-3">
        <div className='flex items-center'>
                      <div className='flex items-center gap-3'>
                            <div className='flex gap-1 items-center'>
                            <GiNotebook />
              <p className='xl:text-lg text-sm'>  DEV-{product?.data?.order_details?.bag_list[0]?.bag_tracking_id }</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                            <BiUserCircle />
              <p className='xl:text-lg text-sm'> { product?.data?.order_details?.shipping_address?.first_name }</p>
                            </div>
                      </div>
            
                           
                      <div className="flex items-center justify-center h-6">
                            <div className="divider divider-horizontal"></div>
                      </div>

                     <div className='flex items-center gap-3'>
                        <div>
                             <p className='xl:text-lg text-sm'>Bag 1 of 1</p>
                         </div>
                         <div className='flex gap-1 items-center'>
                             <GiWeight />
              <p className='xl:text-lg text-sm'> Weight {calculateTotalWeight()}g of {product?.data?.order_details?.bag_list[0]?.total_bag_weight }g</p>
                          </div>
                      </div>
                         
                     
          
          
        </div>
        <div>
          <p className='font-semibold xl:text-2xl text-xl'>Packing: { product?.data?.order_details?.shipping_address?.first_name }</p>
        </div>
      </div>
      <hr className='border-[2px]'/>
      

      <div className='grid grid-cols-3 xl:gap-24 gap-10 2xl:ml-64 xl:ml-36 ml-0 mr-0 px-10 xl:px-0 xl:mr-16 2xl:mr-40'> 
                    <div>
                                <div className='flex gap-1 items-center justify-end my-3'>
                                      <p className='xl:text-2xl text-xl font-semibold'>  Left Alley</p>
                                      <PiAlignLeft  className='xl:w-16 xl:h-8 w-6 h-6'/>
                                </div>
                                <div className='flex justify-end'>
                                    <hr className='w-11/12 '/>      
                                </div>
                      <hr className='border-yellow-600 mt-10 border-[1.5px]' />
                      
                           <div className='mt-40'>
                           {
                                    leftAllay?.map(allay=> <div key={allay?.id} className='flex items-center gap-3 justify-end my-10'>  
                                 
                                      <div><p>{ allay?.total_amount} × { allay?.short_code}</p></div>
                                         <div className="form-control ">
                                               <label className="cursor-pointer label flex gap-3 items-center">
                                                 <input onChange={() => handleCheckboxChange(allay)}
                                                      type="checkbox"
                                            checked={selectedCandies.includes(allay)}
                                            className="checkbox checkbox-info xl:w-7 xl:h-7 w-5 h-5" />
                                                 <div className="label-text xl:w-40 xl:h-40 w-20 h-20">
                                                     <img src={allay?.image} alt="" />
                                                 </div>
                                               </label>
                                         </div>
                                     </div>)
                              }
                              
                            </div>
                              
                      
                    </div>
                    <div>
                                <div className='flex gap-1 items-center justify-end my-3'>
                                      <p className='xl:text-2xl text-xl font-semibold'>  Right Alley</p>
                                      <PiAlignRight   className='xl:w-16 xl:h-8 w-6 h-6'/>
                                </div>
                                <div className='flex justify-end'>
                                    <hr className='w-10/12 '/>      
                                </div>
                                <hr className='border-yellow-600 border-[1.5px] mt-10' />
                      
                          {
                             rightAllay?.map(allay=> <div key={allay?.id} className='flex items-center gap-3 justify-end my-10'>  
                               <div><p>{ allay?.total_amount} × { allay?.short_code}</p></div>
                           <div className="form-control ">
                                 <label className="cursor-pointer label flex gap-3 items-center">
                                   <input onChange={() => handleCheckboxChange(allay)}
                                                      type="checkbox"
                                            checked={selectedCandies.includes(allay)} className="checkbox checkbox-info xl:w-7 xl:h-7 w-5 h-5" />
                                   <div className="label-text xl:w-40 xl:h-40 w-20 h-20">
                                       <img src={allay?.image} alt="" />
                                   </div>
                                 </label>
                           </div>
                       </div>)
                          }
                      
                    </div>
                    <div className='2xl:mr-20 xl:mr-16'>
                                <div className='flex justify-end my-3'>
                                      <p className='xl:text-2xl text-xl font-semibold'> Missing Candies</p>
                                      
                                </div>
                                <div className='flex justify-end'>
                                    <hr  className='w-3/5'/>
                                </div>
                                <div>
                                    <p className='text-yellow-600 text-right mt-5 '>No Missing candies in this bag</p>
                                </div>
                                        
                    </div>
      
      </div>

      <div className='flex items-center justify-between px-10 my-5'>
        <div><p className='xl:text-2xl text-xl font-semibold'>Bag Weight: {product?.data?.order_details?.bag_list[0]?.total_bag_weight }g</p></div>
        <div><p className='xl:text-2xl text-xl font-semibold'>1 out of 1  bag</p></div>
        <div className='xl:gap-10 gap-5 flex'>
        <button className="btn  btn-md xl:w-56 w-40 bg-[#C8F0BD] xl:text-xl text-lg capitalize">Previous Bag</button>
        <button className="btn  btn-md xl:w-56 w-40 disabled bg-[#D9E7D2] xl:text-xl text-lg capitalize">Next Bag</button>
        </div>
      </div>
      <hr />

      <div className='flex items-center justify-between px-10 my-5 mb-28'>
        <div><p className='xl:text-2xl text-xl font-semibold'>Total Weight: {product?.data?.order_details?.bag_list[0]?.total_bag_weight }g</p></div>
       
        <div className='gap-10 flex'>
          <button
            onClick={handleOrderComplete}
          className={`btn  btn-md w-56  xl:text-xl text-lg ${isButtonDisabled ? 'disabled bg-[#D9E7D2]' : 'bg-[#C8F0BD]'} capitalize`}
          disabled={isButtonDisabled}
        >
          Complete Order
        </button>
      </div>
      </div>

  {/* Second Section */}
  <div className='fixed bottom-0 left-0  right-0 py-3 bg-[#9C6EAC] flex items-center gap-5 justify-center z-10'>
    <button onClick={handleSelectAll} className="btn xl:btn-md btn-md xl:w-80 w-60 px-10  font-semibold bg-[#C8F0BD] xl:text-xl text-lg capitalize">Select All</button>
    <button onClick={handleUnselectAll} className="btn xl:btn-md btn-md xl:w-80 w-60 px-16  font-semibold bg-[#C8F0BD] xl:text-xl text-lg capitalize">Unselect All</button>
  </div>


    </div>
  );
};

export default ProductPage;