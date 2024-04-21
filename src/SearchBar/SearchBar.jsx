import { Field, Form, Formik } from "formik"
import style from "../SearchBar/SearchBar.module.css"


export default function SearchBar({ onSubmit }) {
    
        return (
        <Formik
            initialValues={{ query: "" }}
            onSubmit={(values, actions) => {
            onSubmit(values.query);
                actions.resetForm();
                if (values.query.trim() === "") {
                    return alert("Please, enter text to search")
                    
                    
                   
    }
               
}}>
        <Form className={style.headerSearch}>
            <Field className={style.inputSearch}
                type="text"
                name="query"
                autoFocus
                autoComplete="off"
                placeholder="Search images and photos"/>
                <button type="submit">Search</button>
            </Form>
        </Formik>
        
    )
}