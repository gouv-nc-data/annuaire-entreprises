export function formatRid(rid: string): string {
  // Remove any existing spaces and reverse the string
  const reversed = rid.replace(/\s/g, '').split('').reverse().join('');

  // Split into chunks of 3 characters and join with spaces
  const chunked = reversed.match(/.{1,3}/g)?.join(' ') || '';

  // Reverse back to the original order
  const formatted = chunked.split('').reverse().join('');

  return formatted;
}