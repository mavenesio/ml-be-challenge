// @ts-nocheck
const fetch = require("cross-fetch");
const currency = {
  ARS: '$',
  USD: 'US$'
}
async function getItems(req, res)  {
  try {
    const { search } = req.query;
    const url = `https://api.mercadolibre.com/sites/MLA/search?limit=4&q=${search}`;
    const { results, filters } = await fetch(url).then(res => res.json());
    
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
    );
    const categoryFilter = filters.find(filter => filter.id === 'category');
    const categories = (categoryFilter &&
                        categoryFilter.values[0] && 
                        categoryFilter.values[0].path_from_root)
                        ? categoryFilter.values[0].path_from_root.map(category => category.name)
                        : []

    res.send({
      author: { name: "Mariano Andres", lastName: "Venesio" },
      items,
      categories,
    });
  } catch (e) {
    console.error("Error while fetching items: ", e);
    res.sendStatus(500);
  }
};

async function getItemDetails(req, res)  {
  try {
    const { id } = req.query;
    const [details, description] = await Promise.all([
      fetch(`https://api.mercadolibre.com/items/${id}`).then(res => res.json()),
      fetch(`https://api.mercadolibre.com/items/${id}/description`).then(res => res.json())
    ]);
    const { plain_text } = description;
    const { category_id } = details;
    
    const categoryUrl = `https://api.mercadolibre.com/categories/${category_id}`;
    const categories = await fetch(categoryUrl).then(res => res.json()).then(data => data.path_from_root.map(category => category.name));

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
      description: plain_text,
    };


    res.send({
      author: { name: "Mariano Andres", lastName: "Venesio" },
      item,
      categories
    });
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
    getItems,
    getItemDetails

}