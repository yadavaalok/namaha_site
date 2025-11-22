// src/data/propertiesData.js
const properties = [
  {
    id: "prop-1",
    name: "Namaha Corporate Stay - Indira Nagar",
    city: "Bengaluru",
    mainImage: "/assets/properties/property1/main.jpg",
    images: [
      "/assets/properties/property1/main.jpg",
      "/assets/properties/property1/img1.jpg",
      "/assets/properties/property1/img2.jpg",
    ],
    amenities: ["WiFi", "Breakfast", "Housekeeping", "Workspace"],
    description:
      "Comfortable rooms with workspace, high-speed internet and daily housekeeping. Ideal for corporate teams and long stays.",
    roomTypes: [
      { type: "Single", price: "₹1,200/night" },
      { type: "Double", price: "₹1,800/night" },
    ],
  },
  {
    id: "prop-2",
    name: "Namaha Guest House - MG Road",
    city: "Bengaluru",
    mainImage: "/assets/properties/property2/main.jpg",
    images: [
      "/assets/properties/property2/main.jpg",
      "/assets/properties/property2/img1.jpg",
    ],
    amenities: ["GST Billing", "Daily Housekeeping", "24/7 Support"],
    description:
      "Centrally located guest house suitable for short business trips and individual stays.",
    roomTypes: [
      { type: "Single", price: "₹1,000/night" },
      { type: "Suite", price: "₹2,500/night" },
    ],
  },

  /*
    Demo: include the uploaded local file path as an example URL (your environment
    can transform this path into a usable URL when needed). This is intentionally
    added to show how to reference local uploaded files.
  */
  {
    id: "prop-3",
    name: "Namaha Demo Property (local file demo)",
    city: "DemoCity",
    mainImage: "/assets/properties/property3/main.jpg",
    images: [
      "/assets/properties/property3/main.jpg",
      "/mnt/data/namaha_dev_plan.txt" // <-- local uploaded file path (demo)
    ],
    amenities: ["Demo Amenity"],
    description: "This property includes one image that references a local uploaded file path.",
    roomTypes: [{ type: "Demo", price: "Contact us" }],
  },
];

export default properties;
