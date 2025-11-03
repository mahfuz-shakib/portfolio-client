import { useContext } from 'react';
import { DataContext } from '../Context/DataContext.';

export const usePortfolioData = () => {
    const context = useContext(DataContext);
    return context;
};

