import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticleContext =createContext();

const ArticleProvider = ({children})=>{

    const [articlesData,setArticlesData]= useState([]);
    const[isSelectArticle,setIsSelectArticle]= useState(false);
    const[SelectedArticle,setSelectedArticle]= useState([]);

 

    const fetchDataArticles = async () => {
        try {
        const response = await axios.get('https://safarico.liara.run/api/articles', {
        
        });
       // console.log(response.data)
        setArticlesData(response.data)
        
        
        
      // console.log(articlesData[0]['summery']);

       // console.log(response.data[0]['content'])
       // console.log(response.data[0]['created_at'])
       // console.log(response.data[0]['category']['name'])
       // console.log(response.data[0]['media']['file_path'])
       // const image = response.data[0]['media']['file_path'];
       // console.log('https://safarico.liara.run/storage/'+image)
       // setimgsrc('https://safarico.liara.run/storage/'+image);

        } catch (error) {
    
        console.error("Error fetching data:", error);
        console.log(error.message);
        }
        };
 
    useEffect(() => {
    
        fetchDataArticles();

    }, [articlesData]);


   

    return(
        <ArticleContext.Provider value={{articlesData,setArticlesData,isSelectArticle,setIsSelectArticle,
                                        SelectedArticle,setSelectedArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}

export {ArticleContext, ArticleProvider}