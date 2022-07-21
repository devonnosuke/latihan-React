import React from "react";
import {Link, BrowserRouter} from "react-router-dom";

function ListView() {
    return(
        <div>
            <h1>Selamat Datang di ListView</h1>
            <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eaque dignissimos labore eum accusantium, culpa asperiores officiis blanditiis odio adipisci odit deleniti laudantium aut corrupti, dolores atque. Laborum ullam sint odit quae ab est accusamus asperiores aliquid, corrupti labore exercitationem assumenda, quidem ducimus temporibus cumque debitis eius id, suscipit ea?</b></p>
            <ul>
                <Link to='/user/ilman'>Ilman</Link><br />
                <Link to='/user/rober'>Rober</Link>
                <Link to='/user/fajri'>fajri</Link>
                <Link to='/user/fajri/san3'>berdua</Link>
            </ul>
        </div>
    );
}

export default ListView;