/**
 * Capitalize the first letter of a string
 * @param text Text to capitalize
 * @returns Text capitalized
 * 
 * @example
 * ```ts
 * capitalize('pikachu') // Pikachu
 * capitalize('bulbasaur') // Bulbasaur
 * ```
 */
export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
