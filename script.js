// ==========================================
// 1. PRODUCTS & DECORATIONS DATA
// ==========================================
const products = [
    {
        id: 1,
        name: "Crimson Velvet Roses & Chocolates Gift Set",
        category: "flowers",
        price: 128.00,
        rating: 5.0,
        tag: "Romantic",
        image: "images/arrangcho.jpg",
        description: "12 long-stemmed roses artfully arranged in a clear glass vase, presented alongside a chocolates for the ultimate romantic statement."
    },
    {
        id: 2,
        name: "Hand-Wrapped Signature Bouquet",
        category: "flowers",
        price: 105.00,
        rating: 4.9,
        tag: "Romantic",
        image: "images/wrapped.jpg",
        description: "A breathtaking bouquet of 12 hand-selected deep red roses, complemented by fragrant silver dollar eucalyptus and wrapped in sleek, premium craft paper."
    },
    {
        id: 3,
        name: "Radiant Sunflowers & Red Roses Arrangement",
        category: "flowers",
        price: 45.00,
        rating: 4.8,
        tag: "Get Well",
        image: "images/yellow.jpg",
        description: "A joyful blend of vibrant golden sunflowers and deep crimson roses designed to brighten anyone's day and bring warmth to any room."
    },
    {
        id: 4,
        name: "Pastel Peony & Hydrangea Dream Bouquet",
        category: "flowers",
        price: 92.00,
        rating: 5.0,
        tag: "Birthday",
        image: "images/arreglo1.jpg",
        description: "Soft blush peonies, sky-blue hydrangeas, and delicate white spray roses beautifully hand-wrapped in layered blush silk paper."
    },
    {
        id: 5,
        name: "Grand Stem Long-Stemmed Rose Collection",
        category: "flowers",
        price: 85.00,
        rating: 4.9,
        tag: "Romantic",
        image: "images/arreglo2.jpg",
        description: "An impressive arrangement featuring extra-long, velvety red roses meticulously curated in a tall ceramic vase for grand gestures."
    },
    {
        id: 6,
        name: "Sunshine Meadow Floral & Chocolate Bundle",
        category: "flowers",
        price: 110.00,
        rating: 4.7,
        tag: "Congratulations",
        image: "images/ana.jpg",
        description: "A radiant vase arrangement featuring vivid yellow lilies, white gardenias, and fresh greenery paired with ferrero chocolate."
    },
    {
        id: 7,
        name: "Jumbo 26\" Sweetheart Plush Bear",
        category: "bears",
        price: 110.00,
        rating: 4.5,
        tag: "Congratulations",
        image: "images/pel26.jpg",
        description: "An extra-large, ultra-soft plush bear holding a stitched crimson heart, stuffed with hypoallergenic plush fiber for unforgettable hugs."
    },
    {
        id: 8,
        name: "Classic Cuddle Keepsake Teddy Bear",
        category: "bears",
        price: 110.00,
        rating: 4.5,
        tag: "Congratulations",
        image: "images/teddybear.webp",
        description: "A timeless, ultra-soft teddy bear wearing an elegant satin bow tie, making it the perfect companion to any flower delivery."
    },
    {
        id: 9,
        name: "Wrapped Roses with Bow in Vase",
        category: "flowers",
        price: 110.00,
        rating: 4.5,
        tag: "Congratulations",
        image: "images/50.jpg",
        description: "Elegantly wrapped long-stemmed roses tied with a bow, exquisitely presented inside a crystal vase."
    }
];

