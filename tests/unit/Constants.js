
const ResultItemsFromService = [{
        id: "MLA830476728",
        site_id: "MLA",
        title: "Apple iPhone 6s 32 Gb Gris Espacial 2 Gb Ram",
        seller: {
            id: 287054359,
            permalink: "http://perfil.mercadolibre.com.ar/LUMPINI+TRADE",
            power_seller_status: "silver",
            car_dealer: false,
            real_estate_agency: false,
            tags: [],
            eshop: {
                nick_name: "LUMPINI TRADE",
                eshop_rubro: null,
                eshop_id: 393386,
                eshop_locations: [],
                site_id: "MLA",
                eshop_logo_url: "http://resources.mlstatic.com/eshops/287054359v9e12a0.png",
                eshop_status_id: 1,
                seller: 287054359,
                eshop_experience: 0
            }
        },
        price: 55639,
        currency_id: "ARS",
        available_quantity: 1,
        sold_quantity: 5,
        buying_mode: "buy_it_now",
        listing_type_id: "gold_pro",
        stop_time: "2039-12-11T04:00:00.000Z",
        condition: "new",
        permalink: "https://www.mercadolibre.com.ar/apple-iphone-6s-32-gb-gris-espacial-2-gb-ram/p/MLA6282512",
        thumbnail: "http://mla-s1-p.mlstatic.com/898290-MLA31003118647_062019-I.jpg",
        accepts_mercadopago: true,
        installments: {
            quantity: 18,
            amount: 3091.06,
            rate: 0,
            currency_id: "ARS"
        },
        address: {
            state_id: "AR-C",
            state_name: "Capital Federal",
            city_id: "TUxBQlBVRTQ5NjBa",
            city_name: "Puerto Madero"
        },
        shipping: {
            free_shipping: true,
            mode: "me2",
            tags: [
                "self_service_in",
                "mandatory_free_shipping"
            ],
            logistic_type: "cross_docking",
            store_pick_up: false
        },
        seller_address: {
            id: "",
            comment: "",
            address_line: "",
            zip_code: "",
            country: {
                id: "AR",
                name: "Argentina"
            },
            state: {
                id: "AR-C",
                name: "Capital Federal"
            },
            city: {
                id: "TUxBQlBVRTQ5NjBa",
                name: "Puerto Madero"
            },
            latitude: "",
            longitude: ""
        },
        attributes: [
            {
                value_id: "9344",
                values: [
                    {
                        name: "Apple",
                        struct: null,
                        source: 1,
                        id: "9344"
                    }
                ],
                name: "Marca",
                value_name: "Apple",
                value_struct: null,
                attribute_group_id: "OTHERS",
                attribute_group_name: "Otros",
                source: 1,
                id: "BRAND"
            },
            {
                attribute_group_name: "Otros",
                source: 4709228965570453,
                attribute_group_id: "OTHERS",
                id: "GPU_MODEL",
                name: "Modelo de GPU",
                value_id: "8094621",
                value_name: "PowerVR GT7600",
                value_struct: null,
                values: [
                    {
                        struct: null,
                        source: 4709228965570453,
                        id: "8094621",
                        name: "PowerVR GT7600"
                    }
                ]
            },
            {
                source: 8342579661593500,
                name: "Condición del ítem",
                value_id: "2230284",
                value_struct: null,
                attribute_group_id: "OTHERS",
                attribute_group_name: "Otros",
                id: "ITEM_CONDITION",
                value_name: "Nuevo",
                values: [
                    {
                        id: "2230284",
                        name: "Nuevo",
                        struct: null,
                        source: 8342579661593500
                    }
                ]
            },
            {
                value_name: "iPhone",
                value_struct: null,
                attribute_group_id: "OTHERS",
                attribute_group_name: "Otros",
                source: 1,
                id: "LINE",
                name: "Línea",
                value_id: "58993",
                values: [
                    {
                        id: "58993",
                        name: "iPhone",
                        struct: null,
                        source: 1
                    }
                ]
            },
            {
                value_struct: null,
                values: [
                    {
                        source: 1,
                        id: "312151",
                        name: "iPhone 6s",
                        struct: null
                    }
                ],
                attribute_group_id: "OTHERS",
                id: "MODEL",
                name: "Modelo",
                value_name: "iPhone 6s",
                value_id: "312151",
                attribute_group_name: "Otros",
                source: 1
            },
            {
                attribute_group_name: "Otros",
                source: 1,
                id: "PROCESSOR_MODEL",
                value_id: "6973026",
                value_struct: null,
                attribute_group_id: "OTHERS",
                name: "Modelo del procesador",
                value_name: "Apple A9",
                values: [
                    {
                        id: "6973026",
                        name: "Apple A9",
                        struct: null,
                        source: 1
                    }
                ]
            }
        ],
        differential_pricing: {
            id: 33665186
        },
        original_price: null,
        category_id: "MLA1055",
        official_store_id: null,
        catalog_product_id: "MLA6282512",
        tags: [
            "extended_warranty_eligible",
            "good_quality_picture",
            "good_quality_thumbnail",
            "loyalty_discount_eligible",
            "ahora-12",
            "brand_verified",
            "immediate_payment",
            "shipping_guaranteed"
        ],
        catalog_listing: true
    }
];

