import './Header.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ButtonSign } from '../Button/ButtonSign';


export const Header = () => {
   return `
   <header class="header">
   <div class="header_wrap-nav">
       <div class="header_logo">
         <svg class="icon">
           <use xlink:href="../assets/images/icon.svg#icon-bootstrap"> </use>
         </svg>
       </div>
       <nav class="header_navigation">
          <a href="#">Home</a>
          <a href="#">Features</a> 
          <a href="#">Pricing</a>
          <a href="#">FAQs</a>
          <a href="#">About</a>
       </nav>
       </div>
       <div class="header_search">
         ${Input}
         ${Button()}
         ${ButtonSign()}
       </div>
   </header>
   `.trim();
};