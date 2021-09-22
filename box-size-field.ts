import {Field} from 'payload/types';
import BoxSize from '../../types/box-size';
import BoxSizeComponent from './boxSizeComponent';

const BoxSizeField: Field = {
    name: 'box-size-field',
    label: 'Size',
    type: 'select',
    required: true,
    options: [
        {label:'--', value: null},
        {label:'Micro', value: 'micro'},
        {label:'X Tiny', value: 'xTiny'},
        {label:'Tiny', value: 'tiny'},
        {label:'X Small', value: 'xSmall'},
        {label:'Small', value: 'small'},
        {label:'Lo Med', value: 'loMed'},
        {label:'Hi Med', value: 'hiMed'},
        {label:'Large', value: 'large'},
        {label:'Jumbo', value: 'jumbo'}
    ],
    defaultValue: null,
    admin:{
        components:{
            Field: BoxSizeComponent
        }
    }
}

export default BoxSizeField;
