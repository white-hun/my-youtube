import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header>
      <Link to="/">
        <BsYoutube />
        <p>YouTube</p>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="검색" value={text} onChange={handleChange} />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
