import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Create',
};

export default function CustomerCreatePage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Customers',
            href: '#',
          },
          {
            label: 'Customer List',
            href: '/dashboard/customers/',
            active: true,
          },
        ]}
      />

      <Form />
    </main>
  );
}