export type ContactData = {
  phone: string;
  email: string;
  address: string;
};

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactApiResponse = {
  message?: string;
  [key: string]: unknown;
};

type ContactListResponse = {
  message?: string;
  data?: Array<{
    contact?: string | null;
    email?: string | null;
    address?: string | null;
  }>;
};

export const defaultContactData: ContactData = {
  phone: "",
  email: "",
  address: "",
};

const buildApiUrl = (endpoint: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API?.trim();

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API is not configured");
  }

  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  return `${normalizedBase}${normalizedEndpoint}`;
};

const parseJson = async <T>(res: Response): Promise<T | null> => {
  return (await res.json().catch(() => null)) as T | null;
};

export const fetchContactInfo = async (): Promise<ContactData> => {
  const res = await fetch(buildApiUrl("/contact/"));
  const result = await parseJson<ContactListResponse>(res);

  if (!res.ok) {
    throw new Error(result?.message || "Failed to fetch contact info");
  }

  const api = result?.data?.[0];

  return {
    phone: api?.contact || "",
    email: api?.email || "",
    address: api?.address || "",
  };
};

export const submitContactUs = async (
  payload: ContactFormPayload
): Promise<ContactApiResponse> => {
  const res = await fetch(buildApiUrl("/contact-us/"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await parseJson<ContactApiResponse>(res);

  if (!res.ok) {
    throw new Error(result?.message || "Failed to submit contact form");
  }

  return result || {};
};
