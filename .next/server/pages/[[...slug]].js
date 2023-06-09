(function() {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 8882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(8354);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(3023);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: external "react-markdown"
var external_react_markdown_namespaceObject = require("react-markdown");;
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_namespaceObject);
;// CONCATENATED MODULE: ./utils/button.js
// Decide what the button will look like based on its type (primary or secondary)
// and on its background (light or dark).
function getButtonAppearance(type, background) {
  if (type === "primary") {
    if (background === "light") {
      // Dark primary button on a light background
      return "dark";
    } // Fully white primary button on a dark background


    return "white";
  }

  if (type === "secondary") {
    if (background === "light") {
      // Dark outline primary button on a light background
      return "dark-outline";
    } // White outline primary button on a dark background


    return "white-outline";
  } // Shouldn't happen, but default to dark button just in case


  return "dark";
}
;// CONCATENATED MODULE: external "classnames"
var external_classnames_namespaceObject = require("classnames");;
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(4229);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./utils/types.js

const linkPropTypes = external_prop_types_default().shape({
  id: external_prop_types_default().oneOfType([(external_prop_types_default()).string, (external_prop_types_default()).number]).isRequired,
  url: (external_prop_types_default()).string.isRequired,
  text: (external_prop_types_default()).string.isRequired,
  newTab: (external_prop_types_default()).bool
});
const mediaPropTypes = external_prop_types_default().shape({
  data: external_prop_types_default().shape({
    id: external_prop_types_default().oneOfType([(external_prop_types_default()).string, (external_prop_types_default()).number]).isRequired,
    attributes: external_prop_types_default().shape({
      alternativeText: (external_prop_types_default()).string,
      mime: (external_prop_types_default()).string.isRequired,
      url: (external_prop_types_default()).string.isRequired
    })
  })
});
const buttonLinkPropTypes = external_prop_types_default().shape({
  theme: (external_prop_types_default()).string,
  text: (external_prop_types_default()).string.isRequired,
  newTab: (external_prop_types_default()).bool
});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/elements/custom-link.js




const CustomLink = ({
  link,
  children
}) => {
  const isInternalLink = link.url.startsWith("/"); // For internal links, use the Next.js Link component

  if (isInternalLink) {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: link.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: children
      })
    });
  } // Plain <a> tags for external links


  if (link.newTab) {
    return /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: link.url,
      target: "_blank",
      rel: "noopener noreferrer",
      children: children
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: link.url,
    target: "_self",
    children: children
  });
};

/* harmony default export */ var custom_link = (CustomLink);
;// CONCATENATED MODULE: ./components/elements/button-link.js





const ButtonContent = ({
  button,
  appearance,
  compact
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()( // Common classes
    "block w-full lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md", // Full-size button
    {
      "px-8 py-4": compact === false
    }, // Compact button
    {
      "px-6 py-2": compact === true
    }, // Specific to when the button is fully dark
    {
      "bg-primary-600 text-white border-primary-600": appearance === "dark"
    }, // Specific to when the button is dark outlines
    {
      "text-primary-600 border-primary-600": appearance === "dark-outline"
    }, // Specific to when the button is fully white
    {
      "bg-white text-primary-600 border-white": appearance === "white"
    }, // Specific to when the button is white outlines
    {
      "text-white border-white": appearance === "white-outline"
    }),
    children: button.text
  });
};

const ButtonLink = ({
  button,
  appearance,
  compact = false
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
    link: button,
    children: /*#__PURE__*/jsx_runtime_.jsx(ButtonContent, {
      button: button,
      appearance: appearance,
      compact: compact
    })
  });
};

/* harmony default export */ var button_link = (ButtonLink);
// EXTERNAL MODULE: ./utils/media.js
var utils_media = __webpack_require__(1151);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/elements/image.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const NextImage = (_ref) => {
  let {
    media
  } = _ref,
      props = _objectWithoutProperties(_ref, ["media"]);

  const {
    url,
    alternativeText,
    width,
    height
  } = media.data.attributes;

  const loader = ({
    src,
    width
  }) => {
    return (0,utils_media/* getStrapiMedia */.$)(src);
  }; // The image has a fixed width and height


  if (props.width && props.height) {
    return /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread({
      loader: loader,
      src: url,
      alt: alternativeText || ""
    }, props));
  } // The image is responsive


  return /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    loader: loader,
    layout: "responsive",
    width: width || "100%",
    height: height || "100%",
    objectFit: "contain",
    src: url,
    alt: alternativeText || ""
  });
};

/* harmony default export */ var elements_image = (NextImage);
;// CONCATENATED MODULE: ./components/sections/hero.js







