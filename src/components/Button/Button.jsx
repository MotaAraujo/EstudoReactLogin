export default function Button ({texto}) {

        function handleClick(event) {
            event.preventDefault();
            console.log("Clicou no botão");
        }



    return (
        <>
        <button onClick={handleClick}className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-800 uppercase">{texto}</button>       
        </>
    );
}
