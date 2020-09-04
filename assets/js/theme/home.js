import PageManager from './page-manager';

//ob custom
import heroAnimation from "./ob-custom/hero-animation"
import blogCarousel from "./ob-custom/blog-carousel"
import igSlider from "./ob-custom/ig-slider"


export default class Home extends PageManager {
    onReady() {
      heroAnimation()
      blogCarousel()
      igSlider()
    }
}