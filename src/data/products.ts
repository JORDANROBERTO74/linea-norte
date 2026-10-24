import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "sillon-nordico",
    slug: "sillon-nordico",
    name: "Sillón Nórdico",
    category: "seating",
    price: 24900,
    image: "/images/product-sillon-nordico.svg",
    material: { en: "Solid oak · wool", es: "Roble macizo · lana" },
    featured: true,
    details: {
      en: ["Solid oak frame", "Wool upholstery", "74 × 82 × 88 cm"],
      es: ["Estructura de roble macizo", "Tapizado en lana", "74 × 82 × 88 cm"],
    },
    description: {
      en: "A low, generous armchair with a solid oak frame and a softly padded wool seat. Designed to be lived in, not just looked at.",
      es: "Un sillón bajo y generoso, con estructura de roble macizo y asiento de lana mullida. Pensado para habitarlo, no solo para mirarlo.",
    },
  },
  {
    id: "butaca-eira",
    slug: "butaca-eira",
    name: "Butaca Eira",
    category: "seating",
    price: 31900,
    image: "/images/product-butaca-eira.svg",
    material: { en: "Beech · washed linen", es: "Haya · lino lavado" },
    featured: true,
    details: {
      en: ["Beech frame", "Washed linen", "70 × 78 × 84 cm"],
      es: ["Estructura de haya", "Lino lavado", "70 × 78 × 84 cm"],
    },
    description: {
      en: "A curved lounge chair with a light beech frame and breathable linen. Its low profile invites you to stay a while.",
      es: "Una butaca de formas curvas con estructura ligera de haya y lino transpirable. Su perfil bajo invita a quedarse un rato.",
    },
  },
  {
    id: "mesa-lumen",
    slug: "mesa-lumen",
    name: "Mesa Lumen",
    category: "tables",
    price: 38900,
    image: "/images/product-mesa-lumen.svg",
    material: { en: "Oak · steel", es: "Roble · acero" },
    featured: true,
    details: {
      en: ["Solid oak top", "Powder-coated steel legs", "160 × 90 × 75 cm"],
      es: ["Sobre de roble macizo", "Patas de acero lacado", "160 × 90 × 75 cm"],
    },
    description: {
      en: "A dining table that balances a warm oak top with slender steel legs. Seats six comfortably and ages beautifully.",
      es: "Una mesa de comedor que equilibra un cálido sobre de roble con patas esbeltas de acero. Para seis personas, y mejora con los años.",
    },
  },
  {
    id: "mesa-alba",
    slug: "mesa-alba",
    name: "Mesa de centro Alba",
    category: "tables",
    price: 27900,
    image: "/images/product-mesa-alba.svg",
    material: { en: "Walnut · glass", es: "Nogal · vidrio" },
    featured: false,
    details: {
      en: ["Walnut veneer", "Tempered glass shelf", "110 × 60 × 42 cm"],
      es: ["Chapa de nogal", "Bandeja de vidrio templado", "110 × 60 × 42 cm"],
    },
    description: {
      en: "A low coffee table with a walnut top and a tempered glass shelf for books, trays and the things that gather in a living room.",
      es: "Una mesa de centro baja con sobre de nogal y bandeja de vidrio templado para libros, bandejas y todo lo que se acumula en un salón.",
    },
  },
  {
    id: "lampara-arco",
    slug: "lampara-arco",
    name: "Lámpara Arco",
    category: "lighting",
    price: 12900,
    image: "/images/product-lampara-arco.svg",
    material: { en: "Brass · linen", es: "Latón · lino" },
    featured: true,
    details: {
      en: ["Brass arm", "Linen shade", "H 160 cm"],
      es: ["Brazo de latón", "Pantalla de lino", "Alto 160 cm"],
    },
    description: {
      en: "A floor lamp with an arched brass arm and a soft linen shade. Its warm glow anchors a corner without shouting.",
      es: "Una lámpara de pie con brazo arqueado de latón y pantalla de lino. Su luz cálida asienta un rincón sin alzar la voz.",
    },
  },
  {
    id: "lampara-halo",
    slug: "lampara-halo",
    name: "Lámpara Halo",
    category: "lighting",
    price: 8900,
    image: "/images/product-lampara-halo.svg",
    material: { en: "Ceramic · oak", es: "Cerámica · roble" },
    featured: false,
    details: {
      en: ["Ceramic base", "Oak stem", "H 42 cm"],
      es: ["Base de cerámica", "Pie de roble", "Alto 42 cm"],
    },
    description: {
      en: "A table lamp with a matte ceramic base and a pale oak stem. Small, calm and just right on a bedside table.",
      es: "Una lámpara de sobremesa con base de cerámica mate y pie de roble claro. Pequeña, serena y perfecta en una mesilla.",
    },
  },
  {
    id: "aparador-norte",
    slug: "aparador-norte",
    name: "Aparador Norte",
    category: "storage",
    price: 54900,
    image: "/images/product-aparador-norte.svg",
    material: { en: "Oak · rattan doors", es: "Roble · puertas de rejilla" },
    featured: false,
    details: {
      en: ["Solid oak", "Rattan doors", "180 × 45 × 80 cm"],
      es: ["Roble macizo", "Puertas de rejilla", "180 × 45 × 80 cm"],
    },
    description: {
      en: "A sideboard with solid oak framing and hand-woven rattan doors. Four compartments, quiet lines, honest storage.",
      es: "Un aparador de armazón de roble macizo y puertas de rejilla tejida a mano. Cuatro huecos, líneas serenas, almacenaje honesto.",
    },
  },
  {
    id: "estanteria-roble",
    slug: "estanteria-roble",
    name: "Estantería Roble",
    category: "storage",
    price: 42900,
    image: "/images/product-estanteria-roble.svg",
    material: { en: "Oak · black steel", es: "Roble · acero negro" },
    featured: false,
    details: {
      en: ["Oak shelves", "Black steel frame", "90 × 35 × 190 cm"],
      es: ["Balda de roble", "Estructura de acero negro", "90 × 35 × 190 cm"],
    },
    description: {
      en: "An open bookshelf in oak and black steel. Five shelves for books, objects and the slow accumulation of a life well lived.",
      es: "Una estantería abierta de roble y acero negro. Cinco baldas para libros, objetos y la lenta acumulación de una vida bien vivida.",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = products.filter(
    (candidate) => candidate.id !== product.id && candidate.category === product.category,
  );
  const rest = products.filter(
    (candidate) => candidate.id !== product.id && candidate.category !== product.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
