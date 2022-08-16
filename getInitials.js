export default function getInitials(name) {
  return name
    .split(' ')
    .map((word) => {
      return `${word.charAt(0).toUpperCase()}.`;
    })
    .join('');
}