const ParsedResultItems = [
    {
        id: "MLA830476728",
        title: "Apple iPhone 6s 32 Gb Gris Espacial 2 Gb Ram",
        price: {
            currency: "$",
            amount: 55639,
            decimals: 0
        },
        picture: "http://mla-s1-p.mlstatic.com/898290-MLA31003118647_062019-I.jpg",
        condition: "new",
        free_shipping: true,
        stateName: "Capital Federal"
    }
];

const FilterItemsFromService = [
    {
        id: "category",
        name: "Categorías",
        type: "text",
        values: [
            {
                id: "MLA1055",
                name: "Celulares y Smartphones",
                path_from_root: [
                    {
                        id: "MLA1051",
                        name: "Celulares y Teléfonos"
                    },
                    {
                        id: "MLA1055",
                        name: "Celulares y Smartphones"
                    }
                ]
            }
        ]
    },
    {
        id: "LINE",
        name: "Línea",
        type: "STRING",
        values: [
            {
                id: "58993",
                name: "iPhone"
            }
        ]
    },
    {
        id: "BRAND",
        name: "Marca",
        type: "STRING",
        values: [
            {
                id: "9344",
                name: "Apple"
            }
        ]
    }
];

const ParsedCategories = ["Celulares y Teléfonos", "Celulares y Smartphones"];

