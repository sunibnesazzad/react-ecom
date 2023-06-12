import React from 'react';
import {Link} from 'react-router-dom';
// need to change react-router-dom to version 5  by runing
// npm un -s react-router-dom react-dom
// npm i -s react-router-dom@5.3.0 react-dom@5.3.0

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MasterLayout = () => {

      return (
        <div class="sb-nav-fixed">

            {/* navbar code  */}
          <Navbar />

          <div id="layoutSidenav">

                <div id="layoutSidenav_nav">

                    {/* Sidebar code in Sidebar.js */}
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">

                    {/* main content code here */}
                    <main>
                        Master file
                    </main>

                    {/* Footer code in Footer.js */}
                    <Footer />
                </div>

            </div>

        </div>
      );

}

export default MasterLayout;