export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  // 检查是否为HTTP请求
  if (url.protocol === 'http:') {
    // 构建HTTPS URL
    const httpsUrl = new URL(url.href)
    httpsUrl.protocol = 'https:'
    
    // 重定向到HTTPS
    return sendRedirect(event, httpsUrl.href, 301)
  }
})
