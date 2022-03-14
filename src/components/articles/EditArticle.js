import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditArticle = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState()

    const navigate = useNavigate()
    const {id} = useParams()

    const updateArticle = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:8000/api/articles/${id}`, {
            title: title,
            content: content,
            image: image,
            _method: 'PUT'
        })
        navigate('/articles')
    }

    useEffect(() => {
      getArticleById()
    }, [])

    const getArticleById = async () => {
        const response = await axios.get(`http://localhost:8000/api/articles/${id}`)
        const res = response.data
        setTitle(res.data.title)
        setContent(res.data.content)
        setImage(res.data.image)
    }
    

    return (
        <div>
            <form onSubmit={updateArticle}>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Masukkan Judul"
                    />
                </div>
                <div className="field">
                    <label className="label">Konten</label>
                    <textarea
                        className="input"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Masukkan Konten"
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Update</button>
                    <Link to="/articles" className="button is-default">Kembali</Link>
                </div>
            </form>
        </div>
    )
}

export default EditArticle
