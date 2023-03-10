import React from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

 function Scroll () {
    return (

        <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
        style={{
          background: "#892D32",
          color: "#FFFFFF", 
          height: "auto",
          width: "50px",
        }}
        ToggledStyle={{}}
      />
    )
 }

 export default Scroll