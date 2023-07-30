export const cachedApiCall = async () => {
  const cache: Record<string, { value: unknown; expiry: number }> = {};

  return async (url: string, config: RequestInit = {}, time = 0):Promise<unknown> => {
    const key = `${url}${JSON.stringify(config)}`;
    const entry = cache[key];
    if (!entry || Date.now() > entry.expiry) {
      try {
        let resp = await fetch(url, config);
        resp = await resp.json();
        cache[key] = { value: resp, expiry: Date.now() + time };
      } catch (e) {
        console.log("error while making api call", e);
      }
    }

    return cache[key].value;
  };
};

export default cachedApiCall;
