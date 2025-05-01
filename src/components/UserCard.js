

export default function UserCard({usr}){
    
    return(
        <>
            <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h1>{usr.id}</h1>
            <h2>{usr.title}</h2>
            <h3>{usr.completed}</h3>
            </div>

        </>
    )
}