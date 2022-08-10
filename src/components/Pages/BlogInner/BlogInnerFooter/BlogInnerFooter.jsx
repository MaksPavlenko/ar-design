import React from "react";
import BlogInnerShare from "./BlogInnerShare/BlogInnerShare";
import BlogInnerPagination from "./BlogInnerPagination/BlogInnerPagination";
// import PaginationLink from "../../../UI/PaginationLink/PaginationLink";

const BlogInnerFooter = ({ dataContacts, langToggle, pageContext }) => {
  return (
    <div className="blog-inner__article-wrapper">
      <BlogInnerShare dataContacts={dataContacts} langToggle={langToggle} />
      <BlogInnerPagination
      pageContext={pageContext}
        textLeft={langToggle(
          "Попередня статтья",
          "Предыдущая статья",
          "Previous article"
        )}
        textRight={langToggle(
          "Наступна стаття",
          "Следующая статья",
          "Next article"
        )}
      /> 
       {/* <PaginationLink
        textLeft={langToggle(
          "Попередня статтья",
          "Предыдущая статья",
          "Previous article"
        )}
        textRight={langToggle(
          "Наступна стаття",
          "Следующая статья",
          "Next article"
        )}
      /> */}
    </div>
  );
};

export default BlogInnerFooter;
