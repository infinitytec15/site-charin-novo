export interface CarModel {
  id: string;
  brand: string;
  model: string;
  type: "electric" | "hybrid";
  batteryCapacity: number; // kWh
  range: number; // km
  chargingSpeed: number; // kW
}

export const carBrands = [
  "Tesla",
  "BYD",
  "Nissan",
  "Renault",
  "Audi",
  "BMW",
  "Chevrolet",
  "Fiat",
  "Ford",
  "GWM",
  "Hyundai",
  "JAC",
  "Jeep",
  "Kia",
  "Mercedes-Benz",
  "Peugeot",
  "Porsche",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const carModels: CarModel[] = [
  // GWM
  {
    id: "gwm-ora-03",
    brand: "GWM",
    model: "ORA 03",
    type: "electric",
    batteryCapacity: 48,
    range: 310,
    chargingSpeed: 80,
  },
  {
    id: "gwm-ora-good-cat",
    brand: "GWM",
    model: "ORA Good Cat",
    type: "electric",
    batteryCapacity: 63.1,
    range: 420,
    chargingSpeed: 80,
  },
  {
    id: "gwm-haval-h6-hybrid",
    brand: "GWM",
    model: "Haval H6 Hybrid",
    type: "hybrid",
    batteryCapacity: 1.8,
    range: 0,
    chargingSpeed: 0,
  },
  {
    id: "gwm-haval-h6-phev",
    brand: "GWM",
    model: "Haval H6 PHEV",
    type: "hybrid",
    batteryCapacity: 19.94,
    range: 80,
    chargingSpeed: 6.6,
  },
  {
    id: "gwm-tank-300",
    brand: "GWM",
    model: "Tank 300 HEV",
    type: "hybrid",
    batteryCapacity: 1.7,
    range: 0,
    chargingSpeed: 0,
  },
  // Tesla
  {
    id: "tesla-model-3",
    brand: "Tesla",
    model: "Model 3",
    type: "electric",
    batteryCapacity: 60,
    range: 455,
    chargingSpeed: 170,
  },
  {
    id: "tesla-model-s",
    brand: "Tesla",
    model: "Model S",
    type: "electric",
    batteryCapacity: 100,
    range: 600,
    chargingSpeed: 250,
  },
  {
    id: "tesla-model-x",
    brand: "Tesla",
    model: "Model X",
    type: "electric",
    batteryCapacity: 100,
    range: 560,
    chargingSpeed: 250,
  },
  {
    id: "tesla-model-y",
    brand: "Tesla",
    model: "Model Y",
    type: "electric",
    batteryCapacity: 75,
    range: 505,
    chargingSpeed: 210,
  },

  // BYD
  {
    id: "byd-dolphin",
    brand: "BYD",
    model: "Dolphin",
    type: "electric",
    batteryCapacity: 44.9,
    range: 400,
    chargingSpeed: 60,
  },
  {
    id: "byd-seal",
    brand: "BYD",
    model: "Seal",
    type: "electric",
    batteryCapacity: 82.5,
    range: 520,
    chargingSpeed: 150,
  },
  {
    id: "byd-tang",
    brand: "BYD",
    model: "Tang",
    type: "electric",
    batteryCapacity: 86.4,
    range: 400,
    chargingSpeed: 110,
  },
  {
    id: "byd-han",
    brand: "BYD",
    model: "Han",
    type: "electric",
    batteryCapacity: 76.9,
    range: 550,
    chargingSpeed: 120,
  },

  // Nissan
  {
    id: "nissan-leaf",
    brand: "Nissan",
    model: "Leaf",
    type: "electric",
    batteryCapacity: 40,
    range: 270,
    chargingSpeed: 50,
  },
  {
    id: "nissan-ariya",
    brand: "Nissan",
    model: "Ariya",
    type: "electric",
    batteryCapacity: 63,
    range: 360,
    chargingSpeed: 130,
  },

  // Renault
  {
    id: "renault-zoe",
    brand: "Renault",
    model: "Zoe",
    type: "electric",
    batteryCapacity: 52,
    range: 395,
    chargingSpeed: 50,
  },
  {
    id: "renault-megane-e-tech",
    brand: "Renault",
    model: "Megane E-Tech",
    type: "electric",
    batteryCapacity: 60,
    range: 450,
    chargingSpeed: 130,
  },

  // Audi
  {
    id: "audi-e-tron",
    brand: "Audi",
    model: "e-tron",
    type: "electric",
    batteryCapacity: 95,
    range: 440,
    chargingSpeed: 150,
  },
  {
    id: "audi-q4-e-tron",
    brand: "Audi",
    model: "Q4 e-tron",
    type: "electric",
    batteryCapacity: 82,
    range: 520,
    chargingSpeed: 125,
  },
  {
    id: "audi-a3-e-tron",
    brand: "Audi",
    model: "A3 e-tron",
    type: "hybrid",
    batteryCapacity: 8.8,
    range: 50,
    chargingSpeed: 3.6,
  },

  // BMW
  {
    id: "bmw-i3",
    brand: "BMW",
    model: "i3",
    type: "electric",
    batteryCapacity: 42.2,
    range: 310,
    chargingSpeed: 50,
  },
  {
    id: "bmw-ix",
    brand: "BMW",
    model: "iX",
    type: "electric",
    batteryCapacity: 111.5,
    range: 630,
    chargingSpeed: 200,
  },
  {
    id: "bmw-i4",
    brand: "BMW",
    model: "i4",
    type: "electric",
    batteryCapacity: 83.9,
    range: 590,
    chargingSpeed: 200,
  },
  {
    id: "bmw-330e",
    brand: "BMW",
    model: "330e",
    type: "hybrid",
    batteryCapacity: 12,
    range: 60,
    chargingSpeed: 3.7,
  },
  {
    id: "bmw-x5-45e",
    brand: "BMW",
    model: "X5 45e",
    type: "hybrid",
    batteryCapacity: 24,
    range: 80,
    chargingSpeed: 3.7,
  },

  // Chevrolet
  {
    id: "chevrolet-bolt",
    brand: "Chevrolet",
    model: "Bolt EV",
    type: "electric",
    batteryCapacity: 66,
    range: 416,
    chargingSpeed: 55,
  },
  {
    id: "chevrolet-bolt-euv",
    brand: "Chevrolet",
    model: "Bolt EUV",
    type: "electric",
    batteryCapacity: 66,
    range: 397,
    chargingSpeed: 55,
  },
  {
    id: "chevrolet-volt",
    brand: "Chevrolet",
    model: "Volt",
    type: "hybrid",
    batteryCapacity: 18.4,
    range: 85,
    chargingSpeed: 3.6,
  },

  // Fiat
  {
    id: "fiat-500e",
    brand: "Fiat",
    model: "500e",
    type: "electric",
    batteryCapacity: 42,
    range: 320,
    chargingSpeed: 85,
  },

  // Ford
  {
    id: "ford-mustang-mach-e",
    brand: "Ford",
    model: "Mustang Mach-E",
    type: "electric",
    batteryCapacity: 98.8,
    range: 610,
    chargingSpeed: 150,
  },
  {
    id: "ford-escape-phev",
    brand: "Ford",
    model: "Escape PHEV",
    type: "hybrid",
    batteryCapacity: 14.4,
    range: 60,
    chargingSpeed: 3.3,
  },

  // Hyundai
  {
    id: "hyundai-ioniq-5",
    brand: "Hyundai",
    model: "IONIQ 5",
    type: "electric",
    batteryCapacity: 72.6,
    range: 480,
    chargingSpeed: 220,
  },
  {
    id: "hyundai-kona-electric",
    brand: "Hyundai",
    model: "Kona Electric",
    type: "electric",
    batteryCapacity: 64,
    range: 484,
    chargingSpeed: 100,
  },
  {
    id: "hyundai-ioniq-electric",
    brand: "Hyundai",
    model: "IONIQ Electric",
    type: "electric",
    batteryCapacity: 38.3,
    range: 311,
    chargingSpeed: 100,
  },
  {
    id: "hyundai-ioniq-hybrid",
    brand: "Hyundai",
    model: "IONIQ Hybrid",
    type: "hybrid",
    batteryCapacity: 1.56,
    range: 0,
    chargingSpeed: 0,
  },
  {
    id: "hyundai-tucson-hybrid",
    brand: "Hyundai",
    model: "Tucson Hybrid",
    type: "hybrid",
    batteryCapacity: 1.49,
    range: 0,
    chargingSpeed: 0,
  },

  // JAC
  {
    id: "jac-e-js1",
    brand: "JAC",
    model: "E-JS1",
    type: "electric",
    batteryCapacity: 40,
    range: 300,
    chargingSpeed: 40,
  },
  {
    id: "jac-e-j7",
    brand: "JAC",
    model: "E-J7",
    type: "electric",
    batteryCapacity: 55,
    range: 420,
    chargingSpeed: 60,
  },

  // Jeep
  {
    id: "jeep-wrangler-4xe",
    brand: "Jeep",
    model: "Wrangler 4xe",
    type: "hybrid",
    batteryCapacity: 17.3,
    range: 40,
    chargingSpeed: 7.2,
  },
  {
    id: "jeep-grand-cherokee-4xe",
    brand: "Jeep",
    model: "Grand Cherokee 4xe",
    type: "hybrid",
    batteryCapacity: 17.3,
    range: 40,
    chargingSpeed: 7.2,
  },

  // Kia
  {
    id: "kia-ev6",
    brand: "Kia",
    model: "EV6",
    type: "electric",
    batteryCapacity: 77.4,
    range: 528,
    chargingSpeed: 240,
  },
  {
    id: "kia-niro-ev",
    brand: "Kia",
    model: "Niro EV",
    type: "electric",
    batteryCapacity: 64.8,
    range: 460,
    chargingSpeed: 85,
  },
  {
    id: "kia-soul-ev",
    brand: "Kia",
    model: "Soul EV",
    type: "electric",
    batteryCapacity: 64,
    range: 452,
    chargingSpeed: 100,
  },
  {
    id: "kia-niro-hybrid",
    brand: "Kia",
    model: "Niro Hybrid",
    type: "hybrid",
    batteryCapacity: 1.56,
    range: 0,
    chargingSpeed: 0,
  },

  // Mercedes-Benz
  {
    id: "mercedes-eqs",
    brand: "Mercedes-Benz",
    model: "EQS",
    type: "electric",
    batteryCapacity: 107.8,
    range: 770,
    chargingSpeed: 200,
  },
  {
    id: "mercedes-eqe",
    brand: "Mercedes-Benz",
    model: "EQE",
    type: "electric",
    batteryCapacity: 90.6,
    range: 660,
    chargingSpeed: 170,
  },
  {
    id: "mercedes-eqb",
    brand: "Mercedes-Benz",
    model: "EQB",
    type: "electric",
    batteryCapacity: 66.5,
    range: 419,
    chargingSpeed: 100,
  },
  {
    id: "mercedes-c350e",
    brand: "Mercedes-Benz",
    model: "C350e",
    type: "hybrid",
    batteryCapacity: 25.4,
    range: 100,
    chargingSpeed: 11,
  },

  // Peugeot
  {
    id: "peugeot-e-208",
    brand: "Peugeot",
    model: "e-208",
    type: "electric",
    batteryCapacity: 50,
    range: 362,
    chargingSpeed: 100,
  },
  {
    id: "peugeot-e-2008",
    brand: "Peugeot",
    model: "e-2008",
    type: "electric",
    batteryCapacity: 50,
    range: 345,
    chargingSpeed: 100,
  },
  {
    id: "peugeot-3008-hybrid",
    brand: "Peugeot",
    model: "3008 Hybrid",
    type: "hybrid",
    batteryCapacity: 13.2,
    range: 59,
    chargingSpeed: 3.7,
  },

  // Porsche
  {
    id: "porsche-taycan",
    brand: "Porsche",
    model: "Taycan",
    type: "electric",
    batteryCapacity: 93.4,
    range: 484,
    chargingSpeed: 270,
  },
  {
    id: "porsche-panamera-e-hybrid",
    brand: "Porsche",
    model: "Panamera E-Hybrid",
    type: "hybrid",
    batteryCapacity: 17.9,
    range: 50,
    chargingSpeed: 7.2,
  },
  {
    id: "porsche-cayenne-e-hybrid",
    brand: "Porsche",
    model: "Cayenne E-Hybrid",
    type: "hybrid",
    batteryCapacity: 17.9,
    range: 44,
    chargingSpeed: 7.2,
  },

  // Toyota
  {
    id: "toyota-bz4x",
    brand: "Toyota",
    model: "bZ4X",
    type: "electric",
    batteryCapacity: 71.4,
    range: 516,
    chargingSpeed: 150,
  },
  {
    id: "toyota-prius-prime",
    brand: "Toyota",
    model: "Prius Prime",
    type: "hybrid",
    batteryCapacity: 8.8,
    range: 40,
    chargingSpeed: 3.3,
  },
  {
    id: "toyota-rav4-prime",
    brand: "Toyota",
    model: "RAV4 Prime",
    type: "hybrid",
    batteryCapacity: 18.1,
    range: 68,
    chargingSpeed: 6.6,
  },
  {
    id: "toyota-corolla-hybrid",
    brand: "Toyota",
    model: "Corolla Hybrid",
    type: "hybrid",
    batteryCapacity: 1.3,
    range: 0,
    chargingSpeed: 0,
  },

  // Volkswagen
  {
    id: "volkswagen-id4",
    brand: "Volkswagen",
    model: "ID.4",
    type: "electric",
    batteryCapacity: 77,
    range: 520,
    chargingSpeed: 135,
  },
  {
    id: "volkswagen-id3",
    brand: "Volkswagen",
    model: "ID.3",
    type: "electric",
    batteryCapacity: 58,
    range: 426,
    chargingSpeed: 100,
  },
  {
    id: "volkswagen-golf-gte",
    brand: "Volkswagen",
    model: "Golf GTE",
    type: "hybrid",
    batteryCapacity: 13,
    range: 50,
    chargingSpeed: 3.6,
  },

  // Volvo
  {
    id: "volvo-xc40-recharge",
    brand: "Volvo",
    model: "XC40 Recharge",
    type: "electric",
    batteryCapacity: 78,
    range: 418,
    chargingSpeed: 150,
  },
  {
    id: "volvo-c40-recharge",
    brand: "Volvo",
    model: "C40 Recharge",
    type: "electric",
    batteryCapacity: 78,
    range: 444,
    chargingSpeed: 150,
  },
  {
    id: "volvo-xc60-recharge",
    brand: "Volvo",
    model: "XC60 Recharge",
    type: "hybrid",
    batteryCapacity: 18.8,
    range: 73,
    chargingSpeed: 3.7,
  },
  {
    id: "volvo-xc90-recharge",
    brand: "Volvo",
    model: "XC90 Recharge",
    type: "hybrid",
    batteryCapacity: 18.8,
    range: 69,
    chargingSpeed: 3.7,
  },
];

export const getModelsByBrand = (brand: string): CarModel[] => {
  return carModels.filter((car) => car.brand === brand);
};

export const getCarById = (id: string): CarModel | undefined => {
  return carModels.find((car) => car.id === id);
};
