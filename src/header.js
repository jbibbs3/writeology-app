import { useState } from "react";
import logo from './images/writeology-logo.svg';
const Header = () => {

    const styles = {
             header:{
                display: "flex",
                flexDirection:"row",
                justifyContent:'space-between',
                marginTop:"3%",
                paddingLeft:"1%",
                marginRight:"1%"
             },

             logo: {
               height:".25%",
               width:".25%"
             },
    }


return (
    <div style={styles.header}>
        <div style={styles.logo}>
            <img src={logo} alt="Logo"/>
        </div>
        <div>
            Cart(0)
        </div>

    </div>
)

}

export default Header