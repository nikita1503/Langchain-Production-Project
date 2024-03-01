import { createContext } from 'react';
import { AppContextType } from './useAppContextValue';

const AppContext = createContext<AppContextType|undefined>(undefined);

export default AppContext;