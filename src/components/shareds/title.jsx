import React from 'react'

const Title = ({ title }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            overflow: "hidden",
            position: "relative",
            marginBottom: "3rem",
            textTransform: "uppercase"
        }}>
            <h2 style={{ fontSize: "5rem", position: "relative", color: "#fff" }}>{title}
                <span style={{
                    position: "absolute",
                    fontSize: "8rem",
                    marginLeft: ".4rem",
                    color: "violet",
                    bottom: 0,
                    right: "-2rem"
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
