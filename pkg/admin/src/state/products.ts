import { ISupplier, ISuppliers } from '@/types/products'
import { create } from 'zustand'

interface IUseSuppliers {
    supplier: ISuppliers;
    reloadSupplier: () => void;
}

export const useSuppliers = create<IUseSuppliers>()((set): IUseSuppliers => ({
    supplier: {
        data: [
            {
                email: "example@example.com",
                id: "1",
                name: "apple",
                phone_number: "2123121241"
            },
        ]
    },
    reloadSupplier: () => set((state) => {
        state.supplier.data[0].id = (parseInt(state.supplier.data[0].id) + 1).toString();
        return {
            supplier: state.supplier
        }
    })
}))

interface BearState {
    bears: number
    increase: (by: number) => void
}

const useBearStore = create<BearState>()((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
}))