const { __ } = wp.i18n;
const { addFilter } = wp.hooks;


addFilter(
    "blocks.registerBlockType",
    "first-blocks/first-filters",
    extendWithFirstFilters
);

function extendWithFirstFilters(settings, name) {

    if ("first-blocks/menu" === name) {
        if (settings.keywords && settings.keywords.length < 3) {
            settings.keywords.push(__("filter"));
        } else {
            settings.keywords = [__("filter")];
        }
        settings.align = false;
    }
    return settings;
}