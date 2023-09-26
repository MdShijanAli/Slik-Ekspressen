
const Button = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <label htmlFor="add_order" >
          <div className="btn btn-xl text-xl capitalize font-semibold w-40 btn-success">
             Add Order
        </div>
      </label>
      




      <input type="checkbox" id="add_order" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-8/12 max-w-3xl p-0 rounded-md pb-5">
          <div className="shadow-xl">
              <h3 className="text-3xl text-center font-bold py-5">What should be packed?</h3>
          </div>
          <p className="py-4 text-center text-2xl font-semibold text-yellow-600">Pak i pose</p>

          
          <div className="grid grid-cols-5 mx-10">
            <div className="text-xl col-span-2">
              <p className="my-10">Weight: 385g</p>
              <p className="my-10">Bag Name: Casper's pose</p>
              <p className="my-10">Bag no: 1 out of 1</p>
            </div>
            <div className="flex items-center justify-center h-64 text-center">
                            <div className="divider divider-horizontal"></div>
             </div>
            <div className="col-span-2">
              <img src="https://cdn.shopify.com/s/files/1/0555/3461/6756/products/IMG_7998_clipped_rev_1.png?v=1633685415" alt="" />
            </div>
          </div>

          <div className='gap-5  flex items-center justify-end pr-5'>
                       <button className="btn w-40 mt-5 h-12 font-bold bg-[#C8F0BD] text-xl capitalize">Stop Packing</button>
                       <button className="btn w-40 mt-5 h-12 font-bold bg-[#C8F0BD] text-xl capitalize">Start Mixing</button>
          </div>




        </div>
        <label className="modal-backdrop" htmlFor="add_order">Close</label>
      </div>
</div>
  );
};

export default Button;