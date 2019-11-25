import React from 'react';
import './Nav.css';
import './node_modules/tachyons';

const Nav = () => {

return (

  
      <nav className="dt w-100 mw8 center sans-serif"> 
        <div className="dtc w2 v-mid pa3">
          <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
            <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style={{fill: 'currentcolor'}}><title>skull icon</title><path d="M357.209,157.769c0-12.051-2.127-23.613-6.008-34.341l27.159-15.68l-17.86-30.934l-27.212,15.711c-14.922-17.65-35.759-30.122-59.427-34.356V26.791H238.14v31.377c-23.667,4.234-44.505,16.707-59.427,34.354l-27.212-15.71l-17.86,30.934l27.159,15.68c-3.882,10.728-6.008,22.29-6.008,34.341c0,12.051,2.127,23.613,6.008,34.341l-27.159,15.68l17.86,30.934l27.212-15.711c14.922,17.649,35.759,30.121,59.427,34.354v31.378h35.721v-31.377c23.667-4.234,44.505-16.707,59.427-34.354l27.212,15.711l17.86-30.934l-27.159-15.68C355.083,181.381,357.209,169.82,357.209,157.769z M256,223.256c-36.11,0-65.488-29.378-65.488-65.488S219.89,92.279,256,92.279s65.488,29.378,65.488,65.488S292.11,223.256,256,223.256z" /></svg>
          </a>
        </div>
        <div className="dtc v-mid tr pa3">
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/">Energy Gauge</a>
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/">Nuclear</a> 
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/">Solar</a> 
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/">Storage</a>
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/">Wind</a>
          <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/">Logout</a> 
        </div>
      </nav> 
      
  



  );
}


export default Nav;