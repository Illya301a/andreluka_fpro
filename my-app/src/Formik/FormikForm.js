import "./formik-form.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function FormikForm() {
    const validateEmail = (value) => {
        if (!value) {
            return 'Поле "Електронна пошта" є обов\'язковим';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            return 'Неправильний формат електронної пошти';
        }
    };

    const validatePhone = (value) => {
        if (!value) {
            return 'Поле "Телефон" є обов\'язковим';
        } else if (!/^\d{12}$/.test(value)) {
            return 'Телефон повинен містити лише 12 цифр';
        }
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="form-container">
            <Formik
                initialValues={{ name: '', email: '', phone: '' }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="name">Ім'я:</label>
                        <Field type="text" id="name" name="name" required />
                        <ErrorMessage name="name" component="div" className="error-message" /> {/*без component не працює className error-message*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Електронна пошта:</label>
                        <Field type="text" id="email" name="email" validate={validateEmail} required />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Телефон:</label>
                        <Field type="text" id="phone" name="phone" validate={validatePhone} required />
                        <ErrorMessage name="phone" component="div" className="error-message" />
                    </div>

                    <button type="submit">Відправити</button>
                </Form>
            </Formik>
        </div>
    );
}