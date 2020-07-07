import icon from "./icon";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { Fragment } = wp.element;

export default registerBlockType("learning/hello-world", {
    title: __("Hello World", "learning"),
    description: __(
        "Simple hello world block",
        "Learning"
    ),
    category: "common",
    icon: {
        src: icon
    },
    keywords: [
        __("hello-world", "learning")
    ],
    supports: {
        html: false
    },
    attributes: {
        title: {
            type: 'string',
            source: 'children',
            selector: '.title-selector'
        },
        content: {
            type: 'array',
            source: 'children',
            selector: '.content-selector'
        }
    },


    edit: props => {
        const { attributes: { content, title }, className, setAttributes } = props;
        const onChangeTitle = value => {
            console.log(value);
            setAttributes({ title: value });
        };
        const onChangeContent = value => {
            setAttributes({ content: value });
        };
        return (
            <div className={className}>
                <RichText
                    tagName="h1"
                    placeholder={__('Change the title')}
                    value={title}
                    onChange={onChangeTitle} />
                <RichText
                    tagName="div"
                    multiline="p"
                    placeholder={__('Does it work?', 'learning')}
                    value={content}
                    onChange={onChangeContent}
                />
            </div>
        );
    },

    save: props => {
        const { attributes: { title, content } } = props;
        return (
            <div>
                <div className="title-selector">
                    {title}
                </div>
                <div className="content-selector">

                    {content}
                </div>
            </div>
        )
    },
})