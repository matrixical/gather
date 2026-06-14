export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const data = {
    "biomes": {
        "forest": {
            "name": "Forest",
            "color": "6bdb4a"
        },
        "desert": {
            "name": "Desert",
            "color": "ffda37"
        },
        "plains": {
            "name": "Plains",
            "color": "f8c479"
        },
        "swamp": {
            "name": "Swamp",
            "color": "269e48"
        },
        "jungle": {
            "name": "Jungle",
            "color": "1d5e37"
        },
        "tundra": {
            "name": "Tundra",
            "color": "d8e7f3"
        },
        "taiga": {
            "name": "Taiga",
            "color": "d1ddcc"
        },
        "fairyglade": {
            "name": "Fairy Glade",
            "color": "a2d887"
        },
        "badlands": {
            "name": "Badlands",
            "color": "f3611f"
        },
        "nuclear": {
            "name": "Nuclear",
            "color": "9f8d5d"
        },
        "oilfields": {
            "name": "Oil Fields",
            "color": "9f7847"
        },
        "volcanic": {
            "name": "Volcano",
            "color": "60609f"
        },
        "bamboogrove": {
            "name": "Bamboo Grove",
            "color": "41b04b"
        },
        "cherryblossom": {
            "name": "Cherry Blossom",
            "color": "b6f099"
        },
        "autumforest": {
            "name": "Autumn Forest",
            "color": "bbe440"
        },
        "orchard": {
            "name": "Orchard",
            "color": "40e491"
        },
        "crystalfields": {
            "name": "Crystal Fields",
            "color": "fff8ab"
        },
        "saltflats": {
            "name": "Salt Flats",
            "color": "fffef7"
        },
        "glacier": {
            "name": "Glacier",
            "color": "b7dcff"
        },
        "blossomvalley": {
            "name": "Blossom Valley",
            "color": "40e4cf"
        },
        "ocean": {
            "name": "Ocean",
            "color": "1e90ff"
        },
        "deepocean": {
            "name": "Deep Ocean",
            "color": "000080"
        },
        "coralreef": {
            "name": "Coral Reef",
            "color": "ff7f50"
        },
        "beach": {
            "name": "Beach",
            "color": "ffe383"
        },
        "rockyshore": {
            "name": "Rocky Shore",
            "color": "9b8873"
        }
    },
    "resources": {
        "tree_1": {
            "resource_type": 20,
            "type": "vegetation",
            "name": "Tree - Elm",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "tree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "tree_2": {
            "resource_type": 21,
            "type": "vegetation",
            "name": "Tree - Pine",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "tree_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "tree_3": {
            "resource_type": 22,
            "type": "vegetation",
            "name": "Tree - Fir",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "tree_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "tree_4": {
            "resource_type": 23,
            "type": "vegetation",
            "name": "Tree - Spruce",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "tree_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "birchtree_1": {
            "resource_type": 24,
            "type": "vegetation",
            "name": "Tree - Birch",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_birchlog_1",
                    "weight": 100
                },
                {
                    "item": "item_birchstick_1",
                    "weight": 50
                },
                {
                    "item": "item_birchbark_1",
                    "weight": 30
                },
                {
                    "item": "item_fallleaf_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "birchtree_1",
                "birchtree_2",
                "birchtree_3",
                "birchtree_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "tree_5": {
            "resource_type": 25,
            "type": "vegetation",
            "name": "Tree - Frozen Spruce",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_frozenstick_1",
                    "weight": 40
                },
                {
                    "item": "item_ice_1",
                    "weight": 20
                }
            ],
            "sprite_names": [
                "birchtree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "fruittree_1": {
            "resource_type": 26,
            "type": "vegetation",
            "name": "Apple Tree",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_apple_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "fruittree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "cactus_1": {
            "resource_type": 27,
            "type": "vegetation",
            "name": "Cactus",
            "hp": 100,
            "items_generated": [
                {
                    "item": "item_cactuslog_1",
                    "weight": 100
                },
                {
                    "item": "item_cactusflower_1",
                    "weight": 15
                }
            ],
            "sprite_names": [
                "cactus_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "cactus_2": {
            "resource_type": 28,
            "type": "vegetation",
            "name": "Cactus",
            "hp": 100,
            "items_generated": [
                {
                    "item": "item_cactuslog_1",
                    "weight": 100
                },
                {
                    "item": "item_cactusflower_1",
                    "weight": 15
                }
            ],
            "sprite_names": [
                "cactus_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "cactus_3": {
            "resource_type": 29,
            "type": "vegetation",
            "name": "Cactus",
            "hp": 100,
            "items_generated": [
                {
                    "item": "item_cactuslog_1",
                    "weight": 100
                },
                {
                    "item": "item_cactusflower_1",
                    "weight": 15
                }
            ],
            "sprite_names": [
                "cactus_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "cactus_4": {
            "resource_type": 30,
            "type": "vegetation",
            "name": "Cactus",
            "hp": 100,
            "items_generated": [
                {
                    "item": "item_cactusflower_1",
                    "weight": 100
                },
                {
                    "item": "item_cactuslog_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "cactus_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "rock_1": {
            "resource_type": 31,
            "type": "mineral",
            "name": "Small Rock",
            "hp": 100,
            "items_generated": [
                {
                    "item": "item_stone_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "rock_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "rock_2": {
            "resource_type": 32,
            "type": "mineral",
            "name": "Small Rock",
            "hp": 100,
            "items_generated": [
                {
                    "item": "item_stone_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "rock_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "snowrock_1": {
            "resource_type": 34,
            "type": "mineral",
            "name": "Snow Rock",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_stone_1",
                    "weight": 100
                },
                {
                    "item": "item_ice_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "snowrock_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "snowrock_2": {
            "resource_type": 35,
            "type": "mineral",
            "name": "Snow Rock",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_stone_1",
                    "weight": 100
                },
                {
                    "item": "item_ice_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "snowrock_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "drygrass_1": {
            "resource_type": 37,
            "type": "grasses",
            "name": "Dry Grass",
            "hp": 10,
            "items_generated": [
                {
                    "item": "item_drygrass_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "drygrass_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "drygrass_2": {
            "resource_type": 38,
            "type": "grasses",
            "name": "Dry Grass",
            "hp": 10,
            "items_generated": [
                {
                    "item": "item_drygrass_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "drygrass_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "drygrass_3": {
            "resource_type": 39,
            "type": "grasses",
            "name": "Dry Grass",
            "hp": 10,
            "items_generated": [
                {
                    "item": "item_flower_1",
                    "weight": 100
                },
                {
                    "item": "item_drygrass_1",
                    "weight": 50
                }
            ],
            "sprite_names": [
                "drygrass_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "drygrass_4": {
            "resource_type": 40,
            "type": "grasses",
            "name": "Dry Grass",
            "hp": 10,
            "items_generated": [
                {
                    "item": "item_flower_1",
                    "weight": 100
                },
                {
                    "item": "item_drygrass_1",
                    "weight": 50
                }
            ],
            "sprite_names": [
                "drygrass_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "grass_1": {
            "resource_type": 41,
            "type": "grasses",
            "name": "Grass",
            "hp": 5,
            "items_generated": [
                {
                    "item": "item_grass_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "grass_1",
                "grass_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "grass_2": {
            "resource_type": 42,
            "type": "grasses",
            "name": "Grass",
            "hp": 5,
            "items_generated": [
                {
                    "item": "item_fluff_1",
                    "weight": 100
                },
                {
                    "item": "item_grass_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "grass_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "wettree_1": {
            "resource_type": 43,
            "type": "vegetation",
            "name": "Wet Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_wetlog_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "wettree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "wettree_2": {
            "resource_type": 44,
            "type": "vegetation",
            "name": "Wet Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_wetlog_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "wettree_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "frozenbush_1": {
            "resource_type": 45,
            "type": "vegetation",
            "name": "Frozen Bush",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_frozenstick_1",
                    "weight": 100
                },
                {
                    "item": "item_frozenberry_1",
                    "weight": 20
                }
            ],
            "sprite_names": [
                "frozenbush_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "tundragrass_1": {
            "resource_type": 46,
            "type": "grasses",
            "name": "Tundra Grass",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_drygrass_1",
                    "weight": 100
                },
                {
                    "item": "item_frozengrass_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "tundragrass_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "tundragrass_2": {
            "resource_type": 47,
            "type": "grasses",
            "name": "Tundra Grass",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_frozengrass_1",
                    "weight": 100
                },
                {
                    "item": "item_drygrass_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "tundragrass_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "tundrarock_1": {
            "resource_type": 48,
            "type": "mineral",
            "name": "Tundra Rock",
            "hp": 200,
            "items_generated": [
                {
                    "item": "item_stone_1",
                    "weight": 100
                },
                {
                    "item": "item_ice_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "tundrarock_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "frozenberrybush_1": {
            "resource_type": 49,
            "type": "vegetation",
            "name": "Tundra Berry Bush",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_frozenberry_1",
                    "weight": 100
                },
                {
                    "item": "item_frozenstick_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "frozenberrybush_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "taigatree_1": {
            "resource_type": 50,
            "type": "vegetation",
            "name": "Taiga Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "taigatree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "taigatree_2": {
            "resource_type": 51,
            "type": "vegetation",
            "name": "Taiga Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "taigatree_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "taigatree_3": {
            "resource_type": 52,
            "type": "vegetation",
            "name": "Taiga Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_stick_1",
                    "weight": 100
                },
                {
                    "item": "item_log_1",
                    "weight": 50
                }
            ],
            "sprite_names": [
                "taigatree_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "taigarock_1": {
            "resource_type": 53,
            "type": "mineral",
            "name": "Taiga Rock",
            "hp": 200,
            "items_generated": [
                {
                    "item": "item_stone_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "taigarock_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "volcanicrock_1": {
            "resource_type": 54,
            "type": "mineral",
            "name": "Volcanic Rock",
            "hp": 400,
            "items_generated": [
                {
                    "item": "item_volcanicrock_1",
                    "weight": 100
                },
                {
                    "item": "item_lavadrop_1",
                    "weight": 20
                }
            ],
            "sprite_names": [
                "volcanicrock_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "volcanicrock2x2_1": {
            "resource_type": 55,
            "type": "mineral",
            "name": "Large Volcanic Rock",
            "hp": 400,
            "items_generated": [
                {
                    "item": "item_volcanicrock_1",
                    "weight": 100
                },
                {
                    "item": "item_lavadrop_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "volcanicrock2x2_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "volcanicrock_2": {
            "resource_type": 56,
            "type": "mineral",
            "name": "Volcanic Rock",
            "hp": 400,
            "items_generated": [
                {
                    "item": "item_lavadrop_1",
                    "weight": 100
                },
                {
                    "item": "item_volcanicrock_1",
                    "weight": 60
                }
            ],
            "sprite_names": [
                "volcanicrock_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "volcanicrock_3": {
            "resource_type": 57,
            "type": "mineral",
            "name": "Volcanic Rock",
            "hp": 400,
            "items_generated": [
                {
                    "item": "item_lavadrop_1",
                    "weight": 100
                },
                {
                    "item": "item_volcanicrock_1",
                    "weight": 60
                }
            ],
            "sprite_names": [
                "volcanicrock_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "bamboo_1": {
            "resource_type": 58,
            "type": "vegetation",
            "name": "Bamboo",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_bamboo_1",
                    "weight": 100
                },
                {
                    "item": "item_bambooflower_1",
                    "weight": 15
                }
            ],
            "sprite_names": [
                "bamboo_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "bamboo_2": {
            "resource_type": 59,
            "type": "vegetation",
            "name": "Bamboo",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_bamboo_1",
                    "weight": 100
                },
                {
                    "item": "item_bambooflower_1",
                    "weight": 15
                }
            ],
            "sprite_names": [
                "bamboo_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "leafplant_1": {
            "resource_type": 60,
            "type": "grasses",
            "name": "Leaf Plant",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_jungleleaf_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "leafplant_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "bambooplant_1": {
            "resource_type": 61,
            "type": "grasses",
            "name": "Bamboo Plant",
            "hp": 20,
            "items_generated": [
                {
                    "item": "item_bambooflower_1",
                    "weight": 100
                },
                {
                    "item": "item_bamboo_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "bambooplant_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "falltree_1": {
            "resource_type": 62,
            "type": "vegetation",
            "name": "Fall Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_fallleaf_1",
                    "weight": 100
                },
                {
                    "item": "item_log_1",
                    "weight": 60
                },
                {
                    "item": "item_stick_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "falltree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "cherrytree_1": {
            "resource_type": 63,
            "type": "vegetation",
            "name": "Cherry Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "cherrytree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "cherrytree_2": {
            "resource_type": 64,
            "type": "vegetation",
            "name": "Cherry Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "cherrytree_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "cherrytree_3": {
            "resource_type": 65,
            "type": "vegetation",
            "name": "Cherry Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "cherrytree_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "cherrytree_4": {
            "resource_type": 66,
            "type": "vegetation",
            "name": "Cherry Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_cherries",
                    "weight": 100
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 30
                },
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "cherrytree_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "sandrock_1": {
            "resource_type": 67,
            "type": "mineral",
            "name": "Sand Rock",
            "hp": 400,
            "items_generated": [
                {
                    "item": "item_rock_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "sandrock_1",
                "sandrock_2",
                "sandrock_3",
                "sandrock_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "oilcrystal2x2_1": {
            "resource_type": 71,
            "type": "mineral",
            "name": "Large Oil Crystal",
            "hp": 2000,
            "items_generated": [
                {
                    "item": "item_oil_1",
                    "weight": 100
                },
                {
                    "item": "item_oilcrystal_1",
                    "weight": 60
                }
            ],
            "sprite_names": [
                "oilcrystal2x2_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "oilcrystal_1": {
            "resource_type": 72,
            "type": "mineral",
            "name": "Oil Crystal",
            "hp": 2000,
            "items_generated": [
                {
                    "item": "item_oilcrystal_1",
                    "weight": 100
                },
                {
                    "item": "item_oil_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "oilcrystal_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "oilcrystal_2": {
            "resource_type": 73,
            "type": "mineral",
            "name": "Oil Crystal",
            "hp": 2000,
            "items_generated": [
                {
                    "item": "item_oilcrystal_1",
                    "weight": 100
                },
                {
                    "item": "item_oil_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "oilcrystal_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "saltrock_1": {
            "resource_type": 74,
            "type": "mineral",
            "name": "Salt Rock",
            "hp": 600,
            "items_generated": [
                {
                    "item": "item_salt_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "saltrock_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "saltrock_2": {
            "resource_type": 75,
            "type": "mineral",
            "name": "Salt Rock",
            "hp": 600,
            "items_generated": [
                {
                    "item": "item_salt_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "saltrock_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "pickleweed_1": {
            "resource_type": 76,
            "type": "vegetation",
            "name": "Pickle Weed",
            "hp": 80,
            "items_generated": [
                {
                    "item": "item_pickle_1",
                    "weight": 100
                },
                {
                    "item": "item_salt_1",
                    "weight": 20
                }
            ],
            "sprite_names": [
                "pickleweed_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "saltbush_1": {
            "resource_type": 77,
            "type": "vegetation",
            "name": "Salt Bush",
            "hp": 80,
            "items_generated": [
                {
                    "item": "item_stick_1",
                    "weight": 100
                },
                {
                    "item": "item_salt_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "saltbush_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "fairytree_1": {
            "resource_type": 78,
            "type": "vegetation",
            "name": "Fairy Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "fairytree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "fairytree_2": {
            "resource_type": 79,
            "type": "vegetation",
            "name": "Fairy Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "fairytree_2",
                "fairytree_2b"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "berrybush_1": {
            "resource_type": 80,
            "type": "grasses",
            "name": "Berry Bush",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_berries_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "berrybush_1",
                "berrybush_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "icerock_1": {
            "resource_type": 81,
            "type": "mineral",
            "name": "Ice Rock",
            "hp": 1000,
            "items_generated": [
                {
                    "item": "item_ice_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "icerock_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "icerock_2": {
            "resource_type": 82,
            "type": "mineral",
            "name": "Ice Rock",
            "hp": 1000,
            "items_generated": [
                {
                    "item": "item_ice_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "icerock_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "icerock_3": {
            "resource_type": 83,
            "type": "mineral",
            "name": "Ice Rock",
            "hp": 1000,
            "items_generated": [
                {
                    "item": "item_ice_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "icerock_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "icerock_4": {
            "resource_type": 84,
            "type": "mineral",
            "name": "Ice Rock",
            "hp": 1000,
            "items_generated": [
                {
                    "item": "item_ice_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "icerock_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "crystal_purple_1": {
            "resource_type": 85,
            "type": "mineral",
            "name": "Crystal - Purple",
            "hp": 1000,
            "items_generated": [
                {
                    "item": "item_crystalpurple_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "crystalpurple_1",
                "crystalpurple_2",
                "crystalpurple_3"
            ],
            "color_light": "#ff6b6b",
            "color_dark": "#cc2222"
        },
        "redrock_1": {
            "resource_type": 86,
            "type": "mineral",
            "name": "Red Rock",
            "hp": 2000,
            "items_generated": [
                {
                    "item": "item_redrock_1",
                    "weight": 100
                },
                {
                    "item": "item_stone_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "redrock_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "redrock_2": {
            "resource_type": 87,
            "type": "mineral",
            "name": "Red Rock",
            "hp": 2000,
            "items_generated": [
                {
                    "item": "item_redrock_1",
                    "weight": 100
                },
                {
                    "item": "item_stone_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "redrock_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "redrock_3": {
            "resource_type": 88,
            "type": "mineral",
            "name": "Red Rock",
            "hp": 2000,
            "items_generated": [
                {
                    "item": "item_redrock_1",
                    "weight": 100
                },
                {
                    "item": "item_stone_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "redrock_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mintbush_1": {
            "resource_type": 89,
            "type": "grasses",
            "name": "Mint Bush",
            "hp": 80,
            "items_generated": [
                {
                    "item": "item_mintleaf_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mintbush_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_1": {
            "resource_type": 90,
            "type": "vegetation",
            "name": "Simple Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_2": {
            "resource_type": 91,
            "type": "vegetation",
            "name": "Pink Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_2",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_3": {
            "resource_type": 92,
            "type": "vegetation",
            "name": "Sandy Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_3",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_4": {
            "resource_type": 93,
            "type": "vegetation",
            "name": "Green Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_4",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_5": {
            "resource_type": 94,
            "type": "vegetation",
            "name": "Swamp Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_5",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_5"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_6": {
            "resource_type": 95,
            "type": "vegetation",
            "name": "Frost Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_6",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_6"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_7": {
            "resource_type": 96,
            "type": "vegetation",
            "name": "Speckled Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_7",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_7"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_8": {
            "resource_type": 97,
            "type": "vegetation",
            "name": "Lava Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_8",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_8"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_9": {
            "resource_type": 98,
            "type": "vegetation",
            "name": "Bamboo Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_9",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_9"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_10": {
            "resource_type": 99,
            "type": "vegetation",
            "name": "Cherry Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_10",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_10"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_11": {
            "resource_type": 100,
            "type": "vegetation",
            "name": "Rocky Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_11",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_11"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_12": {
            "resource_type": 101,
            "type": "vegetation",
            "name": "Fairy Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_12",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_12"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_13": {
            "resource_type": 102,
            "type": "vegetation",
            "name": "Ice Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_13",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_13"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_14": {
            "resource_type": 103,
            "type": "vegetation",
            "name": "Oil Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_14",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_14"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_15": {
            "resource_type": 104,
            "type": "vegetation",
            "name": "Pickled Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_15",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_15"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_16": {
            "resource_type": 105,
            "type": "vegetation",
            "name": "Desert Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_16",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_16"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_17": {
            "resource_type": 106,
            "type": "vegetation",
            "name": "Canyon Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_17",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_17"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_18": {
            "resource_type": 107,
            "type": "vegetation",
            "name": "Nuclear Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_18",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_18"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "mushroom_patch_19": {
            "resource_type": 108,
            "type": "vegetation",
            "name": "Crystal Mushroom Patch",
            "hp": 0,
            "collectible": true,
            "respawn_seconds": 10,
            "items_generated": [
                {
                    "item": "item_mushroom_19",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "mushroom_patch_19"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "crystal_mint_1": {
            "resource_type": 109,
            "type": "mineral",
            "name": "Crystal - Mint",
            "hp": 4000,
            "items_generated": [
                {
                    "item": "item_crystalmint_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "crystalmint_1",
                "crystalmint_2"
            ],
            "color_light": "#90ee90",
            "color_dark": "#228b22"
        },
        "crystal_red_1": {
            "resource_type": 110,
            "type": "mineral",
            "name": "Crystal - Red",
            "hp": 4000,
            "items_generated": [
                {
                    "item": "item_crystalred_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "crystalred_1",
                "crystalred_2"
            ],
            "color_light": "#ff6b6b",
            "color_dark": "#cc2222"
        },
        "palmtree_1": {
            "resource_type": 111,
            "type": "vegetation",
            "name": "Palm Tree",
            "hp": 100,
            "items_generated": [
                {
                    "item": "item_coconut_1",
                    "weight": 100
                },
                {
                    "item": "item_log_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "palmtree_1",
                "palmtree_2",
                "palmtree_3",
                "palmtree_4"
            ],
            "color_light": "#ff6b6b",
            "color_dark": "#cc2222"
        },
        "sandstone_1": {
            "resource_type": 112,
            "type": "mineral",
            "name": "Sand Stone",
            "hp": 400,
            "items_generated": [
                {
                    "item": "item_sandstone_1",
                    "weight": 100
                },
                {
                    "item": "item_stone_1",
                    "weight": 30
                }
            ],
            "sprite_names": [
                "sandstone_1",
                "sandstone_2",
                "sandstone_3",
                "sandstone_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "blossomtree_1": {
            "resource_type": 113,
            "type": "vegetation",
            "name": "Blossom Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "blossomtree_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "blossomtree_2": {
            "resource_type": 114,
            "type": "vegetation",
            "name": "Blossom Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "blossomtree_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "blossomtree_3": {
            "resource_type": 115,
            "type": "vegetation",
            "name": "Blossom Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "blossomtree_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "blossomtree_4": {
            "resource_type": 116,
            "type": "vegetation",
            "name": "Blossom Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "blossomtree_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "blossomtree_5": {
            "resource_type": 117,
            "type": "vegetation",
            "name": "Blossom Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "blossomtree_5"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "blossomtree_6": {
            "resource_type": 118,
            "type": "vegetation",
            "name": "Blossom Tree",
            "hp": 40,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                },
                {
                    "item": "item_pinkpetal_1",
                    "weight": 25
                }
            ],
            "sprite_names": [
                "blossomtree_6"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "fruittree_2": {
            "resource_type": 119,
            "type": "vegetation",
            "name": "Orange Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "fruittree_2"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "fruittree_3": {
            "resource_type": 120,
            "type": "vegetation",
            "name": "Lemon Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "fruittree_3"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "fruittree_4": {
            "resource_type": 121,
            "type": "vegetation",
            "name": "Lime Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "fruittree_4"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "fruittree_5": {
            "resource_type": 122,
            "type": "vegetation",
            "name": "Plum Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "fruittree_5"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "palmtree_5": {
            "resource_type": 123,
            "type": "vegetation",
            "name": "Banana Tree",
            "hp": 60,
            "items_generated": [
                {
                    "item": "item_log_1",
                    "weight": 100
                },
                {
                    "item": "item_stick_1",
                    "weight": 40
                }
            ],
            "sprite_names": [
                "palmtree_5"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "rock2x2_1": {
            "resource_type": 124,
            "type": "mineral",
            "name": "Large Rock",
            "hp": 100,
            "items_generated": [],
            "sprite_names": [
                "rock2x2_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "darkrock_1": {
            "resource_type": 125,
            "type": "mineral",
            "name": "Small Dark Rock",
            "hp": 200,
            "items_generated": [
                {
                    "item": "item_darkrock_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "darkrock_1",
                "darkrock_1b"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "darkrock2x2_1": {
            "resource_type": 126,
            "type": "mineral",
            "name": "Large Dark Rock",
            "hp": 200,
            "items_generated": [
                {
                    "item": "item_darkrock_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "darkrock2x2_1"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "turnip_1": {
            "resource_type": 127,
            "type": "grasses",
            "name": "Turnip",
            "hp": 10,
            "items_generated": [
                {
                    "item": "item_turnip_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "turnip_1",
                "turnip_1b"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        },
        "wheat_1": {
            "resource_type": 128,
            "type": "grasses",
            "name": "Wheat",
            "hp": 10,
            "items_generated": [
                {
                    "item": "item_wheat_1",
                    "weight": 100
                }
            ],
            "sprite_names": [
                "wheat_1",
                "wheat_1b",
                "wheat_1c"
            ],
            "color_light": "#9d9d9d",
            "color_dark": "#444149"
        }
    },
    "items": {
        "axe": {
            "item_type": 6,
            "name": "Axe",
            "sprite_name": "tool_axe_1",
            "revenue": 10,
            "desc": "The main tool.  Use wisely",
            "sub_desc": "A reliable hatchet for chopping wood from trees and shrubs.  Upgrade it to swing harder and faster, felling larger trees in fewer strikes and tearing through thick bark with ease.",
            "tool_data": {
                "animation": "axe",
                "base_damage": 10,
                "damage_map": {},
                "harvest_category": 1,
                "level_required": 1,
                "upgrade_coin_costs": [
                    10,
                    100,
                    1000,
                    2000,
                    4000,
                    8000,
                    16000,
                    32000,
                    64000,
                    125000
                ],
                "upgrade_xp_rewards": [
                    100,
                    200,
                    400,
                    600,
                    800,
                    1000,
                    1200,
                    1400,
                    1800,
                    2000
                ],
                "upgrade_damages": [
                    5.0,
                    7.5,
                    11.25,
                    16.88,
                    25.31,
                    37.97,
                    56.95,
                    85.43,
                    128.14,
                    192.22
                ]
            }
        },
        "pickaxe": {
            "item_type": 7,
            "name": "Pickaxe",
            "sprite_name": "tool_pickaxe_1",
            "revenue": 10,
            "desc": "Great for hacking on some stone.",
            "sub_desc": "The miner's best friend, used to break stone, ore, and other mineral deposits.  Upgrades sharpen the head and reinforce the haft, letting you chip away at harder veins and deeper rock with every blow.",
            "tool_data": {
                "animation": "pickaxe",
                "base_damage": 10,
                "damage_map": {},
                "harvest_category": 2,
                "level_required": 2,
                "upgrade_coin_costs": [
                    600,
                    1200,
                    2000,
                    4000,
                    8000,
                    16000,
                    32000,
                    64000,
                    125000,
                    250000
                ],
                "upgrade_xp_rewards": [
                    400,
                    600,
                    800,
                    1000,
                    1200,
                    1400,
                    1600,
                    1800,
                    2000,
                    3000
                ],
                "upgrade_damages": [
                    5.0,
                    7.5,
                    11.25,
                    16.88,
                    25.31,
                    37.97,
                    56.95,
                    85.43,
                    128.14,
                    192.22
                ]
            }
        },
        "bow": {
            "item_type": 8,
            "name": "Bow",
            "sprite_name": "tool_bow_1",
            "revenue": 10,
            "desc": "Attack enemies from afar.",
            "sub_desc": "A trusty bow for striking enemies from a safe distance.  Upgrade it to fire arrows with greater force, dealing significantly more damage and pushing back even armored foes with each shot.",
            "tool_data": {
                "animation": "bow",
                "base_damage": 10,
                "damage_map": {},
                "harvest_category": 0,
                "level_required": 20,
                "upgrade_coin_costs": [
                    50000,
                    100000,
                    200000,
                    400000,
                    600000,
                    800000,
                    1000000,
                    1500000,
                    2000000,
                    4000000
                ],
                "upgrade_xp_rewards": [
                    2000,
                    3000,
                    4000,
                    5000,
                    6000,
                    7000,
                    8000,
                    9000,
                    10000,
                    11000
                ],
                "upgrade_damages": [
                    8.0,
                    12.0,
                    18.0,
                    27.0,
                    40.5,
                    60.75,
                    91.12,
                    136.69,
                    205.03,
                    307.55
                ]
            }
        },
        "rod": {
            "item_type": 9,
            "name": "Rod",
            "sprite_name": "tool_rod_1",
            "revenue": 10,
            "desc": "Use to catch fish.",
            "sub_desc": "A sturdy fishing rod for pulling supper out of any pond, river, or lake.  Upgrades reinforce the line and tip, letting you reel in larger, rarer fish without snapping the line under their weight.",
            "tool_data": {
                "animation": "rod",
                "base_damage": 10,
                "damage_map": {},
                "harvest_category": 0,
                "level_required": 8,
                "upgrade_coin_costs": [
                    8000,
                    16000,
                    32000,
                    64000,
                    125000,
                    250000,
                    500000,
                    1000000,
                    2000000,
                    5000000
                ],
                "upgrade_xp_rewards": [
                    1000,
                    1200,
                    1400,
                    1600,
                    2000,
                    2200,
                    2400,
                    2600,
                    2800,
                    3000
                ],
                "upgrade_damages": [
                    2.0,
                    3.0,
                    4.5,
                    6.75,
                    10.12,
                    15.19,
                    22.78,
                    34.17,
                    51.26,
                    76.89
                ]
            }
        },
        "hammer": {
            "item_type": 10,
            "name": "Hammer",
            "sprite_name": "tool_hammer_1",
            "revenue": 10,
            "desc": "Use to break down walls and structures.",
            "sub_desc": "A heavy hammer built to demolish walls and break apart placed structures.  Upgrades add weight and momentum to each swing, smashing through reinforced builds in fewer hits and saving precious time during a raid.",
            "tool_data": {
                "animation": "hammer",
                "base_damage": 10,
                "damage_map": {},
                "harvest_category": 0,
                "level_required": 40,
                "upgrade_coin_costs": [
                    10000,
                    20000,
                    40000,
                    80000,
                    160000,
                    320000,
                    640000,
                    1250000,
                    2500000,
                    5000000
                ],
                "upgrade_xp_rewards": [
                    1000,
                    2000,
                    4000,
                    8000,
                    16000,
                    32000,
                    64000,
                    128000,
                    256000,
                    500000
                ],
                "upgrade_damages": [
                    5.0,
                    7.5,
                    11.25,
                    16.88,
                    25.31,
                    37.97,
                    56.95,
                    85.43,
                    128.14,
                    192.22
                ],
                "hidden": true
            }
        },
        "shovel": {
            "item_type": 11,
            "name": "Shovel",
            "sprite_name": "tool_shovel_1",
            "revenue": 10,
            "desc": "Use to dig and move earth.",
            "sub_desc": "A spade for digging through soil, sand, and packed earth.  Upgrades let you cut into harder ground like gravel and clay with each scoop, uncovering deeper deposits and clearing terrain much faster.",
            "tool_data": {
                "animation": "shovel",
                "base_damage": 10,
                "damage_map": {},
                "harvest_category": 3,
                "level_required": 30,
                "upgrade_coin_costs": [
                    100000,
                    200000,
                    400000,
                    800000,
                    1600000,
                    3200000,
                    6400000,
                    1000000,
                    2000000,
                    4000000
                ],
                "upgrade_xp_rewards": [
                    5000,
                    8000,
                    12000,
                    14000,
                    16000,
                    18000,
                    20000,
                    22000,
                    24000,
                    26000
                ],
                "upgrade_damages": [
                    2.0,
                    3.0,
                    4.5,
                    6.75,
                    10.12,
                    15.19,
                    22.78,
                    34.17,
                    51.26,
                    76.89
                ]
            }
        },
        "sword": {
            "item_type": 12,
            "name": "Sword",
            "sprite_name": "tool_sword_1",
            "revenue": 10,
            "desc": "A sharp blade for close combat.",
            "sub_desc": "A sharp blade for cutting down enemies in close quarters.  Upgrades make the edge keener and the swings stronger, dealing more damage per strike and knocking back even heavier enemies that would otherwise shrug off a hit.",
            "tool_data": {
                "animation": "sword",
                "base_damage": 10,
                "damage_map": {},
                "harvest_category": 0,
                "level_required": 4,
                "upgrade_coin_costs": [
                    2000,
                    4000,
                    8000,
                    16000,
                    32000,
                    64000,
                    125000,
                    250000,
                    500000,
                    1000000
                ],
                "upgrade_xp_rewards": [
                    1000,
                    1200,
                    1500,
                    1800,
                    2000,
                    3000,
                    4000,
                    5000,
                    6000,
                    8000
                ],
                "upgrade_damages": [
                    8.0,
                    12.0,
                    18.0,
                    27.0,
                    40.5,
                    60.75,
                    91.12,
                    136.69,
                    205.03,
                    307.55
                ]
            }
        },
        "item_log_1": {
            "item_type": 20,
            "name": "Log",
            "sprite_name": "item_log_1",
            "revenue": 4,
            "desc": "Found by harvesting various tree types."
        },
        "item_stick_1": {
            "item_type": 21,
            "name": "Stick",
            "sprite_name": "item_stick_1",
            "revenue": 2,
            "desc": "Found by harvesting various tree types."
        },
        "item_birchlog_1": {
            "item_type": 22,
            "name": "Birch Log",
            "sprite_name": "item_birchlog_1",
            "revenue": 4,
            "desc": "Found by harvesting Birch trees."
        },
        "item_birchstick_1": {
            "item_type": 23,
            "name": "Birch Stick",
            "sprite_name": "item_birchstick_1",
            "revenue": 2,
            "desc": "Found by harvesting Birch trees."
        },
        "item_birchbark_1": {
            "item_type": 24,
            "name": "Birch Bark",
            "sprite_name": "item_birchbark_1",
            "revenue": 4,
            "desc": "Found by harvesting Birch trees."
        },
        "item_ice_1": {
            "item_type": 25,
            "name": "Ice",
            "sprite_name": "item_ice_1",
            "revenue": 4,
            "desc": "Found by harvesting Frozen things."
        },
        "item_cactuslog_1": {
            "item_type": 26,
            "name": "Cactus Log",
            "sprite_name": "item_cactuslog_1",
            "revenue": 4,
            "desc": "Found by harvesting Cactii."
        },
        "item_cactusflower_1": {
            "item_type": 27,
            "name": "Cactus Flower",
            "sprite_name": "item_cactusflower_1",
            "revenue": 3,
            "desc": "Found by harvesting Cactii."
        },
        "item_stone_1": {
            "item_type": 28,
            "name": "Basic Stone",
            "sprite_name": "item_stone_1",
            "revenue": 20,
            "desc": "Raw stone, can be refined into masonry blocks."
        },
        "item_drygrass_1": {
            "item_type": 29,
            "name": "Dry Grass",
            "sprite_name": "item_drygrass_1",
            "revenue": 2,
            "desc": "A bundle of Dry Grass."
        },
        "item_flower_1": {
            "item_type": 30,
            "name": "Dry Flower",
            "sprite_name": "item_flower_1",
            "revenue": 3,
            "desc": "A dry, orange flower. Regrows quickly."
        },
        "item_grass_1": {
            "item_type": 31,
            "name": "Grass",
            "sprite_name": "item_grass_1",
            "revenue": 2,
            "desc": "A bundle of grass."
        },
        "item_wetlog_1": {
            "item_type": 32,
            "name": "Wet Log",
            "sprite_name": "item_wetlog_1",
            "revenue": 8,
            "desc": "Must be Dried."
        },
        "item_fluff_1": {
            "item_type": 33,
            "name": "Fluff",
            "sprite_name": "item_fluff_1",
            "revenue": 3,
            "desc": "Organic, fluffy material."
        },
        "item_frozenstick_1": {
            "item_type": 34,
            "name": "Frozen Stick",
            "sprite_name": "item_frozenstick_1",
            "revenue": 2,
            "desc": "Stick from frozen Trees and Shrubs."
        },
        "item_frozengrass_1": {
            "item_type": 35,
            "name": "Frozen Grass",
            "sprite_name": "item_frozengrass_1",
            "revenue": 6,
            "desc": "Really cold grass."
        },
        "item_frozenberry_1": {
            "item_type": 36,
            "name": "Frozen Berry",
            "sprite_name": "item_frozenberry_1",
            "revenue": 8,
            "desc": "Really cold berry.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_volcanicrock_1": {
            "item_type": 37,
            "name": "Volcanic Rock",
            "sprite_name": "item_volcanicrock_1",
            "revenue": 57,
            "desc": "A different type of rock."
        },
        "item_lavadrop_1": {
            "item_type": 38,
            "name": "Lava Drop",
            "sprite_name": "item_lavadrop_1",
            "revenue": 91,
            "desc": "A drop of lava that isn't cooling down!?"
        },
        "item_bamboo_1": {
            "item_type": 39,
            "name": "Bamboo",
            "sprite_name": "item_bamboo_1",
            "revenue": 46,
            "desc": "A section of Bamboo."
        },
        "item_jungleleaf_1": {
            "item_type": 40,
            "name": "Jungle Leaf",
            "sprite_name": "item_jungleleaf_1",
            "revenue": 46,
            "desc": "A large, broad leaf."
        },
        "item_bambooflower_1": {
            "item_type": 41,
            "name": "Bamboo Flower",
            "sprite_name": "item_bambooflower_1",
            "revenue": 34,
            "desc": "A bright red, fragrant flower."
        },
        "item_fallleaf_1": {
            "item_type": 42,
            "name": "Dried Leaf",
            "sprite_name": "item_fallleaf_1",
            "revenue": 46,
            "desc": "A dried out leaf."
        },
        "item_pinkpetal_1": {
            "item_type": 43,
            "name": "Pink Petal",
            "sprite_name": "item_pinkpetal_1",
            "revenue": 46,
            "desc": "A soft pink petal."
        },
        "item_cherries": {
            "item_type": 44,
            "name": "Cherries",
            "sprite_name": "item_cherries",
            "revenue": 46,
            "desc": "Sweet, red cherries.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_sandstone_1": {
            "item_type": 45,
            "name": "Sandstone",
            "sprite_name": "item_sandstone_1",
            "revenue": 173,
            "desc": "A soft stone."
        },
        "item_oilcrystal_1": {
            "item_type": 46,
            "name": "Oil Crystal",
            "sprite_name": "item_oilcrystal_1",
            "revenue": 500,
            "desc": "A strange oily crystal."
        },
        "item_oil_1": {
            "item_type": 47,
            "name": "Oil Drop",
            "sprite_name": "item_oil_1",
            "revenue": 57,
            "desc": "A dark oily substance."
        },
        "item_salt_1": {
            "item_type": 48,
            "name": "Salt",
            "sprite_name": "item_salt_1",
            "revenue": 103,
            "desc": "Salt in granular form. Measured in 'pinches'."
        },
        "item_pickle_1": {
            "item_type": 49,
            "name": "Pickle",
            "sprite_name": "item_pickle_1",
            "revenue": 103,
            "desc": "Salty, crunchy, pickled fruit.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_berries_1": {
            "item_type": 50,
            "name": "Poison Berry",
            "sprite_name": "item_berries_1",
            "revenue": 20,
            "desc": "Poisonous orange berries.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_1": {
            "item_type": 51,
            "name": "Simple Mushroom",
            "sprite_name": "item_mushroom_1",
            "revenue": 2,
            "desc": "These mushrooms are found mainly in the Forest, and regrow at a RAPID rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_2": {
            "item_type": 52,
            "name": "Pink Mushroom",
            "sprite_name": "item_mushroom_2",
            "revenue": 2,
            "desc": "These mushrooms are found mainly in the Forest, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_3": {
            "item_type": 53,
            "name": "Sandy Mushroom",
            "sprite_name": "item_mushroom_3",
            "revenue": 2,
            "desc": "These mushrooms are found mainly in the Desert, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_4": {
            "item_type": 54,
            "name": "Green Mushroom",
            "sprite_name": "item_mushroom_4",
            "revenue": 2,
            "desc": "These mushrooms are found mainly in the Plains, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_5": {
            "item_type": 55,
            "name": "Swamp Mushroom",
            "sprite_name": "item_mushroom_5",
            "revenue": 6,
            "desc": "These mushrooms are found mainly in the Swamp, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_6": {
            "item_type": 56,
            "name": "Frost Mushroom",
            "sprite_name": "item_mushroom_6",
            "revenue": 64,
            "desc": "These mushrooms are found mainly on the Tundra, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_7": {
            "item_type": 57,
            "name": "Speckled Mushroom",
            "sprite_name": "item_mushroom_7",
            "revenue": 6,
            "desc": "These mushrooms are found mainly in the Taiga regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_8": {
            "item_type": 58,
            "name": "Lava Mushroom",
            "sprite_name": "item_mushroom_8",
            "revenue": 28,
            "desc": "These mushrooms are found mainly in Volcanic regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_9": {
            "item_type": 59,
            "name": "Bamboo Mushroom",
            "sprite_name": "item_mushroom_9",
            "revenue": 28,
            "desc": "These mushrooms are found mainly in the Bamboo jungle, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_10": {
            "item_type": 60,
            "name": "Cherry Mushroom",
            "sprite_name": "item_mushroom_10",
            "revenue": 28,
            "desc": "These mushrooms are found mainly in the Cherry Blossom Regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_11": {
            "item_type": 61,
            "name": "Rocky Mushroom",
            "sprite_name": "item_mushroom_11",
            "revenue": 64,
            "desc": "These mushrooms are found mainly in Rocky regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_12": {
            "item_type": 62,
            "name": "Fairy Mushroom",
            "sprite_name": "item_mushroom_12",
            "revenue": 13,
            "desc": "These mushrooms are found mainly in Fairy Glade, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_13": {
            "item_type": 63,
            "name": "Ice Mushroom",
            "sprite_name": "item_mushroom_13",
            "revenue": 64,
            "desc": "These mushrooms are found mainly in Frozen regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_14": {
            "item_type": 64,
            "name": "Oil Mushroom",
            "sprite_name": "item_mushroom_14",
            "revenue": 28,
            "desc": "These mushrooms are found mainly in Oil Crystal Fields, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_15": {
            "item_type": 65,
            "name": "Pickled Mushroom",
            "sprite_name": "item_mushroom_15",
            "revenue": 64,
            "desc": "These mushrooms are found mainly on Salt Flats, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_crystalpurple_1": {
            "item_type": 66,
            "name": "Purple Crystal",
            "sprite_name": "item_crystalpurple_1",
            "revenue": 200,
            "desc": "These crystal shards are mined from Purple Crystals."
        },
        "item_mushroom_16": {
            "item_type": 67,
            "name": "Desert Mushroom",
            "sprite_name": "item_mushroom_16",
            "revenue": 13,
            "desc": "These mushrooms are found mainly in Nuclear regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_17": {
            "item_type": 68,
            "name": "Canyon Mushroom",
            "sprite_name": "item_mushroom_17",
            "revenue": 13,
            "desc": "These mushrooms are found mainly in Nuclear regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_18": {
            "item_type": 69,
            "name": "Nuclear Mushroom",
            "sprite_name": "item_mushroom_18",
            "revenue": 13,
            "desc": "These mushrooms are found mainly in Nuclear regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_mushroom_19": {
            "item_type": 70,
            "name": "Crystal Mushroom",
            "sprite_name": "item_mushroom_19",
            "revenue": 64,
            "desc": "These mushrooms are found mainly in Crystal regions, and regrow at a SLOW rate when picked or eaten by wildlife.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_crystalmint_1": {
            "item_type": 71,
            "name": "Mint Crystal",
            "sprite_name": "item_crystalmint_1",
            "revenue": 600,
            "desc": "These mint-colored crystal shards are mined from Mint Crystals found in desert regions."
        },
        "item_crystalred_1": {
            "item_type": 72,
            "name": "Red Crystal",
            "sprite_name": "item_crystalred_1",
            "revenue": 1000,
            "desc": "These red-colored crystal shards are mined from Red Crystals found in plains regions."
        },
        "item_coconut_1": {
            "item_type": 73,
            "name": "Coconut",
            "sprite_name": "item_coconut_1",
            "revenue": 9,
            "desc": "Knock them from Palm Trees. Full of Coconut Milk!",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_rock_1": {
            "item_type": 74,
            "name": "Rock",
            "sprite_name": "item_rock_1",
            "revenue": 288,
            "desc": "Small rocks found scattered around the world."
        },
        "item_redrock_1": {
            "item_type": 75,
            "name": "Red Rock",
            "sprite_name": "item_redrock_1",
            "revenue": 18,
            "desc": "Small red rocks found scattered around desert and canyon regions."
        },
        "item_mintleaf_1": {
            "item_type": 76,
            "name": "Mint Leaf",
            "sprite_name": "item_mintleaf_1",
            "revenue": 20,
            "desc": "A fragrant mint leaf, often found near Mint Crystals."
        },
        "item_apple_1": {
            "item_type": 77,
            "name": "Apple",
            "sprite_name": "item_apple_1",
            "revenue": 14,
            "desc": "A juicy red apple, freshly picked from an apple tree.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_web_1": {
            "item_type": 78,
            "name": "Web",
            "sprite_name": "item_web_1",
            "revenue": 20,
            "desc": "Sticky web substance dropped from spiders."
        },
        "item_spiderleg_1": {
            "item_type": 79,
            "name": "Spider Leg",
            "sprite_name": "item_spiderleg_1",
            "revenue": 20,
            "desc": "An entire robotic spider leg."
        },
        "item_scrapmetal_1": {
            "item_type": 80,
            "name": "Scrap Metal",
            "sprite_name": "item_scrapmetal_1",
            "revenue": 20,
            "desc": "A scrap of alien metal."
        },
        "item_tech_1": {
            "item_type": 81,
            "name": "Alien Tech",
            "sprite_name": "item_tech_1",
            "revenue": 20,
            "desc": "A functioning scrap of alien technology. Worth investigating..."
        },
        "item_spidervenom_1": {
            "item_type": 82,
            "name": "Alien Spider Venom",
            "sprite_name": "item_spidervenom_1",
            "revenue": 20,
            "desc": "A toxic drop of alien spider venom. Careful with that!"
        },
        "item_bolt_1": {
            "item_type": 83,
            "name": "Bolt",
            "sprite_name": "item_bolt_1",
            "revenue": 4,
            "desc": "An alien robot part."
        },
        "item_gear_1": {
            "item_type": 84,
            "name": "Gear",
            "sprite_name": "item_gear_1",
            "revenue": 20,
            "desc": "An alien robot part."
        },
        "item_spring_1": {
            "item_type": 85,
            "name": "Spring",
            "sprite_name": "item_spring_1",
            "revenue": 200,
            "desc": "An alien robot part."
        },
        "item_slime_1": {
            "item_type": 86,
            "name": "Green Slime",
            "sprite_name": "item_slime_1",
            "revenue": 4,
            "desc": "A sticky green substance."
        },
        "item_slime_2": {
            "item_type": 87,
            "name": "Pink Slime",
            "sprite_name": "item_slime_2",
            "revenue": 20,
            "desc": "A sticky pink substance."
        },
        "item_slime_3": {
            "item_type": 88,
            "name": "Blue Slime",
            "sprite_name": "item_slime_3",
            "revenue": 60,
            "desc": "A sticky blue substance."
        },
        "item_backpack_1": {
            "item_type": 89,
            "name": "Backpack",
            "sprite_name": "item_backpack_1",
            "revenue": 30,
            "desc": "A backpack."
        },
        "item_darkrock_1": {
            "item_type": 90,
            "name": "Dark Rock",
            "sprite_name": "item_darkrock_1",
            "revenue": 50,
            "desc": "A dark, hard rock."
        },
        "item_turnip_1": {
            "item_type": 91,
            "name": "Turnip",
            "sprite_name": "item_turnip_1",
            "revenue": 20,
            "desc": "A fresh turnip.",
            "consumable": true,
            "consume_attribute": "stamina",
            "consume_value": 1
        },
        "item_wheat_1": {
            "item_type": 92,
            "name": "Wheat",
            "sprite_name": "item_wheat_1",
            "revenue": 20,
            "desc": "A stalk of wheat."
        },
        "item_red_potion_1": {
            "item_type": 93,
            "name": "Blood Potion",
            "sprite_name": "item_red_potion_1",
            "revenue": 1000,
            "desc": "Doubles your damage for 10 minutes.",
            "consumable": true
        },
        "item_green_potion_1": {
            "item_type": 94,
            "name": "Health Potion",
            "sprite_name": "item_green_potion_1",
            "revenue": 1000,
            "desc": "Restores your health.",
            "consumable": true
        },
        "item_blue_potion_1": {
            "item_type": 95,
            "name": "Stamina Potion",
            "sprite_name": "item_blue_potion_1",
            "revenue": 1000,
            "desc": "Restores your stamina.",
            "consumable": true
        },
        "item_fish_1": {
            "item_type": 96,
            "name": "Brown Chub",
            "sprite_name": "item_fish_1",
            "revenue": 5,
            "desc": "A small, common, brown fish. "
        },
        "item_fish_2": {
            "item_type": 97,
            "name": "Red Chub",
            "sprite_name": "item_fish_2",
            "revenue": 10,
            "desc": "A small, common, red fish. "
        },
        "item_fish_3": {
            "item_type": 98,
            "name": "Blue Chub",
            "sprite_name": "item_fish_3",
            "revenue": 15,
            "desc": "A small, common, blue fish. "
        },
        "item_fish_4": {
            "item_type": 99,
            "name": "Grey Chub",
            "sprite_name": "item_fish_4",
            "revenue": 20,
            "desc": "A small, rare, grey fish. "
        },
        "item_fish_5": {
            "item_type": 100,
            "name": "Yellow Chub",
            "sprite_name": "item_fish_5",
            "revenue": 25,
            "desc": "A small, rare, yellow fish. "
        },
        "item_fish_6": {
            "item_type": 101,
            "name": "Grey Dart",
            "sprite_name": "item_fish_6",
            "revenue": 10,
            "desc": "A large, common, grey fish. "
        },
        "item_fish_7": {
            "item_type": 102,
            "name": "Salmon Dart",
            "sprite_name": "item_fish_7",
            "revenue": 20,
            "desc": "A large, common, pink fish. "
        },
        "item_fish_8": {
            "item_type": 103,
            "name": "Blue Dart",
            "sprite_name": "item_fish_8",
            "revenue": 30,
            "desc": "A large, common, blue fish. "
        },
        "item_fish_9": {
            "item_type": 104,
            "name": "Green Dart",
            "sprite_name": "item_fish_9",
            "revenue": 40,
            "desc": "A large, rare, green fish. "
        },
        "item_fish_10": {
            "item_type": 105,
            "name": "Sky Dart",
            "sprite_name": "item_fish_10",
            "revenue": 50,
            "desc": "A large, rare, blue and purple fish. "
        },
        "item_fish_11": {
            "item_type": 106,
            "name": "Green Minnow",
            "sprite_name": "item_fish_11",
            "revenue": 20,
            "desc": "A medium, common, green fish. "
        },
        "item_fish_12": {
            "item_type": 107,
            "name": "Mint Minnow",
            "sprite_name": "item_fish_12",
            "revenue": 40,
            "desc": "A medium, common, minty fish. "
        },
        "item_fish_13": {
            "item_type": 108,
            "name": "Pink Minnow",
            "sprite_name": "item_fish_13",
            "revenue": 60,
            "desc": "A medium, common, pink fish. "
        },
        "item_fish_14": {
            "item_type": 109,
            "name": "Tan Minnow",
            "sprite_name": "item_fish_14",
            "revenue": 80,
            "desc": "A medium, rare, tan fish. "
        },
        "item_fish_15": {
            "item_type": 110,
            "name": "Indigo Minnow",
            "sprite_name": "item_fish_15",
            "revenue": 100,
            "desc": "A medium, rare, indigo fish. "
        },
        "item_fish_16": {
            "item_type": 111,
            "name": "Blue Reelfish",
            "sprite_name": "item_fish_16",
            "revenue": 50,
            "desc": "A small, common, striped blue fish. "
        },
        "item_fish_17": {
            "item_type": 112,
            "name": "Orange Reelfish",
            "sprite_name": "item_fish_17",
            "revenue": 100,
            "desc": "A small, common, striped orange fish. "
        },
        "item_fish_18": {
            "item_type": 113,
            "name": "Red Reelfish",
            "sprite_name": "item_fish_18",
            "revenue": 150,
            "desc": "A small, common, striped red fish. "
        },
        "item_fish_19": {
            "item_type": 114,
            "name": "Purple Reelfish",
            "sprite_name": "item_fish_19",
            "revenue": 200,
            "desc": "A small, rare, striped purple fish. "
        },
        "item_fish_20": {
            "item_type": 115,
            "name": "Teal Reelfish",
            "sprite_name": "item_fish_20",
            "revenue": 250,
            "desc": "A small, rare, striped teal fish. "
        },
        "item_fish_21": {
            "item_type": 116,
            "name": "Yellow Sunfish",
            "sprite_name": "item_fish_21",
            "revenue": 100,
            "desc": "A thin, common, yellow fish. "
        },
        "item_fish_22": {
            "item_type": 117,
            "name": "Mint Sunfish",
            "sprite_name": "item_fish_22",
            "revenue": 200,
            "desc": "A thin, common, minty fish. "
        },
        "item_fish_23": {
            "item_type": 118,
            "name": "Flame Sunfish",
            "sprite_name": "item_fish_23",
            "revenue": 300,
            "desc": "A thin, rare, orange fish. "
        },
        "item_fish_24": {
            "item_type": 119,
            "name": "Lavender Sunfish",
            "sprite_name": "item_fish_24",
            "revenue": 400,
            "desc": "A thin, rare, purple fish. "
        },
        "item_fish_25": {
            "item_type": 120,
            "name": "Berry Sunfish",
            "sprite_name": "item_fish_25",
            "revenue": 500,
            "desc": "A thin, legendary, red fish with blue spots. "
        },
        "item_fish_26": {
            "item_type": 121,
            "name": "Amber Fin",
            "sprite_name": "item_fish_26",
            "revenue": 200,
            "desc": "A thick, common, amber fish. "
        },
        "item_fish_27": {
            "item_type": 122,
            "name": "Emerald Fin",
            "sprite_name": "item_fish_27",
            "revenue": 400,
            "desc": "A thick, common, emerald fish. "
        },
        "item_fish_28": {
            "item_type": 123,
            "name": "Azure Fin",
            "sprite_name": "item_fish_28",
            "revenue": 600,
            "desc": "A thick, rare, blue and yellow fish. "
        },
        "item_fish_29": {
            "item_type": 124,
            "name": "Magenta Fin",
            "sprite_name": "item_fish_29",
            "revenue": 800,
            "desc": "A thick, rare, magenta fish. "
        },
        "item_fish_30": {
            "item_type": 125,
            "name": "Frozen Fin",
            "sprite_name": "item_fish_30",
            "revenue": 1000,
            "desc": "A thick, legendary, ice water fish. "
        }
    },
    "entities": {
        "ENTITY_SCOUT_TOWER": {
            "name": "Scout Tower",
            "description": "Establishes communication from the mothership to this region."
        },
        "ENTITY_SPECIMEN_COLLECTOR": {
            "name": "Specimen Collector",
            "description": "Drop for collections"
        },
        "ENTITY_TELEPORTER": {
            "name": "Teleporter",
            "description": "Instantly transport to other regions.",
            "min_player_level": 1
        },
        "ENTITY_TERMINAL": {
            "name": "Terminal",
            "description": "Access your inventory and manage resources.",
            "min_player_level": 1
        },
        "ENTITY_REWARDS_DESK": {
            "name": "Rewards Desk",
            "description": "Claim your rewards and bonuses here."
        },
        "ENTITY_UPGRADES_SHOP": {
            "name": "Upgrades Shop",
            "description": "Purchase upgrades and enhancements here."
        }
    },
    "enemies": {
        "spider_0": {
            "enemy_type": 0,
            "name": "Mini Spider",
            "items_generated": [
                {
                    "item": "item_bolt_1",
                    "weight": 100
                },
                {
                    "item": "item_gear_1",
                    "weight": 20
                },
                {
                    "item": "item_spring_1",
                    "weight": 1
                }
            ]
        },
        "spider_1": {
            "enemy_type": 1,
            "name": "Regular Spider",
            "items_generated": [
                {
                    "item": "item_bolt_1",
                    "weight": 100
                },
                {
                    "item": "item_gear_1",
                    "weight": 20
                },
                {
                    "item": "item_spring_1",
                    "weight": 1
                }
            ]
        },
        "spider_2": {
            "enemy_type": 2,
            "name": "Floating Spider",
            "items_generated": [
                {
                    "item": "item_bolt_1",
                    "weight": 100
                },
                {
                    "item": "item_gear_1",
                    "weight": 20
                },
                {
                    "item": "item_spring_1",
                    "weight": 1
                }
            ]
        },
        "spider_3": {
            "enemy_type": 3,
            "name": "Boss Spider",
            "items_generated": [
                {
                    "item": "item_bolt_1",
                    "weight": 100
                },
                {
                    "item": "item_gear_1",
                    "weight": 20
                },
                {
                    "item": "item_spring_1",
                    "weight": 1
                },
                {
                    "item": "item_spiderleg_1",
                    "weight": 1
                }
            ]
        },
        "slime_1": {
            "enemy_type": 4,
            "name": "Green Slime",
            "items_generated": [
                {
                    "item": "item_slime_1",
                    "weight": 100
                }
            ]
        },
        "slime_2": {
            "enemy_type": 5,
            "name": "Pink Slime",
            "items_generated": [
                {
                    "item": "item_slime_2",
                    "weight": 100
                }
            ]
        },
        "slime_3": {
            "enemy_type": 6,
            "name": "Blue Slime",
            "items_generated": [
                {
                    "item": "item_slime_3",
                    "weight": 100
                }
            ]
        },
        "spider_4": {
            "enemy_type": 7,
            "name": "Tech Spider",
            "items_generated": [
                {
                    "item": "item_bolt_1",
                    "weight": 100
                },
                {
                    "item": "item_gear_1",
                    "weight": 20
                },
                {
                    "item": "item_spring_1",
                    "weight": 1
                }
            ]
        },
        "spider_5": {
            "enemy_type": 8,
            "name": "Laser Spider",
            "items_generated": []
        }
    },
    "fish": {
        "item_fish_1": {
            "family": "Chub",
            "rarity": "common",
            "size_category": "small",
            "biomes": [
                "BIOME_SWAMP",
                "BIOME_BEACH",
                "BIOME_PLAINS"
            ],
            "weight_min_kg": 0.1,
            "weight_max_kg": 0.4,
            "length_min_cm": 6.0,
            "length_max_cm": 14.0,
            "catch_difficulty": 1,
            "preferred_bait": "Worm",
            "time_of_day": "Any",
            "depth": "Surface",
            "activity": "Sluggish",
            "base_xp": 4,
            "notes": "Schools in shallow muddy water; a beginner angler's first catch."
        },
        "item_fish_2": {
            "family": "Chub",
            "rarity": "common",
            "size_category": "small",
            "biomes": [
                "BIOME_CORALREEF",
                "BIOME_BEACH",
                "BIOME_OCEAN"
            ],
            "weight_min_kg": 0.1,
            "weight_max_kg": 0.4,
            "length_min_cm": 6.0,
            "length_max_cm": 14.0,
            "catch_difficulty": 2,
            "preferred_bait": "Worm",
            "time_of_day": "Day",
            "depth": "Surface",
            "activity": "Active",
            "base_xp": 6,
            "notes": "Flashes of red along sun-warmed shallows."
        },
        "item_fish_3": {
            "family": "Chub",
            "rarity": "common",
            "size_category": "small",
            "biomes": [
                "BIOME_OCEAN",
                "BIOME_CORALREEF",
                "BIOME_ROCKYSHORE"
            ],
            "weight_min_kg": 0.1,
            "weight_max_kg": 0.5,
            "length_min_cm": 7.0,
            "length_max_cm": 15.0,
            "catch_difficulty": 2,
            "preferred_bait": "Insect",
            "time_of_day": "Day",
            "depth": "Surface",
            "activity": "Active",
            "base_xp": 8,
            "notes": "Darts through reef shadows in tight schools."
        },
        "item_fish_4": {
            "family": "Chub",
            "rarity": "rare",
            "size_category": "small",
            "biomes": [
                "BIOME_ROCKYSHORE",
                "BIOME_DEEPOCEAN"
            ],
            "weight_min_kg": 0.2,
            "weight_max_kg": 0.6,
            "length_min_cm": 8.0,
            "length_max_cm": 16.0,
            "catch_difficulty": 5,
            "preferred_bait": "Shrimp",
            "time_of_day": "Dusk",
            "depth": "Mid",
            "activity": "Active",
            "base_xp": 18,
            "notes": "Camouflaged against pebble beds; spooks easily."
        },
        "item_fish_5": {
            "family": "Chub",
            "rarity": "rare",
            "size_category": "small",
            "biomes": [
                "BIOME_BEACH",
                "BIOME_SALTFLATS",
                "BIOME_CORALREEF"
            ],
            "weight_min_kg": 0.2,
            "weight_max_kg": 0.6,
            "length_min_cm": 8.0,
            "length_max_cm": 16.0,
            "catch_difficulty": 5,
            "preferred_bait": "Shrimp",
            "time_of_day": "Dawn",
            "depth": "Surface",
            "activity": "Active",
            "base_xp": 22,
            "notes": "Prized for its golden scales; surfaces at first light."
        },
        "item_fish_6": {
            "family": "Dart",
            "rarity": "common",
            "size_category": "large",
            "biomes": [
                "BIOME_DEEPOCEAN",
                "BIOME_ROCKYSHORE",
                "BIOME_OCEAN"
            ],
            "weight_min_kg": 2.0,
            "weight_max_kg": 5.0,
            "length_min_cm": 30.0,
            "length_max_cm": 50.0,
            "catch_difficulty": 3,
            "preferred_bait": "Minnow Bait",
            "time_of_day": "Any",
            "depth": "Mid",
            "activity": "Active",
            "base_xp": 12,
            "notes": "The workhorse predator of cold currents."
        },
        "item_fish_7": {
            "family": "Dart",
            "rarity": "common",
            "size_category": "large",
            "biomes": [
                "BIOME_OCEAN",
                "BIOME_GLACIER",
                "BIOME_TUNDRA"
            ],
            "weight_min_kg": 2.5,
            "weight_max_kg": 6.0,
            "length_min_cm": 35.0,
            "length_max_cm": 55.0,
            "catch_difficulty": 4,
            "preferred_bait": "Minnow Bait",
            "time_of_day": "Dawn",
            "depth": "Mid",
            "activity": "Aggressive",
            "base_xp": 16,
            "notes": "Runs upstream from glacial melt to spawn."
        },
        "item_fish_8": {
            "family": "Dart",
            "rarity": "common",
            "size_category": "large",
            "biomes": [
                "BIOME_OCEAN",
                "BIOME_DEEPOCEAN"
            ],
            "weight_min_kg": 3.0,
            "weight_max_kg": 6.5,
            "length_min_cm": 35.0,
            "length_max_cm": 58.0,
            "catch_difficulty": 4,
            "preferred_bait": "Squid",
            "time_of_day": "Day",
            "depth": "Mid",
            "activity": "Aggressive",
            "base_xp": 20,
            "notes": "A strong fighter that prefers open water."
        },
        "item_fish_9": {
            "family": "Dart",
            "rarity": "rare",
            "size_category": "large",
            "biomes": [
                "BIOME_SWAMP",
                "BIOME_JUNGLE",
                "BIOME_BAMBOOGROVE"
            ],
            "weight_min_kg": 3.5,
            "weight_max_kg": 7.0,
            "length_min_cm": 38.0,
            "length_max_cm": 60.0,
            "catch_difficulty": 6,
            "preferred_bait": "Frog Lure",
            "time_of_day": "Night",
            "depth": "Mid",
            "activity": "Aggressive",
            "base_xp": 32,
            "notes": "Lurks under root tangles in murky water."
        },
        "item_fish_10": {
            "family": "Dart",
            "rarity": "rare",
            "size_category": "large",
            "biomes": [
                "BIOME_BLOSSOMVALLEY",
                "BIOME_OCEAN"
            ],
            "weight_min_kg": 3.5,
            "weight_max_kg": 8.0,
            "length_min_cm": 40.0,
            "length_max_cm": 65.0,
            "catch_difficulty": 7,
            "preferred_bait": "Squid",
            "time_of_day": "Dusk",
            "depth": "Surface",
            "activity": "Aggressive",
            "base_xp": 40,
            "notes": "Iridescent scales shift purple to blue in sunset light."
        },
        "item_fish_11": {
            "family": "Minnow",
            "rarity": "common",
            "size_category": "medium",
            "biomes": [
                "BIOME_SWAMP",
                "BIOME_JUNGLE",
                "BIOME_BAMBOOGROVE"
            ],
            "weight_min_kg": 0.5,
            "weight_max_kg": 1.5,
            "length_min_cm": 15.0,
            "length_max_cm": 25.0,
            "catch_difficulty": 3,
            "preferred_bait": "Insect",
            "time_of_day": "Day",
            "depth": "Mid",
            "activity": "Active",
            "base_xp": 14,
            "notes": "Common in slow river bends and pond edges."
        },
        "item_fish_12": {
            "family": "Minnow",
            "rarity": "common",
            "size_category": "medium",
            "biomes": [
                "BIOME_FAIRYGLADE",
                "BIOME_CHERRYBLOSSOM",
                "BIOME_BLOSSOMVALLEY"
            ],
            "weight_min_kg": 0.5,
            "weight_max_kg": 1.5,
            "length_min_cm": 15.0,
            "length_max_cm": 26.0,
            "catch_difficulty": 3,
            "preferred_bait": "Insect",
            "time_of_day": "Day",
            "depth": "Surface",
            "activity": "Active",
            "base_xp": 16,
            "notes": "Glints like a fresh leaf when it surfaces."
        },
        "item_fish_13": {
            "family": "Minnow",
            "rarity": "common",
            "size_category": "medium",
            "biomes": [
                "BIOME_CHERRYBLOSSOM",
                "BIOME_BLOSSOMVALLEY",
                "BIOME_ORCHARD"
            ],
            "weight_min_kg": 0.6,
            "weight_max_kg": 1.6,
            "length_min_cm": 16.0,
            "length_max_cm": 27.0,
            "catch_difficulty": 4,
            "preferred_bait": "Bread",
            "time_of_day": "Dawn",
            "depth": "Surface",
            "activity": "Active",
            "base_xp": 18,
            "notes": "Schools beneath drifting petals each spring."
        },
        "item_fish_14": {
            "family": "Minnow",
            "rarity": "rare",
            "size_category": "medium",
            "biomes": [
                "BIOME_BEACH",
                "BIOME_PLAINS",
                "BIOME_SALTFLATS"
            ],
            "weight_min_kg": 0.8,
            "weight_max_kg": 1.8,
            "length_min_cm": 18.0,
            "length_max_cm": 28.0,
            "catch_difficulty": 6,
            "preferred_bait": "Shrimp",
            "time_of_day": "Dusk",
            "depth": "Mid",
            "activity": "Active",
            "base_xp": 28,
            "notes": "Hugs the seabed; nearly invisible against sand."
        },
        "item_fish_15": {
            "family": "Minnow",
            "rarity": "rare",
            "size_category": "medium",
            "biomes": [
                "BIOME_DEEPOCEAN",
                "BIOME_OCEAN"
            ],
            "weight_min_kg": 0.8,
            "weight_max_kg": 2.0,
            "length_min_cm": 18.0,
            "length_max_cm": 30.0,
            "catch_difficulty": 7,
            "preferred_bait": "Glow Lure",
            "time_of_day": "Night",
            "depth": "Deep",
            "activity": "Active",
            "base_xp": 34,
            "notes": "Phosphorescent flecks shimmer along its sides at depth."
        },
        "item_fish_16": {
            "family": "Reelfish",
            "rarity": "common",
            "size_category": "small",
            "biomes": [
                "BIOME_OCEAN",
                "BIOME_CORALREEF"
            ],
            "weight_min_kg": 0.2,
            "weight_max_kg": 0.7,
            "length_min_cm": 8.0,
            "length_max_cm": 16.0,
            "catch_difficulty": 4,
            "preferred_bait": "Shrimp",
            "time_of_day": "Day",
            "depth": "Mid",
            "activity": "Active",
            "base_xp": 20,
            "notes": "Striped sides flash a blue blur as it darts."
        },
        "item_fish_17": {
            "family": "Reelfish",
            "rarity": "common",
            "size_category": "small",
            "biomes": [
                "BIOME_CORALREEF",
                "BIOME_BADLANDS",
                "BIOME_BEACH"
            ],
            "weight_min_kg": 0.2,
            "weight_max_kg": 0.7,
            "length_min_cm": 8.0,
            "length_max_cm": 16.0,
            "catch_difficulty": 4,
            "preferred_bait": "Shrimp",
            "time_of_day": "Day",
            "depth": "Surface",
            "activity": "Active",
            "base_xp": 24,
            "notes": "Thrives in warm, mineral-rich pools."
        },
        "item_fish_18": {
            "family": "Reelfish",
            "rarity": "common",
            "size_category": "small",
            "biomes": [
                "BIOME_CORALREEF",
                "BIOME_VOLCANIC"
            ],
            "weight_min_kg": 0.2,
            "weight_max_kg": 0.8,
            "length_min_cm": 9.0,
            "length_max_cm": 17.0,
            "catch_difficulty": 5,
            "preferred_bait": "Shrimp",
            "time_of_day": "Day",
            "depth": "Mid",
            "activity": "Aggressive",
            "base_xp": 28,
            "notes": "Tolerates warmer water near volcanic vents."
        },
        "item_fish_19": {
            "family": "Reelfish",
            "rarity": "rare",
            "size_category": "small",
            "biomes": [
                "BIOME_DEEPOCEAN",
                "BIOME_NUCLEAR"
            ],
            "weight_min_kg": 0.3,
            "weight_max_kg": 0.9,
            "length_min_cm": 10.0,
            "length_max_cm": 18.0,
            "catch_difficulty": 7,
            "preferred_bait": "Glow Lure",
            "time_of_day": "Night",
            "depth": "Deep",
            "activity": "Aggressive",
            "base_xp": 40,
            "notes": "Faintly luminescent; thrives in stranger waters."
        },
        "item_fish_20": {
            "family": "Reelfish",
            "rarity": "rare",
            "size_category": "small",
            "biomes": [
                "BIOME_CORALREEF",
                "BIOME_OCEAN",
                "BIOME_BLOSSOMVALLEY"
            ],
            "weight_min_kg": 0.3,
            "weight_max_kg": 0.9,
            "length_min_cm": 10.0,
            "length_max_cm": 18.0,
            "catch_difficulty": 7,
            "preferred_bait": "Crystal Lure",
            "time_of_day": "Dawn",
            "depth": "Mid",
            "activity": "Aggressive",
            "base_xp": 50,
            "notes": "Hypnotic striping; difficult to track underwater."
        },
        "item_fish_21": {
            "family": "Sunfish",
            "rarity": "common",
            "size_category": "thin",
            "biomes": [
                "BIOME_OCEAN",
                "BIOME_BEACH",
                "BIOME_SALTFLATS"
            ],
            "weight_min_kg": 0.3,
            "weight_max_kg": 1.0,
            "length_min_cm": 12.0,
            "length_max_cm": 22.0,
            "catch_difficulty": 3,
            "preferred_bait": "Insect",
            "time_of_day": "Day",
            "depth": "Surface",
            "activity": "Sluggish",
            "base_xp": 20,
            "notes": "Basks near the surface on warm afternoons."
        },
        "item_fish_22": {
            "family": "Sunfish",
            "rarity": "common",
            "size_category": "thin",
            "biomes": [
                "BIOME_FAIRYGLADE",
                "BIOME_BLOSSOMVALLEY",
                "BIOME_BAMBOOGROVE"
            ],
            "weight_min_kg": 0.3,
            "weight_max_kg": 1.0,
            "length_min_cm": 12.0,
            "length_max_cm": 22.0,
            "catch_difficulty": 4,
            "preferred_bait": "Insect",
            "time_of_day": "Day",
            "depth": "Surface",
            "activity": "Sluggish",
            "base_xp": 26,
            "notes": "A peaceful pondwater drifter."
        },
        "item_fish_23": {
            "family": "Sunfish",
            "rarity": "rare",
            "size_category": "thin",
            "biomes": [
                "BIOME_VOLCANIC",
                "BIOME_BADLANDS"
            ],
            "weight_min_kg": 0.4,
            "weight_max_kg": 1.2,
            "length_min_cm": 14.0,
            "length_max_cm": 24.0,
            "catch_difficulty": 7,
            "preferred_bait": "Fire Lure",
            "time_of_day": "Day",
            "depth": "Surface",
            "activity": "Aggressive",
            "base_xp": 50,
            "notes": "Said to be born from cooled lava streams."
        },
        "item_fish_24": {
            "family": "Sunfish",
            "rarity": "rare",
            "size_category": "thin",
            "biomes": [
                "BIOME_FAIRYGLADE",
                "BIOME_CHERRYBLOSSOM"
            ],
            "weight_min_kg": 0.4,
            "weight_max_kg": 1.2,
            "length_min_cm": 14.0,
            "length_max_cm": 24.0,
            "catch_difficulty": 7,
            "preferred_bait": "Crystal Lure",
            "time_of_day": "Dusk",
            "depth": "Surface",
            "activity": "Active",
            "base_xp": 55,
            "notes": "Petals seem to gather around it as it swims."
        },
        "item_fish_25": {
            "family": "Sunfish",
            "rarity": "legendary",
            "size_category": "thin",
            "biomes": [
                "BIOME_FAIRYGLADE",
                "BIOME_BLOSSOMVALLEY"
            ],
            "weight_min_kg": 0.5,
            "weight_max_kg": 1.5,
            "length_min_cm": 15.0,
            "length_max_cm": 26.0,
            "catch_difficulty": 9,
            "preferred_bait": "Crystal Lure",
            "time_of_day": "Dawn",
            "depth": "Surface",
            "activity": "Active",
            "base_xp": 120,
            "notes": "Legendary \u2014 red with bright blue spots; surfaces only at first dawn."
        },
        "item_fish_26": {
            "family": "Fin",
            "rarity": "common",
            "size_category": "thick",
            "biomes": [
                "BIOME_OILFIELDS",
                "BIOME_AUTUMFOREST",
                "BIOME_ORCHARD"
            ],
            "weight_min_kg": 1.0,
            "weight_max_kg": 3.0,
            "length_min_cm": 20.0,
            "length_max_cm": 32.0,
            "catch_difficulty": 4,
            "preferred_bait": "Bread",
            "time_of_day": "Day",
            "depth": "Mid",
            "activity": "Sluggish",
            "base_xp": 24,
            "notes": "Honey-toned scales; hardy in low-quality water."
        },
        "item_fish_27": {
            "family": "Fin",
            "rarity": "common",
            "size_category": "thick",
            "biomes": [
                "BIOME_JUNGLE",
                "BIOME_SWAMP",
                "BIOME_BAMBOOGROVE"
            ],
            "weight_min_kg": 1.2,
            "weight_max_kg": 3.5,
            "length_min_cm": 22.0,
            "length_max_cm": 35.0,
            "catch_difficulty": 5,
            "preferred_bait": "Frog Lure",
            "time_of_day": "Dusk",
            "depth": "Mid",
            "activity": "Active",
            "base_xp": 30,
            "notes": "A powerful swimmer in dense river bends."
        },
        "item_fish_28": {
            "family": "Fin",
            "rarity": "rare",
            "size_category": "thick",
            "biomes": [
                "BIOME_OCEAN",
                "BIOME_DEEPOCEAN",
                "BIOME_CORALREEF"
            ],
            "weight_min_kg": 2.0,
            "weight_max_kg": 4.5,
            "length_min_cm": 28.0,
            "length_max_cm": 40.0,
            "catch_difficulty": 7,
            "preferred_bait": "Squid",
            "time_of_day": "Day",
            "depth": "Mid",
            "activity": "Aggressive",
            "base_xp": 60,
            "notes": "Blue body banded with yellow; prized open-water trophy."
        },
        "item_fish_29": {
            "family": "Fin",
            "rarity": "rare",
            "size_category": "thick",
            "biomes": [
                "BIOME_CHERRYBLOSSOM",
                "BIOME_FAIRYGLADE",
                "BIOME_BLOSSOMVALLEY"
            ],
            "weight_min_kg": 2.0,
            "weight_max_kg": 5.0,
            "length_min_cm": 30.0,
            "length_max_cm": 42.0,
            "catch_difficulty": 8,
            "preferred_bait": "Crystal Lure",
            "time_of_day": "Dusk",
            "depth": "Mid",
            "activity": "Aggressive",
            "base_xp": 75,
            "notes": "Vibrant magenta hides surprisingly fast strikes."
        },
        "item_fish_30": {
            "family": "Fin",
            "rarity": "legendary",
            "size_category": "thick",
            "biomes": [
                "BIOME_GLACIER",
                "BIOME_TUNDRA"
            ],
            "weight_min_kg": 3.0,
            "weight_max_kg": 6.0,
            "length_min_cm": 35.0,
            "length_max_cm": 45.0,
            "catch_difficulty": 10,
            "preferred_bait": "Ice Lure",
            "time_of_day": "Night",
            "depth": "Deep",
            "activity": "Aggressive",
            "base_xp": 200,
            "notes": "Legendary \u2014 frost-rimed scales; only takes line through cut ice."
        }
    },
    "rank_xp_requirements": [
        100,
        150,
        200,
        300,
        400,
        500,
        650,
        800,
        1000,
        1200,
        1500,
        1800,
        2100,
        2500,
        3000,
        3500,
        4000,
        4500,
        5000,
        5500,
        6000,
        7000,
        8000,
        9000,
        10000,
        11000,
        12000,
        13000,
        14000,
        15000,
        16000,
        17000,
        18000,
        19000,
        20000,
        22000,
        24000,
        26000,
        28000,
        30000,
        32000,
        35000,
        38000,
        41000,
        44000,
        47000,
        50000,
        55000,
        60000
    ],
    "backpack_upgrades": {
        "base_capacity": 50,
        "base_texture_path": "res://farmer/gfx/main/backpack1.png",
        "levels": [
            {
                "level": 2,
                "capacity": 100,
                "cost": 100,
                "xp": 25,
                "required_rank": 1,
                "texture_path": "res://farmer/gfx/main/backpack2.png"
            },
            {
                "level": 3,
                "capacity": 150,
                "cost": 500,
                "xp": 50,
                "required_rank": 2,
                "texture_path": "res://farmer/gfx/main/backpack3.png"
            },
            {
                "level": 4,
                "capacity": 200,
                "cost": 1000,
                "xp": 100,
                "required_rank": 4,
                "texture_path": "res://farmer/gfx/main/backpack4.png"
            },
            {
                "level": 5,
                "capacity": 250,
                "cost": 5000,
                "xp": 175,
                "required_rank": 6,
                "texture_path": "res://farmer/gfx/main/backpack5.png"
            },
            {
                "level": 6,
                "capacity": 300,
                "cost": 10000,
                "xp": 300,
                "required_rank": 8,
                "texture_path": "res://farmer/gfx/main/backpack6.png"
            }
        ]
    },
    "stamina_station": {
        "base_regen_duration_seconds": 10,
        "upgrades": [
            {
                "from_level": 1,
                "to_level": 2,
                "recharge_multiplier": 2,
                "requirements": {
                    "item_log_1": 1000,
                    "item_stone_1": 100
                }
            }
        ]
    }
}