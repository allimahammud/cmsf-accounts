import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById ,fetchCustomers} from '@/app/lib/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Edit Customer',
};

export default async function EditCustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = await fetchInvoiceById('06597e7d-0bc3-4ac7-9e9b-cffd3cf865a3');
 const [invoice, customers] = await Promise.all([
    fetchInvoiceById('06597e7d-0bc3-4ac7-9e9b-c7fd3cf865a3'),
    fetchCustomers(),
  ]);
  if (!customer) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Customers',
            href: '/dashboard/customers',
          },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/edit/${id}`,
            active: true,
          },
        ]}
      />

  <Form invoice={invoice} customers={customers} />    </main>
  );
}