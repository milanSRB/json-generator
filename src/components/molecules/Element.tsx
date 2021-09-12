import React from 'react';
import { Input } from "@material-ui/core";

const Element = (props: any) => {
    const { type, value } = props;

    function renderElement() {
        switch(type) {
            case 'string':
                return <Input type="text" value={value}/>
            case 'number':
                return <Input type="number" value={value}/>
            default:
                return null;
        }
    }

    return (
        {renderElement}
    )
}

export default Element;