const decorations = [
    {
        id: 101,
        name: "Organic Pastel Balloon Arch Display",
        category: "balloons",
        price: 180.00,
        rating: 5.0,
        tag: "Party",
        image: "images/decoration6.jpg",
        description: "Custom-designed organic balloon garland styled with multi-sized pastel balloons, perfect for baby showers, birthdays, and corporate events."
    },
    {
        name: "Grand Luxury Table Centerpiece Ensemble",
        id: 102,
        category: "tableware",
        price: 145.00,
        rating: 4.9,
        tag: "Elegance",
        image: "images/decoration5.jpg",
        description: "Sophisticated event decor featuring ambient candle runners, lush low-profile floral arrangements, and gold accents tailored for intimate dinners."
    },
    {
        id: 103,
        name: "Shimmer Wall Backdrop & Balloon Frame",
        category: "backdrops",
        price: 210.00,
        rating: 4.8,
        tag: "Event",
        image: "images/cortinajeglobos.jpg",
        description: "A show-stopping gold shimmer sequin wall backdrop framed with a custom balloon garland, creating the ideal photo booth experience."
    },
    {
        id: 104,
        name: "Royal Quinceañera & Event Entrance Arch",
        category: "arch",
        price: 250.00,
        rating: 5.0,
        tag: "Celebration",
        image: "images/decoration1.jpg",
        description: "A magnificent focal-point decoration for main tables and stage entrances, featuring lush florals and custom color-matched balloon styling."
    }
];

