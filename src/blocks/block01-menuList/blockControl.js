//I want to do the same thing using a filter


/* const { BlockControls, BlockAlignmentToolbar } = wp.blockEditor;
const { __ } = wp.i18n;
const { Toolbar, Button, Tooltip } = wp.components;
import classnames from 'classnames';
import icons from "./icons";

function BlockControl({ setAttributes, blockAlignment }) {
    const onChangeBlockAlignment = blockAlignment => {
        setAttributes({ blockAlignment });
    };
    const onClear = () => {

        setAttributes({ title: '' }); //Tried to reset all attributes to their default values but it seems like the default values cannot be accessed(e.g. title.default )
        //console.log(blockAlignment.defaultValue);
    };
    return (
        <BlockControls>
            <BlockAlignmentToolbar
                value={blockAlignment}
                onChange={onChangeBlockAlignment} />
            <Toolbar>
                <Tooltip text={__('Clear input', 'first-blocks')}>
                    <Button
                        className={classnames(
                            'components-icon-button',
                            'components-toolbar__control'
                        )}
                        onClick={onClear}>
                        {icons.buttonIcon}
                    </Button>
                </Tooltip>
            </Toolbar>
        </BlockControls>
    )
}

export default BlockControl; */

