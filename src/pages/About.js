import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {
  const [user, setUser] = useState("Nath")
if(!user){
  return <Navigate to="/" replace={true} />

  //The navigate component is used to redirect the user to a particular page based on some condition
  //In this example, we check if the user is logged in, it has a value and that value is scraped out once the user logs out
  //redirect prop helps replace the previous page in the browser's history so that the former page will not be displayed if the user ever clicks the back button on the browser
  //Note that the return keyword is necessary when carrying out this authenticattion
}

    return (
      <div className="about">
        <h2>About Us</h2>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui excepturi illum tenetur dolorum. Autem, delectus corrupti, non tempora omnis dolores officia dignissimos doloribus suscipit porro laudantium recusandae dolor enim? Ab nisi accusamus dolore, molestias porro nemo distinctio exercitationem aspernatur ex repudiandae eligendi animi aperiam harum quos et possimus, iusto saepe odio. Hic, molestiae asperiores temporibus excepturi officia eum neque corrupti adipisci, ab ex corporis quos, ducimus voluptas soluta iste sunt.</p>
      <button onClick={()=>setUser(null)}>Logout</button>
      </div>
    )
  }