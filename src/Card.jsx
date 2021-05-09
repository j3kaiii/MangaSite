import React, {useContext} from 'react';
import {BookName} from "./index";

const Card = () => {
    let myname = useContext(BookName)
    return (
        <div>
            {myname.name}
        </div>
    );
};

export default Card;