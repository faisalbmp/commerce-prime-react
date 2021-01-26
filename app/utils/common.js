export const ucFirst = (text) => {
  if (!text) return;
  const toLower = text.toLowerCase();
  return toLower.charAt(0).toUpperCase() + toLower.slice(1);
}

export const uppercase = (text) => {
  return text && text.toUpperCase();
}

export const lowercase = (text) => {
  return text && text.toLowerCase();
}

export const unknown = 'Unknown';

export function formatBytes(bytes, decimals = 2) {
  if (typeof bytes === 'string') {
    bytes = parseInt(bytes);
  }
  if (bytes === 0) return '0 Bytes';

  // TODO: Make agreement to use 1024 or 1000 as conversion rate on bytes
  const k = 1000; // Default 1024
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function getUomFromBytes(bytes) {
  if (bytes === 0) return 'Bytes';
  const formatted = formatBytes(bytes);
  return formatted.split(' ').slice(-1).join('');
}

export const onKeyDown = (keyEvent) => {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
}