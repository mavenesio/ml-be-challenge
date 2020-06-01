const fetch = require("cross-fetch");
const ItemParser = require('./ItemParser'); 

async function getItems(req, res)  {
  try {
    const { search } = req.query;
    const url = `${process.env.API_URL}sites/MLA/search?limit=4&q=${search}`;
    const { results, filters } = await fetch(url).then(res => res.json());
    
    const items = ItemParser.parseItems(results);
    const categories = ItemParser.getCategoriesFromFilters(filters);

    res.send({
      filters,
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
      fetch(`${process.env.API_URL}items/${id}`).then(res => res.json()),
      fetch(`${process.env.API_URL}items/${id}/description`).then(res => res.json())
    ]);
    let item = null;
    let categories = null;

    if (details.status !== 404){
      const { plain_text } = description;
      const { category_id } = details;
      const categoryUrl = `${process.env.API_URL}categories/${category_id}`;
      const {path_from_root} = await fetch(categoryUrl).then(res => res.json());
      categories = (path_from_root) ? path_from_root.map(category => category.name) : [];
      item = ItemParser.createItemObject(details, plain_text);
    }
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