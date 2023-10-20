import React from "react";
import { Link,useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  }

  return (
    <React.Fragment>
      <div style={{textAlign: 'center'}}>
        <h1>My Home Page </h1>
        <p>
          Go to <Link to="/products">Productss</Link>
        </p>

        <button onClick={navigateHandler}>Navigate</button>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
