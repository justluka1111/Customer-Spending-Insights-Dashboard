# Fintech UI Upgrade TODO

## Implementation Plan

### Phase 1: Theme Setup

- [ ] 1. Create src/theme.ts - MUI theme with fintech colors
- [ ] 2. Update src/index.tsx - Add ThemeProvider and CssBaseline

### Phase 2: Layout Components

- [ ] 3. Update src/components/layout/Header.tsx - Migrate styles to MUI sx prop
- [ ] 4. Update src/components/layout/Sidebar.tsx - Migrate styles to MUI sx prop
- [ ] 5. Update src/components/layout/DashboardLayout.tsx - Update layout with max-width

### Phase 3: Card Components

- [ ] 6. Update src/pages/Profile.tsx - Update card styling
- [ ] 7. Update src/pages/Summary.tsx - Update card styling
- [ ] 8. Update src/components/charts/GoalsChart.tsx - Update card styling

### Phase 4: Cleanup

- [ ] 9. Remove src/components/layout/Header.css
- [ ] 10. Remove src/components/layout/Sidebar.css
- [ ] 11. Verify no TypeScript errors
