
const Tips = ({title, paragraph}) => {

  const styles = {
        title: {
           color:"gray"

        },
        
        tips: {
          paddingLeft:"10px"
        }
  }


return (

  <div style={styles.tips}className="Tips">
    <h4 style={styles.title} class="title">{title}</h4>
    <div class="paragraph">{paragraph}</div>
  </div>

)


}

export default Tips;