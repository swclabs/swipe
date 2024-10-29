import { Address } from "@/service/address";
import { District, Province, Ward } from "@/types/address";
import { create } from "zustand";

export interface IAddress {
    province: number;
    district: number;
    provinces: Province[];
    districts: District[];
    wards: Ward[];
    setProvince: (province: number) => void;
    setDistrict: (district: number) => void;
    setDistricts: (districts: District[]) => void;
    setProvinces: (provinces: Province[]) => void;
    fetchProvinces: () => Promise<void>;
    fetchDistricts: (province_id: number) => Promise<void>;
    fetchWards: (district_id: number) => Promise<void>;
}

export const useAddress = create<IAddress>()((set): IAddress => ({
    provinces: [],
    districts: [],
    wards: [],
    province: -1,
    district: -1,
    setDistricts: (districts: District[]) => set({ districts: districts }),
    setProvinces: (provinces: Province[]) => set({ provinces: provinces }),
    setProvince: (province: number) => set({ province: province }),
    setDistrict: (district: number) => set({ district: district }),
    fetchProvinces: async () => {
        try {
            const resp = await Address.GetProvinces();
            return set((state) => {
                return {
                    provinces: resp ? resp.data.data : [],
                    districts: state.districts
                }
            })
        }
        catch (e) {
            return
        }
    },
    fetchDistricts: async (province_id: number) => {
        try {
            const resp = await Address.GetDistricts(province_id);
            return set((state) => {
                return {
                    districts: resp ? resp.data.data : [],
                    provinces: state.provinces
                }
            })
        }
        catch (e) {
            return
        }
    },
    fetchWards: async (district_id: number) => {
        try {
            const resp = await Address.GetWards(district_id);
            return set((state) => {
                return {
                    wards: resp ? resp.data.data : []
                }
            })
        }
        catch (e) {
            return
        }
    }
}))