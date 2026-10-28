export const plans = [
  {
    name: "Local Moves",
    price: "£40",
    unit: "/ hour",
    note: "2-hour minimum",
    description: "Professional transport for flat moves, term-time student relocations, small house moves, and minor business relocations across Bristol.",
    items: [
      "Solo driver & commercial van hire (customer assistance required for heavy items)",
      "First 10 miles of travel fuel included",
      "Fully insured commercial van transport",
      "Use of heavy-duty moving blankets, load-rated straps, and sack trucks",
    ],
  },
  {
    name: "Store & Item Pickups",
    price: "£35",
    unit: "from",
    note: "Fixed price based on item dimensions and travel distance",
    description: "Fixed pricing based on item dimensions and travel distance.",
    items: [
      "Direct collections from IKEA, B&Q, other retail shops or private sellers on Facebook Marketplace or Gumtree",
      "Vehicle wear-and-tear and fuel for one direct A-to-B local trip",
      "Items professionally secured in the van and delivered to your door",
      "No hidden mileage fees within the quoted distance",
    ],
  },
  {
    name: "Licensed Waste Clearance",
    price: "£80",
    priceExtra: "Micro loads start from £60",
    unit: "from",
    note: "Tip fees charged separately at cost",
    description: "Legal, responsible disposal of cardboard, mixed wood, old furniture, and household waste.",
    items: [
      "Covers our Environment Agency Upper Tier Waste Carrier license & van running costs",
      "Waste is legally dumped at Bristol commercial waste transfer centres",
      "Official waste transfer notes and weighbridge tip receipts provided to you",
      "Protects you from illegal fly-tipping fines",
    ],
  },
  {
    name: "Self-Storage Moves",
    price: "£40",
    unit: "/ hour",
    note: "2-hour minimum",
    description: "Transport to and from all Bristol storage facilities including Safestore, Big Yellow, Vanguard, and Bristol container storage.",
    items: [
      "Solo driver assisting with unit loading/unloading (customer help required for heavy items)",
      "First 10 miles of travel fuel included",
      "Trolleys and equipment to safely navigate long storage corridors",
      "Full commercial insurance while goods are in transit to the unit",
    ],
  },
  {
    name: "Furniture Assemble & Dismantling",
    price: "£25",
    unit: "/ hour",
    note: "2-hour minimum booking (standalone)",
    description: "Flat-pack assembly and move-day dismantling, with a full trade power-tool kit.",
    // Shown as a two-part price breakdown instead of a single description.
    options: [
      { label: "Standalone (no move)", text: "£25 / hour (2-hour minimum booking)." },
      { label: "Move add-on", text: "Booked alongside a move? The moving hourly rate pauses. RIT TRANZ charges a transparent flat fee per item (from £20 for standard items), so there is no overpaying during dismantling." },
    ],
    items: [
      "Solo operator equipped with full Bosch trade power tool kit",
      "Precision assembly of new flat-pack furniture",
      "Move-day furniture dismantling and reassembly",
      "Existing hardware safely bagged and taped to furniture",
    ],
    terms: "The standard rate includes bagging and labelling existing furniture fixings. Any replacement parts, spare screws, brackets, or speciality cam-locks supplied from the van’s onboard trade stock to complete a build are charged separately as a consumables fee.",
  },
];
