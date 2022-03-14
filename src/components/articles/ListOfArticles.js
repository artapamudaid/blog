import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListOfArticles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
      getArticles()
    }, [])

    const getArticles = async () => {
        const articles = await axios.get('http://localhost:8000/api/articles')
        const res = articles.data.data.data
        setArticles(res)
    }

    const deleteArticles = async (id) => {
        await axios.delete(`http://localhost:8000/api/articles/${id}`)
        getArticles()
    }

    return (
        <div>
            <Link to="/articles/add" className="button is-primary mt-5">Tambah Artikel</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Gambar</th>
                        <th>Judul</th>
                        <th>Konten</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    { articles.map((article, index) => (
                    <tr key={article.id}>
                        <td>{ index + 1}</td>
                        <img width="50px" src={`http://localhost:8000/storage/articles/${article.image}`} alt="Gambar" />
                        <td>{ article.title }</td>
                        <td>{ article.content }</td>
                        <td>
                            <Link to = {`/articles/edit/${article.id}`} className="button is-small is-info">Edit</Link>
                            <a onClick={() => deleteArticles(article.id)} className="button is-small is-danger">Hapus</a>
                        </td>
                    </tr>    
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListOfArticles