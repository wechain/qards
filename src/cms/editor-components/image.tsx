import React from 'react';
import base from "./base";

export default base(
    'image', 'Image', [{
        name: 'src',
        label: 'Image',
        widget: 'image',
    }, {
        name: 'alt',
        label: 'Alt text',
        widget: 'string',
    }, {
        name: 'caption',
        label: 'Caption',
        widget: 'markdown',
        buttons: ["bold", "italic", "link"]
    }, {
        name: 'layout',
        label: 'Layout',
        widget: 'select',
        options: ["left-aligned", "full-width", "break-out", "screen-width"],
        required: false
    }]
);