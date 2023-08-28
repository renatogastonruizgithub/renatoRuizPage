import React from 'react'
import styles from "../../assets/styles/title.module.scss";
const Title = ({ title }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            overflow: "hidden",
            position: "relative",
            textTransform: "uppercase"
        }}>
            <h2 className={styles.title} style={{ position: "relative", color: "#fff" }}>{title}
                <span style={{
                    position: "absolute",
                    marginLeft: ".4rem",
                    color: "#ffc119",

                }}>.</span>

            </h2>

            {/*     <span style={{
                position: "absolute",
                left: 0,
                backgroundColor: "#404040d3",
                width: "100%",
                bottom: "0",
                height: "1px",
                opacity: ".4"
            }}></span> */}
        </div>
    )
}

export default Title
