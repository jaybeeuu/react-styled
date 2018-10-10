import React from "react";
import Carousel from "./carousel/carousel";
import ImageFormPanel from "./image-form-panel/image-form-panel" ;

import * as styles from "./styles";

const App = () => (
  <div style={styles.root}>
    <Carousel style={styles.carouselPanel}/>
    <ImageFormPanel />
  </div>
);

export default App;