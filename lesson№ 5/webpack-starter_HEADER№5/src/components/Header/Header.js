import './Header.scss';

export const Header = () => {
   return `
   <header class="header">
     <div class="header_logo">
        <img src='./assests/js-logo.png' alt="logo" />
     </div>
     <nav class="header_navigation">
        <a href="#">Link #1</a>
        <a href="#">Link #2</a> 
        <a href="#">Link #3</a> 
     </nav>
   </header>
   `.trim();
};