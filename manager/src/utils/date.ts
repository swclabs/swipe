import { Order } from "@/types/orders";

export function filterDatesByCurrentWeek(orders: Order[]): Order[] {
    const now = new Date();
    const startOfWeek = getStartOfWeek(now);
    const endOfWeek = getEndOfWeek(now);

    return orders.filter(order => {
        const orderDate = new Date(order.time);
        return orderDate >= startOfWeek && orderDate <= endOfWeek;
    });
}

export function filterDatesByCurrentMonth(orders: Order[]): Order[] {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
  
    return orders.filter(order => {
      const orderDate = new Date(order.time);
      return orderDate.getFullYear() === currentYear && orderDate.getMonth() === currentMonth;
    });
}

// Helper functions to get start and end of the week
function getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = (day === 0 ? -6 : 1) - day; // Tính toán ngày đầu tuần (Thứ Hai)
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() + diff);
    startOfWeek.setHours(0, 0, 0, 0);
    return startOfWeek;
}

function getEndOfWeek(date: Date): Date {
    const startOfWeek = getStartOfWeek(date);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Thêm 6 ngày để có Chủ Nhật
    endOfWeek.setHours(23, 59, 59, 999);
    return endOfWeek;
}