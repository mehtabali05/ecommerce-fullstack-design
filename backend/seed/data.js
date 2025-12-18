import slugify from "slugify";

// ❌ REMOVED ALL IMAGE IMPORT STATEMENTS (e.g., import tech1 from '...')
// ----------------------------------------------------------------------
// Rationale: Node.js ES Modules cannot directly import .png files.
// We replace them with simple string paths that a live application would use.

// Placeholder image paths for the database
// --- TECH ---
const tech1 = "./images/tech/1.png";
const tech2 = "./images/tech/2.png";
const tech3 = "./images/tech/3.png";
const tech4 = "./images/tech/4.png";
const tech5 = "./images/tech/5.png";
const tech6 = "./images/tech/6.png";
const tech7 = "./images/tech/7.png";
const tech8 = "./images/tech/8.png";
const tech9 = "./images/tech/9.png";
const tech10 = "./images/tech/10.png";

// --- BOOKS ---
const book1 = "./images/book/1.png";
const book2 = "./images/book/2.png";
const book3 = "./images/book/3.png";
const book4 = "./images/book/4.png";
const book5 = "./images/book/5.png";
const book6 = "./images/book/6.png";
const book7 = "./images/book/7.png";

// --- HOME INTERIORS ---
const interior1 = "./images/interior/1.png";
const interior2 = "./images/interior/2.png";
const interior3 = "./images/interior/3.png";
const interior4 = "./images/interior/4.png";
const interior5 = "./images/interior/5.png";
const interior6 = "./images/interior/6.png";
const interior7 = "./images/interior/7.png";
const interior8 = "./images/interior/8.png";
const interior9 = "./images/interior/9.png";
const interior10 = "./images/interior/10.png";

// --- CLOTHES (FASHION) ---
const fashion1 = "./images/cloth/1.png";
const fashion2 = "./images/cloth/2.png";
const fashion3 = "./images/cloth/3.png";
const fashion4 = "./images/cloth/4.png";
const fashion5 = "./images/cloth/5.png";
const fashion6 = "./images/cloth/6.png";
const fashion7 = "./images/cloth/7.png";

// Function to generate the slug once needed
const generateSlug = (name) => slugify(name, { lower: true, strict: true });