// Custom Gift Builder Options
const builderOptions = {
    flowers: [
        { id: 'b_f1', name: 'Crimson Rose Stem Bouquet', price: 65, img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?fit=crop&w=300&q=80' },
        { id: 'b_f2', name: 'Pastel Peony Dream', price: 75, img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?fit=crop&w=300&q=80' },
        { id: 'b_f3', name: 'White Gardenia & Lily', price: 70, img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?fit=crop&w=300&q=80' }
    ],
    bears: [
        { id: 'b_b1', name: '14" Honey Plush Bear', price: 40, img: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?fit=crop&w=300&q=80' },
        { id: 'b_b2', name: '24" Giant Cream Bear', price: 75, img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?fit=crop&w=300&q=80' },
        { id: 'b_b3', name: '14" Vintage Espresso Bear', price: 42, img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?fit=crop&w=300&q=80' }
    ],
    extras: [
        { id: 'b_e1', name: 'ferrero Chocolate Box', price: 18, img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?fit=crop&w=300&q=80' },
        { id: 'b_e2', name: 'Satin Rose Ribbon Wrap', price: 8, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?fit=crop&w=300&q=80' },
        { id: 'b_e3', name: 'Handwritten Card', price: 2, img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?fit=crop&w=300&q=80' },
        { id: 'b_e4', name: 'Special foil balloon', price: 5, img: 'images/happball.png' }
    ]
};

// ==========================================
// 2. GLOBAL APP STATE
// ==========================================

let cart = JSON.parse(localStorage.getItem('mariluz_cart')) || [];
let activeQuickViewItem = null;
let customBoxSelection = { flower: null, bear: null, extra: null };

// Combined product catalog lookup
const allCatalogItems = [...products, ...decorations];

// ==========================================
// 3. INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initCatalog();
    initBuilder();
    setupFilters();
    setupEventListeners();
    updateCartUI();
});

function initCatalog() {
    const productsGrid = document.getElementById('products-grid');
    const decorationsGrid = document.getElementById('decorations-grid');

    if (productsGrid) {
        renderGrid(productsGrid, products);
    }
    if (decorationsGrid) {
        renderGrid(decorationsGrid, decorations);
    }
}

// ==========================================
// 4. RENDER UTILITIES
// ==========================================

function renderGrid(container, items) {
    if (!container) return;

    if (!items || items.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 text-gray-400">
                <i class="fa-solid fa-magnifying-glass text-3xl mb-2 text-gray-300"></i>
                <p class="text-sm font-medium">No items match your search or filter.</p>
            </div>`;
        return;
    }

    container.innerHTML = items.map(p => `
        <div onclick="openQuickView(${p.id})" class="glass-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-bloom-500/10 flex flex-col justify-between cursor-pointer">
            <div>
                <div class="relative h-64 overflow-hidden bg-bloom-100">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         onerror="this.src='https://placehold.co/600x600/f8f2eb/9e3b52?text=Mariluz+Flowers'">
                    <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-bloom-600 font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        ${p.tag || p.category}
                    </span>
                    
                </div>
                <div class="p-5">
                    <div class="flex items-center text-bloom-gold text-xs gap-1 mb-1">
                        <i class="fa-solid fa-star"></i>
                        <span class="text-gray-700 font-semibold ml-1">${p.rating ? p.rating.toFixed(1) : '5.0'}</span>
                    </div>
                    <h3 class="font-serif text-xl font-bold text-gray-900 group-hover:text-bloom-600 transition-colors">${p.name}</h3>
                    <p class="text-gray-500 text-xs mt-1 line-clamp-2 leading-relaxed">${p.description}</p>
                </div>
            </div>
            <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-100/60 mt-auto">
                <button onclick="event.stopPropagation(); quickAddToCart(${p.id})" class="px-4 py-2 rounded-xl bg-bloom-500/10 text-bloom-600 font-semibold text-xs hover:bg-bloom-500 hover:text-white transition-all">
                    + Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// ==========================================
// 5. SEARCH & FILTERING LOGIC
// ==========================================

function setupFilters() {
    const filterBtns = document.querySelectorAll('.cat-filter');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetBtn = e.currentTarget;
            filterBtns.forEach(b => {
                b.classList.remove('bg-bloom-500', 'text-white', 'shadow-md', 'shadow-bloom-500/20');
                b.classList.add('bg-white', 'text-gray-600');
            });
            targetBtn.classList.add('bg-bloom-500', 'text-white', 'shadow-md', 'shadow-bloom-500/20');
            targetBtn.classList.remove('bg-white', 'text-gray-600');

            const cat = targetBtn.dataset.category;
            const targetGrid = document.getElementById('products-grid') || document.getElementById('decorations-grid');
            const sourceList = document.getElementById('decorations-grid') ? decorations : products;

            if (cat === 'all') {
                renderGrid(targetGrid, sourceList);
            } else {
                renderGrid(targetGrid, sourceList.filter(p => p.category === cat));
            }
        });
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            const targetGrid = document.getElementById('products-grid') || document.getElementById('decorations-grid');
            const sourceList = document.getElementById('decorations-grid') ? decorations : products;

            const filtered = sourceList.filter(p => 
                p.name.toLowerCase().includes(term) || 
                p.description.toLowerCase().includes(term) ||
                (p.tag && p.tag.toLowerCase().includes(term))
            );
            renderGrid(targetGrid, filtered);
        });
    }
}

function filterByTag(tag) {
    const targetGrid = document.getElementById('products-grid');
    if (targetGrid) {
        renderGrid(targetGrid, products.filter(p => p.tag === tag));
        targetGrid.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// 6. GIFT BOX BUILDER
// ==========================================

function initBuilder() {
    const flowerGrid = document.getElementById('builder-flowers');
    const bearGrid = document.getElementById('builder-bears');
    const extraGrid = document.getElementById('builder-extras');

    if (flowerGrid) {
        flowerGrid.innerHTML = builderOptions.flowers.map(f => `
            <div onclick="selectBuilderOption('flower', '${f.id}')" id="opt-${f.id}" class="builder-card cursor-pointer border border-gray-200 rounded-xl p-3 text-center hover:border-bloom-500 transition-all bg-white">
                <img src="${f.img}" alt="${f.name}" class="w-full h-20 object-cover rounded-lg mb-2">
                <h4 class="text-xs font-bold text-gray-800">${f.name}</h4>
            </div>
        `).join('');
    }

    if (bearGrid) {
        bearGrid.innerHTML = builderOptions.bears.map(b => `
            <div onclick="selectBuilderOption('bear', '${b.id}')" id="opt-${b.id}" class="builder-card cursor-pointer border border-gray-200 rounded-xl p-3 text-center hover:border-bloom-500 transition-all bg-white">
                <img src="${b.img}" alt="${b.name}" class="w-full h-20 object-cover rounded-lg mb-2">
                <h4 class="text-xs font-bold text-gray-800">${b.name}</h4>
            </div>
        `).join('');
    }

    if (extraGrid) {
        extraGrid.innerHTML = builderOptions.extras.map(e => `
            <div onclick="selectBuilderOption('extra', '${e.id}')" id="opt-${e.id}" class="builder-card cursor-pointer border border-gray-200 rounded-xl p-3 text-center hover:border-bloom-500 transition-all bg-white">
                <img src="${e.img}" alt="${e.name}" class="w-full h-20 object-cover rounded-lg mb-2">
                <h4 class="text-xs font-bold text-gray-800">${e.name}</h4>
            </div>
        `).join('');
    }
}

function selectBuilderOption(type, id) {
    const item = builderOptions[type + 's'].find(x => x.id === id);

    if (customBoxSelection[type] && customBoxSelection[type].id === id) {
        customBoxSelection[type] = null;
        document.getElementById(`opt-${id}`)?.classList.remove('border-bloom-500', 'ring-2', 'ring-bloom-500/30', 'bg-bloom-50');
    } else {
        builderOptions[type + 's'].forEach(x => {
            document.getElementById(`opt-${x.id}`)?.classList.remove('border-bloom-500', 'ring-2', 'ring-bloom-500/30', 'bg-bloom-50');
        });
        customBoxSelection[type] = item;
        document.getElementById(`opt-${id}`)?.classList.add('border-bloom-500', 'ring-2', 'ring-bloom-500/30', 'bg-bloom-50');
    }

    updateBuilderSummary();
}

function updateBuilderSummary() {
    const summaryList = document.getElementById('builder-summary-list');
    const totalPriceEl = document.getElementById('builder-total-price');
    const addBtn = document.getElementById('add-custom-bundle-btn');

    if (!summaryList || !totalPriceEl || !addBtn) return;

    let total = 0;
    let itemsHtml = '';

    if (customBoxSelection.flower) {
        total += customBoxSelection.flower.price;
    }
    if (customBoxSelection.bear) {
        total += customBoxSelection.bear.price;
    }
    if (customBoxSelection.extra) {
        total += customBoxSelection.extra.price;
    }

    if (total === 0) {
        summaryList.innerHTML = `<p class="text-gray-400 italic text-center py-8">Select elements to build your box...</p>`;
        addBtn.disabled = true;
        addBtn.className = "w-full py-4 rounded-xl bg-gray-300 text-gray-500 font-medium transition-all flex items-center justify-center gap-2 cursor-not-allowed";
    } else {
        summaryList.innerHTML = itemsHtml;
        addBtn.disabled = false;
        addBtn.className = "w-full py-4 rounded-xl bg-bloom-500 text-white font-medium hover:bg-bloom-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-bloom-500/25";
    }

}

// ==========================================
// 7. CART SYSTEM & PERSISTENCE
// ==========================================

function quickAddToCart(productId) {
    const item = allCatalogItems.find(x => x.id === productId);
    if (item) {
        addToCart(item);
        openCartDrawer();
    }
}

function addToCart(item, note = '') {
    const existing = cart.find(x => x.id === item.id && (x.note || '') === note);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1, note: note });
    }
    saveCart();
    updateCartUI();
}

function updateCartQty(id, delta) {
    const itemIndex = cart.findIndex(x => String(x.id) === String(id));
    if (itemIndex > -1) {
        cart[itemIndex].qty += delta;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('mariluz_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    const shippingEl = document.getElementById('cart-shipping');
    const shippingProgressText = document.getElementById('shipping-progress-text');
    const shippingBar = document.getElementById('shipping-bar');

    if (!cartCount || !container || !subtotalEl || !totalEl) return;

    const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
    cartCount.textContent = totalItems;

    const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 12.00;
    const total = subtotal + shipping;

    if (shippingProgressText && shippingBar) {
        if (subtotal >= 100) {
            shippingBar.style.width = "100%";
        } else {
            const diff = 100 - subtotal;
            shippingBar.style.width = `${Math.min((subtotal / 100) * 100, 100)}%`;
        }
    }

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-gray-400">
                <i class="fa-solid fa-basket-shopping text-4xl mb-3 text-gray-300"></i>
                <p class="text-sm">Your cart is currently empty.</p>
            </div>`;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="flex items-center gap-4 p-3 rounded-xl bg-bloom-100/60 border border-gray-100">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
                <div class="flex-1">
                    <h4 class="text-xs font-bold text-gray-900">${item.name}</h4>
                    ${item.note ? `<p class="text-[10px] text-gray-500 italic mt-0.5">"${item.note}"</p>` : ''}
                    <div class="flex items-center gap-2 mt-2">
                        <button onclick="updateCartQty('${item.id}', -1)" aria-label="Decrease quantity" class="w-5 h-5 rounded bg-white text-gray-700 flex items-center justify-center text-xs shadow-sm hover:bg-bloom-500 hover:text-white">-</button>
                        <span class="text-xs font-semibold px-1">${item.qty}</span>
                        <button onclick="updateCartQty('${item.id}', 1)" aria-label="Increase quantity" class="w-5 h-5 rounded bg-white text-gray-700 flex items-center justify-center text-xs shadow-sm hover:bg-bloom-500 hover:text-white">+</button>
                    </div>
                </div>
                <button onclick="updateCartQty('${item.id}', -999)" aria-label="Remove item" class="text-gray-400 hover:text-red-500 text-xs p-1">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

}

// ==========================================
// 8. QUICKVIEW MODAL & CART DRAWER HANDLERS
// ==========================================

function openQuickView(productId) {
    const item = allCatalogItems.find(x => x.id === productId);
    if (!item) return;

    activeQuickViewItem = item;
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-category').textContent = item.tag || item.category;
    document.getElementById('modal-price').textContent = `$${item.price.toFixed(2)}`;
    document.getElementById('modal-desc').textContent = item.description;
    
    const noteInput = document.getElementById('modal-note');
    if (noteInput) noteInput.value = '';

    const modal = document.getElementById('quickview-modal');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('#quickview-content').classList.remove('scale-95');
}

function closeQuickView() {
    const modal = document.getElementById('quickview-modal');
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('#quickview-content').classList.add('scale-95');
    activeQuickViewItem = null;
}

function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const panel = document.getElementById('cart-panel');
    if (!drawer || !panel) return;
    drawer.classList.remove('opacity-0', 'pointer-events-none');
    panel.classList.remove('translate-x-full');
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const panel = document.getElementById('cart-panel');
    if (!drawer || !panel) return;
    drawer.classList.add('opacity-0', 'pointer-events-none');
    panel.classList.add('translate-x-full');
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your order! Proceeding to local Providence delivery checkout.");
}

// ==========================================
// 9. GLOBAL EVENT LISTENERS & MOBILE NAVIGATION
// ==========================================

function setupEventListeners() {
    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Cart Drawer Toggle Events
    document.getElementById('cart-btn')?.addEventListener('click', openCartDrawer);
    document.getElementById('close-cart-btn')?.addEventListener('click', closeCartDrawer);

    // Close Drawer when clicking backdrop
    document.getElementById('cart-drawer')?.addEventListener('click', (e) => {
        if (e.target.id === 'cart-drawer') closeCartDrawer();
    });

    // Quickview Modal Events
    document.getElementById('close-quickview')?.addEventListener('click', closeQuickView);
    document.getElementById('quickview-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'quickview-modal') closeQuickView();
    });

    // Quickview Add to Cart Action
    document.getElementById('modal-add-btn')?.addEventListener('click', () => {
        if (activeQuickViewItem) {
            const note = document.getElementById('modal-note')?.value.trim() || '';
            addToCart(activeQuickViewItem, note);
            closeQuickView();
            openCartDrawer();
        }
    });

    // Add Custom Bundle to Cart Button Event
    document.getElementById('add-custom-bundle-btn')?.addEventListener('click', () => {
        const total = (customBoxSelection.flower?.price || 0) + (customBoxSelection.bear?.price || 0) + (customBoxSelection.extra?.price || 0);
        if (total === 0) return;

        const customItem = {
            id: 'custom_' + Date.now(),
            name: "Custom Curated Gift Box",
            price: total,
            image: customBoxSelection.flower?.img || customBoxSelection.bear?.img || 'images/favicon.ico',
            description: `Includes: ${customBoxSelection.flower ? customBoxSelection.flower.name : ''} ${customBoxSelection.bear ? '+ ' + customBoxSelection.bear.name : ''} ${customBoxSelection.extra ? '+ ' + customBoxSelection.extra.name : ''}`
        };

        addToCart(customItem);
        openCartDrawer();
    });
}