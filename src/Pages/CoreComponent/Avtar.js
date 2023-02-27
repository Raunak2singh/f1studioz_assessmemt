import React from 'react'



function Avtar({size ="32px"}) {
  return (
    <div style={{height:size,width:size,
    backgroundImage:"url(https://lumiere-a.akamaihd.net/v1/images/o_avatar_teampage_samworthington_480x480_22704_4fd20c04.jpeg?region=0,0,480,480.jpg)",
    backgroundRepeat:"no-repeat",backgroundSize:"cover", borderRadius:"100px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:500}}>
        {/* NA */}
    </div>
  )
}

export default Avtar