// --- CATEGORY DATA ---
export const categories = [
    { name: "Mobiles", slug: generateSlug("Mobiles") },
    { name: "Laptops", slug: generateSlug("Laptops") },
    { name: "Books", slug: generateSlug("Books") },
    { name: "Fashion", slug: generateSlug("Fashion") },
    { name: "Home Interiors", slug: generateSlug("Home Interiors") },
    { name: "Kitchen Items", slug: generateSlug("Kitchen Items") },
    { name: "Electronics & Gadgets", slug: "electronics-gadgets" },
    { name: "Home Furnishings", slug: generateSlug("Home Furnishings") },
    { name: "Home Decor", slug: generateSlug("Home Decor") },
    { name: "Appliances", slug: generateSlug("Appliances") },
];

    
export const products = [
    // --- Mobiles & Tablets (Category: mobiles) ---
    {
        name: "Apple iPhone 12 (Product Red)",
        price: 799.00,
        mainImage: tech1,
        images: [tech4],
        description: "The vibrant Product Red iPhone 12 features a brilliant display, powerful A14 Bionic chip, and an advanced dual 12MP camera system. Purchase helps support global health initiatives. Enjoy fast performance and a sleek, durable design with 5G capability.",
        category: "mobiles",
        stock: 30,
    },
    {
        name: "Apple iPhone 12 (Blue)",
        price: 799.00,
        mainImage: tech4,
        images: [tech1],
        description: "The stunning iPhone 12 in Blue offers a gorgeous Super Retina XDR display, A14 Bionic chip for blazing-fast performance, and a dual-camera system with Night mode on both cameras. Experience ceramic shield durability and 5G speeds in a beautiful, flat-edge design.",
        category: "mobiles",
        stock: 45,
    },
    {
        name: "Xiaomi Pad 5 Pro Tablet",
        price: 349.99,
        mainImage: tech2,
        images: [],
        description: "Experience premium entertainment and productivity with the Xiaomi Pad 5 Pro. Featuring a high-refresh-rate display, powerful processor, and quad speakers, this tablet is perfect for media consumption, gaming, and creative work. Its sleek design makes it highly portable.",
        category: "mobiles",
        stock: 65,
    },
    {
        name: "Xiaomi Mi 9 Lite",
        price: 249.99,
        mainImage: tech3,
        images: [],
        description: "The Xiaomi Mi 9 Lite offers a beautiful AMOLED display with an in-display fingerprint sensor. Capture stunning photos with its versatile triple camera setup and enjoy long-lasting battery life. A powerful and affordable smartphone option in a sleek, minimalist design.",
        category: "mobiles",
        stock: 70,
    },
    
    // --- Laptops (Category: laptops) ---
    {
        name: "Premium Ultrabook Laptop",
        price: 1299.00,
        mainImage: tech7,
        images: [],
        description: "A powerful and sleek Ultrabook designed for professionals and creators. Features a near-bezel-less display, high-performance CPU, and all-day battery life. The perfect balance of portability and power for demanding tasks and multimedia editing.",
        category: "laptops",
        stock: 22,
    },

    // --- Books (Category: books) ---
    {
        name: "Un Nuevo Mundo, Ahora (El Poder del Ahora Sequel)",
        price: 12.50,
        mainImage: book1,
        images: [book2,book3,book4,book5,book6,book7],
        description: "From Eckhart Tolle, the author of The Power of Now, this Spanish-language bestseller delves deeper into spiritual enlightenment, focusing on finding your life's purpose and moving beyond the ego's limitations. It is a transformative work for anyone seeking profound inner peace and a more conscious existence.",
        category: "books",
        stock: 120,
    },
    {
        name: "Spiritual Experiences: Maybe or Maybe Not",
        price: 11.75,
        mainImage: book2,
        images: [book1,book3,book4, book5, book6, book7],
        description: "Mary G. explores the subtle, often ambiguous nature of profound personal moments. This book thoughtfully examines various types of spiritual experiences—whether they stem from the divine, the psychological, or pure coincidence—leaving the reader to ponder their own understanding of faith and perception.",
        category: "books",
        stock: 110,
    },
    {
        name: "Prepared: What Kids Need for a Fulfilled Life",
        price: 18.99,
        mainImage: book3,
        images: [],
        description: "A powerful guide by Diane Tavenner, founder of Summit Public Schools, offering deeply practical wisdom on how to equip children with the skills, habits, and mindsets they need to thrive in college and life. This book is a roadmap for parents and educators seeking to foster purpose, responsibility, and fulfillment in the next generation.",
        category: "books",
        stock: 75,
    },
    {
        name: "The Imperfections of Memory (Vol. 22)",
        price: 9.99,
        mainImage: book4,
        images: [],
        description: "In this compelling Volume 22 by Angelina Aludo, the protagonist is trapped in purgatory, desperately fighting to piece together his jumbled, fractured memories. A dark, suspenseful tale exploring themes of identity, loss, and the deceptive nature of the past. Perfect for readers of psychological thrillers and dark fantasy.",
        category: "books",
        stock: 60,
    },
    {
        name: "The Arrivals: A Sci-Fi Thriller",
        price: 14.99,
        mainImage: book5,
        images: [],
        description: "An international bestseller by Lucas Lloyd. When two figures appear against a cosmic backdrop, they bring with them a mystery that could change humanity forever. This is a fast-paced, atmospheric thriller blending hard science fiction with edge-of-your-seat suspense and stunning astronomical imagery.",
        category: "books",
        stock: 88,
    },
    {
        name: "Look to the Stars",
        price: 16.25,
        mainImage: book6,
        images: [],
        description: "A poignant work by New York Times Bestselling Author Omar Urbane. The cover image of an individual shining a beam of light into the vast cosmos hints at a story of exploration, self-discovery, and hope. A moving narrative about finding direction in the dark and pursuing one's true path in a world of uncertainty.",
        category: "books",
        stock: 95,
    },

    // --- Fashion (Category: fashion) ---
    {
        name: "Men's Classic Melange Blue Polo Shirt",
        price: 29.99,
        mainImage: fashion1,
        images: [fashion2],
        description: "A timeless staple for smart-casual wear. This polo features a breathable melange knit fabric in a versatile blue-green shade, a classic collar, and a three-button placket. Perfect for weekend outings, golf, or layering.",
        category: "fashion",
        stock: 150,
    },
    {
        name: "Men's Performance Blue Polo Shirt",
        price: 34.99,
        mainImage: fashion2,
        images: [fashion1],
        description: "Designed for comfort and movement, this bright blue polo is made from moisture-wicking fabric. Its clean, vibrant color and structured collar make it ideal for active days or a bold casual look. Easy to care for and retains its shape.",
        category: "fashion",
        stock: 120,
    },
    {
        name: "Men's Winter Bomber Jacket with Faux Fur Hood",
        price: 119.99,
        mainImage: fashion3,
        images: [],
        description: "Stay warm and stylish with this rugged, insulated bomber jacket in a warm brown tone. Features utility pockets on the chest and sleeve, ribbed cuffs, and a detachable faux fur trim on the hood for maximum warmth and versatility.",
        category: "fashion",
        stock: 60,
    },
    {
        name: "Men's Classic Fit Dark Denim Shorts",
        price: 45.00,
        mainImage: fashion4,
        images: [],
        description: "Essential summer wear with a rugged appeal. These mid-length denim shorts feature a dark indigo wash, subtle fading, and a classic five-pocket design. Made from comfortable, durable cotton denim with a raw hemline.",
        category: "fashion",
        stock: 85,
    },
    {
        name: "Casual Denim Flap Backpack",
        price: 39.99,
        mainImage: fashion5,
        images: [],
        description: "A chic and casual everyday backpack made from light blue wash denim fabric. Features a secure flap closure, adjustable shoulder straps, and a drawstring cinch top. Perfect for school, day trips, or complementing a casual outfit.",
        category: "fashion",
        stock: 95,
    },
    {
        name: "Men's Premium Royal Blue Leather Wallet",
        price: 49.99,
        mainImage: fashion6,
        images: [],
        description: "Handcrafted bifold wallet made from genuine leather in a rich royal blue. Features contrasting stitching, multiple card slots, and a spacious bill compartment. A sleek and durable accessory for daily use.",
        category: "fashion",
        stock: 70,
    },
    {
        name: "Men's Slim-Fit Royal Blue Blazer",
        price: 180.00,
        mainImage: fashion7,
        images: [],
        description: "Make a statement with this vibrant royal blue slim-fit blazer. Features a classic two-button closure, notched lapels, and flap pockets. The perfect piece to elevate both formal attire and smart-casual combinations.",
        category: "fashion",
        stock: 40,
    },
    
    // --- Kitchen Items (Category: kitchen-items) ---
    {
        name: "Traditional Lidded Terracotta Cooking Pot",
        price: 19.99,
        mainImage: interior3,
        images: [],
        description: "Authentic earthenware pot with a lid, perfect for slow cooking stews, baking rice, or serving individual portions of soup. Terracotta retains heat exceptionally well, enhancing flavor and keeping food warm longer. A rustic, essential kitchen tool.",
        category: "kitchen-items",
        stock: 80,
    },
    {
        name: "Modern Smart Electric Kettle",
        price: 59.99,
        mainImage: tech10,
        images: [],
        description: "This modern electric kettle quickly boils water with precision. Featuring a matte black exterior, stainless steel interior, and smart temperature control, it's a perfect blend of style and function for tea and coffee aficionados. A great addition to any kitchen.",
        category: "kitchen-items",
        stock: 40,
    },
    {
        name: "Professional Chrome Slow Juicer",
        price: 349.99,
        mainImage: interior9,
        images: [],
        description: "A powerful, slow-masticating juicer designed to extract maximum nutrients and flavor from fruits and vegetables. The sleek chrome finish and durable components make it a premium addition to any health-conscious kitchen. Easy to assemble and clean.",
        category: "kitchen-items",
        stock: 50,
    },
    {
        name: "Bosch Tassimo Single-Serve Coffee Machine",
        price: 149.99,
        mainImage: interior8,
        images: [],
        description: "Enjoy a variety of coffee, tea, and hot chocolate beverages with this compact single-serve system. Features intelligent barcode technology for perfect brewing every time. The sleek white and silver design fits seamlessly into any modern kitchen.",
        category: "kitchen-items",
        stock: 90,
    },

    // --- Home Interiors (Category: home-interiors) ---
    {
        name: "Dracaena Marginata Floor Plant in Square Planter",
        price: 65.00,
        mainImage: interior4,
        images: [],
        description: "A stylish and low-maintenance indoor floor plant, known for its spiky green foliage and air-purifying qualities. Comes potted in a modern, tall brown square planter, perfect for adding a touch of natural elegance to living rooms or office spaces.",
        category: "home-interiors",
        stock: 35,
    },

    // --- Home Furnishings (Category: home-furnishings) ---
    {
        name: "Classic Beige Upholstered Armchair",
        price: 399.00,
        mainImage: interior1,
        images: [],
        description: "A timeless and comfortable armchair upholstered in a soft, neutral beige fabric. Features subtly flared arms and tapered dark wooden legs, making it a versatile piece that complements both traditional and modern decor.",
        category: "home-furnishings",
        stock: 25,
    },
    {
        name: "Mid-Century Modern Swivel Accent Chair",
        price: 450.00,
        mainImage: interior2,
        images: [],
        description: "A distinctive and comfortable accent chair with a high back and cushioned headrest, upholstered in a vibrant yellow fabric. Features a sturdy black swivel base, making it a stylish focal point for reading corners or lounges.",
        category: "home-furnishings",
        stock: 18,
    },
    {
        name: "Double-Height Queen Inflatable Air Mattress",
        price: 79.99,
        mainImage: interior5,
        images: [],
        description: "A comfortable, double-height inflatable queen mattress with a built-in electric pump for fast inflation and deflation. Ideal for camping, guest rooms, or temporary sleeping arrangements. Features a flocked top for added comfort and stability.",
        category: "home-furnishings",
        stock: 110,
    },

    // --- Home Decor (Category: home-decor) ---
    {
        name: "Contemporary Textured Ceramic Table Lamp",
        price: 79.99,
        mainImage: interior6,
        images: [],
        description: "An elegant table lamp featuring a textured round ceramic base in a subtle gray wash, topped with a large, neutral linen drum shade. Provides warm, ambient lighting perfect for bedside tables or living room accent lighting.",
        category: "home-decor",
        stock: 45,
    },
    {
        name: "Modern Faux Leather File Organizer / Magazine Rack",
        price: 45.00,
        mainImage: interior7,
        images: [],
        description: "A stylish desktop or floor organizer featuring three tiered compartments made of rich, saddle-brown faux leather, supported by a geometric gold-tone metal frame. Ideal for storing magazines, files, or vinyl records, adding a refined touch to your desk or living area.",
        category: "home-decor",
        stock: 60,
    },

    // --- Electronics & Gadgets (Category: electronics-gadgets) ---
    {
        name: "Canon EOS 2000D DSLR Kit",
        price: 499.00,
        mainImage: tech6,
        images: [],
        description: "Capture and share high-quality moments with the Canon EOS 2000D. This entry-level DSLR features a 24.1MP sensor, built-in Wi-Fi/NFC for easy sharing, and a responsive optical viewfinder. Perfect for budding photographers looking to step up from smartphone photography.",
        category: "electronics-gadgets",
        stock: 55,
    },
    {
        name: "Minimalist Fitness Smartwatch",
        price: 99.99,
        mainImage: tech8,
        images: [],
        description: "Track your fitness, monitor your health, and receive smart notifications with this stylish and lightweight smartwatch. Features a vibrant display, long-lasting battery, and multiple sport modes, all wrapped in a sleek, modern design.",
        category: "electronics-gadgets",
        stock: 110,
    },
    {
        name: "Pro Gaming Headset (Blue/Black)",
        price: 49.99,
        mainImage: tech5,
        images: [],
        description: "Dominate your game with this comfortable, over-ear gaming headset. Features high-fidelity stereo sound, a noise-canceling microphone, and cushioned earpads for marathon gaming sessions. The blue and black design adds a fierce, professional look.",
        category: "electronics-gadgets",
        stock: 85,
    },
    {
        name: "Premium Wireless Headphones (White)",
        price: 69.99,
        mainImage: tech9,
        images: [],
        description: "Enjoy superior audio quality and comfort with these elegant wireless headphones. Designed for daily use, they offer deep bass, clear highs, and long battery life. The minimalistic white and gold-trim finish makes them a perfect lifestyle accessory.",
        category: "electronics-gadgets",
        stock: 90,
    },

    // --- Appliances (Category: appliances) ---
    {
        name: "High-Efficiency Front-Load Washing Machine",
        price: 699.00,
        mainImage: interior10,
        images: [],
        description: "A modern, white front-load washing machine featuring multiple wash cycles, energy-efficient performance, and a large capacity drum. Includes smart controls for customizable washing and a sleek design suitable for any contemporary laundry room.",
        category: "appliances",
        stock: 15,
    },
];