export const devicesDb = {
  phones: [
    {
      id: "iphone15pm",
      name: "Apple iPhone 15 Pro Max",
      brand: "Apple",
      rating: "9.3",
      price: "$1,199",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "6.7\" Super Retina XDR OLED, 120Hz",
        "Процессор": "Apple A17 Pro (3 nm)",
        "Память": "8 GB RAM, up to 1 TB ROM",
        "Камера": "48 MP Main + 12 MP Telephoto (5x optical) + 12 MP Ultra Wide",
        "Аккумулятор": "4441 mAh, 25W Charging",
        "Вес": "221 г",
        "ОС": "iOS 17"
      }
    },
    {
      id: "s24u",
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      rating: "9.5",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "6.8\" Dynamic AMOLED 2X, 120Hz, Gorilla Armor",
        "Процессор": "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4 nm)",
        "Память": "12 GB RAM, up to 1 TB ROM",
        "Камера": "200 MP Main + 50 MP Telephoto (5x) + 10 MP Telephoto (3x) + 12 MP Ultra Wide",
        "Аккумулятор": "5000 mAh, 45W Charging",
        "Вес": "232 г",
        "ОС": "Android 14 (One UI 6.1)"
      }
    },
    {
      id: "xiaomi14u",
      name: "Xiaomi 14 Ultra",
      brand: "Xiaomi",
      rating: "9.2",
      price: "$1,099",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "6.73\" LTPO AMOLED, 120Hz, Dolby Vision",
        "Процессор": "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
        "Память": "16 GB RAM, up to 1 TB ROM",
        "Камера": "50 MP Leica Quad Camera (1\" main sensor with variable aperture)",
        "Аккумулятор": "5000 mAh, 90W Wired / 80W Wireless",
        "Вес": "220 г",
        "ОС": "Android 14 (HyperOS)"
      }
    }
  ],
  laptops: [
    {
      id: "macbookpro3m",
      name: "MacBook Pro 16\" M3 Max",
      brand: "Apple",
      rating: "9.6",
      price: "$3,499",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "16.2\" Liquid Retina XDR, 120Hz",
        "Процессор": "Apple M3 Max (16-core CPU, 40-core GPU)",
        "Память": "up to 128 GB Unified Memory",
        "Накопитель": "up to 8 TB SSD",
        "Аккумулятор": "100 Wh, up to 22 hours battery life",
        "Вес": "2.16 кг",
        "ОС": "macOS Sonoma"
      }
    },
    {
      id: "rogzephyrusg16",
      name: "ASUS ROG Zephyrus G16 (2024)",
      brand: "ASUS",
      rating: "9.4",
      price: "$2,299",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "16.0\" 2.5K ROG Nebula OLED, 240Hz",
        "Процессор": "Intel Core Ultra 9 185H",
        "Память": "32 GB LPDDR5X",
        "Накопитель": "2 TB PCIe 4.0 NVMe SSD",
        "Аккумулятор": "90 Wh, 240W charging",
        "Вес": "1.85 кг",
        "ОС": "Windows 11 Home"
      }
    },
    {
      id: "thinkpadx1c12",
      name: "Lenovo ThinkPad X1 Carbon Gen 12",
      brand: "Lenovo",
      rating: "9.0",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "14.0\" 2.8K OLED, 120Hz",
        "Процессор": "Intel Core Ultra 7 155U / 155H",
        "Память": "32 GB LPDDR5X",
        "Накопитель": "1 TB PCIe 4.0 SSD",
        "Аккумулятор": "57 Wh",
        "Вес": "1.09 кг",
        "ОС": "Windows 11 Pro"
      }
    }
  ],
  wearables: [
    {
      id: "applewatch9",
      name: "Apple Watch Series 9",
      brand: "Apple",
      rating: "9.0",
      price: "$399",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "Always-On Retina LTPO OLED, 2000 nits",
        "Процессор": "Apple S9 SiP",
        "Автономность": "Up to 18 hours (36 hours in Low Power Mode)",
        "Датчики": "ЭКГ, Пульс, Температура, Кислород в крови, Акселерометр",
        "Защита": "IP6X, WR50 (до 50 метров)",
        "Вес": "38.7 г",
        "Совместимость": "iOS"
      }
    },
    {
      id: "galaxywatch6",
      name: "Samsung Galaxy Watch 6",
      brand: "Samsung",
      rating: "8.9",
      price: "$299",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "Super AMOLED, 2000 nits, Sapphire Crystal",
        "Процессор": "Exynos W930 (5 nm)",
        "Автономность": "Up to 40 hours",
        "Датчики": "BioActive Sensor (ЭКГ, Состав тела, Давление, Пульс), Кислород",
        "Защита": "IP68, MIL-STD-810H, 5ATM",
        "Вес": "33.3 г",
        "Совместимость": "Android (WearOS 4)"
      }
    },
    {
      id: "garminfenix7",
      name: "Garmin Fenix 7 Pro Sapphire Solar",
      brand: "Garmin",
      rating: "9.5",
      price: "$799",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Экран": "1.3\" Transflective MIP (зарядка от солнца)",
        "Процессор": "Garmin Custom Chip",
        "Автономность": "Up to 22 days (in Smartwatch Mode)",
        "Датчики": "GPS (Multi-band), Пульсоксиметр, Барометр, ЭКГ",
        "Защита": "10 ATM (до 100 метров)",
        "Вес": "73 г",
        "Совместимость": "iOS, Android"
      }
    }
  ],
  appliances: [
    {
      id: "dysonv15",
      name: "Dyson V15 Detect",
      brand: "Dyson",
      rating: "9.4",
      price: "$749",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Мощность всасывания": "240 AW",
        "Тип уборки": "Сухая, с лазерной подсветкой пыли",
        "Объем пылесборника": "0.76 л",
        "Автономность": "До 60 минут работы",
        "Фильтрация": "HEPA-фильтрация (99.99% частиц)",
        "Вес": "3.1 кг",
        "Особенности": "Пьезодатчик регулирует мощность всасывания"
      }
    },
    {
      id: "philips5400",
      name: "Philips LatteGo Series 5400",
      brand: "Philips",
      rating: "9.2",
      price: "$899",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Давление помпы": "15 бар",
        "Тип используемого кофе": "Молотый / Зерновой",
        "Капучинатор": "LatteGo (автоматический, без трубок)",
        "Количество напитков": "12 предустановленных рецептов",
        "Управление": "Сенсорный цветной дисплей, профили пользователей",
        "Резервуар для воды": "1.8 л",
        "Особенности": "Керамические жернова с 12 степенями помола"
      }
    },
    {
      id: "lginstaview",
      name: "LG InstaView Door-in-Door",
      brand: "LG",
      rating: "9.5",
      price: "$2,499",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Тип холодильника": "Side-by-Side",
        "Общий объем": "601 л (морозильная 196 л, холодильная 405 л)",
        "Размораживание": "Total No Frost",
        "Компрессор": "Инверторный линейный (10 лет гарантии)",
        "Особенности": "InstaView (постучите дважды, чтобы увидеть содержимое)",
        "Шумность": "36 дБ",
        "Вес": "130 кг"
      }
    }
  ],
  tv: [
    {
      id: "lgoledc3",
      name: "LG OLED C3 65\"",
      brand: "LG",
      rating: "9.6",
      price: "$1,599",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Диагональ": "65 дюймов",
        "Технология экрана": "OLED (самосветящиеся пиксели)",
        "Разрешение": "4K Ultra HD (3840 x 2160)",
        "Процессор": "α9 AI Processor Gen6 4K",
        "Частота обновления": "120 Гц, G-Sync, FreeSync",
        "Звук": "40 Вт, Dolby Atmos",
        "ОС": "webOS 23"
      }
    },
    {
      id: "samsungqn90c",
      name: "Samsung Neo QLED QN90C 65\"",
      brand: "Samsung",
      rating: "9.3",
      price: "$1,499",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Диагональ": "65 дюймов",
        "Технология экрана": "Neo QLED (Mini LED подсветка)",
        "Разрешение": "4K Ultra HD (3840 x 2160)",
        "Процессор": "Neural Quantum Processor 4K",
        "Частота обновления": "120 Гц / 144 Гц",
        "Звук": "60 Вт, OTS+ (звук следом за объектом)",
        "ОС": "Tizen Smart TV"
      }
    },
    {
      id: "sonya95l",
      name: "Sony BRAVIA XR A95L 65\"",
      brand: "Sony",
      rating: "9.8",
      price: "$2,999",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&auto=format&fit=crop&q=60",
      specs: {
        "Диагональ": "65 дюймов",
        "Технология экрана": "QD-OLED (квантовые точки + OLED)",
        "Разрешение": "4K Ultra HD (3840 x 2160)",
        "Процессор": "Cognitive Processor XR",
        "Частота обновления": "120 Гц, VRR, ALLM",
        "Звук": "60 Вт, Acoustic Surface Audio+",
        "ОС": "Google TV"
      }
    }
  ]
};