const Hero = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
    className: "flex flex-col md:flex-row items-center overflow-y-hidden w-full justify-between py-12 h-screen",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-1 flex flex-col justify-center z-10 sm:pr-8 pl-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "uppercase tracking-wide font-semibold",
        children: data.label
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "title mt-2 sm:mt-0 mb-4 sm:mb-2",
        children: data.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-gray-500 text-xl mb-6",
        children: data.description
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-row flex-wrap gap-4",
        children: data.buttons.map(button => /*#__PURE__*/jsx_runtime_.jsx(button_link, {
          button: button,
          appearance: getButtonAppearance(button.type, "light")
        }, button.id))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-base md:text-sm mt-4 sm:mt-3 rich-text-hero",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
          children: data.smallTextWithLink
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex-1 w-full md:w-6/12 mt-6 md:mt-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
        media: data.picture
      })
    })]
  });
};

/* harmony default export */ var hero = (Hero); // import Markdown from "react-markdown"
// import { getButtonAppearance } from "utils/button"
// import ButtonLink from "../elements/button-link"
// import NextImage from "../elements/image"
// const Hero = ({ data }) => {
//   console.log(data.picture)
//   return (
//     <main className="flex flex-col md:flex-row items-center justify-between pb-12">
//       {/* Right column for the image */}
//       <div className="flex-shrink-0 w-full z-1">
//         <NextImage media={data.picture} />
//         {/* Left column for content */}
//         <div className=" absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           {/* Hero section label */}
//           <p className="uppercase tracking-wide font-semibold">{data.label}</p>
//           {/* Big title */}
//           <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2">{data.title}</h1>
//           {/* Description paragraph */}
//           <p className="text-xl mb-6">{data.description}</p>
//           {/* Buttons row */}
//           <div className="flex flex-row flex-wrap gap-4">
//             {data.buttons.map((button) => (
//               <ButtonLink
//                 button={button}
//                 appearance={getButtonAppearance(button.type, "light")}
//                 key={button.id}
//               />
//             ))}
//           </div>
//           {/* Small rich text */}
//           <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
//             <Markdown>{data.smallTextWithLink}</Markdown>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
// export default Hero
;// CONCATENATED MODULE: ./components/elements/video.js




const Video = ({
  media,
  poster,
  className,
  controls = true,
  autoPlay = false
}) => {
  const fullVideoUrl = (0,utils_media/* getStrapiMedia */.$)(media.url);
  const fullPosterUrl = (0,utils_media/* getStrapiMedia */.$)(poster === null || poster === void 0 ? void 0 : poster.url);
  return /*#__PURE__*/jsx_runtime_.jsx("video", {
    className: className,
    poster: fullPosterUrl,
    controls: controls,
    autoPlay: autoPlay,
    children: /*#__PURE__*/jsx_runtime_.jsx("source", {
      src: fullVideoUrl,
      type: media.mime
    })
  });
};

/* harmony default export */ var video = (Video);
;// CONCATENATED MODULE: ./components/sections/large-video.js




const LargeVideo = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "container flex flex-col align-middle text-center pt-12 pb-16",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "title mb-6",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-lg mb-10",
      children: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full lg:w-9/12 mx-auto overflow-hidden shadow-2xl",
      children: /*#__PURE__*/jsx_runtime_.jsx(video, {
        media: data.video,
        poster: data.poster,
        className: "w-full max-h-full"
      })
    })]
  });
};

/* harmony default export */ var large_video = (LargeVideo);
;// CONCATENATED MODULE: ./components/sections/feature-columns-group.js




const FeatureColumnsGroup = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12",
    children: data.features.map(feature => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-1 text-lg",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-10 h-10",
        children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
          media: feature.icon
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "font-bold mt-4 mb-4",
        children: feature.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: feature.description
      })]
    }, feature.id))
  });
};

/* harmony default export */ var feature_columns_group = (FeatureColumnsGroup);
;// CONCATENATED MODULE: ./components/sections/feature-rows-group.js







const FeatureRowsGroup = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container flex flex-col gap-12 py-12",
    children: data.features.map((feature, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()( // Common classes
      "flex flex-col justify-start md:justify-between md:items-center gap-10", {
        "lg:flex-row": index % 2 === 0,
        "lg:flex-row-reverse": index % 2 === 1
      }),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full lg:w-6/12 lg:pr-6 text-lg",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "title",
          children: feature.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "my-6",
          children: feature.description
        }), /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
          link: feature.link,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-blue-600 with-arrow hover:underline",
            children: feature.link.text
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full sm:9/12 lg:w-4/12 max-h-full",
        children: [feature.media.data.attributes.mime.startsWith("image") && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full h-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
            media: feature.media
          })
        }), feature.media.data.attributes.mime.startsWith("video") && /*#__PURE__*/jsx_runtime_.jsx(video, {
          media: feature.media,
          className: "w-full h-auto",
          autoPlay: true,
          controls: false
        })]
      })]
    }, feature.id))
  });
};

/* harmony default export */ var feature_rows_group = (FeatureRowsGroup);
;// CONCATENATED MODULE: ./components/sections/bottom-actions.js





