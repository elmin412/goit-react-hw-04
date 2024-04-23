import { Field, Form, Formik } from "formik"
import style from "../SearchBar/SearchBar.module.css"
import toast from 'react-hot-toast';
 
export default function SearchBar({ onSubmit }) {
        return (
        <Formik
            initialValues={{ query: "" }}
            onSubmit={(values, actions) => {
                if (values.query.trim() !== "") {
                    onSubmit(values.query);
                    actions.resetForm();
                    } else {
                {toast.error("🦄 Sorry, there are no images matching your search query. 🙏Please try again!")}
                }}}>
        <Form className={style.headerSearch}>
            <Field className={style.inputSearch}
                type="text" name="query"
                autoFocus autoComplete="off"
                placeholder="Search images and photos"/>
                <button type="submit">Search</button>
            </Form>
        </Formik>
        
    )
}