//missing 'g' global flag in regex
function getURLSlug(words) {
  return words.replace(/\s+/g, '-').toLowerCase();
}
