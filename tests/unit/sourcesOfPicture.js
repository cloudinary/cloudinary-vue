export function sourcesOfPicture(element) {
  const sources = element.findAll("source");
  const result = {};
  for (let i = 0; i < sources.length; i++) {
    result[sources.at(i).attributes("type")] = sources
      .at(i)
      .attributes("srcset");
  }
  return result;
}
