export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getPascalFromKebab(input) {
  return input.split('-').map(capitalizeFirstLetter).join('');
}

export function formatPhoneNumber(phone) {
  phone = phone.replace(/\D/g, '');
  const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})(\d{0,4})$/);
  if (match) {
    phone = `(${match[1]}${match[2] ? ') ' : ''}${match[2]}${
      match[3] ? '-' : ''
    }${match[3]}${match[4] ? ' x' : ''}${match[4]}`;
  }
  return phone;
}
