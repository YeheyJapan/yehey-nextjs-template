import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

interface Store {
  globalFilter: string
  setGlobalFilter: (value: string) => void
}

export const useTableStore = create<Store>()(
  persist(
    (set) => ({
        globalFilter: "",
        setGlobalFilter: (value) => set(() => ({ globalFilter: value })),
    }),
    {
      name: "bear-storage",
    }
  )
)
