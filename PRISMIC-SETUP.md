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

## Cargar contenido (automático)

Hay un script que migra TODO el contenido de los JSON a Prismic automáticamente.

### Paso 1: Generar un token de escritura

1. Entrá a **https://broker-ifs.prismic.io/settings/api/**
2. En **Repository API** → **Permanent access tokens**
3. Click en **"Add a token"** → poné nombre "Migration" → **Access: Write**
4. Copiá el token generado

### Paso 2: Correr el script

```bash
PRISMIC_WRITE_TOKEN=tu_token_aqui npm run migrate:prismic
```

Esto sube automáticamente:
- **Homepage** (es + en) con todos los slices (Hero, FeatureCards, Stepper, etc.)
- **2 artículos de blog** (es + en) con todo el contenido
- **4 páginas de servicio** (es + en)
- **Navegación** (es + en) con menú, footer y soluciones

### Paso 3: Publicar en Prismic

Después de correr el script, entrá a `broker-ifs.prismic.io` y **publicá** los documentos (se crean como draft).

---

## Cómo funciona la conexión Prismic ↔ Web

Las páginas ya están conectadas a Prismic con **fallback automático**:

1. Cada página fetchea su documento de Prismic
2. El contenido de Prismic se convierte al mismo formato que los JSON de traducciones
3. Se hace un deep merge: **Prismic gana** donde hay contenido, **JSON gana** donde no

Esto significa:
- Si editás un texto en Prismic → se ve en la web
- Si no cargaste algo en Prismic → se usa el JSON actual
- **Nada se rompe** aunque Prismic esté vacío

Los archivos JSON (`messages/es.json`, `messages/en.json`) quedan como **fallback** permanente para strings de UI (labels, botones, validaciones).

---

## Comandos útiles

```bash
npm run dev              # Levantar Next.js en desarrollo
npm run slicemachine     # Abrir Slice Machine (localhost:9999)
npm run migrate:prismic  # Migrar contenido JSON → Prismic (necesita PRISMIC_WRITE_TOKEN)
npm run build            # Build de producción
```

---

## Contacto

Cualquier duda sobre la estructura de Prismic, contactar a Mari.
