export function formatUrl(url: string | undefined | null): string {
  if (!url) return "";
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("data:")
  ) {
    return url;
  }
  const baseUrl = import.meta.env.BASE_URL || "/";
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
  return `${cleanBase}${cleanUrl}`;
}
