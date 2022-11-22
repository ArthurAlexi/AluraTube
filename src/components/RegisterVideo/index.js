import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from '@supabase/supabase-js'

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

// function getVideoId(url){
//     const videoId = url.split("v=")[1];
//     const ampersandPosition = videoId.indexOf("&");
//     if(ampersandPosition !== -1){
//         return videoId.substring(0,ampersandPosition)
//     }
//     return videoId
// }

function getThumbnail(url){
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}


// Create a single supabase client for interacting with your database
const PROJECT_URL = 'https://drjntyswqrfqxzmbomgh.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyam50eXN3cXJmcXh6bWJvbWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzM4NjEsImV4cCI6MTk4Mzc0OTg2MX0.g97tTGb71dkXex8T9dh4GAn5q5RBS5rrUvoDAbKm3ek';
const supabase = createClient(PROJECT_URL, API_KEY)

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
                    // console.log(formCadastro.values);

                    //Contrato front com back
                    supabase.from('Video').insert({
                        title : formCadastro.values.title,
                        url : formCadastro.values.url,
                        thumb : getThumbnail(formCadastro.values.url),
                        playlist : "Hack",
                    })
                    .then((res)=>{
                        console.log(res)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
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