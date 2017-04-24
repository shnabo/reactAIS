import React from 'react';
 import { Link } from 'react-router';

 export default class Navigation extends React.Component {
   render() {
     return (
       <nav className="Nav">
         <div className="Nav__container">
           <Link to="/" className="Nav__brand">
             Hello!
           </Link>

           <div className="Nav__right">
             <ul className="Nav__item-wrapper">
               <li className="Nav__item">
                 <Link className="Nav__link" to="/about">About</Link>
               </li>
               <li className="Nav__item">
                 <Link className="Nav__link" to="/services">Services</Link>
               </li>
               <li className="Nav__item">
                 <Link className="Nav__link" to="/cotact">Contact</Link>
               </li>
             </ul>
           </div>
         </div>
       </nav>
     );
   }
 }
