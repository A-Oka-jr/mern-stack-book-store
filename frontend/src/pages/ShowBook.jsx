import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4">
          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>

          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>

          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Auther</span>
            <span>{book.auther}</span>
          </div>

          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>

          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Created Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Updated Time</span>
            <span>{new Date(book.updateAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
