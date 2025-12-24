# UI Updates Required for Fixed Income

The `products-data.ts` file has been updated to include a new "fixed-income" category with 8 investment products:

## Fixed Income Products Added:
1. **CDB Investments** (Certificado de Depósito Bancário):
   - Bradesco CDB 100% ($1000, 10.5% annual return)
   - Itaú CDB 100% ($1000, 10.2% annual return) 
   - Caixa CDB 100% ($1000, 9.8% annual return)

2. **Tesouro Direto (Brazilian Treasury Bonds)**:
   - Tesouro Selic 2027 ($900, 12.1% annual return)
   - Tesouro Prefixado 2027 ($850, 11.5% annual return)
   - Tesouro IPCA+ 2027 ($880, 5.2% annual return)

3. **Debêntures (Corporate Bonds)**:
   - Banco do Brasil Debênture ($950, 11.3% annual return)
   - Petrobrás Debênture ($920, 11.8% annual return)

## UI Changes Needed:

### 1. Products Page Filter Button
Add a new button for "Fixed Income" in `app/products/page.tsx`:

```tsx
<button
  onClick={() => setSelectedCategory('fixed-income')}
  className={`px-4 py-2 rounded ${
    selectedCategory === 'fixed-income' 
      ? 'bg-blue-900 text-white' 
      : 'bg-white text-gray-700 border'
  }`}
>
  Fixed Income
</button>
```

### 2. Homepage Feature Block
Add a new section in the homepage highlighting Fixed Income products as a diversification option.

### 3. Filter Logic Update
Ensure the product filtering handles the new "fixed-income" category:

```tsx
const filteredProducts = products.filter(p => 
  selectedCategory === 'all' || p.category === selectedCategory
);
```

## Notes:
- All Fixed Income products have a `category: 'fixed-income'`
- They use `annualReturn` instead of `dividendYield` for returns
- Minimum investment is $1000 for all products
- These products are non-volatile (change: 0.0)
