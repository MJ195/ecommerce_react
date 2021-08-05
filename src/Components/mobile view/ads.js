import React from 'react';
// import ad1 from "../../Assets/images/mobileView/ads/ad1.gif"
const Ads = (prpos) => {
    // const ads=[
    //     {
    //         image:ad1
    //     }
    // ]
    return (
        <div style={{ marginTop: 10, marginBottom: 10 }}>

            <div style={{ width: '100%' }}>
                <img src={prpos.image} style={{ maxWidth: '100%' }} />
            </div>

        </div>
    )
}

export default Ads;