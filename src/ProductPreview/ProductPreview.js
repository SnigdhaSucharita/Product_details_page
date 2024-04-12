import React from "react";
import classes from './ProductPreview.module.css';

const ProductPreview = ({imageUrl, feature}) => {

  const currentHours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className={classes.ProductPreview}>
            <img src={imageUrl} alt="Product Preview" />

            {
              feature === 1 ? 
              <div className={classes.FeatureHeartRate}>
                <i className='fa-solid fa-heart-pulse'></i>
                <p>78</p>
              </div>
              :
              <div className={classes.FeatureTime}>
                <p>{`${currentHours}: ${currentMinutes}`}</p>
              </div>
            }

            
            
        </div>
    );
}

export default ProductPreview;