const path = require("path");
const glob = require("glob");
const vdg = require("vue-docgen-api");
const fs = require("fs");
const { toXML } = require("jstoxml");
const config = require("./styleguide.config");

const links = flatten(
  config.sections.map(section => getSectionLinks(section, ["#"]))
);
fs.writeFileSync(
  path.join(__dirname, "docs.links.json"),
  JSON.stringify(links, null, "  ")
);
fs.writeFileSync(
  path.join(__dirname, "docs.links.xml"),
  toXML({ nav: convertToXMLRecipe(links) })
);
fs.writeFileSync(
  path.join(__dirname, "docs.links.md"),
  convertToMarkdown(links)
);

function getSectionLinks(section, route) {
  if (section.tocHide) {
    return [];
  }
  const sectionPath = [...route, section.name];
  const children = [
    ...flatten(
      (section.sections || []).map(_ => getSectionLinks(_, sectionPath))
    ),
    ...flatten(
      (section.components || []).map(_ => getComponentLinks(_, sectionPath))
    )
  ];
  return [
    {
      href: sectionPath.join("/"),
      name: section.name,
      ...(children.length ? { children } : {})
    }
  ];
}

function getComponentLinks(filenames, route) {
  return glob
    .sync(filenames, {
      cwd: __dirname
    })
    .map(filename => {
      const vueFile = vdg.parse(filename);
      const name = vueFile.displayName;
      return {
        href: [...route, name].join("/"),
        name
      };
    });
  return [];
}

function convertToXMLRecipe(input) {
  if (input == null) {
    return [];
  }
  if (Array.isArray(input)) {
    return input.map(convertToXMLRecipe);
  }
  return [
    { _name: "a", _content: input.name, _attrs: { href: input.href } },
    { nav: [...convertToXMLRecipe(input.children)] }
  ];
}

function convertToMarkdown(input) {
  if (input == null) {
    return "";
  }
  if (Array.isArray(input)) {
    return input.map(convertToMarkdown).join("\n");
  }
  return [
    `- [${input.name}](${input.href.replace(/\s/g, "%20")})`,
    ...convertToMarkdown(input.children)
      .split("\n")
      .map(l => `    ${l}`)
  ]
    .filter(l => !!l.trim())
    .join("\n");
}

function flatten(arr) {
  return arr.reduce((r, i) => r.concat(i), []);
}
