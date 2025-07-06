module.exports = {
  experimental: {
    turbo: {
      resolveAlias: {
        '@vercel/turbopack-next/internal/font/google/font': require.resolve('next/font/google')
      }
    }
  }
}