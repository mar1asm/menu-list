const { addFilter } = wp.hooks;
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, ToggleControl } = wp.components;
const { createHigherOrderComponent } = wp.compose;

import classnames from "classnames";

addFilter(
    "blocks.registerBlockType",
    "first-blocks/add-code-attributes",
    addCodeAttributes
);

addFilter(
    "editor.BlockEdit",
    "first-blocks/add-code-inspector-controls",
    addCodeInspectorControls
);

addFilter(
    "blocks.getSaveElement",
    "first-blocks/modify-save-settings",
    modifyCodeSettings
);



function addCodeAttributes(settings, name) {

    if ("first-blocks/menu" === name) {

        settings.supports = lodash.merge({}, settings.supports, {
            align: ["full", "wide", "left"]
        });

        settings.attributes.align = {
            type: "string",
            default: "full"
        };

        settings.attributes.highContrast = {
            type: "boolean",
            default: false
        };
    }
    return settings;
}

function addCodeInspectorControls(BlockEdit) {
    const withInspectorControls = createHigherOrderComponent(BlockEdit => {
        return props => {
            if ("first-blocks/menu" !== props.name) return
            <BlockEdit {...props} />;

            return (
                <Fragment>
                    <div className={classnames({
                        "high-contrast": props.attributes.highContrast
                    })}>
                        <BlockEdit {...props} />
                    </div>
                    <InspectorControls>

                        <PanelBody title={__("New Settings", "first-blocks")}>
                            <ToggleControl
                                label={__("High Contrast")}
                                checked={props.attributes.highContrast}
                                onChange={highContrast => props.setAttributes({ highContrast })}
                            />
                        </PanelBody>
                    </InspectorControls>
                </Fragment>
            );
        };

    });

    return withInspectorControls(BlockEdit);
}


function modifyCodeSettings(element, block, attributes) {
    if ("first-blocks/menu" === block.name && attributes.highContrast) {
        element.props.className = classnames(element.props.className, {
            "high-contrast": attributes.highContrast
        });
    }
    return element;
}