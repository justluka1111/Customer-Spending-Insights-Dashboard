import { useState, useEffect } from "react";
import {
  fetchCustomerProfile,
  fetchSpendingSummary,
  fetchCategoryData,
  fetchMonthlyTrends,
  fetchTransactions,
  fetchSpendingGoals,
  fetchFilters,
} from "../services/api";
import {
  CustomerProfile,
  SpendingSummary,
  CategoryData,
  MonthlyTrend,
  Transaction,
  SpendingGoal,
  CategoryFilter,
} from "../types";

export const useCustomerProfile = (customerId: string) => {
  const [data, setData] = useState<CustomerProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchCustomerProfile(customerId);
        setData(result);
      } catch (err) {
        setError("Failed to load customer profile");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [customerId]);

  return { data, loading, error };
};

export const useSpendingSummary = (customerId: string, period: string) => {
  const [data, setData] = useState<SpendingSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchSpendingSummary(customerId, period);
        setData(result);
      } catch (err) {
        setError("Failed to load spending summary");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [customerId, period]);

  return { data, loading, error };
};

export const useCategoryData = (customerId: string, period: string) => {
  const [data, setData] = useState<CategoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchCategoryData(customerId, period);
        setData(result);
      } catch (err) {
        setError("Failed to load category data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [customerId, period]);

  return { data, loading, error };
};

export const useMonthlyTrends = (customerId: string, months: number = 12) => {
  const [data, setData] = useState<MonthlyTrend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchMonthlyTrends(customerId, months);
        setData(result);
      } catch (err) {
        setError("Failed to load monthly trends");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [customerId, months]);

  return { data, loading, error };
};

export const useTransactions = (customerId: string, params: any = {}) => {
  const [data, setData] = useState<{
    transactions: Transaction[];
    pagination: any;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchTransactions(customerId, params);
        setData(result);
      } catch (err) {
        setError("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [customerId, JSON.stringify(params)]);

  return { data, loading, error };
};

export const useSpendingGoals = (customerId: string) => {
  const [data, setData] = useState<SpendingGoal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchSpendingGoals(customerId);
        setData(result);
      } catch (err) {
        setError("Failed to load spending goals");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [customerId]);

  return { data, loading, error };
};

export const useFilters = (customerId: string) => {
  const [data, setData] = useState<CategoryFilter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await fetchFilters(customerId);
        setData(result);
      } catch (err) {
        setError("Failed to load filters");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [customerId]);

  return { data, loading, error };
};
