import React from 'react';
import './Home.css';
import 'tachyons';

import Nav from '../Nav/Nav';
import locked from './locked.png'
import unlocked from './unlocked.png'

const imagesPath = {
    unlocked: unlocked,
    locked: locked
}
// const Home = () => {
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          stickyNav: false,
 
        }

     
      }

    buttonClicked = () => {
       
    } 

    getImageName = () => this.state.open ? 'locked' : 'unlocked'

    render(){
        var imageName = this.getImageName();

        return (

            
        <div className="athelas">
            <header className="sans-serif">
                <div className="cover bg-left bg-center-l about2" >
                    <div className="bg-black-80 pb5 pb6-m pb7-l">
                        <nav className="dt w-100 mw8 center"> 
                            <Nav />
                        </nav> 
                        <div className="tc-l mt4 mt5-m mt6-l ph3">
                                <h1 className="f1 f-headline-l fw1 i white-60">Sustainable Energy System Portfolio</h1>
                                <h2 className="fw1 f3 white-80 mt3 mb4">Tabletop Raspberry Pi Simulator</h2>
                                <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Current Energy Levels</a>
                                    <span className="dib v-mid ph3 white-70 mb3">or</span>
                                <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="/">Forecasted Energy Levels</a>
                        </div>
                    </div>
                </div> 
            </header>

            <div className="center measure-wide f5 pv5 lh-copy ph2">
                <div className="mt5-l db center mw6 tc black link dim" >
                    <img className="db ba b--black-10" alt="lock"  src={imagesPath[imageName]} onClick={this.buttonClicked} />
                    <dl className="mt2 f6 lh-copy">
                    <dt className="clip">Title</dt>
                    <dd className="ml0">Temp Button</dd>
                    <dt className="clip">Type</dt>
                    <dd className="ml0 gray">Button Description</dd>
                    </dl>
                </div>
            </div>
        </div>

        )        
    }



}
    
    
export default Home;