const BottomActions = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "bg-primary-800 py-20 text-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "title text-white mb-10",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container flex flex-row justify-center flex-wrap gap-4",
      children: data.buttons.map(button => /*#__PURE__*/jsx_runtime_.jsx(button_link, {
        button: button,
        appearance: getButtonAppearance(button.type, "dark")
      }, button.id))
    })]
  });
};

/* harmony default export */ var bottom_actions = (BottomActions);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/sections/testimonials-group.js







const TestimonialsGroup = ({
  data
}) => {
  // Only show one testimonial at a time
  const {
    0: selectedTestimonialIndex,
    1: setSelectedTestimonialIndex
  } = (0,external_react_.useState)(0);
  const selectedTestimonial = data.testimonials[selectedTestimonialIndex];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "text-center text-lg bg-gray-200 pt-12 pb-16",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "title mb-4",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-gray-700 mb-4",
      children: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
      link: data.link,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "with-arrow text-blue-700 hover:underline",
        children: data.link.text
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-5xl w-8/12 sm:w-8/12 bg-white shadow-md sm:shadow-xl mx-auto flex flex-col sm:flex-row mt-10 text-left",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full md:w-4/12 flex-shrink-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
          media: selectedTestimonial.picture
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-4 py-4 sm:px-12 sm:pt-12 sm:pb-4 flex flex-col justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(elements_image, {
            width: "120",
            height: "33",
            media: selectedTestimonial.logo
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "italic mb-6",
            children: ["\"", selectedTestimonial.text, "\""]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-bold text-base sm:text-sm",
            children: selectedTestimonial.authorName
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-base sm:text-sm",
            children: selectedTestimonial.authorTitle
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
          link: {
            url: selectedTestimonial.link,
            text: "",
            newTab: false,
            id: 0
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "uppercase tracking-wide text-blue-700 hover:underline  with-arrow sm:self-end mt-6 sm:mt-0",
            children: "Read story"
          })
        })]
      })]
    }), data.testimonials.length > 1 && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-row gap-4 mt-10 justify-center",
      children: data.testimonials.map((testimonial, index) => /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => setSelectedTestimonialIndex(index),
        className: external_classnames_default()( // Common classes
        "rounded-full h-3 w-3", {
          "bg-gray-500": index !== selectedTestimonialIndex,
          "bg-primary-600": index === selectedTestimonialIndex
        })
      }, testimonial.id))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-row flex-wrap items-center gap-6 sm:gap-20 justify-center mt-10 px-6 sm:px-0 ",
      children: data.logos.map(logo => /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
        width: "120",
        height: "33",
        media: logo.logo
      }, logo.id))
    })]
  });
};

/* harmony default export */ var testimonials_group = (TestimonialsGroup);
;// CONCATENATED MODULE: external "clsx"
var external_clsx_namespaceObject = require("clsx");;
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_namespaceObject);
;// CONCATENATED MODULE: ./components/sections/table-of-content.js





function TableOfContent({
  className,
  navigation
}) {
  let router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: external_clsx_default()("text-base lg:text-sm", className),
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      role: "list",
      className: "space-y-9",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "font-display font-medium text-slate-900 dark:text-white",
          children: "Table of Content"
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          role: "list",
          className: "mt-2 p-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200 max-h-80 lg:max-h-[max-content] overflow-y-auto",
          children: navigation.map(link => /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "relative",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: link.href,
              className: external_clsx_default()("block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full", link.href === router.pathname ? "font-semibold text-sky-500 before:bg-sky-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"),
              children: link.title
            })
          }, link.href))
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/sections/rich-text.js






function flatten(text, child) {
  return typeof child === "string" ? text + child : external_react_default().Children.toArray(child.props.children).reduce(flatten, text);
}

const RichText = ({
  data
}) => {
  const {
    0: navigation,
    1: setNavigation
  } = (0,external_react_.useState)([]);
  const nav = [];

  function HeadingRenderer(props) {
    const children = external_react_default().Children.toArray(props.children);
    const text = children.reduce(flatten, "");
    const slug = text.toLowerCase().replace(/\W/g, "-");
    nav.push({
      title: text,
      href: `#${slug}`
    });
    return /*#__PURE__*/external_react_default().createElement("h" + props.level, {
      id: slug
    }, props.children);
  }

  (0,external_react_.useEffect)(() => {
    setNavigation(nav);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container relative flex justify-center flex-wrap",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "lg:flex px-5 py-12 flex-1 lg:max-w-[200px] justify-start relative lg:absolute top-0 left-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(TableOfContent, {
        navigation: navigation
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "prose prose-lg py-12",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
        components: {
          h2: HeadingRenderer,
          h3: HeadingRenderer,
          h1: HeadingRenderer
        },
        children: data.content
      })
    })]
  });
};

/* harmony default export */ var rich_text = (RichText);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var index_esm = __webpack_require__(5434);
;// CONCATENATED MODULE: ./components/sections/pricing.js





