import {
  CustomerProfile,
  SpendingSummary,
  CategoryData,
  MonthlyTrend,
  Transaction,
  SpendingGoal,
  CategoryFilter,
} from "../types";

const mockProfile: CustomerProfile = {
  customerId: "12345",
  name: "John Doe",
  email: "john.doe@email.com",
  joinDate: "2023-01-15",
  accountType: "premium",
  totalSpent: 15420.5,
  currency: "ZAR",
};

const mockSummary: SpendingSummary = {
  period: "30d",
  totalSpent: 4250.75,
  transactionCount: 47,
  averageTransaction: 90.44,
  topCategory: "Groceries",
  comparedToPrevious: {
    spentChange: 12.5,
    transactionChange: -3.2,
  },
};

const mockCategories: CategoryData = {
  dateRange: {
    startDate: "2024-08-16",
    endDate: "2024-09-16",
  },
  totalAmount: 4250.75,
  categories: [
    {
      name: "Groceries",
      amount: 1250.3,
      percentage: 29.4,
      transactionCount: 15,
      color: "#FF6B6B",
      icon: "shopping-cart",
    },
    {
      name: "Entertainment",
      amount: 890.2,
      percentage: 20.9,
      transactionCount: 8,
      color: "#4ECDC4",
      icon: "film",
    },
    {
      name: "Transportation",
      amount: 680.45,
      percentage: 16.0,
      transactionCount: 12,
      color: "#45B7D1",
      icon: "car",
    },
    {
      name: "Dining",
      amount: 520.3,
      percentage: 12.2,
      transactionCount: 9,
      color: "#F7DC6F",
      icon: "utensils",
    },
    {
      name: "Shopping",
      amount: 450.8,
      percentage: 10.6,
      transactionCount: 6,
      color: "#BB8FCE",
      icon: "shopping-bag",
    },
    {
      name: "Utilities",
      amount: 458.7,
      percentage: 10.8,
      transactionCount: 3,
      color: "#85C1E9",
      icon: "zap",
    },
  ],
};

const mockTrends: MonthlyTrend[] = [
  {
    month: "2024-01",
    totalSpent: 3890.25,
    transactionCount: 42,
    averageTransaction: 92.62,
  },
  {
    month: "2024-02",
    totalSpent: 4150.8,
    transactionCount: 38,
    averageTransaction: 109.23,
  },
  {
    month: "2024-03",
    totalSpent: 3750.6,
    transactionCount: 45,
    averageTransaction: 83.35,
  },
  {
    month: "2024-04",
    totalSpent: 4200.45,
    transactionCount: 39,
    averageTransaction: 107.7,
  },
  {
    month: "2024-05",
    totalSpent: 3980.3,
    transactionCount: 44,
    averageTransaction: 90.46,
  },
  {
    month: "2024-06",
    totalSpent: 4250.75,
    transactionCount: 47,
    averageTransaction: 90.44,
  },
];

const mockTransactions: Transaction[] = [
  {
    id: "txn_123456",
    date: "2024-09-16T14:30:00Z",
    merchant: "Pick n Pay",
    category: "Groceries",
    amount: 245.8,
    description: "Weekly groceries",
    paymentMethod: "Credit Card",
    icon: "shopping-cart",
    categoryColor: "#FF6B6B",
  },
  {
    id: "txn_123457",
    date: "2024-09-15T10:15:00Z",
    merchant: "Netflix",
    category: "Entertainment",
    amount: 199.0,
    description: "Monthly subscription",
    paymentMethod: "Debit Order",
    icon: "film",
    categoryColor: "#4ECDC4",
  },
];

const mockGoals: SpendingGoal[] = [
  {
    id: "goal_001",
    category: "Entertainment",
    monthlyBudget: 1000.0,
    currentSpent: 650.3,
    percentageUsed: 65.03,
    daysRemaining: 12,
    status: "on_track",
  },
  {
    id: "goal_002",
    category: "Groceries",
    monthlyBudget: 1500.0,
    currentSpent: 1450.8,
    percentageUsed: 96.72,
    daysRemaining: 12,
    status: "warning",
  },
];

const mockFilters: CategoryFilter[] = [
  {
    name: "Groceries",
    color: "#FF6B6B",
    icon: "shopping-cart",
  },
  {
    name: "Entertainment",
    color: "#4ECDC4",
    icon: "film",
  },
  {
    name: "Transportation",
    color: "#45B7D1",
    icon: "car",
  },
  {
    name: "Dining",
    color: "#F7DC6F",
    icon: "utensils",
  },
  {
    name: "Shopping",
    color: "#BB8FCE",
    icon: "shopping-bag",
  },
  {
    name: "Utilities",
    color: "#85C1E9",
    icon: "zap",
  },
];

// Mock API functions
export const fetchCustomerProfile = async (
  customerId: string,
): Promise<CustomerProfile> => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  return mockProfile;
};

export const fetchSpendingSummary = async (
  customerId: string,
  period: string,
): Promise<SpendingSummary> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { ...mockSummary, period };
};

export const fetchCategoryData = async (
  customerId: string,
  period: string,
): Promise<CategoryData> => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return mockCategories;
};

export const fetchMonthlyTrends = async (
  customerId: string,
  months: number,
): Promise<MonthlyTrend[]> => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return mockTrends.slice(-months);
};

export const fetchTransactions = async (
  customerId: string,
  params: { limit?: number; offset?: number; category?: string },
) => {
  await new Promise((resolve) => setTimeout(resolve, 400));

  let filtered = [...mockTransactions];

  if (params.category) {
    filtered = filtered.filter((t) => t.category === params.category);
  }

  return {
    transactions: filtered.slice(
      params.offset || 0,
      (params.offset || 0) + (params.limit || 20),
    ),
    pagination: {
      total: filtered.length,
      limit: params.limit || 20,
      offset: params.offset || 0,
      hasMore: false,
    },
  };
};

export const fetchSpendingGoals = async (
  customerId: string,
): Promise<SpendingGoal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockGoals;
};

export const fetchFilters = async (
  customerId: string,
): Promise<CategoryFilter[]> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockFilters;
};
