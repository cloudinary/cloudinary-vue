const path = require("path");

module.exports = {
  sections: [
    { name: "Cloudinary Vue SDK", content: "docs.links.md", tocHide: true },
    {
      name: "Get started",
      content: "docs/installation.md",
      components: ["src/components/**/*.vue"]
    },
    {
      name: "Video player component",
      content: "videoplayer/docs/description.md",
      sections: [
        { name: "Installation", content: "videoplayer/docs/installation.md" }
      ],
      components: ["videoplayer/src/components/**/*.vue"],
      sectionDepth: 1
    },
    {
      name: "Uploader component",
      content: "uploader/docs/description.md",
      sections: [
        { name: "Installation", content: "uploader/docs/installation.md" }
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
  title: "Cloudinary Vue SDK",
  template: {
    favicon: "./favicon.png",
    body: {
      raw: `
      <style>
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
  styleguideComponents: {
    "slots/IsolateButton": path.join(__dirname, "docs/IsolateButton"),
    StyleGuideRenderer: path.join(__dirname, "docs/StyleGuideRenderer")
  }
};
