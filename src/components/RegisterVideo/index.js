import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)

    return {
        values,
        handleChange:(event) => {
                const value = event.target.value;
                const name = event.target.name
                setValues({
                    ...values,
                    [name]: value,
                })
        },
        clearForm(){
            setValues({})
        }
    }
}


export default function RegisterVideo() {

    const [formVisivel, setFormVisivel] = React.useState(false);
    const formCadastro = useForm({
        initialValues: {
            title: "",
            url: "",
        }
    });

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => { setFormVisivel(true) }}>
                +
            </button>
            {formVisivel ? (
                <form onSubmit={(event) => {
                    event.preventDefault();
                    console.log(formCadastro.values);
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button className="close-modal" type="button" onClick={() => { setFormVisivel(false) }}>x</button>
                        <input placeholder="Título do vídeo" name="title" value={formCadastro.values.title} onChange={formCadastro.handleChange} />
                        <input placeholder="URl" name="url" value={formCadastro.values.url} onChange={formCadastro.handleChange} />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            ) : null}

        </StyledRegisterVideo>
    )

}