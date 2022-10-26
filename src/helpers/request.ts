import {configApi} from '../config/configApi';

export const request = async (
  endpoint: string,
  options?: Record<string, any>,
) => {
  let results: object = {};
  const {baseUrl} = configApi;

  const url = endpoint.includes('http') ? endpoint : `${baseUrl}${endpoint}`;

  const req: Response = await fetch(url, options);

  if (req.status === 200 && req.ok) {
    results = await req.json();
  }

  return results;
};
