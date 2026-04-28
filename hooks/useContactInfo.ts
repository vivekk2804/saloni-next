"use client";

import { useCallback, useEffect, useState } from "react";
import {
  defaultContactData,
  fetchContactInfo,
  type ContactData,
} from "@/services/contactApi";

export const useContactInfo = () => {
  const [data, setData] = useState<ContactData>(defaultContactData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadContactInfo = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchContactInfo();
      setData(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch contact info");
      setData(defaultContactData);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadContactInfo();
  }, [loadContactInfo]);

  return { data, loading, error, refetch: loadContactInfo };
};
