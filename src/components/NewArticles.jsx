import ArticleItems from "./ArticleItem";
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArticleContext } from "../contexts/article-context";


const NewArticles = ()=>{

    const {articlesData,isSelectArticle,setSelectedArticle,setIsSelectArticle}=useContext(ArticleContext)

    const handleSelectedArticle =(e)=>{
        setSelectedArticle(e);
        setIsSelectArticle(true);
        //console.log(isSelectArticle)
        //console.log(SelectedArticle)
    }


    const navigate = useNavigate();

   useEffect(() => {
        if (isSelectArticle) {
            // تغییر مسیر به مسیر دلخواه
            navigate('/read-article');
        }
    }, [isSelectArticle, navigate]); // وابستگی به myState و navigat



    return(<>
                <div >
                    <div className="text-2xl font-semibold mb-20">مقالات جدید این ماه</div>
                    


                    {articlesData.map((item, index) => (
                        <ArticleItems item={item} key={item.id} handleSelectedArticle={handleSelectedArticle}/>
                    ))}
                   
                </div>
            </>)
}
export default NewArticles;
