const TIERS = [
  {
    id: "silver",
    name: "Silver",
    tagline: "Our entry-level card.",
    pricing: {
      yearRound: { monthly: 24, total: 288, totalLabel: "annually" },
      summer:    { monthly: 30, total: 180, totalLabel: "seasonal" },
      winter:    { monthly: 23, total: 138, totalLabel: "seasonal" }
    },
    benefits: [
      { label: "Complimentary Rounds",      value: null },
      { label: "Double Eagle Coupons",      value: "2 seasonal coupons ($20–$50 off public rates)" },
      { label: "Preferred Card Rates",      value: "$5–$30 off public rates" },
      { label: "Members for a Day Access",  value: "Access to premier participating clubs for under $100" },
      { label: "Play Day Discounts",        value: "Up to $10 off events" },
      { label: "Premier Course Access",     value: "Exclusive offers on rounds at premier clubs" },
      { label: "Merchandise Discounts",     value: "Up to 10% off" },
      { label: "Online Tee Time Booking",   value: "Access to value tee times up to 50% off" },
      { label: "Loyalty Rewards Program",   value: "Earn points through loyalty rewards" }
    ]
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "A complimentary round each season.",
    pricing: {
      yearRound: { monthly: 29, total: 348, totalLabel: "annually" },
      summer:    { monthly: 35, total: 210, totalLabel: "seasonal" },
      winter:    { monthly: 28, total: 160, totalLabel: "seasonal" }
    },
    benefits: [
      { label: "Complimentary Rounds",      value: "1 summer + 1 winter round at Heritage Isles" },
      { label: "Double Eagle Coupons",      value: "2 seasonal coupons ($20–$50 off public rates)" },
      { label: "Preferred Card Rates",      value: "$5–$30 off public rates" },
      { label: "Members for a Day Access",  value: "Access to premier participating clubs for under $100" },
      { label: "Play Day Discounts",        value: "Up to $10 off events" },
      { label: "Premier Course Access",     value: "Exclusive offers on rounds at premier clubs" },
      { label: "Merchandise Discounts",     value: "Up to 10% off" },
      { label: "Online Tee Time Booking",   value: "Access to value tee times up to 50% off" },
      { label: "Loyalty Rewards Program",   value: "Earn points through loyalty rewards" }
    ]
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "Top tier. Best perks at the premier clubs.",
    pricing: {
      yearRound: { monthly: 34, total: 408, totalLabel: "annually" },
      summer:    { monthly: 40, total: 240, totalLabel: "seasonal" },
      winter:    { monthly: 33, total: 198, totalLabel: "seasonal" }
    },
    benefits: [
      { label: "Complimentary Rounds",      value: "1 summer + 1 winter round at Heritage Isles, plus 1 summer + 1 winter round at Citrus National" },
      { label: "Double Eagle Coupons",      value: "2 seasonal coupons ($20–$50 off public rates)" },
      { label: "Preferred Card Rates",      value: "$5–$30 off public rates" },
      { label: "Members for a Day Access",  value: "Access to premier participating clubs for under $100" },
      { label: "Play Day Discounts",        value: "Up to $20 off events with Preferred Event Pricing" },
      { label: "Premier Course Access",     value: "Exclusive offers on rounds at premier clubs" },
      { label: "Merchandise Discounts",     value: "Up to 10% off" },
      { label: "Online Tee Time Booking",   value: "Access to value tee times up to 50% off" },
      { label: "Loyalty Rewards Program",   value: "Earn points through loyalty rewards" }
    ]
  },
  {
    id: "monthly",
    name: "Monthly",
    tagline: "Month-to-month. Pay only for the season you play.",
    pricing: {
      yearRound: null,
      summer:    { monthly: 45, total: null, totalLabel: null, note: "+ $20 activation fee" },
      winter:    { monthly: 40, total: null, totalLabel: null, note: "+ $20 activation fee" }
    },
    benefits: [
      { label: "Complimentary Rounds",      value: null },
      { label: "Double Eagle Coupons",      value: "1 monthly coupon ($20–$50 off public rates)" },
      { label: "Preferred Card Rates",      value: "$5–$30 off rack rates" },
      { label: "Members for a Day Access",  value: "Access to premier participating clubs for under $100" },
      { label: "Play Day Discounts",        value: "Up to $10 off events" },
      { label: "Premier Course Access",     value: "Exclusive offers on rounds at premier clubs" },
      { label: "Merchandise Discounts",     value: "Up to 10% off" },
      { label: "Online Tee Time Booking",   value: "Access to value tee times up to 50% off" },
      { label: "Loyalty Rewards Program",   value: "Earn points through loyalty rewards" }
    ]
  }
];
