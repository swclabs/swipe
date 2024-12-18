export function formatNumber(totalPrice: number) {
    const str = totalPrice?.toString();
    const result = [];

    for (let i = str?.length; i > 0; i -= 3) {
        const start = Math.max(i - 3, 0);
        result.unshift(str.slice(start, i));
    }

    return result.join('.');
}

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return date.toLocaleDateString('en-US', options);
};