export type Prices = {
    [key: string]: Services
  }
  
export type Services = {
    [key: string]: number
  }
   
export const prices: Prices = {
    "2023": {
      "internet": 39,
      "tv": 49,
      "phone": 29,
      "decoder": 29,
      "discount-internet-tv": 9, // mniej od standardowego  9
      "discount-internet-tv-phone": 9, // o 9  // przeliczone najbardziej korzystne polaczenie promocji internet-tv-phone
      "discount-internet-phone": 4, // mniej o 4
      "discount-internet-tv-decoder": 38, // mniej o cene dekodera 29 oraz 9 ze znizki internet tv
      "discount-internet-tv-phone-decoder": 38 // mniej o cene dekodera 29 oraz 9 ze znizki interet tv phone
    },
    "2024": {
      "internet": 49,
      "tv": 49,
      "phone": 29,
      "decoder": 29,
      "discount-internet-tv": 9,
      "discount-internet-tv-phone": 14, // przeliczone najbardziej korzystne polaczenie promocji internet-tv-phone
      "discount-internet-phone": 14,
      "discount-internet-tv-decoder": 38, // mniej o cene dekodera oraz 9 ze znizki internet tv
      "discount-internet-tv-phone-decoder": 43 // mniej o cene dekodera 29 oraz 14 ze znizki interet tv phone
  
    },
    "2025": {
      "internet": 59,
      "tv": 59,
      "phone": 29,
      "decoder": 29,
      "discount-internet-tv": 19,
      "discount-internet-tv-phone": 24,  // przeliczone najbardziej korzystne polaczenie promocji internet-tv-phone
      "discount-internet-phone": 24, 
      "discount-internet-tv-decoder": 48, // mniej o cene dekodera oraz 19 ze znizki internet tv
      "discount-internet-tv-phone-decoder": 62 // mniej o cene dekodera 29 oraz 24 ze znizki interet tv phone
  
    }
  }