const Pricing = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container py-12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "text-4xl text-center",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col lg:flex-row gap-4 lg:justify-center mt-6",
      children: data.plans.map(plan => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()( // Common classes
        "rounded-md border-2 py-4 px-4 flex-1 md:w-lg", // Normal plan
        {
          "bg-gray-100 text-gray-900 border-gray-300": !plan.isRecommended
        }, // Recommended plan
        {
          "bg-primary-100 text-primary-900 border-primary-300": plan.isRecommended
        }),
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-2xl",
          children: plan.name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: external_classnames_default()("mt-4 text-lg", {
            "text-primary-700": plan.isRecommended,
            "text-gray-700": !plan.isRecommended
          }),
          children: plan.description
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-3xl mt-4",
          children: [plan.price === 0 ? "Free " : `$${plan.price} `, /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-base font-medium",
            children: plan.pricePeriod
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "mt-4 flex flex-col gap-3",
          children: plan.features.map(feature => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex flex-row justify-between items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: feature.name
            }), /*#__PURE__*/jsx_runtime_.jsx(index_esm/* MdCheckBox */.y5A, {
              className: "h-6 w-auto text-gray-900"
            })]
          }, feature.id))
        })]
      }, plan.id))
    })]
  });
};

/* harmony default export */ var pricing = (Pricing);
;// CONCATENATED MODULE: external "yup"
var external_yup_namespaceObject = require("yup");;
;// CONCATENATED MODULE: external "formik"
var external_formik_namespaceObject = require("formik");;
;// CONCATENATED MODULE: ./components/elements/loader.js




const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    viewBox: "0 0 38 38",
    className: "animate-spin h-5 w-5 stroke-current text-black-600 mr-2",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        transform: "translate(1 1)",
        strokeWidth: "2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
          strokeOpacity: ".5",
          cx: "18",
          cy: "18",
          r: "18"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M36 18c0-9.94-8.06-18-18-18",
          children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 18 18",
            to: "360 18 18",
            dur: "1s",
            repeatCount: "indefinite"
          })
        })]
      })
    })
  });
};

/* harmony default export */ var loader = (Loader);
;// CONCATENATED MODULE: ./components/elements/button.js






const Button = ({
  button,
  appearance,
  compact = false,
  handleClick,
  loading = false,
  type
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    link: button,
    onClick: handleClick,
    type: type,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()( // Common classes
      "flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md", // Full-size button
      {
        "px-8 py-4": compact === false
      }, // Compact button
      {
        "px-6 py-2": compact === true
      }, // Specific to when the button is fully dark
      {
        "bg-primary-600 text-white border-primary-600": appearance === "dark"
      }, // Specific to when the button is dark outlines
      {
        "text-primary-600 border-primary-600": appearance === "dark-outline"
      }, // Specific to when the button is fully white
      {
        "bg-white text-primary-600 border-white": appearance === "white"
      }, // Specific to when the button is white outlines
      {
        "text-white border-white": appearance === "white-outline"
      }),
      children: [loading && /*#__PURE__*/jsx_runtime_.jsx(loader, {}), button.text]
    })
  });
};

/* harmony default export */ var elements_button = (Button);
;// CONCATENATED MODULE: ./components/sections/lead-form.js








