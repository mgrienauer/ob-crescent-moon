import PageManager from './page-manager';
import _ from 'lodash';
//ob custom
import blogAccordionDsInit from "./ob-custom/blog-accordion-ds-init"

export default class Blog extends PageManager {
  constructor(context) {
		super(context);
  }
  
  onReady() {
    blogAccordionDsInit(this.context)

    const obAccordion = `
    <ul class="accordion" data-accordion>
    <li class="accordion-navigation">
      <a href="#panel1a">Accordion 1</a>
      <div id="panel1a" class="content active">
        Panel 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </li>
    <li class="accordion-navigation">
      <a href="#panel2a">Accordion 2</a>
      <div id="panel2a" class="content">
        Panel 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </li>
    <li class="accordion-navigation">
      <a href="#panel3a">Accordion 3</a>
      <div id="panel3a" class="content">
        Panel 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </li>
  </ul>
    `
    $('.ob-blog-accordion').append(obAccordion)
    
    
    
  }
}