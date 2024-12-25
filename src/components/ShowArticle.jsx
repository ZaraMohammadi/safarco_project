import { ArticleProvider } from "../contexts/article-context";
import { useContext, useState } from "react";
import { ArticleContext } from "../contexts/article-context";
import { useEffect } from "react";
const ShowArticle = ({item})=>{

    const {isSelectArticle,SelectedArticle}=useContext(ArticleContext);
    //console.log(SelectedArticle);

    const [Title,setTitle] = useState('تایتل');

    useEffect(() => {
        // اینجا کد شما پس از تغییر استیت‌ها اجرا می‌شود
       
            console.log('استیت‌ها به‌روزرسانی شدند:');
            console.log('isSelectArticle:', isSelectArticle);
            console.log('selectedArticle:', SelectedArticle);
          
           
         setTitle("lalalalal")
         console.log('lalalalal');
    }, [isSelectArticle, SelectedArticle,Title]); // وابسته به استیت‌ها


    return(<>
    
        <div className="m-10">پشمممممممممممممممم</div>
        <div>{Title}</div>
        
    </>)
}
export default ShowArticle;