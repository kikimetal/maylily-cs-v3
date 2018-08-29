const maylily = ' | 有限会社メイリリィ'
const common = {
  meta: [
    // { name: 'fb:admins', content: 'admin id' },
    // { name: 'og:type', content: 'website' },
    // { name: 'og:url', content: 'url' },
    // { name: 'og:title', content: 'og page title' },
    // { name: 'og:site_name', content: 'og site name' },
    // { name: 'og:description', content: 'og description' },
    // { name: 'og:image', content: 'og image' },
  ],
  link: [
    // { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favisons/favicon.ico' },
    // { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/favisons/favicon.ico' },
    // { rel: 'apple-touch-icon', sizes: '152x152', href: '/favisons/apple-touch-icon.png' },
  ],
}
export default {
  '/': {
    title: 'Home' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/news': {
    title: 'News' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/about': {
    title: 'About' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/about/vision': {
    title: 'Vision' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/about/message': {
    title: 'Message' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/about/outline': {
    title: 'Outline' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/about/csr': {
    title: 'CSR' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/brand': {
    title: 'Brand' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/bulgarian-rose': {
    title: 'Bulgarian Rose' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/oem': {
    title: 'Fragrance OEM' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/terms-of-use': {
    title: 'Terms of use' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/privacy-policy': {
    title: 'Privacy policy' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
  '/contact': {
    title: 'Contact' + maylily,
    meta: [
      { hid: 'description', name: 'description', content: 'カスタマイズしたよ' },
      ...common.meta,
    ],
    link: [...common.link],
  },
}
