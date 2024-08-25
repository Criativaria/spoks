/**
 * Retorna uma promise que vai ser resolvida apos um determinado tempo
 * @param {number} [timeout=2000] em milissegundos
 * @returns {Promise<void>} uma promise que sera resolvida apos {@link timeout} milissegundos
 */
export function sleep(timeout: number = 2000): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, timeout));
}