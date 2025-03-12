import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from '../components/Modal';

interface AddBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddBooking: React.FC<AddBookingProps> = ({ isOpen, onClose }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('الاسم مطلوب'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'يجب أن يكون رقم هاتف صالح')
      .required('رقم الهاتف مطلوب'),
    blood: Yup.string().required('زمرة الدم مطلوبة'),
    bookingType: Yup.string().required('نوع الحجز مطلوب'),
    bookingDate: Yup.string().required('تاريخ الحجز مطلوب'),
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="إضافة حجز جديد">
      <Formik
        initialValues={{
          name: '',
          phoneNumber: '',
          blood: '',
          bookingType: 'مسبق',
          bookingDate: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Data:', values);
          onClose();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-stroke text-sm rounded-lg focus:ring-gray focus:border-gray block w-full p-2.5"
                  placeholder="أدخل اسمك"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="phoneNumber"
                  className="bg-gray-50 border border-stroke text-sm rounded-lg focus:ring-gray focus:border-gray block w-full p-2.5"
                  placeholder="أدخل رقم الهاتف"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="blood"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  زمرة الدم
                </label>
                <Field
                  type="text"
                  name="blood"
                  className="bg-gray-50 border border-stroke text-sm rounded-lg focus:ring-gray focus:border-gray block w-full p-2.5"
                  placeholder="أدخل زمرة الدم"
                />
                <ErrorMessage
                  name="blood"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="bookingType"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  نوع الحجز
                </label>
                <Field
                  as="select"
                  name="bookingType"
                  className="bg-gray-50 border border-stroke text-sm rounded-lg focus:ring-gray focus:border-gray block w-full p-2.5"
                >
                  <option value="مسبق">مسبق</option>
                  <option value="مباشر">مباشر</option>
                  <option value="حالة اسعافية">حالة اسعافية</option>
                </Field>
                <ErrorMessage
                  name="bookingType"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="bookingDate"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  تاريخ الحجز
                </label>
                <Field
                  type="datetime-local"
                  name="bookingDate"
                  className="bg-gray-50 border border-stroke text-sm rounded-lg focus:ring-gray focus:border-gray block w-full p-2.5"
                />
                <ErrorMessage
                  name="bookingDate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-stroke font-medium text-primary rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              {isSubmitting ? 'loading...' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddBooking;
