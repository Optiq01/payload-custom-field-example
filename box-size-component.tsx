import React from 'react';
import {useFieldType, Label, Select} from 'payload/components/forms';
import {Props} from 'payload/components/fields/Select';

const BoxSizeComponent: React.FC<Props> = (props)=>{
    const {
        path,
        options,
        defaultValue,
        label,
        required
    } = props;

    const { value= '', setValue } = useFieldType({path});

    return(
        <article>
            <Label
                htmlFor={path}
                label={label}
                required={required}
            />
            <Select
                options={options}
            ></Select>
        </article>
    );
}

export default BoxSizeComponent;
