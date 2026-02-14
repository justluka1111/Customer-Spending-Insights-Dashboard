# Customer Spending Insights Dashboard

A production-ready React + TypeScript dashboard for visualizing customer spending insights, built with Material-UI and Recharts.

## Features

- **Customer Profile**: Display customer information and account details
- **Spending Summary**: Overview of spending metrics with period comparisons
- **Category Breakdown**: Interactive pie chart showing spending by category
- **Monthly Trends**: Line chart displaying spending trends over time
- **Transaction History**: Filterable table of recent transactions
- **Spending Goals**: Progress tracking for monthly spending goals
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Library**: Material-UI (MUI)
- **Charts**: Recharts
- **State Management**: React Context
- **Build Tool**: Vite
- **Containerization**: Docker

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard layout
│   ├── Profile.tsx      # Customer profile component
│   ├── Summary.tsx      # Spending summary cards
│   ├── CategoryChart.tsx # Pie chart for categories
│   ├── TrendsChart.tsx  # Line chart for trends
│   ├── Transactions.tsx # Transaction table with filters
│   └── GoalsChart.tsx   # Goals progress bars
├── context/             # React Context for state management
│   └── DashboardContext.tsx
├── hooks/               # Custom hooks for API calls
│   └── useApi.ts
├── utils/               # Utility functions and mock API
│   └── mockApi.ts
└── types.ts             # TypeScript type definitions
```

## Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Local Development

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd customer-spending-insights-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3001 in your browser. in your browser.

### Docker

1. Build the Docker image:

   ```bash
   docker build -t spending-dashboard .
   ```

2. Run the container:

   docker run -p 4173:4173 spending-dashboard

3. Open http://localhost:4173 in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

> Note: The development server runs on port 3001, while the Docker container serves the production build on port 4173.

## API Integration

The dashboard uses mock API functions that simulate the endpoints defined in `CustomerSpendingInsightsEndpoints.md`. In a real application, replace the mock functions in `src/utils/mockApi.ts` with actual API calls.

### Mock Endpoints

- `GET /api/customers/{customerId}/profile` - Customer profile
- `GET /api/customers/{customerId}/spending/summary` - Spending summary
- `GET /api/customers/{customerId}/spending/categories` - Category breakdown
- `GET /api/customers/{customerId}/spending/trends` - Monthly trends
- `GET /api/customers/{customerId}/transactions` - Transaction history
- `GET /api/customers/{customerId}/goals` - Spending goals
- `GET /api/customers/{customerId}/filters` - Available filters

## Customization

### Changing Customer ID

Update the default customer ID in `src/context/DashboardContext.tsx`:

```typescript
const [customerId, setCustomerId] = useState<string>("YOUR_CUSTOMER_ID");
```

### Modifying Period

Change the default period in the same file:

```typescript
const [period, setPeriod] = useState<string>("30d"); // Options: 7d, 30d, 90d, 1y
```

### Styling

The application uses Material-UI's theme system. Customize the theme in `src/index.tsx`:

```typescript
const theme = createTheme({
  palette: {
    // Your custom palette
  },
  // Other theme options
});
```

## Production Deployment

1. Build the application:

   ```bash
   npm run build
   ```

2. The build artifacts will be stored in the `dist/` directory.

3. Serve the `dist` folder with any static file server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
