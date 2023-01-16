module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/live/120.3,30.3',
        permanent: true,
      }
    ]
  }
}