import React from "react";
import ProductData from "../Utils/ProductData";
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {

    const colorOptions = ProductData.colorOptions.map((item, pos) => {
        const classArr = [classes.ColorOptions];
        if(pos === props.position) {
            classArr.push(classes.selectedColorOption);
        }
    
        return <img key={pos} src={item.imageUrl} alt={item.styleName} className={classArr.join(' ')} onClick={() => props.onColorOptionClick(item.imageUrl, pos)} />
      });
    
    const features = ProductData.featureList.map((item, pos) => {
      const classArr = [classes.FeaturesBtn];
      if(pos === props.feature) {
        classArr.push(classes.selectedFeatureBtn)
      }

      return <button key={pos} className={classArr.join(' ')} onClick={() => props.onFeatureBtnClick(pos)}>{item}</button>
    });

    

    return (
        <div className={classes.ProductDetails}>
            <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
            <p className={classes.ProductDescription}>{ProductData.description}</p>
            <h3 className={classes.SubHeading}>Select Color</h3>
            <div>{colorOptions}</div>
            <h3 className={classes.SubHeading}>Features</h3>
            <div>{features}</div>
            <button className={classes.PrimaryButton}>Buy Now</button>
          </div>
    );
}

export default ProductDetails;