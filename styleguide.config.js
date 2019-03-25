const path = require("path");

module.exports = {
  sections: [
    {
      name: "Cloudinary Vue SDK",
      content: "docs-sources/links.md",
      tocHide: true
    },
    { name: "About Cloudinary", content: "docs-sources/desc.md" },
    {
      name: "Install core components",
      content: "docs-sources/installation.md",
      components: ["src/components/**/*.vue"],
      sectionDepth: 1
    },
    {
      name: "Video Player component",
      content: "videoplayer/docs/description.md",
      sections: [
        {
          name: "Install Video Player",
          content: "videoplayer/docs/installation.md"
        }
      ],
      components: ["videoplayer/src/components/**/*.vue"],
      sectionDepth: 1
    },
    {
      name: "Uploader component",
      content: "uploader/docs/description.md",
      sections: [
        {
          name: "Install Uploader",
          content: "uploader/docs/installation.md"
        }
      ],
      components: ["uploader/src/components/**/*.vue"],
      sectionDepth: 1
    }
  ],
  showSidebar: false,
  exampleMode: "expand",
  usageMode: "expand",
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const rel = path.relative(__dirname, componentPath);
    const name = path.basename(componentPath, ".vue");
    const subfolder = rel
      .replace(`src/components/${name}.vue`, "")
      .replace(/^([^/]+)\/?$/, "$1");
    return `
      import { ${name} } from 'cloudinary-vue${
      subfolder ? `/${subfolder}` : ""
    }';
    `;
  },
  editorConfig: {
    theme: "lesser-dark"
  },
  title: "Cloudinary Vue SDK",
  template: {
    favicon: "./favicon.png",
    body: {
      raw: `
      <style>
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Montserrat:400,500,600');

        body {
          font-family: 'Open Sans', Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          color: #3c3c3c;
          background-color: white;
        }
        .cld-doc h1,
        .cld-doc h2,
        .cld-doc h3,
        .cld-doc h4,
        .cld-doc h5,
        .cld-doc h6,
        .cld-doc .h1,
        .cld-doc .h2,
        .cld-doc .h3,
        .cld-doc .h4,
        .cld-doc .h5,
        .cld-doc .h6 {
          font-family: 'Montserrat', Helvetica, Arial, sans-serif;
        }
        .cld-doc .h1,
        .cld-doc h1 {
          font-size: 40px;
          color: #000;
          margin-top: 0;
          margin-bottom: 25px;
        }
        .cld-doc .h2,
        .cld-doc h2 {
          font-size: 32px;
        }
        .cld-doc .h3,
        .cld-doc h3 {
          font-size: 24px;
        }
        .cld-doc .h4,
        .cld-doc h4 {
          font-size: 20px;
        }
        .cld-doc .h5,
        .cld-doc h5 {
          margin-top: 22px;
          font-size: 18px;
        }
        .cld-doc .h6,
        .cld-doc h6 {
          font-size: 16px;
        }
        .cld-doc .h1,
        .cld-doc h1,
        .cld-doc .h2,
        .cld-doc h2 {
          font-weight: 500;
          letter-spacing: -1.2px;
        }
        .cld-doc .h3,
        .cld-doc h3,
        .cld-doc .h4,
        .cld-doc h4,
        .cld-doc .h5,
        .cld-doc h5,
        .cld-doc .h6,
        .cld-doc h6 {
          font-weight: 500;
          letter-spacing: -0.5px;
        }
        .cld-doc h1,
        .cld-doc h2,
        .cld-doc h3,
        .cld-doc h4,
        .cld-doc h5,
        .cld-doc h6 {
          color: #000;
        }
        .cld-doc h1 a, .cld-doc h2 a, .cld-doc h3 a, .cld-doc h4 a, .cld-doc h5 a, .cld-doc h6 a {
          color: #000;
        }
        .cld-doc h1 a:visited, .cld-doc h2 a:visited, .cld-doc h3 a:visited, .cld-doc h4 a:visited, .cld-doc h5 a:visited, .cld-doc h6 a:visited {
          color: inherit;
        }
        .cld-doc h1 a:hover, .cld-doc h2 a:hover, .cld-doc h3 a:hover, .cld-doc h4 a:hover, .cld-doc h5 a:hover, .cld-doc h6 a:hover {
          color: #f96726;
          text-decoration: none;
        }
        .cld-doc.cld-doc.cld-doc a,
        .cld-doc.cld-doc.cld-doc :link {
          text-decoration: none;
          transition: color 0.3s;
          color: #f96726;
        }
        .cld-doc.cld-doc.cld-doc a:hover {
          color: #f96726;
          text-decoration: underline;
        }
        .cld-doc.cld-doc.cld-doc a:visited {
          color: #d44e12;
        }
        .cld-doc.cld-doc.cld-doc a:focus {
          color: #d44e12;
          text-decoration: underline;
          outline: none;
        }
        table[class^=rsg] {
          border-collapse: collapse;
          margin: 2em 0;
        }

        .cld-doc ul {list-style: none}
        .cld-doc ul li::before {content: "•"; color: #f96726; margin-right: 10px;}

        button[name="rsg-code-editor"] {
          display: none;
        }
        .CodeMirror.CodeMirror-wrap {
          border-radius: 6px;
        }

        table[class^=rsg] td, table[class^=rsg] th {
          font-size: 13px;
          padding: 7px 10px;
          border: 1px solid #ddd;
          line-height: 18px;
          overflow-wrap: break-word;
        }
        table[class^=rsg] th {
          color: #888;
          font-weight: bold;
        }
        table[class^=rsg] td a {
          font-weight: normal;
        }
        table[class^=rsg] code {
          font-size: 12px;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        div.explain {
          display: block;
          position: relative;
          border: 1px dotted #db0f60;
        }
        div.explain:before {
          content: attr(style);
          position: absolute;
          top:0; left: 0;
          border-bottom: 1px dotted #db0f60;
          border-right: 1px dotted #db0f60;
          z-index: 2;
          background: white;
          color: black;
          padding: 3px;
          font-size: 7pt;
          font-family: sans-serif;
          opacity: 0.5;
        }
        div.explain:hover:before {
          opacity: 0.9;
        }
        div.explain * {
          border: 1px dashed #000;
        }
        div.explain * {
          border-color: #db0fbc;
        }
        div.explain * * {
          border-color: #6a0fdb;
        }
        div.explain * * * {
          border-color: #190fdb;
        }
        div.explain * * * {
          border-color: #0f71db;
        }
      </style>
    `
    }
  },
  styleguideDir: "docs",
  styleguideComponents: {
    "slots/IsolateButton": path.join(__dirname, "docs-sources/IsolateButton"),
    "rsg-components/slots/UsageTabButton": path.join(
      __dirname,
      "docs-sources/UsageTabButton"
    ),
    "rsg-components/lib/slots/UsageTabButton": path.join(
      __dirname,
      "docs-sources/UsageTabButton"
    ),
    StyleGuideRenderer: path.join(__dirname, "docs-sources/StyleGuideRenderer"),
    SectionHeadingRenderer: path.join(
      __dirname,
      "docs-sources/SectionHeadingRenderer"
    )
  },
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    webpackConfig.output.filename = "build/[name].bundle.js";
    webpackConfig.output.chunkFilename = "build/[name].js";
    webpackConfig.plugins.forEach(plugin => {
      if (plugin.__proto__.constructor.name === "MiniCssExtractPlugin") {
        plugin.options.filename = "css/[name].css";
        plugin.options.chunkFilename = "css/[name].css";
      }
    });
    return webpackConfig;
  }
};
