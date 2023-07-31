export const cachedApiCall = async () => {
  const cache: Record<string, { value: unknown; expiry: number }> = {};

  return async (
    url: string,
    config: RequestInit = {},
    time = 0
  ): Promise<unknown> => {
    const key = `${url}${JSON.stringify(config)}`;
    const entry = cache[key];
    if (entry && Date.now() <= entry.expiry) {
      return entry.value;
    } else {
      try {
        const resp = await fetch(url, config);
        const data = await resp.json();
        if (!("Note" in data)) {
          cache[key] = { value: data, expiry: Date.now() + time };
        }
        return data;
      } catch (e) {
        console.log("error while making api call", e);
      }
    }
  };
};

export default cachedApiCall;
