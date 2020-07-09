const attributes = {
    title: {
        type: 'string',
        source: 'children',
        selector: '.title'
    },
    textAlignment: {
        type: 'string',
    },
    titleAlignment: {
        type: 'string',
        default: 'center'
    },
    blockAlignment: {
        type: 'string',
        default: 'wide',
    },
    backgroundColor: {
        type: 'string',
    },
    textColor: {
        type: 'string',
        default: 'black'
    },
    borderWidth: {
        type: 'number',
        default: 3
    },
    borderColor: {
        type: 'string',
        default: 'black'
    },
    containerPadding: {
        type: 'number',
        default: 1
    },
    listItemPadding: {
        type: 'number',
        default: 1
    },
    NOItems: {
        type: 'number',
        default: 6
    },
    NOColumns: {
        type: 'number',
        default: 2
    },
    items: {
        type: 'array',
        default: [{ name: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price: '10$' },
        { name: 'Product 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price: '10$' },
        { name: 'Product 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price: '10$' },
        { name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price: '10$' },
        { name: 'Product 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price: '10$' },
        { name: 'Product 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price: '10$' }],
        selector: '.items'
    }
};
export default attributes;