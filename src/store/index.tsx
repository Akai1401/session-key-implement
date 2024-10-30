import { create } from 'zustand';

const useStore = create((set: any) => ({
  count: 0,
  setCount: (count: number) => set({ count }),
}));

export default useStore;
