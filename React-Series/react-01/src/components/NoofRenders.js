import React,{useState,useRef} from 'react'


function NoofRenders() {
    const count = useRef(1);
    const [first, setfirst] = useState(0);
    count.current+=1;
    console.log('no of renders',count.current);
  return (
    <div>
        No of renders : {count.current}
        <button onClick={()=>setfirst(prevCount=>prevCount+1)}>Click</button>
    </div>
  )
}

export default NoofRenders