const ItemDetailsFromService = {
    id: "MLA635646082",
    site_id: "MLA",
    title: "Test Guestaltico Visomotor Para Niños Y Laminas Bender",
    subtitle: null,
    seller_id: 43320255,
    category_id: "MLA412445",
    official_store_id: null,
    price: 1600,
    base_price: 1600,
    original_price: null,
    currency_id: "ARS",
    initial_quantity: 419,
    available_quantity: 150,
    sold_quantity: 200,
    sale_terms: [],
    buying_mode: "buy_it_now",
    listing_type_id: "gold_special",
    start_time: "2016-09-19T17:59:47.000Z",
    stop_time: "2036-09-14T17:59:47.000Z",
    condition: "new",
    permalink: "https://articulo.mercadolibre.com.ar/MLA-635646082-test-guestaltico-visomotor-para-ninos-y-laminas-bender-_JM",
    thumbnail: "http://mla-s1-p.mlstatic.com/689200-MLA31042404742_062019-I.jpg",
    secure_thumbnail: "https://mla-s1-p.mlstatic.com/689200-MLA31042404742_062019-I.jpg",
    pictures: [
        {
            id: "689200-MLA31042404742_062019",
            url: "http://mla-s1-p.mlstatic.com/689200-MLA31042404742_062019-O.jpg",
            secure_url: "https://mla-s1-p.mlstatic.com/689200-MLA31042404742_062019-O.jpg",
            size: "489x283",
            max_size: "489x283",
            quality: ""
        }
    ],
    video_id: null,
    descriptions: [
        {
            id: "MLA635646082-1178482659"
        }
    ],
    accepts_mercadopago: true,
    non_mercado_pago_payment_methods: [],
    shipping: {
        mode: "me2",
        methods: [],
        tags: [
            "self_service_in"
        ],
        dimensions: null,
        local_pick_up: true,
        free_shipping: false,
        logistic_type: "cross_docking",
        store_pick_up: false
    },
    international_delivery_mode: "none",
    seller_address: {
        city: {
            name: "BARRIO NORTE"
        },
        state: {
            id: "AR-C",
            name: "Capital Federal"
        },
        country: {
            id: "AR",
            name: "Argentina"
        },
        search_location: {
            neighborhood: {
                id: "TUxBQkJBUjQwMDQ3MA",
                name: "Barrio Norte"
            },
            city: {
                id: "TUxBQ0NBUGZlZG1sYQ",
                name: "Capital Federal"
            },
            state: {
                id: "TUxBUENBUGw3M2E1",
                name: "Capital Federal"
            }
        },
        latitude: -34.597176,
        longitude: -58.389904,
        id: 122596787
    },
    seller_contact: null,
    location: {},
    geolocation: {
        latitude: -34.597176,
        longitude: -58.389904
    },
    coverage_areas: [],
    attributes: [
        {
            id: "AUTHOR",
            name: "Autor",
            value_id: null,
            value_name: "Koppitz y Bender",
            value_struct: null,
            values: [
                {
                    id: null,
                    name: "Koppitz y Bender",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "BOOK_GENRE",
            name: "Género del libro",
            value_id: "7538154",
            value_name: "Ciencias sociales y humanísticas",
            value_struct: null,
            values: [
                {
                    id: "7538154",
                    name: "Ciencias sociales y humanísticas",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "BOOK_TITLE",
            name: "Título del libro",
            value_id: null,
            value_name: "Test Guestaltico Visomotor Para Niños Y Laminas Bender",
            value_struct: null,
            values: [
                {
                    id: null,
                    name: "Test Guestaltico Visomotor Para Niños Y Laminas Bender",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "FORMAT",
            name: "Formato",
            value_id: "2132698",
            value_name: "Papel",
            value_struct: null,
            values: [
                {
                    id: "2132698",
                    name: "Papel",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "GTIN",
            name: "ISBN",
            value_id: null,
            value_name: "9789505000258",
            value_struct: null,
            values: [
                {
                    id: null,
                    name: "9789505000258",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "ITEM_CONDITION",
            name: "Condición del ítem",
            value_id: "2230284",
            value_name: "Nuevo",
            value_struct: null,
            values: [
                {
                    id: "2230284",
                    name: "Nuevo",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "LANGUAGE",
            name: "Idioma",
            value_id: "313886",
            value_name: "Español",
            value_struct: null,
            values: [
                {
                    id: "313886",
                    name: "Español",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "NARRATION_TYPE",
            name: "Tipo de narración",
            value_id: "7488907",
            value_name: "Manual",
            value_struct: null,
            values: [
                {
                    id: "7488907",
                    name: "Manual",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "PUBLICATION_YEAR",
            name: "Año de publicación",
            value_id: null,
            value_name: "2017",
            value_struct: null,
            values: [
                {
                    id: null,
                    name: "2017",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "PUBLISHER",
            name: "Editorial",
            value_id: null,
            value_name: "Paidos y Guadalupe",
            value_struct: null,
            values: [
                {
                    id: null,
                    name: "Paidos y Guadalupe",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        },
        {
            id: "SUBGENRES",
            name: "Subgéneros",
            value_id: "7538241",
            value_name: "Psicología",
            value_struct: null,
            values: [
                {
                    id: "7538241",
                    name: "Psicología",
                    struct: null
                }
            ],
            attribute_group_id: "OTHERS",
            attribute_group_name: "Otros"
        }
    ],
    warnings: [],
    listing_source: "",
    variations: [],
    status: "active",
    sub_status: [],
    tags: [
        "poor_quality_picture",
        "loyalty_discount_eligible",
        "immediate_payment",
        "cart_eligible"
    ],
    warranty: null,
    catalog_product_id: null,
    domain_id: "MLA-BOOKS",
    parent_item_id: null,
    differential_pricing: null,
    deal_ids: [],
    automatic_relist: false,
    date_created: "2016-09-19T17:59:47.000Z",
    last_updated: "2020-05-13T07:40:12.988Z",
    health: 0.77,
    catalog_listing: false
};

const ParsedItemDetails = {
    id: "MLA635646082",
    title: "Test Guestaltico Visomotor Para Niños Y Laminas Bender",
    price: {
        currency: "$",
        amount: 1600,
        decimals: 0
    },
    picture: "http://mla-s1-p.mlstatic.com/689200-MLA31042404742_062019-I.jpg",
    condition: "new",
    free_shipping: false,
    sold_quaranty: 150,
    description: ""
};

module.exports = {
    ResultItemsFromService,
    ParsedResultItems,
    FilterItemsFromService,
    ParsedCategories,
    ItemDetailsFromService,
    ParsedItemDetails,
}