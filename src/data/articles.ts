import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "la-belleza-de-lo-esencial",
    title: {
      en: "The beauty of the essential",
      es: "La belleza de lo esencial",
    },
    excerpt: {
      en: "Why fewer, better objects make a calmer home — and what we leave out when we design.",
      es: "Por qué menos objetos, pero mejores, hacen un hogar más sereno — y qué dejamos fuera al diseñar.",
    },
    body: {
      en: [
        "A room does not become calm by being empty. It becomes calm when every object in it earns its place. That is the difference between austerity and intention — and it is the difference we chase in every piece we make.",
        "We design by subtraction. Before we add a curve or a joint, we ask what the piece is for and who will live around it. Most of the time the answer removes more than it keeps: one shelf instead of three, a solid leg instead of a flourish, a shade that diffuses rather than decorates.",
        "The result is furniture that disappears into a room and, in disappearing, makes the room feel larger, quieter and more yours.",
      ],
      es: [
        "Una habitación no se vuelve serena por estar vacía. Se vuelve serena cuando cada objeto que hay en ella se ha ganado su sitio. Esa es la diferencia entre la austeridad y la intención — y es la diferencia que perseguimos en cada pieza que hacemos.",
        "Diseñamos por sustracción. Antes de añadir una curva o una unión, nos preguntamos para qué sirve la pieza y quién vivirá a su alrededor. Casi siempre la respuesta quita más de lo que conserva: una balda en lugar de tres, una pata maciza en lugar de un adorno, una pantalla que difunde en lugar de decorar.",
        "El resultado es un mueble que desaparece en la habitación y, al desaparecer, hace que la estancia se sienta más amplia, más tranquila y más tuya.",
      ],
    },
    date: "2026-10-08",
    tag: { en: "Inspiration", es: "Inspiración" },
    image: "/images/journal-esencial.svg",
    author: { en: "Elena Ríos", es: "Elena Ríos" },
  },
  {
    slug: "materiales-con-historia",
    title: {
      en: "Materials with a story",
      es: "Materiales con historia",
    },
    excerpt: {
      en: "Oak, linen and brass: why we choose materials that age, mark and improve with use.",
      es: "Roble, lino y latón: por qué elegimos materiales que envejecen, se marcan y mejoran con el uso.",
    },
    body: {
      en: [
        "A varnish hides time. A solid wood surface records it. We choose the second, because a table that shows its years has more to say than one that pretends to be new forever.",
        "Oak darkens gently in sunlight and takes the shape of daily use. Linen softens with every wash. Brass dulls, then gains a patina that no factory can reproduce. These are not flaws to manage — they are the material keeping its promise.",
        "When we source, we ask for the same honesty from our workshops: timber that is traced, upholstery that breathes and finishes that protect without masking. A good material does not need to be hidden.",
      ],
      es: [
        "Un barniz oculta el tiempo. Una superficie de madera maciza lo registra. Elegimos lo segundo, porque una mesa que muestra sus años tiene más que contar que una que finge ser nueva para siempre.",
        "El roble se oscurece suavemente con la luz y adopta la forma del uso diario. El lino se ablanda con cada lavado. El latón se apaga y gana una pátina que ninguna fábrica puede reproducir. No son defectos que gestionar: es el material cumpliendo su promesa.",
        "Al elegir proveedores pedimos la misma honestidad a nuestros talleres: madera con trazabilidad, tapizados que respiran y acabados que protegen sin enmascarar. Un buen material no necesita esconderse.",
      ],
    },
    date: "2026-09-21",
    tag: { en: "Craft", es: "Oficio" },
    image: "/images/journal-materiales.svg",
    author: { en: "Javier Norte", es: "Javier Norte" },
  },
  {
    slug: "crear-un-hogar-propio",
    title: {
      en: "Making a home of your own",
      es: "Crear un hogar propio",
    },
    excerpt: {
      en: "A home is not decorated — it is gathered. Small ideas for filling a space with things that mean something.",
      es: "Un hogar no se decora: se reúne. Pequeñas ideas para llenar un espacio de cosas que significan algo.",
    },
    body: {
      en: [
        "We collect rooms the way we collect memories: slowly, and out of order. The chair from a first flat, the lamp bought after a long winter, the table where friends have stayed too late too many times.",
        "Designing a home is mostly a matter of patience. Start with one object you love and build outward. Let the room be unfinished for a while — an empty corner is not a mistake, it is a place where something good can still arrive.",
        "Buy fewer things, choose them slowly, and keep the ones that gather stories. The rooms we remember are never the ones that looked like a catalogue.",
      ],
      es: [
        "Reunimos habitaciones igual que reunimos recuerdos: despacio y en desorden. La silla del primer piso, la lámpara comprada después de un invierno largo, la mesa donde los amigos se han quedado hasta tarde demasiadas veces.",
        "Diseñar un hogar es, sobre todo, cuestión de paciencia. Empieza por un objeto que ames y construye hacia fuera. Deja que la habitación esté inacabada un tiempo — un rincón vacío no es un error, es un lugar donde algo bueno todavía puede llegar.",
        "Compra menos cosas, elígelas despacio y quédate con las que acumulan historias. Las habitaciones que recordamos nunca son las que parecían un catálogo.",
      ],
    },
    date: "2026-08-14",
    tag: { en: "Living", es: "Habitar" },
    image: "/images/journal-hogar.svg",
    author: { en: "Lucía Marín", es: "Lucía Marín" },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
