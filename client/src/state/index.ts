import { create } from 'zustand'

const useStore = create((set) => ({
    count: 1,
    inc: () => set((state: { count: number }) => ({ count: state.count + 1 })),
}))