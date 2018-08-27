const maylily = ' | 有限会社メイリリィ'
const common = {
  meta: [
    { name: 'fb:admins', content: 'admin id' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'url' },
    { name: 'og:title', content: 'og page title' },
    { name: 'og:site_name', content: 'og site name' },
    { name: 'og:description', content: 'og description' },
    { name: 'og:image', content: 'og image' },
  ],
  link: [],
}
export default {
  '/': {
    title: 'Home' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/news': {
    title: 'News' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/about': {
    title: 'About' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/about/vision': {
    title: 'Vision' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/about/message': {
    title: 'Message' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/about/outline': {
    title: 'Outline' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/about/csr': {
    title: 'CSR' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/brand': {
    title: 'Brand' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/bulgarian-rose': {
    title: 'Bulgarian Rose' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/oem': {
    title: 'Fragrance OEM' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/terms-of-use': {
    title: 'Terms of use' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/privacy-policy': {
    title: 'Privacy policy' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
  '/contact': {
    title: 'Contact' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ]
  },
}
