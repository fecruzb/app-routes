import Billruns from './Billruns'
import External from './External'
import Invoices from './Invoices'

export default [
    {
        path: '/',
        component: External,
        routes: [
            {
                path: '/invoices',
                title: 'Invoices',
                component: Invoices,
            },
            {
                path: '/bill-runs',
                title: 'Bill Runs',
                component: Billruns,
            }

        ]
    }
]