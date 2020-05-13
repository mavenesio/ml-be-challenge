const currency = {
    ARS: '$',
    USD: 'US$'
  }

function parseItems(results)  {
    const items = results.map(rest => 
        ({
          id: rest.id,
          title: rest.title,
          price: {
            currency: currency[rest.currency_id],
            amount: rest.price,
            decimals: 0,
            },
          picture: rest.thumbnail,
          condition: rest.condition,
          free_shipping: rest.shipping ? rest.shipping.free_shipping : null,
          stateName: (rest.address && rest.address) ? rest.address.state_name : null
        })
      )
    return items;
}

function getCategoriesFromFilters(filters)  {
    const categoryFilter = filters.find(filter => filter.id === 'category');
    const categories = (categoryFilter &&
                        categoryFilter.values[0] && 
                        categoryFilter.values[0].path_from_root)
                        ? categoryFilter.values[0].path_from_root.map(category => category.name)
                        : []
    return categories;
}

function createItemObject(details, description) {
    const item = {
        id: details.id,
        title: details.title,
        price: {
          currency: currency[details.currency_id],
          amount: details.price,
          decimals: 0,
        },
        picture: details.thumbnail,
        condition: details.condition,
        free_shipping: false,
        sold_quaranty: details.available_quantity,
        description: description,
      };
      return item;
}

module.exports = {
    parseItems,
    getCategoriesFromFilters,
    createItemObject
}