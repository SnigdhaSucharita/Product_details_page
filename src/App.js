import React from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';


class App extends React.Component{

  state = {
    imageUrl: 'https://imgur.com/iOeUBV7.png',
    position: 0,
    feature: 0
  };

  onColorOptionClick = (url, index) => {
    this.setState({
      imageUrl: url,
      position: index
    });
  }

  onFeatureBtnClick = (feature) => {
    this.setState({feature: feature});
  };
  
  

  render() {
    return (
      <div>
        <Topbar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview imageUrl={this.state.imageUrl} feature={this.state.feature} />
          </div>
          <div className={classes.ProductDetails}>
            <ProductDetails onColorOptionClick={this.onColorOptionClick} position={this.state.position} onFeatureBtnClick={this.onFeatureBtnClick} feature={this.state.feature}/>
          </div>
        </div>
      </div>
    );
  }
  
  
}

export default App;
