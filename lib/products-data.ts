export interface Product {
  id: string;
  name: string;
  symbol: string;
  category: 'stocks' | 'reits' | 'etfs' | 'fixed-income';
  price: number;
  change: number;
  description: string;
  sector?: string;
  marketCap?: string;
  dividendYield?: number;
  minimumInvestment: number;
  annualReturn?: number;
}

export const products: Product[] = [
  { id: 'aapl', name: 'Apple Inc.', symbol: 'AAPL', category: 'stocks', price: 197.45, change: 2.34, description: 'Apple is a technology company known for iPhone, Mac, and services.', sector: 'Technology', marketCap: '$3.0T', dividendYield: 0.50, minimumInvestment: 1000 },
  { id: 'msft', name: 'Microsoft Corporation', symbol: 'MSFT', category: 'stocks', price: 378.91, change: 1.67, description: 'Microsoft provides cloud computing, software, and gaming services.', sector: 'Technology', marketCap: '$2.8T', dividendYield: 0.76, minimumInvestment: 1000 },
  { id: 'googl', name: 'Alphabet Inc.', symbol: 'GOOGL', category: 'stocks', price: 141.80, change: -0.45, description: 'Alphabet operates Google and other technology subsidiaries.', sector: 'Technology', marketCap: '$1.9T', dividendYield: 0.0, minimumInvestment: 1000 },
  { id: 'amzn', name: 'Amazon.com, Inc.', symbol: 'AMZN', category: 'stocks', price: 178.25, change: 3.12, description: 'Amazon is an e-commerce and cloud computing company.', sector: 'Consumer Discretionary', marketCap: '$1.8T', dividendYield: 0.0, minimumInvestment: 1000 },
  { id: 'tsla', name: 'Tesla, Inc.', symbol: 'TSLA', category: 'stocks', price: 248.50, change: -1.23, description: 'Tesla manufactures electric vehicles and energy storage systems.', sector: 'Consumer Discretionary', marketCap: '$780B', dividendYield: 0.0, minimumInvestment: 1000 },
  { id: 'nvda', name: 'NVIDIA Corporation', symbol: 'NVDA', category: 'stocks', price: 495.22, change: 4.56, description: 'NVIDIA designs GPUs for gaming, data centers, and AI.', sector: 'Technology', marketCap: '$1.2T', dividendYield: 0.03, minimumInvestment: 1000 },
  { id: 'psa', name: 'Public Storage', symbol: 'PSA', category: 'reits', price: 285.30, change: 1.85, description: 'Public Storage operates self-storage facilities nationwide.', sector: 'Real Estate', marketCap: '$39.5B', dividendYield: 3.45, minimumInvestment: 1000 },
  { id: 'well', name: 'Welltower Inc.', symbol: 'WELL', category: 'reits', price: 60.45, change: 2.10, description: 'Welltower invests in healthcare real estate properties.', sector: 'Real Estate', marketCap: '$28.7B', dividendYield: 3.20, minimumInvestment: 1000 },
  { id: 'cci', name: 'Crown Castle International', symbol: 'CCI', category: 'reits', price: 98.30, change: 0.95, description: 'Crown Castle operates communication real estate infrastructure.', sector: 'Real Estate', marketCap: '$42.1B', dividendYield: 3.85, minimumInvestment: 1000 },
  { id: 'vym', name: 'Vanguard High Dividend Yield ETF', symbol: 'VYM', category: 'etfs', price: 118.45, change: 1.42, description: 'VYM tracks high dividend-yielding stocks.', marketCap: '$45.2B', dividendYield: 2.85, minimumInvestment: 1000 },
  { id: 'iwm', name: 'iShares Russell 2000 ETF', symbol: 'IWM', category: 'etfs', price: 203.75, change: -0.68, description: 'IWM tracks small-cap US stocks.', marketCap: '$56.8B', dividendYield: 1.25, minimumInvestment: 1000 },
  { id: 'bradesco-cdb', name: 'Bradesco CDB 100%', symbol: 'BRAD-CDB', category: 'fixed-income', price: 1000.00, change: 0.0, description: 'Certificado de Depósito Bancário (CDB) from Bradesco with 100% CDI coverage.', sector: 'Fixed Income', annualReturn: 10.5, minimumInvestment: 1000 },
  { id: 'itau-cdb', name: 'Itaú CDB 100%', symbol: 'ITAU-CDB', category: 'fixed-income', price: 1000.00, change: 0.0, description: 'Certificado de Depósito Bancário (CDB) from Itaú with 100% CDI coverage.', sector: 'Fixed Income', annualReturn: 10.2, minimumInvestment: 1000 },
  { id: 'caixa-cdb', name: 'Caixa CDB 100%', symbol: 'CAIXA-CDB', category: 'fixed-income', price: 1000.00, change: 0.0, description: 'Certificado de Depósito Bancário (CDB) from Caixa with 100% CDI coverage.', sector: 'Fixed Income', annualReturn: 9.8, minimumInvestment: 1000 },
  { id: 'tesouro-selic', name: 'Tesouro Selic 2027', symbol: 'TSEL27', category: 'fixed-income', price: 900.00, change: 0.0, description: 'Brazilian Treasury Bond linked to Selic rate, maturing in 2027.', sector: 'Fixed Income', annualReturn: 12.1, minimumInvestment: 1000 },
  { id: 'tesouro-prefixado', name: 'Tesouro Prefixado 2027', symbol: 'TPRE27', category: 'fixed-income', price: 850.00, change: 0.0, description: 'Brazilian Treasury Bond with fixed interest rate, maturing in 2027.', sector: 'Fixed Income', annualReturn: 11.5, minimumInvestment: 1000 },
  { id: 'tesouro-ipca', name: 'Tesouro IPCA+ 2027', symbol: 'TIPC27', category: 'fixed-income', price: 880.00, change: 0.0, description: 'Brazilian Treasury Bond linked to inflation (IPCA), maturing in 2027.', sector: 'Fixed Income', annualReturn: 5.2, minimumInvestment: 1000 },
  { id: 'bb-debenture', name: 'Banco do Brasil Debênture', symbol: 'BBDEB', category: 'fixed-income', price: 950.00, change: 0.0, description: 'Corporate bond (Debênture) issued by Banco do Brasil.', sector: 'Fixed Income', annualReturn: 11.3, minimumInvestment: 1000 },
  { id: 'petrobras-debenture', name: 'Petrobrás Debênture', symbol: 'PETDEB', category: 'fixed-income', price: 920.00, change: 0.0, description: 'Corporate bond (Debênture) issued by Petrobrás.', sector: 'Fixed Income', annualReturn: 11.8, minimumInvestment: 1000 },
;
