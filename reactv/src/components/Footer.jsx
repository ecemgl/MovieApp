import React from "react";
import "../Styles/Footer.css";
import AppStore from '../assets/store/app-store.svg'
import PlayStore from '../assets/store/play-store.svg'
import WindowsStore from '../assets/store/windows-store.svg'

import Facebook from '../assets/social/facebook-white.svg'
import Instagram from '../assets/social/instagram-white.svg'
import Twitter from '../assets/social/twitter-white.svg'


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1 className="list-unstyled">
              <img src={AppStore} style={{marginLeft: '5px', marginRight:'5px'}}/>
              <img src={PlayStore} style={{marginLeft: '5px', marginRight:'5px'}}/>
            </h1>
          </div>
		  <div className="row" >
				<p className="col-sm">
					&copy;{new Date().getFullYear()} ReacTV | All rights reserved |
					Terms Of Service | Privacy
				</p>
		  </div>
          {/* Column2 */}
          <div className="col">
            <h1 className="list-unstyled">
			<img src={Facebook} style={{marginLeft: '5px', marginRight:'5px'}} />
            <img src={Instagram} style={{marginLeft: '5px', marginRight:'5px'}}/>
            <img src={Twitter} style={{marginLeft: '5px', marginRight:'5px'}}/>
            </h1>
          </div>
         
        </div>
       
      </div>
    </div>
  );
}

export default Footer;