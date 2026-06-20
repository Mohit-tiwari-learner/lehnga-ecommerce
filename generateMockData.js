const fs = require('fs');
const path = require('path');

const IMAGES = [
  "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610189012371-331da2912423?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621578330541-b8abf10cd832?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599643478524-fb66f724d1ea?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop"
];

const COLORS = ["Magenta", "Blue", "Off White", "Peach", "Golden", "Pista Green", "Lavender", "Green", "Brown", "Orange", "Rama Green", "Crimson", "Navy", "Teal", "Burgundy"];
const ADJECTIVES = ["Velmira", "Cazelle", "Prismora", "Sunehera", "Mihira", "Ravelle", "Nirel", "Phoolriva", "Kavira", "Rupanjali", "Zahra", "Meher", "Inaya"];
const WORKS = ["with Sequin Bead Work", "with Beads and Sequin Work", "with Sequin Cape", "with Zardozi", "with Floral Kundan Work", "with Embroidery", "with Mirror Embellishment", "with Subtle Zari Work"];

const CATEGORIES = {
  "lehengas": { basePrice: 20000, maxPrice: 90000, count: 24, noun: "Lehenga Set" },
  "sarees": { basePrice: 8000, maxPrice: 40000, count: 16, noun: "Saree" },
  "kurta-and-beyond": { basePrice: 4000, maxPrice: 15000, count: 12, noun: "Kurta Set" },
  "salwar-kameez": { basePrice: 5000, maxPrice: 20000, count: 12, noun: "Salwar Suit" },
  "indo-western": { basePrice: 12000, maxPrice: 35000, count: 12, noun: "Indo-Western Co-ord" },
  "blouses": { basePrice: 2000, maxPrice: 8000, count: 8, noun: "Designer Blouse" },
  "jewellery": { basePrice: 3000, maxPrice: 25000, count: 12, noun: "Jewellery Set" },
  "bridal": { basePrice: 45000, maxPrice: 150000, count: 16, noun: "Bridal Lehenga" },
  "dress-material": { basePrice: 2000, maxPrice: 6000, count: 8, noun: "Unstitched Suit Material" }
};

const BADGES = ["Wedding Ready", "Just in", "Bestseller", "Trending", "Wedding Festivities"];

let globalId = 1;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateProducts() {
  const productsObj = {};
  
  for (const [category, config] of Object.entries(CATEGORIES)) {
    productsObj[category] = [];
    
    if (category === "lehengas") {
      const extractedPath = path.join(__dirname, "public", "extracted_photos");
      if (fs.existsSync(extractedPath)) {
        const folders = fs.readdirSync(extractedPath);
        for (const folder of folders) {
          // Parse title nicely
          // e.g. "beautiful-and-elegant-teal-green-colour-georgette-fabric-lehenga-choli-reseller-in-surat-5067-green"
          // We will take the first 4-5 words and capitalize
          const rawTitle = folder.replace(/-/g, " ").replace(/reseller in surat/i, "").replace(/wholesale in surat/i, "").trim();
          const words = rawTitle.split(" ");
          const title = words.slice(0, 6).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Lehenga";
          
          const folderPath = path.join(extractedPath, folder);
          const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".png"));
          
          if (files.length > 0) {
            // Sort files numerically if possible
            files.sort((a, b) => {
              const numA = parseInt(a.replace(/[^0-9]/g, '')) || 0;
              const numB = parseInt(b.replace(/[^0-9]/g, '')) || 0;
              return numA - numB;
            });
            
            const image = `/extracted_photos/${folder}/${files[0]}`;
            const gallery = files.slice(1).map(f => `/extracted_photos/${folder}/${f}`);
            const price = Math.floor(Math.random() * (config.maxPrice - config.basePrice)) + config.basePrice;
            const shipsInDays = [2, 4, 7, 14, 21, 30][Math.floor(Math.random() * 6)];
            
            const product = {
              id: `le${globalId++}`,
              title,
              price,
              image,
              gallery,
              shipsInDays
            };
            
            if (Math.random() > 0.7) {
              product.badge = getRandomElement(BADGES);
            }
            if (Math.random() > 0.8) {
              product.swatches = [
                `#${Math.floor(Math.random()*16777215).toString(16)}`,
                `#${Math.floor(Math.random()*16777215).toString(16)}`
              ];
            }
            
            productsObj[category].push(product);
          }
        }
        continue; // Skip the standard random generation for lehengas
      }
    }
    
    // Standard generation for other categories
    for (let i = 0; i < config.count; i++) {
      const adjective = getRandomElement(ADJECTIVES);
      const color = getRandomElement(COLORS);
      const work = getRandomElement(WORKS);
      const title = `${adjective} ${color} ${config.noun} ${work}`;
      
      const price = Math.floor(Math.random() * (config.maxPrice - config.basePrice)) + config.basePrice;
      const image = getRandomElement(IMAGES);
      const shipsInDays = [2, 4, 7, 14, 21, 30][Math.floor(Math.random() * 6)];
      
      const product = {
        id: `${category.substring(0,2)}${globalId++}`,
        title,
        price,
        image,
        shipsInDays
      };
      
      if (Math.random() > 0.7) {
        product.badge = getRandomElement(BADGES);
      }
      
      if (Math.random() > 0.8) {
        product.swatches = [
          `#${Math.floor(Math.random()*16777215).toString(16)}`,
          `#${Math.floor(Math.random()*16777215).toString(16)}`
        ];
      }
      
      productsObj[category].push(product);
    }
  }
  
  return productsObj;
}

const allProducts = generateProducts();

const fileContent = `import { Product } from "@/components/product/ProductCard";

export const MOCK_PRODUCTS: Record<string, Product[]> = ${JSON.stringify(allProducts, null, 2)};

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "def1",
    title: "Signature Collection Piece",
    price: 15000,
    image: "https://images.unsplash.com/photo-1583391733958-611825512a4c?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 5,
  },
  {
    id: "def2",
    title: "Elegant Ethnic Wear",
    price: 18500,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 3,
  },
  {
    id: "def3",
    title: "Premium Designer Outfit",
    price: 25000,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6153c?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 7,
  },
  {
    id: "def4",
    title: "Festive Ready Attire",
    price: 21000,
    image: "https://images.unsplash.com/photo-1615886753866-79396abc446e?q=80&w=600&auto=format&fit=crop",
    shipsInDays: 4,
  }
];
`;

fs.writeFileSync(path.join(__dirname, 'src', 'lib', 'mockData.ts'), fileContent);
console.log('Successfully generated >100 mock products across categories in src/lib/mockData.ts');
