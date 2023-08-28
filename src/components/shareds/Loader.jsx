import React from 'react'

const Loader = ({ night }) => {
    return (

        <div className="containers">
            <div className="cloud front">
                <span className="left-front"></span>
                <span className="right-front"></span>
            </div>

            {
                night ?
                    <>
                        <span className="moon sunshine"></span>
                        <span className="moon"></span>
                    </>
                    :
                    <>
                        <span className="sun sunshine"></span>
                        <span className="sun"></span>
                    </>

            }
            <div className="cloud back">
                <span className="left-back"></span>
                <span className="right-back"></span>
            </div>
        </div>
    )
}

export default Loader