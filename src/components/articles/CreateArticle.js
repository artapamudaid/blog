import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const CreateArticle = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState()

    const navigate = useNavigate()

    const saveArticle = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8000/api/articles', {
            title: title,
            content: content,
            image: image
        })
        navigate('/articles')
    }

    return (
        <div>
            <form onSubmit={saveArticle}>
                <div className="field">
                    <label className="label">Gambar</label>
                    <input
                        type="file"
                        className="input"
                        onChange={(e) => setImage(e.target.files[0])}
                        placeholder="Masukkan Gambar"
                    />
                </div>
                <div className="field">
                    <label className="label">Judul</label>
                    <input
                        type="text"
                        className="input"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Masukkan Judul"
                    />
                </div>
                <div className="field">
                    <label className="label">Konten</label>
                    <textarea 
                        className="input"
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Masukkan Konten"
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Simpan</button>
                    <Link to="/articles" className="button is-default">Kembali</Link>
                </div>
            </form>
        </div>
    )
}

export default CreateArticle
