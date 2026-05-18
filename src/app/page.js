"use client";

import React, { useMemo, useState } from "react";
import {
  ShoppingBag,
  Star,
  Menu,
  X,
  Leaf,
  Sparkles,
  ShieldCheck,
  Droplets,
  Heart,
  Quote,
} from "lucide-react";

const products = [
  {
  id: 204,
  name: "Mango Soap",
  price: 12,
  category: "Soap Bars",
  tag: "Brightening",
  image: "/Images/mango-soap-card.png",
  description:
    "A mango soap selected to help hydrate and brighten the look of skin.",
  benefits: [
    "Boosts radiance",
    "Locks in moisture",
    "Supports glowing skin",
  ],
  ingredients: "Handmade soap formula.",
  paypalLink: "https://www.paypal.com/",
},

{
  id: 205,
  name: "ChokeBerry Soap",
  price: 12,
  category: "Soap Bars",
  tag: "Protect",
  image: "/Images/chokeberry-soap-card.png",
  description:
    "A chokeberry soap crafted to nourish skin and support a refreshed look.",
  benefits: [
    "Rich in antioxidants",
    "Boosts hydration",
    "Supports elasticity",
  ],
  ingredients: "Handmade soap formula.",
  paypalLink: "https://www.paypal.com/",
},

{
  id: 206,
  name: "Moringa Soap",
  price: 12,
  category: "Soap Bars",
  tag: "Revitalize",
  image: "/Images/moringa-soap-card.png",
  description:
    "A moringa soap designed to strengthen, nourish, and refresh the skin barrier.",
  benefits: [
    "Nutrient-rich formula",
    "Nourishes and repairs",
    "Supports skin barrier",
  ],
  ingredients: "Handmade soap formula.",
  paypalLink: "https://www.paypal.com/",
},
  {
  id: 200,
  name: "Charcoal Shampoo Bar",
  price: 17,
  category: "Hair",
  tag: "Detox",
  image: "/Images/charcoal-shampoo.png",
  description: "Deep cleansing charcoal shampoo bar that detoxifies scalp and removes buildup.",
  benefits: ["Deep cleanse", "Removes buildup", "Refreshes scalp"],
  paypalLink: "https://www.paypal.com/",
},

{
  id: 201,
  name: "Lavender Soap 3-Pack",
  price: 45,
  category: "Bundles",
  tag: "Relax",
  image: "/Images/lavender-3-pack.png",
  description: "A calming lavender bundle designed for relaxation and gentle skincare.",
  benefits: ["Relaxing scent", "Gentle cleanse", "Perfect gift set"],
  paypalLink: "https://www.paypal.com/",
},

{
  id: 202,
  name: "Tallow Bomb Cream",
  price: 30,
  category: "Skin Care",
  tag: "Repair",
  image: "/Images/tallow-bomb.png",
  description: "Rich tallow-based cream that deeply nourishes and restores dry skin.",
  benefits: ["Deep hydration", "Skin repair", "Long-lasting moisture"],
  paypalLink: "https://www.paypal.com/",
},

{
  id: 203,
  name: "Charcoal Detox Set",
  price: 10,
  category: "Bundles",
  tag: "Detox",
  image: "/Images/charcoal-set.png",
  description: "Charcoal soap bundle made to cleanse, purify, and refresh skin.",
  benefits: ["Detoxifies skin", "Removes impurities", "Great for acne-prone skin"],
  paypalLink: "https://www.paypal.com/",
},
  {
  id: 103,
  name: "Turmeric Brightening Bundle",
  price: 12,
  category: "Bundles",
  tag: "Brightening",
  image: "/Images/tumeric-soap.png",

  description:
    "Turmeric Soap bundle designed to brighten, smooth, and even skin tone.",

  benefits: [
    "Reduces inflammation",
    "Gently exfoliates skin",
    "Improves skin tone",
    "Brightens dull skin"
  ],

  paypalLink: "https://www.paypal.com/"
},
    {
  id: 104,
  name: "Lavender Lemon Bundle",
  price: 12,
  description:
    "Lavender Lemon soap bundle crafted to relax, refresh, and nourish your skin.",
  image: "/Images/lavender-lemon-bundle.png",
  bullets: [
    "Relaxing aromatherapy",
    "Hydrates and nourishes skin",
    "Soothes skin and mind",
    "Fresh citrus + lavender scent",
  ],
  paypalLink: "https://www.paypal.com/",
},
 
  
  
 
];

