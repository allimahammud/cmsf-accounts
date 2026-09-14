'use client';

// import { CustomerField } from '@/app/lib/definitions';
import { useActionState } from 'react';
import Link from 'next/link';

import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  PhotoIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

import { Button } from '@/app/ui/button';
import { createCustomer, CustomerState } from '@/app/lib/actions';

export default function CustomerForm() {
 const initialState: CustomerState = {
  message: null,
  errors: {},
  values: {
    status: 'active',
    country: 'Bangladesh',
  },
};

  const [state, formAction] = useActionState(
    createCustomer,
    initialState
  );

  return (
    <form action={formAction} >
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Customer Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Customer Name
          </label>

          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter customer name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={state.values?.name || ''}
            />

            <UserCircleIcon
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"
            />
          </div>

          {state.errors?.name?.map((error:string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            Email Address
          </label>

          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="customer@example.com"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={state.values?.email || ''}
            />

            <EnvelopeIcon
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"
            />
          </div>

          {state.errors?.email?.map((error:string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium"
          >
            Phone Number
          </label>

          <div className="relative">
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+880 1XXXXXXXXX"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={state.values?.phone || ''}
            />

            <PhoneIcon
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"
            />
          </div>

          {state.errors?.phone?.map((error:string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        {/* Company */}
        <div className="mb-4">
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium"
          >
            Company
          </label>

          <div className="relative">
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Enter company name"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={state.values?.company || ''}
            />

            <BuildingOfficeIcon
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-medium"
          >
            Address
          </label>

          <div className="relative">
            <textarea
              id="address"
              name="address"
              rows={3}
              placeholder="Enter customer address"
              className="block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={state.values?.address || ''}
            />

            <MapPinIcon
              className="pointer-events-none absolute left-3 top-3 h-[18px] w-[18px] text-gray-500"
            />
          </div>

          {state.errors?.address?.map((error:string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        {/* City + Postal Code */}
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">

          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-medium"
            >
              City
            </label>

            <input
              id="city"
              name="city"
              type="text"
              placeholder="Dhaka"
              className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={state.values?.city || ''}
            />
          </div>

          <div>
            <label
              htmlFor="postalCode"
              className="mb-2 block text-sm font-medium"
            >
              Postal Code
            </label>

            <input
              id="postalCode"
              name="postalCode"
              type="text"
              placeholder="1207"
              className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={state.values?.postalCode || ''}
            />
          </div>

        </div>

        {/* Country */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-medium"
          >
            Country
          </label>

          <div className="relative">
            <select
              id="country"
              name="country"
             defaultValue={state.values?.country ?? ''}
              className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>

            <GlobeAltIcon
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Customer Image */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="mb-2 block text-sm font-medium"
          >
            Customer Image
          </label>

          <div className="relative">
            <input
              id="image"
              name="image"
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              className="block w-full cursor-pointer rounded-md border border-gray-200 bg-white py-2 pl-10 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-gray-100 file:px-4 file:py-1.5 file:text-sm"
            />

            <PhotoIcon
              className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"
            />
          </div>

          <p className="mt-1 text-xs text-gray-500">
            PNG, JPG, JPEG or WEBP. Maximum 2MB.
          </p>

          {state.errors?.image?.map((error:string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>

        {/* Customer Status */}
        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium">
            Customer Status
          </legend>

          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">

              <div className="flex items-center">
                <input
                  id="active"
                  name="status"
                  type="radio"
                  value="active"
                 defaultChecked={state.values?.status === 'active'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />

                <label
                  htmlFor="active"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Active
                  <CheckIcon className="h-4 w-4" />
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="inactive"
                  name="status"
                  type="radio"
                  value="inactive"
                  defaultChecked={state.values?.status === 'inactive'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />

                <label
                  htmlFor="inactive"
                  className="ml-2 cursor-pointer rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Inactive
                </label>
              </div>

            </div>
          </div>

          {state.errors?.status?.map((error:string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </fieldset>

        {/* Notes */}
        <div className="mb-4">
          <label
            htmlFor="notes"
            className="mb-2 block text-sm font-medium"
          >
            Notes
          </label>

          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Additional customer information..."
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
            defaultValue={state.values?.notes || ''}
          />
        </div>

        {/* General Error */}
        {state.message && (
          <p className="mt-2 text-sm text-red-500">
            {state.message}
          </p>
        )}

      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-4">

        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>

        <Button type="submit">
          Create Customer
        </Button>

      </div>
    </form>
  );
}



