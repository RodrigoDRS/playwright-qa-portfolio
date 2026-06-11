export async function blockExternalRequests(page) {
  const blockedDomains = [
    'googlesyndication',
    'doubleclick',
    'googleadservices',
    'googletagmanager',
    'google-analytics',
    'futureelectronics',
    'ineight',
    'carbonads',
    'ads'
  ]

  await page.route('**/*', route => {
    const url = route.request().url()

    const shouldBlock = blockedDomains.some(domain => url.includes(domain))

    if (shouldBlock) {
      return route.abort()
    }

    return route.continue()
  })
}