const bundles = [
  {
   
    id: 101,
    name: "Glow Trio",
    price: 30,
    description: "10-Carrot Facial Soap + Mango Soap + Sulochna Soap",
    image: "/Images/glow-trio.jpeg",
    bullets: [
      "Brightens and refreshes skin",
      "Handmade everyday facial and body care",
      "Great starter gift set",
    ],
    paypalLink: "https://www.paypal.com/",
  },
  {
    id: 102,
    name: "Soothing Skin Bundle",
    price: 36,
    description:
      "Winter Green + Coffee Fusion + Charcoal + Mango soaps selected for a soothing cleansing routine.",
    image: "/Images/soothing-skin-bundle.png",
    bullets: [
      "Helps soothe skin irritation",
      "Detoxifies and purifies pores",
      "Refreshes and balances skin",
      "Perfect for a natural daily skincare routine",
    ],
    paypalLink: "https://www.paypal.com/",
   },
  {
    id: 105,
    name: "Skin Relief Bundle",
    price: 30,
    description:
      "Winter Green + Coffee Fusion + Charcoal soaps selected for a soothing cleansing routine.",
    image: "/Images/skin-relief-bundle.png",
    bullets: [
      "Helps soothe skin irritation",
      "Detoxifies and purifies pores",
      "Refreshes and balances skin",
      "Perfect for a natural daily skincare routine",
    ],
    paypalLink: "https://www.paypal.com/",
  },
];

const reviews = [
  {
    name: "Mathieu Bouchard",
    quote:
      "The presentation feels premium and the bundles make it easy to choose.",
  },
  {
    name: "Sophie Gagnon",
    quote:
      " J'apprécie la clarté et la simplicité du site, notamment sur mobile."
  },
  {
    name: "Chantal Menard ",
    quote:
      "The products feel handcrafted and the bundle ideas make great gifts.",
  },
];

export default function OshunyLuxuryHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
 const [selectedProduct, setSelectedProduct] = useState(null);
