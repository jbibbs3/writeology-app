import { useState } from "react";


const Square = () => {

    const styles = {
        square: {
            backgroundColor: "black",
            color: "white",
            paddingTop: "19%",
            paddingLeft: "5%",
            marginTop: "10%"

        },

        names: {
            display: 'flex',
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop:"-19px"

        },

        date: {
            marginLeft:"37px"
        },

        tips: {
            paddingLeft:"2px",
            paddingRight:"2px",
            paddingTop:"2px",
            marginBottom:"30px",
            borderRadius:"17px"
        }

    }


    return (

        <div>
            <div style={styles.square} className="blackSquare" >
                <div style={styles.tips}>
                    <button>TIPS</button>
                </div>
                <div>
                    <h4>5 ways to improve your digital project management</h4>
                </div>
                <section style={styles.names}>
                    <p>John Carter</p>
                    <p style={styles.date}>June 16,2022</p>
                </section>


            </div>

        </div>
    )



}


export default Square;