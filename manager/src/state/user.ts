import { User } from '@/types/users'
import { create } from 'zustand'
import { UserService } from '@/services/users';

interface UseUser {
    user: User | null;
    fetchUser: () => Promise<void>;
}

export const useUser = create<UseUser>()((set): UseUser => ({
    user: null,
    fetchUser: async () => {
        const userRes = await UserService.GetUser()
        return set((state) => {
            return {
                user: userRes ? userRes.data : null
            }
        })
    }
}))