const [orderProduct, setOrderProduct] = useState(null);
const [orderSubmitted, setOrderSubmitted] = useState(false);
const [orderLoading, setOrderLoading] = useState(false);

  const categories = useMemo(
    () => ["All", "Hair", "Face", "Soap Bars", "Soothing Care"],
    []
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);
const handleOrderSubmit = async (e) => {
  e.preventDefault();
  setOrderLoading(true);

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xdaygpar", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setOrderSubmitted(true);
      form.reset();
    } else {
      alert("There was a problem sending your order. Please try again.");
    }
  } catch (error) {
    alert("There was a problem sending your order. Please try again.");
  }

  setOrderLoading(false);
};
  return (
    <div className="min-h-screen bg-[#f7f1ea] text-[#1f1b18]">
      <header className="sticky top-0 z-50 border-b border-[#decfc3] bg-[#f7f1ea]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div>
            <div className="text-3xl font-semibold tracking-wide">
              Oshuny Beauty
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-[#7b6b5d]">
              Organic skincare • handmade soaps • beauty rituals
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm hover:opacity-70">
              Home
            </a>
            <a href="#shop" className="text-sm hover:opacity-70">
              Shop
            </a>
            <a href="#bundles" className="text-sm hover:opacity-70">
              Bundles
            </a>
            <a href="#reviews" className="text-sm hover:opacity-70">
              Reviews
            </a>
            <a href="#contact" className="text-sm hover:opacity-70">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button className="rounded-full border border-[#cdbba8] p-2">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-[#cdbba8] p-2"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-[#d9cfc3] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#shop" onClick={() => setMenuOpen(false)}>
                Shop
              </a>
              <a href="#bundles" onClick={() => setMenuOpen(false)}>
                Bundles
              </a>
              <a href="#reviews" onClick={() => setMenuOpen(false)}>
                Reviews
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,15,15,.58), rgba(15,15,15,.28)), url(/Images/soothing-skin-bundle.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-start px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
          <div className="max-w-2xl pt-4 md:pt-8 text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Handmade beauty with a luxury feel
            </div>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Naturally Restore
              <span className="block text-[#f2d8c7]">& Brighten</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
              A turmeric-based skincare favorite crafted to help reduce inflammation,
             gently exfoliate, and support a brighter, more even-looking complexion.
            </p>

           <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="#shop"
    className="rounded-full bg-[#ab2f52] px-7 py-3 text-base font-semibold text-white"
  >
    Shop Products Soap
  </a>
  <a
    href="#bundles"
    className="rounded-full border border-white/45 px-7 py-3 text-base font-semibold text-white"
  >
    View Bundles
  </a>
</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-[#dbcfc2] bg-white/70 p-6 shadow-sm">
            <Leaf className="mb-4 h-9 w-9 text-[#315941]" />
            <h3 className="text-xl font-semibold">Handmade quality</h3>
            <p className="mt-2 text-sm leading-7 text-[#5b524c]">
              Oshuny products are presented with a cleaner, more premium natural
              beauty look.
            </p>
          </div>
          <div className="rounded-3xl border border-[#dbcfc2] bg-white/70 p-6 shadow-sm">
            <Droplets className="mb-4 h-9 w-9 text-[#315941]" />
            <h3 className="text-xl font-semibold">Real product pricing</h3>
            <p className="mt-2 text-sm leading-7 text-[#5b524c]">
              The prices are clear and easy for customers to understand.
            </p>
          </div>
          <div className="rounded-3xl border border-[#dbcfc2] bg-white/70 p-6 shadow-sm">
            <ShieldCheck className="mb-4 h-9 w-9 text-[#315941]" />
            <h3 className="text-xl font-semibold">Bundle-friendly</h3>
            <p className="mt-2 text-sm leading-7 text-[#5b524c]">
              Curated sets help customers buy faster and make the site feel more
              professional.
            </p>
          </div>
        </div>
      </section>

      <section id="bundles" className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="rounded-[36px] border border-[#dbcfc2] bg-[#fffaf6] p-6 md:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8d7868]">
              Curated bundles
            </p>
            <h2 className="mt-2 text-4xl font-semibold">
              Shop sets that make sense
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className="rounded-[24px] border border-[#e5d7cc] bg-white p-6 shadow-sm"
              >
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="mb-4 aspect-[4/3] w-full rounded-[18px] object-cover"
                />
                <h3 className="text-2xl font-semibold">🌿 {bundle.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5b524c]">
                  {bundle.description}
                </p>

                <ul className="mt-3 space-y-1 text-sm text-[#5b524c]">
                  {bundle.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>

                <div className="mt-5 text-2xl font-semibold">
                  C${bundle.price.toFixed(2)}
                </div>
              <button
  onClick={() => {
    setOrderProduct(bundle);
    setOrderSubmitted(false);
  }}
  className="mt-5 inline-block rounded-full bg-[#ab2f52] px-5 py-3 text-sm font-semibold text-white"
>
  Order Bundle
</button>


              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8d7868]">
              Shop by category
            </p>
            <h2 className="mt-2 text-4xl font-semibold md:text-5xl">Products</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-[#143d28] text-white"
                    : "border border-[#cab7a7] bg-white text-[#3e372f]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[28px] border border-[#dacabd] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/4] overflow-hidden bg-[#efe7de]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#143d28] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {product.tag}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[#8d7868]">
                  {product.category}
                </div>
                <h3 className="min-h-[56px] text-lg font-semibold leading-6">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-1 text-[#c28a2f]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs text-[#6c6259]">
                    Oshuny favorite
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#5b524c]">
                  {product.description}
                </p>

               <div className="mt-5 flex items-center justify-between gap-3">
  <div className="text-2xl font-semibold">
    C${product.price.toFixed(2)}
  </div>

  <div className="flex gap-2">
    <button
      onClick={() => setSelectedProduct(product)}
      className="rounded-full border border-[#1d241d] px-4 py-2 text-sm font-semibold transition hover:bg-[#143d28] hover:text-white"
    >
      View
    </button>

    <button
      onClick={() => {
        setOrderProduct(product);
        setOrderSubmitted(false);
      }}
      className="rounded-full bg-[#ab2f52] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
    >
      Order
    </button>
  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="rounded-[36px] border border-[#dbcfc2] bg-[#fffaf6] p-6 md:p-10">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8d7868]">
              Customer feel
            </p>
            <h2 className="mt-2 text-4xl font-semibold">Why people love it</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[24px] border border-[#e5d7cc] bg-white p-6 shadow-sm"
              >
                <Quote className="h-8 w-8 text-[#ab2f52]" />
                <p className="mt-4 text-base leading-8 text-[#4f4740]">
                  “{review.quote}”
                </p>
                <div className="mt-5 flex items-center gap-1 text-[#c28a2f]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-4 font-semibold">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 pt-8 md:px-8">
  <div className="grid gap-8 rounded-[36px] border border-[#dbcfc2] bg-white p-8 shadow-sm md:grid-cols-2 md:p-10">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-[#8d7868]">
        Contact
      </p>
      <h2 className="mt-2 text-4xl font-semibold">
        Let customers reach Oshuny easily
      </h2>
      <p className="mt-5 text-base leading-8 text-[#5b524c]">
        Add the real email, Instagram, WhatsApp, and local pickup details
        here.
      </p>
    </div>

    <div className="space-y-4 rounded-[28px] bg-[#f8f1ea] p-6">
      <div>
        <div className="text-sm uppercase tracking-widest text-[#8d7868]">
          Email
        </div>
        <div className="mt-1 text-lg font-semibold">
          oshunybeauty@gmail.com
        </div>
      </div>
      <div>
        <div className="text-sm uppercase tracking-widest text-[#8d7868]">
          Instagram
        </div>
        <div className="mt-1 text-lg font-semibold">@oshunycanadainc</div>
      </div>
      <div>
        <div className="text-sm uppercase tracking-widest text-[#8d7868]">
          Pickup
        </div>
        <div className="mt-1 text-lg font-semibold">Montreal, Quebec</div>
      </div>
    </div>
  </div>
</section>

      <footer className="border-t border-[#d9cfc3] px-4 py-8 text-center text-sm text-[#6d645d] md:px-8">
        © {new Date().getFullYear()} Oshuny Beauty — handmade skincare, soaps,
        and beauty rituals.
      </footer>

      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="grid max-w-4xl overflow-hidden rounded-[32px] bg-white shadow-2xl md:grid-cols-2">
            <div className="bg-[#efe7de]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#8d7868]">
                    Oshuny product
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold leading-tight">
                    {selectedProduct.name}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-full border p-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 text-3xl font-semibold">
                C${selectedProduct.price.toFixed(2)}
              </div>

              <p className="mt-4 text-base leading-8 text-[#5b524c]">
                {selectedProduct.description}
              </p>

              <div className="mt-6">
                <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#8d7868]">
                  Benefits
                </div>
                <ul className="space-y-2 text-sm leading-7 text-[#5b524c]">
                  {selectedProduct.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <Heart className="mt-1 h-4 w-4 text-[#ab2f52]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-[24px] bg-[#f8f1ea] p-5">
                <p className="font-semibold">Ingredients</p>
                <p className="mt-2 text-sm leading-7 text-[#5b524c]">
                  {selectedProduct.ingredients}
                </p>
              </div>

            <button
  onClick={() => {
    setOrderProduct(selectedProduct);
    setOrderSubmitted(false);
    setSelectedProduct(null);
  }}
  className="mt-6 inline-block rounded-full bg-[#143d28] px-6 py-3 font-semibold text-white"
>
  Order with Shipping
</button>
            </div>
          </div>
        </div>
           )}

      {orderProduct && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-2xl rounded-[32px] bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#8d7868]">
                  Order request
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-tight">
                  {orderProduct.name}
                </h3>
                <p className="mt-2 text-sm text-[#5b524c]">
                  Fill out your shipping details, submit your order, then complete payment with PayPal.
                </p>
              </div>

              <button
                onClick={() => {
                  setOrderProduct(null);
                  setOrderSubmitted(false);
                }}
                className="rounded-full border p-2"
                type="button"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {!orderSubmitted ? (
              <form onSubmit={handleOrderSubmit} className="grid gap-4 md:grid-cols-2">
                <input type="hidden" name="product" value={orderProduct.name} />
                <input type="hidden" name="price" value={`C$${orderProduct.price.toFixed(2)}`} />

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-semibold">Product</label>
                  <input
                    type="text"
                    value={orderProduct.name}
                    readOnly
                    className="w-full rounded-xl border border-[#d8ccc1] bg-[#f8f1ea] px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    required
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-semibold">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    required
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">Province / State</label>
                  <input
                    type="text"
                    name="province"
                    required
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">Postal / ZIP Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold">Country</label>
                  <input
                    type="text"
                    name="country"
                    required
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-semibold">Notes</label>
                  <textarea
                    name="notes"
                    rows="4"
                    className="w-full rounded-xl border border-[#d8ccc1] px-4 py-3 outline-none"
                    placeholder="Any delivery notes or special request"
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={orderLoading}
                    className="rounded-full bg-[#143d28] px-6 py-3 font-semibold text-white disabled:opacity-60"
                  >
                    {orderLoading ? "Sending..." : "Submit Order"}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setOrderProduct(null);
                      setOrderSubmitted(false);
                    }}
                    className="rounded-full border border-[#1d241d] px-6 py-3 font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="rounded-[24px] bg-[#f8f1ea] p-6">
                <h4 className="text-2xl font-semibold">Order submitted successfully</h4>
                <p className="mt-3 text-base leading-7 text-[#5b524c]">
                  Thank you. Your shipping details were sent successfully. Please complete your payment using PayPal below. Once payment is received, your order will be prepared for shipping.
                </p>

                <div className="mt-5 rounded-[20px] border border-[#e3d6cb] bg-white p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#8d7868]">
                    Product
                  </p>
                  <p className="mt-1 text-lg font-semibold">{orderProduct.name}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#8d7868]">
                    Price
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    C${orderProduct.price.toFixed(2)}
                  </p>
                </div>

             <div className="mt-6 space-y-5">

  <p className="text-sm text-[#5b524c]">
    Choose your payment method below to complete your order:
  </p>

  {/* 🔴 PAYPAL OPTION */}
  <div className="rounded-2xl border p-4">
    <p className="font-semibold mb-2">Pay with PayPal</p>

    <a
      href="https://www.paypal.com/paypalme/oshunybeauty"
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-full bg-[#ab2f52] px-6 py-3 font-semibold text-white"
    >
      Pay with PayPal
    </a>

    <p className="mt-2 text-xs text-[#8d7868]">
      You will be redirected to PayPal to complete your payment.
    </p>
  </div>

  {/* 🟢 E-TRANSFER OPTION */}
  <div className="rounded-2xl border p-4">
    <p className="font-semibold mb-2">Pay by E-Transfer</p>

    <p className="text-lg font-semibold text-[#143d28]">
      oshunybeauty@gmail.com
    </p>

    <p className="mt-2 text-xs text-[#8d7868]">
      Send your e-transfer and include your name + product in the message.
    </p>
  </div>

</div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setOrderProduct(null);
                      setOrderSubmitted(false);
                    }}
                    className="rounded-full border border-[#1d241d] px-6 py-3 font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}