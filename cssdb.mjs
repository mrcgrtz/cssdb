export default [
  {
    "id": "all-property",
    "title": "`all` Property",
    "description": "A property for defining the reset of all properties of an element",
    "specification": "https://www.w3.org/TR/css-cascade-3/#all-shorthand",
    "stage": 4,
    "browser_support": {
      "edge": "79",
      "firefox": "27",
      "chrome": "37",
      "safari": "10",
      "opera": "24",
      "ios_saf": "9.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "4",
      "and_qq": "10.4",
      "baidu": "7.12",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/all"
    },
    "example": "a {\n  all: initial;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/maximkoretskiy/postcss-initial"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "any-link-pseudo-class",
    "title": "`:any-link` Hyperlink Pseudo-Class",
    "description": "A pseudo-class for matching anchor elements independent of whether they have been visited",
    "specification": "https://www.w3.org/TR/selectors-4/#any-link-pseudo",
    "stage": 2,
    "browser_support": {
      "chrome": "1",
      "and_chr": "18",
      "edge": "79",
      "firefox": "1",
      "and_ff": "4",
      "opera": "15",
      "op_mob": "14",
      "safari": "3",
      "ios_saf": "1",
      "samsung": "1.0",
      "android": "65"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link"
    },
    "example": "nav :any-link > span {\n  background-color: yellow;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-pseudo-class-any-link"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "blank-pseudo-class",
    "title": "`:blank` Empty-Value Pseudo-Class",
    "description": "A pseudo-class for matching form elements when they are empty",
    "specification": "https://www.w3.org/TR/selectors-4/#blank",
    "stage": 2,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:blank"
    },
    "example": "input:blank {\n  background-color: yellow;\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-blank-pseudo"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-blank-pseudo"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "break-properties",
    "title": "Break Properties",
    "description": "Properties for defining the break behavior between and within boxes",
    "specification": "https://www.w3.org/TR/css-break-3/#breaking-controls",
    "stage": 3,
    "browser_support": {
      "ie": "10",
      "edge": "12",
      "safari": "10",
      "opera": "12",
      "ios_saf": "10",
      "op_mini": "all",
      "op_mob": "12",
      "ie_mob": "10",
      "and_uc": "12.12",
      "samsung": "5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after"
    },
    "example": "a {\n  break-inside: avoid;\n  break-before: avoid-column;\n  break-after: always;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/shrpne/postcss-page-break"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "case-insensitive-attributes",
    "title": "Case-Insensitive Attributes",
    "description": "An attribute selector matching attribute values case-insensitively",
    "specification": "https://www.w3.org/TR/selectors-4/#attribute-case",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "47",
      "chrome": "49",
      "safari": "9",
      "opera": "36",
      "ios_saf": "9",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "5",
      "and_qq": "10.4",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
    },
    "example": "[frame=hsides i] {\n  border-style: solid none;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/Semigradsky/postcss-attribute-case-insensitive"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "clamp",
    "title": "`clamp` Function",
    "description": "The clamp() CSS function clamps a value between an upper and lower bound. It enables selecting a middle value within a range of values between a defined minimum and maximum.",
    "specification": "https://www.w3.org/TR/css-values-4/#funcdef-clamp",
    "stage": 2,
    "browser_support": {
      "chrome": "79",
      "and_chr": "79",
      "edge": "79",
      "firefox": "75",
      "and_ff": "79",
      "opera": "66",
      "op_mob": "57",
      "safari": "13.1",
      "ios_saf": "13.4",
      "samsung": "12.0",
      "android": "79"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()"
    },
    "example": "button {\n  font-size: clamp(1rem, 2.5vw, 2rem);\n}",
    "vendors_implementations": 3
  },
  {
    "id": "color-adjust",
    "title": "`color-adjust` Property",
    "description": "The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images",
    "specification": "https://www.w3.org/TR/css-color-4/#color-adjust",
    "stage": 2,
    "browser_support": {
      "firefox": "48",
      "and_ff": "96",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-adjust"
    },
    "example": ".background {\n  background-color:#ccc;\n}\n.background.color-adjust {\n  color-adjust: economy;\n}\n.background.color-adjust-exact {\n  color-adjust: exact;\n}",
    "vendors_implementations": 1
  },
  {
    "id": "color-contrast",
    "title": "`color-contrast()` Function",
    "description": "A function for choosing the color that contrasts the most.",
    "specification": "https://www.w3.org/TR/css-color-5/#colorcontrast",
    "stage": 2,
    "browser_support": {
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast()"
    },
    "example": "p {\n  color: color-contrast(wheat vs tan, sienna, var(--myAccent), #d2691e);\n}",
    "polyfills": [],
    "vendors_implementations": 1
  },
  {
    "id": "color-function",
    "title": "`color()` Function",
    "description": "A function that allows a color to be specified in a particular, specified color space rather than the implicit sRGB color space that most of the other color functions operate in.",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-color",
    "stage": 2,
    "browser_support": {
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color()"
    },
    "example": "p {\n  color: color(display-p3 1 0.5 0);\n  color: color(display-p3 1 0.5 0 / .5);\n}",
    "vendors_implementations": 1
  },
  {
    "id": "color-functional-notation",
    "title": "Color Functional Notation",
    "description": "A space and slash separated notation for specifying colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-rgb",
    "stage": 2,
    "browser_support": {
      "chrome": "65",
      "and_chr": "65",
      "edge": "79",
      "firefox": "52",
      "and_ff": "52",
      "opera": "52",
      "op_mob": "47",
      "safari": "12.1",
      "ios_saf": "12.2",
      "samsung": "9.0",
      "android": "65"
    },
    "example": "em {\n  background-color: hsl(120deg 100% 25%);\n  box-shadow: 0 0 0 10px hwb(120deg 100% 25% / 80%);\n  color: rgb(0 255 0);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-functional-notation"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "color-mix",
    "title": "`color-mix()` Function",
    "description": "A function for mixing colors",
    "specification": "https://drafts.csswg.org/css-color-5/#color-mix",
    "stage": -1,
    "browser_support": {},
    "example": "p {\n  color: color-mix(in lch, purple 50%, plum 50%);\n}",
    "polyfills": [],
    "vendors_implementations": 0
  },
  {
    "id": "color-mod-function",
    "title": "`color-mod()` Function",
    "description": "A function for modifying colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-color-mod",
    "stage": -1,
    "browser_support": {},
    "example": "p {\n  color: color-mod(black alpha(50%));\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-color-mod-function"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "container-queries",
    "title": "Container Queries",
    "description": "New container property and container at rule to make changes depending on the container's size",
    "specification": "https://www.w3.org/TR/css-contain-3/#container-queries",
    "stage": 0,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries"
    },
    "example": ".container {\n  contain: layout inline-size;\n}\n\n@container (min-width: 700px) {\n  .container {\n    /* styles applied when a container is at least 700px */\n  }\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://www.npmjs.com/package/container-query-polyfill"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "custom-media-queries",
    "title": "Custom Media Queries",
    "description": "An at-rule for defining aliases that represent media queries",
    "specification": "https://www.w3.org/TR/mediaqueries-5/#at-ruledef-custom-media",
    "stage": 2,
    "browser_support": {},
    "example": "@custom-media --narrow-window (max-width: 30em);\n\n@media (--narrow-window) {}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-custom-media"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "custom-properties",
    "title": "Custom Properties",
    "description": "A syntax for defining custom values accepted by all CSS properties",
    "specification": "https://www.w3.org/TR/css-variables-1/",
    "stage": 3,
    "browser_support": {
      "edge": "16",
      "firefox": "31",
      "chrome": "49",
      "safari": "10",
      "opera": "36",
      "ios_saf": "10",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "5",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/var"
    },
    "example": "img {\n  --some-length: 32px;\n\n  height: var(--some-length);\n  width: var(--some-length);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-properties"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "custom-property-sets",
    "title": "Custom Property Sets",
    "description": "A syntax for storing properties in named variables, referenceable in other style rules",
    "specification": "https://tabatkins.github.io/specs/css-apply-rule/",
    "stage": -1,
    "browser_support": {},
    "example": "img {\n  --some-length-styles: {\n    height: 32px;\n    width: 32px;\n  };\n\n  @apply --some-length-styles;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/pascalduez/postcss-apply"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "custom-selectors",
    "title": "Custom Selectors",
    "description": "An at-rule for defining aliases that represent selectors",
    "specification": "https://drafts.csswg.org/css-extensions/#custom-selectors",
    "stage": 1,
    "browser_support": {},
    "example": "@custom-selector :--heading h1, h2, h3, h4, h5, h6;\n\narticle :--heading + p {}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-custom-selectors"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "dir-pseudo-class",
    "title": "`:dir` Directionality Pseudo-Class",
    "description": "A pseudo-class for matching elements based on their directionality",
    "specification": "https://www.w3.org/TR/selectors-4/#dir-pseudo",
    "stage": 2,
    "browser_support": {
      "firefox": "49",
      "and_ff": "49"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:dir"
    },
    "example": "blockquote:dir(rtl) {\n  margin-right: 10px;\n}\n\nblockquote:dir(ltr) {\n  margin-left: 10px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-dir-pseudo-class"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "display-two-values",
    "title": "Two values syntax for `display`",
    "description": "Syntax that allows definition of outer and inner displays types for an element",
    "specification": "https://www.w3.org/TR/css-display-3/#the-display-properties",
    "stage": 2,
    "browser_support": {
      "firefox": "70",
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/display/two-value_syntax_of_display"
    },
    "example": ".element {\n  display: inline flow-root;\n  display: inline flex;\n  display: block grid;\n}",
    "vendors_implementations": 2
  },
  {
    "id": "double-position-gradients",
    "title": "Double Position Gradients",
    "description": "A syntax for using two positions in a gradient.",
    "specification": "https://www.w3.org/TR/css-images-4/#color-stop-syntax",
    "stage": 2,
    "browser_support": {
      "chrome": "72",
      "and_chr": "72",
      "edge": "79",
      "firefox": "83",
      "and_ff": "83",
      "opera": "60",
      "op_mob": "51",
      "safari": "12.1",
      "ios_saf": "12.2",
      "samsung": "11.0",
      "android": "72"
    },
    "example": ".pie_chart {\n  background-image: conic-gradient(yellowgreen 40%, gold 0deg 75%, #f06 0deg);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-double-position-gradients"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "environment-variables",
    "title": "Custom Environment Variables",
    "description": "A syntax for using custom values accepted by CSS globally",
    "specification": "https://drafts.csswg.org/css-env-1/",
    "stage": 0,
    "browser_support": {
      "edge": "79",
      "firefox": "65",
      "chrome": "69",
      "safari": "12",
      "opera": "56",
      "ios_saf": "11.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "10.1"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/env"
    },
    "example": "@media (max-width: env(--brand-small)) {\n  body {\n    padding: env(--brand-spacing);\n  }\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-env-function"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "fangsong-font-family",
    "title": "`fangsong` Font Family",
    "description": "A generic font used for Fang Song (仿宋) typefaces in Chinese",
    "specification": "https://www.w3.org/TR/css-fonts-4/#fangsong-def",
    "stage": 2,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#Syntax"
    },
    "example": "body {\n  font-family: fangsong;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-font-family-fangsong"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "focus-visible-pseudo-class",
    "title": "`:focus-visible` Focus-Indicated Pseudo-Class",
    "description": "A pseudo-class for matching focused elements that indicate that focus to a user",
    "specification": "https://www.w3.org/TR/selectors-4/#focus-visible-pseudo",
    "stage": 2,
    "browser_support": {
      "chrome": "67",
      "and_chr": "67",
      "edge": "79",
      "firefox": "85",
      "and_ff": "85",
      "opera": "54",
      "op_mob": "48",
      "samsung": "14.0",
      "android": "86"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"
    },
    "example": ":focus:not(:focus-visible) {\n  outline: 0;\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/WICG/focus-visible"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-focus-visible"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "focus-within-pseudo-class",
    "title": "`:focus-within` Focus Container Pseudo-Class",
    "description": "A pseudo-class for matching elements that are either focused or that have focused descendants",
    "specification": "https://www.w3.org/TR/selectors-4/#focus-within-pseudo",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "52",
      "chrome": "60",
      "safari": "11",
      "opera": "47",
      "ios_saf": "10.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "8.2",
      "and_qq": "10.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"
    },
    "example": "form:focus-within {\n  background: rgba(0, 0, 0, 0.3);\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/jsxtools/focus-within"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-focus-within"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "font-format-keywords",
    "title": "Font `format()` Keywords",
    "description": "A syntax for specifying font format as a keyword in `@font-face` rule’s `format()` function",
    "specification": "https://www.w3.org/TR/css-fonts-4/#font-format-values",
    "stage": 1,
    "browser_support": {
      "safari": "4",
      "ios_saf": "5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
    },
    "example": "@font-face {\n  src: url(file.woff2) format(woff2);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/valtlai/postcss-font-format-keywords"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "font-variant-property",
    "title": "`font-variant` Property",
    "description": "A property for defining the usage of alternate glyphs in a font",
    "specification": "https://www.w3.org/TR/css-fonts-3/#propdef-font-variant",
    "stage": 4,
    "browser_support": {
      "firefox": "34",
      "safari": "10",
      "ios_saf": "9.3",
      "and_ff": "96",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant"
    },
    "example": "h2 {\n  font-variant: small-caps;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-font-variant"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "gap-properties",
    "title": "Gap Properties",
    "description": "Properties for defining gutters within a layout",
    "specification": "https://www.w3.org/TR/css-grid-1/#gutters",
    "stage": 3,
    "browser_support": {
      "chrome": "66",
      "and_chr": "66",
      "edge": "16",
      "firefox": "61",
      "and_ff": "61",
      "opera": "53",
      "op_mob": "47",
      "safari": "12",
      "ios_saf": "12",
      "samsung": "9.0",
      "android": "66"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
    },
    "example": ".grid-1 {\n  gap: 20px;\n}\n\n.grid-2 {\n  column-gap: 40px;\n  row-gap: 20px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-gap-properties"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "gray-function",
    "title": "`gray()` Function",
    "description": "A function for specifying fully desaturated colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-gray",
    "stage": -1,
    "browser_support": {},
    "example": "p {\n  color: gray(50);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-color-gray"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "grid-layout",
    "title": "Grid Layout",
    "description": "A syntax for using a grid concept to lay out content",
    "specification": "https://www.w3.org/TR/css-grid-1/",
    "stage": 3,
    "browser_support": {
      "edge": "16",
      "firefox": "54",
      "chrome": "58",
      "safari": "11",
      "opera": "44",
      "ios_saf": "10.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "6.2",
      "and_qq": "10.4",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid"
    },
    "example": "section {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-gap: 10px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/autoprefixer"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "has-pseudo-class",
    "title": "`:has()` Relational Pseudo-Class",
    "description": "A pseudo-class for matching ancestor and sibling elements",
    "specification": "https://www.w3.org/TR/selectors-4/#has-pseudo",
    "stage": 2,
    "browser_support": {
      "safari": "15.4",
      "ios_saf": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
    },
    "example": "a:has(> img) {\n  display: block;\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo"
      },
      {
        "type": "Experimental Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/experimental/css-has-pseudo"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "hexadecimal-alpha-notation",
    "title": "Hexadecimal Alpha Notation",
    "description": "A 4 & 8 character hex color notation for specifying the opacity level",
    "specification": "https://www.w3.org/TR/css-color-4/#hex-notation",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "49",
      "chrome": "62",
      "safari": "10",
      "opera": "52",
      "ios_saf": "10",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "8.2"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Syntax_2"
    },
    "example": "section {\n  background-color: #f3f3f3f3;\n  color: #0003;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-hex-alpha"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "hwb-function",
    "title": "`hwb()` Function",
    "description": "A function for specifying colors by hue and then a degree of whiteness and blackness to mix into it",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-hwb",
    "stage": 2,
    "browser_support": {
      "firefox": "96",
      "and_ff": "96",
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb()"
    },
    "example": "p {\n  color: hwb(120 44% 50%);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-color-hwb"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "ic-unit",
    "title": "`ic` length unit",
    "description": "Equal to the used advance measure of the \"水\" (CJK water ideograph, U+6C34) glyph found in the font used to render it",
    "specification": "https://www.w3.org/TR/css-values-4/#ic",
    "stage": 2,
    "browser_support": {
      "firefox": "97",
      "and_ff": "97",
      "safari": "15.4",
      "ios_saf": "15.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#dimensions"
    },
    "example": "p {\n  text-indent: 2ic;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-ic-unit"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "image-set-function",
    "title": "`image-set()` Function",
    "description": "A function for specifying image sources based on the user’s resolution",
    "specification": "https://www.w3.org/TR/css-images-4/#image-set-notation",
    "stage": 2,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/image-set"
    },
    "example": "p {\n  background-image: image-set(\n    \"foo.png\" 1x,\n    \"foo-2x.png\" 2x,\n    \"foo-print.png\" 600dpi\n  );\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-image-set-function"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "in-out-of-range-pseudo-class",
    "title": "`:in-range` and `:out-of-range` Pseudo-Classes",
    "description": "A pseudo-class for matching elements that have range limitations",
    "specification": "https://www.w3.org/TR/selectors-4/#range-pseudos",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "50",
      "chrome": "53",
      "safari": "11",
      "opera": "40",
      "ios_saf": "10.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "5",
      "and_qq": "10.4",
      "baidu": "7.12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range"
    },
    "example": "input:in-range {\n  background-color: rgba(0, 255, 0, 0.25);\n}\ninput:out-of-range {\n  background-color: rgba(255, 0, 0, 0.25);\n  border: 2px solid red;\n}",
    "vendors_implementations": 3
  },
  {
    "id": "is-pseudo-class",
    "title": "`:is()` Matches-Any Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#matches-pseudo",
    "stage": 2,
    "browser_support": {
      "edge": "88",
      "firefox": "78",
      "chrome": "88",
      "safari": "14",
      "opera": "75",
      "ios_saf": "14",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
    },
    "example": "p:is(:first-child, .special) {\n  margin-top: 1em;\n}",
    "vendors_implementations": 3
  },
  {
    "id": "lab-function",
    "title": "`lab()` Function",
    "description": "A function for specifying colors expressed in the CIE Lab color space",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-lab",
    "stage": 2,
    "browser_support": {
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab()"
    },
    "example": "body {\n  color: lab(240 50 20);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "lch-function",
    "title": "`lch()` Function",
    "description": "A function for specifying colors expressed in the CIE Lab color space with chroma and hue",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-lch",
    "stage": 2,
    "browser_support": {
      "safari": "15",
      "ios_saf": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch()"
    },
    "example": "body {\n  color: lch(53 105 40);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function"
      }
    ],
    "vendors_implementations": 1
  },
  {
    "id": "logical-properties-and-values",
    "title": "Logical Properties and Values",
    "description": "Flow-relative (left-to-right or right-to-left) properties and values",
    "specification": "https://www.w3.org/TR/css-logical-1/",
    "stage": 2,
    "browser_support": {
      "edge": "89",
      "firefox": "66",
      "chrome": "89",
      "safari": "15",
      "opera": "76",
      "ios_saf": "15",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties"
    },
    "example": "span:first-child {\n  float: inline-start;\n  margin-inline-start: 10px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "matches-pseudo-class",
    "title": "`:matches()` Matches-Any Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#selectordef-matches",
    "stage": -1,
    "browser_support": {
      "edge": "88",
      "firefox": "78",
      "chrome": "88",
      "safari": "14",
      "opera": "75",
      "ios_saf": "14",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
    },
    "example": "p:matches(:first-child, .special) {\n  margin-top: 1em;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-selector-matches"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "media-query-ranges",
    "title": "Media Query Ranges",
    "description": "A syntax for defining media query ranges using ordinary comparison operators",
    "specification": "https://www.w3.org/TR/mediaqueries-4/#range-context",
    "stage": 3,
    "browser_support": {},
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax_improvements_in_Level_4"
    },
    "example": "@media (width < 480px) {}\n\n@media (480px <= width < 768px) {}\n\n@media (width >= 768px) {}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-media-minmax"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "nesting-rules",
    "title": "Nesting Rules",
    "description": "A syntax for nesting relative rules within rules",
    "specification": "https://www.w3.org/TR/css-nesting-1/",
    "stage": 1,
    "browser_support": {},
    "example": "article {\n  & p {\n    color: #333;\n  }\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting"
      }
    ],
    "vendors_implementations": 0
  },
  {
    "id": "not-pseudo-class",
    "title": "`:not()` Negation List Pseudo-Class",
    "description": "A pseudo-class for ignoring elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#negation-pseudo",
    "stage": 2,
    "browser_support": {
      "edge": "88",
      "firefox": "84",
      "chrome": "88",
      "safari": "9",
      "opera": "75",
      "ios_saf": "9",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "15"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:not"
    },
    "example": "p:not(:first-child, .special) {\n  margin-top: 1em;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-selector-not"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "opacity-percentage",
    "title": "Support for percentages for `opacity`",
    "description": "Syntactic sugar to use percentages instead of a float between 0 and 1.",
    "specification": "https://www.w3.org/TR/css-color-4/#transparency",
    "stage": 2,
    "browser_support": {
      "chrome": "78",
      "and_chr": "78",
      "edge": "79",
      "firefox": "70",
      "samsung": "12.0",
      "android": "78"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"
    },
    "example": "img {\n  opacity: 90%;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/mrcgrtz/postcss-opacity-percentage"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "overflow-property",
    "title": "`overflow` Shorthand Property",
    "description": "A property for defining `overflow-x` and `overflow-y`",
    "specification": "https://www.w3.org/TR/css-overflow-3/#propdef-overflow",
    "stage": 2,
    "browser_support": {
      "chrome": "68",
      "and_chr": "68",
      "edge": "79",
      "firefox": "61",
      "and_ff": "61",
      "opera": "55",
      "op_mob": "48",
      "samsung": "10.0",
      "android": "68"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
    },
    "example": "html {\n  overflow: hidden auto;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-overflow-shorthand"
      }
    ],
    "vendors_implementations": 2
  },
  {
    "id": "overflow-wrap-property",
    "title": "`overflow-wrap` Property",
    "description": "A property for defining whether to insert line breaks within words to prevent overflowing",
    "specification": "https://www.w3.org/TR/css-text-3/#overflow-wrap-property",
    "stage": 2,
    "browser_support": {
      "edge": "18",
      "firefox": "49",
      "chrome": "23",
      "safari": "7",
      "opera": "15",
      "ios_saf": "8",
      "android": "97",
      "bb": "10",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "4",
      "and_qq": "10.4",
      "baidu": "7.12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap"
    },
    "example": "p {\n  overflow-wrap: break-word;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/mattdimu/postcss-replace-overflow-wrap"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "overscroll-behavior-property",
    "title": "`overscroll-behavior` Property",
    "description": "Properties for controlling when the scroll position of a scroll container reaches the edge of a scrollport",
    "specification": "https://www.w3.org/TR/css-overscroll-1/",
    "stage": 1,
    "browser_support": {
      "edge": "79",
      "firefox": "59",
      "chrome": "65",
      "opera": "52",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "8.2",
      "and_qq": "10.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior"
    },
    "example": ".messages {\n  height: 220px;\n  overflow: auto;\n  overscroll-behavior-y: contain;\n}\n\nbody {\n  margin: 0;\n  overscroll-behavior: none;\n}",
    "vendors_implementations": 2
  },
  {
    "id": "place-properties",
    "title": "Place Properties",
    "description": "Properties for defining alignment within a layout",
    "specification": "https://www.w3.org/TR/css-align-3/#place-items-property",
    "stage": 2,
    "browser_support": {
      "chrome": "59",
      "and_chr": "59",
      "edge": "79",
      "firefox": "53",
      "and_ff": "53",
      "opera": "46",
      "op_mob": "43",
      "safari": "11",
      "ios_saf": "11",
      "samsung": "7.0",
      "android": "59"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/place-content"
    },
    "example": ".example {\n  place-content: flex-end;\n  place-items: center / space-between;\n  place-self: flex-start / center;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-place"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "prefers-color-scheme-query",
    "title": "`prefers-color-scheme` Media Query",
    "description": "A media query to detect if the user has requested the system use a light or dark color theme",
    "specification": "https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "67",
      "chrome": "76",
      "safari": "13",
      "opera": "62",
      "ios_saf": "13",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
    },
    "example": "body {\n  background-color: white;\n  color: black;\n}\n\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: black;\n    color: white;\n  }\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "prefers-reduced-motion-query",
    "title": "`prefers-reduced-motion` Media Query",
    "description": "A media query to detect if the user has requested less animation and general motion on the page",
    "specification": "https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "63",
      "chrome": "74",
      "safari": "11",
      "opera": "64",
      "ios_saf": "10.3",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "samsung": "11.1"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
    },
    "example": ".animation {\n  animation: vibrate 0.3s linear infinite both; \n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animation {\n    animation: none;\n  }\n}",
    "vendors_implementations": 3
  },
  {
    "id": "read-only-write-pseudo-class",
    "title": "`:read-only` and `:read-write` selectors",
    "description": "Pseudo-classes to match elements which are considered user-alterable",
    "specification": "https://www.w3.org/TR/selectors-4/#rw-pseudos",
    "stage": 2,
    "browser_support": {
      "edge": "13",
      "firefox": "78",
      "chrome": "36",
      "safari": "9",
      "opera": "23",
      "ios_saf": "9",
      "android": "97",
      "bb": "10",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "4",
      "and_qq": "10.4",
      "baidu": "7.12"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only"
    },
    "example": "input:read-only {\n  background-color: #ccc;\n}",
    "vendors_implementations": 3
  },
  {
    "id": "rebeccapurple-color",
    "title": "`rebeccapurple` Color",
    "description": "A particularly lovely shade of purple in memory of Rebecca Alison Meyer",
    "specification": "https://www.w3.org/TR/css-color-4/#valdef-color-rebeccapurple",
    "stage": 2,
    "browser_support": {
      "edge": "12",
      "firefox": "33",
      "chrome": "38",
      "safari": "7",
      "opera": "25",
      "ios_saf": "8",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "4",
      "and_qq": "10.4",
      "baidu": "7.12",
      "kaios": "2.5"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
    },
    "example": "html {\n  color: rebeccapurple;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-rebeccapurple"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "system-ui-font-family",
    "title": "`system-ui` Font Family",
    "description": "A generic font used to match the user’s interface",
    "specification": "https://www.w3.org/TR/css-fonts-4/#system-ui-def",
    "stage": 2,
    "browser_support": {
      "edge": "79",
      "firefox": "92",
      "chrome": "56",
      "safari": "11",
      "opera": "43",
      "ios_saf": "11",
      "android": "97",
      "op_mob": "64",
      "and_chr": "97",
      "and_ff": "96",
      "and_uc": "12.12",
      "samsung": "6.2",
      "and_qq": "10.4"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#Syntax"
    },
    "example": "body {\n  font-family: system-ui;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-font-family-system-ui"
      }
    ],
    "vendors_implementations": 3
  },
  {
    "id": "when-else-rules",
    "title": "When/Else Rules",
    "description": "At-rules for specifying media queries and support queries in a single grammar",
    "specification": "https://www.w3.org/TR/2021/WD-css-conditional-5-20211221/",
    "stage": 2,
    "browser_support": {},
    "example": "@when media(width >= 640px) and (supports(display: flex) or supports(display: grid)) {\n  /* A */\n} @else media(pointer: coarse) {\n  /* B */\n} @else {\n  /* C */\n}",
    "vendors_implementations": 0
  },
  {
    "id": "where-pseudo-class",
    "title": "`:where()` Zero-Specificity Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list without contributing specificity",
    "specification": "https://www.w3.org/TR/selectors-4/#where-pseudo",
    "stage": 2,
    "browser_support": {
      "chrome": "88",
      "and_chr": "88",
      "edge": "88",
      "firefox": "82",
      "and_ff": "82",
      "opera": "74",
      "op_mob": "63",
      "samsung": "15.0",
      "android": "88"
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:where"
    },
    "example": "a:where(:not(:hover)) {\n  text-decoration: none;\n}",
    "vendors_implementations": 2
  }
]
