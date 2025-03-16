import { useCallback, useState } from 'react';

import { chuckHttpClient } from '@/clients';
import { useLoadedData } from '@/hooks/use-loaded-data';
import { ICategory } from '@/models/category';

export const RadomCategory: ICategory = 'random';
export function useCategories() {
  const [categoriesState, dispatchCategories] = useLoadedData<ICategory[]>();
  const [selectedCategory, setSelectedCategory] = useState<ICategory>('' as ICategory);

  const getCategories = useCallback(async () => {
    try {
      const existingCategories = await chuckHttpClient.getCategories();

      const categories = [RadomCategory, ...existingCategories];

      dispatchCategories({ actionType: 'hasData', data: categories });
      setSelectedCategory(categories[0]);

      return categories;
    } catch (error: unknown) {
      dispatchCategories({ actionType: 'hasError', error });
    }
  }, [dispatchCategories]);

  return {
    categoriesState,
    dispatchCategories,
    selectedCategory,
    setSelectedCategory,
    getCategories
  };
}
