//frontend/src/graphql/generated.ts内にある自動生成されたuseBooksQueryを使ってみましょう。
import { useBlogsQuery, useCreateBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation } from "./graphql/generated";
import { useState } from "react";



function App() {
  const { data: { blogs = [] } = {} } = useBlogsQuery();
  const [createBlog] = useCreateBlogMutation({ refetchQueries: ["blogs"] });
  const [title, setTitle] = useState("");
  const [deleteBlog] = useDeleteBlogMutation({ refetchQueries: ["blogs"] });
  const [updateBlog] = useUpdateBlogMutation();

  return (
    <div style={{ width: "400px", margin: " 40px auto" }}>
    <h1>書籍一覧</h1>
    <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
     <button
       onClick={() => {
         createBlog({ variables: { params: { title: title } } });
         setTitle("");
       }}
     >
       保存
     </button>
     </div>
     </div>
      {blogs.map((blog: any) => (
        // <div key={blog.id}>{blog.title}</div>
        <div key={blog.id}
        style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
        >
          {/* <div>{blog.title}</div> */}
          <input
           value={blog.title || ""}
           onChange={(e) =>
             updateBlog({
               variables: { id: blog.id, params: { title: e.target.value } },
             })
           }
         />
          <button onClick={() => deleteBlog({ variables: { id: blog.id } })}>
            削除
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;

//useCreateBookMutation({ refetchQueries: ["books"] });という箇所で使っているrefetchQueriesオプションでは、mutation完了後に実行したいqueryを指定することができます。なぜbooksクエリを指定しているかというと、追加した書籍のデータを画面に表示させるためです。refetchQueriesオプションを使わずに直接キャッシュを更新する方法もありますが、コードが長くなるため今回はrefetchQueriesを使うようにします。