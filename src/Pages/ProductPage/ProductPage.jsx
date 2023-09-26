
import { BiSolidCheckbox } from 'react-icons/bi';
import { GiNotebook } from 'react-icons/gi';


const ProductPage = () => {
  return (
    <div>
      <div className="flex justify-between px-10 my-3">
        <div>
           <p className='text-2xl font-semibold'>DEV-10013968</p>
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
                                <p className='text-lg'>  DEV-10013968</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                            <GiNotebook />
                                <p className='text-lg'> Rafi</p>
                            </div>
                      </div>
            
                           
                      <div className="flex items-center justify-center h-6">
                            <div className="divider divider-horizontal"></div>
                      </div>

                     <div className='flex items-center gap-3'>
                        <div>
                             <p className='text-lg'>Bag 1 of 1</p>
                         </div>
                         <div className='flex gap-1 items-center'>
                             <GiNotebook />
                             <p className='text-lg'> Weight 0g of 385g</p>
                          </div>
                      </div>
                         
                     
          
          
        </div>
        <div>
          <p className='font-semibold text-2xl'>Packing: Rafi</p>
        </div>
      </div>
      <hr className='border-[2px]'/>
      

      <div className='grid grid-cols-3 gap-24 ml-72 mr-40'> 
                    <div>
                                <div className='flex gap-1 items-center justify-end my-3'>
                                      <p className='text-2xl font-semibold'>  Left Alley</p>
                                      <GiNotebook />
                                </div>
                                <div className='flex justify-end'>
                                    <hr className='w-11/12 '/>      
                                </div>
                      <hr className='border-yellow-600 mt-10 border-[1.5px]' />
                      
                      <div className='flex items-center gap-3 justify-end my-10 mt-40'>  
                                      <div><p>90×C041</p></div>
                                    <div className="form-control ">
                                          <label className="cursor-pointer label flex items-center">
                                            <input type="checkbox"  className="checkbox checkbox-info w-7 h-7" />
                                            <div className="label-text w-40 h-40">
                                                <img src="https://cdn.shopify.com/s/files/1/0555/3461/6756/products/IMG_7998_clipped_rev_1.png?v=1633685415" alt="" />
                                            </div>
                                          </label>
                                    </div>
                                </div>
                    </div>
                    <div>
                                <div className='flex gap-1 items-center justify-end my-3'>
                                      <p className='text-2xl font-semibold'>  Right Alley</p>
                                      <GiNotebook />
                                </div>
                                <div className='flex justify-end'>
                                    <hr className='w-10/12 '/>      
                                </div>
                                <hr className='border-yellow-600 border-[1.5px] mt-10' />
                      
                      <div className='flex items-center gap-3 justify-end my-10'>  
                                      <div><p>90×C041</p></div>
                                    <div className="form-control ">
                                          <label className="cursor-pointer label flex items-center">
                                            <input type="checkbox"  className="checkbox checkbox-info w-7 h-7" />
                                            <div className="label-text w-40 h-40">
                                                <img src="https://cdn.shopify.com/s/files/1/0555/3461/6756/products/IMG_7998_clipped_rev_1.png?v=1633685415" alt="" />
                                            </div>
                                          </label>
                                    </div>
                                </div>
                      
                    </div>
                    <div className='mr-20'>
                                <div className='flex justify-end my-3'>
                                      <p className='text-2xl font-semibold'> Missing Candies</p>
                                      
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
        <div><p className='text-2xl font-semibold'>Bag Weight: 385g</p></div>
        <div><p className='text-2xl font-semibold'>1 out of 1  bag</p></div>
        <div className='gap-10 flex'>
        <button className="btn btn-lg w-56 bg-[#C8F0BD] text-xl capitalize">Previous Bag</button>
        <button className="btn btn-lg w-56 disabled bg-[#D9E7D2] text-xl capitalize">Next Bag</button>
        </div>
      </div>
      <hr />

      <div className='flex items-center justify-between px-10 my-5'>
        <div><p className='text-2xl font-semibold'>Total Weight: 385g</p></div>
       
        <div className='gap-10 flex'>
           <button className="btn btn-lg w-56 disabled bg-[#D9E7D2] text-xl capitalize">Complete Order</button>
        </div>
      </div>

      <div className='gap-10 py-3 bg-[#9C6EAC] flex items-center justify-center'>
        <button className="btn btn-lg w-80 px-10 font-semibold bg-[#C8F0BD] text-xl capitalize">Select All</button>
        <button className="btn btn-lg w-80 px-16 font-semibold bg-[#C8F0BD] text-xl capitalize">Unselect All</button>
        </div>

    </div>
  );
};

export default ProductPage;