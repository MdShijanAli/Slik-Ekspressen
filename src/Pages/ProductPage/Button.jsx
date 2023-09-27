import { useEffect, useState } from "react";
import ProductPage from "./ProductPage";

const Button = () => {
  // const history = useHistory();
  const [product, setProduct] = useState({});
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("packing.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);


  const [value, setValue] = useState("hidden")
  const [btnValue, setBtnValue] = useState("relative")
 
  const handleCLick = () => {
    setValue("relative");
    setBtnValue("hidden")
  }

  console.log(value)

  return (
    <div className="flex items-center justify-center h-screen">
      {/* <Link to="/product"> */}
      <label onClick={handleCLick} htmlFor="add_order" >
          <div  className={`${btnValue} btn btn-xl lg:text-xl text:md capitalize font-semibold w-40 btn-success`}>
             Add Order
        </div>
      </label>
      {/* </Link> */}
      
      <ProductPage val={value } />
      



      
</div>
  );
};

export default Button;