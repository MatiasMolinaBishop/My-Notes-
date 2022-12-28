
import './Keeper.css'

function Heading(){

    let message = "TEST";
    let timeNow = new Date() // October 1st 2022 14:00
    let currentTime = timeNow.getHours()

    console.log(currentTime)

    if (currentTime < 12){
        message = "Notes this morning 👨‍💻";
    }else if(currentTime > 12 || currentTime < 18){
        message = "Notes this afternoon 👨‍💻";
    }else{
        message = "Notes this evening 👨‍💻";
    }
    return(
        <header>
        {/* <h2 className = "heading-style" style = {customStyle}>{message}</h2> THIS SHOWS HOW TO USE INLINE STYLING LEANING PURPOSES*/}
        <h1 className = "heading-style">{message}</h1>
        </header>
    )
}

export default Heading;