const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.editor;
const {
    PanelBody,
    PanelRow,
    SelectControl,
    RangeControl
} = wp.components;

function Inspector({ setAttributes, titleAlignment, backgroundColor, textColor, borderWidth, borderColor, containerPadding, listItemPadding, NOItems, NOColumns, items }) {
    return (
        <InspectorControls>
            <PanelBody>
                <PanelRow>
                    < SelectControl
                        label={__('Select title alignment', 'first-blocks')}
                        value={titleAlignment}
                        options={[
                            { label: 'Left', value: 'left' },
                            { label: 'Center', value: 'center' },
                            { label: 'Right', value: 'right' }]}
                        onChange={titleAlignment => setAttributes({ titleAlignment })}
                    />
                </PanelRow>

            </PanelBody>
            <PanelColorSettings
                title={__("Color Settings", 'first-blocks')}
                colorSettings={[
                    {
                        value: backgroundColor,
                        onChange: backgroundColor => {
                            setAttributes({ backgroundColor });
                        },
                        label: __("Background Color", 'first-blocks')
                    },
                    {
                        value: textColor,
                        onChange: textColor => {
                            setAttributes({ textColor });
                        },
                        label: __("Text Color", 'first-blocks')
                    },
                    {
                        value: borderColor,
                        onChange: borderColor => {
                            setAttributes({ borderColor });
                        },
                        label: __("Border Color", 'first-blocks')
                    }
                ]}
            />
            <PanelBody>
                {__("Color Settings", 'first-blocks')}
                <RangeControl
                    label={__("Border Width:", "first-blocks")}
                    value={borderWidth}
                    onChange={borderWidth => {
                        setAttributes({ borderWidth })
                    }}
                    min={0}
                    max={10}
                />
                <RangeControl
                    label={__("Container padding:", "first-blocks")}
                    value={containerPadding}
                    onChange={containerPadding => {
                        setAttributes({ containerPadding })
                    }}
                    min={0}
                    max={10}
                />
                <RangeControl
                    label={__("Item padding:", "first-blocks")}
                    value={listItemPadding}
                    onChange={listItemPadding => {
                        setAttributes({ listItemPadding })
                    }}
                    min={0}
                    max={10}
                />
                <RangeControl
                    label={__("Number of items:", "first-blocks")}
                    value={NOItems}
                    onChange={newValue => {
                        let newItems = [...items];
                        if (newValue > NOItems) {
                            for (let index = 1; index <= newValue - NOItems; index++) {
                                newItems.push({ name: `Product ${NOItems + index}`, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', price: '10$' });
                            }
                        } else
                            if (newValue < NOItems) {
                                for (let index = 0; index < NOItems - newValue; index++) {
                                    newItems.pop();
                                }
                            }

                        setAttributes({ NOItems: newValue, items: newItems });
                    }}
                    min={0}
                    max={20}
                />
                <RangeControl
                    beforeIcon="arrow-left-alt2"
                    afterIcon="arrow-right-alt2"
                    label={__("Number of columns:", "first-blocks")}
                    value={NOColumns}
                    onChange={NOColumns => {
                        let elements = document.getElementsByClassName("col");
                        for (let index = 0; index < elements.length; index++) {
                            elements[index].style.width = `${100 / NOColumns}%`;
                        }
                        setAttributes({ NOColumns })
                    }}
                    min={1}
                    max={4}
                />
            </PanelBody>
        </InspectorControls>
    );
}
export default Inspector;