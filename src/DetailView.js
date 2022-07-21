import React from "react";
import {useParams} from "react-router-dom";

function DetailView() {
    let params = useParams();
    let text = '';
    if (params.uya == 'fajri') {
        text = <p><b>Baru normal</b></p>
    } else {
        text = <h1><b>KAU KALAH!</b></h1>
    }
    <h1>HAloh</h1>
    return(
        <>
            <h1>Selamat Datang {params.uya} dan juga {params.babang} </h1>
            {text}
        </>
    );
}
export default DetailView;