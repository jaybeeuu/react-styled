import React from "react";
import Carousel from "./carousel/carousel";
import ImageFormPanel from "./image-form-panel/image-form-panel" ;
import cssClasses from "./css-classes";

import "./_styles.scss";

const App = () => (
  <div className={cssClasses.root}>
    <Carousel className={cssClasses.carouselPanel}/>
    <ImageFormPanel className={cssClasses.imageFormPanel}/>
  </div>
);

export default App;