export function capitalize(str) {
  if (!str) return ''; // برای مقابله با مقدار null/undefined
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// استفاده:
capitalize('hello'); // "Hello"