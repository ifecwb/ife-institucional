/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ifecwb.org.br',
  generateRobotsTxt: true,
  outDir: './out',
  exclude: ['examples', '/imposto-de-renda-whatsapp', '/imposto-de-renda-hibrido']
}
