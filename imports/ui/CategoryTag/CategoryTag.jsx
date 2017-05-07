import React from 'react';
import { Label } from 'semantic-ui-react';

const CategoryTag = ({ label }) => (
    <Label color="red" tag >
        {label}
    </Label>
);

export default CategoryTag;