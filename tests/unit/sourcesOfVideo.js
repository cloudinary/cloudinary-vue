export function sourcesOfVideo(element) {
  const sources = element.findAll("source");
  const result = {};
  for (let i = 0; i < sources.length; i += 1) {
    result[sources.at(i).attributes("mimetype")] = sources
      .at(i)
      .attributes("src");
  }
  return result;
}
