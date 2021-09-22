import { CollectionConfig } from 'payload/types';
import BoxSizeField from './srcry-utilities/fields/box-size-field/index'

const DemoCollection: CollectionConfig = {
    slug: 'DemoCollection',
    admin: {
        useAsTitle: 'field-name'
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'field-name',
            type: 'text'
        },
        BoxSizeField
    ],
    timestamps: false
}

export default DemoCollection;
