const ItemParser = require('../../controllers/ItemParser');
const constants = require('./Constants');

describe("Item Parser", () => {
    it("should parse items correctly", () => {
        const resultsParsed = ItemParser.parseItems(constants.ResultItemsFromService);
        expect(resultsParsed).toEqual(constants.ParsedResultItems);
    });
    it("should parse categories correctly", () => {
        const categoriesParsed = ItemParser.getCategoriesFromFilters(constants.FilterItemsFromService);
        expect(categoriesParsed).toEqual(constants.ParsedCategories);
    });
    it("should create item object correctly", () => {
        const itemParsed = ItemParser.createItemObject(constants.ItemDetailsFromService, '');
        expect(itemParsed).toEqual(constants.ParsedItemDetails);
    });
    it("should parseItems not fail if some fields are null", () => {
        const resultWithNullProperties = constants.ResultItemsFromService.map(result => ({...result, stateName: null, shipping: null}));
        const resultsParsed = ItemParser.parseItems(resultWithNullProperties);
        expect(resultsParsed).toEqual(constants.ParsedResultItems.map(items => ({...items, free_shipping: null})));
    });
    it("should get categories from filters not fail if filters not have a category or values", () => {
        const filtersWithOutCategory = constants.FilterItemsFromService.filter(filter => filter.id !== 'category');
        const filtersWithOutValues = constants.FilterItemsFromService.map(filter =>  {
            if(filter.id === 'category') return ({...filter, values: []})
            return filter
        });
        let categoriesParsed = ItemParser.getCategoriesFromFilters(filtersWithOutCategory);
        expect(categoriesParsed).toEqual([]);
        categoriesParsed = ItemParser.getCategoriesFromFilters(filtersWithOutValues);
        expect(categoriesParsed).toEqual([]);
    });
});