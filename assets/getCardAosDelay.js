function getCardAosDelay (i, size) {
  if (size === 'sm') return 0
  // if (size === 'md') return i % 2 * 150
  return i % 2 * 200
  // return i % 3 * 150
}

export default getCardAosDelay
