export function fetchTransactions() {
    const transactions = [
        {
            title: 'Groceries',
            description: 'Eggs, Milk, Cream, Vegetables',
            category: 'Health and Fitness',
            outflow: '300php',
            inflow: '0php',
        },
        {
            title: 'Salary',
            description: 'Foobar Inc.',
            category: 'Money and Finances',
            outflow: '0php',
            inflow: '80000php',
        }
    ]
    return transactions
}