import icons from "./icons";
import "./style.scss";
import attributes from './attributes';
import Inspector from './inspector';
import BlockControl from './blockControl';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { select } = wp.data;

export default registerBlockType("first-blocks/menu", {
    title: __("Menu", "first-blocks"),
    description: __(
        "Simple Menu block",
        "first-blocks"
    ),
    category: "layout",
    icon: {
        src: icons.blockIcon
    },
    keywords: [
        __("menu", "first-blocks")
    ],
    supports: {
        html: false
    },
    attributes,
    getEditWrapperProps({ blockAlignment }) {
        if ('left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment)
            return { 'data-align': blockAlignment };
    },

    edit: props => {
        const { attributes: { title, titleAlignment, blockAlignment, backgroundColor, textColor, borderWidth, borderColor, containerPadding, listItemPadding, NOItems, NOColumns, items }, className, setAttributes } = props;

        const onChangeTitle = value => {
            setAttributes({ title: value });
        };


        return [
            <Inspector setAttributes={setAttributes}
                titleAlignment={titleAlignment}
                backgroundColor={backgroundColor}
                textColor={textColor}
                borderWidth={borderWidth}
                borderColor={borderColor}
                containerPadding={containerPadding}
                listItemPadding={listItemPadding}
                NOColumns={NOColumns}
                NOItems={NOItems}
                items={items} />,
            <div className={className}
                style={{
                    backgroundColor: backgroundColor ? backgroundColor : '',
                    border: `${borderWidth}px solid ${borderColor}`,
                    padding: `${containerPadding}rem`
                }}>
                <BlockControl setAttributes={setAttributes}
                    blockAlignment={blockAlignment} />
                <RichText
                    tagName='h1'
                    placeholder={__('Menu', 'first-blocks')}
                    value={title}
                    style={{
                        color: textColor,
                        textAlign: titleAlignment,
                    }}
                    onChange={onChangeTitle} />
                <div className="container">
                    {items.map((item, index) => (
                        <div className="col"
                            style={{
                                color: textColor,
                                padding: `${listItemPadding}rem`
                            }}>
                            <div className="item-details">
                                <RichText
                                    tagName='h3'
                                    placeholder={__('item...', 'first-blocks')}
                                    value={item.name}
                                    className='item-name'
                                    onChange={value => {
                                        let newItems = [...items];
                                        newItems[index].name = value;
                                        setAttributes({ items: newItems });
                                    }} />

                                <RichText
                                    tagName='div'
                                    value={item.description}
                                    className='item-description'
                                    onChange={value => {
                                        let newItems = [...items];
                                        newItems[index].description = value;
                                        setAttributes({ items: newItems });
                                    }} />
                            </div>
                            <div className="item-price">
                                <RichText
                                    tagName='p'
                                    value={item.price}
                                    className="price"
                                    onChange={value => {
                                        let newItems = [...items];
                                        newItems[index].price = value;
                                        setAttributes({ items: newItems });
                                    }} />
                            </div>

                        </div>
                    ))}

                </div>
            </div >
        ];
    },

    save: props => {
        const { attributes: { title, titleAlignment, blockAlignment, backgroundColor, textColor, borderWidth, borderColor, containerPadding, listItemPadding, items } } = props;
        return (
            <div className={`align${blockAlignment}`}
                style={{
                    backgroundColor: backgroundColor ? backgroundColor : '',
                    border: `${borderWidth}px solid ${borderColor}`,
                    padding: `${containerPadding}rem`
                }}>
                <div className="title"
                    style={
                        {
                            textAlign: titleAlignment,
                            color: textColor
                        }}>
                    {title}
                </div>
                <div className='items'>
                    <div className="container">
                        {items.map((item, index) => {
                            return (
                                <div className="col"
                                    style={{
                                        color: textColor,
                                        padding: `${listItemPadding}rem`
                                    }}>
                                    <div className="item-details">
                                        <div className="item-name">
                                            {items[index].name}
                                        </div>
                                        {items[index].description}
                                    </div>
                                    <div className="item-price">
                                        {item.price}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    },
})