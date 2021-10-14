
import React, { useState, useEffect } from 'react';

const Options = ({props}) => {
    return (
        Object.values(props).map(option => 
                    <option>                                   
                    {option}
                    </option>)
                   );
}
export default Options;