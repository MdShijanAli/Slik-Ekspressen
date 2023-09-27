import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Button from "./Button";
import ProductPage from "./ProductPage"; // Import your ProductPage component

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (isOpen) => {
    setIsModalOpen(isOpen);
  };

  return (
    <div>
      <Button isModalOpen={isModalOpen} toggleModal={toggleModal} />

      <Switch>
        <Route path="/product">
          {isModalOpen && <ProductPage />} {/* Render the ProductPage */}
        </Route>
      </Switch>
    </div>
  );
};

export default ParentComponent;
