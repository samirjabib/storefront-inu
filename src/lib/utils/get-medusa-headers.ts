import { cookies } from 'next/headers';

const getMedusaHeaders = (tags: string[] = []) => {
  const headers = {
    next: {
      tags,
    },
  } as Record<string, any>;

  const token = cookies().get('_medusa_jwt')?.value;

  if (token) {
    headers.authorization = `Bearer ${token}`;
  } else {
    headers.authorization = '';
  }

  return headers;
};

export default getMedusaHeaders;
