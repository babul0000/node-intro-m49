

const UsersPage = async() => {

    const res = await fetch('http://localhost:8000/users');
    const data = await res.json();
    console.log(data);
    
    return (
        <div>
            <h2>{data.length}</h2>
            <div className="grid grid-cols-3 gap-5 ">
                {
                    data.map(d => <div key={d.id} className="border-2 p-4 rounded-md">
                    <h1>{d.name}</h1>
                    <h1>{d.email}</h1>

                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;