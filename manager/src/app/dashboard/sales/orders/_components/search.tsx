import { Button } from "@/components/ui/button";
import { Orders } from "@/services/orders";
import { Order } from "@/types/orders";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchByEmailProps {
  orders: Order[]
  setOrders: (orders: Order[]) => void
}


export default function SearchByEmail({orders, setOrders}: SearchByEmailProps) {

  const [email, setEmail] = useState<string>("");

  const findByEmail = (data: Order[], email: string): Order[] => {
    return data.filter(item => item.user.email.includes(email));
  }

  useEffect(() => {

    const f = async () => {
      try {
        const resp = await Orders.getOrderLimit(100);
        setOrders(resp.data);
      }
      catch (error) {
        console.error(error);
      }
    }

    const delayDebounceFn = setTimeout(() => {
      if (email !== "") {
        setOrders(findByEmail(orders, email));
        return
      }
      f();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [email]);

  return (
    <div className="flex items-center h-full rounded-full bg-gray-100">
      <Button size="icon" variant="secondary" className="rounded-full">
        <Search className="text-black/50 bg-gray-100 pointer-events-none flex-shrink-0 rounded-full" />
      </Button>
      <input
        className=" font-normal w-full border-none focus:border-transparent focus:outline-none mx-2 bg-gray-100"
        type="text"
        placeholder="Type email to search"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  )
}