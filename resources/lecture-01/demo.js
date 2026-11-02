/**
 * Asynchronously executes a fetch request with automatic retries, exponential backoff,
 * jitter, and request timeouts.
 *
 * @async
 * @function fetchWithRetry
 * @param {string | URL} url - The URL or request resource to fetch.
 * @param {RequestInit} [options={}] - Standard fetch options (method, headers, body, etc.).
 * @param {Object} [config={}] - Configuration options for the retry behavior.
 * @param {number} [config.retries=3] - Maximum number of retry attempts before throwing an error.
 * @param {number} [config.baseDelay=1000] - Initial delay in milliseconds before the first retry.
 * @param {number} [config.maxDelay=10000] - Maximum cap for the backoff delay in milliseconds.
 * @param {number} [config.timeout=5000] - Timeout limit per request attempt in milliseconds.
 * @param {Function} [config.onRetry] - Optional callback triggered on each retry: `(error, attempt) => void`.
 * @returns {Promise<Response>} A promise that resolves with the Response object if successful.
 * @throws {Error} Throws the final caught error if all retry attempts are exhausted.
 * 
 * @example
 * try {
 *   const response = await fetchWithRetry('https://api.example.com/data', {
 *     method: 'GET',
 *     headers: { 'Content-Type': 'application/json' }
 *   }, {
 *     retries: 3,
 *     timeout: 4000,
 *     onRetry: (err, attempt) => console.warn(`Attempt ${attempt} failed: ${err.message}. Retrying...`)
 *   });
 *   
 *   const data = await response.json();
 *   console.log('Success:', data);
 * } catch (error) {
 *   console.error('All retry attempts failed:', error);
 * }
 */
async function fetchWithRetry(url, options = {}, config = {}) {
  const {
    retries = 3,
    baseDelay = 1000,
    maxDelay = 10000,
    timeout = 5000,
    onRetry = null
  } = config;

  let attempt = 0;

  while (true) {
    attempt++;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller