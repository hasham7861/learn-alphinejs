
            
import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js'
import Papa from 'https://cdn.jsdelivr.net/npm/papaparse@5.4.1/+esm'

window.Alpine = Alpine
window.Papa = Papa

// Set up Alpine store before starting
Alpine.store('transactions',  {
    list: [
        {name: 'coffee', cost:'2.00'},
        {name: 'bagel', cost:'4.00'},
        {name: 'parking ticket', cost: '10.00'},
        {name: 'rent', cost: '100'}
    ]
})

// Start Alpine ui interpreter
Alpine.start()

// Inject the HTML after Alpine is ready
const transactionsView = `
    <table x-data>
        <tr>
            <th>Transaction Name</th>
            <th>Charge Amount</th>
        </tr>
        <template x-for="transaction in $store.transactions.list">
            <tr>
                <td><p x-text="transaction.name"></p></td>
                <td><p x-text="transaction.cost"></p></td>
            </tr>
        </template>
    </table>

    
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
`;

// inject the custom html into ui platform platform 
document.getElementById('transaction-view').innerHTML = transactionsView