const LeadForm = ({
  data
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const LeadSchema = external_yup_namespaceObject.object().shape({
    email: external_yup_namespaceObject.string().email().required()
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-10 text-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "text-3xl mb-10 font-bold mb-2",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_namespaceObject.Formik, {
        initialValues: {
          email: ""
        },
        validationSchema: LeadSchema,
        onSubmit: async (values, {
          setSubmitting,
          setErrors
        }) => {
          setLoading(true);

          try {
            setErrors({
              api: null
            });
            await (0,api/* fetchAPI */.Io)("/lead-form-submissions", {}, {
              method: "POST",
              body: JSON.stringify({
                email: values.email,
                location: data.location
              })
            });
          } catch (err) {
            setErrors({
              api: err.message
            });
          }

          setLoading(false);
          setSubmitting(false);
        },
        children: ({
          errors,
          touched,
          isSubmitting
        }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_namespaceObject.Form, {
            className: "flex flex-col md:flex-row gap-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_namespaceObject.Field, {
              className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
              type: "email",
              name: "email",
              placeholder: data.emailPlaceholder
            }), /*#__PURE__*/jsx_runtime_.jsx(elements_button, {
              type: "submit",
              button: data.submitButton,
              disabled: isSubmitting,
              loading: loading
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-red-500 h-12 text-sm mt-1 ml-2 text-left",
            children: errors.email && touched.email && errors.email || errors.api
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var lead_form = (LeadForm);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(6893);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./components/elements/response-message.js




function ResponseMessage({
  response
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_clsx_default()("rounded-md p-4", response.success && "bg-green-50", !response.success && "bg-red-50"),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex-shrink-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(ai_index_esm/* AiFillCheckCircle */.mny, {
          className: external_clsx_default()("h-5 w-5", response.success && "text-green-400", !response.success && "text-red-400"),
          "aria-hidden": "true"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ml-3",
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: external_clsx_default()("text-sm font-medium", response.success && "text-green-800", !response.success && "text-red-800"),
          children: response.message
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ml-auto pl-3",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "-mx-1.5 -my-1.5",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            type: "button",
            className: external_clsx_default()("inline-flex rounded-md focus:ring-offset-2 p-1.5 focus:outline-none focus:ring-2", response.success && "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50", !response.success && "bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50"),
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "sr-only",
              children: "Dismiss"
            }), /*#__PURE__*/jsx_runtime_.jsx(ai_index_esm/* AiFillCloseCircle */.LHV, {
              className: "h-5 w-5",
              "aria-hidden": "true"
            })]
          })
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/sections/contact-form.js



function contact_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contact_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contact_form_ownKeys(Object(source), true).forEach(function (key) { contact_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contact_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contact_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function ContactForm({
  data
}) {
  const {
    0: formData,
    1: setFormData
  } = (0,external_react_.useState)({
    fullname: "",
    email: "",
    phone: "",
    message: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: response,
    1: setResponse
  } = (0,external_react_.useState)(null);

  async function handleSubmit(e) {
    if (loading) return;
    e.preventDefault(); // validation
    // post

    setLoading(true);
    const res = await (0,api/* postContactform */.eQ)(formData);
    setResponse(res);
    setLoading(false);
  }

  function handleFormData(e) {
    setFormData(contact_form_objectSpread(contact_form_objectSpread({}, formData), {}, {
      [e.target.name]: e.target.value
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative bg-white py-10",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute inset-0",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute inset-y-0 left-0 w-1/2 bg-gray-50"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative mx-auto max-w-7xl lg:grid lg:grid-cols-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mx-auto max-w-lg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
            children: data.title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "mt-3 text-lg leading-6 text-gray-500",
            children: data.description
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
            className: "mt-8 text-base text-gray-500",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "sr-only",
                children: "Postal address"
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: data.address
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mt-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "sr-only",
                children: "Phone number"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dd", {
                className: "flex",
                children: [/*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiPhone */.tUt, {
                  className: "h-6 w-6 flex-shrink-0 text-gray-400",
                  "aria-hidden": "true"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "ml-3",
                  children: data.phone
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mt-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "sr-only",
                children: "Email"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dd", {
                className: "flex",
                children: [/*#__PURE__*/jsx_runtime_.jsx(ai_index_esm/* AiOutlineMail */.Dme, {
                  className: "h-6 w-6 flex-shrink-0 text-gray-400",
                  "aria-hidden": "true"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "ml-3",
                  children: data.email
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "flex mt-6 text-base text-gray-500 gap-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: data.facebook,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaFacebook */.Am9, {
                  className: "h-6 w-6 flex-shrink-0 text-gray-400"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: data.instagram,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiInstagram */.JID, {
                  className: "h-6 w-6 flex-shrink-0 text-gray-400"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: data.twitter,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaTwitter */.fWC, {
                  className: "h-6 w-6 flex-shrink-0 text-gray-400"
                })
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mx-auto max-w-lg lg:max-w-none",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            className: "grid grid-cols-1 gap-y-6",
            onSubmit: handleSubmit,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "full-name",
                className: "sr-only",
                children: "Full name"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                required: true,
                type: "text",
                name: "fullname",
                id: "full-name",
                autoComplete: "name",
                className: "block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                placeholder: "Full name",
                value: formData["fullname"],
                onChange: handleFormData
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "email",
                className: "sr-only",
                children: "Email"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                required: true,
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                className: "block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                placeholder: "Email",
                value: formData["email"],
                onChange: handleFormData
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "phone",
                className: "sr-only",
                children: "Phone"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                required: true,
                type: "text",
                name: "phone",
                id: "phone",
                autoComplete: "tel",
                className: "block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                placeholder: "Phone",
                value: formData["phone"],
                onChange: handleFormData
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "message",
                className: "sr-only",
                children: "Message"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                id: "message",
                name: "message",
                rows: 4,
                className: "block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                placeholder: "Message",
                defaultValue: "",
                value: formData["message"],
                onChange: handleFormData,
                required: true
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                type: "submit",
                className: `inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading ? "disabled" : ""}`,
                children: "Submit"
              }), !loading && response != null && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mt-5",
                children: /*#__PURE__*/jsx_runtime_.jsx(ResponseMessage, {
                  response: response
                })
              })]
            })]
          })
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/sections.js












 // Map Strapi sections to section components

const sectionComponents = {
  ComponentSectionsHero: hero,
  ComponentSectionsLargeVideo: large_video,
  ComponentSectionsFeatureColumnsGroup: feature_columns_group,
  ComponentSectionsFeatureRowsGroup: feature_rows_group,
  ComponentSectionsBottomActions: bottom_actions,
  ComponentSectionsTestimonialsGroup: testimonials_group,
  ComponentSectionsRichText: rich_text,
  ComponentSectionsPricing: pricing,
  ComponentSectionsLeadForm: lead_form,
  ComponentSectionsContactForm: ContactForm
}; // Display a section individually

const Section = ({
  sectionData
}) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__typename];

  if (!SectionComponent) {
    return null;
  } // Display the section


  return /*#__PURE__*/jsx_runtime_.jsx(SectionComponent, {
    data: sectionData
  });
};

const PreviewModeBanner = () => {
  const router = (0,router_.useRouter)();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(router.asPath)}`;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: ["Preview mode is on.", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "underline",
        href: `/api/exit-preview?redirect=${router.asPath}`,
        children: "Turn off"
      })]
    })
  });
}; // Display the list of sections


const Sections = ({
  sections,
  preview
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col",
    children: [preview && /*#__PURE__*/jsx_runtime_.jsx(PreviewModeBanner, {}), sections.map(section => /*#__PURE__*/jsx_runtime_.jsx(Section, {
      sectionData: section
    }, `${section.__typename}${section.id}`))]
  });
};

/* harmony default export */ var components_sections = (Sections);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
;// CONCATENATED MODULE: ./components/elements/seo.js


function seo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function seo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { seo_ownKeys(Object(source), true).forEach(function (key) { seo_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { seo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function seo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Seo = ({
  metadata
}) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.NextSeo, {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    openGraph: seo_objectSpread({
      // Title and description are mandatory
      title: metadata.metaTitle,
      description: metadata.metaDescription
    }, metadata.shareImage && {
      images: Object.values(metadata.shareImage.data.attributes.formats).map(image => {
        return {
          url: (0,utils_media/* getStrapiMedia */.$)(image.url),
          width: image.width,
          height: image.height
        };
      })
    }) // Only included Twitter data if we have it
    ,
    twitter: seo_objectSpread(seo_objectSpread({}, metadata.twitterCardType && {
      cardType: metadata.twitterCardType
    }), metadata.twitterUsername && {
      handle: metadata.twitterUsername
    })
  });
};

/* harmony default export */ var seo = (Seo);
;// CONCATENATED MODULE: ./utils/hooks.js
 // Got from https://usehooks.com/useLockBodyScroll/

function useLockBodyScroll() {
  (0,external_react_.useEffect)(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow; // Prevent scrolling on mount

    document.body.style.overflow = 'hidden'; // Re-enable scrolling when component unmounts

    return () => document.body.style.overflow = originalStyle;
  }, []); // Empty array ensures effect is only run on mount and unmount
}
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
;// CONCATENATED MODULE: ./components/elements/mobile-nav-menu/mobile-button-link.js


function MobileButtonLink({
  navLink,
  closeSelf
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
    link: navLink,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hover:text-gray-900 py-6 flex flex-row justify-between items-center",
      onClick: closeSelf,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: navLink.text
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/elements/mobile-nav-menu/mobile-dropdown.js





function MobileDropDown({
  navLink,
  closeSelf
}) {
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);

  function handleClick() {
    setShow(!show);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "hover:text-gray-900 py-6 flex flex-row justify-between items-center",
      onClick: handleClick,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: navLink.label
      }), show ? /*#__PURE__*/jsx_runtime_.jsx(index_esm/* MdExpandMore */.Yc6, {
        className: "h-8 w-auto"
      }) : /*#__PURE__*/jsx_runtime_.jsx(index_esm/* MdChevronRight */.FNi, {
        className: "h-8 w-auto"
      })]
    }), show && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pl-9",
      children: navLink.link.map(link => /*#__PURE__*/jsx_runtime_.jsx(MobileButtonLink, {
        navLink: link,
        closeSelf: closeSelf
      }, link.id))
    })]
  });
}
;// CONCATENATED MODULE: ./components/elements/mobile-nav-menu/mobile-nav-menu.js











const MobileNavMenu = ({
  navbar,
  menuList,
  closeSelf
}) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();
  const linkComponents = {
    ComponentLinksLink: MobileButtonLink,
    ComponentElementsDropdown: MobileDropDown
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-10 pb-6",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container h-full flex flex-col justify-between",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-row justify-between py-2 items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(elements_image, {
            width: "120",
            height: "33",
            media: navbar.logo
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: closeSelf,
            className: "py-1 px-1",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* MdClose */.FU5, {
              className: "h-8 w-auto"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "flex flex-col list-none items-baseline text-xl mb-10",
            children: menuList.map(navLink => {
              const LinkComponent = linkComponents[navLink["__typename"]];
              return /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "block w-full",
                children: /*#__PURE__*/jsx_runtime_.jsx(LinkComponent, {
                  navLink: navLink,
                  closeSelf: closeSelf
                })
              }, navLink.id);
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col justify-start w-9/12 mx-auto",
        children: /*#__PURE__*/jsx_runtime_.jsx(button_link, {
          button: navbar.button,
          appearance: getButtonAppearance(navbar.button.type, "light")
        })
      })]
    })
  });
};

/* harmony default export */ var mobile_nav_menu = (MobileNavMenu);
;// CONCATENATED MODULE: external "@headlessui/react"
var react_namespaceObject = require("@headlessui/react");;
// EXTERNAL MODULE: ./node_modules/@heroicons/react/20/solid/esm/ChevronDownIcon.js
var ChevronDownIcon = __webpack_require__(6100);
;// CONCATENATED MODULE: ./components/elements/dropdown.js







function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropDown({
  navLink,
  locale
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Menu, {
    as: "div",
    className: "relative inline-block text-left",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Menu.Button, {
        className: "inline-flex w-full justify-center items-center",
        children: [navLink.label, /*#__PURE__*/jsx_runtime_.jsx(ChevronDownIcon/* default */.Z, {
          className: " h-5 w-5",
          "aria-hidden": "true"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Transition, {
      as: external_react_.Fragment,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Menu.Items, {
        className: "absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-1",
          children: navLink.link.map(link => /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Menu.Item, {
            children: ({
              active
            }) => /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: link.url,
              className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
              children: link.text
            })
          }, link.id))
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/elements/menu-link.js


function MenuLink({
  navLink,
  locale
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
    link: navLink,
    locale: locale,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hover:text-gray-900 px-2 py-1",
      children: navLink.text
    })
  });
}
;// CONCATENATED MODULE: ./components/elements/navbar.js















const Navbar = ({
  navbar,
  menuList
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: mobileMenuIsShown,
    1: setMobileMenuIsShown
  } = (0,external_react_.useState)(false);
  const linkComponents = {
    ComponentLinksLink: MenuLink,
    ComponentElementsDropdown: DropDown
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: "border-gray-200 border-b-2 py-6 sm:py-2",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container flex flex-row items-center justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-row items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "h-8 w-32",
              children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
                width: "120",
                height: "33",
                media: navbar.logo
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-row items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "hidden list-none md:flex flex-row gap-4 items-baseline ml-10 pr-2.5",
            children: menuList.map(navLink => {
              const LinkComponent = linkComponents[navLink.__typename];
              return /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(LinkComponent, {
                  navLink: navLink,
                  locale: router.locale
                })
              }, navLink.id);
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: () => setMobileMenuIsShown(true),
            className: "p-1 block md:hidden",
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* MdMenu */.xXU, {
              className: "h-8 w-auto"
            })
          }), navbar.button && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/jsx_runtime_.jsx(button_link, {
              button: navbar.button,
              appearance: getButtonAppearance(navbar.button.type, "light"),
              compact: true
            })
          })]
        })]
      })
    }), mobileMenuIsShown && /*#__PURE__*/jsx_runtime_.jsx(mobile_nav_menu, {
      navbar: navbar,
      menuList: menuList,
      closeSelf: () => setMobileMenuIsShown(false)
    })]
  });
};

/* harmony default export */ var elements_navbar = (Navbar);
;// CONCATENATED MODULE: ./components/elements/footer.js






const Footer = ({
  footer
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: "pt-12 bg-gray-100",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-col lg:flex-row lg:justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: footer.logo && /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
          width: "120",
          height: "33",
          media: footer.logo
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: "flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10",
        children: footer.columns.map(footerColumn => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-10 lg:mt-0 w-6/12 lg:w-auto",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "uppercase tracking-wide font-semibold",
            children: footerColumn.title
          }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "mt-2",
            children: footerColumn.links.map(link => /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900",
              children: /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
                link: link,
                children: link.text
              })
            }, link.id))
          })]
        }, footerColumn.id))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-sm bg-gray-200 py-6 text-gray-700",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: footer.smallText
      })
    })]
  });
};

/* harmony default export */ var elements_footer = (Footer);
;// CONCATENATED MODULE: ./components/elements/notification-banner.js






const NotificationBanner = ({
  data: {
    text,
    type
  },
  closeSelf
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()( // Common classes
    "text-white px-2 py-2", {
      // Apply theme based on notification type
      "bg-blue-600": type === "info",
      "bg-orange-600": type === "warning",
      "bg-red-600": type === "alert"
    }),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-row justify-between items-center ",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "rich-text-banner flex-1",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
          children: text
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: closeSelf,
        className: "px-1 py-1 flex-shrink-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* MdClose */.FU5, {
          className: "h-6 w-auto",
          color: "#fff"
        })
      })]
    })
  });
};

/* harmony default export */ var notification_banner = (NotificationBanner);
;// CONCATENATED MODULE: ./components/layout.js







const Layout = ({
  children,
  global,
  pageContext,
  menuList
}) => {
  const {
    navbar,
    footer,
    notificationBanner
  } = global.attributes;
  const {
    0: bannerIsShown,
    1: setBannerIsShown
  } = (0,external_react_.useState)(true);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col justify-between min-h-screen",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-1",
      children: [notificationBanner && bannerIsShown && /*#__PURE__*/jsx_runtime_.jsx(notification_banner, {
        data: notificationBanner,
        closeSelf: () => setBannerIsShown(false)
      }), /*#__PURE__*/jsx_runtime_.jsx(elements_navbar, {
        navbar: navbar,
        pageContext: pageContext,
        menuList: menuList
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: children
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(elements_footer, {
      footer: footer
    })]
  });
};

/* harmony default export */ var layout = (Layout);
;// CONCATENATED MODULE: ./utils/localize.js
function localize_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function localize_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { localize_ownKeys(Object(source), true).forEach(function (key) { localize_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { localize_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function localize_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function getLocalizedPage(targetLocale, pageContext) {
  const localization = pageContext.localizations.data.find(localization => localization.attributes.locale === targetLocale);
  const localePage = await fetchAPI(`/pages/${localization.id}`);
  return localePage;
}
function localizePath(page) {
  const {
    locale,
    defaultLocale,
    slug
  } = page;

  if (locale === defaultLocale) {
    // The default locale is not prefixed
    return `/${slug}`;
  } // The slug should have a localePrefix


  return `/${locale}/${slug}`;
}
function getLocalizedPaths(page) {
  const paths = page.locales.map(locale => {
    return {
      locale: locale,
      href: localizePath(localize_objectSpread(localize_objectSpread({}, page), {}, {
        locale
      }))
    };
  });
  return paths;
}
;// CONCATENATED MODULE: ./pages/[[...slug]].js



function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({
  sections,
  metadata,
  preview,
  global,
  menuList,
  pageContext
}) => {
  var _metadata$shareImage;

  const router = (0,router_.useRouter)(); // Check if the required data was provided

  if (!router.isFallback && !(sections !== null && sections !== void 0 && sections.length)) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: 404
    });
  } // Loading screen (only possible in preview mode)


  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: "Loading..."
    });
  } // Merge default site SEO settings with page specific SEO settings


  if (((_metadata$shareImage = metadata.shareImage) === null || _metadata$shareImage === void 0 ? void 0 : _metadata$shareImage.data) == null) {
    delete metadata.shareImage;
  }

  const metadataWithDefaults = _slug_objectSpread(_slug_objectSpread({}, global.attributes.metadata), metadata);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout, {
    global: global,
    pageContext: pageContext,
    menuList: menuList,
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo, {
      metadata: metadataWithDefaults
    }), /*#__PURE__*/jsx_runtime_.jsx(components_sections, {
      sections: sections,
      preview: preview
    })]
  });
};

async function getStaticPaths(context) {
  // Get all pages from Strapi
  const pages = await context.locales.reduce(async (currentPagesPromise, locale) => {
    const currentPages = await currentPagesPromise;
    const localePages = await (0,api/* fetchAPI */.Io)("/pages", {
      locale,
      fields: ["slug", "locale"]
    });
    return [...currentPages, ...localePages.data];
  }, Promise.resolve([]));
  const paths = pages.map(page => {
    const {
      slug,
      locale
    } = page.attributes; // Decompose the slug that was saved in Strapi

    const slugArray = !slug ? false : slug.split("/");
    return {
      params: {
        slug: slugArray
      },
      // Specify the locale to render
      locale
    };
  });
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps(context) {
  const {
    params,
    locale,
    locales,
    defaultLocale,
    preview = null
  } = context;
  const globalLocale = await (0,api/* getGlobalData */.rC)(locale); // Fetch pages. Include drafts if preview mode is on

  const pageData = await (0,api/* getPageData */.um)({
    slug: (!params.slug ? [""] : params.slug).join("/"),
    locale,
    preview
  });

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return {
      props: {}
    };
  } // We have the required page data, pass it to the page component


  const {
    contentSections,
    metadata,
    localizations,
    slug
  } = pageData.attributes;
  const pageContext = {
    locale,
    locales,
    defaultLocale,
    slug,
    localizations
  };
  const localizedPaths = getLocalizedPaths(pageContext);
  return {
    props: {
      preview,
      sections: contentSections,
      metadata,
      global: globalLocale.data,
      pageContext: _slug_objectSpread(_slug_objectSpread({}, pageContext), {}, {
        localizedPaths
      })
    }
  };
}
/* harmony default export */ var _slug_ = (DynamicPage);

/***/ }),

/***/ 1151:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
function getStrapiMedia(url) {
  if (url == null) {
    return null;
  } // Return the full URL if the media is hosted on an external provider


  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  } // Otherwise prepend the URL path with the Strapi URL


  return `${"http://localhost:1337" || 0}${url}`;
}

/***/ }),

/***/ 2364:
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 8354:
/***/ (function(module) {

"use strict";
module.exports = require("next/error");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,971,23], function() { return __webpack_exec__(8882); });
module.exports = __webpack_exports__;

})();