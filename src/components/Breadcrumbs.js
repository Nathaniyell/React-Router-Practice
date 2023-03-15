import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })
//Splits the pathname property into two. the division is done wherever there is a forward slash
//The filter function is used to filter out any array element that is equal to an empty string




  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}
