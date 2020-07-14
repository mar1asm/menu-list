const { __ } = wp.i18n;
const { addFilter } = wp.hooks;

addFilter(
    "blocks.registerBlockType",
    "first-blocks/first-filters",
    extendWithFirstFilters
);

function extendWithFirstFilters(settings, name) {
    console.log(name);  // my block isn't logged 

    //check for block type

    if ("first-blocks/menu" === name)  //this doesn't work
    // if ("core/quote"===name)         this works
    {
        settings.description = __("Testing the filters...");
        settings.category = "common";
        settings.icon = "admin-tools";

        if (settings.keywords) {
            settings.keywords.push(__("filter"));
        } else {
            settings.keywords = [__("filter")];
        }
    }
    return settings;
}