import React,{memo} from "react";

const CustomText = () => {
    console.log("custom component çalışıyor.")
    return (
        <div>
            Custom Text
        </div>
    )
}

export default memo(CustomText);