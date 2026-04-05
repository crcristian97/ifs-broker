# Migración a Prismic CMS — Guía de Setup

## ¿Qué es esto?

Esta rama (`feat/prismic-migration`) tiene todo el código necesario para conectar el sitio de IFS Broker con **Prismic CMS**, de modo que el cliente pueda editar textos, imágenes, secciones y bloques sin tocar código.

---

## ¿Qué se creó?

| Archivo / Carpeta | Qué hace |
|---|---|
| `prismicio.ts` | Cliente Prismic con mapeo de locales (es↔es-ar, en↔en-us) |
| `lib/prismic-helpers.ts` | Funciones para traer datos de Prismic (homepage, services, blog, nav) |
| `customtypes/` | 4 Custom Types: Homepage, Service Page, Blog Post, Navigation |
| `slices/` | 11 Slices editables: Hero, FeatureCards, Stepper, PlanningSection, GlobeSection, LogoCloud, BlogSection, Timeline, BannerSection, RichTextSection, FormSection |
| `app/api/preview/` | API route para preview en vivo desde Prismic |
| `app/api/exit-preview/` | API route para salir del preview |
| `app/slice-simulator/` | Simulador local de slices |
| `slicemachine.config.json` | Config de Slice Machine apuntando al repo `broker-ifs` |

---

## Pasos para activar Prismic

### 1. Cloná la rama e instalá dependencias

```bash
git fetch origin
git checkout feat/prismic-migration
npm install
```

### 2. Abrí Slice Machine

```bash
npm run slicemachine
```

Se abre en **http://localhost:9999**. Te va a pedir que te logueés con tu cuenta de Prismic.

### 3. Configurá los locales en Prismic

Entrá al dashboard de Prismic → **broker-ifs** → **Settings → Translations & Locales**:

1. El locale por defecto debería ser **Spanish - Argentina (es-ar)**
2. Agregá **English - United States (en-us)** como segundo locale

### 4. Pusheá los Custom Types a Prismic

Desde Slice Machine (localhost:9999):

1. Andá a la sección **"Page types"** → vas a ver Homepage, Service Page, Blog Post
2. Andá a la sección **"Custom types"** → vas a ver Navigation
3. Hacé click en **"Push"** o **"Review changes"** arriba a la derecha
4. Confirmá el push → esto sube toda la estructura a Prismic

### 5. Verificá en el dashboard de Prismic

Entrá a **https://broker-ifs.prismic.io** → deberías ver:

- En **Page types**: Homepage, Service Page (Página de Servicio), Blog Post (Artículo de Blog)
- En **Custom types**: Navigation (Navegación)
- Al crear un documento, vas a ver las **Slice Zones** con todos los bloques disponibles

---

## Estructura de contenido

### Custom Types

| Type | ¿Repetible? | Para qué |
|---|---|---|
| **Homepage** | No (single) | Página principal — contiene slices para cada sección |
| **Service Page** | Sí | Páginas de servicio: seguros-de-vida, fondos-de-retiro, salud-internacional, servicios-complementarios |
| **Blog Post** | Sí | Artículos del blog — título, cuerpo rich text, imagen, categoría, fecha |
| **Navigation** | No (single) | Menú de navegación, soluciones dropdown, footer |

### Slices (bloques editables)

| Slice | Qué controla en la web |
|---|---|
| **Hero** | Sección hero con título, subtítulo, video de fondo, botones CTA |
| **FeatureCards** | Sección "¿Qué hacemos?" con tarjetas |
| **Stepper** | Sección "Cómo trabajamos" con los 4 pasos |
| **PlanningSection** | Sección de planificación con texto destacado e imagen |
| **GlobeSection** | Sección del globo "Experiencia que genera confianza" |
| **LogoCloud** | Carrusel de logos de compañías |
| **BlogSection** | Listado de artículos del blog |
| **Timeline** | Tabs de timeline (seguros de vida, retiro, salud) |
| **BannerSection** | Banners de servicio con CTA |
| **RichTextSection** | Bloque genérico de texto enriquecido |
| **FormSection** | Formularios (calculadora de retiro, cuestionario de inversión, HubSpot) |

---

## Cómo cargar contenido de prueba

### Crear la Homepage

1. En Prismic dashboard → **Create document** → **Homepage**
2. Completá SEO Title, SEO Description
3. En la **Slice Zone**, agregá los bloques en este orden:
   - Hero (con título "Planificación financiera internacional...")
   - FeatureCards (¿Qué hacemos?)
   - Stepper (Cómo trabajamos)
   - PlanningSection (planificación)
   - GlobeSection (experiencia)
   - LogoCloud (logos)
   - BlogSection (artículos)
4. **Save** → **Publish**
5. Repetí para el locale **en-us** (botón de idioma arriba)

### Crear un Blog Post

1. **Create document** → **Blog Post**
2. UID: `seguro-patrimonial-salud-internacional`
3. Completá título, subtítulo, categoría, imagen, fecha, contenido
4. **Save** → **Publish**

### Crear un Service Page

1. **Create document** → **Service Page**
2. UID: `seguros-de-vida` (debe coincidir con la ruta actual)
3. Agregá slices: Hero, Timeline, PlanningSection, LogoCloud, BlogSection
4. **Save** → **Publish**

UIDs para las 4 páginas de servicio:
- `seguros-de-vida`
- `fondos-de-retiro`
- `salud-internacional`
- `servicios-complementarios`

---

## Próximos pasos (código)

Una vez que el contenido esté cargado en Prismic, el próximo paso es **conectar los componentes existentes** para que lean de Prismic en vez de los archivos JSON de traducciones.

El archivo `lib/prismic-helpers.ts` ya tiene las funciones listas:

```ts
import { getHomepage, getServicePage, getBlogPost } from "@/lib/prismic-helpers";

// En una página:
const homepage = await getHomepage("es"); // o "en"
```

Los archivos JSON (`messages/es.json`, `messages/en.json`) se mantendrán como **fallback** para strings de UI (labels de formularios, botones, mensajes de error) que no vale la pena manejar desde el CMS.

---

## Comandos útiles

```bash
npm run dev            # Levantar Next.js en desarrollo
npm run slicemachine   # Abrir Slice Machine (localhost:9999)
npm run build          # Build de producción
```

---

## Contacto

Cualquier duda sobre la estructura de Prismic, contactar a Mari.
