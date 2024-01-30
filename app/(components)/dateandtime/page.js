"use client"
import { useState } from "react";
export default function DateAndTime(){
    const [date,setDate] = useState("")
    return (
        <>
            <h3 style={{
                color:"slateblue",
                textAlign:"center"
            }}>Gate todays date and time</h3>
            <p>
                {date}
            </p>
        </>
    );
}