const Dr=[{id:1,name:"Chicken Breast (Grilled)",brand:"Generic",category:"protein",emoji:"🍗",serving:"100g",calories:165,protein:31,carbs:0,fat:3.6,fiber:0,sugar:0,sodium:74,cholesterol:85},{id:2,name:"Chicken Thigh (Skin-on)",brand:"Generic",category:"protein",emoji:"🍗",serving:"100g",calories:209,protein:26,carbs:0,fat:11,fiber:0,sugar:0,sodium:84,cholesterol:130},{id:3,name:"Chicken Wings",brand:"Generic",category:"protein",emoji:"🍗",serving:"4 wings (100g)",calories:203,protein:30,carbs:0,fat:8,fiber:0,sugar:0,sodium:77,cholesterol:89},{id:4,name:"Turkey Breast (Roasted)",brand:"Generic",category:"protein",emoji:"🦃",serving:"100g",calories:135,protein:30,carbs:0,fat:1,fiber:0,sugar:0,sodium:46,cholesterol:83},{id:5,name:"Salmon (Atlantic, cooked)",brand:"Generic",category:"protein",emoji:"🐟",serving:"100g",calories:208,protein:20,carbs:0,fat:13,fiber:0,sugar:0,sodium:59,cholesterol:55},{id:6,name:"Tuna (canned in water)",brand:"Generic",category:"protein",emoji:"🐟",serving:"1 can (142g)",calories:179,protein:39,carbs:0,fat:1.4,fiber:0,sugar:0,sodium:468,cholesterol:60},{id:7,name:"Shrimp (cooked)",brand:"Generic",category:"protein",emoji:"🦐",serving:"100g",calories:99,protein:24,carbs:.2,fat:.3,fiber:0,sugar:0,sodium:111,cholesterol:189},{id:8,name:"Beef Sirloin (lean)",brand:"Generic",category:"protein",emoji:"🥩",serving:"100g",calories:183,protein:27,carbs:0,fat:8,fiber:0,sugar:0,sodium:56,cholesterol:82},{id:9,name:"Ground Beef (80/20)",brand:"Generic",category:"protein",emoji:"🥩",serving:"100g",calories:254,protein:17,carbs:0,fat:20,fiber:0,sugar:0,sodium:66,cholesterol:80},{id:10,name:"Ground Beef (90/10)",brand:"Generic",category:"protein",emoji:"🥩",serving:"100g",calories:176,protein:20,carbs:0,fat:10,fiber:0,sugar:0,sodium:66,cholesterol:70},{id:11,name:"Pork Chop (boneless)",brand:"Generic",category:"protein",emoji:"🥩",serving:"100g",calories:231,protein:25,carbs:0,fat:14,fiber:0,sugar:0,sodium:62,cholesterol:72},{id:12,name:"Bacon (cooked)",brand:"Generic",category:"protein",emoji:"🥓",serving:"3 slices (35g)",calories:161,protein:12,carbs:.4,fat:12,fiber:0,sugar:0,sodium:581,cholesterol:40},{id:13,name:"Ham (sliced)",brand:"Generic",category:"protein",emoji:"🍖",serving:"100g",calories:145,protein:21,carbs:1.5,fat:6,fiber:0,sugar:0,sodium:1203,cholesterol:57},{id:14,name:"Lamb Chop",brand:"Generic",category:"protein",emoji:"🍖",serving:"100g",calories:258,protein:26,carbs:0,fat:17,fiber:0,sugar:0,sodium:72,cholesterol:97},{id:15,name:"Tilapia (baked)",brand:"Generic",category:"protein",emoji:"🐟",serving:"100g",calories:128,protein:26,carbs:0,fat:2.7,fiber:0,sugar:0,sodium:56,cholesterol:57},{id:16,name:"Cod (baked)",brand:"Generic",category:"protein",emoji:"🐟",serving:"100g",calories:105,protein:23,carbs:0,fat:.9,fiber:0,sugar:0,sodium:78,cholesterol:55},{id:17,name:"Sardines (canned)",brand:"Generic",category:"protein",emoji:"🐟",serving:"1 can (92g)",calories:191,protein:23,carbs:0,fat:11,fiber:0,sugar:0,sodium:307,cholesterol:131},{id:18,name:"Egg (whole, large)",brand:"Generic",category:"protein",emoji:"🥚",serving:"1 egg (50g)",calories:72,protein:6.3,carbs:.4,fat:5,fiber:0,sugar:.2,sodium:71,cholesterol:186},{id:19,name:"Egg Whites",brand:"Generic",category:"protein",emoji:"🥚",serving:"3 whites (99g)",calories:51,protein:11,carbs:.7,fat:.2,fiber:0,sugar:.6,sodium:164,cholesterol:0},{id:20,name:"Tofu (firm)",brand:"Generic",category:"protein",emoji:"🧈",serving:"100g",calories:76,protein:8,carbs:1.9,fat:4.8,fiber:.3,sugar:.6,sodium:7,cholesterol:0},{id:21,name:"Tempeh",brand:"Generic",category:"protein",emoji:"🧈",serving:"100g",calories:192,protein:20,carbs:8,fat:11,fiber:5,sugar:0,sodium:9,cholesterol:0},{id:22,name:"Protein Powder (Whey)",brand:"Generic",category:"protein",emoji:"🥤",serving:"1 scoop (30g)",calories:120,protein:24,carbs:3,fat:1,fiber:0,sugar:1,sodium:130,cholesterol:20},{id:23,name:"Protein Powder (Plant)",brand:"Generic",category:"protein",emoji:"🥤",serving:"1 scoop (33g)",calories:130,protein:21,carbs:6,fat:2.5,fiber:2,sugar:1,sodium:300,cholesterol:0},{id:24,name:"Cottage Cheese (2%)",brand:"Generic",category:"protein",emoji:"🧀",serving:"1 cup (226g)",calories:183,protein:24,carbs:10,fat:5,fiber:0,sugar:9,sodium:746,cholesterol:24},{id:25,name:"Beef Jerky",brand:"Generic",category:"protein",emoji:"🥩",serving:"1 oz (28g)",calories:116,protein:9,carbs:3,fat:7,fiber:.4,sugar:3,sodium:590,cholesterol:14},{id:50,name:"White Rice (cooked)",brand:"Generic",category:"grains",emoji:"🍚",serving:"1 cup (158g)",calories:206,protein:4.3,carbs:45,fat:.4,fiber:.6,sugar:0,sodium:1,cholesterol:0},{id:51,name:"Brown Rice (cooked)",brand:"Generic",category:"grains",emoji:"🍚",serving:"1 cup (195g)",calories:216,protein:5,carbs:45,fat:1.8,fiber:3.5,sugar:.7,sodium:10,cholesterol:0},{id:52,name:"Quinoa (cooked)",brand:"Generic",category:"grains",emoji:"🌾",serving:"1 cup (185g)",calories:222,protein:8.1,carbs:39,fat:3.6,fiber:5.2,sugar:1.6,sodium:13,cholesterol:0},{id:53,name:"Oatmeal (cooked)",brand:"Generic",category:"grains",emoji:"🥣",serving:"1 cup (234g)",calories:154,protein:5.4,carbs:27,fat:2.6,fiber:4,sugar:.6,sodium:115,cholesterol:0},{id:54,name:"Whole Wheat Bread",brand:"Generic",category:"grains",emoji:"🍞",serving:"1 slice (28g)",calories:69,protein:3.6,carbs:12,fat:1.1,fiber:1.9,sugar:1.4,sodium:132,cholesterol:0},{id:55,name:"White Bread",brand:"Generic",category:"grains",emoji:"🍞",serving:"1 slice (25g)",calories:67,protein:2,carbs:13,fat:.8,fiber:.6,sugar:1.4,sodium:130,cholesterol:0},{id:56,name:"Pasta (cooked)",brand:"Generic",category:"grains",emoji:"🍝",serving:"1 cup (140g)",calories:220,protein:8.1,carbs:43,fat:1.3,fiber:2.5,sugar:.8,sodium:1,cholesterol:0},{id:57,name:"Whole Wheat Pasta (cooked)",brand:"Generic",category:"grains",emoji:"🍝",serving:"1 cup (140g)",calories:174,protein:7.5,carbs:37,fat:.8,fiber:6.3,sugar:.8,sodium:4,cholesterol:0},{id:58,name:'Tortilla (Flour, 10")',brand:"Generic",category:"grains",emoji:"🌮",serving:"1 tortilla (72g)",calories:218,protein:5.7,carbs:36,fat:5.4,fiber:2.1,sugar:1.8,sodium:405,cholesterol:0},{id:59,name:"Corn Tortilla",brand:"Generic",category:"grains",emoji:"🌮",serving:"1 tortilla (26g)",calories:52,protein:1.4,carbs:11,fat:.7,fiber:1.5,sugar:.2,sodium:11,cholesterol:0},{id:60,name:"Bagel (plain)",brand:"Generic",category:"grains",emoji:"🥯",serving:"1 bagel (105g)",calories:270,protein:11,carbs:53,fat:1.6,fiber:2.3,sugar:6,sodium:443,cholesterol:0},{id:61,name:"Granola",brand:"Generic",category:"grains",emoji:"🥣",serving:"1/2 cup (55g)",calories:264,protein:6.5,carbs:35,fat:12,fiber:3.5,sugar:14,sodium:15,cholesterol:0},{id:62,name:"Cornflakes",brand:"Kellogg's",category:"grains",emoji:"🥣",serving:"1 cup (28g)",calories:101,protein:1.9,carbs:24,fat:.2,fiber:.7,sugar:2.4,sodium:200,cholesterol:0},{id:63,name:"Sweet Potato (baked)",brand:"Generic",category:"grains",emoji:"🍠",serving:"1 medium (114g)",calories:103,protein:2.3,carbs:24,fat:.1,fiber:3.8,sugar:7.4,sodium:41,cholesterol:0},{id:64,name:"Potato (baked)",brand:"Generic",category:"grains",emoji:"🥔",serving:"1 medium (173g)",calories:161,protein:4.3,carbs:37,fat:.2,fiber:3.8,sugar:1.9,sodium:17,cholesterol:0},{id:65,name:"French Fries",brand:"Generic",category:"grains",emoji:"🍟",serving:"medium (117g)",calories:365,protein:4,carbs:44,fat:19,fiber:4,sugar:.3,sodium:246,cholesterol:0},{id:66,name:"Couscous (cooked)",brand:"Generic",category:"grains",emoji:"🌾",serving:"1 cup (157g)",calories:176,protein:6,carbs:36,fat:.3,fiber:2.2,sugar:.1,sodium:8,cholesterol:0},{id:67,name:"Naan Bread",brand:"Generic",category:"grains",emoji:"🍞",serving:"1 piece (90g)",calories:262,protein:9,carbs:45,fat:5.1,fiber:2,sugar:3,sodium:418,cholesterol:0},{id:68,name:"Pita Bread (whole wheat)",brand:"Generic",category:"grains",emoji:"🍞",serving:"1 pita (64g)",calories:170,protein:6.3,carbs:35,fat:1.7,fiber:4.7,sugar:.7,sodium:340,cholesterol:0},{id:69,name:"Rice Cakes",brand:"Generic",category:"grains",emoji:"🍘",serving:"2 cakes (18g)",calories:70,protein:1.4,carbs:15,fat:.5,fiber:.4,sugar:.1,sodium:29,cholesterol:0},{id:70,name:"Popcorn (air-popped)",brand:"Generic",category:"grains",emoji:"🍿",serving:"3 cups (24g)",calories:93,protein:3,carbs:19,fat:1.1,fiber:3.5,sugar:.2,sodium:2,cholesterol:0},{id:100,name:"Banana",brand:"Generic",category:"fruits",emoji:"🍌",serving:"1 medium (118g)",calories:105,protein:1.3,carbs:27,fat:.4,fiber:3.1,sugar:14,sodium:1,cholesterol:0},{id:101,name:"Apple",brand:"Generic",category:"fruits",emoji:"🍎",serving:"1 medium (182g)",calories:95,protein:.5,carbs:25,fat:.3,fiber:4.4,sugar:19,sodium:2,cholesterol:0},{id:102,name:"Orange",brand:"Generic",category:"fruits",emoji:"🍊",serving:"1 medium (131g)",calories:62,protein:1.2,carbs:15,fat:.2,fiber:3.1,sugar:12,sodium:0,cholesterol:0},{id:103,name:"Strawberries",brand:"Generic",category:"fruits",emoji:"🍓",serving:"1 cup (152g)",calories:49,protein:1,carbs:12,fat:.5,fiber:3,sugar:7.4,sodium:2,cholesterol:0},{id:104,name:"Blueberries",brand:"Generic",category:"fruits",emoji:"🫐",serving:"1 cup (148g)",calories:84,protein:1.1,carbs:21,fat:.5,fiber:3.6,sugar:15,sodium:1,cholesterol:0},{id:105,name:"Grapes",brand:"Generic",category:"fruits",emoji:"🍇",serving:"1 cup (151g)",calories:104,protein:1.1,carbs:27,fat:.2,fiber:1.4,sugar:23,sodium:3,cholesterol:0},{id:106,name:"Watermelon",brand:"Generic",category:"fruits",emoji:"🍉",serving:"1 cup diced (152g)",calories:46,protein:.9,carbs:12,fat:.2,fiber:.6,sugar:9.4,sodium:2,cholesterol:0},{id:107,name:"Mango",brand:"Generic",category:"fruits",emoji:"🥭",serving:"1 cup sliced (165g)",calories:99,protein:1.4,carbs:25,fat:.6,fiber:2.6,sugar:23,sodium:2,cholesterol:0},{id:108,name:"Pineapple",brand:"Generic",category:"fruits",emoji:"🍍",serving:"1 cup chunks (165g)",calories:82,protein:.9,carbs:22,fat:.2,fiber:2.3,sugar:16,sodium:2,cholesterol:0},{id:109,name:"Avocado",brand:"Generic",category:"fruits",emoji:"🥑",serving:"1/2 avocado (68g)",calories:114,protein:1.3,carbs:6,fat:10,fiber:4.6,sugar:.2,sodium:5,cholesterol:0},{id:110,name:"Peach",brand:"Generic",category:"fruits",emoji:"🍑",serving:"1 medium (150g)",calories:59,protein:1.4,carbs:14,fat:.4,fiber:2.3,sugar:13,sodium:0,cholesterol:0},{id:111,name:"Pear",brand:"Generic",category:"fruits",emoji:"🍐",serving:"1 medium (178g)",calories:102,protein:.6,carbs:27,fat:.2,fiber:5.5,sugar:17,sodium:2,cholesterol:0},{id:112,name:"Kiwi",brand:"Generic",category:"fruits",emoji:"🥝",serving:"1 medium (69g)",calories:42,protein:.8,carbs:10,fat:.4,fiber:2.1,sugar:6.2,sodium:2,cholesterol:0},{id:113,name:"Cherries",brand:"Generic",category:"fruits",emoji:"🍒",serving:"1 cup (138g)",calories:87,protein:1.5,carbs:22,fat:.3,fiber:2.9,sugar:18,sodium:0,cholesterol:0},{id:114,name:"Dried Dates",brand:"Generic",category:"fruits",emoji:"🌴",serving:"3 dates (72g)",calories:200,protein:1.8,carbs:54,fat:.1,fiber:4.8,sugar:48,sodium:1,cholesterol:0},{id:115,name:"Raisins",brand:"Generic",category:"fruits",emoji:"🍇",serving:"1/4 cup (41g)",calories:123,protein:1.3,carbs:33,fat:.2,fiber:1.5,sugar:25,sodium:4,cholesterol:0},{id:116,name:"Grapefruit",brand:"Generic",category:"fruits",emoji:"🍊",serving:"1/2 medium (128g)",calories:52,protein:.9,carbs:13,fat:.2,fiber:2,sugar:8.5,sodium:0,cholesterol:0},{id:117,name:"Papaya",brand:"Generic",category:"fruits",emoji:"🥭",serving:"1 cup cubed (140g)",calories:55,protein:.9,carbs:14,fat:.2,fiber:2.5,sugar:8.3,sodium:4,cholesterol:0},{id:118,name:"Pomegranate Seeds",brand:"Generic",category:"fruits",emoji:"🍎",serving:"1/2 cup (87g)",calories:72,protein:1.5,carbs:16,fat:1,fiber:3.5,sugar:12,sodium:3,cholesterol:0},{id:119,name:"Coconut (fresh)",brand:"Generic",category:"fruits",emoji:"🥥",serving:"1/3 cup (28g)",calories:99,protein:.9,carbs:4.3,fat:9.4,fiber:2.5,sugar:1.7,sodium:6,cholesterol:0},{id:120,name:"Lemon",brand:"Generic",category:"fruits",emoji:"🍋",serving:"1 medium (58g)",calories:17,protein:.6,carbs:5.4,fat:.2,fiber:1.6,sugar:1.5,sodium:1,cholesterol:0},{id:150,name:"Broccoli (cooked)",brand:"Generic",category:"vegetables",emoji:"🥦",serving:"1 cup (156g)",calories:55,protein:3.7,carbs:11,fat:.6,fiber:5.1,sugar:2.2,sodium:64,cholesterol:0},{id:151,name:"Spinach (raw)",brand:"Generic",category:"vegetables",emoji:"🥬",serving:"1 cup (30g)",calories:7,protein:.9,carbs:1.1,fat:.1,fiber:.7,sugar:.1,sodium:24,cholesterol:0},{id:152,name:"Spinach (cooked)",brand:"Generic",category:"vegetables",emoji:"🥬",serving:"1 cup (180g)",calories:41,protein:5.3,carbs:6.8,fat:.5,fiber:4.3,sugar:.8,sodium:126,cholesterol:0},{id:153,name:"Kale (raw)",brand:"Generic",category:"vegetables",emoji:"🥬",serving:"1 cup (67g)",calories:33,protein:2.2,carbs:6,fat:.6,fiber:1.3,sugar:.8,sodium:25,cholesterol:0},{id:154,name:"Carrot",brand:"Generic",category:"vegetables",emoji:"🥕",serving:"1 medium (61g)",calories:25,protein:.6,carbs:6,fat:.1,fiber:1.7,sugar:2.9,sodium:42,cholesterol:0},{id:155,name:"Tomato",brand:"Generic",category:"vegetables",emoji:"🍅",serving:"1 medium (123g)",calories:22,protein:1.1,carbs:4.8,fat:.2,fiber:1.5,sugar:3.2,sodium:6,cholesterol:0},{id:156,name:"Cucumber",brand:"Generic",category:"vegetables",emoji:"🥒",serving:"1 cup sliced (119g)",calories:16,protein:.7,carbs:3.1,fat:.2,fiber:.5,sugar:1.7,sodium:2,cholesterol:0},{id:157,name:"Bell Pepper (red)",brand:"Generic",category:"vegetables",emoji:"🫑",serving:"1 medium (119g)",calories:37,protein:1.2,carbs:7,fat:.4,fiber:2.5,sugar:5,sodium:5,cholesterol:0},{id:158,name:"Onion",brand:"Generic",category:"vegetables",emoji:"🧅",serving:"1 medium (110g)",calories:44,protein:1.2,carbs:10,fat:.1,fiber:1.9,sugar:4.7,sodium:4,cholesterol:0},{id:159,name:"Corn (cooked)",brand:"Generic",category:"vegetables",emoji:"🌽",serving:"1 ear (102g)",calories:99,protein:3.5,carbs:22,fat:1.5,fiber:2.7,sugar:5,sodium:1,cholesterol:0},{id:160,name:"Green Beans",brand:"Generic",category:"vegetables",emoji:"🫘",serving:"1 cup (125g)",calories:34,protein:2,carbs:8,fat:.1,fiber:4,sugar:1.5,sodium:1,cholesterol:0},{id:161,name:"Mushrooms (raw)",brand:"Generic",category:"vegetables",emoji:"🍄",serving:"1 cup sliced (70g)",calories:15,protein:2.2,carbs:2.3,fat:.2,fiber:.7,sugar:1.4,sodium:4,cholesterol:0},{id:162,name:"Zucchini",brand:"Generic",category:"vegetables",emoji:"🥒",serving:"1 cup sliced (113g)",calories:19,protein:1.4,carbs:3.5,fat:.4,fiber:1.1,sugar:2.8,sodium:10,cholesterol:0},{id:163,name:"Cauliflower",brand:"Generic",category:"vegetables",emoji:"🥦",serving:"1 cup (100g)",calories:25,protein:1.9,carbs:5,fat:.3,fiber:2,sugar:1.9,sodium:30,cholesterol:0},{id:164,name:"Asparagus",brand:"Generic",category:"vegetables",emoji:"🌿",serving:"6 spears (96g)",calories:20,protein:2.2,carbs:3.7,fat:.1,fiber:2,sugar:1.2,sodium:2,cholesterol:0},{id:165,name:"Celery",brand:"Generic",category:"vegetables",emoji:"🌿",serving:"2 stalks (80g)",calories:11,protein:.6,carbs:2.4,fat:.1,fiber:1.3,sugar:1.1,sodium:64,cholesterol:0},{id:166,name:"Cabbage (raw)",brand:"Generic",category:"vegetables",emoji:"🥬",serving:"1 cup shredded (89g)",calories:22,protein:1.1,carbs:5.2,fat:.1,fiber:2.2,sugar:2.8,sodium:16,cholesterol:0},{id:167,name:"Brussels Sprouts",brand:"Generic",category:"vegetables",emoji:"🥬",serving:"1 cup (88g)",calories:38,protein:3,carbs:8,fat:.3,fiber:3.3,sugar:1.9,sodium:22,cholesterol:0},{id:168,name:"Eggplant (cooked)",brand:"Generic",category:"vegetables",emoji:"🍆",serving:"1 cup diced (99g)",calories:35,protein:.8,carbs:9,fat:.2,fiber:2.5,sugar:3.2,sodium:1,cholesterol:0},{id:169,name:"Lettuce (romaine)",brand:"Generic",category:"vegetables",emoji:"🥬",serving:"1 cup shredded (47g)",calories:8,protein:.6,carbs:1.5,fat:.1,fiber:1,sugar:.6,sodium:4,cholesterol:0},{id:170,name:"Mixed Salad Greens",brand:"Generic",category:"vegetables",emoji:"🥗",serving:"2 cups (85g)",calories:15,protein:1.3,carbs:2.4,fat:.2,fiber:1.5,sugar:.5,sodium:40,cholesterol:0},{id:200,name:"Whole Milk",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 cup (244ml)",calories:149,protein:8,carbs:12,fat:8,fiber:0,sugar:12,sodium:105,cholesterol:24},{id:201,name:"Skim Milk",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 cup (245ml)",calories:83,protein:8.3,carbs:12,fat:.2,fiber:0,sugar:12,sodium:103,cholesterol:5},{id:202,name:"Cheddar Cheese",brand:"Generic",category:"dairy",emoji:"🧀",serving:"1 oz (28g)",calories:113,protein:7,carbs:.4,fat:9.3,fiber:0,sugar:.1,sodium:176,cholesterol:29},{id:203,name:"Mozzarella Cheese",brand:"Generic",category:"dairy",emoji:"🧀",serving:"1 oz (28g)",calories:85,protein:6.3,carbs:.7,fat:6.3,fiber:0,sugar:.3,sodium:138,cholesterol:22},{id:204,name:"Greek Yogurt (plain, 0%)",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 cup (245g)",calories:130,protein:23,carbs:9,fat:.7,fiber:0,sugar:7,sodium:92,cholesterol:10},{id:205,name:"Greek Yogurt (2%)",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 cup (245g)",calories:170,protein:23,carbs:10,fat:4.5,fiber:0,sugar:8,sodium:95,cholesterol:20},{id:206,name:"Regular Yogurt (plain)",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 cup (245g)",calories:149,protein:8.5,carbs:17,fat:8,fiber:0,sugar:17,sodium:113,cholesterol:32},{id:207,name:"Butter",brand:"Generic",category:"dairy",emoji:"🧈",serving:"1 tbsp (14g)",calories:102,protein:.1,carbs:0,fat:11.5,fiber:0,sugar:0,sodium:2,cholesterol:31},{id:208,name:"Cream Cheese",brand:"Generic",category:"dairy",emoji:"🧀",serving:"2 tbsp (29g)",calories:99,protein:1.7,carbs:1.6,fat:9.8,fiber:0,sugar:.7,sodium:85,cholesterol:29},{id:209,name:"Parmesan Cheese",brand:"Generic",category:"dairy",emoji:"🧀",serving:"1 tbsp (5g)",calories:21,protein:1.4,carbs:.2,fat:1.4,fiber:0,sugar:0,sodium:76,cholesterol:4},{id:210,name:"Almond Milk (unsweetened)",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 cup (240ml)",calories:30,protein:1,carbs:1,fat:2.5,fiber:0,sugar:0,sodium:170,cholesterol:0},{id:211,name:"Oat Milk",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 cup (240ml)",calories:120,protein:3,carbs:16,fat:5,fiber:2,sugar:7,sodium:100,cholesterol:0},{id:212,name:"Soy Milk",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 cup (240ml)",calories:80,protein:7,carbs:4,fat:4,fiber:1,sugar:1,sodium:75,cholesterol:0},{id:213,name:"Heavy Cream",brand:"Generic",category:"dairy",emoji:"🥛",serving:"1 tbsp (15ml)",calories:51,protein:.4,carbs:.4,fat:5.4,fiber:0,sugar:.4,sodium:6,cholesterol:17},{id:214,name:"Swiss Cheese",brand:"Generic",category:"dairy",emoji:"🧀",serving:"1 oz (28g)",calories:108,protein:7.6,carbs:1.5,fat:7.9,fiber:0,sugar:0,sodium:53,cholesterol:26},{id:215,name:"Feta Cheese",brand:"Generic",category:"dairy",emoji:"🧀",serving:"1 oz (28g)",calories:75,protein:4,carbs:1.2,fat:6,fiber:0,sugar:1.2,sodium:316,cholesterol:25},{id:250,name:"Black Coffee",brand:"Generic",category:"beverages",emoji:"☕",serving:"1 cup (237ml)",calories:2,protein:.3,carbs:0,fat:0,fiber:0,sugar:0,sodium:5,cholesterol:0},{id:251,name:"Coffee with Milk & Sugar",brand:"Generic",category:"beverages",emoji:"☕",serving:"1 cup (240ml)",calories:67,protein:1,carbs:11,fat:2,fiber:0,sugar:10,sodium:22,cholesterol:5},{id:252,name:"Cappuccino",brand:"Generic",category:"beverages",emoji:"☕",serving:"12 oz (355ml)",calories:120,protein:6,carbs:10,fat:6,fiber:0,sugar:10,sodium:80,cholesterol:25},{id:253,name:"Latte (whole milk)",brand:"Starbucks",category:"beverages",emoji:"☕",serving:"16 oz (473ml)",calories:190,protein:10,carbs:15,fat:7,fiber:0,sugar:14,sodium:115,cholesterol:25},{id:254,name:"Green Tea",brand:"Generic",category:"beverages",emoji:"🍵",serving:"1 cup (237ml)",calories:2,protein:.5,carbs:0,fat:0,fiber:0,sugar:0,sodium:2,cholesterol:0},{id:255,name:"Orange Juice",brand:"Generic",category:"beverages",emoji:"🧃",serving:"1 cup (248ml)",calories:112,protein:1.7,carbs:26,fat:.5,fiber:.5,sugar:21,sodium:2,cholesterol:0},{id:256,name:"Apple Juice",brand:"Generic",category:"beverages",emoji:"🧃",serving:"1 cup (248ml)",calories:114,protein:.3,carbs:28,fat:.3,fiber:.5,sugar:24,sodium:10,cholesterol:0},{id:257,name:"Coca-Cola",brand:"Coca-Cola",category:"beverages",emoji:"🥤",serving:"1 can (355ml)",calories:140,protein:0,carbs:39,fat:0,fiber:0,sugar:39,sodium:45,cholesterol:0},{id:258,name:"Coca-Cola Zero",brand:"Coca-Cola",category:"beverages",emoji:"🥤",serving:"1 can (355ml)",calories:0,protein:0,carbs:0,fat:0,fiber:0,sugar:0,sodium:40,cholesterol:0},{id:259,name:"Protein Shake",brand:"Generic",category:"beverages",emoji:"🥤",serving:"1 bottle (414ml)",calories:160,protein:30,carbs:6,fat:2.5,fiber:1,sugar:2,sodium:220,cholesterol:10},{id:260,name:"Smoothie (Mixed Berry)",brand:"Generic",category:"beverages",emoji:"🥤",serving:"16 oz (473ml)",calories:230,protein:4,carbs:52,fat:1.5,fiber:5,sugar:42,sodium:15,cholesterol:0},{id:261,name:"Beer (regular)",brand:"Generic",category:"beverages",emoji:"🍺",serving:"12 oz (355ml)",calories:153,protein:1.6,carbs:13,fat:0,fiber:0,sugar:0,sodium:14,cholesterol:0},{id:262,name:"Red Wine",brand:"Generic",category:"beverages",emoji:"🍷",serving:"5 oz (148ml)",calories:125,protein:.1,carbs:3.8,fat:0,fiber:0,sugar:.9,sodium:6,cholesterol:0},{id:263,name:"Coconut Water",brand:"Generic",category:"beverages",emoji:"🥥",serving:"1 cup (240ml)",calories:46,protein:1.7,carbs:9,fat:.5,fiber:2.6,sugar:6,sodium:252,cholesterol:0},{id:264,name:"Sports Drink (Gatorade)",brand:"Gatorade",category:"beverages",emoji:"🥤",serving:"20 oz (591ml)",calories:140,protein:0,carbs:36,fat:0,fiber:0,sugar:34,sodium:270,cholesterol:0},{id:265,name:"Chai Tea Latte",brand:"Generic",category:"beverages",emoji:"🍵",serving:"16 oz (473ml)",calories:240,protein:8,carbs:42,fat:4.5,fiber:0,sugar:40,sodium:115,cholesterol:15},{id:266,name:"Masala Chai",brand:"Indian Homemade",category:"indian-drinks",emoji:"🍵",serving:"1 cup (150ml)",calories:95,protein:2.2,carbs:12,fat:4,fiber:.2,sugar:10,sodium:32,cholesterol:12},{id:267,name:"Adrak Chai (Ginger Tea)",brand:"Indian Homemade",category:"indian-drinks",emoji:"🍵",serving:"1 cup (150ml)",calories:90,protein:2,carbs:11,fat:3.8,fiber:.2,sugar:9,sodium:30,cholesterol:11},{id:268,name:"Elaichi Chai (Cardamom Tea)",brand:"Indian Homemade",category:"indian-drinks",emoji:"🍵",serving:"1 cup (150ml)",calories:92,protein:2.1,carbs:11.5,fat:3.9,fiber:.1,sugar:9.5,sodium:31,cholesterol:12},{id:269,name:"Cutting Chai",brand:"Tea Stall",category:"indian-drinks",emoji:"🍵",serving:"1 glass (90ml)",calories:58,protein:1.2,carbs:7.5,fat:2.5,fiber:.1,sugar:6.2,sodium:19,cholesterol:7},{id:270,name:"South Indian Filter Coffee",brand:"Indian Homemade",category:"indian-drinks",emoji:"☕",serving:"1 tumbler (150ml)",calories:88,protein:2.5,carbs:11,fat:3.4,fiber:0,sugar:9,sodium:28,cholesterol:10},{id:271,name:"Cold Coffee (Indian Style)",brand:"Cafe",category:"indian-drinks",emoji:"☕",serving:"1 glass (250ml)",calories:190,protein:5,carbs:28,fat:6.5,fiber:0,sugar:24,sodium:85,cholesterol:24},{id:272,name:"Lassi (Sweet)",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥛",serving:"1 glass (250ml)",calories:180,protein:6,carbs:28,fat:5,fiber:0,sugar:24,sodium:95,cholesterol:18},{id:273,name:"Lassi (Salted)",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥛",serving:"1 glass (250ml)",calories:112,protein:6,carbs:12,fat:4,fiber:0,sugar:10,sodium:360,cholesterol:16},{id:274,name:"Mango Lassi",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥭",serving:"1 glass (250ml)",calories:220,protein:7,carbs:35,fat:5.5,fiber:1.2,sugar:30,sodium:102,cholesterol:20},{id:275,name:"Chaas / Buttermilk",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥛",serving:"1 glass (240ml)",calories:60,protein:3.2,carbs:5,fat:3,fiber:0,sugar:4.5,sodium:240,cholesterol:9},{id:276,name:"Masala Chaas",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥛",serving:"1 glass (240ml)",calories:64,protein:3.3,carbs:5.2,fat:3.2,fiber:.2,sugar:4.6,sodium:290,cholesterol:9},{id:277,name:"Jaljeera",brand:"Indian Homemade",category:"indian-drinks",emoji:"🧃",serving:"1 glass (240ml)",calories:42,protein:.8,carbs:9,fat:.3,fiber:.7,sugar:6,sodium:310,cholesterol:0},{id:278,name:"Nimbu Pani",brand:"Indian Homemade",category:"indian-drinks",emoji:"🍋",serving:"1 glass (250ml)",calories:74,protein:.3,carbs:18,fat:.1,fiber:.2,sugar:16,sodium:45,cholesterol:0},{id:279,name:"Shikanji",brand:"Indian Homemade",category:"indian-drinks",emoji:"🍋",serving:"1 glass (250ml)",calories:82,protein:.4,carbs:20,fat:.1,fiber:.3,sugar:18,sodium:48,cholesterol:0},{id:280,name:"Aam Panna",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥭",serving:"1 glass (250ml)",calories:110,protein:.5,carbs:27,fat:.2,fiber:.8,sugar:24,sodium:70,cholesterol:0},{id:281,name:"Sugarcane Juice",brand:"Fresh Juice Stall",category:"indian-drinks",emoji:"🧃",serving:"1 glass (250ml)",calories:183,protein:.2,carbs:45,fat:0,fiber:.2,sugar:42,sodium:22,cholesterol:0},{id:282,name:"Tender Coconut Water",brand:"Fresh",category:"indian-drinks",emoji:"🥥",serving:"1 glass (240ml)",calories:46,protein:1.7,carbs:9,fat:.5,fiber:2.6,sugar:6,sodium:252,cholesterol:0},{id:283,name:"Badam Milk",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥛",serving:"1 glass (250ml)",calories:210,protein:7.5,carbs:22,fat:10,fiber:1.5,sugar:18,sodium:110,cholesterol:20},{id:284,name:"Kesar Milk",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥛",serving:"1 glass (250ml)",calories:198,protein:7,carbs:21,fat:9,fiber:0,sugar:17,sodium:98,cholesterol:18},{id:285,name:"Rose Milk",brand:"Indian Homemade",category:"indian-drinks",emoji:"🥛",serving:"1 glass (250ml)",calories:165,protein:6,carbs:22,fat:5.5,fiber:0,sugar:20,sodium:92,cholesterol:16},{id:286,name:"Rooh Afza Sharbat",brand:"Hamdard",category:"indian-drinks",emoji:"🧃",serving:"1 glass (250ml)",calories:132,protein:0,carbs:33,fat:0,fiber:0,sugar:32,sodium:20,cholesterol:0},{id:287,name:"Rasna (Prepared)",brand:"Rasna",category:"indian-drinks",emoji:"🧃",serving:"1 glass (250ml)",calories:96,protein:0,carbs:24,fat:0,fiber:0,sugar:23,sodium:18,cholesterol:0},{id:288,name:"Frooti Mango Drink",brand:"Parle Agro",category:"indian-drinks",emoji:"🥭",serving:"1 pack (200ml)",calories:126,protein:0,carbs:31,fat:0,fiber:.3,sugar:30,sodium:20,cholesterol:0},{id:289,name:"Maaza Mango Drink",brand:"Coca-Cola India",category:"indian-drinks",emoji:"🥭",serving:"1 bottle (250ml)",calories:150,protein:.2,carbs:37,fat:0,fiber:.4,sugar:35,sodium:24,cholesterol:0},{id:290,name:"Slice Mango Drink",brand:"PepsiCo India",category:"indian-drinks",emoji:"🥭",serving:"1 bottle (250ml)",calories:148,protein:.2,carbs:36,fat:0,fiber:.3,sugar:34,sodium:22,cholesterol:0},{id:291,name:"Thums Up",brand:"Coca-Cola India",category:"indian-drinks",emoji:"🥤",serving:"1 bottle (250ml)",calories:110,protein:0,carbs:27,fat:0,fiber:0,sugar:27,sodium:34,cholesterol:0},{id:292,name:"Limca",brand:"Coca-Cola India",category:"indian-drinks",emoji:"🥤",serving:"1 bottle (250ml)",calories:105,protein:0,carbs:26,fat:0,fiber:0,sugar:26,sodium:42,cholesterol:0},{id:293,name:"Appy Fizz",brand:"Parle Agro",category:"indian-drinks",emoji:"🍏",serving:"1 can (250ml)",calories:122,protein:0,carbs:30,fat:0,fiber:0,sugar:29,sodium:20,cholesterol:0},{id:294,name:"Paper Boat Aamras",brand:"Paper Boat",category:"indian-drinks",emoji:"🥭",serving:"1 pouch (200ml)",calories:126,protein:.4,carbs:31,fat:.1,fiber:.8,sugar:27,sodium:16,cholesterol:0},{id:295,name:"Paper Boat Jaljeera",brand:"Paper Boat",category:"indian-drinks",emoji:"🧃",serving:"1 pouch (200ml)",calories:68,protein:.3,carbs:16,fat:.1,fiber:.5,sugar:14,sodium:190,cholesterol:0},{id:296,name:"Bournvita Milk",brand:"Bournvita",category:"indian-drinks",emoji:"🥛",serving:"1 glass (200ml)",calories:170,protein:6,carbs:24,fat:5.5,fiber:1.2,sugar:18,sodium:130,cholesterol:14},{id:297,name:"Horlicks Milk",brand:"Horlicks",category:"indian-drinks",emoji:"🥛",serving:"1 glass (200ml)",calories:162,protein:6.2,carbs:22,fat:5,fiber:1,sugar:16,sodium:125,cholesterol:14},{id:298,name:"Boost Milk",brand:"Boost",category:"indian-drinks",emoji:"🥛",serving:"1 glass (200ml)",calories:168,protein:6.1,carbs:23,fat:5.3,fiber:1,sugar:17,sodium:126,cholesterol:14},{id:299,name:"Complan Milk",brand:"Complan",category:"indian-drinks",emoji:"🥛",serving:"1 glass (200ml)",calories:180,protein:7.2,carbs:24,fat:6,fiber:1.2,sugar:18,sodium:130,cholesterol:15},{id:530,name:"Amul Kool Kesar",brand:"Amul",category:"indian-drinks",emoji:"🥛",serving:"1 bottle (200ml)",calories:146,protein:5.2,carbs:19,fat:5.3,fiber:0,sugar:17,sodium:96,cholesterol:14},{id:531,name:"Amul Kool Badam",brand:"Amul",category:"indian-drinks",emoji:"🥛",serving:"1 bottle (200ml)",calories:154,protein:5.4,carbs:20,fat:5.8,fiber:.4,sugar:18,sodium:100,cholesterol:14},{id:532,name:"Amul Kool Coffee",brand:"Amul",category:"indian-drinks",emoji:"☕",serving:"1 bottle (200ml)",calories:142,protein:5,carbs:18,fat:5.4,fiber:0,sugar:16,sodium:94,cholesterol:14},{id:533,name:"Amul Masti Spiced Buttermilk",brand:"Amul",category:"indian-drinks",emoji:"🥛",serving:"1 pack (200ml)",calories:54,protein:2.8,carbs:4.2,fat:2.8,fiber:0,sugar:3.8,sodium:240,cholesterol:8},{id:534,name:"Amul Lassi",brand:"Amul",category:"indian-drinks",emoji:"🥛",serving:"1 pack (200ml)",calories:128,protein:5.2,carbs:18,fat:4.1,fiber:0,sugar:16,sodium:90,cholesterol:14},{id:535,name:"Mother Dairy Classic Lassi",brand:"Mother Dairy",category:"indian-drinks",emoji:"🥛",serving:"1 bottle (200ml)",calories:132,protein:5,carbs:19,fat:4.2,fiber:0,sugar:17,sodium:92,cholesterol:14},{id:536,name:"Mother Dairy Masala Chaach",brand:"Mother Dairy",category:"indian-drinks",emoji:"🥛",serving:"1 bottle (200ml)",calories:48,protein:2.6,carbs:4,fat:2.3,fiber:0,sugar:3.6,sodium:220,cholesterol:7},{id:537,name:"Paper Boat Aam Panna",brand:"Paper Boat",category:"indian-drinks",emoji:"🥭",serving:"1 pouch (200ml)",calories:82,protein:.2,carbs:20,fat:0,fiber:.3,sugar:18,sodium:68,cholesterol:0},{id:538,name:"Paper Boat Nimbu Pani",brand:"Paper Boat",category:"indian-drinks",emoji:"🍋",serving:"1 pouch (200ml)",calories:74,protein:.1,carbs:18,fat:0,fiber:.1,sugar:16,sodium:60,cholesterol:0},{id:539,name:"Paper Boat Coconut Water",brand:"Paper Boat",category:"indian-drinks",emoji:"🥥",serving:"1 pack (200ml)",calories:38,protein:1.2,carbs:8.2,fat:.3,fiber:1.8,sugar:5.2,sodium:190,cholesterol:0},{id:540,name:"Paper Boat Golgappe Ka Pani",brand:"Paper Boat",category:"indian-drinks",emoji:"🧃",serving:"1 pouch (200ml)",calories:44,protein:.5,carbs:10,fat:.2,fiber:.4,sugar:7,sodium:260,cholesterol:0},{id:541,name:"Real Mixed Fruit Juice",brand:"Real",category:"indian-drinks",emoji:"🧃",serving:"1 glass (200ml)",calories:92,protein:.5,carbs:22,fat:.1,fiber:.4,sugar:20,sodium:18,cholesterol:0},{id:542,name:"Real Orange Juice",brand:"Real",category:"indian-drinks",emoji:"🍊",serving:"1 glass (200ml)",calories:88,protein:.6,carbs:21,fat:.1,fiber:.3,sugar:19,sodium:16,cholesterol:0},{id:543,name:"Real Guava Juice",brand:"Real",category:"indian-drinks",emoji:"🧃",serving:"1 glass (200ml)",calories:96,protein:.8,carbs:23,fat:.1,fiber:.6,sugar:21,sodium:18,cholesterol:0},{id:544,name:"Real Litchi Juice",brand:"Real",category:"indian-drinks",emoji:"🧃",serving:"1 glass (200ml)",calories:100,protein:.2,carbs:24,fat:.1,fiber:.2,sugar:23,sodium:14,cholesterol:0},{id:545,name:"Tropicana Mixed Fruit Delight",brand:"Tropicana",category:"indian-drinks",emoji:"🧃",serving:"1 glass (200ml)",calories:94,protein:.4,carbs:23,fat:.1,fiber:.3,sugar:21,sodium:20,cholesterol:0},{id:546,name:"Tropicana Orange Delight",brand:"Tropicana",category:"indian-drinks",emoji:"🍊",serving:"1 glass (200ml)",calories:90,protein:.5,carbs:22,fat:.1,fiber:.2,sugar:20,sodium:18,cholesterol:0},{id:547,name:"Minute Maid Pulpy Orange",brand:"Coca-Cola India",category:"indian-drinks",emoji:"🍊",serving:"1 bottle (250ml)",calories:118,protein:.4,carbs:29,fat:0,fiber:.4,sugar:27,sodium:22,cholesterol:0},{id:548,name:"Minute Maid Apple Sparkle",brand:"Coca-Cola India",category:"indian-drinks",emoji:"🍏",serving:"1 bottle (250ml)",calories:124,protein:.1,carbs:31,fat:0,fiber:.1,sugar:29,sodium:24,cholesterol:0},{id:549,name:"Sting Energy Drink",brand:"PepsiCo India",category:"indian-drinks",emoji:"⚡",serving:"1 can (250ml)",calories:112,protein:0,carbs:28,fat:0,fiber:0,sugar:27,sodium:95,cholesterol:0},{id:550,name:"Red Bull Energy Drink",brand:"Red Bull India",category:"indian-drinks",emoji:"⚡",serving:"1 can (250ml)",calories:112,protein:0,carbs:27,fat:0,fiber:0,sugar:27,sodium:105,cholesterol:0},{id:551,name:"Glucon-D Orange Drink",brand:"Glucon-D",category:"indian-drinks",emoji:"🧃",serving:"1 glass (200ml)",calories:74,protein:0,carbs:18,fat:0,fiber:0,sugar:17,sodium:42,cholesterol:0},{id:552,name:"Tang Orange Drink",brand:"Tang",category:"indian-drinks",emoji:"🍊",serving:"1 glass (200ml)",calories:78,protein:0,carbs:19,fat:0,fiber:0,sugar:18,sodium:28,cholesterol:0},{id:553,name:"Bru Instant Coffee with Milk",brand:"Bru",category:"indian-drinks",emoji:"☕",serving:"1 cup (180ml)",calories:82,protein:2.6,carbs:10,fat:3.2,fiber:0,sugar:8,sodium:34,cholesterol:10},{id:554,name:"Nescafe Sunrise Coffee with Milk",brand:"Nescafe",category:"indian-drinks",emoji:"☕",serving:"1 cup (180ml)",calories:84,protein:2.5,carbs:10.5,fat:3.3,fiber:0,sugar:8.5,sodium:35,cholesterol:10},{id:555,name:"Bovonto",brand:"Kalimark",category:"indian-drinks",emoji:"🥤",serving:"1 bottle (250ml)",calories:118,protein:0,carbs:29,fat:0,fiber:0,sugar:28,sodium:26,cholesterol:0},{id:556,name:"Sosyo",brand:"Hajoori",category:"indian-drinks",emoji:"🥤",serving:"1 bottle (250ml)",calories:120,protein:0,carbs:30,fat:0,fiber:0,sugar:29,sodium:24,cholesterol:0},{id:557,name:"Jeera Masala Soda",brand:"Generic",category:"indian-drinks",emoji:"🥤",serving:"1 bottle (250ml)",calories:82,protein:0,carbs:20,fat:0,fiber:0,sugar:18,sodium:70,cholesterol:0},{id:558,name:"Smoodh Chocolate Milk",brand:"Parle Agro",category:"indian-drinks",emoji:"🥛",serving:"1 bottle (180ml)",calories:148,protein:4.2,carbs:21,fat:5.2,fiber:.3,sugar:18,sodium:88,cholesterol:12},{id:559,name:"Smoodh Hazelnut Milk",brand:"Parle Agro",category:"indian-drinks",emoji:"🥛",serving:"1 bottle (180ml)",calories:152,protein:4.1,carbs:22,fat:5.4,fiber:.3,sugar:19,sodium:90,cholesterol:12},{id:560,name:"Amul Tru Mango",brand:"Amul",category:"indian-drinks",emoji:"🥭",serving:"1 bottle (200ml)",calories:134,protein:4.8,carbs:20,fat:4.2,fiber:.2,sugar:18,sodium:92,cholesterol:13},{id:300,name:"Almonds",brand:"Generic",category:"snacks",emoji:"🥜",serving:"1 oz (28g, ~23 nuts)",calories:164,protein:6,carbs:6,fat:14,fiber:3.5,sugar:1.2,sodium:0,cholesterol:0},{id:301,name:"Peanuts",brand:"Generic",category:"snacks",emoji:"🥜",serving:"1 oz (28g)",calories:161,protein:7,carbs:4.6,fat:14,fiber:2.4,sugar:1.3,sodium:5,cholesterol:0},{id:302,name:"Walnuts",brand:"Generic",category:"snacks",emoji:"🥜",serving:"1 oz (28g)",calories:185,protein:4.3,carbs:3.9,fat:18,fiber:1.9,sugar:.7,sodium:1,cholesterol:0},{id:303,name:"Peanut Butter",brand:"Generic",category:"snacks",emoji:"🥜",serving:"2 tbsp (32g)",calories:188,protein:7,carbs:7,fat:16,fiber:1.6,sugar:3,sodium:136,cholesterol:0},{id:304,name:"Almond Butter",brand:"Generic",category:"snacks",emoji:"🥜",serving:"2 tbsp (32g)",calories:196,protein:6.8,carbs:6,fat:18,fiber:3.3,sugar:2,sodium:73,cholesterol:0},{id:305,name:"Dark Chocolate (70%)",brand:"Generic",category:"snacks",emoji:"🍫",serving:"1 oz (28g)",calories:170,protein:2.2,carbs:13,fat:12,fiber:3.1,sugar:7,sodium:6,cholesterol:0},{id:306,name:"Milk Chocolate",brand:"Generic",category:"snacks",emoji:"🍫",serving:"1 oz (28g)",calories:153,protein:2.2,carbs:17,fat:8.7,fiber:.9,sugar:15,sodium:24,cholesterol:6},{id:307,name:"Chips (Lay's Classic)",brand:"Lay's",category:"snacks",emoji:"🍟",serving:"1 oz (28g)",calories:160,protein:2,carbs:15,fat:10,fiber:1,sugar:.5,sodium:170,cholesterol:0},{id:308,name:"Tortilla Chips",brand:"Generic",category:"snacks",emoji:"🍟",serving:"1 oz (28g)",calories:140,protein:2,carbs:19,fat:7,fiber:1.4,sugar:.3,sodium:115,cholesterol:0},{id:309,name:"Pretzels",brand:"Generic",category:"snacks",emoji:"🥨",serving:"1 oz (28g)",calories:108,protein:3,carbs:22,fat:1,fiber:.9,sugar:.7,sodium:352,cholesterol:0},{id:310,name:"Trail Mix",brand:"Generic",category:"snacks",emoji:"🥜",serving:"1/4 cup (40g)",calories:173,protein:5,carbs:17,fat:11,fiber:2,sugar:9,sodium:65,cholesterol:1},{id:311,name:"Granola Bar",brand:"Nature Valley",category:"snacks",emoji:"🍫",serving:"1 bar (42g)",calories:190,protein:4,carbs:29,fat:7,fiber:2,sugar:12,sodium:160,cholesterol:0},{id:312,name:"Protein Bar",brand:"Quest",category:"snacks",emoji:"🍫",serving:"1 bar (60g)",calories:200,protein:21,carbs:22,fat:8,fiber:14,sugar:1,sodium:280,cholesterol:5},{id:313,name:"Hummus",brand:"Generic",category:"snacks",emoji:"🫘",serving:"2 tbsp (30g)",calories:70,protein:2,carbs:4,fat:5,fiber:1,sugar:0,sodium:130,cholesterol:0},{id:314,name:"Guacamole",brand:"Generic",category:"snacks",emoji:"🥑",serving:"2 tbsp (30g)",calories:47,protein:.6,carbs:2.6,fat:4,fiber:1.8,sugar:.3,sodium:115,cholesterol:0},{id:315,name:"Mixed Nuts (roasted)",brand:"Generic",category:"snacks",emoji:"🥜",serving:"1 oz (28g)",calories:172,protein:5,carbs:7,fat:15,fiber:2,sugar:1.5,sodium:96,cholesterol:0},{id:316,name:"Dried Cranberries",brand:"Generic",category:"snacks",emoji:"🍇",serving:"1/4 cup (40g)",calories:123,protein:.1,carbs:33,fat:.5,fiber:2.3,sugar:29,sodium:2,cholesterol:0},{id:317,name:"Rice Crackers",brand:"Generic",category:"snacks",emoji:"🍘",serving:"10 crackers (30g)",calories:120,protein:2,carbs:25,fat:1.5,fiber:.3,sugar:2,sodium:200,cholesterol:0},{id:318,name:"Cookie (Chocolate Chip)",brand:"Generic",category:"snacks",emoji:"🍪",serving:"1 cookie (40g)",calories:190,protein:2,carbs:26,fat:9,fiber:1,sugar:15,sodium:120,cholesterol:10},{id:319,name:"Ice Cream (Vanilla)",brand:"Generic",category:"snacks",emoji:"🍦",serving:"1/2 cup (66g)",calories:137,protein:2.3,carbs:16,fat:7.3,fiber:.5,sugar:14,sodium:53,cholesterol:29},{id:320,name:"Donut (Glazed)",brand:"Generic",category:"snacks",emoji:"🍩",serving:"1 donut (60g)",calories:253,protein:3.7,carbs:29,fat:14,fiber:.7,sugar:13,sodium:185,cholesterol:16},{id:561,name:"Parle-G Biscuits",brand:"Parle",category:"indian-snacks",emoji:"🍪",serving:"4 biscuits (28g)",calories:126,protein:2,carbs:21,fat:3.6,fiber:.5,sugar:6,sodium:95,cholesterol:0},{id:562,name:"Monaco Salted Crackers",brand:"Parle",category:"indian-snacks",emoji:"🍘",serving:"6 crackers (30g)",calories:135,protein:2.4,carbs:20,fat:5,fiber:.6,sugar:1.2,sodium:220,cholesterol:0},{id:563,name:"Krackjack Biscuits",brand:"Parle",category:"indian-snacks",emoji:"🍪",serving:"4 biscuits (27g)",calories:128,protein:2,carbs:18,fat:5.5,fiber:.4,sugar:5,sodium:120,cholesterol:0},{id:564,name:"Hide & Seek Chocolate Chip",brand:"Parle",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (33g)",calories:168,protein:2.2,carbs:23,fat:7.2,fiber:.8,sugar:10,sodium:105,cholesterol:2},{id:565,name:"20-20 Butter Cookies",brand:"Parle",category:"indian-snacks",emoji:"🍪",serving:"4 biscuits (32g)",calories:164,protein:2,carbs:21,fat:8,fiber:.5,sugar:7,sodium:115,cholesterol:3},{id:566,name:"Good Day Butter Cookies",brand:"Britannia",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (33g)",calories:170,protein:2,carbs:22,fat:8.4,fiber:.5,sugar:8,sodium:110,cholesterol:4},{id:567,name:"Good Day Cashew Cookies",brand:"Britannia",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (33g)",calories:173,protein:2.3,carbs:22,fat:8.7,fiber:.6,sugar:8,sodium:108,cholesterol:4},{id:568,name:"Marie Gold Biscuits",brand:"Britannia",category:"indian-snacks",emoji:"🍪",serving:"4 biscuits (24g)",calories:108,protein:1.7,carbs:18,fat:3.1,fiber:.4,sugar:4.5,sodium:88,cholesterol:0},{id:569,name:"Tiger Glucose Biscuits",brand:"Britannia",category:"indian-snacks",emoji:"🍪",serving:"4 biscuits (28g)",calories:126,protein:1.8,carbs:21,fat:3.8,fiber:.4,sugar:6.2,sodium:96,cholesterol:0},{id:570,name:"50-50 Maska Chaska",brand:"Britannia",category:"indian-snacks",emoji:"🍘",serving:"5 biscuits (33g)",calories:162,protein:2.5,carbs:22,fat:7,fiber:.7,sugar:3,sodium:220,cholesterol:0},{id:571,name:"NutriChoice Digestive",brand:"Britannia",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (31g)",calories:136,protein:2.5,carbs:21,fat:4.8,fiber:1.8,sugar:5.2,sodium:130,cholesterol:0},{id:572,name:"Little Hearts",brand:"Britannia",category:"indian-snacks",emoji:"🥨",serving:"1 small pack (27g)",calories:133,protein:1.7,carbs:18,fat:5.8,fiber:.5,sugar:8.5,sodium:92,cholesterol:0},{id:573,name:"Bourbon Biscuits",brand:"Britannia",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (34g)",calories:165,protein:2.2,carbs:24,fat:6.8,fiber:.9,sugar:10,sodium:118,cholesterol:2},{id:574,name:"Jim Jam Biscuits",brand:"Britannia",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (32g)",calories:154,protein:1.8,carbs:22,fat:6.2,fiber:.5,sugar:9,sodium:105,cholesterol:2},{id:575,name:"Dark Fantasy Choco Fills",brand:"Sunfeast",category:"indian-snacks",emoji:"🍪",serving:"2 cookies (30g)",calories:154,protein:2,carbs:21,fat:6.8,fiber:.8,sugar:10,sodium:95,cholesterol:3},{id:576,name:"Sunfeast Mom's Magic Cashew",brand:"Sunfeast",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (30g)",calories:151,protein:2.1,carbs:19,fat:7.2,fiber:.6,sugar:7,sodium:100,cholesterol:3},{id:577,name:"Sunfeast Farmlite Oats",brand:"Sunfeast",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (30g)",calories:137,protein:2.4,carbs:20,fat:5.1,fiber:1.5,sugar:5.5,sodium:112,cholesterol:0},{id:578,name:"Aloo Bhujia",brand:"Haldiram's",category:"indian-snacks",emoji:"🍟",serving:"1 small pack (35g)",calories:195,protein:3.2,carbs:18,fat:12,fiber:2.1,sugar:.8,sodium:310,cholesterol:0},{id:579,name:"Bhujia Sev",brand:"Bikaji",category:"indian-snacks",emoji:"🍜",serving:"1 small pack (35g)",calories:192,protein:4,carbs:17,fat:12,fiber:2,sugar:.7,sodium:295,cholesterol:0},{id:580,name:"Navratan Mixture",brand:"Haldiram's",category:"indian-snacks",emoji:"🥜",serving:"1 small pack (35g)",calories:210,protein:4.5,carbs:18,fat:13.5,fiber:2.2,sugar:2,sodium:280,cholesterol:0},{id:581,name:"Moong Dal",brand:"Haldiram's",category:"indian-snacks",emoji:"🫘",serving:"1 small pack (35g)",calories:198,protein:6.2,carbs:15,fat:12,fiber:2,sugar:.4,sodium:240,cholesterol:0},{id:582,name:"Masala Peanuts",brand:"Haldiram's",category:"indian-snacks",emoji:"🥜",serving:"1 small pack (35g)",calories:202,protein:7,carbs:10,fat:15,fiber:2.1,sugar:1.2,sodium:220,cholesterol:0},{id:583,name:"Khatta Meetha",brand:"Bikaji",category:"indian-snacks",emoji:"🥜",serving:"1 small pack (35g)",calories:184,protein:3.5,carbs:22,fat:9.5,fiber:1.4,sugar:5.5,sodium:260,cholesterol:0},{id:584,name:"Banana Chips",brand:"MTR",category:"indian-snacks",emoji:"🍌",serving:"1 small pack (35g)",calories:190,protein:1.5,carbs:20,fat:11.5,fiber:1.7,sugar:4.5,sodium:85,cholesterol:0},{id:585,name:"Mad Angles Achaari Masti",brand:"Bingo!",category:"indian-snacks",emoji:"🔺",serving:"1 pack (32g)",calories:164,protein:2.4,carbs:19,fat:8.6,fiber:1.1,sugar:1.5,sodium:235,cholesterol:0},{id:586,name:"Tedhe Medhe",brand:"Bingo!",category:"indian-snacks",emoji:"🥨",serving:"1 pack (30g)",calories:154,protein:2.2,carbs:18,fat:8.2,fiber:.9,sugar:1.4,sodium:210,cholesterol:0},{id:587,name:"Lay's Magic Masala",brand:"Lay's India",category:"indian-snacks",emoji:"🍟",serving:"1 pack (28g)",calories:155,protein:2,carbs:15,fat:10,fiber:1.1,sugar:.6,sodium:175,cholesterol:0},{id:588,name:"Kurkure Masala Munch",brand:"Kurkure",category:"indian-snacks",emoji:"🌽",serving:"1 pack (28g)",calories:152,protein:2,carbs:16,fat:9,fiber:.9,sugar:1.1,sodium:230,cholesterol:0},{id:589,name:"Kurkure Green Chutney Rajasthani Style",brand:"Kurkure",category:"indian-snacks",emoji:"🌽",serving:"1 pack (28g)",calories:150,protein:2,carbs:16,fat:8.8,fiber:.8,sugar:1,sodium:225,cholesterol:0},{id:590,name:"Too Yumm! Multigrain Chips",brand:"Too Yumm!",category:"indian-snacks",emoji:"🍟",serving:"1 pack (25g)",calories:118,protein:2.6,carbs:15,fat:5.4,fiber:1.8,sugar:.8,sodium:170,cholesterol:0},{id:591,name:"Balaji Wafers Masala Masti",brand:"Balaji",category:"indian-snacks",emoji:"🍟",serving:"1 pack (28g)",calories:153,protein:2,carbs:16,fat:9.2,fiber:1,sugar:.7,sodium:180,cholesterol:0},{id:592,name:"Makhana Peri Peri",brand:"Open Secret",category:"indian-snacks",emoji:"🍿",serving:"1 pack (25g)",calories:98,protein:3.2,carbs:13,fat:3.8,fiber:1.7,sugar:.6,sodium:145,cholesterol:0},{id:593,name:"Roasted Chana",brand:"Generic India",category:"indian-snacks",emoji:"🫘",serving:"1 pack (30g)",calories:112,protein:6.1,carbs:18,fat:1.8,fiber:4.2,sugar:1.5,sodium:65,cholesterol:0},{id:594,name:"Chikki (Peanut Jaggery)",brand:"Generic India",category:"indian-snacks",emoji:"🥜",serving:"1 bar (25g)",calories:128,protein:3.2,carbs:14,fat:6.5,fiber:1.1,sugar:9.5,sodium:18,cholesterol:0},{id:595,name:"Soya Sticks Chatpata",brand:"Too Yumm!",category:"indian-snacks",emoji:"🥨",serving:"1 pack (20g)",calories:96,protein:6.5,carbs:8.2,fat:4.2,fiber:1.5,sugar:.8,sodium:158,cholesterol:0},{id:596,name:"Cream & Onion Rings",brand:"Bingo!",category:"indian-snacks",emoji:"🧅",serving:"1 pack (28g)",calories:149,protein:1.9,carbs:16,fat:8.8,fiber:.9,sugar:1,sodium:205,cholesterol:0},{id:597,name:"Unibic Choco Chip Cookies",brand:"Unibic",category:"indian-snacks",emoji:"🍪",serving:"3 cookies (30g)",calories:152,protein:2,carbs:20,fat:7.2,fiber:.8,sugar:9,sodium:102,cholesterol:3},{id:598,name:"Unibic Oatmeal Digestive",brand:"Unibic",category:"indian-snacks",emoji:"🍪",serving:"3 biscuits (30g)",calories:136,protein:2.4,carbs:19,fat:5.5,fiber:1.6,sugar:5.6,sodium:112,cholesterol:0},{id:599,name:"Baked Ragi Chips",brand:"Snackible",category:"indian-snacks",emoji:"🍟",serving:"1 pack (25g)",calories:108,protein:2.2,carbs:14,fat:4.8,fiber:1.9,sugar:.7,sodium:148,cholesterol:0},{id:600,name:"Fox Nuts Himalayan Salt",brand:"Too Yumm!",category:"indian-snacks",emoji:"🍿",serving:"1 pack (20g)",calories:82,protein:2.8,carbs:11,fat:3,fiber:1.3,sugar:.4,sodium:120,cholesterol:0},{id:350,name:"Big Mac",brand:"McDonald's",category:"fast-food",emoji:"🍔",serving:"1 burger (215g)",calories:550,protein:25,carbs:45,fat:30,fiber:3,sugar:9,sodium:1010,cholesterol:80},{id:351,name:"Quarter Pounder with Cheese",brand:"McDonald's",category:"fast-food",emoji:"🍔",serving:"1 burger (202g)",calories:520,protein:30,carbs:42,fat:26,fiber:2,sugar:10,sodium:1100,cholesterol:95},{id:352,name:"Chicken McNuggets (6 pc)",brand:"McDonald's",category:"fast-food",emoji:"🍗",serving:"6 pieces (96g)",calories:250,protein:15,carbs:15,fat:15,fiber:1,sugar:0,sodium:500,cholesterol:35},{id:353,name:"McChicken",brand:"McDonald's",category:"fast-food",emoji:"🍔",serving:"1 sandwich (147g)",calories:400,protein:14,carbs:40,fat:21,fiber:2,sugar:5,sodium:780,cholesterol:40},{id:354,name:"Whopper",brand:"Burger King",category:"fast-food",emoji:"🍔",serving:"1 burger (291g)",calories:657,protein:28,carbs:49,fat:40,fiber:2,sugar:11,sodium:911,cholesterol:87},{id:355,name:'Subway 6" Turkey Sub',brand:"Subway",category:"fast-food",emoji:"🥖",serving:"1 sub (233g)",calories:280,protein:18,carbs:46,fat:3.5,fiber:5,sugar:7,sodium:760,cholesterol:20},{id:356,name:'Subway 6" Italian BMT',brand:"Subway",category:"fast-food",emoji:"🥖",serving:"1 sub (243g)",calories:410,protein:20,carbs:44,fat:18,fiber:5,sugar:7,sodium:1290,cholesterol:55},{id:357,name:"Pizza Slice (Pepperoni)",brand:"Generic",category:"fast-food",emoji:"🍕",serving:"1 slice (107g)",calories:298,protein:13,carbs:34,fat:12,fiber:2.5,sugar:3.6,sodium:640,cholesterol:28},{id:358,name:"Pizza Slice (Cheese)",brand:"Generic",category:"fast-food",emoji:"🍕",serving:"1 slice (107g)",calories:266,protein:12,carbs:33,fat:10,fiber:2.3,sugar:3.8,sodium:590,cholesterol:23},{id:359,name:"Burrito (Chicken)",brand:"Chipotle",category:"fast-food",emoji:"🌯",serving:"1 burrito (510g)",calories:665,protein:38,carbs:74,fat:22,fiber:10,sugar:4,sodium:1410,cholesterol:65},{id:360,name:"Taco (Beef, Hard Shell)",brand:"Taco Bell",category:"fast-food",emoji:"🌮",serving:"1 taco (78g)",calories:170,protein:8,carbs:13,fat:10,fiber:3,sugar:1,sodium:310,cholesterol:25},{id:361,name:"KFC Original Drumstick",brand:"KFC",category:"fast-food",emoji:"🍗",serving:"1 piece (59g)",calories:130,protein:13,carbs:4,fat:7,fiber:0,sugar:0,sodium:350,cholesterol:70},{id:362,name:"Hot Dog",brand:"Generic",category:"fast-food",emoji:"🌭",serving:"1 with bun (98g)",calories:290,protein:11,carbs:24,fat:17,fiber:1,sugar:4,sodium:810,cholesterol:35},{id:363,name:"Fish & Chips",brand:"Generic",category:"fast-food",emoji:"🐟",serving:"1 serving (300g)",calories:585,protein:22,carbs:52,fat:32,fiber:3,sugar:2,sodium:720,cholesterol:45},{id:364,name:"Caesar Salad (with dressing)",brand:"Generic",category:"fast-food",emoji:"🥗",serving:"1 bowl (250g)",calories:360,protein:15,carbs:18,fat:26,fiber:3,sugar:3,sodium:780,cholesterol:40},{id:365,name:"Fried Chicken Sandwich",brand:"Generic",category:"fast-food",emoji:"🍔",serving:"1 sandwich (220g)",calories:490,protein:24,carbs:44,fat:24,fiber:2,sugar:6,sodium:990,cholesterol:55},{id:366,name:"Onion Rings",brand:"Generic",category:"fast-food",emoji:"🧅",serving:"medium (117g)",calories:411,protein:5,carbs:42,fat:25,fiber:2,sugar:5,sodium:587,cholesterol:5},{id:367,name:"Mozzarella Sticks",brand:"Generic",category:"fast-food",emoji:"🧀",serving:"4 pieces (100g)",calories:312,protein:13,carbs:27,fat:17,fiber:1,sugar:2,sodium:680,cholesterol:30},{id:368,name:"Chicken Wrap",brand:"Generic",category:"fast-food",emoji:"🌯",serving:"1 wrap (260g)",calories:420,protein:26,carbs:40,fat:18,fiber:3,sugar:3,sodium:880,cholesterol:50},{id:369,name:"French Toast Sticks",brand:"Generic",category:"fast-food",emoji:"🍞",serving:"5 sticks (88g)",calories:310,protein:5,carbs:37,fat:16,fiber:1,sugar:12,sodium:350,cholesterol:30},{id:400,name:"Dal (Lentil Curry)",brand:"Homemade",category:"indian",emoji:"🍛",serving:"1 cup (200g)",calories:198,protein:12,carbs:30,fat:4,fiber:8,sugar:3,sodium:480,cholesterol:0},{id:401,name:"Chicken Tikka Masala",brand:"Generic",category:"indian",emoji:"🍛",serving:"1 cup (240g)",calories:310,protein:25,carbs:15,fat:17,fiber:2,sugar:6,sodium:680,cholesterol:85},{id:402,name:"Palak Paneer",brand:"Generic",category:"indian",emoji:"🍛",serving:"1 cup (220g)",calories:260,protein:14,carbs:10,fat:18,fiber:4,sugar:4,sodium:520,cholesterol:40},{id:403,name:"Butter Chicken",brand:"Generic",category:"indian",emoji:"🍛",serving:"1 cup (240g)",calories:340,protein:28,carbs:12,fat:20,fiber:2,sugar:5,sodium:720,cholesterol:90},{id:404,name:"Biryani (Chicken)",brand:"Homemade",category:"indian",emoji:"🍚",serving:"1 cup (250g)",calories:320,protein:18,carbs:42,fat:10,fiber:2,sugar:2,sodium:540,cholesterol:50},{id:405,name:"Roti / Chapati",brand:"Homemade",category:"indian",emoji:"🍞",serving:"1 roti (40g)",calories:104,protein:3.5,carbs:18,fat:2.5,fiber:2,sugar:.3,sodium:140,cholesterol:0},{id:406,name:"Paratha (plain)",brand:"Homemade",category:"indian",emoji:"🍞",serving:"1 paratha (80g)",calories:260,protein:5,carbs:36,fat:10,fiber:2,sugar:1,sodium:340,cholesterol:0},{id:407,name:"Samosa (Potato)",brand:"Generic",category:"indian",emoji:"🥟",serving:"1 samosa (80g)",calories:252,protein:4,carbs:28,fat:14,fiber:2,sugar:2,sodium:380,cholesterol:0},{id:408,name:"Paneer Tikka",brand:"Generic",category:"indian",emoji:"🧀",serving:"6 pieces (150g)",calories:270,protein:18,carbs:8,fat:18,fiber:1,sugar:3,sodium:420,cholesterol:45},{id:409,name:"Aloo Gobi",brand:"Homemade",category:"indian",emoji:"🥔",serving:"1 cup (200g)",calories:175,protein:5,carbs:22,fat:8,fiber:4,sugar:4,sodium:380,cholesterol:0},{id:410,name:"Chole (Chickpea Curry)",brand:"Homemade",category:"indian",emoji:"🍛",serving:"1 cup (220g)",calories:240,protein:10,carbs:34,fat:8,fiber:8,sugar:4,sodium:520,cholesterol:0},{id:411,name:"Rajma (Kidney Bean Curry)",brand:"Homemade",category:"indian",emoji:"🍛",serving:"1 cup (220g)",calories:210,protein:11,carbs:32,fat:5,fiber:10,sugar:3,sodium:480,cholesterol:0},{id:412,name:"Dosa (plain)",brand:"Homemade",category:"indian",emoji:"🥞",serving:"1 dosa (85g)",calories:133,protein:3.5,carbs:22,fat:3.5,fiber:1,sugar:1,sodium:200,cholesterol:0},{id:413,name:"Masala Dosa",brand:"Homemade",category:"indian",emoji:"🥞",serving:"1 dosa (200g)",calories:280,protein:6,carbs:40,fat:11,fiber:3,sugar:2,sodium:380,cholesterol:0},{id:414,name:"Idli",brand:"Homemade",category:"indian",emoji:"🍙",serving:"2 idlis (80g)",calories:118,protein:3.2,carbs:24,fat:.6,fiber:1,sugar:.4,sodium:280,cholesterol:0},{id:415,name:"Upma",brand:"Homemade",category:"indian",emoji:"🥣",serving:"1 cup (200g)",calories:220,protein:5,carbs:32,fat:8,fiber:3,sugar:1,sodium:420,cholesterol:0},{id:416,name:"Poha",brand:"Homemade",category:"indian",emoji:"🍚",serving:"1 cup (180g)",calories:244,protein:4,carbs:40,fat:8,fiber:2,sugar:2,sodium:350,cholesterol:0},{id:417,name:"Raita (Yogurt)",brand:"Homemade",category:"indian",emoji:"🥛",serving:"1/2 cup (120g)",calories:65,protein:3,carbs:6,fat:3,fiber:.5,sugar:5,sodium:140,cholesterol:10},{id:418,name:"Gulab Jamun",brand:"Generic",category:"indian",emoji:"🍬",serving:"2 pieces (80g)",calories:290,protein:4,carbs:44,fat:11,fiber:.5,sugar:32,sodium:80,cholesterol:15},{id:419,name:"Jalebi",brand:"Generic",category:"indian",emoji:"🍬",serving:"3 pieces (75g)",calories:270,protein:2,carbs:52,fat:7,fiber:.3,sugar:40,sodium:30,cholesterol:0},{id:420,name:"Kheer (Rice Pudding)",brand:"Homemade",category:"indian",emoji:"🍮",serving:"1/2 cup (120g)",calories:175,protein:4.5,carbs:28,fat:5.5,fiber:.3,sugar:20,sodium:55,cholesterol:15},{id:421,name:"Paneer Butter Masala",brand:"Generic",category:"indian",emoji:"🍛",serving:"1 cup (240g)",calories:350,protein:16,carbs:14,fat:26,fiber:2,sugar:6,sodium:640,cholesterol:50},{id:422,name:"Tandoori Chicken",brand:"Generic",category:"indian",emoji:"🍗",serving:"1 piece (150g)",calories:195,protein:28,carbs:4,fat:7,fiber:1,sugar:2,sodium:520,cholesterol:80},{id:423,name:"Vada Pav",brand:"Street Food",category:"indian",emoji:"🍔",serving:"1 piece (140g)",calories:290,protein:6,carbs:40,fat:12,fiber:3,sugar:3,sodium:440,cholesterol:0},{id:424,name:"Pav Bhaji",brand:"Street Food",category:"indian",emoji:"🍞",serving:"1 plate (300g)",calories:400,protein:10,carbs:52,fat:18,fiber:6,sugar:8,sodium:680,cholesterol:15},{id:425,name:"Lassi (Sweet)",brand:"Generic",category:"indian",emoji:"🥛",serving:"1 glass (250ml)",calories:180,protein:6,carbs:28,fat:5,fiber:0,sugar:24,sodium:95,cholesterol:18},{id:450,name:"Olive Oil",brand:"Generic",category:"snacks",emoji:"🫒",serving:"1 tbsp (14ml)",calories:119,protein:0,carbs:0,fat:14,fiber:0,sugar:0,sodium:0,cholesterol:0},{id:451,name:"Honey",brand:"Generic",category:"snacks",emoji:"🍯",serving:"1 tbsp (21g)",calories:64,protein:.1,carbs:17,fat:0,fiber:0,sugar:17,sodium:1,cholesterol:0},{id:452,name:"Ketchup",brand:"Heinz",category:"snacks",emoji:"🍅",serving:"1 tbsp (17g)",calories:20,protein:.2,carbs:5.3,fat:0,fiber:0,sugar:3.7,sodium:160,cholesterol:0},{id:453,name:"Mayonnaise",brand:"Generic",category:"snacks",emoji:"🥚",serving:"1 tbsp (15g)",calories:94,protein:.1,carbs:.1,fat:10,fiber:0,sugar:.1,sodium:88,cholesterol:6},{id:454,name:"Soy Sauce",brand:"Generic",category:"snacks",emoji:"🫙",serving:"1 tbsp (18ml)",calories:9,protein:.9,carbs:1,fat:0,fiber:0,sugar:.4,sodium:879,cholesterol:0},{id:455,name:"Salsa",brand:"Generic",category:"snacks",emoji:"🫙",serving:"2 tbsp (32g)",calories:10,protein:.3,carbs:2,fat:0,fiber:.5,sugar:1.3,sodium:200,cholesterol:0},{id:456,name:"Ranch Dressing",brand:"Generic",category:"snacks",emoji:"🫙",serving:"2 tbsp (30g)",calories:129,protein:.4,carbs:1.8,fat:13,fiber:0,sugar:1,sodium:270,cholesterol:5},{id:457,name:"Balsamic Vinaigrette",brand:"Generic",category:"snacks",emoji:"🫙",serving:"2 tbsp (30ml)",calories:90,protein:0,carbs:5,fat:8,fiber:0,sugar:4,sodium:260,cholesterol:0},{id:458,name:"Maple Syrup",brand:"Generic",category:"snacks",emoji:"🍯",serving:"2 tbsp (40ml)",calories:104,protein:0,carbs:27,fat:0,fiber:0,sugar:24,sodium:4,cholesterol:0},{id:459,name:"Cream of Mushroom Soup",brand:"Campbell's",category:"snacks",emoji:"🍄",serving:"1 cup (248g)",calories:130,protein:2,carbs:9,fat:9,fiber:0,sugar:1,sodium:870,cholesterol:5},{id:460,name:"Chia Seeds",brand:"Generic",category:"snacks",emoji:"🌾",serving:"2 tbsp (28g)",calories:138,protein:4.7,carbs:12,fat:8.7,fiber:9.8,sugar:0,sodium:5,cholesterol:0},{id:461,name:"Flax Seeds",brand:"Generic",category:"snacks",emoji:"🌾",serving:"2 tbsp (20g)",calories:110,protein:3.8,carbs:6,fat:8.5,fiber:5.6,sugar:.3,sodium:6,cholesterol:0},{id:462,name:"Sunflower Seeds",brand:"Generic",category:"snacks",emoji:"🌻",serving:"1/4 cup (35g)",calories:204,protein:7.3,carbs:7,fat:18,fiber:3,sugar:.9,sodium:1,cholesterol:0},{id:463,name:"Dried Mango",brand:"Generic",category:"snacks",emoji:"🥭",serving:"1/4 cup (40g)",calories:128,protein:.8,carbs:31,fat:.5,fiber:1,sugar:27,sodium:50,cholesterol:0},{id:500,name:"Scrambled Eggs (2 eggs)",brand:"Homemade",category:"protein",emoji:"🍳",serving:"2 eggs (122g)",calories:182,protein:12,carbs:2,fat:14,fiber:0,sugar:1.4,sodium:342,cholesterol:370},{id:501,name:"Pancakes (3 stack)",brand:"Homemade",category:"grains",emoji:"🥞",serving:"3 pancakes (180g)",calories:417,protein:10,carbs:58,fat:16,fiber:2,sugar:12,sodium:600,cholesterol:80},{id:502,name:"Waffle",brand:"Generic",category:"grains",emoji:"🧇",serving:"1 waffle (75g)",calories:218,protein:5.5,carbs:25,fat:11,fiber:.8,sugar:4,sodium:383,cholesterol:52},{id:503,name:"Spaghetti with Marinara",brand:"Homemade",category:"grains",emoji:"🍝",serving:"1 plate (350g)",calories:420,protein:14,carbs:72,fat:8,fiber:6,sugar:10,sodium:640,cholesterol:0},{id:504,name:"Spaghetti Bolognese",brand:"Homemade",category:"grains",emoji:"🍝",serving:"1 plate (400g)",calories:520,protein:28,carbs:60,fat:18,fiber:5,sugar:8,sodium:720,cholesterol:55},{id:505,name:"Fried Rice",brand:"Homemade",category:"grains",emoji:"🍚",serving:"1 cup (200g)",calories:238,protein:7,carbs:36,fat:8,fiber:1.5,sugar:1,sodium:680,cholesterol:45},{id:506,name:"Stir Fry (Chicken & Veg)",brand:"Homemade",category:"protein",emoji:"🥘",serving:"1 cup (250g)",calories:280,protein:24,carbs:18,fat:12,fiber:4,sugar:6,sodium:720,cholesterol:60},{id:507,name:"Grilled Cheese Sandwich",brand:"Homemade",category:"grains",emoji:"🧀",serving:"1 sandwich (160g)",calories:440,protein:16,carbs:28,fat:30,fiber:2,sugar:4,sodium:860,cholesterol:65},{id:508,name:"PB&J Sandwich",brand:"Homemade",category:"grains",emoji:"🥜",serving:"1 sandwich (130g)",calories:390,protein:12,carbs:52,fat:16,fiber:4,sugar:20,sodium:410,cholesterol:0},{id:509,name:"Tuna Salad",brand:"Homemade",category:"protein",emoji:"🥗",serving:"1 cup (200g)",calories:280,protein:26,carbs:10,fat:16,fiber:1,sugar:4,sodium:520,cholesterol:45},{id:510,name:"Chicken Salad",brand:"Homemade",category:"protein",emoji:"🥗",serving:"1 cup (200g)",calories:320,protein:28,carbs:6,fat:20,fiber:1,sugar:2,sodium:480,cholesterol:70},{id:511,name:"Sushi Roll (California)",brand:"Generic",category:"protein",emoji:"🍣",serving:"8 pieces (185g)",calories:255,protein:9,carbs:38,fat:7,fiber:2,sugar:9,sodium:540,cholesterol:15},{id:512,name:"Sushi Roll (Salmon)",brand:"Generic",category:"protein",emoji:"🍣",serving:"8 pieces (185g)",calories:280,protein:14,carbs:36,fat:9,fiber:2,sugar:8,sodium:520,cholesterol:20},{id:513,name:"Ramen (with pork broth)",brand:"Generic",category:"grains",emoji:"🍜",serving:"1 bowl (500ml)",calories:450,protein:18,carbs:56,fat:16,fiber:2,sugar:4,sodium:1820,cholesterol:45},{id:514,name:"Pho (Beef)",brand:"Generic",category:"protein",emoji:"🍜",serving:"1 bowl (600ml)",calories:380,protein:24,carbs:42,fat:12,fiber:1,sugar:4,sodium:1400,cholesterol:50},{id:515,name:"Mac and Cheese",brand:"Kraft",category:"grains",emoji:"🧀",serving:"1 cup (200g)",calories:350,protein:12,carbs:47,fat:13,fiber:2,sugar:6,sodium:710,cholesterol:15},{id:516,name:"Chili (beef & beans)",brand:"Homemade",category:"protein",emoji:"🌶️",serving:"1 cup (253g)",calories:290,protein:22,carbs:24,fat:12,fiber:6,sugar:4,sodium:840,cholesterol:40},{id:517,name:"Overnight Oats",brand:"Homemade",category:"grains",emoji:"🥣",serving:"1 jar (300g)",calories:350,protein:12,carbs:50,fat:12,fiber:8,sugar:18,sodium:120,cholesterol:5},{id:518,name:"Acai Bowl",brand:"Generic",category:"fruits",emoji:"🫐",serving:"1 bowl (300g)",calories:380,protein:6,carbs:60,fat:14,fiber:8,sugar:35,sodium:20,cholesterol:0},{id:519,name:"Avocado Toast",brand:"Homemade",category:"grains",emoji:"🥑",serving:"1 slice (150g)",calories:230,protein:6,carbs:22,fat:14,fiber:6,sugar:2,sodium:280,cholesterol:0},{id:520,name:"Omelette (3 egg, veggie)",brand:"Homemade",category:"protein",emoji:"🍳",serving:"1 omelette (200g)",calories:280,protein:20,carbs:6,fat:20,fiber:2,sugar:3,sodium:440,cholesterol:560}],Rr=()=>{};var at={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let n=i.charCodeAt(r);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(n=65536+((n&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},Br=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const n=i[t++];if(n<128)e[r++]=String.fromCharCode(n);else if(n>191&&n<224){const s=i[t++];e[r++]=String.fromCharCode((n&31)<<6|s&63)}else if(n>239&&n<365){const s=i[t++],a=i[t++],o=i[t++],c=((n&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=i[t++],a=i[t++];e[r++]=String.fromCharCode((n&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Nt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let n=0;n<i.length;n+=3){const s=i[n],a=n+1<i.length,o=a?i[n+1]:0,c=n+2<i.length,l=c?i[n+2]:0,d=s>>2,h=(s&3)<<4|o>>4;let g=(o&15)<<2|l>>6,f=l&63;c||(f=64,a||(g=64)),r.push(t[d],t[h],t[g],t[f])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ot(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Br(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let n=0;n<i.length;){const s=t[i.charAt(n++)],o=n<i.length?t[i.charAt(n)]:0;++n;const l=n<i.length?t[i.charAt(n)]:64;++n;const h=n<i.length?t[i.charAt(n)]:64;if(++n,s==null||o==null||l==null||h==null)throw new jr;const g=s<<2|o>>4;if(r.push(g),l!==64){const f=o<<4&240|l>>2;if(r.push(f),h!==64){const x=l<<6&192|h;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Or=function(i){const e=Ot(i);return Nt.encodeByteArray(e,!0)},Lt=function(i){return Or(i).replace(/\./g,"")},Ft=function(i){try{return Nt.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=()=>Nr().__FIREBASE_DEFAULTS__,Fr=()=>{if(typeof process>"u"||typeof at>"u")return;const i=at.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},xr=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ft(i[1]);return e&&JSON.parse(e)},Ve=()=>{try{return Rr()||Lr()||Fr()||xr()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Gr=i=>{var e,t;return(t=(e=Ve())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},xt=()=>{var i;return(i=Ve())==null?void 0:i.config},Gt=i=>{var e;return(e=Ve())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $r(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())}function Hr(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wr(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Vr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zr(){const i=p();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function qr(){try{return typeof indexedDB=="object"}catch{return!1}}function Kr(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var s;e(((s=n.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="FirebaseError";class O extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Jr,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ae.prototype.create)}}class ae{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],a=s?Yr(s,r):"Error",o=`${this.serviceName}: ${a} (${n}).`;return new O(n,o,r)}}function Yr(i,e){return i.replace(Qr,(t,r)=>{const n=e[r];return n!=null?String(n):`<${r}?>`})}const Qr=/\{\$([^}]+)}/g;function Xr(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function K(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const n of t){if(!r.includes(n))return!1;const s=i[n],a=e[n];if(ot(s)&&ot(a)){if(!K(s,a))return!1}else if(s!==a)return!1}for(const n of r)if(!t.includes(n))return!1;return!0}function ot(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(i){const e=[];for(const[t,r]of Object.entries(i))Array.isArray(r)?r.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function X(i){const e={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[n,s]=r.split("=");e[decodeURIComponent(n)]=decodeURIComponent(s)}}),e}function Z(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Zr(i,e){const t=new ei(i,e);return t.subscribe.bind(t)}class ei{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ti(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:r},n.next===void 0&&(n.next=Ae),n.error===void 0&&(n.error=Ae),n.complete===void 0&&(n.complete=Ae);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ti(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Ae(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ri(i){return(await fetch(i,{credentials:"include"})).ok}class J{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ur;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(n){if(r)return null;throw n}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(si(e))try{this.getOrInitializeService({instanceIdentifier:G})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:n});r.resolve(s)}catch{}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(n)}return n}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),n=this.onInitCallbacks.get(r)??new Set;n.add(e),this.onInitCallbacks.set(r,n);const s=this.instances.get(r);return s&&e(s,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ni(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ni(i){return i===G?void 0:i}function si(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ii(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(m||(m={}));const oi={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},ci=m.INFO,li={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},di=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),n=li[e];if(n)console[n](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ut{constructor(e){this.name=e,this._logLevel=ci,this._logHandler=di,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}const ui=(i,e)=>e.some(t=>i instanceof t);let ct,lt;function hi(){return ct||(ct=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gi(){return lt||(lt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $t=new WeakMap,Ne=new WeakMap,Ht=new WeakMap,Pe=new WeakMap,qe=new WeakMap;function mi(i){const e=new Promise((t,r)=>{const n=()=>{i.removeEventListener("success",s),i.removeEventListener("error",a)},s=()=>{t(B(i.result)),n()},a=()=>{r(i.error),n()};i.addEventListener("success",s),i.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$t.set(t,i)}).catch(()=>{}),qe.set(e,i),e}function fi(i){if(Ne.has(i))return;const e=new Promise((t,r)=>{const n=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",a),i.removeEventListener("abort",a)},s=()=>{t(),n()},a=()=>{r(i.error||new DOMException("AbortError","AbortError")),n()};i.addEventListener("complete",s),i.addEventListener("error",a),i.addEventListener("abort",a)});Ne.set(i,e)}let Le={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Ne.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ht.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return B(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function pi(i){Le=i(Le)}function bi(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(Me(this),e,...t);return Ht.set(r,e.sort?e.sort():[e]),B(r)}:gi().includes(i)?function(...e){return i.apply(Me(this),e),B($t.get(this))}:function(...e){return B(i.apply(Me(this),e))}}function yi(i){return typeof i=="function"?bi(i):(i instanceof IDBTransaction&&fi(i),ui(i,hi())?new Proxy(i,Le):i)}function B(i){if(i instanceof IDBRequest)return mi(i);if(Pe.has(i))return Pe.get(i);const e=yi(i);return e!==i&&(Pe.set(i,e),qe.set(e,i)),e}const Me=i=>qe.get(i);function vi(i,e,{blocked:t,upgrade:r,blocking:n,terminated:s}={}){const a=indexedDB.open(i,e),o=B(a);return r&&a.addEventListener("upgradeneeded",c=>{r(B(a.result),c.oldVersion,c.newVersion,B(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),n&&c.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Ii=["get","getKey","getAll","getAllKeys","count"],Ei=["put","add","delete","clear"],De=new Map;function dt(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(De.get(e))return De.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,n=Ei.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(n||Ii.includes(t)))return;const s=async function(a,...o){const c=this.transaction(a,n?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[t](...o),n&&c.done]))[0]};return De.set(e,s),s}pi(i=>({...i,get:(e,t,r)=>dt(e,t)||i.get(e,t,r),has:(e,t)=>!!dt(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ki(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ki(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fe="@firebase/app",ut="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new Ut("@firebase/app"),wi="@firebase/app-compat",Si="@firebase/analytics-compat",Ci="@firebase/analytics",Ti="@firebase/app-check-compat",Ai="@firebase/app-check",Pi="@firebase/auth",Mi="@firebase/auth-compat",Di="@firebase/database",Ri="@firebase/data-connect",Bi="@firebase/database-compat",ji="@firebase/functions",Oi="@firebase/functions-compat",Ni="@firebase/installations",Li="@firebase/installations-compat",Fi="@firebase/messaging",xi="@firebase/messaging-compat",Gi="@firebase/performance",Ui="@firebase/performance-compat",$i="@firebase/remote-config",Hi="@firebase/remote-config-compat",Wi="@firebase/storage",Vi="@firebase/storage-compat",zi="@firebase/firestore",qi="@firebase/ai",Ki="@firebase/firestore-compat",Ji="firebase",Yi="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="[DEFAULT]",Qi={[Fe]:"fire-core",[wi]:"fire-core-compat",[Ci]:"fire-analytics",[Si]:"fire-analytics-compat",[Ai]:"fire-app-check",[Ti]:"fire-app-check-compat",[Pi]:"fire-auth",[Mi]:"fire-auth-compat",[Di]:"fire-rtdb",[Ri]:"fire-data-connect",[Bi]:"fire-rtdb-compat",[ji]:"fire-fn",[Oi]:"fire-fn-compat",[Ni]:"fire-iid",[Li]:"fire-iid-compat",[Fi]:"fire-fcm",[xi]:"fire-fcm-compat",[Gi]:"fire-perf",[Ui]:"fire-perf-compat",[$i]:"fire-rc",[Hi]:"fire-rc-compat",[Wi]:"fire-gcs",[Vi]:"fire-gcs-compat",[zi]:"fire-fst",[Ki]:"fire-fst-compat",[qi]:"fire-vertex","fire-js":"fire-js",[Ji]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new Map,Xi=new Map,Ge=new Map;function ht(i,e){try{i.container.addComponent(e)}catch(t){C.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function re(i){const e=i.name;if(Ge.has(e))return C.debug(`There were multiple attempts to register component ${e}.`),!1;Ge.set(e,i);for(const t of te.values())ht(t,i);for(const t of Xi.values())ht(t,i);return!0}function Wt(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function b(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},j=new ae("app","Firebase",Zi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new J("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=Yi;function Vt(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r={name:xe,automaticDataCollectionEnabled:!0,...e},n=r.name;if(typeof n!="string"||!n)throw j.create("bad-app-name",{appName:String(n)});if(t||(t=xt()),!t)throw j.create("no-options");const s=te.get(n);if(s){if(K(t,s.options)&&K(r,s.config))return s;throw j.create("duplicate-app",{appName:n})}const a=new ai(n);for(const c of Ge.values())a.addComponent(c);const o=new en(t,r,a);return te.set(n,o),o}function zt(i=xe){const e=te.get(i);if(!e&&i===xe&&xt())return Vt();if(!e)throw j.create("no-app",{appName:i});return e}function tn(){return Array.from(te.values())}function W(i,e,t){let r=Qi[i]??i;t&&(r+=`-${t}`);const n=r.match(/\s|\//),s=e.match(/\s|\//);if(n||s){const a=[`Unable to register library "${r}" with version "${e}":`];n&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),n&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),C.warn(a.join(" "));return}re(new J(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="firebase-heartbeat-database",nn=1,ie="firebase-heartbeat-store";let Re=null;function qt(){return Re||(Re=vi(rn,nn,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ie)}catch(t){console.warn(t)}}}}).catch(i=>{throw j.create("idb-open",{originalErrorMessage:i.message})})),Re}async function sn(i){try{const t=(await qt()).transaction(ie),r=await t.objectStore(ie).get(Kt(i));return await t.done,r}catch(e){if(e instanceof O)C.warn(e.message);else{const t=j.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});C.warn(t.message)}}}async function gt(i,e){try{const r=(await qt()).transaction(ie,"readwrite");await r.objectStore(ie).put(e,Kt(i)),await r.done}catch(t){if(t instanceof O)C.warn(t.message);else{const r=j.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});C.warn(r.message)}}}function Kt(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=1024,on=30;class cn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dn(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mt();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>on){const a=un(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){C.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mt(),{heartbeatsToSend:r,unsentEntries:n}=ln(this._heartbeatsCache.heartbeats),s=Lt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return C.warn(t),""}}}function mt(){return new Date().toISOString().substring(0,10)}function ln(i,e=an){const t=[];let r=i.slice();for(const n of i){const s=t.find(a=>a.agent===n.agent);if(s){if(s.dates.push(n.date),ft(t)>e){s.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),ft(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class dn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qr()?Kr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sn(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ft(i){return Lt(JSON.stringify({version:2,heartbeats:i})).length}function un(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let r=1;r<i.length;r++)i[r].date<t&&(t=i[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(i){re(new J("platform-logger",e=>new _i(e),"PRIVATE")),re(new J("heartbeat",e=>new cn(e),"PRIVATE")),W(Fe,ut,i),W(Fe,ut,"esm2020"),W("fire-js","")}hn("");var gn="firebase",mn="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W(gn,mn,"app");function Jt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fn=Jt,Yt=new ae("auth","Firebase",Jt());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Ut("@firebase/auth");function pn(i,...e){ye.logLevel<=m.WARN&&ye.warn(`Auth (${ce}): ${i}`,...e)}function me(i,...e){ye.logLevel<=m.ERROR&&ye.error(`Auth (${ce}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(i,...e){throw Je(i,...e)}function I(i,...e){return Je(i,...e)}function Ke(i,e,t){const r={...fn(),[e]:t};return new ae("auth","Firebase",r).create(e,{appName:i.name})}function S(i){return Ke(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bn(i,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&y(i,"argument-error"),Ke(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Je(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return Yt.create(i,...e)}function u(i,e,...t){if(!i)throw Je(e,...t)}function k(i){const e="INTERNAL ASSERTION FAILED: "+i;throw me(e),new Error(e)}function T(i,e){i||k(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function yn(){return pt()==="http:"||pt()==="https:"}function pt(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yn()||Wr()||"connection"in navigator)?navigator.onLine:!0}function In(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=$r()||Vr()}get(){return vn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(i,e){T(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kn=new le(3e4,6e4);function N(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function L(i,e,t,r,n={}){return Xt(i,n,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=oe({key:i.config.apiKey,...a}).slice(1),c=await i._getAdditionalHeaders();c["Content-Type"]="application/json",i.languageCode&&(c["X-Firebase-Locale"]=i.languageCode);const l={method:e,headers:c,...s};return Hr()||(l.referrerPolicy="no-referrer"),i.emulatorConfig&&ze(i.emulatorConfig.host)&&(l.credentials="include"),Qt.fetch()(await Zt(i,i.config.apiHost,t,o),l)})}async function Xt(i,e,t){i._canInitEmulator=!1;const r={...En,...e};try{const n=new Sn(i),s=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ge(i,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ge(i,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ge(i,"email-already-in-use",a);if(c==="USER_DISABLED")throw ge(i,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ke(i,d,l);y(i,d)}}catch(n){if(n instanceof O)throw n;y(i,"network-request-failed",{message:String(n)})}}async function de(i,e,t,r,n={}){const s=await L(i,e,t,r,n);return"mfaPendingCredential"in s&&y(i,"multi-factor-auth-required",{_serverResponse:s}),s}async function Zt(i,e,t,r){const n=`${e}${t}?${r}`,s=i,a=s.config.emulator?Ye(i.config,n):`${i.config.apiScheme}://${n}`;return _n.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function wn(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(I(this.auth,"network-request-failed")),kn.get())})}}function ge(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const n=I(i,e,r);return n.customData._tokenResponse=t,n}function bt(i){return i!==void 0&&i.enterprise!==void 0}class Cn{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wn(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tn(i,e){return L(i,"GET","/v2/recaptchaConfig",N(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(i,e){return L(i,"POST","/v1/accounts:delete",e)}async function ve(i,e){return L(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pn(i,e=!1){const t=A(i),r=await t.getIdToken(e),n=Qe(r);u(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const s=typeof n.firebase=="object"?n.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:n,token:r,authTime:ee(Be(n.auth_time)),issuedAtTime:ee(Be(n.iat)),expirationTime:ee(Be(n.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Be(i){return Number(i)*1e3}function Qe(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return me("JWT malformed, contained fewer than 3 sections"),null;try{const n=Ft(t);return n?JSON.parse(n):(me("Failed to decode base64 JWT payload"),null)}catch(n){return me("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function yt(i){const e=Qe(i);return u(e,"internal-error"),u(typeof e.exp<"u","internal-error"),u(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof O&&Mn(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Mn({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ee(this.lastLoginAt),this.creationTime=ee(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(i){var h;const e=i.auth,t=await i.getIdToken(),r=await ne(i,ve(e,{idToken:t}));u(r==null?void 0:r.users.length,e,"internal-error");const n=r.users[0];i._notifyReloadListener(n);const s=(h=n.providerUserInfo)!=null&&h.length?er(n.providerUserInfo):[],a=Bn(i.providerData,s),o=i.isAnonymous,c=!(i.email&&n.passwordHash)&&!(a!=null&&a.length),l=o?c:!1,d={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:a,metadata:new $e(n.createdAt,n.lastLoginAt),isAnonymous:l};Object.assign(i,d)}async function Rn(i){const e=A(i);await Ie(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bn(i,e){return[...i.filter(r=>!e.some(n=>n.providerId===r.providerId)),...e]}function er(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(i,e){const t=await Xt(i,{},async()=>{const r=oe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:s}=i.config,a=await Zt(i,n,"/v1/token",`key=${s}`),o=await i._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:r};return i.emulatorConfig&&ze(i.emulatorConfig.host)&&(c.credentials="include"),Qt.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function On(i,e){return L(i,"POST","/v2/accounts:revokeToken",N(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){u(e.idToken,"internal-error"),u(typeof e.idToken<"u","internal-error"),u(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){u(e.length!==0,"internal-error");const t=yt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(u(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:n,expiresIn:s}=await jn(e,t);this.updateTokensAndExpiration(r,n,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:s}=t,a=new V;return r&&(u(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),n&&(u(typeof n=="string","internal-error",{appName:e}),a.accessToken=n),s&&(u(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new V,this.toJSON())}_performRefresh(){return k("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(i,e){u(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class v{constructor({uid:e,auth:t,stsTokenManager:r,...n}){this.providerId="firebase",this.proactiveRefresh=new Dn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new $e(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await ne(this,this.stsTokenManager.getToken(this.auth,e));return u(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pn(this,e)}reload(){return Rn(this)}_assign(e){this!==e&&(u(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new v({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){u(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ie(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(b(this.auth.app))return Promise.reject(S(this.auth));const e=await this.getIdToken();return await ne(this,An(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,n=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,o=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:h,emailVerified:g,isAnonymous:f,providerData:x,stsTokenManager:st}=t;u(h&&st,e,"internal-error");const Pr=V.fromJSON(this.name,st);u(typeof h=="string",e,"internal-error"),P(r,e.name),P(n,e.name),u(typeof g=="boolean",e,"internal-error"),u(typeof f=="boolean",e,"internal-error"),P(s,e.name),P(a,e.name),P(o,e.name),P(c,e.name),P(l,e.name),P(d,e.name);const Te=new v({uid:h,auth:e,email:n,emailVerified:g,displayName:r,isAnonymous:f,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:Pr,createdAt:l,lastLoginAt:d});return x&&Array.isArray(x)&&(Te.providerData=x.map(Mr=>({...Mr}))),c&&(Te._redirectEventId=c),Te}static async _fromIdTokenResponse(e,t,r=!1){const n=new V;n.updateFromServerResponse(t);const s=new v({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await Ie(s),s}static async _fromGetAccountInfoResponse(e,t,r){const n=t.users[0];u(n.localId!==void 0,"internal-error");const s=n.providerUserInfo!==void 0?er(n.providerUserInfo):[],a=!(n.email&&n.passwordHash)&&!(s!=null&&s.length),o=new V;o.updateFromIdToken(r);const c=new v({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:a}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new $e(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Map;function w(i){T(i instanceof Function,"Expected a class definition");let e=vt.get(i);return e?(T(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,vt.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tr.type="NONE";const It=tr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(i,e,t){return`firebase:${i}:${e}:${t}`}class z{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:s}=this.auth;this.fullUserKey=fe(this.userKey,n.apiKey,s),this.fullPersistenceKey=fe("persistence",n.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ve(this.auth,{idToken:e}).catch(()=>{});return t?v._fromGetAccountInfoResponse(this.auth,t,e):null}return v._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new z(w(It),e,r);const n=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=n[0]||w(It);const a=fe(r,e.config.apiKey,e.name);let o=null;for(const l of t)try{const d=await l._get(a);if(d){let h;if(typeof d=="string"){const g=await ve(e,{idToken:d}).catch(()=>{});if(!g)break;h=await v._fromGetAccountInfoResponse(e,g,d)}else h=v._fromJSON(e,d);l!==s&&(o=h),s=l;break}}catch{}const c=n.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new z(s,e,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new z(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(or(e))return"Blackberry";if(cr(e))return"Webos";if(ir(e))return"Safari";if((e.includes("chrome/")||nr(e))&&!e.includes("edge/"))return"Chrome";if(ar(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rr(i=p()){return/firefox\//i.test(i)}function ir(i=p()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nr(i=p()){return/crios\//i.test(i)}function sr(i=p()){return/iemobile/i.test(i)}function ar(i=p()){return/android/i.test(i)}function or(i=p()){return/blackberry/i.test(i)}function cr(i=p()){return/webos/i.test(i)}function Xe(i=p()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Nn(i=p()){var e;return Xe(i)&&!!((e=window.navigator)!=null&&e.standalone)}function Ln(){return zr()&&document.documentMode===10}function lr(i=p()){return Xe(i)||ar(i)||cr(i)||or(i)||/windows phone/i.test(i)||sr(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(i,e=[]){let t;switch(i){case"Browser":t=Et(p());break;case"Worker":t=`${Et(p())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ce}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(i,e={}){return L(i,"GET","/v2/passwordPolicy",N(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=6;class Un{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Gn,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _t(this),this.idTokenSubscription=new _t(this),this.beforeStateQueue=new Fn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var r,n,s;if(!this._deleted&&(this.persistenceManager=await z.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((n=this._popupRedirectResolver)!=null&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ve(this,{idToken:e}),r=await v._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(b(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,o=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(r=c.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return u(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ie(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=In()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(b(this.app))return Promise.reject(S(this));const t=e?A(e):null;return t&&u(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&u(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return b(this.app)?Promise.reject(S(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return b(this.app)?Promise.reject(S(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xn(this),t=new Un(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ae("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await On(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;u(t,this,"argument-error"),this.redirectPersistenceManager=await z.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(u(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,n);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return u(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(b(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&pn(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function F(i){return A(i)}class _t{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zr(t=>this.observer=t)}get next(){return u(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hn(i){we=i}function ur(i){return we.loadJS(i)}function Wn(){return we.recaptchaEnterpriseScript}function Vn(){return we.gapiScript}function zn(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class qn{constructor(){this.enterprise=new Kn}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Kn{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Jn="recaptcha-enterprise",hr="NO_RECAPTCHA";class Yn{constructor(e){this.type=Jn,this.auth=F(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{Tn(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new Cn(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function n(s,a,o){const c=window.grecaptcha;bt(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{a(l)}).catch(()=>{a(hr)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qn().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(o=>{if(!t&&bt(window.grecaptcha))n(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Wn();c.length!==0&&(c+=o),ur(c).then(()=>{n(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}async function kt(i,e,t,r=!1,n=!1){const s=new Yn(i);let a;if(n)a=hr;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const o={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,l=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function He(i,e,t,r,n){var s;if((s=i._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await kt(i,e,t,t==="getOobCode");return r(i,a)}else return r(i,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kt(i,e,t,t==="getOobCode");return r(i,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(i,e){const t=Wt(i,"auth");if(t.isInitialized()){const n=t.getImmediate(),s=t.getOptions();if(K(s,e??{}))return n;y(n,"already-initialized")}return t.initialize({options:e})}function Xn(i,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(w);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Zn(i,e,t){const r=F(i);u(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const n=!1,s=gr(e),{host:a,port:o}=es(e),c=o===null?"":`:${o}`,l={url:`${s}//${a}${c}/`},d=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!r._canInitEmulator){u(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),u(K(l,r.config.emulator)&&K(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ze(a)?ri(`${s}//${a}${c}`):ts()}function gr(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function es(i){const e=gr(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(r);if(n){const s=n[1];return{host:s,port:wt(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:wt(a)}}}function wt(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function ts(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return k("not implemented")}_getIdTokenResponse(e){return k("not implemented")}_linkToIdToken(e,t){return k("not implemented")}_getReauthenticationResolver(e){return k("not implemented")}}async function rs(i,e){return L(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(i,e){return de(i,"POST","/v1/accounts:signInWithPassword",N(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(i,e){return de(i,"POST","/v1/accounts:signInWithEmailLink",N(i,e))}async function ss(i,e){return de(i,"POST","/v1/accounts:signInWithEmailLink",N(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Ze{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new se(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new se(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,t,"signInWithPassword",is);case"emailLink":return ns(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,r,"signUpPassword",rs);case"emailLink":return ss(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(i,e){return de(i,"POST","/v1/accounts:signInWithIdp",N(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="http://localhost";class $ extends Ze{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:n,...s}=t;if(!r||!n)return null;const a=new $(r,n);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return q(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,q(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,q(e,t)}buildRequest(){const e={requestUri:as,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oe(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cs(i){const e=X(Z(i)).link,t=e?X(Z(e)).deep_link_id:null,r=X(Z(i)).deep_link_id;return(r?X(Z(r)).link:null)||r||t||e||i}class et{constructor(e){const t=X(Z(e)),r=t.apiKey??null,n=t.oobCode??null,s=os(t.mode??null);u(r&&n&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=n,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=cs(e);try{return new et(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(){this.providerId=Y.PROVIDER_ID}static credential(e,t){return se._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=et.parseLink(t);return u(r,"argument-error"),se._fromEmailAndCode(e,r.code,r.tenantId)}}Y.PROVIDER_ID="password";Y.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Y.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends tt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M extends ue{constructor(){super("facebook.com")}static credential(e){return $._fromParams({providerId:M.PROVIDER_ID,signInMethod:M.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return M.credentialFromTaggedObject(e)}static credentialFromError(e){return M.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return M.credential(e.oauthAccessToken)}catch{return null}}}M.FACEBOOK_SIGN_IN_METHOD="facebook.com";M.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends ue{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $._fromParams({providerId:_.PROVIDER_ID,signInMethod:_.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _.credentialFromTaggedObject(e)}static credentialFromError(e){return _.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _.credential(t,r)}catch{return null}}}_.GOOGLE_SIGN_IN_METHOD="google.com";_.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends ue{constructor(){super("github.com")}static credential(e){return $._fromParams({providerId:D.PROVIDER_ID,signInMethod:D.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return D.credentialFromTaggedObject(e)}static credentialFromError(e){return D.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return D.credential(e.oauthAccessToken)}catch{return null}}}D.GITHUB_SIGN_IN_METHOD="github.com";D.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R extends ue{constructor(){super("twitter.com")}static credential(e,t){return $._fromParams({providerId:R.PROVIDER_ID,signInMethod:R.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return R.credentialFromTaggedObject(e)}static credentialFromError(e){return R.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return R.credential(t,r)}catch{return null}}}R.TWITTER_SIGN_IN_METHOD="twitter.com";R.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(i,e){return de(i,"POST","/v1/accounts:signUp",N(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){const s=await v._fromIdTokenResponse(e,r,n),a=St(r);return new H({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=St(r);return new H({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function St(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends O{constructor(e,t,r,n){super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,Ee.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new Ee(e,t,r,n)}}function mr(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ee._fromErrorAndOperation(i,s,e,r):s})}async function ds(i,e,t=!1){const r=await ne(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return H._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(i,e,t=!1){const{auth:r}=i;if(b(r.app))return Promise.reject(S(r));const n="reauthenticate";try{const s=await ne(i,mr(r,n,e,i),t);u(s.idToken,r,"internal-error");const a=Qe(s.idToken);u(a,r,"internal-error");const{sub:o}=a;return u(i.uid===o,r,"user-mismatch"),H._forOperation(i,n,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&y(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(i,e,t=!1){if(b(i.app))return Promise.reject(S(i));const r="signIn",n=await mr(i,r,e),s=await H._fromIdTokenResponse(i,r,n);return t||await i._updateCurrentUser(s.user),s}async function hs(i,e){return fr(F(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(i){const e=F(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gs(i,e,t){if(b(i.app))return Promise.reject(S(i));const r=F(i),a=await He(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ls).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&pr(i),c}),o=await H._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function ms(i,e,t){return b(i.app)?Promise.reject(S(i)):hs(A(i),Y.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pr(i),r})}function fs(i,e,t,r){return A(i).onIdTokenChanged(e,t,r)}function ps(i,e,t){return A(i).beforeAuthStateChanged(e,t)}function bs(i,e,t,r){return A(i).onAuthStateChanged(e,t,r)}function ys(i){return A(i).signOut()}const _e="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_e,"1"),this.storage.removeItem(_e),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=1e3,Is=10;class yr extends br{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Ln()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Is):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yr.type="LOCAL";const Es=yr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends br{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vr.type="SESSION";const Ir=vr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const r=new Se(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:s}=t.data,a=this.handlersMap[n];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const o=Array.from(a).map(async l=>l(t.origin,s)),c=await _s(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Se.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=rt("",20);n.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:n,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(g.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),n.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return window}function ws(i){E().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return typeof E().WorkerGlobalScope<"u"&&typeof E().importScripts=="function"}async function Ss(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cs(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function Ts(){return Er()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="firebaseLocalStorageDb",As=1,ke="firebaseLocalStorage",kr="fbase_key";class he{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ce(i,e){return i.transaction([ke],e?"readwrite":"readonly").objectStore(ke)}function Ps(){const i=indexedDB.deleteDatabase(_r);return new he(i).toPromise()}function We(){const i=indexedDB.open(_r,As);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(ke,{keyPath:kr})}catch(n){t(n)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(ke)?e(r):(r.close(),await Ps(),e(await We()))})})}async function Ct(i,e,t){const r=Ce(i,!0).put({[kr]:e,value:t});return new he(r).toPromise()}async function Ms(i,e){const t=Ce(i,!1).get(e),r=await new he(t).toPromise();return r===void 0?null:r.value}function Tt(i,e){const t=Ce(i,!0).delete(e);return new he(t).toPromise()}const Ds=800,Rs=3;class wr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await We(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rs)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Er()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Se._getInstance(Ts()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Ss(),!this.activeServiceWorker)return;this.sender=new ks(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cs()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await We();return await Ct(e,_e,"1"),await Tt(e,_e),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ct(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ms(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const s=Ce(n,!1).getAll();return new he(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:n,value:s}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(s)&&(this.notifyListeners(n,s),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ds)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wr.type="LOCAL";const Bs=wr;new le(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(i,e){return e?w(e):(u(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Ze{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return q(e,this._buildIdpRequest())}_linkToIdToken(e,t){return q(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return q(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function js(i){return fr(i.auth,new it(i),i.bypassAuthState)}function Os(i){const{auth:e,user:t}=i;return u(t,e,"internal-error"),us(t,new it(i),i.bypassAuthState)}async function Ns(i){const{auth:e,user:t}=i;return u(t,e,"internal-error"),ds(t,new it(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,r,n,s=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return js;case"linkViaPopup":case"linkViaRedirect":return Ns;case"reauthViaPopup":case"reauthViaRedirect":return Os;default:y(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new le(2e3,1e4);async function Fs(i,e,t){if(b(i.app))return Promise.reject(I(i,"operation-not-supported-in-this-environment"));const r=F(i);bn(i,e,tt);const n=Sr(r,t);return new U(r,"signInViaPopup",e,n).executeNotNull()}class U extends Cr{constructor(e,t,r,n,s){super(e,t,n,s),this.provider=r,this.authWindow=null,this.pollId=null,U.currentPopupAction&&U.currentPopupAction.cancel(),U.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return u(e,this.auth,"internal-error"),e}async onExecution(){T(this.filter.length===1,"Popup operations only handle one event");const e=rt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(I(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(I(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,U.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(I(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ls.get())};e()}}U.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="pendingRedirect",pe=new Map;class Gs extends Cr{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=pe.get(this.auth._key());if(!e){try{const r=await Us(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}pe.set(this.auth._key(),e)}return this.bypassAuthState||pe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Us(i,e){const t=Ws(e),r=Hs(i);if(!await r._isAvailable())return!1;const n=await r._get(t)==="true";return await r._remove(t),n}function $s(i,e){pe.set(i._key(),e)}function Hs(i){return w(i._redirectPersistence)}function Ws(i){return fe(xs,i.config.apiKey,i.name)}async function Vs(i,e,t=!1){if(b(i.app))return Promise.reject(S(i));const r=F(i),n=Sr(r,e),a=await new Gs(r,n,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=10*60*1e3;class qs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ks(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Tr(e)){const n=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(I(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zs&&this.cachedEventUids.clear(),this.cachedEventUids.has(At(e))}saveEventToCache(e){this.cachedEventUids.add(At(e)),this.lastProcessedEventTime=Date.now()}}function At(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Tr({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ks(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tr(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(i,e={}){return L(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qs=/^https?/;async function Xs(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Js(i);for(const t of e)try{if(Zs(t))return}catch{}y(i,"unauthorized-domain")}function Zs(i){const e=Ue(),{protocol:t,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const a=new URL(i);return a.hostname===""&&r===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Qs.test(t))return!1;if(Ys.test(i))return r===i;const n=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new le(3e4,6e4);function Pt(){const i=E().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function ta(i){return new Promise((e,t)=>{var n,s,a;function r(){Pt(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pt(),t(I(i,"network-request-failed"))},timeout:ea.get()})}if((s=(n=E().gapi)==null?void 0:n.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=E().gapi)!=null&&a.load)r();else{const o=zn("iframefcb");return E()[o]=()=>{gapi.load?r():t(I(i,"network-request-failed"))},ur(`${Vn()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw be=null,e})}let be=null;function ra(i){return be=be||ta(i),be}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new le(5e3,15e3),na="__/auth/iframe",sa="emulator/auth/iframe",aa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ca(i){const e=i.config;u(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Ye(e,sa):`https://${i.config.authDomain}/${na}`,r={apiKey:e.apiKey,appName:i.name,v:ce},n=oa.get(i.config.apiHost);n&&(r.eid=n);const s=i._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${oe(r).slice(1)}`}async function la(i){const e=await ra(i),t=E().gapi;return u(t,i,"internal-error"),e.open({where:document.body,url:ca(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aa,dontclear:!0},r=>new Promise(async(n,s)=>{await r.restyle({setHideOnLeave:!1});const a=I(i,"network-request-failed"),o=E().setTimeout(()=>{s(a)},ia.get());function c(){E().clearTimeout(o),n(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ua=500,ha=600,ga="_blank",ma="http://localhost";class Mt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fa(i,e,t,r=ua,n=ha){const s=Math.max((window.screen.availHeight-n)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c={...da,width:r.toString(),height:n.toString(),top:s,left:a},l=p().toLowerCase();t&&(o=nr(l)?ga:t),rr(l)&&(e=e||ma,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[f,x])=>`${g}${f}=${x},`,"");if(Nn(l)&&o!=="_self")return pa(e||"",o),new Mt(null);const h=window.open(e||"",o,d);u(h,i,"popup-blocked");try{h.focus()}catch{}return new Mt(h)}function pa(i,e){const t=document.createElement("a");t.href=i,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="__/auth/handler",ya="emulator/auth/handler",va=encodeURIComponent("fac");async function Dt(i,e,t,r,n,s){u(i.config.authDomain,i,"auth-domain-config-required"),u(i.config.apiKey,i,"invalid-api-key");const a={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:ce,eventId:n};if(e instanceof tt){e.setDefaultLanguage(i.languageCode),a.providerId=e.providerId||"",Xr(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))a[d]=h}if(e instanceof ue){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(a.scopes=d.join(","))}i.tenantId&&(a.tid=i.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await i._getAppCheckToken(),l=c?`#${va}=${encodeURIComponent(c)}`:"";return`${Ia(i)}?${oe(o).slice(1)}${l}`}function Ia({config:i}){return i.emulator?Ye(i,ya):`https://${i.authDomain}/${ba}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="webStorageSupport";class Ea{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ir,this._completeRedirectFn=Vs,this._overrideRedirectResult=$s}async _openPopup(e,t,r,n){var a;T((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Dt(e,t,r,Ue(),n);return fa(e,s,rt())}async _openRedirect(e,t,r,n){await this._originValidation(e);const s=await Dt(e,t,r,Ue(),n);return ws(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:s}=this.eventManagers[t];return n?Promise.resolve(n):(T(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await la(e),r=new qs(e);return t.register("authEvent",n=>(u(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:r.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(je,{type:je},n=>{var a;const s=(a=n==null?void 0:n[0])==null?void 0:a[je];s!==void 0&&t(!!s),y(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lr()||ir()||Xe()}}const _a=Ea;var Rt="@firebase/auth",Bt="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){u(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sa(i){re(new J("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;u(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dr(i)},l=new $n(r,n,s,c);return Xn(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),re(new J("auth-internal",e=>{const t=F(e.getProvider("auth").getImmediate());return(r=>new ka(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),W(Rt,Bt,wa(i)),W(Rt,Bt,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=5*60,Ta=Gt("authIdTokenMaxAge")||Ca;let jt=null;const Aa=i=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ta)return;const n=t==null?void 0:t.token;jt!==n&&(jt=n,await fetch(i,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Pa(i=zt()){const e=Wt(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Qn(i,{popupRedirectResolver:_a,persistence:[Bs,Es,Ir]}),r=Gt("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Aa(s.toString());ps(t,a,()=>a(t.currentUser)),fs(t,o=>a(o))}}const n=Gr("auth");return n&&Zn(t,`http://${n}`),t}function Ma(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}Hn({loadJS(i){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=n=>{const s=I("internal-error");s.customData=n,t(s)},r.type="text/javascript",r.charset="UTF-8",Ma().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sa("Browser");const Ar={apiKey:void 0,authDomain:void 0,projectId:void 0,appId:void 0,messagingSenderId:void 0},Da=["apiKey","authDomain","projectId","appId"];function nt(){return Da.every(i=>!!Ar[i])}let Oe=null;function Q(){if(!nt())throw new Error("Firebase auth is not configured for this project yet.");if(!Oe){const i=tn().length?zt():Vt(Ar);Oe=Pa(i)}return Oe}function Ra(){return nt()}function Ba(){return["VITE_FIREBASE_API_KEY=","VITE_FIREBASE_AUTH_DOMAIN=","VITE_FIREBASE_PROJECT_ID=","VITE_FIREBASE_APP_ID=","VITE_FIREBASE_MESSAGING_SENDER_ID="].join(`
`)}function ja(){return nt()?Q():null}function Oa(i){const e=Q();return bs(e,i)}async function Na(i,e){const t=Q();return gs(t,i,e)}async function La(i,e){const t=Q();return ms(t,i,e)}async function Fa(){const i=Q(),e=new _;return e.setCustomParameters({prompt:"select_account"}),Fs(i,e)}async function xa(){const i=Q();return ys(i)}class Ga{constructor(){this.currentDate=new Date,this.currentMeal=null,this.selectedFood=null,this.createMealItems=[],this.externalQueryCache=new Map,this.searchRequestToken=0,this.modalSearchRequestToken=0,this.createMealSearchRequestToken=0,this.scannerStream=null,this.scanInterval=null,this.lastScannedBarcode=null,this.lastScanAt=0,this.authMode="login",this.currentUser=null,this.authConfigured=Ra(),this.authUnsubscribe=null,this.init()}init(){this.loadSettings(),this.loadGoals(),this.updateDateDisplay(),this.bindEvents(),this.renderDashboard(),this.renderDiary(),this.renderWaterGlasses(),this.renderWeeklyChart(),this.renderSearchResults(""),this.calculateStreak(),this.renderProgress(),this.renderSavedMeals(),this.loadProfileSettings(),this.initAuth()}initAuth(){if(this.bindAuthEvents(),this.applyAuthMode(),this.renderFirebaseHint(),!this.authConfigured){this.toggleAppShell(!1),this.setAuthAlert("Add your Firebase web app config to enable email sign-in and Google authentication.","error");return}ja(),this.authUnsubscribe=Oa(e=>{this.currentUser=e,this.handleAuthStateChanged(e)})}bindAuthEvents(){var e,t,r,n;(e=document.getElementById("authForm"))==null||e.addEventListener("submit",async s=>{s.preventDefault(),await this.submitAuthForm()}),(t=document.getElementById("authSwitchBtn"))==null||t.addEventListener("click",()=>{this.authMode=this.authMode==="login"?"signup":"login",this.applyAuthMode(),this.clearAuthAlert()}),(r=document.getElementById("googleAuthBtn"))==null||r.addEventListener("click",async()=>{await this.submitGoogleAuth()}),(n=document.getElementById("logoutBtn"))==null||n.addEventListener("click",async()=>{await this.logout()})}applyAuthMode(){const e=this.authMode==="signup",t=document.getElementById("authTitle"),r=document.getElementById("authSubtitle"),n=document.getElementById("authSubmitBtn"),s=document.getElementById("authSwitchLabel"),a=document.getElementById("authSwitchBtn"),o=document.getElementById("authPassword");t&&(t.textContent=e?"Create your account":"Welcome back"),r&&(r.textContent=e?"Sign up to save your meals, goals, and tracked days.":"Sign in to continue to your food diary and saved meals."),n&&(n.textContent=e?"Create Account":"Sign In"),s&&(s.textContent=e?"Already have an account?":"New here?"),a&&(a.textContent=e?"Sign in instead":"Create an account"),o&&(o.autocomplete=e?"new-password":"current-password")}renderFirebaseHint(){const e=document.getElementById("firebaseConfigHint");if(!e)return;e.hidden=this.authConfigured;const t=e.querySelector(".firebase-env-block");t&&(t.textContent=Ba())}toggleAppShell(e){var t,r;(t=document.getElementById("authShell"))==null||t.toggleAttribute("hidden",e),(r=document.getElementById("appShell"))==null||r.classList.toggle("app-shell-hidden",!e)}handleAuthStateChanged(e){if(this.toggleAppShell(!!e),this.setAuthBusy(!1),!e){this.updateUserChip(null);return}this.updateUserChip(e),this.hydrateSettingsFromUser(e),this.clearAuthAlert()}updateUserChip(e){const t=document.getElementById("userChipName"),r=document.getElementById("userChipEmail"),n=document.getElementById("userChipAvatar");if(!e){t&&(t.textContent="Guest"),r&&(r.textContent="Sign in required"),n&&(n.textContent="NT");return}const s=e.email?e.email.split("@")[0]:"NutriTrack User",a=e.displayName||s,o=a.split(/\s+/).filter(Boolean).slice(0,2).map(c=>{var l;return((l=c[0])==null?void 0:l.toUpperCase())||""}).join("")||"NT";t&&(t.textContent=a),r&&(r.textContent=e.email||"Signed in"),n&&(n.textContent=o)}hydrateSettingsFromUser(e){var n;const t=this.getSettings(),r=t.name||e.displayName||((n=e.email)==null?void 0:n.split("@")[0])||"";r!==t.name&&(t.name=r,this.saveSettings(t)),this.loadProfileSettings()}setAuthBusy(e,t){const r=document.getElementById("authSubmitBtn"),n=document.getElementById("googleAuthBtn"),s=document.getElementById("authSwitchBtn");r&&(r.disabled=e||!this.authConfigured,r.textContent=e?t||"Please wait...":this.authMode==="signup"?"Create Account":"Sign In"),n&&(n.disabled=e||!this.authConfigured),s&&(s.disabled=e)}setAuthAlert(e,t="error"){const r=document.getElementById("authAlert");r&&(r.hidden=!e,r.className=`auth-alert ${t}`,r.textContent=e)}clearAuthAlert(){this.setAuthAlert("","success")}async submitAuthForm(){var r,n;if(!this.authConfigured)return;const e=(((r=document.getElementById("authEmail"))==null?void 0:r.value)||"").trim(),t=((n=document.getElementById("authPassword"))==null?void 0:n.value)||"";if(!e||!t){this.setAuthAlert("Enter both email and password to continue.","error");return}if(this.authMode==="signup"&&t.length<6){this.setAuthAlert("Use at least 6 characters for the password.","error");return}this.setAuthBusy(!0,this.authMode==="signup"?"Creating account...":"Signing in..."),this.clearAuthAlert();try{this.authMode==="signup"?(await Na(e,t),this.setAuthAlert("Account created. You are now signed in.","success")):await La(e,t)}catch(s){this.setAuthAlert(this.getAuthErrorMessage(s),"error")}finally{this.setAuthBusy(!1)}}async submitGoogleAuth(){if(this.authConfigured){this.setAuthBusy(!0,"Opening Google..."),this.clearAuthAlert();try{await Fa()}catch(e){this.setAuthAlert(this.getAuthErrorMessage(e),"error")}finally{this.setAuthBusy(!1)}}}async logout(){if(this.authConfigured)try{await xa()}catch(e){this.showToast(this.getAuthErrorMessage(e),"error")}}getAuthErrorMessage(e){const t=(e==null?void 0:e.code)||"";return{"auth/email-already-in-use":"That email is already registered. Try signing in instead.","auth/invalid-email":"That email address is not valid.","auth/invalid-credential":"Incorrect email or password.","auth/user-not-found":"No account was found for that email.","auth/wrong-password":"Incorrect email or password.","auth/popup-closed-by-user":"Google sign-in was cancelled before completion.","auth/unauthorized-domain":"This domain is not authorized in your Firebase console yet.","auth/too-many-requests":"Too many attempts. Please wait a bit and try again."}[t]||(e==null?void 0:e.message)||"Authentication failed. Please try again."}getDateKey(e){return(e||this.currentDate).toISOString().split("T")[0]}getDayData(e){const t=e||this.getDateKey(),r=localStorage.getItem(`nutritrack_${t}`);return r?JSON.parse(r):{meals:{breakfast:[],lunch:[],dinner:[],snacks:[]},water:0,exercise:0}}saveDayData(e,t){const r=t||this.getDateKey();localStorage.setItem(`nutritrack_${r}`,JSON.stringify(e))}getGoals(){const e={calories:2e3,protein:150,carbs:250,fat:65,water:8,fiber:25,sugar:50,sodium:2300,cholesterol:300},t=localStorage.getItem("nutritrack_goals");return t?{...e,...JSON.parse(t)}:e}saveGoals(e){localStorage.setItem("nutritrack_goals",JSON.stringify(e))}getSettings(){const e={name:"",weight:"",height:"",age:"",activity:"1.55",theme:"light"},t=localStorage.getItem("nutritrack_settings");return t?{...e,...JSON.parse(t)}:e}saveSettings(e){localStorage.setItem("nutritrack_settings",JSON.stringify(e))}getSavedMeals(){const e=localStorage.getItem("nutritrack_saved_meals");return e?JSON.parse(e):[]}saveSavedMeals(e){localStorage.setItem("nutritrack_saved_meals",JSON.stringify(e))}getExternalFoods(){const e=localStorage.getItem("nutritrack_external_foods");return e?JSON.parse(e):[]}saveExternalFoods(e){localStorage.setItem("nutritrack_external_foods",JSON.stringify(e))}upsertExternalFood(e){if(!(e!=null&&e.id))return null;const t=this.getExternalFoods(),r=String(e.id),n=t.findIndex(s=>String(s.id)===r);return n>=0?t[n]={...t[n],...e}:t.unshift(e),this.saveExternalFoods(t),e}getAllFoods(){const e=new Map;return[...this.getExternalFoods(),...Dr].forEach(t=>{const r=String(t.id);e.has(r)||e.set(r,t)}),Array.from(e.values())}getFoodById(e){const t=String(e);return this.getAllFoods().find(r=>String(r.id)===t)||null}escapeHtml(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}getFoodActionArg(e){return JSON.stringify(String(e))}getFoodEmoji(e){return{protein:"🍗",grains:"🌾",fruits:"🍎",vegetables:"🥦",dairy:"🥛",beverages:"🥤",snacks:"🍪","fast-food":"🍔",indian:"🍛","indian-drinks":"🧋","indian-snacks":"🍪"}[e]||"📦"}inferCategoryFromProduct(e){const t=[e.categories,...e.categories_tags||[],e.product_name,e.product_name_en,e.brands].filter(Boolean).join(" ").toLowerCase();return/(drink|beverage|juice|soda|cola|lassi|chaas|tea|coffee|sharbat|milkshake)/.test(t)?/(lassi|chaas|shikanji|jaljeera|aam panna|sharbat|rooh afza|frooti|maaza|slice|thums up|limca|paper boat|amul|real|tropicana|minute maid)/.test(t)?"indian-drinks":"beverages":/(biscuit|cookie|chips|namkeen|snack|kurkure|bhujia|sev|cracker|makhana|chikki)/.test(t)?/(namkeen|kurkure|bhujia|sev|makhana|chikki|parle|britannia|sunfeast|haldiram|bikaji|balaji)/.test(t)?"indian-snacks":"snacks":/(curry|dal|paneer|biryani|roti|naan|paratha|masala|indian|poha|upma|idli|dosa)/.test(t)?"indian":"snacks"}parseOpenFoodFactsProduct(e,t){const r=e.nutriments||{},n=Number(r["energy-kcal_serving"]??r["energy-kcal_100g"]??r["energy-kcal"]??0),s=Number(r.proteins_serving??r.proteins_100g??r.proteins??0),a=Number(r.carbohydrates_serving??r.carbohydrates_100g??r.carbohydrates??0),o=Number(r.fat_serving??r.fat_100g??r.fat??0),c=Number(r.fiber_serving??r.fiber_100g??r.fiber??0),l=Number(r.sugars_serving??r.sugars_100g??r.sugars??0),d=Number(r.sodium_serving??r.sodium_100g??r.sodium??0),h=Number(r.cholesterol_serving??r.cholesterol_100g??r.cholesterol??0);if(!n&&!s&&!a&&!o)return null;const g=this.inferCategoryFromProduct(e),f=e.code||t||"";return{id:f?`ext_${f}`:`ext_${t||Date.now()}`,name:e.product_name_en||e.product_name||`Food ${t||""}`.trim(),brand:e.brands||"Open Food Facts",category:g,emoji:this.getFoodEmoji(g),serving:e.serving_size||"1 serving",calories:Math.round(n),protein:Math.round(s*10)/10,carbs:Math.round(a*10)/10,fat:Math.round(o*10)/10,fiber:Math.round(c*10)/10,sugar:Math.round(l*10)/10,sodium:Math.round(d>0?d*1e3:0),cholesterol:Math.round(h>0?h*1e3:0),barcode:f,source:"api"}}filterFoods(e,t="",r="all"){let n=e;r!=="all"&&(n=n.filter(a=>a.category===r));const s=t.trim().toLowerCase();return s?n.filter(a=>[a.name,a.brand,a.category,a.barcode].filter(Boolean).join(" ").toLowerCase().includes(s)):n}async fetchExternalFoodsByQuery(e,t="all"){const r=e.trim().toLowerCase();if(r.length<2)return[];const n=`${r}::${t}`;if(this.externalQueryCache.has(n))return this.externalQueryCache.get(n);const s=[`https://in.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(e)}&search_simple=1&action=process&json=1&page_size=20&fields=code,product_name,product_name_en,brands,serving_size,categories,categories_tags,nutriments`,`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(e)}&search_simple=1&action=process&json=1&page_size=20&fields=code,product_name,product_name_en,brands,serving_size,categories,categories_tags,nutriments`],a=[],o=new Set;for(const c of s)try{const l=await fetch(c);if(!l.ok)continue;const d=await l.json();for(const h of d.products||[]){const g=this.parseOpenFoodFactsProduct(h,h.code);if(!g||t!=="all"&&g.category!==t)continue;const f=String(g.id);o.has(f)||(o.add(f),this.upsertExternalFood(g),a.push(g))}}catch{}return this.externalQueryCache.set(n,a),a}async searchFoods(e="",t="all",r=50){const n=e.trim();let s=this.filterFoods(this.getAllFoods(),n,t);if(n){const a=await this.fetchExternalFoodsByQuery(n,t),o=new Map;[...a,...s].forEach(c=>{const l=String(c.id);o.has(l)||o.set(l,c)}),s=this.filterFoods(Array.from(o.values()),n,t)}return s.slice(0,r)}bindEvents(){var t,r,n;document.querySelectorAll(".menu-item").forEach(s=>{s.addEventListener("click",()=>this.navigateTo(s.dataset.page))}),document.getElementById("prevDay").addEventListener("click",()=>this.changeDate(-1)),document.getElementById("nextDay").addEventListener("click",()=>this.changeDate(1)),document.getElementById("hamburgerBtn").addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("open")}),document.getElementById("quickAddBtn").addEventListener("click",()=>this.openQuickAdd()),(t=document.getElementById("openBarcodeBtn"))==null||t.addEventListener("click",()=>this.openBarcodeModal()),(r=document.getElementById("barcodeLookupBtn"))==null||r.addEventListener("click",()=>{var a;const s=(((a=document.getElementById("manualBarcodeInput"))==null?void 0:a.value)||"").trim();s&&this.handleDetectedBarcode(s)}),(n=document.getElementById("manualBarcodeInput"))==null||n.addEventListener("keydown",s=>{if(s.key==="Enter"){s.preventDefault();const a=(s.target.value||"").trim();a&&this.handleDetectedBarcode(a)}});const e=document.getElementById("foodSearchInput");e.addEventListener("input",s=>{this.renderSearchResults(s.target.value),document.getElementById("searchClear").classList.toggle("visible",s.target.value.length>0)}),document.getElementById("searchClear").addEventListener("click",()=>{e.value="",e.dispatchEvent(new Event("input"))}),document.querySelectorAll(".filter-chip").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".filter-chip").forEach(a=>a.classList.remove("active")),s.classList.add("active"),this.renderSearchResults(e.value,s.dataset.cat)})}),document.getElementById("modalFoodSearch").addEventListener("input",s=>{this.renderModalFoodResults(s.target.value)}),document.getElementById("servingInput").addEventListener("input",()=>{this.updateNutritionPreview()}),document.getElementById("goalsForm").addEventListener("submit",s=>{s.preventDefault(),this.saveGoalsFromForm()}),document.getElementById("createMealSearch").addEventListener("input",s=>{this.renderCreateMealResults(s.target.value)}),document.getElementById("mainContent").addEventListener("click",()=>{document.getElementById("sidebar").classList.remove("open")}),document.addEventListener("keydown",s=>{s.key==="Escape"&&(this.closeMealModal(),this.closeQuickAdd(),this.closeCreateMealModal(),this.closeFoodDetail(),this.closeBarcodeModal())})}navigateTo(e){document.querySelectorAll(".page").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".menu-item").forEach(t=>t.classList.remove("active")),document.getElementById(`page-${e}`).classList.add("active"),document.querySelector(`[data-page="${e}"]`).classList.add("active"),document.getElementById("sidebar").classList.remove("open"),e==="dashboard"&&this.renderDashboard(),e==="diary"&&this.renderDiary(),e==="progress"&&this.renderProgress(),e==="meals"&&this.renderSavedMeals()}changeDate(e){this.currentDate.setDate(this.currentDate.getDate()+e),this.updateDateDisplay(),this.renderDashboard(),this.renderDiary(),this.renderWeeklyChart()}updateDateDisplay(){const e={weekday:"long",year:"numeric",month:"long",day:"numeric"},t=new Date,r=this.currentDate.toDateString()===t.toDateString()?`Today, ${this.currentDate.toLocaleDateString("en-US",{month:"long",day:"numeric"})}`:this.currentDate.toLocaleDateString("en-US",e);document.getElementById("currentDate").textContent=r}renderDashboard(){const e=this.getDayData(),t=this.getGoals(),r=this.calculateTotals(e),n=Math.max(0,t.calories-r.calories+e.exercise);document.getElementById("calRemaining").textContent=n,document.getElementById("calGoal").textContent=t.calories,document.getElementById("calFood").textContent=r.calories,document.getElementById("calExercise").textContent=e.exercise;const s=Math.min(1,r.calories/t.calories),a=2*Math.PI*85,o=a-s*a,c=document.getElementById("calorieRing");c.style.strokeDashoffset=o,c.style.stroke=s>1?"#d63031":s>.8?"#fdcb6e":"#00b894";const l=document.getElementById("calRemaining");r.calories>t.calories?(l.style.color="#d63031",l.textContent=Math.abs(t.calories-r.calories+e.exercise),document.querySelector(".cal-label").textContent="Over"):(l.style.color="#00b894",document.querySelector(".cal-label").textContent="Remaining"),this.updateMacroRing("protein",r.protein,t.protein),this.updateMacroRing("carbs",r.carbs,t.carbs),this.updateMacroRing("fat",r.fat,t.fat),document.getElementById("proteinBar").style.width=`${Math.min(100,r.protein/t.protein*100)}%`,document.getElementById("carbsBar").style.width=`${Math.min(100,r.carbs/t.carbs*100)}%`,document.getElementById("fatBar").style.width=`${Math.min(100,r.fat/t.fat*100)}%`,["breakfast","lunch","dinner","snacks"].forEach(d=>{const h=e.meals[d].reduce((g,f)=>g+f.calories,0);document.getElementById(`${d}Cals`).textContent=`${h} cal`}),document.getElementById("waterCurrent").textContent=e.water,document.getElementById("waterCountMini").textContent=e.water,this.renderWaterGlasses(),this.updateMicroBar("fiber",r.fiber,t.fiber),this.updateMicroBar("sugar",r.sugar,t.sugar),this.updateMicroBar("sodium",r.sodium,t.sodium),this.updateMicroBar("chol",r.cholesterol,t.cholesterol),document.getElementById("fiberVal").textContent=`${Math.round(r.fiber)} / ${t.fiber}g`,document.getElementById("sugarVal").textContent=`${Math.round(r.sugar)} / ${t.sugar}g`,document.getElementById("sodiumVal").textContent=`${Math.round(r.sodium)} / ${t.sodium}mg`,document.getElementById("cholVal").textContent=`${Math.round(r.cholesterol)} / ${t.cholesterol}mg`}updateMacroRing(e,t,r){const n=Math.min(1,t/r),s=2*Math.PI*32,a=s-n*s;document.getElementById(`${e}Ring`).style.strokeDashoffset=a,document.getElementById(`${e}Percent`).textContent=`${Math.round(n*100)}%`,document.getElementById(`${e}Current`).textContent=Math.round(t),document.getElementById(`${e}Goal`).textContent=r}updateMicroBar(e,t,r){const n=Math.min(100,t/r*100);document.getElementById(`${e}Bar`).style.width=`${n}%`}calculateTotals(e){let t={calories:0,protein:0,carbs:0,fat:0,fiber:0,sugar:0,sodium:0,cholesterol:0};return Object.values(e.meals).forEach(r=>{r.forEach(n=>{t.calories+=n.calories||0,t.protein+=n.protein||0,t.carbs+=n.carbs||0,t.fat+=n.fat||0,t.fiber+=n.fiber||0,t.sugar+=n.sugar||0,t.sodium+=n.sodium||0,t.cholesterol+=n.cholesterol||0})}),t}renderWaterGlasses(){const e=this.getDayData(),t=this.getGoals(),r=document.getElementById("waterGlasses");r.innerHTML="";for(let n=0;n<t.water;n++){const s=document.createElement("div");s.className=`water-glass ${n<e.water?"filled":""}`,s.addEventListener("click",()=>{const a=this.getDayData();a.water=n+1,this.saveDayData(a),this.renderDashboard()}),r.appendChild(s)}}adjustWater(e){const t=this.getDayData(),r=this.getGoals();t.water=Math.max(0,Math.min(r.water,t.water+e)),this.saveDayData(t),this.renderDashboard(),this.showToast(e>0?"💧 Water logged!":"💧 Water removed","success")}renderDiary(){const e=this.getDayData(),t=this.calculateTotals(e);["breakfast","lunch","dinner","snacks"].forEach(r=>{const n=document.getElementById(`${r}-list`),s=e.meals[r],a=s.reduce((o,c)=>o+c.calories,0);document.getElementById(`diary-${r}-cal`).textContent=a,s.length===0?n.innerHTML='<div class="diary-food-empty">No foods logged yet. Click "+ Add Food" to get started.</div>':n.innerHTML=s.map((o,c)=>`
                    <div class="diary-food-item">
                        <div class="dfi-info">
                            <span class="dfi-name">${o.emoji||"🍽️"} ${o.name}</span>
                            <span class="dfi-serving">${o.servings||1} × ${o.serving||"serving"}</span>
                        </div>
                        <div class="dfi-macros">
                            <span class="dfi-macro p">P ${Math.round(o.protein)}g</span>
                            <span class="dfi-macro c">C ${Math.round(o.carbs)}g</span>
                            <span class="dfi-macro f">F ${Math.round(o.fat)}g</span>
                        </div>
                        <span class="dfi-cal">${Math.round(o.calories)}</span>
                        <button class="dfi-delete" onclick="app.removeFood('${r}', ${c})" title="Remove">🗑️</button>
                    </div>
                `).join("")}),document.getElementById("dt-calories").textContent=Math.round(t.calories),document.getElementById("dt-protein").textContent=`${Math.round(t.protein)}g`,document.getElementById("dt-carbs").textContent=`${Math.round(t.carbs)}g`,document.getElementById("dt-fat").textContent=`${Math.round(t.fat)}g`,document.getElementById("dt-fiber").textContent=`${Math.round(t.fiber)}g`,document.getElementById("dt-sugar").textContent=`${Math.round(t.sugar)}g`}removeFood(e,t){const r=this.getDayData(),n=r.meals[e][t];r.meals[e].splice(t,1),this.saveDayData(r),this.renderDiary(),this.renderDashboard(),this.showToast(`🗑️ Removed ${n.name}`,"info")}async renderSearchResults(e,t="all"){const r=document.getElementById("searchResults"),n=++this.searchRequestToken,s=await this.searchFoods(e,t,50);if(n===this.searchRequestToken){if(s.length===0){r.innerHTML=`
                <div class="search-empty">
                    <span class="search-empty-icon">🔍</span>
                    <h3>No foods found</h3>
                    <p>Try a different search term or use Quick Add to log custom entries.</p>
                </div>
            `;return}r.innerHTML=s.map(a=>`
            <div class="search-result-item" onclick='app.showFoodDetail(${this.getFoodActionArg(a.id)})'>
                <span class="sri-emoji">${a.emoji}</span>
                <div class="sri-info">
                    <span class="sri-name">${this.escapeHtml(a.name)}</span>
                    <span class="sri-brand">${this.escapeHtml(a.brand)} • ${this.escapeHtml(a.serving)}</span>
                    <div class="sri-macros">
                        <span class="sri-macro dfi-macro p">P ${a.protein}g</span>
                        <span class="sri-macro dfi-macro c">C ${a.carbs}g</span>
                        <span class="sri-macro dfi-macro f">F ${a.fat}g</span>
                    </div>
                </div>
                <div style="text-align:right">
                    <span class="sri-cal">${a.calories}</span>
                    <span class="sri-cal-unit">cal</span>
                </div>
                <button class="sri-add-btn" onclick='event.stopPropagation(); app.quickLogFood(${this.getFoodActionArg(a.id)})' title="Quick log to next meal">+</button>
            </div>
        `).join("")}}quickLogFood(e){const t=this.getFoodById(e);if(!t)return;const r=new Date().getHours();let n="snacks";r<11?n="breakfast":r<15?n="lunch":r<20&&(n="dinner");const s=this.getDayData();s.meals[n].push({...t,servings:1,loggedAt:new Date().toISOString()}),this.saveDayData(s),this.renderDashboard(),this.renderDiary(),this.showToast(`✅ ${t.name} added to ${n}!`,"success")}showFoodDetail(e){const t=this.getFoodById(e);t&&(document.getElementById("foodDetailTitle").textContent=`${t.emoji} ${t.name}`,document.getElementById("foodDetailContent").innerHTML=`
            <div style="margin-bottom:16px">
                <div style="font-size:13px;color:var(--text-secondary)">${this.escapeHtml(t.brand)} • ${this.escapeHtml(t.serving)}</div>
            </div>
            <div class="nutrition-preview" style="margin-bottom:20px">
                <div class="np-item cal"><span class="np-val">${t.calories}</span><span class="np-label">Calories</span></div>
                <div class="np-item pro"><span class="np-val">${t.protein}g</span><span class="np-label">Protein</span></div>
                <div class="np-item carb"><span class="np-val">${t.carbs}g</span><span class="np-label">Carbs</span></div>
                <div class="np-item fat"><span class="np-val">${t.fat}g</span><span class="np-label">Fat</span></div>
            </div>
            <h4 style="margin-bottom:12px;font-size:14px">Full Nutrition</h4>
            <div style="display:grid;gap:8px">
                <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--border)">
                    <span>Fiber</span><span style="font-weight:600">${t.fiber}g</span>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--border)">
                    <span>Sugar</span><span style="font-weight:600">${t.sugar}g</span>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--border)">
                    <span>Sodium</span><span style="font-weight:600">${t.sodium}mg</span>
                </div>
                <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0">
                    <span>Cholesterol</span><span style="font-weight:600">${t.cholesterol}mg</span>
                </div>
            </div>
            <div style="margin-top:16px;display:flex;gap:8px">
                <button class="primary-btn" onclick='app.closeFoodDetail(); app.openMealModalForFood(${this.getFoodActionArg(t.id)});' style="flex:1">+ Add to Meal</button>
            </div>
        `,document.getElementById("foodDetailModal").classList.add("active"))}closeFoodDetail(){document.getElementById("foodDetailModal").classList.remove("active")}async openBarcodeModal(){var t;(t=document.getElementById("barcodeModal"))==null||t.classList.add("active");const e=document.getElementById("barcodeStatus");e&&(e.textContent="Starting camera..."),await this.startBarcodeScanner()}closeBarcodeModal(){var e;(e=document.getElementById("barcodeModal"))==null||e.classList.remove("active"),this.stopBarcodeScanner()}async startBarcodeScanner(){const e=document.getElementById("barcodeVideo"),t=document.getElementById("barcodeStatus");if(e)try{if(this.scannerStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1}),e.srcObject=this.scannerStream,await e.play(),!("BarcodeDetector"in window)){t&&(t.textContent="Camera active. Auto-scan is not supported on this browser. Enter barcode manually below.");return}const r=["ean_13","ean_8","upc_a","upc_e","code_128","code_39"],n=await window.BarcodeDetector.getSupportedFormats(),s=r.filter(a=>n.includes(a));this.barcodeDetector=new window.BarcodeDetector({formats:s.length?s:void 0}),t&&(t.textContent="Point the barcode inside the frame..."),this.scanInterval=setInterval(async()=>{if(!(!this.barcodeDetector||e.readyState<2))try{const a=await this.barcodeDetector.detect(e);if(!(a!=null&&a.length))return;const o=(a[0].rawValue||"").trim();o&&this.handleDetectedBarcode(o)}catch{}},700)}catch{t&&(t.textContent="Camera access failed. Please allow permission and use manual barcode input.")}}stopBarcodeScanner(){this.scanInterval&&(clearInterval(this.scanInterval),this.scanInterval=null);const e=document.getElementById("barcodeVideo");if(e){try{e.pause()}catch{}e.srcObject=null}this.scannerStream&&(this.scannerStream.getTracks().forEach(t=>t.stop()),this.scannerStream=null)}async handleDetectedBarcode(e){var s;const t=Date.now();if(this.lastScannedBarcode===e&&t-this.lastScanAt<4e3)return;this.lastScannedBarcode=e,this.lastScanAt=t;const r=document.getElementById("barcodeStatus");r&&(r.textContent=`Detected: ${e}. Fetching nutrition...`);const n=document.getElementById("barcodeLookupBtn");n&&(n.disabled=!0);try{const a=await this.fetchProductByBarcode(e);if(!a){r&&(r.textContent=`No product found for barcode: ${e}`),this.showToast(`❌ Barcode ${e} not found`,"error");return}const o=this.parseBarcodeProduct(a,e);if(!o){r&&(r.textContent="Product found, but nutrition data is unavailable."),this.showToast("⚠️ Barcode found but nutrition data is missing","error");return}this.upsertExternalFood(o);const c=this.getDayData(),l=new Date().getHours();let d="snacks";l<11?d="breakfast":l<15?d="lunch":l<20&&(d="dinner"),c.meals[d].push({...o,servings:1,serving:o.serving||"1 serving",loggedAt:new Date().toISOString(),source:"barcode"}),this.saveDayData(c),this.renderDashboard(),this.renderDiary(),this.renderSearchResults(((s=document.getElementById("foodSearchInput"))==null?void 0:s.value)||""),r&&(r.textContent=`Added: ${o.name} (${o.calories} cal)`),this.showToast(`📦 ${o.name} added to ${d}`,"success")}catch{r&&(r.textContent="Lookup failed. Please try again."),this.showToast("⚠️ Barcode lookup failed","error")}finally{n&&(n.disabled=!1)}}async fetchProductByBarcode(e){const t=[`https://in.openfoodfacts.org/api/v2/product/${encodeURIComponent(e)}.json`,`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(e)}.json`];for(const r of t)try{const n=await fetch(r);if(!n.ok)continue;const s=await n.json();if((s==null?void 0:s.status)===1&&(s!=null&&s.product))return s.product}catch{}return null}parseBarcodeProduct(e,t){const r=this.parseOpenFoodFactsProduct({...e,code:e.code||t},t);return r?{...r,source:"barcode"}:null}openMealModalForFood(e){const t=new Date().getHours();let r="snacks";t<11?r="breakfast":t<15?r="lunch":t<20&&(r="dinner"),this.openMealModal(r),setTimeout(()=>{const n=this.getFoodById(e);n&&this.selectFoodInModal(n)},100)}openMealModal(e){this.currentMeal=e,this.selectedFood=null;const t={breakfast:"Breakfast",lunch:"Lunch",dinner:"Dinner",snacks:"Snacks"};document.getElementById("mealModalTitle").textContent=`Add Food to ${t[e]}`,document.getElementById("modalFoodSearch").value="",document.getElementById("modalSelectedFood").style.display="none",document.getElementById("addFoodBtn").disabled=!0,this.renderModalFoodResults(""),document.getElementById("mealModal").classList.add("active"),document.getElementById("modalFoodSearch").focus()}closeMealModal(){document.getElementById("mealModal").classList.remove("active"),this.currentMeal=null,this.selectedFood=null}async renderModalFoodResults(e){const t=document.getElementById("modalFoodResults"),r=++this.modalSearchRequestToken,n=await this.searchFoods(e,"all",30);r===this.modalSearchRequestToken&&(t.innerHTML=n.map(s=>`
            <div class="modal-food-item" onclick='app.selectFoodInModal(app.getFoodById(${this.getFoodActionArg(s.id)}))'>
                <span>${s.emoji}</span>
                <span class="mfi-name">${this.escapeHtml(s.name)}</span>
                <span class="mfi-cal">${s.calories} cal</span>
            </div>
        `).join(""))}selectFoodInModal(e){this.selectedFood=e,document.getElementById("modalSelectedFood").style.display="block",document.getElementById("selectedFoodInfo").innerHTML=`
            <div class="selected-food-name">${e.emoji} ${e.name}</div>
            <div class="selected-food-brand">${e.brand}</div>
        `,document.getElementById("servingSizeLabel").textContent=`1 serving (${e.serving})`,document.getElementById("servingInput").value=1,document.getElementById("addFoodBtn").disabled=!1,this.updateNutritionPreview(),document.querySelectorAll(".modal-food-item").forEach(t=>t.classList.remove("selected"))}updateNutritionPreview(){if(!this.selectedFood)return;const e=parseFloat(document.getElementById("servingInput").value)||1,t=this.selectedFood;document.getElementById("nutritionPreview").innerHTML=`
            <div class="np-item cal"><span class="np-val">${Math.round(t.calories*e)}</span><span class="np-label">Calories</span></div>
            <div class="np-item pro"><span class="np-val">${Math.round(t.protein*e)}g</span><span class="np-label">Protein</span></div>
            <div class="np-item carb"><span class="np-val">${Math.round(t.carbs*e)}g</span><span class="np-label">Carbs</span></div>
            <div class="np-item fat"><span class="np-val">${Math.round(t.fat*e)}g</span><span class="np-label">Fat</span></div>
        `}addFoodToMeal(){if(!this.selectedFood||!this.currentMeal)return;const e=parseFloat(document.getElementById("servingInput").value)||1,t=this.selectedFood,r={id:t.id,name:t.name,brand:t.brand,emoji:t.emoji,serving:t.serving,servings:e,calories:Math.round(t.calories*e),protein:Math.round(t.protein*e*10)/10,carbs:Math.round(t.carbs*e*10)/10,fat:Math.round(t.fat*e*10)/10,fiber:Math.round(t.fiber*e*10)/10,sugar:Math.round(t.sugar*e*10)/10,sodium:Math.round(t.sodium*e),cholesterol:Math.round(t.cholesterol*e),loggedAt:new Date().toISOString()},n=this.getDayData();n.meals[this.currentMeal].push(r),this.saveDayData(n),this.closeMealModal(),this.renderDashboard(),this.renderDiary(),this.showToast(`✅ ${t.name} added to ${this.currentMeal}!`,"success")}openQuickAdd(){document.getElementById("qaName").value="",document.getElementById("qaCal").value="",document.getElementById("qaProtein").value="",document.getElementById("qaCarbs").value="",document.getElementById("qaFat").value="",document.getElementById("quickAddModal").classList.add("active"),document.getElementById("qaName").focus()}closeQuickAdd(){document.getElementById("quickAddModal").classList.remove("active")}submitQuickAdd(){const e=document.getElementById("qaMeal").value,t=document.getElementById("qaName").value||"Quick Add Entry",r=parseInt(document.getElementById("qaCal").value)||0,n=parseInt(document.getElementById("qaProtein").value)||0,s=parseInt(document.getElementById("qaCarbs").value)||0,a=parseInt(document.getElementById("qaFat").value)||0;if(r===0&&n===0&&s===0&&a===0){this.showToast("⚠️ Please enter at least one value","error");return}const o={name:t,emoji:"⚡",serving:"custom",servings:1,calories:r,protein:n,carbs:s,fat:a,fiber:0,sugar:0,sodium:0,cholesterol:0,loggedAt:new Date().toISOString()},c=this.getDayData();c.meals[e].push(o),this.saveDayData(c),this.closeQuickAdd(),this.renderDashboard(),this.renderDiary(),this.showToast(`⚡ Quick add: ${r} cal to ${e}`,"success")}renderWeeklyChart(){const e=document.getElementById("weeklyChart"),t=this.getGoals(),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let n=[];for(let a=6;a>=0;a--){const o=new Date(this.currentDate);o.setDate(o.getDate()-a);const c=o.toISOString().split("T")[0],l=this.getDayData(c),d=this.calculateTotals(l),h=a===0;n.push({day:r[o.getDay()],cal:d.calories,isToday:h,isOver:d.calories>t.calories})}const s=Math.max(t.calories,...n.map(a=>a.cal))||1;e.innerHTML=n.map(a=>{const o=Math.max(4,a.cal/s*150);return`
                <div class="chart-bar-wrap ${a.isToday?"today":""}">
                    <span class="chart-bar-val">${a.cal||"-"}</span>
                    <div class="chart-bar ${a.isOver?"over":""}" style="height:${o}px"></div>
                    <span class="chart-bar-label">${a.day}</span>
                </div>
            `}).join("")}renderProgress(){this.render7DayAverage(),this.renderHistoryChart(),this.renderPieChart(),this.calculateStreak(),this.renderStreakCalendar()}render7DayAverage(){let e=0,t=0,r=0,n=0,s=0;for(let a=0;a<7;a++){const o=new Date;o.setDate(o.getDate()-a);const c=o.toISOString().split("T")[0],l=this.getDayData(c),d=this.calculateTotals(l);d.calories>0&&(e+=d.calories,t+=d.protein,r+=d.carbs,n+=d.fat,s++)}document.getElementById("avg7Cal").textContent=s>0?Math.round(e/s):"-",document.getElementById("avg7Protein").textContent=s>0?`${Math.round(t/s)}g`:"-",document.getElementById("avg7Carbs").textContent=s>0?`${Math.round(r/s)}g`:"-",document.getElementById("avg7Fat").textContent=s>0?`${Math.round(n/s)}g`:"-"}renderHistoryChart(){const e=document.getElementById("historyChart"),t=this.getGoals();let r=[];for(let s=6;s>=0;s--){const a=new Date;a.setDate(a.getDate()-s);const o=a.toISOString().split("T")[0],c=this.getDayData(o),l=this.calculateTotals(c);r.push({label:a.toLocaleDateString("en-US",{month:"short",day:"numeric"}),cal:l.calories,isOver:l.calories>t.calories})}const n=Math.max(t.calories,...r.map(s=>s.cal))||1;e.innerHTML=r.map(s=>{const a=Math.max(4,s.cal/n*130),o=s.isOver?"linear-gradient(to top, #d63031, #fab1a0)":s.cal>0?"linear-gradient(to top, #00b894, #55efc4)":"var(--border)";return`
                <div class="hc-bar-wrap">
                    <span class="hc-bar-val">${s.cal||"-"}</span>
                    <div class="hc-bar" style="height:${a}px;background:${o}"></div>
                    <span class="hc-bar-label">${s.label}</span>
                </div>
            `}).join("")}renderPieChart(){const t=document.getElementById("macroPieChart").getContext("2d"),r=this.getDayData(),n=this.calculateTotals(r),s=n.protein*4+n.carbs*4+n.fat*9;if(t.clearRect(0,0,250,250),s===0)t.beginPath(),t.arc(125,125,80,0,2*Math.PI),t.fillStyle="#e0e0e0",t.fill(),t.fillStyle="#636e72",t.font="14px Inter",t.textAlign="center",t.fillText("No data yet",125,130);else{const a=n.protein*4,o=n.carbs*4,c=n.fat*9,l=[{val:a,color:"#e17055",label:"Protein"},{val:o,color:"#0984e3",label:"Carbs"},{val:c,color:"#fdcb6e",label:"Fat"}];let d=-Math.PI/2;l.forEach(h=>{const g=h.val/s*2*Math.PI;t.beginPath(),t.moveTo(125,125),t.arc(125,125,90,d,d+g),t.closePath(),t.fillStyle=h.color,t.fill(),d+=g}),t.beginPath(),t.arc(125,125,50,0,2*Math.PI),t.fillStyle=getComputedStyle(document.body).getPropertyValue("--bg-card").trim()||"#ffffff",t.fill(),t.fillStyle=getComputedStyle(document.body).getPropertyValue("--text").trim()||"#2d3436",t.font="bold 18px Inter",t.textAlign="center",t.fillText(`${Math.round(n.calories)}`,125,122),t.font="11px Inter",t.fillStyle="#636e72",t.fillText("calories",125,138),document.getElementById("pieLegend").innerHTML=l.map(h=>{const g=Math.round(h.val/s*100);return`
                    <div class="pie-legend-item">
                        <div class="pie-legend-dot" style="background:${h.color}"></div>
                        <span>${h.label}: ${g}%</span>
                    </div>
                `}).join("")}}calculateStreak(){let e=0;const t=new Date;for(let r=0;r<365;r++){const n=new Date(t);n.setDate(n.getDate()-r);const s=n.toISOString().split("T")[0],a=this.getDayData(s);if(this.calculateTotals(a).calories>0)e++;else if(r>0)break}document.getElementById("streakCount").textContent=e,document.getElementById("streakBig").textContent=e}renderStreakCalendar(){const e=document.getElementById("streakCalendar"),t=new Date;let r=[];for(let n=27;n>=0;n--){const s=new Date(t);s.setDate(s.getDate()-n);const a=s.toISOString().split("T")[0],o=this.getDayData(a),c=this.calculateTotals(o),l=n===0,d=c.calories>0;r.push(`
                <div class="streak-day ${d?"logged":""} ${l?"today":""}">
                    ${s.getDate()}
                </div>
            `)}e.innerHTML=r.join("")}loadGoals(){const e=this.getGoals();document.getElementById("goalCalories").value=e.calories,document.getElementById("goalProtein").value=e.protein,document.getElementById("goalCarbs").value=e.carbs,document.getElementById("goalFat").value=e.fat,document.getElementById("goalWater").value=e.water,document.getElementById("goalFiber").value=e.fiber,document.getElementById("goalSugar").value=e.sugar,document.getElementById("goalSodium").value=e.sodium}saveGoalsFromForm(){const e={calories:parseInt(document.getElementById("goalCalories").value)||2e3,protein:parseInt(document.getElementById("goalProtein").value)||150,carbs:parseInt(document.getElementById("goalCarbs").value)||250,fat:parseInt(document.getElementById("goalFat").value)||65,water:parseInt(document.getElementById("goalWater").value)||8,fiber:parseInt(document.getElementById("goalFiber").value)||25,sugar:parseInt(document.getElementById("goalSugar").value)||50,sodium:parseInt(document.getElementById("goalSodium").value)||2300,cholesterol:300};this.saveGoals(e),this.renderDashboard(),this.showToast("🎯 Goals updated!","success")}applyMacroSplit(e){const t=parseInt(document.getElementById("goalCalories").value)||2e3;let r,n,s;switch(e){case"balanced":r=.3,n=.4,s=.3;break;case"lowcarb":r=.4,n=.2,s=.4;break;case"highprotein":r=.4,n=.35,s=.25;break;case"keto":r=.2,n=.05,s=.75;break;default:return}document.getElementById("goalProtein").value=Math.round(t*r/4),document.getElementById("goalCarbs").value=Math.round(t*n/4),document.getElementById("goalFat").value=Math.round(t*s/9),document.querySelectorAll(".calc-preset").forEach(a=>a.classList.remove("active")),document.querySelector(`[data-split="${e}"]`).classList.add("active"),this.showToast(`📐 Macros updated to ${e} split`,"info")}loadSettings(){this.getSettings().theme==="dark"&&document.body.classList.add("dark")}loadProfileSettings(){const e=this.getSettings();document.getElementById("settingName").value=e.name||"",document.getElementById("settingWeight").value=e.weight||"",document.getElementById("settingHeight").value=e.height||"",document.getElementById("settingAge").value=e.age||"",document.getElementById("settingActivity").value=e.activity||"1.55",document.querySelectorAll(".theme-btn").forEach(t=>{t.classList.toggle("active",t.dataset.theme===e.theme)})}setTheme(e){e==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"),document.querySelectorAll(".theme-btn").forEach(r=>{r.classList.toggle("active",r.dataset.theme===e)});const t=this.getSettings();t.theme=e,this.saveSettings(t),this.renderPieChart(),this.showToast(`${e==="dark"?"🌙":"☀️"} Theme updated!`,"info")}calculateTDEE(){const e=parseFloat(document.getElementById("settingWeight").value),t=parseFloat(document.getElementById("settingHeight").value),r=parseFloat(document.getElementById("settingAge").value),n=parseFloat(document.getElementById("settingActivity").value);if(!e||!t||!r){this.showToast("⚠️ Please fill in weight, height, and age","error");return}const s=10*e+6.25*t-5*r+5,a=Math.round(s*n);document.getElementById("tdeeValue").textContent=a,document.getElementById("tdeeResult").style.display="flex";const o=this.getSettings();o.weight=e,o.height=t,o.age=r,o.activity=n,this.saveSettings(o)}applyTDEE(){const e=parseInt(document.getElementById("tdeeValue").textContent);e&&(document.getElementById("goalCalories").value=e,this.navigateTo("goals"),this.showToast("📊 TDEE applied as calorie goal!","success"))}exportData(){const e={};for(let s=0;s<localStorage.length;s++){const a=localStorage.key(s);a.startsWith("nutritrack_")&&(e[a]=JSON.parse(localStorage.getItem(a)))}const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=`nutritrack_backup_${new Date().toISOString().split("T")[0]}.json`,n.click(),URL.revokeObjectURL(r),this.showToast("📥 Data exported!","success")}importData(e){const t=e.target.files[0];if(!t)return;const r=new FileReader;r.onload=n=>{try{const s=JSON.parse(n.target.result);Object.entries(s).forEach(([a,o])=>{localSto,rage.setItem(a,JSON.stringify(o))}),this.showToast("📤 Data imported! Refreshing...","success"),setTimeout(()=>location.reload(),1e3)}catch{this.showToast("⚠️ Invalid file format","error")}},r.readAsText(t)}clearAllData(){if(confirm("⚠️ This will permanently delete ALL your nutrition data. Are you sure?")){const e=[];for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t);r.startsWith("nutritrack_")&&e.push(r)}e.forEach(t=>localStorage.removeItem(t)),this.showToast("🗑️ All data cleared!","info"),setTimeout(()=>location.reload(),1e3)}}openCreateMealModal(){this.createMealItems=[],document.getElementById("newMealName").value="",document.getElementById("createMealSearch").value="",document.getElementById("createMealResults").innerHTML="",document.getElementById("createMealItemsList").innerHTML='<div class="diary-food-empty">No items added yet</div>',document.getElementById("createMealModal").classList.add("active")}closeCreateMealModal(){document.getElementById("createMealModal").classList.remove("active"),this.createMealItems=[]}async renderCreateMealResults(e){const t=document.getElementById("createMealResults");if(!e.trim()){t.innerHTML="";return}const r=++this.createMealSearchRequestToken,n=await this.searchFoods(e,"all",15);r===this.createMealSearchRequestToken&&(t.innerHTML=n.map(s=>`
            <div class="modal-food-item" onclick='app.addToCreateMeal(${this.getFoodActionArg(s.id)})'>
                <span>${s.emoji}</span>
                <span class="mfi-name">${this.escapeHtml(s.name)}</span>
                <span class="mfi-cal">${s.calories} cal</span>
            </div>
        `).join(""))}addToCreateMeal(e){const t=this.getFoodById(e);t&&(this.createMealItems.push({...t,servings:1}),this.renderCreateMealItemsList())}renderCreateMealItemsList(){const e=document.getElementById("createMealItemsList");if(this.createMealItems.length===0){e.innerHTML='<div class="diary-food-empty">No items added yet</div>';return}e.innerHTML=this.createMealItems.map((t,r)=>`
            <div class="cml-item">
                <span>${t.emoji}</span>
                <span class="cml-item-name">${t.name}</span>
                <span class="cml-item-cal">${t.calories} cal</span>
                <button class="cml-remove" onclick="app.removeFromCreateMeal(${r})">✕</button>
            </div>
        `).join("")}removeFromCreateMeal(e){this.createMealItems.splice(e,1),this.renderCreateMealItemsList()}saveCustomMeal(){const e=document.getElementById("newMealName").value.trim();if(!e){this.showToast("⚠️ Please enter a meal name","error");return}if(this.createMealItems.length===0){this.showToast("⚠️ Please add at least one food item","error");return}const t=this.getSavedMeals(),r=this.createMealItems.reduce((n,s)=>n+s.calories,0);t.push({id:Date.now(),name:e,items:this.createMealItems,totalCalories:r,createdAt:new Date().toISOString()}),this.saveSavedMeals(t),this.closeCreateMealModal(),this.renderSavedMeals(),this.showToast(`🍽️ "${e}" saved!`,"success")}renderSavedMeals(){const e=this.getSavedMeals(),t=document.getElementById("savedMealsList");if(e.length===0){t.innerHTML=`
                <div class="empty-state">
                    <span class="empty-icon">🍽️</span>
                    <h3>No saved meals yet</h3>
                    <p>Create meal combos for quick logging!</p>
                </div>
            `;return}t.innerHTML=e.map(r=>`
            <div class="saved-meal-card">
                <div class="smc-header">
                    <span class="smc-name">🍽️ ${r.name}</span>
                    <span class="smc-cal">${r.totalCalories} cal</span>
                </div>
                <div class="smc-items">${r.items.map(n=>n.name).join(", ")}</div>
                <div class="smc-actions">
                    <button class="primary-btn" style="font-size:12px;padding:8px 12px" onclick="app.logSavedMeal(${r.id})">Log This Meal</button>
                    <button class="danger-btn red" style="font-size:12px;padding:8px 12px" onclick="app.deleteSavedMeal(${r.id})">Delete</button>
                </div>
            </div>
        `).join("")}logSavedMeal(e){const r=this.getSavedMeals().find(o=>o.id===e);if(!r)return;const n=new Date().getHours();let s="snacks";n<11?s="breakfast":n<15?s="lunch":n<20&&(s="dinner");const a=this.getDayData();r.items.forEach(o=>{a.meals[s].push({...o,loggedAt:new Date().toISOString()})}),this.saveDayData(a),this.renderDashboard(),this.renderDiary(),this.showToast(`🍽️ "${r.name}" logged to ${s}!`,"success")}deleteSavedMeal(e){let t=this.getSavedMeals();t=t.filter(r=>r.id!==e),this.saveSavedMeals(t),this.renderSavedMeals(),this.showToast("🗑️ Meal deleted","info")}showToast(e,t="success"){const r=document.getElementById("toastContainer"),n=document.createElement("div");n.className=`toast ${t}`,n.textContent=e,r.appendChild(n),setTimeout(()=>n.remove(),3e3)}}export{Ga as default};
