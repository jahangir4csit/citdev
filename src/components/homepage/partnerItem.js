import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PartnerItem = (data)=>{
    return(
        <ul>
            {data.partnersinfo.map(
                item=>(
                    <li>
                        <span><img class="img-fluid" src={item.partner_logo} alt={item.partner_name ? item.partner_name : 'CIT Partner'} /></span>
                    </li>
                )
            )}
        </ul>
    )
}
export default PartnerItem