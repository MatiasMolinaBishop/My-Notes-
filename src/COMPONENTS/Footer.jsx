import './Keeper.css'

let date = new Date()
let todayDate = date.getFullYear()
console.log(date)
console.log(todayDate)

function Footer(){
    return(
        // <p>{date}</p>
        <footer>
        <p>Copy Right © {todayDate}</p>
        </footer>
    )
}

export default Footer